import { useEffect, useMemo, useRef, useState } from 'react';
import './JetsoftPage.css';
import { jetsoftCopy } from './jetsoftCopy.js';

const asset = (name) => `${import.meta.env.BASE_URL}jetsoft/${name}`;

const Icon = ({ name, size = 20 }) => {
  const paths = {
    arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
    arrowUp: <><path d="M12 19V5" /><path d="m6 11 6-6 6 6" /></>,
    pause: <><path d="M8 5v14" /><path d="M16 5v14" /></>,
    play: <path d="m8 5 11 7-11 7z" fill="currentColor" stroke="none" />,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    phone: <><path d="M6.5 3.5 9 3l2 5-2 1.5c1 2.2 2.3 3.5 4.5 4.5L15 12l5 2 .5 2.5c.2 1.1-.7 2-1.8 2A15.7 15.7 0 0 1 3.5 5.3c0-1.1.9-2 2-1.8Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    linkedin: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 10v6M8 7.5v.01M12 16v-3.5a2.5 2.5 0 0 1 5 0V16M12 10v6" /></>,
    instagram: <><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.5" /><path d="M17.5 6.5h.01" /></>,
  };

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

const Flag = ({ country }) => country === 'br' ? (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 16">
    <rect width="24" height="16" fill="#009b3a" />
    <path d="M12 1.3 21.5 8 12 14.7 2.5 8 12 1.3Z" fill="#ffdf00" />
    <circle cx="12" cy="8" r="3.7" fill="#002776" />
    <path d="M8.5 7.2a7.4 7.4 0 0 1 6.7.6" fill="none" stroke="#fff" strokeWidth=".45" />
  </svg>
) : (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 16">
    <rect width="24" height="16" fill="#fff" />
    <path d="M0 0h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0z" fill="#b22234" />
    <rect width="10.2" height="8.62" fill="#3c3b6e" />
    <g fill="#fff">
      <circle cx="1.8" cy="1.4" r=".32" /><circle cx="4" cy="1.4" r=".32" /><circle cx="6.2" cy="1.4" r=".32" /><circle cx="8.4" cy="1.4" r=".32" />
      <circle cx="2.9" cy="3" r=".32" /><circle cx="5.1" cy="3" r=".32" /><circle cx="7.3" cy="3" r=".32" /><circle cx="9.1" cy="3" r=".32" />
      <circle cx="1.8" cy="4.6" r=".32" /><circle cx="4" cy="4.6" r=".32" /><circle cx="6.2" cy="4.6" r=".32" /><circle cx="8.4" cy="4.6" r=".32" />
      <circle cx="2.9" cy="6.2" r=".32" /><circle cx="5.1" cy="6.2" r=".32" /><circle cx="7.3" cy="6.2" r=".32" /><circle cx="9.1" cy="6.2" r=".32" />
      <circle cx="1.8" cy="7.7" r=".32" /><circle cx="4" cy="7.7" r=".32" /><circle cx="6.2" cy="7.7" r=".32" /><circle cx="8.4" cy="7.7" r=".32" />
    </g>
  </svg>
);

const heroSlides = [
  {
    image: asset('hero-1.png'),
    video: asset('hero-loop-seamless.mp4'),
    href: '#solutions',
  },
  {
    image: asset('hero-2.png'),
    video: asset('hero-2-loop.mp4'),
    videoClass: 'hero-video--subtle',
    href: '#process',
  },
  {
    image: asset('hero-3.png'),
    href: '#contact',
  },
];

const cases = [
  {
    name: 'Alemmar',
    logo: asset('alemmar.png'),
  },
  {
    name: 'Governo do Estado de São Paulo',
    logo: asset('governo.png'),
  },
  {
    name: 'Guima Conseco',
    logo: asset('guima.png'),
  },
  {
    name: 'Espacial Suprimentos',
    logo: asset('espacial.png'),
  },
];

const processSteps = [
  { image: asset('discovery.png') },
  { image: asset('refinement.png') },
  { image: asset('development.png') },
  { image: asset('inspection.png') },
  { image: asset('development.png') },
];

const solutionCards = [
  { name: 'JetERP', image: asset('jeterp.png'), href: '#contact' },
  { name: 'JetMKD', image: asset('marketing.png'), href: '#contact' },
  { name: 'JetECM', image: asset('ecommerce.png'), href: '#contact' },
  { name: 'JetFSW', image: asset('software.png'), href: '#contact' },
  { name: 'JetTCC', image: asset('training.png'), href: '#contact' },
  { name: 'JetBPM', image: asset('bpm.png'), href: '#contact' },
];

const partnerLogos = [
  ['Porto Seguro', asset('governo.png')],
  ['Alemmar', asset('alemmar.png')],
  ['Guima Conseco', asset('guima.png')],
  ['Espacial', asset('espacial.png')],
  ['TJSP', asset('tjsp.png')],
  ['YvY', asset('yvy.png')],
  ['USP', asset('usp.png')],
  ['ACP Plásticos', asset('acp.png')],
  ['FUNCATE', asset('funcate.png')],
];

function JetsoftPage() {
  const heroSectionRef = useRef(null);
  const heroVideoRef = useRef(null);
  const [activeHero, setActiveHero] = useState(0);
  const [isHeroRotationEnabled, setIsHeroRotationEnabled] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const [activeCase, setActiveCase] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    try {
      return window.localStorage.getItem('jetsoft-language') === 'en-US' ? 'en-US' : 'pt-BR';
    } catch {
      return 'pt-BR';
    }
  });
  const [scrolled, setScrolled] = useState(false);
  const [lightHeader, setLightHeader] = useState(false);
  const copy = jetsoftCopy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.metaDescription);
    try {
      window.localStorage.setItem('jetsoft-language', language);
    } catch {
      // Language switching still works for this visit when storage is unavailable.
    }
  }, [language, copy.metaDescription, copy.pageTitle]);

  useEffect(() => {
    const updateHeaderTheme = () => {
      const header = document.querySelector('.jetsoft-header');
      const pillars = document.querySelector('.jetsoft-pillars');
      const isScrolled = window.scrollY > 24;

      setScrolled(isScrolled);
      setLightHeader(
        isScrolled &&
          header &&
          pillars &&
          pillars.getBoundingClientRect().top <= header.getBoundingClientRect().height,
      );
    };

    updateHeaderTheme();
    window.addEventListener('scroll', updateHeaderTheme, { passive: true });
    window.addEventListener('resize', updateHeaderTheme);
    return () => {
      window.removeEventListener('scroll', updateHeaderTheme);
      window.removeEventListener('resize', updateHeaderTheme);
    };
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!motionPreference) return undefined;

    const handleMotionPreferenceChange = (event) => {
      if (event.matches) setIsHeroRotationEnabled(false);
    };

    if (motionPreference.addEventListener) {
      motionPreference.addEventListener('change', handleMotionPreferenceChange);
      return () => motionPreference.removeEventListener('change', handleMotionPreferenceChange);
    }

    motionPreference.addListener(handleMotionPreferenceChange);
    return () => motionPreference.removeListener(handleMotionPreferenceChange);
  }, []);

  useEffect(() => {
    if (!isHeroRotationEnabled) return undefined;
    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isHeroRotationEnabled]);

  useEffect(() => {
    const heroElement = heroSectionRef.current;
    const videoElement = heroVideoRef.current;
    if (!heroElement || !videoElement) return undefined;

    const motionPreference = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    let isInView = !('IntersectionObserver' in window);
    const syncPlayback = () => {
      const shouldPlay =
        Boolean(heroSlides[activeHero]?.video) &&
        isInView &&
        document.visibilityState === 'visible' &&
        !motionPreference?.matches;

      if (shouldPlay) videoElement.play().catch(() => {});
      else videoElement.pause();
    };

    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
          isInView = entry.isIntersecting;
          syncPlayback();
        }, { threshold: 0.05 })
      : null;

    observer?.observe(heroElement);
    document.addEventListener('visibilitychange', syncPlayback);
    if (motionPreference?.addEventListener) motionPreference.addEventListener('change', syncPlayback);
    else motionPreference?.addListener?.(syncPlayback);
    syncPlayback();

    return () => {
      observer?.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      if (motionPreference?.removeEventListener) motionPreference.removeEventListener('change', syncPlayback);
      else motionPreference?.removeListener?.(syncPlayback);
      videoElement.pause();
    };
  }, [activeHero]);

  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const hero = { ...heroSlides[activeHero], ...copy.hero[activeHero] };
  const currentCase = cases[activeCase];
  const currentStep = { ...processSteps[activeStep], ...copy.process.steps[activeStep] };
  const duplicatedPartners = useMemo(() => [...partnerLogos, ...partnerLogos], []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="jetsoft-page" lang={language}>
      <header className={`jetsoft-header ${scrolled ? 'is-scrolled' : ''} ${lightHeader ? 'is-light' : ''}`}>
        <a className="jetsoft-logo" href="#top" aria-label={copy.logoHome} onClick={closeMenu}>
          <img src={asset('logo.png')} alt="Jetsoft" />
        </a>
        <nav className={`jetsoft-nav ${menuOpen ? 'is-open' : ''}`} aria-label={copy.navLabel}>
          <a href="#about" onClick={closeMenu}>{copy.nav[0]}</a>
          <a href="#solutions" onClick={closeMenu}>{copy.nav[1]}</a>
          <a href="#cases" onClick={closeMenu}>{copy.nav[2]}</a>
          <a href="#articles" onClick={closeMenu}>{copy.nav[3]}</a>
        </nav>
        <div className="jetsoft-header-actions">
          <a className="header-contact" href="#contact" onClick={closeMenu}>{copy.contact} <Icon name="arrow" size={17} /></a>
          <div className="language-switch" role="group" aria-label={copy.languageGroup}>
            <button className="language-button" type="button" aria-label={copy.languagePortuguese} title={copy.languagePortuguese} aria-pressed={language === 'pt-BR'} onClick={() => setLanguage('pt-BR')}>
              <Flag country="br" />
            </button>
            <button className="language-button" type="button" aria-label={copy.languageEnglish} title={copy.languageEnglish} aria-pressed={language === 'en-US'} onClick={() => setLanguage('en-US')}>
              <Flag country="us" />
            </button>
          </div>
          <button className="header-icon menu-trigger" type="button" aria-label={menuOpen ? copy.menuClose : copy.menuOpen} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </header>

      <main id="top">
        <section
          ref={heroSectionRef}
          className="jetsoft-hero"
          aria-labelledby="hero-title"
          aria-roledescription={copy.carousel}
          onMouseEnter={() => setIsHeroRotationEnabled(false)}
          onFocusCapture={() => setIsHeroRotationEnabled(false)}
        >
          <div className="hero-image" style={{ backgroundImage: `url(${hero.image})` }} />
          {hero.video && (
            <video
              ref={heroVideoRef}
              className={`hero-video ${hero.videoClass ?? ''}`}
              src={hero.video}
              poster={hero.image}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
            />
          )}
          <div className="hero-overlay" />
          <div className="hero-content" aria-live={isHeroRotationEnabled ? 'off' : 'polite'} aria-atomic="true">
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title">{hero.title}</h1>
            <p className="hero-copy">{hero.copy}</p>
            <a className="outline-button" href={hero.href}>{hero.action}<Icon name="arrow" size={16} /></a>
          </div>
          <div className="hero-bottomline">
            <span>{copy.heroBottom}</span>
            <div className="hero-playback">
              <button
                className="hero-rotation"
                type="button"
                aria-label={isHeroRotationEnabled ? copy.pauseRotation : copy.resumeRotation}
                onClick={() => setIsHeroRotationEnabled((enabled) => !enabled)}
              >
                <Icon name={isHeroRotationEnabled ? 'pause' : 'play'} size={16} />
                <span>{isHeroRotationEnabled ? copy.pause : copy.resume}</span>
              </button>
              <div className="hero-dots" role="group" aria-label={copy.heroDots}>
                {heroSlides.map((slide, index) => (
                  <button
                    key={index}
                    className={index === activeHero ? 'is-active' : ''}
                    type="button"
                    aria-label={copy.showHero.replace('{number}', String(index + 1)).replace('{name}', copy.hero[index].eyebrow)}
                    aria-pressed={index === activeHero}
                    onClick={() => {
                      setIsHeroRotationEnabled(false);
                      setActiveHero(index);
                    }}
                  />
                ))}
              </div>
            </div>
            <span className="hero-index">0{activeHero + 1} <i>/ 03</i></span>
          </div>
        </section>

        <section className="jetsoft-pillars" aria-label={copy.pillarsLabel}>
          <div className="shell jetsoft-pillars-inner">
            {['JetERP', 'JetBPM', 'JetECM'].map((name, index) => <div key={name}><strong>{name}</strong><span>{copy.pillars[index]}</span></div>)}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="shell">
            <div className="about-showcase">
              <div className="section-intro">
                <h2>{copy.aboutTitle[0]}<em>{copy.aboutTitle[1]}</em>{copy.aboutTitle[2]}</h2>
                <p className="section-lede">{copy.aboutCopy}</p>
                <a className="text-link about-method-link" href="#process">{copy.aboutAction} <Icon name="arrow" size={15} /></a>
              </div>
              <figure className="about-image-wrap">
                <img src={asset('about.png')} alt={copy.aboutImageAlt} />
                <figcaption className="image-caption">{copy.aboutImageCaption}</figcaption>
              </figure>
            </div>
            <div className="expertise-list" role="group" aria-label={copy.expertiseLabel}>
              {copy.expertise.map((item, index) => <details key={index} open={index === 0}>
                <summary>{item.title} <span aria-hidden="true"><Icon name="arrow" size={17} /></span></summary>
                <p>{item.copy}</p>
              </details>)}
            </div>
          </div>
        </section>

        <section className="section jetsoft-stats">
          <div className="shell jetsoft-stats-inner">
            <div className="stat-number"><strong>99.98</strong><span>%<br />{copy.stats.retention[0]}<br />{copy.stats.retention[1]}</span></div>
            <div className="stat-points">
              {copy.stats.items.map((item, index) => <article key={item.title}><span className="stat-mark">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section cases-section" id="cases">
          <div className="shell">
            <div className="section-heading-row">
              <div><p className="section-kicker">{copy.cases.kicker}</p><h2>{copy.cases.title}</h2></div>
              <div className="slider-controls"><button type="button" aria-label={copy.cases.previous} aria-controls="case-feature" onClick={() => setActiveCase((activeCase - 1 + cases.length) % cases.length)}><Icon name="arrow" size={17} /></button><button type="button" aria-label={copy.cases.next} aria-controls="case-feature" onClick={() => setActiveCase((activeCase + 1) % cases.length)}><Icon name="arrow" size={17} /></button></div>
            </div>
            <div className="case-feature" id="case-feature" aria-live="polite" aria-atomic="true">
              <div className="case-logo-panel"><img src={currentCase.logo} alt={currentCase.name} /><span>0{activeCase + 1} / 0{cases.length}</span></div>
              <div className="case-copy"><h3>{currentCase.name}</h3><p>{copy.cases.descriptions[activeCase]}</p><a href="#contact" className="text-link">{copy.cases.action} <Icon name="arrow" size={15} /></a></div>
            </div>
            <div className="case-tabs" role="group" aria-label={copy.cases.select}>{cases.map((item, index) => <button key={item.name} type="button" className={index === activeCase ? 'is-active' : ''} aria-pressed={index === activeCase} aria-controls="case-feature" onClick={() => setActiveCase(index)}>{item.name}</button>)}</div>
          </div>
        </section>

        <section className="trust-section">
          <div className="shell"><p className="section-kicker">{copy.trust.kicker}</p><h2>{copy.trust.title}</h2><p className="trust-copy">{copy.trust.copyBefore}<strong>{copy.trust.copyMetric}</strong>{copy.trust.copyAfter}</p></div>
          <div className="logo-marquee" aria-label={copy.trust.logos}><div className="logo-track">{duplicatedPartners.map(([name, logo], index) => <div className="partner-logo" key={`${name}-${index}`}><img src={logo} alt={name} /></div>)}</div></div>
        </section>

        <section className="section process-section" id="process">
          <div className="shell">
            <div className="process-heading"><p className="section-kicker">{copy.process.kicker}</p><h2>{copy.process.title}</h2><p>{copy.process.intro}</p></div>
            <div className="process-layout">
              <div className="process-nav">{processSteps.map((_, index) => <button key={index} className={index === activeStep ? 'is-active' : ''} type="button" onClick={() => setActiveStep(index)}><span>0{index + 1}</span>{copy.process.steps[index].title}<Icon name="arrow" size={15} /></button>)}</div>
              <div className="process-detail"><div className="process-visual"><img src={currentStep.image} alt="" /><span>0{activeStep + 1}</span></div><div><h3>{currentStep.title}</h3><p>{currentStep.copy}</p><a className="text-link" href="#contact">{copy.process.contact} <Icon name="arrow" size={15} /></a></div></div>
            </div>
          </div>
        </section>

        <section className="solutions-section section" id="solutions">
          <div className="shell"><div className="section-heading-row solutions-heading"><div><p className="section-kicker">{copy.solutions.kicker}</p><h2>{copy.solutions.title}</h2></div><p>{copy.solutions.intro}</p></div><div className="solution-grid">{solutionCards.map((solution, index) => <article className="solution-card" key={solution.name}><div className="solution-image"><img src={solution.image} alt="" /></div><div className="solution-card-body"><h3>{solution.name}</h3><p>{copy.solutions.descriptions[index]}</p><a href={solution.href} className="text-link">{copy.solutions.action.replace('{name}', solution.name)} <Icon name="arrow" size={15} /></a></div></article>)}</div></div>
        </section>

        <section className="section articles-section" id="articles">
          <div className="shell">
            <div className="section-heading-row"><div><p className="section-kicker">{copy.articles.kicker}</p><h2>{copy.articles.title}</h2></div></div>
            <div className="article-grid">{copy.articles.items.map((article) => <article key={article.date + article.title}><span>{article.date}</span><h3>{article.title}</h3><a href="#contact" className="article-link text-link" aria-label={article.aria}>{copy.articles.action} <Icon name="arrow" size={15} /></a></article>)}</div>
          </div>
        </section>
      </main>

      <footer className="jetsoft-footer" id="contact" style={{ '--jetsoft-footer-image': `url("${asset('footer.webp')}")` }}>
        <div className="shell footer-main"><div className="footer-brand"><img src={asset('logo.png')} alt="Jetsoft" /><p>{copy.footer.brand}</p><div className="social-links"><a href="https://www.linkedin.com" aria-label={copy.social.linkedin}><Icon name="linkedin" size={18} /></a><a href="https://www.instagram.com" aria-label={copy.social.instagram}><Icon name="instagram" size={18} /></a><a href="https://www.facebook.com" aria-label={copy.social.facebook}><span>f</span></a></div></div><div className="footer-column"><h3>{copy.footer.usefulLinks}</h3><a href="#top">{copy.footer.home}</a><a href="#about">{copy.nav[0]}</a><a href="#solutions">{copy.nav[1]}</a><a href="#articles">{copy.nav[3]}</a></div><div className="footer-column contact-column"><h3>{copy.footer.contactInfo}</h3><a href="tel:+551130907875"><Icon name="phone" size={17} /><span>(11) 3090-7875</span></a><a href="mailto:comercial@jetsoft.com.br"><Icon name="mail" size={17} /><span>comercial@jetsoft.com.br</span></a><a href="#contact"><Icon name="pin" size={17} /><span>Rua Palestra Itália, 73<br />Perdizes — São Paulo/SP</span></a></div></div>
        <div className="footer-cta shell"><p>{copy.footer.footerLead}</p><a href="mailto:comercial@jetsoft.com.br">{copy.footer.footerAction} <Icon name="arrow" size={18} /></a></div>
        <div className="shell footer-bottom"><span>© 2025 Jetsoft — 12.603.117/0001-49.</span><span>{copy.footer.rights}</span><a href="#top" aria-label={copy.footer.backToTop}><Icon name="arrowUp" size={17} /></a></div>
      </footer>
      <a className="whatsapp-float" href="https://api.whatsapp.com/send?phone=11971301110" aria-label={copy.whatsapp}>
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path fill="currentColor" d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.5 0 .17 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.83 11.83 0 0 0-3.43-8.43ZM12.05 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98.99-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.88 9.89-9.88a9.83 9.83 0 0 1 7.01 2.9 9.82 9.82 0 0 1 2.9 7.02c0 5.45-4.44 9.88-9.9 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.18.2-.35.22-.65.08-.3-.15-1.25-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.09 3.2 5.07 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg>
      </a>
    </div>
  );
}

export default JetsoftPage;
