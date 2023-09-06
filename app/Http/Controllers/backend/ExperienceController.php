<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Experience;
class ExperienceController extends Controller
{
 //index Method__//
     public function index(){
        $data = Experience::all();
        return view('backend.Experience.index', compact('data'));
    }
    //__create Method__//
public function create(){
    return view('backend.Experience.create');
}

//__Store Method__//
public function store(Request $request){
    $request->validate([
        'time' => 'required',
        'position' => 'required',
        'company' => 'required',
        'details' => 'required',
        
    ]);
    $Experience=new Experience;
    $Experience->time = $request->time;
    $Experience->position = $request->position;
    $Experience->company = $request->company;
    $Experience->details = $request->details;
    $Experience->save();
    return redirect()->back();
  }
  //__ Edit Method__//
public function edit($id){
    $data=Experience::find($id);
    return view('backend.Experience.edit', compact('data'));
    }
    //__Update Method__//
public function update(Request $request,$id){
    $request->validate([
        'time' => 'required',
        'position' => 'required',
        'company' => 'required',
        'details' => 'required',
        
    ]);
    $Experience=Experience::find($id);
    $Experience->time = $request->time;
    $Experience->position = $request->position;
    $Experience->company = $request->company;
    $Experience->details = $request->details;
    $Experience->save();
    return redirect()->back();
  }
   //__Delete Method__//
   public function destroy($id)
   {
    Experience::destroy($id);
       return redirect()->back();
   }
}
