<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Write;
use TCG\Voyager\Models\Category;
use App\Models\WriteTag;
use App\Models\Tag;

class WritesController extends Controller
{
    public function getAllWrites()
    {
        $data = Write::all();
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
    public function getWrites(string $slug)
    {
        $category = Category::where('slug', $slug)->first();
        if (!$category) {
            return response()->json(['msg' => 'Kategori bulunamadı', 404]);
        }
        $data = Write::where('category_id', $category->id)
            ->orderBy('year', 'DESC')
            ->get();
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
        $write->pdf_link = array_map(function ($file) {
            $a = asset(
                sprintf(
                    'storage/%s',
                    str_replace('\\', '/', $file->download_link)
                )
            );
            $b = str_replace('\\', '/', $file->original_name);
            $all = [$a, $b];

            return $all;
        }, $pdf_files);

        $write->image = asset(
            sprintf('storage/%s', str_replace('\\', '/', $write->image))
        );

        $tagWrite = WriteTag::where('write_id', $write->id)->get();
        $tagData = [];
        $tagAll = Tag::all();
        for ($i = 0; $i < $tagWrite->count(); $i++) {
            for ($j = 0; $j < $tagWrite->count(); $j++) {
                $new = $tagAll[$j]->id;
                if ($new == $tagWrite[$i]->tag_id) {
                    array_push($tagData, $tagAll[$new]);
                }
            }
        }
        $write->tag = $tagData;
        return response()->json($write);
    }
}
