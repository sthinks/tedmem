<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;
use App\Models\Write;
use App\Models\Event;
use App\Models\Publication;
use App\Models\Bulten;
use TCG\Voyager\Models\Category;
use TCG\Voyager\Models\Post;
use TCG\Voyager\Models\User;

class HomeController extends Controller
{
    public function getSlider()
    {
        $data = Slider::all();
        $data->map(function ($item) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });

        return response()->json($data);
    }
    public function getLatestWrites()
    {
        $data = Write::orderBy('created_at', 'DESC')
            ->take(4)
            ->get();
        $data->map(function ($item) {
            $item->category_info = Category::where(
                'id',
                $item->category_id
            )->first();
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });

        return response()->json($data);
    }
    public function getLatestPublics()
    {
        $data = Publication::orderBy('publish_year', 'DESC')
            ->take(4)
            ->get();

        $data->map(function ($item) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
            $item->category_info = Category::where(
                'id',
                $item->category_id
            )->first();
        });

        return response()->json($data);
    }
    public function getLatestBulten()
    {
        $data = Bulten::orderBy('year', 'DESC')
            ->take(4)
            ->get();

        $data->map(function ($item) {
            $pdf_files = json_decode($item->file);
            $item->pdf_link = array_map(function ($file) {
                return asset(
                    sprintf(
                        'storage/%s',
                        str_replace('\\', '/', $file->download_link)
                    )
                );
            }, $pdf_files);
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });
        return response()->json($data);
    }
    public function getBultens()
    {
        $data = Bulten::orderBy('year', 'DESC')->get();

        $data->map(function ($item) {
            $pdf_files = json_decode($item->file);
            $item->pdf_link = array_map(function ($file) {
                return asset(
                    sprintf(
                        'storage/%s',
                        str_replace('\\', '/', $file->download_link)
                    )
                );
            }, $pdf_files);
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });

        return response()->json($data);
    }
    public function getSearchPublicData()
    {
        $data = Publication::orderBy('publish_year', 'DESC')->get();

        $data->map(function ($item) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });

        return response()->json($data);
    }
    public function getSearchWriteData()
    {
        $data = Write::latest()->get();
        $data->map(function ($item) {
            $item->category_info = Category::where(
                'id',
                $item->category_id
            )->first();
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });

        return response()->json($data);
    }
    public function getSearchWriteDataElastic($query)
    {
        $data = Write::search($query)->get();
        return response()->json($data);
    }
    public function getSearchPublicDataElastic($query)
    {
        $data = Publication::search($query)->get();

        return response()->json($data);
    }
    public function getSearchDataElastic($query)
    {
        $dataPublic = Publication::search($query)->get();
        $dataEvent = Event::search($query)->get();
        $dataWrite = Write::search($query)->get();
        $data = $dataEvent->merge($dataPublic)->merge($dataWrite);
        return response()->json($data);
    }
}
