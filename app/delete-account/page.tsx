'use client';

import { useState } from 'react';

export default function DeleteAccount() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Por favor ingresa un correo electrónico válido.');
      return;
    }
    setError('');
    // Aquí puedes conectar con tu backend o Firebase
    // Por ahora enviamos un email de confirmación
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        :root {
          --bg:#F9FAFB; --bg2:#EDF0F7; --card:#FFFFFF;
          --primary:#5C6BC0; --primary-dark:#3F51B5;
          --secondary:#43A99A; --error:#E63946;
          --text:#22223B; --text-mid:#4A4E69; --text-muted:#9A8C98;
          --border:#E2E5F0;
        }
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'Inter',sans-serif; background:var(--bg); color:var(--text); line-height:1.6; }
        h1,h2,h3 { font-family:'Poppins',sans-serif; line-height:1.2; }
        .page-wrap { max-width:600px; margin:0 auto; padding:80px 24px 100px; }
        .back-link { display:inline-flex; align-items:center; gap:6px; color:var(--primary); font-size:0.875rem; font-weight:600; text-decoration:none; margin-bottom:32px; font-family:'Poppins',sans-serif; }
        .back-link:hover { text-decoration:underline; }
        .warning-tag { display:inline-flex; align-items:center; gap:8px; background:rgba(230,57,70,0.08); border:1px solid rgba(230,57,70,0.2); border-radius:20px; padding:6px 16px; font-size:0.8rem; font-weight:600; color:var(--error); margin-bottom:20px; font-family:'Poppins',sans-serif; }
        h1 { font-size:2rem; font-weight:900; letter-spacing:-0.02em; margin-bottom:12px; }
        .page-intro { font-size:1rem; color:var(--text-mid); line-height:1.75; margin-bottom:32px; }
        .info-card { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:24px; margin-bottom:24px; }
        .info-title { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:700; color:var(--text); margin-bottom:12px; }
        .info-list { list-style:none; display:flex; flex-direction:column; gap:10px; }
        .info-list li { display:flex; align-items:flex-start; gap:10px; font-size:0.9rem; color:var(--text-mid); line-height:1.6; }
        .info-list li::before { content:'•'; color:var(--error); font-weight:700; flex-shrink:0; margin-top:2px; }
        .form-card { background:var(--card); border:1px solid rgba(230,57,70,0.2); border-radius:16px; padding:28px; }
        .form-title { font-family:'Poppins',sans-serif; font-size:1.1rem; font-weight:700; color:var(--text); margin-bottom:20px; }
        label { display:block; font-size:0.875rem; font-weight:600; color:var(--text); margin-bottom:8px; }
        input[type=email] { width:100%; padding:12px 16px; border:1.5px solid var(--border); border-radius:10px; font-size:0.95rem; font-family:'Inter',sans-serif; color:var(--text); background:var(--bg); outline:none; transition:border-color 0.2s; margin-bottom:16px; }
        input[type=email]:focus { border-color:var(--error); }
        .checkbox-wrap { display:flex; align-items:flex-start; gap:10px; margin-bottom:20px; }
        .checkbox-wrap input { margin-top:3px; accent-color:var(--error); flex-shrink:0; }
        .checkbox-wrap label { font-size:0.875rem; color:var(--text-mid); font-weight:400; margin-bottom:0; }
        .btn-delete { width:100%; background:var(--error); color:white; padding:14px; border-radius:10px; font-size:0.95rem; font-weight:700; border:none; cursor:pointer; font-family:'Poppins',sans-serif; transition:all 0.2s; }
        .btn-delete:hover { background:#c0303b; transform:translateY(-1px); }
        .btn-delete:disabled { opacity:0.5; cursor:not-allowed; transform:none; }
        .error-msg { background:rgba(230,57,70,0.08); border:1px solid rgba(230,57,70,0.2); border-radius:8px; padding:10px 14px; font-size:0.875rem; color:var(--error); margin-bottom:14px; }
        .success-card { background:var(--card); border:1px solid rgba(67,169,154,0.3); border-radius:16px; padding:32px; text-align:center; }
        .success-icon { font-size:3rem; margin-bottom:16px; }
        .success-title { font-family:'Poppins',sans-serif; font-size:1.3rem; font-weight:700; color:var(--text); margin-bottom:10px; }
        .success-desc { font-size:0.9rem; color:var(--text-mid); line-height:1.7; }
        .alt-option { background:rgba(92,107,192,0.05); border:1px solid rgba(92,107,192,0.15); border-radius:12px; padding:16px; margin-top:20px; text-align:center; }
        .alt-option p { font-size:0.875rem; color:var(--text-mid); margin-bottom:8px; }
        .alt-option a { color:var(--primary); font-weight:600; font-size:0.875rem; }
      `}</style>

      <div className="page-wrap">
        <a href="/" className="back-link">← Volver a FitLatam</a>

        {!submitted ? (
          <>
            <div className="warning-tag">⚠️ Acción permanente</div>
            <h1>Eliminar mi cuenta</h1>
            <p className="page-intro">
              Puedes solicitar la eliminación de tu cuenta de FitLatam y todos tus datos personales.
              Esta acción es permanente e irreversible.
            </p>

            <div className="info-card">
              <div className="info-title">¿Qué se eliminará?</div>
              <ul className="info-list">
                <li>Tu perfil y datos personales (nombre, correo, foto)</li>
                <li>Tu historial de entrenamientos y progreso</li>
                <li>Tus planes de nutrición y preferencias</li>
                <li>Tu racha, XP y logros acumulados</li>
                <li>Tus suscripciones activas (no se generan reembolsos por el período restante)</li>
              </ul>
            </div>

            <div className="form-card">
              <div className="form-title">Solicitar eliminación de cuenta</div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Correo electrónico de tu cuenta</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
                <div className="checkbox-wrap">
                  <input type="checkbox" id="confirm" required />
                  <label htmlFor="confirm">
                    Entiendo que esta acción es permanente e irreversible y que perderé todos mis datos y progreso en FitLatam.
                  </label>
                </div>
                {error && <div className="error-msg">{error}</div>}
                <button type="submit" className="btn-delete">
                  Solicitar eliminación de cuenta
                </button>
              </form>
            </div>

            <div className="alt-option">
              <p>¿Prefieres eliminar tu cuenta directamente desde la app?</p>
              <a href="#">Perfil → Cerrar sesión → Eliminar mi cuenta</a>
            </div>
          </>
        ) : (
          <div className="success-card">
            <div className="success-icon">✅</div>
            <div className="success-title">Solicitud recibida</div>
            <p className="success-desc">
              Hemos recibido tu solicitud de eliminación de cuenta para <strong>{email}</strong>.
              Tu cuenta y todos tus datos serán eliminados en un plazo máximo de <strong>30 días hábiles</strong>.
              Recibirás un correo de confirmación cuando el proceso esté completado.
              <br/><br/>
              Si tienes preguntas, escríbenos a{' '}
              <a href="mailto:privacidad@fitlatam.app" style={{color:'var(--primary)'}}>privacidad@fitlatam.app</a>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
