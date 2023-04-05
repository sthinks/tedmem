<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Publication extends Model
{
    use Searchable;
    protected $guarded = [];
    public function toSearchableArray()
    {
        return [
            'content' => $this->content,
            'title' => $this->title,
        ];
    }
}
