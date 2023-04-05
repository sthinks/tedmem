<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TCG\Voyager\Models\Post;
use TCG\Voyager\Models\User;
use App\Models\Publication;
use App\Models\PublicCategory;
use App\Models\Person;

class BlogController extends Controller
{
    //Yayınlar
    public function getPublics()
    {
        $data = Publication::all();
        $data->map(function ($item) {
            $item->category_info = PublicCategory::where(
                'id',
                $item->category_id
            )->first();
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
        $category = PublicCategory::where('slug', $slug)->first();
        if (!$category) {
            return response()->json(['msg' => 'Kategori bulunamadı', 404]);
        }

        $data = Publication::where('category_id', $category->id)
            ->orderBy('publish_year', 'DESC')
            ->get();

        $data->map(function ($item) {
            $item->category_info = PublicCategory::where(
                'id',
                $item->category_id
            )->first();
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
        $data->category_info = PublicCategory::where(
            'id',
            $data->category_id
        )->first();
        $data->pdf_link = array_map(function ($file) {
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
        // if ($data->infografik != null || !is_array($data->infografik)) {
        //     $info = json_decode($data->infografik, true);
        //     $data->infografik = asset(
        //         sprintf(
        //             'storage/%s',
        //             str_replace('\\', '/', $info[0]['download_link'])
        //         )
        //     );
        // } else {
        //     $data->infografik = 'no data';
        // }
        $info = $data->infografik;
        if ($info == '[]') {
            $data->infografik = 'no data';
        } elseif (is_null($info)) {
            $data->infografik = 'no data';
        } else {
            $info = json_decode($data->infografik, true);
            $data->infografik = asset(
                sprintf(
                    'storage/%s',
                    str_replace('\\', '/', $info[0]['download_link'])
                )
            );
        }
        $data->image = url(
            sprintf('storage/%s', str_replace('\\', '/', $data->image))
        );

        return response()->json($data);
    }
}
