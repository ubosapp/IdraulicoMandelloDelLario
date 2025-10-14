import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Inizializza Resend con la chiave API salvata nelle variabili d'ambiente di Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

// --- CONFIGURAZIONE RICHIESTA ---
// 1. Sostituisci con l'indirizzo email dove vuoi RICEVERE i messaggi del modulo.
const TO_EMAIL = 'ubosapp.com@gmail.com'; 

// 2. Sostituisci con un indirizzo email da un DOMINIO VERIFICATO sul tuo account Resend.
//    Resend richiede la verifica del dominio per inviare email in produzione.
//    Per i test, puoi usare 'onboarding@resend.dev', ma cambialo prima di andare online.
const FROM_EMAIL = 'info@idraulicomandellodellario.site'; 
// --------------------------------

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Accetta solo richieste POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validazione dei dati ricevuti
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
    }

    // Invia l'email usando l'SDK di Resend
    const { data, error } = await resend.emails.send({
      from: `Idraulico Mandello <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      reply_to: email, // Permette di rispondere direttamente all'utente
      subject: `Nuovo messaggio da ${name} da idraulicomandellodelario.site`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Nuova richiesta di contatto dal sito web</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <h3>Messaggio:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    // Se c'è un errore da Resend, loggalo e invia una risposta di errore
    if (error) {
      console.error({ error });
      return res.status(500).json({ error: 'Impossibile inviare l\'email.' });
    }

    // Se l'invio ha successo, invia una risposta positiva
    return res.status(200).json({ message: 'Email inviata con successo!' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Si è verificato un errore inaspettato.' });
  }
}
