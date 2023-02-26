<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Writetag;
use App\Models\Tag;
use App\Models\Event;
use App\Models\Write;

class TagWriteController extends Controller
{
    public function getAllTag()
    {
        $data = Tag::all();
        return response()->json($data);
    }
    public function getAllTagPivot()
    {
        $data = Writetag::all();
        return response()->json($data);
    }
    public function getAllTagWrite()
    {
        $data = Writetag::where('write_id')->get();
        return response()->json($data);
    }
    public function getAllTagEvent()
    {
        $data = Writetag::where('event_id')->get();
        return response()->json($data);
    }
    public function getAllTagWriteSlug(string $slug)
    {
        $tag = Tag::where('slug', $slug)->first();
        $data = Writetag::where('tag_id', $tag->id)
            ->whereNotNull('write_id')
            ->get();
        $writeList = Write::whereIn('id', $data->pluck('write_id'))->get();
        $writeList->map(function ($item) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });
        return response()->json($writeList);
    }
    public function getAllTagEventSlug(string $slug)
    {
        $tag = Tag::where('slug', $slug)->first();
        $data = Writetag::where('tag_id', $tag->id)
            ->whereNotNull('event_id')
            ->get();
        $eventList = Event::whereIn('id', $data->pluck('event_id'))->get();
        $eventList->map(function ($item) {
            $item->image = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });

        return response()->json($eventList);
    }
}
