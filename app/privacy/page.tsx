'use client';

import { useState, useCallback } from 'react';

type Lang = 'es' | 'en';

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<Lang>('es');
  const t = useCallback((es: string, en: string) => lang === 'es' ? es : en, [lang]);

  return (
    <>
      <style>{`
        :root {
          --bg:#F9FAFB; --card:#FFFFFF;
          --primary:#5C6BC0; --primary-dark:#3F51B5;
          --secondary:#43A99A;
          --text:#22223B; --text-mid:#4A4E69; --text-muted:#9A8C98;
          --border:#E2E5F0;
        }
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { font-family:'Inter',sans-serif; background:var(--bg); color:var(--text); line-height:1.7; }
        h1,h2,h3 { font-family:'Poppins',sans-serif; }

        nav { position:fixed; top:0; left:0; right:0; z-index:100; padding:0 5%; display:flex; align-items:center; gap:16px; height:68px; background:rgba(249,250,251,0.95); backdrop-filter:blur(16px); border-bottom:1px solid var(--border); }
        .nav-logo { font-family:'Poppins',sans-serif; font-weight:800; font-size:1.3rem; color:var(--text); text-decoration:none; letter-spacing:-0.02em; }
        .nav-logo span { color:var(--primary); }
        .lang-toggle { display:flex; background:#EDF0F7; border-radius:20px; padding:3px; gap:2px; margin-left:auto; }
        .lang-btn { font-size:0.75rem; font-weight:600; padding:4px 12px; border-radius:16px; border:none; cursor:pointer; background:transparent; color:var(--text-muted); transition:all 0.2s; font-family:'Inter',sans-serif; }
        .lang-btn.active { background:var(--primary); color:white; }
        .nav-back { font-size:0.875rem; font-weight:500; color:var(--primary); text-decoration:none; display:flex; align-items:center; gap:6px; }
        .nav-back:hover { color:var(--primary-dark); }

        .container { max-width:760px; margin:0 auto; padding:100px 5% 80px; }
        .page-header { margin-bottom:48px; padding-bottom:32px; border-bottom:1px solid var(--border); }
        .page-label { font-size:0.75rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--primary); font-family:'Poppins',sans-serif; margin-bottom:12px; display:block; }
        .page-title { font-size:clamp(1.8rem,4vw,2.4rem); font-weight:800; letter-spacing:-0.02em; color:var(--text); margin-bottom:12px; }
        .page-date { font-size:0.85rem; color:var(--text-muted); }

        .toc { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:24px; margin-bottom:40px; }
        .toc-title { font-family:'Poppins',sans-serif; font-size:0.9rem; font-weight:700; color:var(--text); margin-bottom:12px; }
        .toc-list { display:flex; flex-direction:column; gap:6px; }
        .toc-item { font-size:0.875rem; color:var(--primary); text-decoration:none; transition:color 0.2s; }
        .toc-item:hover { color:var(--primary-dark); }

        .section { margin-bottom:40px; }
        .section h2 { font-size:1.2rem; font-weight:700; color:var(--text); margin-bottom:16px; padding-top:8px; }
        .section p { font-size:0.95rem; color:var(--text-mid); line-height:1.75; margin-bottom:12px; }
        .section ul { margin:12px 0 12px 20px; display:flex; flex-direction:column; gap:8px; }
        .section ul li { font-size:0.95rem; color:var(--text-mid); line-height:1.65; }
        .section a { color:var(--primary); text-decoration:none; }
        .section a:hover { text-decoration:underline; }
        .highlight { background:rgba(92,107,192,0.06); border:1px solid rgba(92,107,192,0.15); border-radius:12px; padding:16px 20px; margin:16px 0; }
        .highlight p { margin:0; font-size:0.9rem; }

        footer { background:var(--text); padding:32px 5%; text-align:center; }
        .footer-logo { font-family:'Poppins',sans-serif; font-weight:800; font-size:1.1rem; color:white; margin-bottom:8px; }
        .footer-logo span { color:var(--secondary); }
        .footer-copy { font-size:0.8rem; color:rgba(255,255,255,0.35); }
      `}</style>

      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">Fit<span>Latam</span></a>
        <a href="/" className="nav-back">← {t('Volver al inicio', 'Back to home')}</a>
        <div className="lang-toggle">
          <button className={`lang-btn${lang === 'es' ? ' active' : ''}`} onClick={() => setLang('es')}>ES</button>
          <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
        </div>
      </nav>

      <div className="container">
        <div className="page-header">
          <span className="page-label">{t('Legal', 'Legal')}</span>
          <h1 className="page-title">{t('Política de Privacidad', 'Privacy Policy')}</h1>
          <p className="page-date">{t('Última actualización: Abril 2026', 'Last updated: April 2026')}</p>
        </div>

        {/* TOC */}
        <div className="toc">
          <div className="toc-title">{t('Contenido', 'Contents')}</div>
          <div className="toc-list">
            {[
              { href: '#responsable', es: '1. Responsable del tratamiento', en: '1. Data controller' },
              { href: '#datos', es: '2. Datos que recopilamos', en: '2. Data we collect' },
              { href: '#finalidad', es: '3. Finalidad del tratamiento', en: '3. Purpose of processing' },
              { href: '#compartir', es: '4. Compartir datos con terceros', en: '4. Sharing data with third parties' },
              { href: '#derechos', es: '5. Tus derechos (ARCO)', en: '5. Your rights (ARCO)' },
              { href: '#seguridad', es: '6. Seguridad de los datos', en: '6. Data security' },
              { href: '#retencion', es: '7. Retención de datos', en: '7. Data retention' },
              { href: '#menores', es: '8. Menores de edad', en: '8. Minors' },
              { href: '#cambios', es: '9. Cambios a esta política', en: '9. Changes to this policy' },
              { href: '#contacto', es: '10. Contacto', en: '10. Contact' },
            ].map((item, i) => (
              <a key={i} href={item.href} className="toc-item">{t(item.es, item.en)}</a>
            ))}
          </div>
        </div>

        <div className="highlight">
          <p>
            {t(
              'FitLatam se compromete a proteger tu privacidad. Esta política explica qué datos recopilamos, cómo los usamos y cuáles son tus derechos. Al usar nuestra app o web, aceptas los términos de esta política.',
              'FitLatam is committed to protecting your privacy. This policy explains what data we collect, how we use it, and what your rights are. By using our app or website, you accept the terms of this policy.'
            )}
          </p>
        </div>

        {/* 1 */}
        <div className="section" id="responsable">
          <h2>1. {t('Responsable del tratamiento', 'Data controller')}</h2>
          <p>{t('FitLatam es responsable del tratamiento de tus datos personales conforme a la legislación aplicable en México (Ley Federal de Protección de Datos Personales en Posesión de los Particulares — LFPDPPP) y las leyes aplicables en los demás países de Latinoamérica donde opera el servicio.', 'FitLatam is responsible for the processing of your personal data in accordance with applicable law in Mexico (Federal Law on Protection of Personal Data Held by Private Parties — LFPDPPP) and applicable laws in the other Latin American countries where the service operates.')}</p>
          <p><strong>FitLatam</strong><br />
            {t('Correo de contacto:', 'Contact email:')} <a href="mailto:privacidad@fitlatam.app">privacidad@fitlatam.app</a><br />
            {t('Sitio web:', 'Website:')} <a href="https://fitlatam.lat">https://fitlatam.lat</a>
          </p>
        </div>

        {/* 2 */}
        <div className="section" id="datos">
          <h2>2. {t('Datos que recopilamos', 'Data we collect')}</h2>
          <p>{t('Recopilamos los siguientes tipos de datos personales:', 'We collect the following types of personal data:')}</p>
          <ul>
            <li><strong>{t('Identificación:', 'Identification:')}</strong> {t('nombre, correo electrónico, foto de perfil (opcional).', 'name, email address, profile photo (optional).')}</li>
            <li><strong>{t('Datos biométricos y de salud:', 'Biometric and health data:')}</strong> {t('peso, talla, edad, género, porcentaje de grasa corporal, circunferencia de cintura.', 'weight, height, age, gender, body fat percentage, waist circumference.')}</li>
            <li><strong>{t('Condición física:', 'Physical condition:')}</strong> {t('objetivo de entrenamiento, nivel de experiencia, lesiones declaradas, días y tiempo disponibles para entrenar.', 'training goal, experience level, declared injuries, available days and time for training.')}</li>
            <li><strong>{t('Nutrición:', 'Nutrition:')}</strong> {t('preferencias dietéticas, alergias, condiciones de salud declaradas (diabetes, hipertensión, etc.), uso de suplementos.', 'dietary preferences, allergies, declared health conditions (diabetes, hypertension, etc.), supplement use.')}</li>
            <li><strong>{t('Uso de la app:', 'App usage:')}</strong> {t('sesiones completadas, racha de entrenamiento, calorías registradas, progreso mensual, módulos visitados.', 'completed sessions, training streak, recorded calories, monthly progress, visited modules.')}</li>
            <li><strong>{t('Pagos:', 'Payments:')}</strong> {t('gestionados exclusivamente por MercadoPago, Stripe, App Store o Google Play. FitLatam no almacena datos de tarjetas de crédito.', 'managed exclusively by MercadoPago, Stripe, App Store or Google Play. FitLatam does not store credit card data.')}</li>
            <li><strong>{t('Datos técnicos:', 'Technical data:')}</strong> {t('tipo de dispositivo, sistema operativo, versión de la app, datos de sesión (Sentry para monitoreo de errores).', 'device type, operating system, app version, session data (Sentry for error monitoring).')}</li>
          </ul>
        </div>

        {/* 3 */}
        <div className="section" id="finalidad">
          <h2>3. {t('Finalidad del tratamiento', 'Purpose of processing')}</h2>
          <p>{t('Usamos tus datos para:', 'We use your data to:')}</p>
          <ul>
            <li>{t('Generar y personalizar tu plan de entrenamiento, nutrición y bienestar.', 'Generate and personalize your training, nutrition and wellness plan.')}</li>
            <li>{t('Adaptar ingredientes y recetas a tu país de origen.', 'Adapt ingredients and recipes to your country of origin.')}</li>
            <li>{t('Procesar pagos y gestionar tu suscripción activa.', 'Process payments and manage your active subscription.')}</li>
            <li>{t('Enviar notificaciones relacionadas con tu entrenamiento y progreso.', 'Send notifications related to your training and progress.')}</li>
            <li>{t('Detectar y corregir errores técnicos en la app (Sentry).', 'Detect and fix technical errors in the app (Sentry).')}</li>
            <li>{t('Mejorar la experiencia del usuario y las funcionalidades de la app.', 'Improve the user experience and app features.')}</li>
            <li>{t('Cumplir con obligaciones legales aplicables.', 'Comply with applicable legal obligations.')}</li>
          </ul>
        </div>

        {/* 4 */}
        <div className="section" id="compartir">
          <h2>4. {t('Compartir datos con terceros', 'Sharing data with third parties')}</h2>
          <p>{t('FitLatam no vende ni comercializa tus datos personales. Compartimos información únicamente con:', 'FitLatam does not sell or commercialize your personal data. We share information only with:')}</p>
          <ul>
            <li><strong>MercadoPago</strong> — {t('procesamiento de pagos en LATAM.', 'payment processing in LATAM.')}</li>
            <li><strong>Stripe</strong> — {t('procesamiento de pagos internacionales.', 'international payment processing.')}</li>
            <li><strong>Apple App Store / Google Play</strong> — {t('gestión de compras dentro de la app (In-App Purchases).', 'management of in-app purchases.')}</li>
            <li><strong>RevenueCat</strong> — {t('gestión de suscripciones y entitlements.', 'subscription and entitlement management.')}</li>
            <li><strong>Garmin Connect</strong> — {t('solo si el usuario autoriza expresamente la integración.', 'only if the user expressly authorizes the integration.')}</li>
            <li><strong>Firebase (Google)</strong> — {t('autenticación de usuarios y almacenamiento de datos en la nube.', 'user authentication and cloud data storage.')}</li>
            <li><strong>Sentry</strong> — {t('monitoreo de errores y estabilidad de la app.', 'error monitoring and app stability.')}</li>
            <li><strong>Expo / EAS</strong> — {t('distribución y actualizaciones de la app.', 'app distribution and updates.')}</li>
          </ul>
          <p>{t('Todos los proveedores están sujetos a acuerdos de confidencialidad y tratan los datos conforme a sus propias políticas de privacidad.', 'All providers are subject to confidentiality agreements and process data in accordance with their own privacy policies.')}</p>
        </div>

        {/* 5 */}
        <div className="section" id="derechos">
          <h2>5. {t('Tus derechos (ARCO)', 'Your rights (ARCO)')}</h2>
          <p>{t('Tienes derecho a:', 'You have the right to:')}</p>
          <ul>
            <li><strong>{t('Acceso:', 'Access:')}</strong> {t('conocer qué datos tenemos sobre ti.', 'know what data we have about you.')}</li>
            <li><strong>{t('Rectificación:', 'Rectification:')}</strong> {t('corregir datos incorrectos o desactualizados.', 'correct incorrect or outdated data.')}</li>
            <li><strong>{t('Cancelación:', 'Cancellation:')}</strong> {t('solicitar la eliminación de tus datos.', 'request the deletion of your data.')}</li>
            <li><strong>{t('Oposición:', 'Opposition:')}</strong> {t('oponerte al tratamiento de tus datos para ciertos fines.', 'object to the processing of your data for certain purposes.')}</li>
            <li><strong>{t('Portabilidad:', 'Portability:')}</strong> {t('recibir tus datos en formato estructurado.', 'receive your data in a structured format.')}</li>
          </ul>
          <div className="highlight">
            <p>{t('Para ejercer cualquiera de estos derechos, escríbenos a:', 'To exercise any of these rights, write to us at:')} <a href="mailto:privacidad@fitlatam.app">privacidad@fitlatam.app</a>. {t('Responderemos en un plazo máximo de 20 días hábiles.', 'We will respond within a maximum of 20 business days.')}</p>
          </div>
        </div>

        {/* 6 */}
        <div className="section" id="seguridad">
          <h2>6. {t('Seguridad de los datos', 'Data security')}</h2>
          <p>{t('Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida o alteración:', 'We implement technical and organizational measures to protect your data against unauthorized access, loss or alteration:')}</p>
          <ul>
            <li>{t('Autenticación segura con Firebase Auth (email + contraseña encriptada).', 'Secure authentication with Firebase Auth (email + encrypted password).')}</li>
            <li>{t('Acceso biométrico opcional (Face ID / Touch ID / Huella dactilar) con credenciales almacenadas en SecureStore.', 'Optional biometric access (Face ID / Touch ID / Fingerprint) with credentials stored in SecureStore.')}</li>
            <li>{t('Comunicaciones cifradas mediante HTTPS/TLS en todas las transmisiones.', 'Encrypted communications via HTTPS/TLS in all transmissions.')}</li>
            <li>{t('Reglas de seguridad de Firestore que limitan el acceso a datos propios de cada usuario.', 'Firestore security rules that limit access to each user\'s own data.')}</li>
            <li>{t('Monitoreo continuo de errores y vulnerabilidades mediante Sentry.', 'Continuous error and vulnerability monitoring via Sentry.')}</li>
          </ul>
        </div>

        {/* 7 */}
        <div className="section" id="retencion">
          <h2>7. {t('Retención de datos', 'Data retention')}</h2>
          <p>{t('Conservamos tus datos personales mientras tu cuenta esté activa. Si solicitas la eliminación de tu cuenta, borraremos tus datos en un plazo de 30 días hábiles, excepto aquellos que debamos conservar por obligación legal (por ejemplo, registros de transacciones).', 'We retain your personal data while your account is active. If you request the deletion of your account, we will delete your data within 30 business days, except for data we must retain by legal obligation (for example, transaction records).')}</p>
        </div>

        {/* 8 */}
        <div className="section" id="menores">
          <h2>8. {t('Menores de edad', 'Minors')}</h2>
          <p>{t('FitLatam no está dirigida a menores de 13 años. No recopilamos intencionalmente datos de niños menores de 13 años. Si eres padre o tutor y crees que tu hijo nos ha proporcionado datos personales, contáctanos a privacidad@fitlatam.app para solicitar su eliminación.', 'FitLatam is not directed at children under 13 years of age. We do not intentionally collect data from children under 13. If you are a parent or guardian and believe your child has provided us with personal data, contact us at privacidad@fitlatam.app to request its deletion.')}</p>
        </div>

        {/* 9 */}
        <div className="section" id="cambios">
          <h2>9. {t('Cambios a esta política', 'Changes to this policy')}</h2>
          <p>{t('Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Te notificaremos con al menos 15 días de anticipación mediante un aviso en la app o por correo electrónico antes de que los cambios entren en vigor.', 'We reserve the right to modify this Privacy Policy at any time. We will notify you at least 15 days in advance through a notice in the app or by email before the changes take effect.')}</p>
        </div>

        {/* 10 */}
        <div className="section" id="contacto">
          <h2>10. {t('Contacto', 'Contact')}</h2>
          <p>{t('Para cualquier consulta sobre esta Política de Privacidad o el tratamiento de tus datos:', 'For any questions about this Privacy Policy or the processing of your data:')}</p>
          <ul>
            <li>{t('Correo privacidad:', 'Privacy email:')} <a href="mailto:privacidad@fitlatam.app">privacidad@fitlatam.app</a></li>
            <li>{t('Correo soporte:', 'Support email:')} <a href="mailto:soporte@fitlatam.app">soporte@fitlatam.app</a></li>
            <li>{t('Sitio web:', 'Website:')} <a href="https://fitlatam.lat">https://fitlatam.lat</a></li>
          </ul>
        </div>

      </div>

      <footer>
        <div className="footer-logo">Fit<span>Latam</span></div>
        <p className="footer-copy">© 2026 FitLatam. {t('Todos los derechos reservados.', 'All rights reserved.')}</p>
      </footer>
    </>
  );
}
