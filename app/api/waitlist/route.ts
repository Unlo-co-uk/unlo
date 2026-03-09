import { NextRequest, NextResponse } from 'next/server';
import { WaitlistRequest } from '@/types/vehicle';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: WaitlistRequest = await req.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        {
          success: false,
          error: 'Email is required',
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email format',
        },
        { status: 400 }
      );
    }

    // TODO: Replace with Supabase integration
    // For now, log and return success
    // In production, write to database via Supabase:
    // const { data, error } = await supabase
    //   .from('waitlist')
    //   .insert([{ email, created_at: new Date() }]);

    console.log('Waitlist signup:', email);

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist',
      email,
    });
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to add to waitlist',
      },
      { status: 500 }
    );
  }
}
