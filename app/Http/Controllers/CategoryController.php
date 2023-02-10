<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PublicCategory;
use App\Models\EventsCategory;

class CategoryController extends Controller
{
    //Yayınlar
    public function getPublicCategory()
    {
        $data = PublicCategory::all();
        return response()->json($data);
    }
    //Etkinlikler
    public function getEventCategory()
    {
        $data = EventsCategory::all();
        return response()->json($data);
    }
}
