<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TCG\Voyager\Models\Page;
use App\Models\Event;
use App\Models\EventsCategory;
use App\Models\Personnel;
use App\Models\WriteTag;
use App\Models\Tag;
class EventController extends Controller
{
    public function getEvents()
    {
        $data = Event::orderBy('date','DESC')->get();
        $category = EventsCategory::all();
        
        $data->map(function ($item) use ($category) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
           
            for ($i = 0; $i < count($category); $i++) { 
                if ($item->category_id == $category[$i]->id) {
                    $item->category = $category[$i];
                }
            }
        });
        return response()->json($data->makeHidden(['id']));
    }
    public function getEventsSlugged(string $slug)
    {
        $category = EventsCategory::where('slug', $slug)->first();
       
        if (!$category) {
            return response()->json(['msg' => 'Kategori bulunamadı', 404]);
        }

        $data = Event::orderBy('date','DESC')->where('category_id', $category->id)->get();

        $data->map(function ($item) use ($category) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            ); 
            $item->category = $category;
        });
        return response()->json($data);
    }
    public function getEventDetails(string $slug)
    {
        $data = Event::where('slug', $slug)->first();
        $data->image = asset(
            sprintf('storage/%s', str_replace('\\', '/', $data->image))
        );
       
        if($data->pdf != null)
        {
            $pdf = json_decode($data->pdf);
            $pdf = array_map(function ($file) {
                $a = asset(
                    sprintf(
                        'storage/%s',
                        str_replace('\\', '/', $file->download_link)
                    )
                );
                $b = str_replace('\\', '/', $file->original_name);
                $all = [$a, $b];

                return $all;
            }, $pdf);
            
            
            $data->pdf = $pdf;
        }else{
            $data->pdf = null;
        }
      
        $tagWrite = WriteTag::where('event_id', $data->id)->get();
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
        $data->tag = $tagData;

        return response()->json($data);
    }
    //Kurumsal
    public function getAbout()
    {
        $data = Page::all();

        return response()->json($data);
    }
    public function getKadro()
    {
        $data = Personnel::all();
        $data->map(function ($item) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });
        return response()->json($data);
    }
    public function getKadroSlug($slug)
    {
        $data = Personnel::where('slug', $slug)->firstOrFail();

        $data->image = asset(
            sprintf('storage/%s', str_replace('\\', '/', $data->image))
        );

        return response()->json($data);
    }
}
