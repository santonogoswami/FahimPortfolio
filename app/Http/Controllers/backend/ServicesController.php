<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Services;
class ServicesController extends Controller
{
     //index Method__//
     public function index(){
        $data = Services::all();
        return view('backend.services.index', compact('data'));
    }
    //__create Method__//
public function create(){
    return view('backend.services.create');
}

//__Store Method__//
public function store(Request $request){
    $request->validate([
        'icon' => 'required',
        'services' => 'required',
        'description' => 'required',
    ]);
    $Services=new Services;
    $Services->icon = $request->icon;
    $Services->services = $request->services;
    $Services->description = $request->description;
    $Services->save();
    return redirect()->back();
  }
  //__ Edit Method__//
public function edit($id){
    $data=Services::find($id);
    return view('backend.services.edit', compact('data'));
    }
    //__Update Method__//
public function update(Request $request,$id){
    $request->validate([
        'icon' => 'required',
        'services' => 'required',
        'description' => 'required',
    ]);
    $Services=Services::find($id);
    $Services->icon = $request->icon;
    $Services->services = $request->services;
    $Services->description = $request->description;
    $Services->save();
    return redirect()->back();
  }
   //__Delete Method__//
   public function destroy($id)
   {
    Services::destroy($id);
       return redirect()->back();
   }
}
