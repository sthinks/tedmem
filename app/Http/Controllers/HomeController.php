<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;
use App\Models\Write;
use App\Models\Event;
use App\Models\Publication;
use App\Models\Bulten;
use App\Models\About;
use App\Models\Tweet;
use TCG\Voyager\Models\Category;
use TCG\Voyager\Models\Post;
use TCG\Voyager\Models\User;
use Illuminate\Pagination\Paginator;
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
        $searchTerm = htmlentities($query);
        $dataPublic = Publication::search($searchTerm)->get();
        $dataEvent = Event::search($searchTerm)->get();
        $dataWrite = Write::search($searchTerm)->get();
        $data = $dataEvent->merge($dataPublic)->merge($dataWrite);
        return response()->json($data);
    }
    public function getSearchDataElasticPage($query)
    {
        $searchTerm = htmlentities($query);
        $dataPublic = Publication::search($searchTerm)->get();
        $dataPublic->map(function ($item) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });
        $dataEvent = Event::search($searchTerm)->get();
        $dataEvent->map(function ($item) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });
        $dataWrite = Write::search($searchTerm)->get();
        $dataWrite->map(function ($item) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });
        $data = $dataEvent->merge($dataPublic)->merge($dataWrite);
        return response()->json($data);
    }
    public function getTweet()
    {
        $data = Tweet::orderBy('order', 'asc')->take(3)->get();
        return response()->json($data);
    }
    public function getCorporate()
    {
        $data = About::get();
        $data = $data[0];
        $data->goal_image = url(sprintf('storage/%s',str_replace('\\','/',$data->goal_image)));
        $data->who_image = url(sprintf('storage/%s',str_replace('\\','/',$data->who_image)));
        $data->mem_image = url(sprintf('storage/%s',str_replace('\\','/',$data->mem_image)));
        $data->road_image = url(sprintf('storage/%s',str_replace('\\','/',$data->road_image)));
        return response()->json($data);
    }
}
