import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Vérifier que la clé API est configurée
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY manquante ! Créez un fichier .env.local avec votre clé API');
      return NextResponse.json(
        { error: 'Configuration email manquante. Veuillez contacter directement odysseesucree82@gmail.com' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, phone, eventDate, eventType, message } = body;

    console.log('📧 Tentative d\'envoi d\'email à:', 'odysseesucree82@gmail.com');
    console.log('📝 De:', name, email);

    const { data, error } = await resend.emails.send({
      from: 'Odyssée Sucrée <onboarding@resend.dev>',
      to: ['odysseesucree82@gmail.com'],
      replyTo: email,
      subject: `Nouvelle demande de ${name} - ${eventType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9B7AB8;">Nouvelle demande de contact</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #2D2D2D; margin-top: 0;">Informations du client</h3>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
            <p><strong>Date de l'événement :</strong> ${eventDate || 'Non renseignée'}</p>
            <p><strong>Type d'événement :</strong> ${eventType}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-left: 4px solid #9B7AB8; margin: 20px 0;">
            <h3 style="color: #2D2D2D; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #6B6B6B; font-size: 12px; margin-top: 30px;">
            Ce message a été envoyé depuis le formulaire de contact d'Odyssée Sucrée.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('❌ Erreur Resend:', error);
      return NextResponse.json({ error: error.message || 'Erreur lors de l\'envoi' }, { status: 400 });
    }

    console.log('✅ Email envoyé avec succès!', data);
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('❌ Erreur serveur:', error);
    return NextResponse.json({ 
      error: error.message || 'Erreur lors de l\'envoi de l\'email' 
    }, { status: 500 });
  }
}
