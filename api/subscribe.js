const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Not found.' });
  }

  const { email } = req.body ?? {};

  if (!email || !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    const escapedEmail = email.replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: process.env.NOTIFY_EMAIL,
        subject: 'New Cha signup',
        html: `<p>New signup: <strong>${escapedEmail}</strong></p>`,
      }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      console.error('Resend send failed:', data);
      return res.status(500).json({ error: "Couldn't send that. Please try again in a moment." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Subscribe handler error:', err);
    return res.status(500).json({ error: "Couldn't send that. Please try again in a moment." });
  }
}
