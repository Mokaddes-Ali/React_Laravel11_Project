<?php
@extends('layouts.app')

@section('content')
<div class="container">
    <h2>Students List</h2>
    <a href="{{ route('students.create') }}" class="btn btn-primary">Add Student</a>
    <table class="table table-bordered mt-3">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($students as $student)
            <tr>
                <td>{{ $student->name }}</td>
                <td>{{ $student->email }}</td>
                <td>{{ $student->phone }}</td>
                <td>{{ $student->address }}</td>
                <td>
                    @if($student->image)
                    <img src="{{ asset('storage/' . $student->image) }}" width="50" height="50" alt="Student Image">
                    @endif
                </td>
                <td>
                    <a href="{{ route('students.show', $student->id) }}" class="btn btn-info">View</a>
                    <a href="{{ route('students.edit', $student->id) }}" class="btn btn-warning">Edit</a>
                    <form action="{{ route('students.destroy', $student->id) }}" method="POST" style="display:inline-block;">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </form>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection
