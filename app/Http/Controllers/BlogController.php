<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TCG\Voyager\Models\Post;
use TCG\Voyager\Models\User;
use App\Models\Publication;
use App\Models\Person;

class BlogController extends Controller
{
    //Yayınlar
    public function getPublics()
    {
        $data = Publication::paginate(9);
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
    public function getPublicsSlugged(string $slug)
    {
        $data = Publication::where('category_slug', $slug)
            ->orderBy('publish_year', 'DESC')
            ->paginate(9);

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

    public function getPublicsDetails($slug)
    {
        $data = Publication::where('slug', $slug)->firstOrFail();

        $pdf_files = json_decode($data->file);
        $data->pdf_link = array_map(function ($file) {
            return asset(
                sprintf(
                    'storage/%s',
                    str_replace('\\', '/', $file->download_link)
                )
            );
        }, $pdf_files);
        $data->image = url(
            sprintf('storage/%s', str_replace('\\', '/', $data->image))
        );

        return response()->json($data);
    }
}
