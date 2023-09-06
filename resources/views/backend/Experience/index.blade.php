@extends('layouts.app')

@section('main-content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
               <a href="{{url('backend/Experience/create')}}"> Add</a>
                   <br>
              <table class="table table-responsive">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>time</th>
                        <th>position</th>
                        <th>company</th>
                        <th>details</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach ($data as $d)
                     <tr>
                         <td>{{$d->id}}</td>
                         <td>{{$d->time}}</td>
                         <td>{{$d->position}}</td>
                         <td>{{$d->company}}</td>
                         <td>{{$d->details}}</td>
                         
                        <td><a href="{{ route('backend.Experience.edit',$d->id)}}" class="btm btn-sm btn-info">edit</a> </td> 
                        <td>    <a href="{{ route('backend.Experience.delete',$d->id)}}" onclick="return confirm('Are you sure you want to delete this item?');" class="btm btn-sm btn-danger delete">delete</a>
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