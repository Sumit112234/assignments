import { NextRequest, NextResponse } from 'next/server';
import { userSchema } from '@/schemas/user.schema';
import { zodValidator } from '@/lib/zodValidator';

export async function POST(request: NextRequest) {
  try {
   
    const body = await request.json();
    
   
    const result = zodValidator(userSchema, body);
    
    
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.errors
        },
        { status: 400 }
      );
    }
    
    
    return NextResponse.json(
      {
        success: true,
        message: 'User registered successfully',
        data: result.data
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        errors: [{ field: 'general', message: 'Invalid request body' }]
      },
      { status: 400 }
    );
  }
}