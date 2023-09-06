@extends('layouts.app')

@section('main-content')

<div class="container">
    <h2>-----</h2>
    <form action="{{route('backend.about.update', $data->id)}}" method="post" enctype="multipart/form-data">
        @csrf
      <div class="form-group">
        <label for="image">image:</label>
        <input type="file" class="form-control" id="image" value="{{$data->image}}"  placeholder="Enter image" name="image">
        @if ($errors->has('image'))
        <span class="error">{{ $errors->first('image') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="link1">link1:</label>
        <input type="link" class="form-control" id="link1" value="{{$data->link1}}"  placeholder="link1" name="link1">
        @if ($errors->has('link1'))
        <span class="error">{{ $errors->first('link1') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="link2">link2:</label>
        <input type="link" class="form-control" id="link2" value="{{$data->link2}}"  placeholder="link2" name="link2">
        @if ($errors->has('link2'))
        <span class="error">{{ $errors->first('link2') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="link3">link3:</label>
        <input type="link" class="form-control" id="link3" value="{{$data->link3}}"  placeholder="link3" name="link3">
        @if ($errors->has('link3'))
        <span class="error">{{ $errors->first('link3') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="link4">link4:</label>
        <input type="link" class="form-control" id="link4" value="{{$data->link4}}"  placeholder="link4" name="link4">
        @if ($errors->has('link4'))
        <span class="error">{{ $errors->first('link4') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="link5">link5:</label>
        <input type="link" class="form-control" id="link5" value="{{$data->link5}}"  placeholder="link5" name="link5">
        @if ($errors->has('link5'))
        <span class="error">{{ $errors->first('link5') }}</span>
    @endif
      </div>

      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>


@endsection
