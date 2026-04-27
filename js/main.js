/* ============================================================
   Kay Beckmann – IT-Dienstleistungen
   Main JavaScript – Navigation, i18n, Animations
   ============================================================ */

'use strict';

// ---------- Translations ----------
const translations = {
  de: {
    // Meta
    'page.title': 'Kay Beckmann – IT-Freelancer',
    'page.description': 'IT-Freelancer für Prozessautomatisierung, Softwareentwicklung und Serverinfrastruktur. Ich löse konkrete IT-Probleme und spare Ihnen wertvolle Zeit.',

    // Nav
    'nav.services': 'Leistungen',
    'nav.skills':   'Skills',
    'nav.about':    'Über mich',
    'nav.contact':  'Kontakt',
    'nav.cta':      'Erstgespräch',
    'nav.imprint':  'Impressum',
    'nav.privacy':  'Datenschutz',

    // Hero
    'hero.badge':   'IT-Freelancer · Menzendorf',
    'hero.title1':  'Weniger Routinearbeit.',
    'hero.title2':  'Mehr Ergebnis.',
    'hero.title3':  'Für Ihr Unternehmen.',
    'hero.subtitle':'Ich automatisiere Ihre Prozesse, entwickle maßgeschneiderte Software und sorge für eine stabile IT-Infrastruktur – damit Sie sich auf das konzentrieren können, was wirklich wichtig ist.',
    'hero.cta1':    'Kostenloses Erstgespräch',
    'hero.cta2':    'Leistungen entdecken',

    // Services
    'services.tag':      'Meine Leistungen',
    'services.title':    'Welche Probleme ich löse',
    'services.subtitle': 'Konkrete IT-Lösungen für typische Herausforderungen im Unternehmensalltag',

    'services.prog.title': 'Software & Webentwicklung',
    'services.prog.desc':  'Sie brauchen eine digitale Lösung, die kein Standard-Tool abdeckt? Ich entwickle genau das, was Ihr Unternehmen braucht – wartbar, skalierbar und ohne Vendor-Lock-in.',
    'services.n8n.title':  'Prozesse automatisieren',
    'services.n8n.desc':   'Jede Stunde, die Ihr Team mit manuellen, wiederkehrenden Aufgaben verbringt, kostet Geld. Ich automatisiere diese Prozesse – zuverlässig, günstig und ohne Ihr Team zu belasten.',
    'services.srv.title':  'Stabile IT-Infrastruktur',
    'services.srv.desc':   'Serverausfälle entstehen meistens, wenn niemand hinschaut. Ich richte Ihre Infrastruktur professionell ein, halte sie aktuell und informiere Sie, bevor Probleme entstehen.',
    'services.ai.title':   'KI sinnvoll einsetzen',
    'services.ai.desc':    'KI bietet echten Mehrwert – wenn sie richtig eingesetzt wird. Ich integriere KI-Lösungen in Ihre bestehenden Prozesse: lokal, DSGVO-konform und mit messbarem Nutzen.',

    // Skills
    'skills.tag':   'Tech Stack',
    'skills.title': 'Womit ich Ihre Probleme löse',
    'skills.subtitle': 'Bewährte Technologien und Werkzeuge – ausgewählt nach dem, was für Ihr Projekt am besten passt',
    'skills.group.languages': 'Sprachen',
    'skills.group.frontend':  'Frontend',
    'skills.group.backend':   'Backend',
    'skills.group.devops':    'DevOps & Automation',
    'skills.group.database':  'Datenbanken',
    'skills.group.tools':     'Tools',
    'skills.group.ai':        'KI & LLMs',

    // About
    'about.tag':   'Über mich',
    'about.title': 'Hi, ich bin',
    'about.name':  'Kay Beckmann',
    'about.p1':    'Ich bin IT-Freelancer aus Menzendorf und helfe kleinen und mittelständischen Unternehmen dabei, mehr aus ihrer IT herauszuholen – mit weniger manuellem Aufwand und mehr Verlässlichkeit.',
    'about.p2':    'Mit über 15 Jahren Linux-Erfahrung kenne ich sowohl die technische Tiefe als auch die praktischen Anforderungen eines Unternehmens. Ich setze auf Open-Source-Lösungen: transparent, günstig und langfristig wartbar.',
    'about.h1':    'Konkreter Nutzen statt technisches Bla-Bla',
    'about.h2':    'Persönlicher Ansprechpartner – kein Ticket-System',
    'about.h3':    'Faire Preise durch schlanke Strukturen',
    'about.h4':    'Open Source – keine versteckten Lizenzkosten',
    'about.stat1.num':   '15+',
    'about.stat1.label': 'Jahre Erfahrung',
    'about.stat2.num':   '4',
    'about.stat2.label': 'Leistungsbereiche',
    'about.stat3.num':   '∞',
    'about.stat3.label': 'Kaffee',
    'about.stat4.num':   '24h',
    'about.stat4.label': 'Reaktionszeit',

    // Contact
    'contact.tag':      'Kontakt',
    'contact.title':    'Lass uns',
    'contact.title2':   'zusammenarbeiten',
    'contact.subtitle': 'Beschreiben Sie Ihr Problem – ich melde mich innerhalb von 24 Stunden mit einem ersten Lösungsansatz.',
    'contact.email.label':  'E-Mail',
    'contact.linkedin.label': 'LinkedIn',
    'contact.form.title':    'Kostenloses Erstgespräch anfragen',
    'contact.form.subtitle': 'Unverbindlich und ohne Kleingedrucktes. Ich antworte innerhalb von 24 Stunden.',
    'contact.form.name':     'Ihr Name',
    'contact.form.email':    'Ihre E-Mail-Adresse',
    'contact.form.subject':  'Worum geht es? (z.B. Automatisierung, Website, Server)',
    'contact.form.message':  'Beschreiben Sie kurz Ihr Problem oder Ihr Vorhaben',
    'contact.form.submit':   'Anfrage senden',

    // Footer
    'footer.copy':    '© 2026 Kay Beckmann. Alle Rechte vorbehalten.',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',

    // Legal pages
    'legal.back': '← Zurück zur Startseite',
  },

  en: {
    // Meta
    'page.title': 'Kay Beckmann – IT Freelancer',
    'page.description': 'IT freelancer for process automation, software development, and server infrastructure. I solve concrete IT problems and save you valuable time.',

    // Nav
    'nav.services': 'Services',
    'nav.skills':   'Skills',
    'nav.about':    'About',
    'nav.contact':  'Contact',
    'nav.cta':      'Book a Call',
    'nav.imprint':  'Imprint',
    'nav.privacy':  'Privacy',

    // Hero
    'hero.badge':   'IT Freelancer · North Germany',
    'hero.title1':  'Less Routine Work.',
    'hero.title2':  'More Results.',
    'hero.title3':  'For Your Business.',
    'hero.subtitle':'I automate your processes, develop custom software, and ensure a stable IT infrastructure – so you can focus on what truly matters.',
    'hero.cta1':    'Free Consultation',
    'hero.cta2':    'Explore Services',

    // Services
    'services.tag':      'My Services',
    'services.title':    'What Problems I Solve',
    'services.subtitle': 'Concrete IT solutions for typical business challenges',

    'services.prog.title': 'Software & Web Development',
    'services.prog.desc':  'Need a digital solution that no standard tool covers? I build exactly what your business needs – maintainable, scalable, and without vendor lock-in.',
    'services.n8n.title':  'Automate Your Processes',
    'services.n8n.desc':   'Every hour your team spends on manual, repetitive tasks costs money. I automate these processes – reliably, cost-effectively, and without burdening your team.',
    'services.srv.title':  'Stable IT Infrastructure',
    'services.srv.desc':   'Server outages usually happen when nobody is watching. I set up your infrastructure professionally, keep it current, and notify you before problems arise.',
    'services.ai.title':   'AI That Actually Helps',
    'services.ai.desc':    'AI delivers real value – when applied correctly. I integrate AI solutions into your existing processes: locally hosted, GDPR-compliant, and with measurable impact.',

    // Skills
    'skills.tag':   'Tech Stack',
    'skills.title': 'How I Solve Your Problems',
    'skills.subtitle': 'Proven technologies and tools – chosen for what fits your project best',
    'skills.group.languages': 'Languages',
    'skills.group.frontend':  'Frontend',
    'skills.group.backend':   'Backend',
    'skills.group.devops':    'DevOps & Automation',
    'skills.group.database':  'Databases',
    'skills.group.tools':     'Tools',
    'skills.group.ai':        'AI & LLMs',

    // About
    'about.tag':   'About Me',
    'about.title': 'Hi, I\'m',
    'about.name':  'Kay Beckmann',
    'about.p1':    'I\'m an IT freelancer from northern Germany, helping small and medium-sized businesses get more out of their IT – with less manual effort and more reliability.',
    'about.p2':    'With over 15 years of Linux experience, I understand both technical depth and practical business requirements. I rely on open-source solutions: transparent, affordable, and maintainable long-term.',
    'about.h1':    'Concrete results, not technical jargon',
    'about.h2':    'Direct contact – no ticket system',
    'about.h3':    'Fair pricing through lean structures',
    'about.h4':    'Open source – no hidden licensing costs',
    'about.stat1.num':   '15+',
    'about.stat1.label': 'Years Experience',
    'about.stat2.num':   '4',
    'about.stat2.label': 'Service Areas',
    'about.stat3.num':   '∞',
    'about.stat3.label': 'Coffee',
    'about.stat4.num':   '24h',
    'about.stat4.label': 'Response Time',

    // Contact
    'contact.tag':      'Contact',
    'contact.title':    'Let\'s',
    'contact.title2':   'Work Together',
    'contact.subtitle': 'Describe your problem – I\'ll respond within 24 hours with an initial solution approach.',
    'contact.email.label':  'Email',
    'contact.linkedin.label': 'LinkedIn',
    'contact.form.title':    'Request a Free Consultation',
    'contact.form.subtitle': 'Non-binding, no fine print. I respond within 24 hours.',
    'contact.form.name':     'Your Name',
    'contact.form.email':    'Your Email Address',
    'contact.form.subject':  'What\'s it about? (e.g. automation, website, server)',
    'contact.form.message':  'Briefly describe your problem or project',
    'contact.form.submit':   'Send Request',

    // Footer
    'footer.copy':    '© 2026 Kay Beckmann. All rights reserved.',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',

    // Legal pages
    'legal.back': '← Back to Homepage',
  },

  sv: {
    // Meta
    'page.title': 'Kay Beckmann – IT-Frilansare',
    'page.description': 'IT-frilansare för processautomatisering, mjukvaruutveckling och serverinfrastruktur. Jag löser konkreta IT-problem och sparar din värdefulla tid.',

    // Nav
    'nav.services': 'Tjänster',
    'nav.skills':   'Kompetenser',
    'nav.about':    'Om mig',
    'nav.contact':  'Kontakt',
    'nav.cta':      'Boka samtal',
    'nav.imprint':  'Impressum',
    'nav.privacy':  'Integritet',

    // Hero
    'hero.badge':   'IT-frilansare · Norra Tyskland',
    'hero.title1':  'Mindre rutinarbete.',
    'hero.title2':  'Mer resultat.',
    'hero.title3':  'För ditt företag.',
    'hero.subtitle':'Jag automatiserar dina processer, utvecklar skräddarsydd mjukvara och säkerställer en stabil IT-infrastruktur – så att du kan fokusera på det som verkligen spelar roll.',
    'hero.cta1':    'Kostnadsfri konsultation',
    'hero.cta2':    'Utforska tjänster',

    // Services
    'services.tag':      'Mina tjänster',
    'services.title':    'Vilka problem jag löser',
    'services.subtitle': 'Konkreta IT-lösningar för typiska affärsutmaningar',

    'services.prog.title': 'Mjukvara & webbutveckling',
    'services.prog.desc':  'Behöver du en digital lösning som inget standardverktyg täcker? Jag bygger exakt det ditt företag behöver – underhållbart, skalbart och utan leverantörsberoende.',
    'services.n8n.title':  'Automatisera processer',
    'services.n8n.desc':   'Varje timme ditt team spenderar på manuella, repetitiva uppgifter kostar pengar. Jag automatiserar dessa processer – pålitligt, kostnadseffektivt och utan att belasta ditt team.',
    'services.srv.title':  'Stabil IT-infrastruktur',
    'services.srv.desc':   'Serveravbrott sker oftast när ingen bevakar. Jag konfigurerar din infrastruktur professionellt, håller den uppdaterad och meddelar dig innan problem uppstår.',
    'services.ai.title':   'AI som faktiskt hjälper',
    'services.ai.desc':    'AI ger verkligt värde – när det används rätt. Jag integrerar AI-lösningar i dina befintliga processer: lokalt, GDPR-kompatibelt och med mätbar effekt.',

    // Skills
    'skills.tag':      'Tech Stack',
    'skills.title':    'Hur jag löser dina problem',
    'skills.subtitle': 'Beprövade teknologier och verktyg – valda för vad som passar ditt projekt bäst',
    'skills.group.languages': 'Språk',
    'skills.group.frontend':  'Frontend',
    'skills.group.backend':   'Backend',
    'skills.group.devops':    'DevOps & Automation',
    'skills.group.database':  'Databaser',
    'skills.group.tools':     'Verktyg',
    'skills.group.ai':        'AI & LLMs',

    // About
    'about.tag':   'Om mig',
    'about.title': 'Hej, jag är',
    'about.name':  'Kay Beckmann',
    'about.p1':    'Jag är IT-frilansare från norra Tyskland och hjälper små och medelstora företag att få mer ut av sin IT – med mindre manuellt arbete och mer tillförlitlighet.',
    'about.p2':    'Med över 15 års Linux-erfarenhet förstår jag både tekniskt djup och praktiska affärskrav. Jag förlitar mig på öppen källkod: transparent, prisvärt och underhållbart på lång sikt.',
    'about.h1':    'Konkreta resultat, inte tekniskt fackspråk',
    'about.h2':    'Direktkontakt – inget ärendesystem',
    'about.h3':    'Rättvisa priser genom smidiga strukturer',
    'about.h4':    'Öppen källkod – inga dolda licenskostnader',
    'about.stat1.num':   '15+',
    'about.stat1.label': 'Års erfarenhet',
    'about.stat2.num':   '4',
    'about.stat2.label': 'Tjänsteområden',
    'about.stat3.num':   '∞',
    'about.stat3.label': 'Kaffe',
    'about.stat4.num':   '24h',
    'about.stat4.label': 'Svarstid',

    // Contact
    'contact.tag':      'Kontakt',
    'contact.title':    'Låt oss',
    'contact.title2':   'samarbeta',
    'contact.subtitle': 'Beskriv ditt problem – jag svarar inom 24 timmar med ett första lösningsförslag.',
    'contact.email.label':    'E-post',
    'contact.linkedin.label': 'LinkedIn',
    'contact.form.title':    'Boka kostnadsfri konsultation',
    'contact.form.subtitle': 'Utan förpliktelser och utan finstilt. Jag svarar inom 24 timmar.',
    'contact.form.name':     'Ditt namn',
    'contact.form.email':    'Din e-postadress',
    'contact.form.subject':  'Vad gäller det? (t.ex. automatisering, webbplats, server)',
    'contact.form.message':  'Beskriv kort ditt problem eller projekt',
    'contact.form.submit':   'Skicka förfrågan',

    // Footer
    'footer.copy':    '© 2026 Kay Beckmann. Alla rättigheter förbehållna.',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Integritetspolicy',

    // Legal pages
    'legal.back': '← Tillbaka till startsidan',
  }
};

// ---------- i18n Core ----------
let currentLang = localStorage.getItem('lang') || 'de';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || (translations['de'] && translations['de'][key])
    || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (text) el.textContent = text;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = t(key);
    if (text) el.placeholder = text;
  });

  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    // handled separately if needed
  });

  // Update document language
  document.documentElement.lang = currentLang;

  // Update page title
  const titleKey = t('page.title');
  if (titleKey) document.title = titleKey;

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations();
}

function toggleLanguage() {
  setLanguage(currentLang === 'de' ? 'en' : 'de');
}

// ---------- Navigation ----------
function initNav() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (!nav) return;

  // Scroll effect
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveNavLink();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  }

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.id;
  });

  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

// ---------- Scroll Animations ----------
function initScrollAnimations() {
  const targets = document.querySelectorAll('[data-animate], .service-card, .skill-group, .about-text, .about-stats, .contact-info, .contact-card');

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger delay for sibling elements
          const siblings = entry.target.parentElement
            ? Array.from(entry.target.parentElement.children).filter(el => el.classList.contains(entry.target.classList[0]))
            : [];
          const idx = siblings.indexOf(entry.target);
          const delay = idx >= 0 ? idx * 80 : 0;

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
}

// ---------- Contact Form ----------
const WEBHOOK_URL = 'https://n8n.beckmann-md.de/webhook/contact-form';

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const btn    = form.querySelector('.form-submit');
    const name   = form.querySelector('#form-name')?.value?.trim();
    const email  = form.querySelector('#form-email')?.value?.trim();
    const subject = form.querySelector('#form-subject')?.value?.trim();
    const message = form.querySelector('#form-message')?.value?.trim();

    if (!name || !email || !message) return;

    const originalText = btn.textContent;
    btn.textContent = currentLang === 'de' ? 'Wird gesendet…' : 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      btn.textContent = currentLang === 'de' ? '✓ Nachricht gesendet!' : '✓ Message sent!';
      btn.style.background = 'var(--green)';
      form.reset();

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);

    } catch {
      btn.textContent = currentLang === 'de' ? '✗ Fehler – bitte per E-Mail' : '✗ Error – please email directly';
      btn.style.background = '#c0392b';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 5000);
    }
  });
}

// ---------- Hero Title Rotation ----------
function initHeroRotation() {
  const spans = document.querySelectorAll('.hero-title span');
  if (spans.length < 2) return;

  let current = 0;
  const DISPLAY_MS    = 2800;
  const TRANSITION_MS = 550;

  spans[current].classList.add('title-active');

  setInterval(() => {
    const prev = current;
    current = (current + 1) % spans.length;

    spans[prev].classList.remove('title-active');
    spans[prev].classList.add('title-exit');

    setTimeout(() => {
      spans[prev].classList.remove('title-exit');
      spans[current].classList.add('title-active');
    }, TRANSITION_MS);
  }, DISPLAY_MS);
}

// ---------- Smooth Scroll for Anchor Links ----------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  initNav();
  initScrollAnimations();
  initContactForm();
  initSmoothScroll();
  initHeroRotation();
});
