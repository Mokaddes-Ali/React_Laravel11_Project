<?php
@extends('layouts.app')

@section('content')
<div class="container">
    <h2>Edit Student</h2>
    <form action="{{ route('students.update', $student->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" name="name" value="{{ $student->name }}" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" name="email" value="{{ $student->email }}" required>
        </div>
        <div class="form-group">
            <label for="phone">Phone:</label>
            <input type="text" class="form-control" id="phone" name="phone" value="{{ $student->phone }}" required>
        </div>
        <div class="form-group">
            <label for="address">Address:</label>
            <textarea class="form-control" id="address" name="address" required>{{ $student->address }}</textarea>
        </div>
        <div class="form-group">
            <label for="image">Image:</label>
            <input type="file" class="form-control" id="image" name="image">
            @if($student->image)
            <img src="{{ asset('storage/' . $student->image) }}" width="50" height="50" alt="Student Image">
            @endif
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
    </form>
</div>
@endsection
