<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Write extends Model
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
