import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Person from '@/models/Person';

export async function GET() {
  try {
    await connectDB();
    const persons = await Person.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: persons,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch persons',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
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

    const person = await Person.create({ name });

    return NextResponse.json(
      {
        success: true,
        data: person,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to create person',
      },
      { status: 500 }
    );
  }
}