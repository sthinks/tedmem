<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use App\Models\EventsCategory;


class Event extends Model
{
    use Searchable;

    public function toSearchableArray()
    {
        return [
            'content' => $this->content,
            'title' => $this->title,
        ];
    }
    
}
