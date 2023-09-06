@extends('layouts.app')

@section('main-content')

<div class="container">
    <h2>Create your Testimonial</h2>
    <form action="{{route('backend.Testimonial.store')}}" method="post" enctype="multipart/form-data">
        @csrf
       <div class="form-group">
        <label for="description">description:</label>
        <input type="text" class="form-control" id="description"  placeholder="description" name="description">
        @if ($errors->has('description'))
        <span class="error">{{ $errors->first('description') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="image">image:</label>
        <input type="file" class="form-control" id="image"  placeholder="Enter image" name="image">
        @if ($errors->has('image'))
        <span class="error">{{ $errors->first('image') }}</span>
    @endif

      </div>
      <div class="form-group">
        <label for="name">name:</label>
        <input type="text" class="form-control" id="name"  placeholder="name" name="name">
        @if ($errors->has('name'))
        <span class="error">{{ $errors->first('name') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="designation">designation:</label>
        <input type="text" class="form-control" id="designation"  placeholder="designation" name="designation">
        @if ($errors->has('designation'))
        <span class="error">{{ $errors->first('designation') }}</span>
    @endif
      </div>
      
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>


@endsection
