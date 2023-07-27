<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PublicCategory;
use App\Models\EventsCategory;
use App\Models\Categories;

class CategoryController extends Controller
{
    //Yayınlar
    public function getPublicCategory()
    {
        $data = PublicCategory::orderBy('order','ASC')->get();
        return response()->json($data);
    }
    //Etkinlikler
    public function getEventCategory()
    {
        $data = EventsCategory::orderBy('order','ASC')->get();
        return response()->json($data);
    }
    public function getWriteCategory()
    {
        $data = Categories::orderBy('order','ASC')->get();
        return response()->json($data);
    }
}
