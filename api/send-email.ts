import type { VercelRequest, VercelResponse } from '@vercel/node';

const FROM_EMAIL = 'info@idraulicomandellodellario.site';
const FROM_NAME = 'Idraulico Mandello del Lario';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error('Variabili d\'ambiente mancanti: BREVO_API_KEY e/o TO_EMAIL.');
    return res.status(500).json({ error: 'Configurazione server mancante.' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Tutti i campi sono obbligatori.' });
    }

    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: FROM_NAME, email: FROM_EMAIL },
        to: [{ email: toEmail }],
        replyTo: { email: email, name: name },
        subject: `Nuovo messaggio da ${name} - idraulicomandellodelario.site`,
        htmlContent: `
          <div style="font-family: sans-serif; line-height: 1.6;">
            <h2>Nuova richiesta di contatto dal sito web</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <hr style="border: 0; border-top: 1px solid #eee;">
            <h3>Messaggio:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        `,
      }),
    });

    if (!brevoResponse.ok) {
      const errorBody = await brevoResponse.text();
      console.error('Errore Brevo:', errorBody);
      return res.status(500).json({ error: 'Impossibile inviare l\'email.' });
    }

    return res.status(200).json({ message: 'Email inviata con successo!' });

  } catch (error) {
    console.error('Errore inaspettato:', error);
    return res.status(500).json({ error: 'Si è verificato un errore inaspettato.' });
  }
}
