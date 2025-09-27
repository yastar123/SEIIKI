import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getUser } from '@/lib/auth';
import { z } from 'zod';

const statisticsSchema = z.object({
  label: z.string().min(1, 'Label is required'),
  value: z.string().min(1, 'Value is required'),
  order: z.number().default(0),
});

export async function GET() {
  try {
    const statistics = await prisma.statistics.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(statistics);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
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
    const validatedData = statisticsSchema.parse(body);

    const statistic = await prisma.statistics.create({
      data: validatedData,
    });

    return NextResponse.json(statistic, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create statistic' },
      { status: 500 }
    );
  }
}