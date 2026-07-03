// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

// স্যানিটি ডাটাবেজে রাইট করার ক্লায়েন্ট
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // ১. টাস্ক-১: স্যানিটি ডাটাবেজে মেসেজটি ব্যাকআপ হিসেবে সেভ করা
    await writeClient.create({
      _type: 'contactMessage',
      name,
      email,
      message,
    });

    // আপনার ইমেইলে আসা Web3Forms-এর আসল Access Key-টি এখানে বসাবেন
    const WEB3FORMS_ACCESS_KEY = "4d60af6f-9310-47e1-8940-10ff9ea3ae85"; 

    // ২. টাস্ক-২: আপনার জিমেইলে ইনস্ট্যান্ট নোটিফিকেশন পাঠানোর জন্য Web3Forms API-তে হিট করা
    const emailPayload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Portfolio Message from ${name}`,
      from_name: "Portfolio System",
      name,
      email,
      message,
    };

    const emailResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    const emailData = await emailResponse.json();

    // দুইটা কাজই সফলভাবে শেষ হলে ফ্রন্টএন্ডে সাকসেস পাঠানো হবে
    if (emailData.success) {
      return NextResponse.json({ success: true });
    } else {
      // যদি মেইল কোনো কারণে ফেইলও করে, ডাটাবেজে সেভ হওয়ার কারণে আমরা সাকসেস রিটার্ন করতে পারি
      return NextResponse.json({ success: true, warning: "Saved to DB, but email notify failed." });
    }

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Server encountered an error." }, { status: 500 });
  }
}
