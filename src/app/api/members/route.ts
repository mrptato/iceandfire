import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    console.log('Fetching member from:', url);
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store' // thiis is just for debugging
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Response Error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      
      throw new Error(
        `Failed to fetch member: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    
    console.log('Successfully fetched member:', {
      url,
      name: data.name
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      url,
      error
    });

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch member' },
      { status: 500 }
    );
  }
} 