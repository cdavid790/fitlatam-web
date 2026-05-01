'use client';

export default function Soporte() {
  return (
    <>
      <style>{`
        :root {
          --bg:#F9FAFB; --bg2:#EDF0F7; --card:#FFFFFF;
          --primary:#5C6BC0; --primary-dark:#3F51B5;
          --secondary:#43A99A; --purple:#7E57C2;
          --text:#22223B; --text-mid:#4A4E69; --text-muted:#9A8C98;
          --border:#E2E5F0;
        }
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'Inter',sans-serif; background:var(--bg); color:var(--text); line-height:1.6; }
        h1,h2,h3 { font-family:'Poppins',sans-serif; line-height:1.2; }
        .page-wrap { max-width:800px; margin:0 auto; padding:80px 24px 100px; }
        .back-link { display:inline-flex; align-items:center; gap:6px; color:var(--primary); font-size:0.875rem; font-weight:600; text-decoration:none; margin-bottom:32px; font-family:'Poppins',sans-serif; }
        .back-link:hover { text-decoration:underline; }
        .page-tag { display:inline-flex; align-items:center; gap:8px; background:rgba(67,169,154,0.08); border:1px solid rgba(67,169,154,0.2); border-radius:20px; padding:6px 16px; font-size:0.8rem; font-weight:600; color:var(--secondary); margin-bottom:20px; font-family:'Poppins',sans-serif; }
        h1 { font-size:2.2rem; font-weight:900; letter-spacing:-0.02em; margin-bottom:12px; }
        .page-intro { font-size:1rem; color:var(--text-mid); line-height:1.75; margin-bottom:48px; max-width:600px; }
        .contact-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px; margin-bottom:40px; }
        .contact-card { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:24px; transition:border-color 0.2s; }
        .contact-card:hover { border-color:var(--primary); }
        .contact-icon { font-size:2rem; margin-bottom:12px; }
        .contact-title { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:700; margin-bottom:6px; }
        .contact-desc { font-size:0.875rem; color:var(--text-mid); line-height:1.5; margin-bottom:14px; }
        .contact-link { color:var(--primary); font-weight:600; font-size:0.9rem; text-decoration:none; }
        .contact-link:hover { text-decoration:underline; }
        .faq-section { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:28px; margin-bottom:24px; }
        .faq-title { font-family:'Poppins',sans-serif; font-size:1.2rem; font-weight:700; margin-bottom:20px; }
        .faq-item { padding:14px 0; border-bottom:1px solid var(--border); }
        .faq-item:last-child { border-bottom:none; }
        .faq-q { font-weight:700; font-size:0.95rem; margin-bottom:6px; color:var(--text); }
        .faq-a { font-size:0.875rem; color:var(--text-mid); line-height:1.7; }
        .faq-a a { color:var(--primary); }
      `}</style>

      <div className="page-wrap">
        <a href="/" className="back-link">← Volver a FitLatam</a>

        <div className="page-tag">💬 Soporte</div>
        <h1>Centro de ayuda</h1>
        <p className="page-intro">
          ¿Tienes preguntas sobre FitLatam? Estamos aquí para ayudarte. Encuentra respuestas rápidas a las preguntas frecuentes o contáctanos directamente.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📩</div>
            <div className="contact-title">Soporte general</div>
            <div className="contact-desc">Preguntas sobre la app, errores técnicos, cuenta, etc.</div>
            <a href="mailto:soporte@fitlatam.lat" className="contact-link">soporte@fitlatam.lat →</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🔒</div>
            <div className="contact-title">Privacidad</div>
            <div className="contact-desc">Consultas sobre datos personales o eliminación de cuenta.</div>
            <a href="mailto:privacidad@fitlatam.lat" className="contact-link">privacidad@fitlatam.lat →</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">⚖️</div>
            <div className="contact-title">Asuntos legales</div>
            <div className="contact-desc">Términos, condiciones y temas legales.</div>
            <a href="mailto:legal@fitlatam.lat" className="contact-link">legal@fitlatam.lat →</a>
          </div>
        </div>

        <div className="faq-section">
          <div className="faq-title">Preguntas frecuentes</div>

          <div className="faq-item">
            <div className="faq-q">¿Cómo cancelo mi suscripción?</div>
            <div className="faq-a">
              Si pagaste con App Store: ve a Ajustes → Apple ID → Suscripciones → FitLatam → Cancelar.
              Si pagaste con MercadoPago (Android): cancela desde tu cuenta de MercadoPago.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-q">¿Cómo elimino mi cuenta?</div>
            <div className="faq-a">
              Puedes eliminarla desde la app: Perfil → Eliminar mi cuenta. O solicítalo en{' '}
              <a href="/delete-account">fitlatam.lat/delete-account</a>.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-q">No recibo el código SMS al registrarme</div>
            <div className="faq-a">
              Verifica que el número incluya el código de país (ej: +52 para México).
              Si no llega después de 2 minutos, escríbenos a soporte@fitlatam.lat.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-q">¿Cómo cambio mi plan?</div>
            <div className="faq-a">
              Ve a Perfil → Mi suscripción → Cambiar plan. El cambio aplica al siguiente ciclo de facturación.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-q">¿Puedo recuperar mi cuenta si la eliminé?</div>
            <div className="faq-a">
              No. La eliminación de cuenta es permanente e irreversible. Tendrás que crear una cuenta nueva.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-q">¿En qué países está disponible FitLatam?</div>
            <div className="faq-a">
              Está disponible en toda Latinoamérica: México, Colombia, Venezuela, Perú, Argentina, Chile, Brasil y más de 15 países.
            </div>
          </div>
        </div>

        <p style={{textAlign:'center', fontSize:'0.875rem', color:'var(--text-muted)', marginTop:32}}>
          Tiempo de respuesta promedio: 24-48 horas hábiles · Última actualización: Mayo 2026
        </p>
      </div>
    </>
  );
}