<?php

namespace App\Http\Controllers\backend;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\effect;
class EffectController extends Controller
{
     //index Method__//
     public function index(){
        $data = effect::all();
        return view('backend.effect.index', compact('data'));
    }
    //__create Method__//
public function create(){
    return view('backend.effect.create');
}

//__Store Method__//
public function store(Request $request){
    $request->validate([
        'name' => 'required',
        'skill1' => 'required',
        'skill2' => 'required',
        'skill3' => 'required',
          'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:1024',
    ]);
    $effect=new effect;
    $effect->name = $request->name;
    $effect->skill1 = $request->skill1;
    $effect->skill2 = $request->skill2;
    $effect->skill3 = $request->skill3;

    // image code start
    $image= time().'.'. $request->image->extension();
    $request->image->move(public_path('effect'), $image);
    $path = "/effect/".$image;
    $effect->image = $path;
    // image code End
    $effect->save();
    return redirect()->back();
  }
  //__ Edit Method__//
public function edit($id){
    $data=effect::find($id);
    return view('backend.effect.edit', compact('data'));
    }
    //__Update Method__//
public function update(Request $request,$id){
    $request->validate([
        'name' => 'required',
         'skill1' => 'required',
        'skill2' => 'required',
        'skill3' => 'required',
          'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:1024',
    ]);
    $effect=effect::find($id);
    $effect->name = $request->name;
    $effect->skill1 = $request->skill1;
    $effect->skill2 = $request->skill2;
    $effect->skill3 = $request->skill3;
     // image code start
    $image= time().'.'. $request->image->extension();
    $request->image->move(public_path('effect'), $image);
    $path = "/effect/".$image;
    $effect->image = $path;
    // image code End
    $effect->save();
    return redirect()->back();
  }
   //__Delete Method__//
   public function destroy($id)
   {
    effect::destroy($id);
       return redirect()->back();
   }
}
