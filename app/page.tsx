'use client';

import { useState, useEffect, useCallback } from 'react';

type Lang = 'es' | 'en';
interface LbRow { pos: string; posClass: string; avatar: string; avatarBg: string; name: string; score: string; streak: string; }

export default function FitLatamLanding() {
  const [lang, setLang] = useState<Lang>('es');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = useCallback((es: string, en: string) => lang === 'es' ? es : en, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.fade-up');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

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
        .trial-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(67,169,154,0.1); border:1px solid rgba(67,169,154,0.3); border-radius:20px; padding:5px 14px; font-size:0.78rem; font-weight:600; color:var(--secondary); margin-bottom:16px; font-family:'Poppins',sans-serif; }

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

        /* FEATURES STRIP */
        .features-strip { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin:48px 0 0; }
        .feat-card { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:20px; display:flex; flex-direction:column; gap:10px; }
        .feat-icon { font-size:1.6rem; }
        .feat-title { font-family:'Poppins',sans-serif; font-size:0.9rem; font-weight:700; color:var(--text); }
        .feat-desc { font-size:0.8rem; color:var(--text-muted); line-height:1.6; }

        /* PLANS */
        .plans-bg { background:var(--text); padding:80px 5%; }
        .plans-inner { max-width:1280px; margin:0 auto; }
        .plans-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:48px; }
        .plan-card { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:32px; position:relative; transition:all 0.3s; }
        .plan-card:hover { transform:translateY(-4px); background:rgba(255,255,255,0.08); }
        .plan-card.featured { background:var(--primary); border-color:var(--primary); }
        .plan-featured-tag { position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:var(--warning); color:var(--text); font-size:0.7rem; font-weight:700; padding:4px 16px; border-radius:20px; font-family:'Poppins',sans-serif; white-space:nowrap; }
        .plan-name { font-family:'Poppins',sans-serif; font-size:0.8rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-bottom:4px; }
        .plan-tagline { font-size:0.75rem; color:rgba(255,255,255,0.45); margin-bottom:12px; line-height:1.4; }
        .plan-price { font-family:'Poppins',sans-serif; font-size:2.8rem; font-weight:900; color:white; letter-spacing:-0.03em; line-height:1; }
        .plan-price span { font-size:1rem; font-weight:400; opacity:0.6; }
        .plan-period { font-size:0.8rem; color:rgba(255,255,255,0.5); margin-top:4px; margin-bottom:8px; }
        .plan-trial { font-size:0.72rem; color:var(--secondary); font-weight:600; margin-bottom:16px; font-family:'Poppins',sans-serif; }
        .plan-card.featured .plan-trial { color:rgba(255,255,255,0.85); }
        .plan-divider { height:1px; background:rgba(255,255,255,0.1); margin-bottom:20px; }
        .plan-features { display:flex; flex-direction:column; gap:9px; margin-bottom:28px; }
        .plan-feat { display:flex; align-items:flex-start; gap:10px; font-size:0.85rem; color:rgba(255,255,255,0.75); line-height:1.5; }
        .plan-feat::before { content:'✓'; color:var(--secondary); font-weight:700; flex-shrink:0; margin-top:1px; }
        .plan-card.featured .plan-feat::before { color:rgba(255,255,255,0.9); }
        .plan-btn { display:block; text-align:center; padding:13px; border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.9rem; font-weight:700; text-decoration:none; transition:all 0.2s; }
        .plan-btn-outline { border:2px solid rgba(255,255,255,0.3); color:white; }
        .plan-btn-outline:hover { border-color:white; background:rgba(255,255,255,0.05); }
        .plan-btn-solid { background:white; color:var(--primary); }
        .plan-btn-solid:hover { background:var(--bg2); transform:translateY(-1px); }
        .payment-note { text-align:center; margin-top:24px; font-size:0.8rem; color:rgba(255,255,255,0.35); }

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

        /* RESPONSIVE */
        @media(max-width:900px) {
          .hero { grid-template-columns:1fr; padding-top:100px; }
          .hero-visual { display:none; }
          .steps { grid-template-columns:1fr; }
          .steps::before { display:none; }
          .features-strip { grid-template-columns:1fr 1fr; }
          .plans-grid { grid-template-columns:1fr; }
          .blog-grid { grid-template-columns:1fr; }
          .community-grid { grid-template-columns:1fr; }
          .footer-top { grid-template-columns:1fr 1fr; }
          .nav-links { display:none; }
          .hamburger { display:flex; }
        }
        @media(max-width:600px) {
          .footer-top { grid-template-columns:1fr; }
          .how-wrap { padding:32px 24px; }
          .community-wrap { padding:32px 24px; }
          .cta-banner { padding:40px 24px; }
          .features-strip { grid-template-columns:1fr; }
        }

        /* ANIMATIONS */
        .fade-up { opacity:0; transform:translateY(24px); transition:opacity 0.6s ease,transform 0.6s ease; }
        .fade-up.visible { opacity:1; transform:translateY(0); }
        .fade-up:nth-child(2) { transition-delay:0.1s; }
        .fade-up:nth-child(3) { transition-delay:0.2s; }

        /* MOBILE MENU */
        .mobile-menu { position:fixed; top:68px; left:0; right:0; background:var(--bg); border-bottom:1px solid var(--border); padding:20px 5%; display:flex; flex-direction:column; gap:16px; z-index:99; }
        .mobile-menu a { font-size:1rem; font-weight:500; color:var(--text-mid); text-decoration:none; }
      `}</style>

      {/* ── NAV ── */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">Fit<span>Latam</span></a>
        <div className="nav-links">
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
        <button className="hamburger" onClick={() => setMenuOpen(m => !m)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#how" onClick={() => setMenuOpen(false)}>{t('Cómo funciona', 'How it works')}</a>
          <a href="#plans" onClick={() => setMenuOpen(false)}>{t('Planes', 'Plans')}</a>
          <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#community" onClick={() => setMenuOpen(false)}>{t('Comunidad', 'Community')}</a>
          <div className="lang-toggle" style={{ width: 'fit-content' }}>
            <button className={`lang-btn${lang === 'es' ? ' active' : ''}`} onClick={() => setLang('es')}>ES</button>
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <section className="hero" style={{ paddingTop: 120, paddingBottom: 80, maxWidth: 'none' }}>
          <div className="hero-content">
            {/* Free trial badge */}
            <div className="trial-badge">
              🎁 {t('3 días de prueba gratuita con Plan Pro', '3-day free trial with Pro Plan')}
            </div>
            <div className="hero-tag">{t('🌎 Para toda Latinoamérica', '🌎 For all Latin America')}</div>
            <h1 className="display">
              <span className="display-primary" dangerouslySetInnerHTML={{ __html: t('Entrena.<br>Nutre.<br>', 'Train.<br>Nourish.<br>') }} />
              <span className="display-secondary">{t('Transforma.', 'Transform.')}</span>
            </h1>
            <p className="hero-desc">
              {t(
                '180 ejercicios. Nutrición adaptada a tu país. Yoga, Pilates y Mindfulness. Todo en una app — personalizado para ti.',
                '180 exercises. Nutrition adapted to your country. Yoga, Pilates and Mindfulness. All in one app — personalized for you.'
              )}
            </p>
            <div className="hero-btns">
              <a href="#plans" className="btn-primary">📱 {t('Empezar gratis 3 días', 'Start free 3 days')}</a>
              <a href="#how" className="btn-secondary">{t('Ver cómo funciona', 'See how it works')}</a>
            </div>
            <div className="hero-stats">
              <div className="stat"><span className="stat-n">180+</span><span className="stat-l">{t('Ejercicios con video', 'Exercises with video')}</span></div>
              <div className="stat"><span className="stat-n">15+</span><span className="stat-l">{t('Países LATAM', 'LATAM countries')}</span></div>
              <div className="stat"><span className="stat-n">3</span><span className="stat-l">{t('Planes personalizados', 'Personalized plans')}</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-bg-shape" />
            <div className="phone-mockup">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', alignSelf: 'flex-start' }}>FitLatam PRO</div>
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
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '1.2rem', fontWeight: 800, color: 'white' }}>38</div>
                    <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)' }}>{t('Sesiones', 'Sessions')}</div>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: 12, textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '1.2rem', fontWeight: 800, color: '#F4A261' }}>9🔥</div>
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
              <span className="fb-icon">🎵</span>
              <div className="fb-text">
                <span className="fb-label">{t('Música para entrenar', 'Music to train')}</span>
                <span className="fb-value">Spotify · Apple Music</span>
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
              {[
                {
                  num: '01', cls: '', title: t('Cuéntanos sobre ti', 'Tell us about you'),
                  desc: t('Completa tu perfil: objetivo, nivel, equipo disponible, condición física, lesiones y preferencias de nutrición. Tarda menos de 3 minutos.', 'Complete your profile: goal, level, available equipment, physical condition, injuries and nutrition preferences. Takes less than 3 minutes.')
                },
                {
                  num: '02', cls: 's2', title: t('Recibe tu plan personalizado', 'Get your personalized plan'),
                  desc: t('Generamos tu rutina y menú al instante. Ingredientes adaptados a tu país, recetas con macros y rutinas según tu equipo y tiempo disponible.', 'We generate your routine and menu instantly. Ingredients adapted to your country, recipes with macros and routines according to your equipment and available time.')
                },
                {
                  num: '03', cls: 's3', title: t('Entrena, come y evoluciona', 'Train, eat and evolve'),
                  desc: t('Sigue tus sesiones con videos, escucha tu playlist en Spotify o Apple Music, registra tu progreso y compite en la comunidad LATAM.', 'Follow your sessions with videos, listen to your playlist on Spotify or Apple Music, track your progress and compete in the LATAM community.')
                },
              ].map((s, i) => (
                <div className="step-item fade-up" key={i}>
                  <div className={`step-num${s.cls ? ' ' + s.cls : ''}`}>{s.num}</div>
                  <div>
                    <div className="step-title">{s.title}</div>
                    <p className="step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features strip */}
            <div className="features-strip">
              {[
                { icon: '🎵', title: t('Spotify & Apple Music', 'Spotify & Apple Music'), desc: t('Playlist integrada para cada sesión', 'Integrated playlist for each session') },
                { icon: '⌚', title: 'Garmin Connect', desc: t('Integración wearables (próximamente)', 'Wearables integration (coming soon)') },
                { icon: '🌎', title: t('Adaptado a tu país', 'Adapted to your country'), desc: t('Ingredientes y términos locales de 15+ países', 'Ingredients and local terms from 15+ countries') },
                { icon: '📊', title: t('Checkpoint 30 días', '30-day checkpoint'), desc: t('Tu plan se recalibra automáticamente', 'Your plan recalibrates automatically') },
              ].map((f, i) => (
                <div className="feat-card" key={i}>
                  <div className="feat-icon">{f.icon}</div>
                  <div className="feat-title">{f.title}</div>
                  <p className="feat-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── PLANS ── */}
      <div className="plans-bg" id="plans">
        <div className="plans-inner">
          <div className="section-header">
            <span className="section-label" style={{ color: 'var(--secondary)' }}>{t('Planes', 'Plans')}</span>
            <h2 className="section-title" style={{ color: 'white' }}>{t('Elige tu transformación', 'Choose your transformation')}</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.5)', marginTop: 12 }}>
              {t('Sin contratos. Cancela cuando quieras. Pago seguro con App Store, Google Play y MercadoPago.', 'No contracts. Cancel anytime. Secure payment with App Store, Google Play and MercadoPago.')}
            </p>
          </div>
          <div className="plans-grid">

            {/* Starter */}
            <div className="plan-card fade-up">
              <div className="plan-name">Starter</div>
              <div className="plan-tagline">{t('50 ejercicios. Tu primera transformación real.', '50 exercises. Your first real transformation.')}</div>
              <div className="plan-price">$99<span> MXN</span></div>
              <div className="plan-period">{t('/ mes', '/ month')}</div>
              <div className="plan-trial">🎁 {t('3 días de prueba gratuita con Plan Pro', '3-day free trial with Pro Plan')}</div>
              <div className="plan-divider" />
              <div className="plan-features">
                <div className="plan-feat">{t('Plan de entrenamiento 100% personalizado a tu objetivo y equipo', '100% personalized training plan for your goal and equipment')}</div>
                <div className="plan-feat">{t('50 ejercicios con instrucciones paso a paso y video', '50 exercises with step-by-step instructions and video')}</div>
                <div className="plan-feat">{t('2 opciones de rutina por objetivo (fuerza, HIIT, cardio)', '2 routine options per goal (strength, HIIT, cardio)')}</div>
                <div className="plan-feat">{t('Registro de sesiones, racha y calorías quemadas', 'Session tracking, streak and calories burned')}</div>
                <div className="plan-feat">{t('Calendario de actividad + insights de progreso mensual', 'Activity calendar + monthly progress insights')}</div>
              </div>
              <a href="#" className="plan-btn plan-btn-outline">{t('Comenzar con Starter', 'Start with Starter')}</a>
            </div>

            {/* Pro — Featured */}
            <div className="plan-card featured fade-up">
              <div className="plan-featured-tag">{t('⭐ Más popular', '⭐ Most popular')}</div>
              <div className="plan-name">Pro</div>
              <div className="plan-tagline" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('120 ejercicios. Entrena, come y descansa como un atleta.', '120 exercises. Train, eat and rest like an athlete.')}</div>
              <div className="plan-price">$199<span> MXN</span></div>
              <div className="plan-period">{t('/ mes', '/ month')}</div>
              <div className="plan-trial">🎁 {t('3 días de prueba gratuita incluidos', '3-day free trial included')}</div>
              <div className="plan-divider" style={{ background: 'rgba(255,255,255,0.2)' }} />
              <div className="plan-features">
                <div className="plan-feat">{t('Todo lo del Starter — 50 ejercicios de entrenamiento', 'Everything in Starter — 50 training exercises')}</div>
                <div className="plan-feat">{t('Plan de nutrición personalizado — 3 opciones de menú diario', 'Personalized nutrition plan — 3 daily menu options')}</div>
                <div className="plan-feat">{t('Recetas adaptadas a tu país y cultura gastronómica', 'Recipes adapted to your country and food culture')}</div>
                <div className="plan-feat">{t('Bienestar: Yoga Flow + Estiramientos (20 rutinas)', 'Wellness: Yoga Flow + Stretching (20 routines)')}</div>
                <div className="plan-feat">{t('120 ejercicios (fuerza + yoga + pilates + movilidad)', '120 exercises (strength + yoga + pilates + mobility)')}</div>
                <div className="plan-feat">{t('🎵 Spotify + Apple Music integrados para cada sesión', '🎵 Spotify + Apple Music integrated for each session')}</div>
              </div>
              <a href="#" className="plan-btn plan-btn-solid">{t('Comenzar con Pro', 'Start with Pro')}</a>
            </div>

            {/* Elite */}
            <div className="plan-card fade-up">
              <div className="plan-name">Elite</div>
              <div className="plan-tagline">{t('180 ejercicios. El plan de los que no se conforman.', '180 exercises. The plan for those who settle for nothing.')}</div>
              <div className="plan-price">$299<span> MXN</span></div>
              <div className="plan-period">{t('/ mes', '/ month')}</div>
              <div className="plan-trial">🎁 {t('3 días de prueba gratuita incluidos', '3-day free trial included')}</div>
              <div className="plan-divider" />
              <div className="plan-features">
                <div className="plan-feat">{t('Todo lo del Pro — 120 ejercicios + nutrición completa', 'Everything in Pro — 120 exercises + complete nutrition')}</div>
                <div className="plan-feat">{t('180 ejercicios únicos con instrucciones y video', '180 unique exercises with instructions and video')}</div>
                <div className="plan-feat">{t('Menú Elite personalizable — combina proteínas, carbos y grasas', 'Customizable Elite menu — combine proteins, carbs and fats')}</div>
                <div className="plan-feat">{t('Bienestar completo: Yoga · Pilates · TaiChi · Qi Gong · Mindfulness', 'Complete wellness: Yoga · Pilates · TaiChi · Qi Gong · Mindfulness')}</div>
                <div className="plan-feat">{t('🏆 Rutinas de competencia y levantamiento olímpico', '🏆 Competition routines and Olympic lifting')}</div>
                <div className="plan-feat">{t('💊 Protocolo de suplementación personalizado', '💊 Personalized supplementation protocol')}</div>
                <div className="plan-feat">{t('📈 Checkpoint 30 días — plan se recalibra automáticamente', '📈 30-day checkpoint — plan recalibrates automatically')}</div>
              </div>
              <a href="#" className="plan-btn plan-btn-outline">{t('Comenzar con Elite', 'Start with Elite')}</a>
            </div>

          </div>
          <p className="payment-note">
            {t('Pago seguro via App Store · Google Play · MercadoPago · Stripe (internacional)', 'Secure payment via App Store · Google Play · MercadoPago · Stripe (international)')}
          </p>
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
                title: t('Yoga, Pilates o TaiChi: ¿cuál es mejor para tu objetivo?', 'Yoga, Pilates or TaiChi: which is best for your goal?'),
                excerpt: t('FitLatam Elite incluye los 3. Te explicamos las diferencias y cómo combinarlos para maximizar tu recuperación y rendimiento.', 'FitLatam Elite includes all 3. We explain the differences and how to combine them to maximize your recovery and performance.'),
                read: t('6 min lectura', '6 min read'),
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
                  {t('Únete a personas en toda LATAM que se retaron a transformar su vida. Compite en retos, sube en el ranking y desbloquea logros.', 'Join people across LATAM who challenged themselves to transform their lives. Compete in challenges, climb the ranking and unlock achievements.')}
                </p>
                <div className="community-features">
                  {[
                    { icon: '🏆', cls: 'ci-1', title: t('Retos mensuales', 'Monthly challenges'), desc: t('Desafíos de 30 días para toda la comunidad. Desde principiantes hasta atletas de competencia.', '30-day challenges for the whole community. From beginners to competition athletes.') },
                    { icon: '📊', cls: 'ci-2', title: t('Ranking global LATAM', 'Global LATAM ranking'), desc: t('Compite con usuarios de 15+ países. Sube completando sesiones y manteniendo tu racha diaria.', 'Compete with users from 15+ countries. Climb by completing sessions and maintaining your daily streak.') },
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
          <h2>{t('Tu transformación empieza hoy — gratis', 'Your transformation starts today — free')}</h2>
          <p>{t('3 días de prueba gratuita con el Plan Pro completo. Sin tarjeta de crédito.', '3-day free trial with the complete Pro Plan. No credit card required.')}</p>
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
              <p className="footer-desc">{t('Entrenamiento, nutrición y bienestar personalizado para toda Latinoamérica. 180 ejercicios. Tu mejor versión, adaptada a tu país.', 'Personalized training, nutrition and wellness for all of Latin America. 180 exercises. Your best version, adapted to your country.')}</p>
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