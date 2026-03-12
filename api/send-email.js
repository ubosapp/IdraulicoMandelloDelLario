export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Enable CORS for production
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Tutti i campi sono obbligatori' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Email non valida' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: 'Test SPA',
          email: 'marco.bosu@gmail.com',
        },
        to: [
          {
            email: 'marco.bosu@gmail.com',
            name: 'Idraulico Mandello',
          },
        ],
        subject: `Nuova richiesta dal sito - ${name}`,
        htmlContent: `
          <html>
            <body style="font-family: Arial, sans-serif; color: #1E3A8A;">
              <div style="background-color: #1E40AF; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h2 style="color: #ffffff; margin: 0;">Nuova Richiesta di Contatto</h2>
                <p style="color: #EFF6FF; margin: 10px 0 0 0; font-size: 14px;">idraulicomandellodelario.site</p>
              </div>
              <div style="background-color: #EFF6FF; padding: 20px; border-radius: 0 0 8px 8px; margin: 20px 0;">
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Messaggio:</strong></p>
                <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3B82F6;">${message}</p>
              </div>
              <p style="color: #64748B; font-size: 14px; text-align: center;">Questa email è stata inviata automaticamente dal sito <a href="https://idraulicomandellodelario.site" style="color: #1E40AF;">idraulicomandellodelario.site</a></p>
            </body>
          </html>
        `,
        replyTo: {
          email: email,
          name: name,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Brevo API Error:', error);
      return res.status(response.status).json({ message: error.message || 'Errore invio email' });
    }

    const data = await response.json();
    console.log('Email inviata con successo:', data);
    return res.status(200).json({ message: 'Email inviata con successo', data });
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ message: 'Errore interno del server' });
  }
}
