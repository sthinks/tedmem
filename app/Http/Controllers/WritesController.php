<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Write;
use App\Models\Event;
use App\Models\Publication;
use App\Models\Bulten;
use TCG\Voyager\Models\Category;
use App\Models\WriteTag;
use App\Models\Tag;

class WritesController extends Controller
{
    public function getAllWrites()
    {
        $data = Write::orderBy('created_at','DESC')->get();
        $data->map(function ($item) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
            $item->image2 = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image2))
            );
        });

        return response()->json($data);
    }
    public function getHomeWrite()
    {
        $data = Write::where('homepage', 1)->first();
        $data2 = Publication::where('homepage',1)->first();
        $data3 = Event::where('homepage',1)->first();
        $data4 = Bulten::where('homepage',1)->first();

       
        if($data->image)
        {
            $data->image = asset(
            sprintf('storage/%s', str_replace('\\', '/', $data->image))
            );
        }
        if($data->image2)
        {
            $data->image2 = asset(
                sprintf('storage/%s', str_replace('\\', '/', $data->image2))
            );
        }
        if($data2 != null)
        {
            if($data2->image)
            {
                $data2->image = asset(
                    sprintf('storage/%s', str_replace('\\', '/', $data2->image))
                );
            }
        }
        
        if($data3 != null)
        {
            if($data3->image)
            {
                $data3->image = asset(
                    sprintf('storage/%s', str_replace('\\', '/', $data3->image))
                );
            }
        }
        if($data4 != null)
        {
            if($data4->image)
            {
                $data4->image = asset(
                    sprintf('storage/%s', str_replace('\\', '/', $data4->image))
                );
            }
        }
        
       
       
        $combinedData = array(
            'write' => $data,
            'publication' => $data2,
            'event' => $data3,
            'bulten' => $data4
        );
        return response()->json($combinedData);
    }
    public function getWrites(string $slug)
    {
        
       
        $category = Category::where('slug', $slug)->orderBy('created_at','DESC')->first();
        if (!$category && $slug != 'undefined') {
            return response()->json(['msg' => 'Kategori bulunamadı', 404]);
        }
        if($slug == 'undefined')
        {
            $data = Write::orderBy('created_at', 'DESC')->get();
           
        }else{
            $data = Write::where('category_id', $category->id)
            ->orderBy('created_at', 'DESC')
            ->get();
        }
        
        $data->map(function ($item) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });

        return response()->json($data);
    }

    public function getWritesDetails(string $slug)
    {
        $write = Write::where('slug', $slug)->first();
        if (!$write) {
            return response()->json(['message' => 'not found'], 404);
        }
        $write->category = Category::where('id', $write->id)->first();
        
        $pdf_files = json_decode($write->file);
        $write->file = $pdf_files;
       
        if(count($pdf_files) != 0)
        {
            
            $write->file = array_map(function ($file) {
                $a = asset(
                    sprintf(
                        'storage/%s',
                        str_replace('\\', '/', $file->download_link)
                    )
                );
                $b = str_replace('\\', '/', $file->original_name);
                $all = [$a, $b];

                return $all;
            }, $write->file);
        }else{
            $write->file = null;
        }
        

        if($write->image != null)
        {
            $write->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $write->image))
            );
        }

        if($write->image2 != null)
        {
            $write->image2 = asset(
                sprintf('storage/%s', str_replace('\\', '/', $write->image2))
            );
        }
        

        $tagWrite = WriteTag::where('write_id', $write->id)->get();
        $tagData = [];
        $tagAll = Tag::all();
        for ($i = 0; $i < $tagWrite->count(); $i++) {
            for ($j = 0; $j < $tagAll->count(); $j++) {
                $new = $tagAll[$j]->id;
                if ($new == $tagWrite[$i]->tag_id) {
                    array_push($tagData, $tagAll[$j]);
                }
            }
        }
        $write->tag = $tagData;
        return response()->json($write);
    }
}
