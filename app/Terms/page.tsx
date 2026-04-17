'use client';

export default function Terms() {
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
        .page-tag { display:inline-flex; align-items:center; gap:8px; background:rgba(92,107,192,0.08); border:1px solid rgba(92,107,192,0.2); border-radius:20px; padding:6px 16px; font-size:0.8rem; font-weight:600; color:var(--primary); margin-bottom:20px; font-family:'Poppins',sans-serif; }
        h1 { font-size:2.2rem; font-weight:900; letter-spacing:-0.02em; margin-bottom:12px; }
        .updated { font-size:0.875rem; color:var(--text-muted); margin-bottom:40px; }
        .section { margin-bottom:32px; }
        .section h2 { font-size:1.1rem; font-weight:700; color:var(--text); margin-bottom:12px; padding-bottom:8px; border-bottom:1px solid var(--border); }
        .section p { font-size:0.9rem; color:var(--text-mid); line-height:1.8; margin-bottom:10px; }
        .section ul { list-style:none; display:flex; flex-direction:column; gap:8px; padding-left:0; }
        .section ul li { font-size:0.9rem; color:var(--text-mid); line-height:1.7; padding-left:16px; position:relative; }
        .section ul li::before { content:'•'; color:var(--primary); font-weight:700; position:absolute; left:0; }
        .highlight-box { background:rgba(92,107,192,0.05); border:1px solid rgba(92,107,192,0.15); border-radius:12px; padding:20px; margin:20px 0; }
        .highlight-box p { font-size:0.875rem; color:var(--text-mid); line-height:1.7; margin:0; }
        a { color:var(--primary); }
      `}</style>

      <div className="page-wrap">
        <a href="/" className="back-link">← Volver a FitLatam</a>

        <div className="page-tag">📄 Legal</div>
        <h1>Términos y Condiciones</h1>
        <p className="updated">Última actualización: Abril 2026</p>

        <div className="section">
          <h2>1. Aceptación de los términos</h2>
          <p>Al crear una cuenta, descargar o usar FitLatam aceptas estos Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, no uses la aplicación.</p>
        </div>

        <div className="section">
          <h2>2. Descripción del servicio</h2>
          <p>FitLatam es una plataforma digital de bienestar físico que ofrece planes de entrenamiento y nutrición personalizados. No somos un servicio médico ni clínico. El contenido de FitLatam es de carácter informativo y educativo.</p>
        </div>

        <div className="section">
          <h2>3. Planes y suscripciones</h2>
          <ul>
            <li>FitLatam ofrece suscripciones mensuales de renovación automática: Plan Starter ($99 MXN/mes), Plan Pro ($199 MXN/mes) y Plan Elite ($299 MXN/mes).</li>
            <li>Los pagos se procesan a través de App Store (Apple) o Google Play según la plataforma del usuario.</li>
            <li>Las suscripciones se renuevan automáticamente al final de cada período salvo que se cancelen al menos 24 horas antes de la fecha de renovación.</li>
            <li>Puedes gestionar y cancelar tu suscripción desde la configuración de tu cuenta de App Store o Google Play.</li>
            <li>Se ofrece un período de prueba gratuita de 3 días con acceso completo al Plan Pro para nuevos usuarios.</li>
          </ul>
        </div>

        <div className="section">
          <h2>4. Cancelación y reembolsos</h2>
          <p>Puedes cancelar tu suscripción en cualquier momento. Al cancelar, conservarás el acceso hasta el final del período pagado. Los reembolsos se rigen por las políticas de App Store (Apple) o Google Play según corresponda.</p>
        </div>

        <div className="section">
          <h2>5. Responsabilidad médica</h2>
          <div className="highlight-box">
            <p>Consulta a un médico o profesional de la salud antes de iniciar cualquier programa de ejercicio o cambio dietético. FitLatam no se responsabiliza por lesiones, daños o problemas de salud derivados del uso de la aplicación. Los usuarios con condiciones médicas preexistentes deben obtener autorización médica antes de usar la app.</p>
          </div>
        </div>

        <div className="section">
          <h2>6. Cuenta de usuario</h2>
          <ul>
            <li>Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.</li>
            <li>Debes proporcionar información veraz y actualizada al registrarte.</li>
            <li>Una cuenta de prueba gratuita por número de teléfono. El abuso del período de prueba puede resultar en la suspensión de la cuenta.</li>
            <li>Puedes eliminar tu cuenta en cualquier momento desde Perfil → Eliminar mi cuenta, o enviando una solicitud a <a href="mailto:privacidad@fitlatam.app">privacidad@fitlatam.app</a>.</li>
          </ul>
        </div>

        <div className="section">
          <h2>7. Propiedad intelectual</h2>
          <p>Todo el contenido de FitLatam —rutinas, planes de nutrición, textos, imágenes y código— es propiedad exclusiva de FitLatam y está protegido por las leyes de propiedad intelectual. No está permitido reproducir, distribuir o comercializar el contenido sin autorización expresa.</p>
        </div>

        <div className="section">
          <h2>8. Privacidad</h2>
          <p>El tratamiento de tus datos personales se describe en nuestra <a href="/privacy">Política de Privacidad</a>. Al usar FitLatam aceptas dicha política.</p>
        </div>

        <div className="section">
          <h2>9. Modificaciones</h2>
          <p>Nos reservamos el derecho de modificar estos Términos en cualquier momento. Te notificaremos con al menos 15 días de anticipación ante cambios significativos. El uso continuado de la app tras los cambios implica aceptación de los nuevos términos.</p>
        </div>

        <div className="section">
          <h2>10. Ley aplicable</h2>
          <p>Estos Términos se rigen por las leyes de México. Cualquier disputa se resolverá ante los tribunales competentes de la Ciudad de México.</p>
        </div>

        <div className="section">
          <h2>11. Contacto</h2>
          <p>Para cualquier consulta sobre estos Términos escríbenos a <a href="mailto:legal@fitlatam.app">legal@fitlatam.app</a></p>
        </div>
      </div>
    </>
  );
}
