'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// ─── Translation helper ───────────────────────────────────────
type Lang = 'es' | 'en';

// ─── Types ────────────────────────────────────────────────────
interface LbRow { pos: string; posClass: string; avatar: string; avatarBg: string; name: string; score: string; streak: string; }

export default function FitLatamLanding() {
  const [lang, setLang] = useState<Lang>('es');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = useCallback((es: string, en: string) => lang === 'es' ? es : en, [lang]);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection observer for fade-up
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.fade-up');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const leaderboard: LbRow[] = [
    { pos: '1', posClass: 'gold',   avatar: 'A', avatarBg: 'var(--primary)',   name: 'Alejandro M.', score: '2,840 XP', streak: '🔥 9' },
    { pos: '2', posClass: 'silver', avatar: 'V', avatarBg: 'var(--secondary)', name: 'Valentina R.',  score: '2,610 XP', streak: '🔥 7' },
    { pos: '3', posClass: 'bronze', avatar: 'C', avatarBg: 'var(--purple)',    name: 'Carlos D.',     score: '2,290 XP', streak: '🔥 6' },
    { pos: '4', posClass: '',       avatar: 'L', avatarBg: 'var(--warning)',   name: 'Laura P.',      score: '1,980 XP', streak: '🔥 5' },
    { pos: '5', posClass: '',       avatar: 'M', avatarBg: '#E07070',          name: 'Mateo G.',      score: '1,740 XP', streak: '🔥 4' },
  ];

  return (
    <>
      <style>{`
        :root {
          --bg:#F9FAFB; --bg2:#EDF0F7; --card:#FFFFFF;
          --primary:#5C6BC0; --primary-dark:#3F51B5;
          --secondary:#43A99A; --accent:#8B7EC8; --purple:#7E57C2;
          --text:#22223B; --text-mid:#4A4E69; --text-muted:#9A8C98;
          --warning:#F4A261; --border:#E2E5F0; --success:#43A99A;
        }
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { font-family:'Inter',sans-serif; background:var(--bg); color:var(--text); line-height:1.6; overflow-x:hidden; }

        /* TYPOGRAPHY */
        h1,h2,h3,h4,h5 { font-family:'Poppins',sans-serif; line-height:1.2; }
        .display { font-size:clamp(2.8rem,6vw,5rem); font-weight:900; letter-spacing:-0.03em; line-height:1.05; }
        .display-primary { color:var(--primary); }
        .display-secondary { color:var(--secondary); }
        .section-title { font-size:clamp(1.8rem,3.5vw,2.8rem); font-weight:800; letter-spacing:-0.02em; }
        .section-sub { font-size:1rem; color:var(--text-muted); max-width:520px; line-height:1.7; }

        /* NAV */
        nav { position:fixed; top:0; left:0; right:0; z-index:100; padding:0 5%; display:flex; align-items:center; gap:32px; height:68px; background:rgba(249,250,251,0.92); backdrop-filter:blur(16px); border-bottom:1px solid var(--border); transition:box-shadow 0.3s; }
        nav.scrolled { box-shadow:0 2px 20px rgba(92,107,192,0.08); }
        .nav-logo { font-family:'Poppins',sans-serif; font-weight:800; font-size:1.3rem; color:var(--text); text-decoration:none; letter-spacing:-0.02em; }
        .nav-logo span { color:var(--primary); }
        .nav-links { display:flex; gap:28px; margin-left:auto; align-items:center; }
        .nav-links a { font-size:0.875rem; font-weight:500; color:var(--text-mid); text-decoration:none; transition:color 0.2s; }
        .nav-links a:hover { color:var(--primary); }
        .lang-toggle { display:flex; background:var(--bg2); border-radius:20px; padding:3px; gap:2px; }
        .lang-btn { font-size:0.75rem; font-weight:600; padding:4px 12px; border-radius:16px; border:none; cursor:pointer; background:transparent; color:var(--text-muted); transition:all 0.2s; font-family:'Inter',sans-serif; }
        .lang-btn.active { background:var(--primary); color:white; }
        .nav-cta { background:var(--primary); color:white; padding:9px 22px; border-radius:10px; font-size:0.875rem; font-weight:600; text-decoration:none; transition:all 0.2s; font-family:'Poppins',sans-serif; }
        .nav-cta:hover { background:var(--primary-dark); transform:translateY(-1px); }
        .hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; padding:4px; background:none; border:none; }
        .hamburger span { width:24px; height:2px; background:var(--text); border-radius:2px; transition:all 0.3s; display:block; }

        /* HERO */
        .hero { min-height:100vh; padding:120px 5% 80px; display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; max-width:1280px; margin:0 auto; }
        .hero-tag { display:inline-flex; align-items:center; gap:8px; background:rgba(92,107,192,0.08); border:1px solid rgba(92,107,192,0.2); border-radius:20px; padding:6px 16px; font-size:0.8rem; font-weight:600; color:var(--primary); margin-bottom:24px; font-family:'Poppins',sans-serif; }
        .hero-tag::before { content:''; width:6px; height:6px; border-radius:50%; background:var(--secondary); animation:blink 2s ease-in-out infinite; flex-shrink:0; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .hero-desc { font-size:1.1rem; color:var(--text-mid); margin:24px 0 36px; max-width:480px; line-height:1.75; }
        .hero-btns { display:flex; gap:12px; flex-wrap:wrap; }
        .btn-primary { background:var(--primary); color:white; padding:14px 28px; border-radius:12px; font-size:0.95rem; font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:8px; transition:all 0.25s; font-family:'Poppins',sans-serif; border:none; cursor:pointer; }
        .btn-primary:hover { background:var(--primary-dark); transform:translateY(-2px); box-shadow:0 8px 24px rgba(92,107,192,0.3); }
        .btn-secondary { background:transparent; color:var(--primary); padding:14px 28px; border-radius:12px; font-size:0.95rem; font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:8px; transition:all 0.25s; font-family:'Poppins',sans-serif; border:2px solid var(--primary); }
        .btn-secondary:hover { background:rgba(92,107,192,0.06); transform:translateY(-2px); }
        .hero-stats { display:flex; gap:32px; margin-top:48px; padding-top:32px; border-top:1px solid var(--border); }
        .stat { display:flex; flex-direction:column; gap:2px; }
        .stat-n { font-family:'Poppins',sans-serif; font-size:1.8rem; font-weight:800; color:var(--primary); letter-spacing:-0.02em; }
        .stat-l { font-size:0.8rem; color:var(--text-muted); font-weight:500; }

        /* PHONE MOCKUP */
        .hero-visual { position:relative; display:flex; justify-content:center; align-items:center; }
        .phone-mockup { width:280px; height:560px; background:var(--text); border-radius:40px; position:relative; overflow:hidden; box-shadow:0 40px 80px rgba(34,34,59,0.25); border:8px solid var(--text); }
        .phone-screen { width:100%; height:100%; background:linear-gradient(160deg,#5C6BC0 0%,#3F51B5 40%,#43A99A 100%); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px; padding:24px; }
        .phone-notch { width:80px; height:24px; background:var(--text); border-radius:0 0 16px 16px; position:absolute; top:0; left:50%; transform:translateX(-50%); }
        .phone-card { background:rgba(255,255,255,0.12); backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,0.2); border-radius:16px; padding:16px; width:100%; }
        .phone-card-title { font-family:'Poppins',sans-serif; font-size:0.75rem; font-weight:700; color:white; margin-bottom:8px; }
        .phone-card-val { font-family:'Poppins',sans-serif; font-size:1.4rem; font-weight:800; color:white; }
        .phone-card-sub { font-size:0.65rem; color:rgba(255,255,255,0.7); margin-top:2px; }
        .phone-bar { height:6px; background:rgba(255,255,255,0.2); border-radius:3px; margin-top:8px; overflow:hidden; }
        .phone-bar-fill { height:100%; border-radius:3px; background:var(--warning); width:72%; }
        .floating-badge { position:absolute; background:white; border-radius:14px; padding:10px 16px; box-shadow:0 8px 32px rgba(34,34,59,0.15); display:flex; align-items:center; gap:10px; font-family:'Poppins',sans-serif; }
        .fb-1 { top:15%; right:-10%; animation:float 3s ease-in-out infinite; }
        .fb-2 { bottom:20%; left:-8%; animation:float 3s ease-in-out infinite 1.5s; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .fb-icon { font-size:1.4rem; }
        .fb-text { display:flex; flex-direction:column; }
        .fb-label { font-size:0.65rem; color:var(--text-muted); font-weight:500; }
        .fb-value { font-size:0.85rem; font-weight:700; color:var(--text); }
        .hero-bg-shape { position:absolute; top:-10%; right:-5%; width:500px; height:500px; background:radial-gradient(circle,rgba(92,107,192,0.08) 0%,transparent 70%); border-radius:50%; pointer-events:none; z-index:-1; }

        /* SECTIONS */
        section { padding:80px 5%; max-width:1280px; margin:0 auto; }
        .section-header { margin-bottom:56px; }
        .section-label { font-size:0.75rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--primary); font-family:'Poppins',sans-serif; margin-bottom:12px; display:block; }

        /* HOW IT WORKS */
        .how-wrap { background:var(--card); border-radius:24px; padding:60px; border:1px solid var(--border); }
        .steps { display:grid; grid-template-columns:repeat(3,1fr); gap:40px; position:relative; }
        .steps::before { content:''; position:absolute; top:28px; left:calc(16.67% + 20px); right:calc(16.67% + 20px); height:1px; background:linear-gradient(90deg,var(--primary),var(--secondary)); opacity:0.3; }
        .step-item { display:flex; flex-direction:column; gap:16px; align-items:flex-start; }
        .step-num { width:56px; height:56px; border-radius:16px; background:var(--primary); color:white; font-family:'Poppins',sans-serif; font-size:1.2rem; font-weight:800; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .step-num.s2 { background:var(--secondary); }
        .step-num.s3 { background:var(--purple); }
        .step-title { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:700; color:var(--text); }
        .step-desc { font-size:0.875rem; color:var(--text-muted); line-height:1.7; }

        /* PLANS */
        .plans-bg { background:var(--text); padding:80px 5%; }
        .plans-inner { max-width:1280px; margin:0 auto; }
        .plans-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:48px; }
        .plan-card { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:32px; position:relative; transition:all 0.3s; }
        .plan-card:hover { transform:translateY(-4px); background:rgba(255,255,255,0.08); }
        .plan-card.featured { background:var(--primary); border-color:var(--primary); }
        .plan-featured-tag { position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:var(--warning); color:var(--text); font-size:0.7rem; font-weight:700; padding:4px 16px; border-radius:20px; font-family:'Poppins',sans-serif; white-space:nowrap; }
        .plan-name { font-family:'Poppins',sans-serif; font-size:0.8rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-bottom:12px; }
        .plan-price { font-family:'Poppins',sans-serif; font-size:2.8rem; font-weight:900; color:white; letter-spacing:-0.03em; line-height:1; }
        .plan-price span { font-size:1rem; font-weight:400; opacity:0.6; }
        .plan-period { font-size:0.8rem; color:rgba(255,255,255,0.5); margin-top:4px; margin-bottom:24px; }
        .plan-divider { height:1px; background:rgba(255,255,255,0.1); margin-bottom:24px; }
        .plan-features { display:flex; flex-direction:column; gap:10px; margin-bottom:28px; }
        .plan-feat { display:flex; align-items:flex-start; gap:10px; font-size:0.875rem; color:rgba(255,255,255,0.75); }
        .plan-feat::before { content:'✓'; color:var(--secondary); font-weight:700; flex-shrink:0; margin-top:1px; }
        .plan-card.featured .plan-feat::before { color:rgba(255,255,255,0.9); }
        .plan-btn { display:block; text-align:center; padding:13px; border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.9rem; font-weight:700; text-decoration:none; transition:all 0.2s; }
        .plan-btn-outline { border:2px solid rgba(255,255,255,0.3); color:white; }
        .plan-btn-outline:hover { border-color:white; background:rgba(255,255,255,0.05); }
        .plan-btn-solid { background:white; color:var(--primary); }
        .plan-btn-solid:hover { background:var(--bg2); transform:translateY(-1px); }

        /* BLOG */
        .blog-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .blog-card { background:var(--card); border:1px solid var(--border); border-radius:16px; overflow:hidden; transition:all 0.25s; cursor:pointer; }
        .blog-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(92,107,192,0.1); }
        .blog-img { height:180px; display:flex; align-items:center; justify-content:center; font-size:3rem; position:relative; overflow:hidden; }
        .blog-img-1 { background:linear-gradient(135deg,rgba(92,107,192,0.15),rgba(92,107,192,0.05)); }
        .blog-img-2 { background:linear-gradient(135deg,rgba(67,169,154,0.15),rgba(67,169,154,0.05)); }
        .blog-img-3 { background:linear-gradient(135deg,rgba(126,87,194,0.15),rgba(126,87,194,0.05)); }
        .blog-body { padding:20px; }
        .blog-tag { font-size:0.7rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--primary); font-family:'Poppins',sans-serif; margin-bottom:8px; display:block; }
        .blog-title { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:700; color:var(--text); margin-bottom:8px; line-height:1.4; }
        .blog-excerpt { font-size:0.8rem; color:var(--text-muted); line-height:1.65; margin-bottom:16px; }
        .blog-meta { display:flex; align-items:center; gap:8px; font-size:0.75rem; color:var(--text-muted); }
        .blog-dot { width:3px; height:3px; border-radius:50%; background:var(--border); }

        /* COMMUNITY */
        .community-wrap { background:linear-gradient(135deg,rgba(92,107,192,0.06) 0%,rgba(67,169,154,0.06) 100%); border:1px solid var(--border); border-radius:24px; padding:60px; }
        .community-grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
        .community-features { display:flex; flex-direction:column; gap:20px; margin-top:32px; }
        .comm-feat { display:flex; align-items:flex-start; gap:16px; }
        .comm-icon { width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.2rem; flex-shrink:0; }
        .ci-1 { background:rgba(92,107,192,0.1); }
        .ci-2 { background:rgba(67,169,154,0.1); }
        .ci-3 { background:rgba(244,162,97,0.1); }
        .comm-feat-title { font-family:'Poppins',sans-serif; font-size:0.95rem; font-weight:700; color:var(--text); margin-bottom:4px; }
        .comm-feat-desc { font-size:0.85rem; color:var(--text-muted); line-height:1.6; }
        .leaderboard { background:var(--card); border-radius:16px; padding:24px; border:1px solid var(--border); }
        .lb-title { font-family:'Poppins',sans-serif; font-size:0.9rem; font-weight:700; color:var(--text); margin-bottom:16px; display:flex; align-items:center; gap:8px; }
        .lb-row { display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px solid var(--border); }
        .lb-row:last-child { border-bottom:none; }
        .lb-pos { font-family:'Poppins',sans-serif; font-size:0.85rem; font-weight:700; width:24px; color:var(--text-muted); }
        .lb-pos.gold { color:#F59E0B; }
        .lb-pos.silver { color:#9CA3AF; }
        .lb-pos.bronze { color:#D97706; }
        .lb-avatar { width:36px; height:36px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-family:'Poppins',sans-serif; font-size:0.85rem; font-weight:800; color:white; flex-shrink:0; }
        .lb-name { font-size:0.875rem; font-weight:500; color:var(--text); flex:1; }
        .lb-score { font-family:'Poppins',sans-serif; font-size:0.85rem; font-weight:700; color:var(--primary); }
        .lb-badge { font-size:0.75rem; background:rgba(244,162,97,0.12); color:var(--warning); border:1px solid rgba(244,162,97,0.25); border-radius:6px; padding:2px 8px; font-family:'Poppins',sans-serif; font-weight:600; }

        /* CTA BANNER */
        .cta-banner { background:var(--primary); border-radius:24px; padding:60px; text-align:center; margin:0 auto 80px; max-width:1280px; }
        .cta-banner h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,3vw,2.8rem); font-weight:800; color:white; margin-bottom:16px; letter-spacing:-0.02em; }
        .cta-banner p { color:rgba(255,255,255,0.7); font-size:1rem; margin-bottom:32px; }
        .cta-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .btn-white { background:white; color:var(--primary); padding:14px 28px; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.95rem; font-weight:700; text-decoration:none; transition:all 0.2s; }
        .btn-white:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,0.2); }
        .btn-ghost { background:transparent; color:white; border:2px solid rgba(255,255,255,0.4); padding:14px 28px; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.95rem; font-weight:700; text-decoration:none; transition:all 0.2s; }
        .btn-ghost:hover { border-color:white; background:rgba(255,255,255,0.08); }

        /* FOOTER */
        footer { background:var(--text); padding:60px 5% 32px; }
        .footer-inner { max-width:1280px; margin:0 auto; }
        .footer-top { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:48px; margin-bottom:48px; }
        .footer-logo { font-family:'Poppins',sans-serif; font-weight:800; font-size:1.3rem; color:white; letter-spacing:-0.02em; margin-bottom:12px; }
        .footer-logo span { color:var(--secondary); }
        .footer-desc { font-size:0.875rem; color:rgba(255,255,255,0.4); line-height:1.7; max-width:280px; }
        .footer-col h4 { font-family:'Poppins',sans-serif; font-size:0.8rem; font-weight:700; color:rgba(255,255,255,0.5); letter-spacing:0.08em; text-transform:uppercase; margin-bottom:16px; }
        .footer-col a { display:block; font-size:0.875rem; color:rgba(255,255,255,0.4); text-decoration:none; margin-bottom:10px; transition:color 0.2s; }
        .footer-col a:hover { color:white; }
        .footer-bottom { border-top:1px solid rgba(255,255,255,0.08); padding-top:24px; display:flex; align-items:center; justify-content:space-between; }
        .footer-copy { font-size:0.8rem; color:rgba(255,255,255,0.3); }
        .footer-social { display:flex; gap:12px; }
        .social-btn { width:36px; height:36px; border-radius:9px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.5); font-size:0.85rem; text-decoration:none; transition:all 0.2s; }
        .social-btn:hover { background:rgba(255,255,255,0.12); color:white; }

        /* ANIMATIONS */
        .fade-up { opacity:0; transform:translateY(24px); transition:opacity 0.6s ease, transform 0.6s ease; }
        .fade-up.visible { opacity:1; transform:translateY(0); }
        .fade-up:nth-child(2) { transition-delay:0.1s; }
        .fade-up:nth-child(3) { transition-delay:0.2s; }

        /* MOBILE NAV */
        .nav-mobile-open { display:flex !important; flex-direction:column; position:absolute; top:68px; left:0; right:0; background:rgba(249,250,251,0.98); backdrop-filter:blur(16px); padding:20px 5%; border-bottom:1px solid var(--border); gap:16px; z-index:99; }

        /* RESPONSIVE */
        @media(max-width:900px) {
          .hero { grid-template-columns:1fr; padding-top:100px; }
          .hero-visual { display:none; }
          .steps { grid-template-columns:1fr; }
          .steps::before { display:none; }
          .plans-grid { grid-template-columns:1fr; }
          .blog-grid { grid-template-columns:1fr; }
          .community-grid { grid-template-columns:1fr; }
          .footer-top { grid-template-columns:1fr 1fr; }
          .nav-links:not(.nav-mobile-open) { display:none; }
          .hamburger { display:flex !important; }
        }
        @media(max-width:600px) {
          .footer-top { grid-template-columns:1fr; }
          .how-wrap { padding:32px 24px; }
          .community-wrap { padding:32px 24px; }
          .cta-banner { padding:40px 24px; }
        }
      `}</style>

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {/* ── NAV ── */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">Fit<span>Latam</span></a>

        {/* Desktop nav */}
        <div className="nav-links" style={{ display: 'flex' }}>
          <a href="#how">{t('Cómo funciona', 'How it works')}</a>
          <a href="#plans">{t('Planes', 'Plans')}</a>
          <a href="#blog">Blog</a>
          <a href="#community">{t('Comunidad', 'Community')}</a>
          <div className="lang-toggle">
            <button className={`lang-btn${lang === 'es' ? ' active' : ''}`} onClick={() => setLang('es')}>ES</button>
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
          </div>
          <a href="#plans" className="nav-cta">{t('Comenzar ahora', 'Get started')}</a>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} style={{ display: 'none' }}>
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-links nav-mobile-open">
          <a href="#how" onClick={() => setMenuOpen(false)}>{t('Cómo funciona', 'How it works')}</a>
          <a href="#plans" onClick={() => setMenuOpen(false)}>{t('Planes', 'Plans')}</a>
          <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#community" onClick={() => setMenuOpen(false)}>{t('Comunidad', 'Community')}</a>
          <div className="lang-toggle" style={{ alignSelf: 'flex-start' }}>
            <button className={`lang-btn${lang === 'es' ? ' active' : ''}`} onClick={() => setLang('es')}>ES</button>
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
          </div>
          <a href="#plans" className="nav-cta" onClick={() => setMenuOpen(false)} style={{ alignSelf: 'flex-start' }}>
            {t('Comenzar ahora', 'Get started')}
          </a>
        </div>
      )}

      {/* ── HERO ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <section className="hero" style={{ paddingTop: 120, paddingBottom: 80, maxWidth: 'none' }}>
          <div className="hero-content">
            <div className="hero-tag">{t('🌎 Para toda Latinoamérica', '🌎 For all Latin America')}</div>
            <h1 className="display">
              <span className="display-primary" dangerouslySetInnerHTML={{ __html: t('Ejercítate.<br>Aliméntate.<br>', 'Transformate.<br>Nourish.<br>') }} />
              <span className="display-secondary">{t('Transforma.', 'Transform.')}</span>
            </h1>
            <p className="hero-desc">
              {t(
                'Planes de entrenamiento y nutrición 100% personalizados. Adaptados a tu cuerpo, tu objetivo y tu país. Sin excusas.',
                '100% personalized training and nutrition plans. Adapted to your body, your goal, and your country. No excuses.'
              )}
            </p>
            <div className="hero-btns">
              <a href="#plans" className="btn-primary">{t('📱 Descargar app gratis', '📱 Download app free')}</a>
              <a href="#how" className="btn-secondary">{t('Ver cómo funciona', 'See how it works')}</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-n">15+</span>
                <span className="stat-l">{t('Países LATAM', 'LATAM countries')}</span>
              </div>
              <div className="stat">
                <span className="stat-n">50+</span>
                <span className="stat-l">{t('Ejercicios con video', 'Exercises with video')}</span>
              </div>
              <div className="stat">
                <span className="stat-n">3</span>
                <span className="stat-l">{t('Planes personalizados', 'Personalized plans')}</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-bg-shape" />
            <div className="phone-mockup">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', alignSelf: 'flex-start' }}>
                  FitLatam PRO
                </div>
                <div className="phone-card">
                  <div className="phone-card-title">🔥 {t('SESIÓN DE HOY', "TODAY'S SESSION")}</div>
                  <div className="phone-card-val">{t('Fuerza · Piernas', 'Strength · Legs')}</div>
                  <div className="phone-card-sub">45 min · {t('Gimnasio completo', 'Full gym')}</div>
                  <div className="phone-bar"><div className="phone-bar-fill" /></div>
                </div>
                <div className="phone-card">
                  <div className="phone-card-title">🥗 {t('MENÚ DEL DÍA', "TODAY'S MENU")}</div>
                  <div className="phone-card-val">1,850 kcal</div>
                  <div className="phone-card-sub">{t('Proteína · Carbos · Grasas', 'Protein · Carbs · Fats')}</div>
                </div>
                <div style={{ display: 'flex', gap: 8, width: '100%' }}>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: 12, textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1.2rem', fontWeight: 800, color: 'white' }}>38</div>
                    <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)' }}>{t('Sesiones', 'Sessions')}</div>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: 12, textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1.2rem', fontWeight: 800, color: '#F4A261' }}>9🔥</div>
                    <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)' }}>{t('Racha', 'Streak')}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-badge fb-1">
              <span className="fb-icon">🏆</span>
              <div className="fb-text">
                <span className="fb-label">{t('Logro desbloqueado', 'Achievement unlocked')}</span>
                <span className="fb-value">{t('Semana perfecta', 'Perfect week')}</span>
              </div>
            </div>
            <div className="floating-badge fb-2">
              <span className="fb-icon">🥗</span>
              <div className="fb-text">
                <span className="fb-label">{t('Menú adaptado', 'Adapted menu')}</span>
                <span className="fb-value">México 🇲🇽</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div style={{ background: 'var(--bg2)', padding: '80px 5%' }} id="how">
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">{t('Proceso', 'Process')}</span>
            <h2 className="section-title">{t('Simple. Personalizado. Efectivo.', 'Simple. Personalized. Effective.')}</h2>
          </div>
          <div className="how-wrap">
            <div className="steps">
              <div className="step-item fade-up">
                <div className="step-num">01</div>
                <div>
                  <div className="step-title">{t('Cuéntanos sobre ti', 'Tell us about you')}</div>
                  <p className="step-desc">{t('Completa tu perfil fitness: objetivo, nivel, equipo disponible, condición física y preferencias de nutrición.', 'Complete your fitness profile: goal, level, available equipment, physical condition and nutrition preferences.')}</p>
                </div>
              </div>
              <div className="step-item fade-up">
                <div className="step-num s2">02</div>
                <div>
                  <div className="step-title">{t('Recibe tu plan', 'Get your plan')}</div>
                  <p className="step-desc">{t('Generamos tu rutina y menú personalizados al instante. Adaptados a tu país, ingredientes locales y tu horario.', 'We generate your personalized routine and menu instantly. Adapted to your country, local ingredients and your schedule.')}</p>
                </div>
              </div>
              <div className="step-item fade-up">
                <div className="step-num s3">03</div>
                <div>
                  <div className="step-title">{t('Entrena y evoluciona', 'Train and evolve')}</div>
                  <p className="step-desc">{t('Sigue tus sesiones con videos, registra tu progreso, compite en la comunidad y mejora cada día.', 'Follow your sessions with videos, track your progress, compete in the community and improve every day.')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PLANS ── */}
      <div style={{ background: 'var(--text)', padding: '80px 5%' }} id="plans">
        <div className="plans-inner">
          <div className="section-header">
            <span className="section-label" style={{ color: 'var(--secondary)' }}>{t('Planes', 'Plans')}</span>
            <h2 className="section-title" style={{ color: 'white' }}>{t('Elige tu transformación', 'Choose your transformation')}</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.5)', marginTop: 12 }}>
              {t('Sin contratos. Cancela cuando quieras. Pago seguro con MercadoPago.', 'No contracts. Cancel anytime. Secure payment with MercadoPago.')}
            </p>
          </div>
          <div className="plans-grid">
            {/* Starter */}
            <div className="plan-card fade-up">
              <div className="plan-name">Starter</div>
              <div className="plan-price">$99<span> MXN</span></div>
              <div className="plan-period">{t('/ mes', '/ month')}</div>
              <div className="plan-divider" />
              <div className="plan-features">
                <div className="plan-feat">{t('Plan de entrenamiento personalizado', 'Personalized training plan')}</div>
                <div className="plan-feat">{t('2 opciones de rutina por objetivo', '2 routine options per goal')}</div>
                <div className="plan-feat">{t('Tutorial en YouTube por ejercicio', 'YouTube tutorial per exercise')}</div>
                <div className="plan-feat">{t('Racha y registro de sesiones', 'Streak and session tracking')}</div>
                <div className="plan-feat">{t('Más de 50 ejercicios', '50+ exercises')}</div>
              </div>
              <a href="#" className="plan-btn plan-btn-outline">{t('Comenzar con Starter', 'Start with Starter')}</a>
            </div>

            {/* Pro — Featured */}
            <div className="plan-card featured fade-up">
              <div className="plan-featured-tag">{t('⭐ Más popular', '⭐ Most popular')}</div>
              <div className="plan-name">Pro</div>
              <div className="plan-price">$199<span> MXN</span></div>
              <div className="plan-period">{t('/ mes', '/ month')}</div>
              <div className="plan-divider" style={{ background: 'rgba(255,255,255,0.2)' }} />
              <div className="plan-features">
                <div className="plan-feat">{t('Todo lo del plan Starter', 'Everything in Starter')}</div>
                <div className="plan-feat">{t('Plan de nutrición personalizado', 'Personalized nutrition plan')}</div>
                <div className="plan-feat">{t('3 opciones de menú diario', '3 daily menu options')}</div>
                <div className="plan-feat">{t('Ingredientes adaptados a tu país', 'Ingredients adapted to your country')}</div>
                <div className="plan-feat">{t('Yoga Flow y Estiramientos', 'Yoga Flow and Stretching')}</div>
                <div className="plan-feat">{t('Integración Garmin (próximamente)', 'Garmin integration (coming soon)')}</div>
              </div>
              <a href="#" className="plan-btn plan-btn-solid">{t('Comenzar con Pro', 'Start with Pro')}</a>
            </div>

            {/* Elite */}
            <div className="plan-card fade-up">
              <div className="plan-name">Elite</div>
              <div className="plan-price">$299<span> MXN</span></div>
              <div className="plan-period">{t('/ mes', '/ month')}</div>
              <div className="plan-divider" />
              <div className="plan-features">
                <div className="plan-feat">{t('Todo lo del plan Pro', 'Everything in Pro')}</div>
                <div className="plan-feat">{t('Menú Elite personalizable', 'Customizable Elite menu')}</div>
                <div className="plan-feat">{t('Pilates, TaiChi, Qi Gong y Mindfulness', 'Pilates, TaiChi, Qi Gong and Mindfulness')}</div>
                <div className="plan-feat">{t('Protocolo de suplementación', 'Supplementation protocol')}</div>
                <div className="plan-feat">{t('Formulario de progreso cada 30 días', 'Progress form every 30 days')}</div>
              </div>
              <a href="#" className="plan-btn plan-btn-outline">{t('Comenzar con Elite', 'Start with Elite')}</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── BLOG ── */}
      <div style={{ padding: '80px 5%' }} id="blog">
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-header" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="section-label">Blog</span>
              <h2 className="section-title">{t('Aprende mientras entrenas', 'Learn while you train')}</h2>
            </div>
            <a href="#" className="btn-secondary" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>{t('Ver todos →', 'View all →')}</a>
          </div>
          <div className="blog-grid">
            {[
              {
                img: '🏋️', imgClass: 'blog-img-1', tag: t('Entrenamiento', 'Training'),
                title: t('5 errores que cometes en sentadillas (y cómo corregirlos)', '5 squat mistakes you make (and how to fix them)'),
                excerpt: t('La sentadilla es el rey de los ejercicios, pero también el más mal ejecutado. Aquí los errores más comunes en LATAM.', 'The squat is the king of exercises, but also the most poorly executed. Here are the most common mistakes in LATAM.'),
                read: t('5 min lectura', '5 min read'),
              },
              {
                img: '🥑', imgClass: 'blog-img-2', tag: t('Nutrición', 'Nutrition'),
                title: t('Proteína en LATAM: las mejores fuentes según tu país', 'Protein in LATAM: the best sources by country'),
                excerpt: t('Desde frijoles en México hasta lentejas en Argentina. Guía completa de proteína económica para cada país.', 'From beans in Mexico to lentils in Argentina. Complete guide to affordable protein for each country.'),
                read: t('7 min lectura', '7 min read'),
              },
              {
                img: '🧘', imgClass: 'blog-img-3', tag: t('Bienestar', 'Wellness'),
                title: t('Por qué el yoga mejora tu rendimiento en el gimnasio', 'Why yoga improves your gym performance'),
                excerpt: t('La flexibilidad y el control de la respiración son las armas secretas de los atletas de élite. Te explicamos cómo.', 'Flexibility and breath control are the secret weapons of elite athletes. We explain how.'),
                read: t('4 min lectura', '4 min read'),
              },
            ].map((post, i) => (
              <div className="blog-card fade-up" key={i}>
                <div className={`blog-img ${post.imgClass}`}>{post.img}</div>
                <div className="blog-body">
                  <span className="blog-tag">{post.tag}</span>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span>{t('Equipo FitLatam', 'FitLatam Team')}</span>
                    <span className="blog-dot" />
                    <span>{post.read}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── COMMUNITY ── */}
      <div style={{ padding: '0 5% 80px' }} id="community">
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="community-wrap">
            <div className="community-grid">
              <div>
                <span className="section-label">{t('Comunidad', 'Community')}</span>
                <h2 className="section-title">{t('No entrenas solo', "You don't train alone")}</h2>
                <p className="section-sub" style={{ marginTop: 12 }}>
                  {t('Únete a miles de personas en LATAM que se retaron a transformar su vida. Compite, logra y celebra.', 'Join thousands of people in LATAM who challenged themselves to transform their lives. Compete, achieve and celebrate.')}
                </p>
                <div className="community-features">
                  {[
                    { icon: '🏆', cls: 'ci-1', title: t('Retos mensuales', 'Monthly challenges'), desc: t('Desafíos de 30 días diseñados para toda la comunidad. Desde principiantes hasta atletas.', '30-day challenges designed for the whole community. From beginners to athletes.') },
                    { icon: '📊', cls: 'ci-2', title: t('Ranking global', 'Global ranking'), desc: t('Compite con usuarios de toda LATAM. Sube en el ranking completando sesiones y manteniendo tu racha.', 'Compete with users from all of LATAM. Climb the ranking by completing sessions and maintaining your streak.') },
                    { icon: '🎖️', cls: 'ci-3', title: t('Insignias y logros', 'Badges and achievements'), desc: t('Desbloquea insignias por consistencia, fuerza, nutrición y bienestar. Muéstralas en tu perfil.', 'Unlock badges for consistency, strength, nutrition and wellness. Show them on your profile.') },
                  ].map((feat, i) => (
                    <div className="comm-feat" key={i}>
                      <div className={`comm-icon ${feat.cls}`}>{feat.icon}</div>
                      <div>
                        <div className="comm-feat-title">{feat.title}</div>
                        <p className="comm-feat-desc">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leaderboard */}
              <div className="leaderboard">
                <div className="lb-title">🏆 {t('Ranking esta semana', "This week's ranking")}</div>
                {leaderboard.map((row, i) => (
                  <div className="lb-row" key={i}>
                    <span className={`lb-pos${row.posClass ? ` ${row.posClass}` : ''}`}>{row.pos}</span>
                    <div className="lb-avatar" style={{ background: row.avatarBg }}>{row.avatar}</div>
                    <span className="lb-name">{row.name}</span>
                    <span className="lb-score">{row.score}</span>
                    <span className="lb-badge">{row.streak}</span>
                  </div>
                ))}
                <div style={{ marginTop: 16, padding: 12, background: 'rgba(92,107,192,0.06)', borderRadius: 10, textAlign: 'center' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('¿Listo para entrar al ranking?', 'Ready to enter the ranking?')}</p>
                  <a href="#plans" className="btn-primary" style={{ marginTop: 8, display: 'inline-flex', fontSize: '0.8rem', padding: '8px 18px' }}>{t('Únete ahora', 'Join now')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div style={{ padding: '0 5%' }}>
        <div className="cta-banner">
          <h2>{t('Tu transformación empieza hoy', 'Your transformation starts today')}</h2>
          <p>{t('Descarga FitLatam. Sin tarjeta de crédito para empezar.', 'Download FitLatam. No credit card to start.')}</p>
          <div className="cta-btns">
            <a href="#" className="btn-white">📱 App Store</a>
            <a href="#" className="btn-white">🤖 Google Play</a>
            <a href="#plans" className="btn-ghost">{t('Ver planes →', 'See plans →')}</a>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-logo">Fit<span>Latam</span></div>
              <p className="footer-desc">{t('Entrenamiento y nutrición personalizada para toda Latinoamérica. Tu mejor versión, adaptada a tu país.', 'Personalized training and nutrition for all of Latin America. Your best version, adapted to your country.')}</p>
            </div>
            <div className="footer-col">
              <h4>{t('Producto', 'Product')}</h4>
              <a href="#how">{t('Cómo funciona', 'How it works')}</a>
              <a href="#plans">{t('Planes y precios', 'Plans & pricing')}</a>
              <a href="#blog">Blog</a>
              <a href="#community">{t('Comunidad', 'Community')}</a>
            </div>
            <div className="footer-col">
              <h4>{t('Soporte', 'Support')}</h4>
              <a href="mailto:soporte@fitlatam.app">soporte@fitlatam.app</a>
              <a href="#">{t('Preguntas frecuentes', 'FAQ')}</a>
              <a href="#">{t('Política de privacidad', 'Privacy policy')}</a>
              <a href="#">{t('Términos y condiciones', 'Terms & conditions')}</a>
            </div>
            <div className="footer-col">
              <h4>{t('Disponible en', 'Available on')}</h4>
              <a href="#">📱 App Store (iOS)</a>
              <a href="#">🤖 Google Play</a>
              <a href="#">🌐 fitlatam.lat</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© 2026 FitLatam. {t('Todos los derechos reservados.', 'All rights reserved.')}</span>
            <div className="footer-social">
              <a href="#" className="social-btn">📸</a>
              <a href="#" className="social-btn">🐦</a>
              <a href="#" className="social-btn">💼</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}