<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Client;
use App\Http\Resources\Client as ClientResource;
use App\Http\Resources\ClientCollection;


class ClientController extends Controller
{
    public function index()
    {
        return new ClientCollection(Client::all());
    }
    public function show($id)
    {
        return new ClientResource(Client::findOrFail($id));
    }
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required',
            'prenon' => 'required',
            'email' => 'required',
            

        ]);

        $client = Client::create($request->all());

        return (new ClientResource($client))
                ->response()
                ->setStatusCode(201);
    }
    public function delete($id)
    {
        $client = Client::findOrFail($id);
        $client->delete();

        return response()->json(null, 204);
    }
    public function edit($id,Request $request)
    {
        $client = Client::findOrFail($id);
        $request->validate([
            'nom' => 'required',
            'prenon' => 'required',
            'email' => 'required',
            

        ]);
        $input = $request->all();

        $client->fill($input)->save();
    return  (new ClientResource($client))
            ->response()
            ->setStatusCode(201);
    }
}
