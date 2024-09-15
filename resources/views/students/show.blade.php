<?php
@extends('layouts.app')

@section('content')
<div class="container">
    <h2>Student Details</h2>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ $student->name }}</h5>
            <p class="card-text"><strong>Email:</strong> {{ $student->email }}</p>
            <p class="card-text"><strong>Phone:</strong> {{ $student->phone }}</p>
            <p class="card-text"><strong>Address:</strong> {{ $student->address }}</p>
            @if($student->image)
            <img src="{{ asset('storage/' . $student->image) }}" width="100" height="100" alt="Student Image">
            @endif
            <a href="{{ route('students.index') }}" class="btn btn-primary mt-3">Back to List</a>
        </div>
    </div>
</div>
@endsection
