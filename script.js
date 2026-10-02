/* ========================================
   LR Refrigeracao — script.js
   Vanilla JS | Sem dependencias externas
   ======================================== */

(function () {
  'use strict';

  /* ---- WhatsApp Messages por Servico ---- */
  const WA_BASE = 'https://wa.me/5511949521977?text=';

  const WA_MESSAGES = {
    'geladeira':
      'Olá, preciso de assistência para consertar minha geladeira residencial. Ela está apresentando problemas, pode me passar um orçamento?',
    'freezer':
      'Olá, preciso de assistência técnica urgente para meu freezer comercial. Pode me passar um orçamento?',
    'expositora':
      'Olá, preciso de conserto/manutenção na minha expositora de bebidas. Vocês atendem esse modelo?',
    'ar-condicionado':
      'Olá, preciso de conserto para meu ar-condicionado. Ele está apresentando defeito e gostaria de agendar uma visita técnica.',
    'camara-fria':
      'Olá, preciso de assistência técnica especializada em câmara fria. É urgente, conseguem me atender?',
    'preventiva':
      'Olá, tenho interesse em contratar um plano de manutenção preventiva para os equipamentos da minha empresa.',
    'default':
      'Olá, gostaria de um orçamento para serviço de refrigeração. Pode me ajudar?'
  };

  function buildWALink(key) {
    var message = WA_MESSAGES[key] || WA_MESSAGES['default'];
    return WA_BASE + encodeURIComponent(message);
  }

  /* ---- CTA Select → WhatsApp dinâmico ---- */
  function initCtaForm() {
    var select = document.getElementById('servico-select');
    var ctaBtn = document.getElementById('cta-whatsapp-btn');

    if (!select || !ctaBtn) return;

    // Estado inicial
    ctaBtn.href = buildWALink('default');

    select.addEventListener('change', function () {
      var val = this.value || 'default';
      ctaBtn.href = buildWALink(val);
    });
  }

  /* ---- Navbar: scroll behavior ---- */
  function initNavbar() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;

    function update() {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ---- Hamburger menu ---- */
  function initHamburger() {
    var btn = document.getElementById('hamburger-btn');
    var navLinks = document.getElementById('nav-links');
    if (!btn || !navLinks) return;

    btn.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    // Fecha ao clicar em link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    // Fecha ao clicar fora
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Reveal on Scroll (Intersection Observer) ---- */
  function initReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---- Counter Animation (Hero Stats) ---- */
  function animateCounter(el, target, suffix) {
    var duration = 1400;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      var current = Math.round(eased * target);
      el.textContent = current.toLocaleString('pt-BR') + (suffix || '');
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  function initCounters() {
    var stats = document.querySelectorAll('.stat-number[data-target]');
    if (!stats.length) return;

    if (!('IntersectionObserver' in window)) {
      stats.forEach(function (el) {
        var target = parseInt(el.getAttribute('data-target'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        el.textContent = target.toLocaleString('pt-BR') + suffix;
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var target = parseInt(el.getAttribute('data-target'), 10);
            var suffix = el.getAttribute('data-suffix') || '';
            animateCounter(el, target, suffix);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    stats.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---- Smooth Scroll (fallback para browsers antigos) ---- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id = this.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---- Active nav link highlighting ---- */
  function initActiveLinks() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a');
    if (!sections.length || !navLinks.length) return;

    if (!('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              if (link.getAttribute('href') === '#' + id) {
                link.style.opacity = '1';
              } else {
                link.style.opacity = '';
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---- Init ---- */
  document.addEventListener('DOMContentLoaded', function () {
    initNavbar();
    initHamburger();
    initReveal();
    initCounters();
    initCtaForm();
    initSmoothScroll();
    initActiveLinks();
  });

})();
