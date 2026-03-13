/* ============================================================
   Kay Beckmann – IT-Dienstleistungen
   Main JavaScript – Navigation, i18n, Animations
   ============================================================ */

'use strict';

// ---------- Translations ----------
const translations = {
  de: {
    // Meta
    'page.title': 'Kay Beckmann – IT-Dienstleistungen',
    'page.description': 'Professionelle IT-Dienstleistungen: Programmierung, n8n Automation und Serververwaltung.',

    // Nav
    'nav.services': 'Leistungen',
    'nav.skills':   'Skills',
    'nav.about':    'Über mich',
    'nav.contact':  'Kontakt',
    'nav.imprint':  'Impressum',
    'nav.privacy':  'Datenschutz',

    // Hero
    'hero.badge':   'IT-Dienstleistungen · Kleingewerbe',
    'hero.title1':  'Professionelle',
    'hero.title2':  'IT-Lösungen',
    'hero.title3':  'für Ihr Unternehmen',
    'hero.subtitle':'Programmierung, Workflow-Automatisierung mit n8n und zuverlässige Serververwaltung – alles aus einer Hand.',
    'hero.cta1':    'Leistungen entdecken',
    'hero.cta2':    'Kontakt aufnehmen',

    // Services
    'services.tag':      'Meine Leistungen',
    'services.title':    'Was ich anbiete',
    'services.subtitle': 'Maßgeschneiderte IT-Lösungen für Ihr Unternehmen',

    'services.prog.title': 'Programmierarbeiten',
    'services.prog.desc':  'Individuelle Softwarelösungen, moderne Webentwicklung und maßgeschneiderte Anwendungen – vom Konzept bis zur fertigen Umsetzung.',
    'services.n8n.title':  'Automation mit n8n',
    'services.n8n.desc':   'Automatisierung Ihrer Geschäftsprozesse mit n8n Workflows: API-Integrationen, Datensynchronisation und wiederkehrende Aufgaben auf Autopilot.',
    'services.srv.title':  'Serververwaltung',
    'services.srv.desc':   'Einrichtung, Härtung und Wartung Ihrer Server-Infrastruktur auf Linux-Basis – lokal, im Rechenzentrum oder in der Cloud.',

    // Skills
    'skills.tag':   'Tech Stack',
    'skills.title': 'Meine Skills',
    'skills.subtitle': 'Technologien und Werkzeuge, mit denen ich täglich arbeite',
    'skills.group.languages': 'Sprachen',
    'skills.group.frontend':  'Frontend',
    'skills.group.backend':   'Backend',
    'skills.group.devops':    'DevOps & Automation',
    'skills.group.database':  'Datenbanken',
    'skills.group.tools':     'Tools',

    // About
    'about.tag':   'Über mich',
    'about.title': 'Hi, ich bin',
    'about.name':  'Kay Beckmann',
    'about.p1':    'Ich bin freiberuflicher IT-Dienstleister aus Menzendorf mit einem starken Hintergrund in Webentwicklung, Linux-Administration und Prozessautomatisierung.',
    'about.p2':    'Als leidenschaftlicher Linux-Nutzer seit über 15 Jahren betreibe ich einen eigenen Homeserver mit LXC-Containern und VMs und habe ein tiefes Verständnis für systemnahe Themen und Open-Source-Technologien.',
    'about.h1':    'Über 15 Jahre Linux-Erfahrung',
    'about.h2':    'Full-Stack Webentwicklung',
    'about.h3':    'n8n Workflow-Automatisierung',
    'about.h4':    'Debian/Ubuntu Serverbetrieb',
    'about.stat1.num':   '15+',
    'about.stat1.label': 'Jahre Linux',
    'about.stat2.num':   '3',
    'about.stat2.label': 'Leistungen',
    'about.stat3.num':   '∞',
    'about.stat3.label': 'Kaffee',
    'about.stat4.num':   '100%',
    'about.stat4.label': 'Open Source',

    // Contact
    'contact.tag':      'Kontakt',
    'contact.title':    'Lass uns',
    'contact.title2':   'zusammenarbeiten',
    'contact.subtitle': 'Interesse an einer Zusammenarbeit? Ich freue mich auf Ihre Nachricht.',
    'contact.email.label':  'E-Mail',
    'contact.linkedin.label': 'LinkedIn',
    'contact.form.title':    'Nachricht senden',
    'contact.form.subtitle': 'Ich antworte in der Regel innerhalb von 24 Stunden.',
    'contact.form.name':     'Ihr Name',
    'contact.form.email':    'Ihre E-Mail-Adresse',
    'contact.form.subject':  'Betreff',
    'contact.form.message':  'Ihre Nachricht',
    'contact.form.submit':   'Nachricht senden',

    // Footer
    'footer.copy':    '© 2024 Kay Beckmann. Alle Rechte vorbehalten.',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',

    // Legal pages
    'legal.back': '← Zurück zur Startseite',
  },

  en: {
    // Meta
    'page.title': 'Kay Beckmann – IT Services',
    'page.description': 'Professional IT services: Programming, n8n Automation and Server Management.',

    // Nav
    'nav.services': 'Services',
    'nav.skills':   'Skills',
    'nav.about':    'About',
    'nav.contact':  'Contact',
    'nav.imprint':  'Imprint',
    'nav.privacy':  'Privacy',

    // Hero
    'hero.badge':   'IT Services · Small Business',
    'hero.title1':  'Professional',
    'hero.title2':  'IT Solutions',
    'hero.title3':  'for Your Business',
    'hero.subtitle':'Programming, workflow automation with n8n, and reliable server management – all from a single source.',
    'hero.cta1':    'Explore Services',
    'hero.cta2':    'Get in Touch',

    // Services
    'services.tag':      'My Services',
    'services.title':    'What I Offer',
    'services.subtitle': 'Tailored IT solutions for your business',

    'services.prog.title': 'Programming',
    'services.prog.desc':  'Custom software solutions, modern web development and tailored applications – from concept to finished product.',
    'services.n8n.title':  'Automation with n8n',
    'services.n8n.desc':   'Automating your business processes with n8n workflows: API integrations, data synchronization and recurring tasks on autopilot.',
    'services.srv.title':  'Server Management',
    'services.srv.desc':   'Setup, hardening and maintenance of your Linux-based server infrastructure – on-premises, in a data center or in the cloud.',

    // Skills
    'skills.tag':   'Tech Stack',
    'skills.title': 'My Skills',
    'skills.subtitle': 'Technologies and tools I work with every day',
    'skills.group.languages': 'Languages',
    'skills.group.frontend':  'Frontend',
    'skills.group.backend':   'Backend',
    'skills.group.devops':    'DevOps & Automation',
    'skills.group.database':  'Databases',
    'skills.group.tools':     'Tools',

    // About
    'about.tag':   'About Me',
    'about.title': 'Hi, I\'m',
    'about.name':  'Kay Beckmann',
    'about.p1':    'I\'m a freelance IT service provider from Menzendorf with a strong background in web development, Linux administration and process automation.',
    'about.p2':    'As a passionate Linux user for over 15 years, I run my own home server with LXC containers and VMs, and have a deep understanding of low-level topics and open-source technologies.',
    'about.h1':    'Over 15 years of Linux experience',
    'about.h2':    'Full-Stack web development',
    'about.h3':    'n8n workflow automation',
    'about.h4':    'Debian/Ubuntu server operation',
    'about.stat1.num':   '15+',
    'about.stat1.label': 'Years Linux',
    'about.stat2.num':   '3',
    'about.stat2.label': 'Services',
    'about.stat3.num':   '∞',
    'about.stat3.label': 'Coffee',
    'about.stat4.num':   '100%',
    'about.stat4.label': 'Open Source',

    // Contact
    'contact.tag':      'Contact',
    'contact.title':    'Let\'s',
    'contact.title2':   'Work Together',
    'contact.subtitle': 'Interested in working together? I\'d love to hear from you.',
    'contact.email.label':  'Email',
    'contact.linkedin.label': 'LinkedIn',
    'contact.form.title':    'Send a Message',
    'contact.form.subtitle': 'I usually respond within 24 hours.',
    'contact.form.name':     'Your Name',
    'contact.form.email':    'Your Email Address',
    'contact.form.subject':  'Subject',
    'contact.form.message':  'Your Message',
    'contact.form.submit':   'Send Message',

    // Footer
    'footer.copy':    '© 2024 Kay Beckmann. All rights reserved.',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',

    // Legal pages
    'legal.back': '← Back to Homepage',
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

  // Update lang button
  const langBtn = document.getElementById('lang-current');
  if (langBtn) langBtn.textContent = currentLang === 'de' ? 'EN' : 'DE';
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
  const langBtn = document.getElementById('lang-btn');

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
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }
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
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const name = form.querySelector('#form-name')?.value?.trim();
    const email = form.querySelector('#form-email')?.value?.trim();
    const message = form.querySelector('#form-message')?.value?.trim();

    if (!name || !email || !message) return;

    // Open mail client
    const subject = form.querySelector('#form-subject')?.value?.trim() || 'Anfrage von ' + name;
    const body = `Name: ${name}\n\n${message}`;
    window.location.href = `mailto:info@beckmann-md.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (btn) {
      const original = btn.textContent;
      btn.textContent = '✓ ' + (currentLang === 'de' ? 'Gesendet!' : 'Sent!');
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        form.reset();
      }, 3000);
    }
  });
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
});
