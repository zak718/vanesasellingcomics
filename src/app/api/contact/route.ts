import { NextRequest, NextResponse } from 'next/server';

// Contact form API endpoint
// Target email: vanesasellingcomics@gmail.com
// TODO: Integrate with Resend for email notifications

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, zip, collectionSize, description, formType } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Log the submission (in production, this would send to email/CRM)
    console.log('=== NEW LEAD SUBMISSION ===');
    console.log('Form Type:', formType || 'contact');
    console.log('Name:', name);
    console.log('Email:', email || 'Not provided');
    console.log('Phone:', phone);
    console.log('Zip:', zip || 'Not provided');
    console.log('Collection Size:', collectionSize || 'Not specified');
    console.log('Description:', description || 'Not provided');
    console.log('Timestamp:', new Date().toISOString());
    console.log('===========================');

    // TODO: Integrate with Resend for email notifications
    // Target: vanesasellingcomics@gmail.com
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'VanesaSellingComics <leads@vanesasellingcomics.online>',
    //   to: 'vanesasellingcomics@gmail.com',
    //   subject: `New Lead: ${name} - ${zip || 'Unknown'}`,
    //   replyTo: email || undefined,
    //   html: `
    //     <h2>New Lead from Website</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Email:</strong> ${email || 'Not provided'}</p>
    //     <p><strong>Zip:</strong> ${zip || 'Not provided'}</p>
    //     <p><strong>Collection Size:</strong> ${collectionSize || 'Not specified'}</p>
    //     <p><strong>Description:</strong> ${description || 'Not provided'}</p>
    //     <hr>
    //     <p>Call them back at: <a href="tel:${phone}">${phone}</a></p>
    //   `
    // });

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
