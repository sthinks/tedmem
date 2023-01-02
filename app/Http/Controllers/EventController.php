<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TCG\Voyager\Models\Page;
use App\Models\Event;
use App\Models\Person;

class EventController extends Controller
{
    public function getEvents()
    {
        $data = Event::all();
        $data->map(function ($item) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });
        return response()->json($data->makeHidden(['id']));
    }
    public function getEventDetails(string $slug)
    {
        $data = Event::where('slug', $slug)->first();
        $data->image = asset(
            sprintf('storage/%s', str_replace('\\', '/', $data->image))
        );

        return response()->json($data);
    }
    //Kurumsal
    public function getAbout()
    {
        $data = Page::all();

        return response()->json($data);
    }
    public function getKadro()
    {
        $data = Person::all();
        $data->map(function ($item) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });
        return response()->json($data);
    }
}
