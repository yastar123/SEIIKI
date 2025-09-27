import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const slides = await prisma.heroSlide.findMany({
      orderBy: { order: 'asc' },
    });
    
    return NextResponse.json(slides);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch hero slides' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, subtitle, description, imageUrl, buttonText, buttonUrl, order, active } = body;

    const slide = await prisma.heroSlide.create({
      data: {
        title,
        subtitle,
        description,
        imageUrl,
        buttonText,
        buttonUrl,
        order: order || 0,
        active: active ?? true,
      },
    });

    return NextResponse.json(slide, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create hero slide' },
      { status: 500 }
    );
  }
}