import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getUser } from '@/lib/auth';
import { z } from 'zod';

const contentSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().optional(),
  content: z.string().optional(),
  imageUrl: z.string().optional(),
  type: z.enum(['PAGE', 'POST', 'SERVICE', 'GALLERY']),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
  featured: z.boolean().default(false),
  order: z.number().default(0),
  seoTitle: z.string().optional(),
  seoDesc: z.string().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const user = await getUser(request);
    if (!user || (user.role !== 'ADMIN' && user.role !== 'EDITOR')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const content = await prisma.content.findMany({
      orderBy: { order: 'asc' },
      include: {
        creator: {
          select: { id: true, name: true, email: true },
        },
        sections: {
          orderBy: { order: 'asc' },
        },
      },
    });

    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getUser(request);
    if (!user || (user.role !== 'ADMIN' && user.role !== 'EDITOR')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = contentSchema.parse(body);

    const content = await prisma.content.create({
      data: {
        ...validatedData,
        createdBy: user.id,
      },
      include: {
        creator: {
          select: { id: true, name: true, email: true },
        },
        sections: true,
      },
    });

    return NextResponse.json(content, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create content' },
      { status: 500 }
    );
  }
}