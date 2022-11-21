<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Write;
use TCG\Voyager\Models\Category;


class WritesController extends Controller
{
    public function getWrites(String $slug){
        $category = Category::where('slug', $slug)->first();
        if(!$category) {
            return response()->json(['msg' => 'Kategori bulunamadı', 404]);
        }
        $data = Write::where('category_id' , $category->id)->orderBy('year', 'DESC')->paginate(12);
        $data->map(function($item){
            $item->image = url(
                sprintf(
                    "storagem/%s",
                    str_replace('\\', '/', $item->image)
                )
            );
        });

        return response()->json($data);
    }
    public function getWritesDetails(string $slug){
        $write = Write::where('slug', $slug)->first();
        if(!$write) {
            return response()->json(['message' => 'not found'], 404);
        }
        $write->category = Category::where('id', $write->id)->first();
        $pdf_files = json_decode($write->file);
        $write->pdf_link = array_map(function ($file) {
            return url(
                sprintf(
                    "storagem/%s",
                    str_replace('\\', '/', $file->download_link)
                )
            );
        }, $pdf_files);
        $write->image = url(
                sprintf(
                    "storagem/%s",
                    str_replace('\\', '/', $write->image)
                )
            );

        return response()->json($write);
    }
}
