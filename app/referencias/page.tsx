'use client';

export default function Referencias() {
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
        .page-intro { font-size:1rem; color:var(--text-mid); line-height:1.75; margin-bottom:48px; max-width:600px; }
        .section-card { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:28px; margin-bottom:24px; }
        .section-header { display:flex; align-items:center; gap:12px; margin-bottom:20px; }
        .section-icon { font-size:1.5rem; }
        .section-title { font-family:'Poppins',sans-serif; font-size:1.1rem; font-weight:700; color:var(--text); }
        .ref-list { list-style:none; display:flex; flex-direction:column; gap:14px; }
        .ref-item { padding:14px 16px; background:var(--bg2); border-radius:10px; border-left:3px solid var(--primary); }
        .ref-item.secondary { border-left-color:var(--secondary); }
        .ref-item.purple { border-left-color:var(--purple); }
        .ref-title { font-weight:600; font-size:0.9rem; color:var(--text); margin-bottom:4px; }
        .ref-source { font-size:0.8rem; color:var(--text-muted); margin-bottom:6px; }
        .ref-link { display:inline-flex; align-items:center; gap:4px; font-size:0.8rem; color:var(--primary); font-weight:600; text-decoration:none; }
        .ref-link:hover { text-decoration:underline; }
        .disclaimer { background:rgba(92,107,192,0.05); border:1px solid rgba(92,107,192,0.15); border-radius:12px; padding:20px; margin-top:40px; }
        .disclaimer p { font-size:0.875rem; color:var(--text-mid); line-height:1.7; }
        .disclaimer strong { color:var(--text); }
        .updated { font-size:0.8rem; color:var(--text-muted); margin-top:32px; }
      `}</style>

      <div className="page-wrap">
        <a href="/" className="back-link">← Volver a FitLatam</a>

        <div className="page-tag">📚 Evidencia científica</div>
        <h1>Referencias científicas</h1>
        <p className="page-intro">
          Los planes de nutrición, cálculos de macronutrientes y recomendaciones de FitLatam están basados en evidencia científica
          publicada por organizaciones internacionales de salud y deporte. A continuación encontrarás las principales fuentes.
        </p>

        {/* MACROS Y CALORÍAS */}
        <div className="section-card">
          <div className="section-header">
            <span className="section-icon">🔢</span>
            <div className="section-title">Cálculo de macronutrientes y calorías</div>
          </div>
          <ul className="ref-list">
            <li className="ref-item">
              <div className="ref-title">Ecuación de Harris-Benedict (revisada por Mifflin-St Jeor)</div>
              <div className="ref-source">Mifflin MD, et al. — American Journal of Clinical Nutrition, 1990</div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/2305711/" target="_blank" rel="noopener noreferrer" className="ref-link">Ver en PubMed →</a>
            </li>
            <li className="ref-item">
              <div className="ref-title">Distribución de macronutrientes para rendimiento físico</div>
              <div className="ref-source">American College of Sports Medicine (ACSM) — Position Stand, 2016</div>
              <a href="https://www.acsm.org/education-resources/trending-topics-resources/position-statements" target="_blank" rel="noopener noreferrer" className="ref-link">Ver en ACSM →</a>
            </li>
            <li className="ref-item">
              <div className="ref-title">Requerimientos de energía en adultos físicamente activos</div>
              <div className="ref-source">World Health Organization (WHO/OMS) — Technical Report Series, 2004</div>
              <a href="https://www.who.int/publications/i/item/9241209682" target="_blank" rel="noopener noreferrer" className="ref-link">Ver en WHO →</a>
            </li>
          </ul>
        </div>

        {/* PROTEÍNAS */}
        <div className="section-card">
          <div className="section-header">
            <span className="section-icon">💪</span>
            <div className="section-title">Requerimientos de proteína</div>
          </div>
          <ul className="ref-list">
            <li className="ref-item secondary">
              <div className="ref-title">Ingesta proteica óptima para hipertrofia muscular (1.6–2.2 g/kg)</div>
              <div className="ref-source">Morton RW, et al. — British Journal of Sports Medicine, 2018</div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/28698222/" target="_blank" rel="noopener noreferrer" className="ref-link">Ver en PubMed →</a>
            </li>
            <li className="ref-item secondary">
              <div className="ref-title">Proteína para pérdida de grasa y preservación muscular</div>
              <div className="ref-source">Helms ER, et al. — Journal of the International Society of Sports Nutrition, 2014</div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/24834017/" target="_blank" rel="noopener noreferrer" className="ref-link">Ver en PubMed →</a>
            </li>
            <li className="ref-item secondary">
              <div className="ref-title">Protein and amino acids for athletes (2.0–2.6 g/kg para élite)</div>
              <div className="ref-source">International Society of Sports Nutrition (ISSN) Position Stand, 2017</div>
              <a href="https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0177-8" target="_blank" rel="noopener noreferrer" className="ref-link">Ver en JISSN →</a>
            </li>
          </ul>
        </div>

        {/* TIMING Y NUTRICIÓN DEPORTIVA */}
        <div className="section-card">
          <div className="section-header">
            <span className="section-icon">⏱️</span>
            <div className="section-title">Timing nutricional y nutrición deportiva</div>
          </div>
          <ul className="ref-list">
            <li className="ref-item purple">
              <div className="ref-title">Nutrient timing revisited: is there a post-exercise anabolic window?</div>
              <div className="ref-source">Aragon AA, Schoenfeld BJ — Journal of the International Society of Sports Nutrition, 2013</div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/23360586/" target="_blank" rel="noopener noreferrer" className="ref-link">Ver en PubMed →</a>
            </li>
            <li className="ref-item purple">
              <div className="ref-title">Carbohidratos pre-entrenamiento para rendimiento óptimo</div>
              <div className="ref-source">Burke LM, et al. — Journal of Sports Sciences, 2011</div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/21660839/" target="_blank" rel="noopener noreferrer" className="ref-link">Ver en PubMed →</a>
            </li>
            <li className="ref-item purple">
              <div className="ref-title">Nutrition and Athletic Performance — Joint Position Statement</div>
              <div className="ref-source">ACSM, AND & DC — Medicine & Science in Sports & Exercise, 2016</div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/26891166/" target="_blank" rel="noopener noreferrer" className="ref-link">Ver en PubMed →</a>
            </li>
          </ul>
        </div>

        {/* HIDRATACIÓN */}
        <div className="section-card">
          <div className="section-header">
            <span className="section-icon">💧</span>
            <div className="section-title">Hidratación</div>
          </div>
          <ul className="ref-list">
            <li className="ref-item">
              <div className="ref-title">Recomendaciones de ingesta de agua (2–3 L/día para adultos activos)</div>
              <div className="ref-source">European Food Safety Authority (EFSA) — Journal 2010</div>
              <a href="https://efsa.onlinelibrary.wiley.com/doi/abs/10.2903/j.efsa.2010.1459" target="_blank" rel="noopener noreferrer" className="ref-link">Ver en EFSA →</a>
            </li>
            <li className="ref-item">
              <div className="ref-title">Exercise and fluid replacement position stand</div>
              <div className="ref-source">American College of Sports Medicine (ACSM), 2007</div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/17277604/" target="_blank" rel="noopener noreferrer" className="ref-link">Ver en PubMed →</a>
            </li>
          </ul>
        </div>

        <div className="disclaimer">
          <p>
            <strong>Nota importante:</strong> Los cálculos de FitLatam son orientativos y no constituyen asesoramiento médico.
            Las necesidades nutricionales individuales pueden variar según condiciones de salud, medicamentos u otros factores.
            Consulta a un profesional de la salud o nutricionista certificado antes de realizar cambios significativos en tu dieta.
          </p>
        </div>

        <p className="updated">Última actualización: Abril 2026 · <a href="mailto:soporte@fitlatam.lat" style={{color:'var(--primary)'}}>soporte@fitlatam.lat</a></p>
      </div>
    </>
  );
}