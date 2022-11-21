<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function store(Request $req){
        try {
            $data = $req->validate([
                'name' => 'required|max:255',
                'mail' => 'required|max:255|email',
                'subject' => 'required|max:255|',
                'message' => 'required|max:1000',
            ]);
            $data["ip"] = $req->ip();
            $contact = Contact::create($data);
            return response()->json($contact->makeHidden(['id','created_at','updated_at', 'ip']), 201);
        } catch(\Exception $e) {
            return response()->json($e->getMessage(), 400);
        }
    }
}
