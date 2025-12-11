import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Person from '@/models/Person';
import mongoose from 'mongoose';


export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid person ID',
        },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { name } = body;

    if (!name || name.trim() === '') {
      return NextResponse.json(
        {
          success: false,
          error: 'Name is required',
        },
        { status: 400 }
      );
    }

    const person = await Person.findByIdAndUpdate(
      id,
      { name },
      { new: true, runValidators: true }
    );

    if (!person) {
      return NextResponse.json(
        {
          success: false,
          error: 'Person not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: person,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to update person',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid person ID',
        },
        { status: 400 }
      );
    }

    const person = await Person.findByIdAndDelete(id);

    if (!person) {
      return NextResponse.json(
        {
          success: false,
          error: 'Person not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {},
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to delete person',
      },
      { status: 500 }
    );
  }
}