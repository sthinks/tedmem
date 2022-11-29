<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;
use App\Models\Write;
use App\Models\Publication;
use App\Models\Bulten;
use TCG\Voyager\Models\Category;
use TCG\Voyager\Models\Post;
use TCG\Voyager\Models\User;



class HomeController extends Controller
{
    public function getSlider(){

        $data = Slider::all();
        $data->map(function($item){
            $item->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $item->image)
                )
            );
        });

        return response()->json($data);
    }
    public function getLatestWrites(){

        $data = Write::latest()->take(2)->get();
        $data->map(function($item){
            $item->category_info = Category::where('id',$item->category_id)->first();
            $item->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $item->image)
                )
            );
        });

        return response()->json($data);
    }
    public function getLatestPublics(){

        $data = Publication::orderBy('publish_year', 'DESC')->take(2)->get();

        $data->map(function($item){
            $item->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $item->image)
                )
            );
        });

        return response()->json($data);
    }
    public function getLatestBulten(){

        $data = Bulten::orderBy('date', 'DESC')->take(4)->get();

        $data->map(function($item){
            $pdf_files = json_decode($item->file);
            $item->pdf_link = array_map(function ($file) {
                return url(
                    sprintf(
                        "storage/%s",
                        str_replace('\\', '/', $file->download_link)
                    )
                );
            }, $pdf_files);
            $item->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $item->image)
                )
            );
        });

        return response()->json($data);
    }
    public function getBultens(){

        $data = Bulten::orderBy('date', 'DESC')->get();

        $data->map(function($item){
            $pdf_files = json_decode($item->file);
            $item->pdf_link = array_map(function ($file) {
                return url(
                    sprintf(
                        "storage/%s",
                        str_replace('\\', '/', $file->download_link)
                    )
                );
            }, $pdf_files);
            $item->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $item->image)
                )
            );
        });

        return response()->json($data);
    }
}
