<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Write;
use TCG\Voyager\Models\Category;

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
            ->paginate(12);
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
            return asset(
                sprintf(
                    'storage/%s',
                    str_replace('\\', '/', $file->download_link)
                )
            );
        }, $pdf_files);
        $write->image = asset(
            sprintf('storage/%s', str_replace('\\', '/', $write->image))
        );

        return response()->json($write);
    }
}
