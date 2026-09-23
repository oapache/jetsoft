import { useEffect, useMemo, useState } from 'react';
import './JetsoftPage.css';

const asset = (name) => `/jetsoft/${name}`;

const Icon = ({ name, size = 20 }) => {
  const paths = {
    arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
    arrowUp: <><path d="M12 19V5" /><path d="m6 11 6-6 6 6" /></>,
    search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></>,
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

const heroSlides = [
  {
    eyebrow: 'JetERP',
    title: 'Transformando sonhos em realidade com tecnologia inovadora.',
    copy: 'Gestão completa para transformar a complexidade do seu negócio em decisões mais simples.',
    image: asset('hero-1.png'),
    action: 'Saiba mais',
    href: '#solutions',
  },
  {
    eyebrow: 'JetBPM',
    title: 'Não perca tempo com processos ultrapassados.',
    copy: 'Mapeie, melhore e automatize as rotinas que fazem sua empresa avançar.',
    image: asset('hero-2.png'),
    action: 'Descubra como',
    href: '#process',
  },
  {
    eyebrow: 'Jetsoft',
    title: 'Modernize sua gestão e aumente seus resultados.',
    copy: 'Tecnologia aplicada ao seu contexto, com proximidade, método e visão de longo prazo.',
    image: asset('hero-3.png'),
    action: 'Entre em ação',
    href: '#contact',
  },
];

const cases = [
  {
    name: 'Alemmar',
    logo: asset('alemmar.png'),
    text: 'A parceria com a Alemmar começou com a modernização da operação comercial e evoluiu para assistência técnica, importação, financeiro e estoque — uma transformação contínua, construída lado a lado.',
  },
  {
    name: 'Governo do Estado de São Paulo',
    logo: asset('governo.png'),
    text: 'Há mais de uma década, contribuímos com sistemas de missão crítica para a Secretaria da Fazenda e Planejamento, apoiando mais de 450 mil usuários em processos estratégicos.',
  },
  {
    name: 'Guima Conseco',
    logo: asset('guima.png'),
    text: 'Mapeamento de processos, integração e novos projetos de software ajudaram a Guima Conseco a avançar em áreas essenciais como RH, compras, finanças e engenharia.',
  },
  {
    name: 'Espacial Suprimentos',
    logo: asset('espacial.png'),
    text: 'Uma relação de mais de 25 anos que conecta JetERP, e-commerce e operação omnichannel para sustentar crescimento consistente e novas oportunidades.',
  },
];

const processSteps = [
  { title: 'Descoberta', image: asset('discovery.png'), text: 'Primeira fase para decidir quais recursos priorizar ou criar durante o processo de produção.' },
  { title: 'Refinamento', image: asset('refinement.png'), text: 'Deixamos cada item mais claro, tornando a tarefa simples de entender e executar.' },
  { title: 'Desenvolvimento', image: asset('development.png'), text: 'Uma equipe focada em um objetivo que reflete o valor real a ser entregue no prazo.' },
  { title: 'Inspeção e adaptação', image: asset('inspection.png'), text: 'Revisamos o que foi construído e determinamos as adaptações que vêm a seguir.' },
  { title: 'Feedback', image: asset('development.png'), text: 'Ouvimos as pessoas certas para apontar a direção e confirmar se o resultado foi alcançado.' },
];

const solutionCards = [
  { name: 'JetERP', copy: 'Gestão completa e integrada para o seu negócio de ponta a ponta.', image: asset('jeterp.png'), href: '#contact' },
  { name: 'JetMKD', copy: 'Aumente a visibilidade da sua marca com soluções de marketing digital.', image: asset('marketing.png'), href: '#contact' },
  { name: 'JetECM', copy: 'Venda mais online com uma plataforma integrada aos principais marketplaces.', image: asset('ecommerce.png'), href: '#contact' },
  { name: 'JetFSW', copy: 'Desenvolvimento de software sob medida: aplicativos, sistemas web e soluções inovadoras.', image: asset('software.png'), href: '#contact' },
  { name: 'JetTCC', copy: 'Invista no seu time com treinamentos, capacitação e consultoria.', image: asset('training.png'), href: '#contact' },
  { name: 'JetBPM', copy: 'Otimize seus resultados com mapeamento, melhoria e automação de processos.', image: asset('bpm.png'), href: '#contact' },
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
  const [activeHero, setActiveHero] = useState(0);
  const [activeCase, setActiveCase] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const hero = heroSlides[activeHero];
  const currentCase = cases[activeCase];
  const currentStep = processSteps[activeStep];
  const duplicatedPartners = useMemo(() => [...partnerLogos, ...partnerLogos], []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="jetsoft-page">
      <header className={`jetsoft-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="jetsoft-logo" href="#top" aria-label="Jetsoft - início" onClick={closeMenu}>
          <img src={asset('logo.png')} alt="Jetsoft" />
        </a>
        <nav className={`jetsoft-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          <a href="#about" onClick={closeMenu}>Sobre nós</a>
          <a href="#solutions" onClick={closeMenu}>O que fazemos</a>
          <a href="#cases" onClick={closeMenu}>Nosso portfólio</a>
          <a href="#articles" onClick={closeMenu}>Blog</a>
        </nav>
        <div className="jetsoft-header-actions">
          <a className="header-contact" href="#contact">Contato <Icon name="arrow" size={17} /></a>
          <button className="header-icon" type="button" aria-label="Pesquisar"><Icon name="search" /></button>
          <button className="header-icon menu-trigger" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="jetsoft-hero" aria-labelledby="hero-title">
          <div className="hero-image" style={{ backgroundImage: `url(${hero.image})` }} />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title">{hero.title}</h1>
            <p className="hero-copy">{hero.copy}</p>
            <a className="outline-button" href={hero.href}>{hero.action}<Icon name="arrow" size={16} /></a>
          </div>
          <div className="hero-bottomline">
            <span>Estamos aqui para simplificar sua jornada.</span>
            <div className="hero-dots" aria-label="Slides do destaque">
              {heroSlides.map((slide, index) => (
                <button key={slide.eyebrow} className={index === activeHero ? 'is-active' : ''} type="button" aria-label={`Mostrar slide ${index + 1}`} aria-pressed={index === activeHero} onClick={() => setActiveHero(index)} />
              ))}
            </div>
            <span className="hero-index">0{activeHero + 1} <i>/ 03</i></span>
          </div>
        </section>

        <section className="jetsoft-pillars" aria-label="Soluções Jetsoft">
          <div><strong>JetERP</strong><span>Gestão total<br />do seu negócio</span></div>
          <div><strong>JetBPM</strong><span>Mapeamento, melhoria e<br />automação de processos</span></div>
          <div><strong>JetECM</strong><span>Plataforma de<br />e-commerce</span></div>
        </section>

        <section className="section shell about-section" id="about">
          <div className="section-intro">
            <p className="section-kicker">Quem somos</p>
            <h2>Somos <em>especialistas</em> em desenvolvimento de software.</h2>
            <p className="section-lede">Ajudamos empresas a transformar desafios reais em operações mais eficientes, com tecnologia que evolui junto com o negócio.</p>
          </div>
          <div className="about-layout">
            <div className="about-image-wrap">
              <img src={asset('about.png')} alt="Equipe e tecnologia Jetsoft" />
              <span className="image-caption">Tecnologia com visão humana</span>
            </div>
            <div className="expertise-list">
              <details open>
                <summary>Produto de qualidade <span>+</span></summary>
                <p>Atualização constante com as melhores práticas do seu segmento, garantindo um produto que atende suas demandas em tempo real.</p>
              </details>
              <details>
                <summary>Solução de problemas <span>+</span></summary>
                <p>Customização de acordo com suas necessidades, utilizando tecnologia de alta performance para sua gestão.</p>
              </details>
              <details>
                <summary>Atendimento humanizado <span>+</span></summary>
                <p>Atendimento rápido e personalizado para garantir respostas claras e decisões mais seguras.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="jetsoft-stats section shell">
          <div className="stat-number"><strong>99.98</strong><span>%<br />de clientes<br />fidelizados!</span></div>
          <div className="stat-points">
            <article><span className="stat-mark">01</span><h3>Custos reduzidos</h3><p>Invista um valor justo e otimize o tempo com um dos mais completos softwares de gestão do mercado.</p></article>
            <article><span className="stat-mark">02</span><h3>Otimização de processos</h3><p>Interfaces claras e intuitivas facilitam a adaptação da equipe ao software.</p></article>
            <article><span className="stat-mark">03</span><h3>Software completo</h3><p>Interoperabilidade para integrar plataformas de e-commerce e os sistemas que sua empresa já utiliza.</p></article>
          </div>
        </section>

        <section className="section shell cases-section" id="cases">
          <div className="section-heading-row">
            <div><p className="section-kicker">Casos de sucesso</p><h2>Parceiros que transformaram seus resultados.</h2></div>
            <div className="slider-controls"><button type="button" aria-label="Case anterior" onClick={() => setActiveCase((activeCase - 1 + cases.length) % cases.length)}><Icon name="arrow" size={17} /></button><button type="button" aria-label="Próximo case" onClick={() => setActiveCase((activeCase + 1) % cases.length)}><Icon name="arrow" size={17} /></button></div>
          </div>
          <div className="case-feature">
            <div className="case-logo-panel"><img src={currentCase.logo} alt={currentCase.name} /><span>0{activeCase + 1} / 0{cases.length}</span></div>
            <div className="case-copy"><h3>{currentCase.name}</h3><p>{currentCase.text}</p><a href="#contact" className="text-link">Conheça nossa história <Icon name="arrow" size={15} /></a></div>
          </div>
          <div className="case-tabs">{cases.map((item, index) => <button key={item.name} type="button" className={index === activeCase ? 'is-active' : ''} onClick={() => setActiveCase(index)}>{item.name}</button>)}</div>
        </section>

        <section className="trust-section">
          <div className="shell"><p className="section-kicker">Confiança construída</p><h2>Parceiros que confiaram na gente.</h2><p className="trust-copy">Durante esses anos atendemos <strong>+530 empresas</strong> de diversos segmentos.</p></div>
          <div className="logo-marquee" aria-label="Empresas parceiras"><div className="logo-track">{duplicatedPartners.map(([name, logo], index) => <div className="partner-logo" key={`${name}-${index}`}><img src={logo} alt={name} /></div>)}</div></div>
        </section>

        <section className="section shell process-section" id="process">
          <div className="process-heading"><p className="section-kicker">Nosso método</p><h2>Como inovamos para encontrar soluções.</h2><p>Um ciclo de trabalho transparente, colaborativo e orientado a resultados.</p></div>
          <div className="process-layout">
            <div className="process-nav">{processSteps.map((step, index) => <button key={step.title} className={index === activeStep ? 'is-active' : ''} type="button" onClick={() => setActiveStep(index)}><span>0{index + 1}</span>{step.title}<Icon name="arrow" size={15} /></button>)}</div>
            <div className="process-detail"><div className="process-visual"><img src={currentStep.image} alt="" /><span>0{activeStep + 1}</span></div><div><h3>{currentStep.title}</h3><p>{currentStep.text}</p><a className="text-link" href="#contact">Fale com um especialista <Icon name="arrow" size={15} /></a></div></div>
          </div>
        </section>

        <section className="solutions-section section" id="solutions">
          <div className="shell"><div className="section-heading-row solutions-heading"><div><p className="section-kicker">Soluções</p><h2>Transforme necessidades em realidade.</h2></div><p>Descubra como a Jetsoft pode impulsionar o seu negócio.</p></div><div className="solution-grid">{solutionCards.map((solution) => <article className="solution-card" key={solution.name}><div className="solution-image"><img src={solution.image} alt="" /></div><div className="solution-card-body"><h3>{solution.name}</h3><p>{solution.copy}</p><a href={solution.href} className="text-link">Saiba mais <Icon name="arrow" size={15} /></a></div></article>)}</div></div>
        </section>

        <section className="section shell articles-section" id="articles">
          <div className="section-heading-row"><div><p className="section-kicker">Conteúdos</p><h2>Atualize-se sobre tecnologia e negócios.</h2></div><a href="#contact" className="text-link">Ver todos os artigos <Icon name="arrow" size={15} /></a></div>
          <div className="article-grid"><article><span>28.05.2024</span><h3>ERP online é tão seguro quanto um ERP tradicional?</h3><a href="#contact" aria-label="Ler artigo sobre ERP"><Icon name="arrow" size={18} /></a></article><article><span>22.05.2024</span><h3>“Hello, World”: a primeira mensagem da programação</h3><a href="#contact" aria-label="Ler artigo sobre programação"><Icon name="arrow" size={18} /></a></article><article><span>22.05.2024</span><h3>As vantagens de adotar uma ferramenta low-code</h3><a href="#contact" aria-label="Ler artigo sobre low-code"><Icon name="arrow" size={18} /></a></article></div>
        </section>
      </main>

      <footer className="jetsoft-footer" id="contact">
        <div className="shell footer-main"><div className="footer-brand"><img src={asset('logo.png')} alt="Jetsoft" /><p>A Jetsoft é uma empresa brasileira, nascida do desejo de ver sonhos se transformando em realidade.</p><div className="social-links"><a href="https://www.linkedin.com" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a><a href="https://www.instagram.com" aria-label="Instagram"><Icon name="instagram" size={18} /></a><a href="https://www.facebook.com" aria-label="Facebook"><span>f</span></a></div></div><div className="footer-column"><h3>Links úteis</h3><a href="#top">Início</a><a href="#about">Sobre nós</a><a href="#solutions">O que fazemos</a><a href="#articles">Blog</a></div><div className="footer-column contact-column"><h3>Informações de contato</h3><a href="tel:+551130907875"><Icon name="phone" size={17} /><span>(11) 3090-7875</span></a><a href="mailto:comercial@jetsoft.com.br"><Icon name="mail" size={17} /><span>comercial@jetsoft.com.br</span></a><a href="#contact"><Icon name="pin" size={17} /><span>Rua Palestra Itália, 73<br />Perdizes — São Paulo/SP</span></a></div></div>
        <div className="footer-cta shell"><p>Queremos ouvir sobre seus desafios.</p><a href="mailto:comercial@jetsoft.com.br">Entre em contato para encontrar soluções <Icon name="arrow" size={18} /></a></div>
        <div className="shell footer-bottom"><span>© 2025 Jetsoft — 12.603.117/0001-49.</span><span>Todos os direitos reservados.</span><a href="#top" aria-label="Voltar ao topo"><Icon name="arrowUp" size={17} /></a></div>
      </footer>
      <a className="whatsapp-float" href="https://api.whatsapp.com/send?phone=11971301110" aria-label="Fale com a Jetsoft pelo WhatsApp">WA</a>
    </div>
  );
}

export default JetsoftPage;
