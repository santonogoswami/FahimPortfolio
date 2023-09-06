@extends('layouts.app')

@section('main-content')

<div class="container">
    <h2>Edit your Work</h2>
    <form action="{{route('backend.work.update', $data->id)}}" method="post" enctype="multipart/form-data">
        @csrf
      <div class="form-group">
        <label for="image">image:</label>
        <input type="file" class="form-control" id="image" value="{{$data->image}}"  placeholder="Enter image" name="image">
        @if ($errors->has('image'))
        <span class="error">{{ $errors->first('image') }}</span>
    @endif

      </div>
      <div class="form-group">
        <label for="work_name">work_name:</label>
        <input type="text" class="form-control" id="work_name" value="{{$data->work_name}}"  placeholder="work_name" name="work_name">
        @if ($errors->has('work_name'))
        <span class="error">{{ $errors->first('work_name') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="link">link:</label>
        <input type="text" class="form-control" id="link" value="{{$data->link}}"  placeholder="link" name="link">
        @if ($errors->has('link'))
        <span class="error">{{ $errors->first('link') }}</span>
    @endif
      </div>
      
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>


@endsection
