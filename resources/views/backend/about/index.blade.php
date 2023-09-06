@extends('layouts.app')

@section('main-content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
               <a href="{{url('backend/about/create')}}"> Add</a>
                   <br>
              <table class="table table-responsive">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>link1</th>
                        <th>link2</th>
                        <th>link3</th>
                        <th>link4</th>
                        <th>link5</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach ($data as $d)
                     <tr>
                         <td>{{$d->id}}</td>
                         <td><img src="{{asset($d->image)}}" alt="" width="100px" height="100px"></td>
                         <td>{{$d->link1}}</td>
                         <td>{{$d->link2}}</td>
                         <td>{{$d->link3}}</td>
                         <td>{{$d->link4}}</td>
                         <td>{{$d->link5}}</td>
                        <td><a href="{{ route('backend.about.edit',$d->id)}}" class="btm btn-sm btn-info">edit</a> </td> 
                        <td>    <a href="{{ route('backend.about.delete',$d->id)}}" onclick="return confirm('Are you sure you want to delete this item?');" class="btm btn-sm btn-danger delete">delete</a>
                        </td>

                     </tr>
                     @endforeach
                 </tbody>
              </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection