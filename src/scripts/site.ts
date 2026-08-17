import { navigate } from 'astro:transitions/client';

const HERO_JSON =
  '{\n  "name": "Cimar Rodrigo Morales",\n  "role": "Backend Developer",\n  "location": "La Paz, Bolivia",\n  "current": "Banco Bisa S.A.",\n  "focus": ["Go", "Java", "hexagonal architecture"],\n  "open_to_work": true\n}';

let typerId: ReturnType<typeof setInterval> | undefined;
let observers: IntersectionObserver[] = [];

function reducedMotion(): boolean {
  return matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function currentTheme(): string {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function syncThemeLabel(): void {
  document.querySelectorAll<HTMLElement>('[data-theme-label]').forEach((el) => {
    el.textContent = currentTheme();
  });
}

function setupThemeToggle(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const theme = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = theme;
      try {
        localStorage.setItem('theme', theme);
      } catch {
        /* storage unavailable */
      }
      syncThemeLabel();
    });
  });
}

// Language switch preserves the current section hash: /#projects -> /es/#projects
function setupLangSwitch(): void {
  document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const base = link.getAttribute('href') ?? '/';
      navigate(base + location.hash);
    });
  });
}

function setupTyper(): void {
  const target = document.querySelector<HTMLElement>('[data-typed]');
  const status = document.querySelector<HTMLElement>('[data-status]');
  if (!target) return;

  if (reducedMotion()) {
    target.textContent = HERO_JSON;
    status?.classList.add('is-on');
    return;
  }

  target.textContent = '';
  setTimeout(() => status?.classList.add('is-on'), 500);
  let i = 0;
  typerId = setInterval(() => {
    i += 2;
    target.textContent = HERO_JSON.slice(0, i);
    if (i >= HERO_JSON.length) clearInterval(typerId);
  }, 16);
}

function setupNavHighlight(): void {
  const links = document.querySelectorAll<HTMLAnchorElement>('.nav-link[href^="#"]');
  if (!links.length) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) =>
          l.classList.toggle('is-active', l.getAttribute('href') === '#' + entry.target.id)
        );
      });
    },
    { rootMargin: '-35% 0px -55% 0px' }
  );
  ['experience', 'projects', 'about', 'contact'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
  observers.push(obs);
}

function setupFeaturedPanels(): void {
  const steps = document.querySelectorAll<HTMLElement>('[data-fp]');
  if (!steps.length) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const panel = document.querySelector<HTMLElement>(
          `.fp-panel[data-fp-panel="${el.dataset.fp}"]`
        );
        if (panel) panel.dataset.active = el.dataset.idx ?? '0';
      });
    },
    { rootMargin: '-42% 0px -42% 0px' }
  );
  steps.forEach((el) => obs.observe(el));
  observers.push(obs);
}

function setupReveals(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!targets.length) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute('data-reveal', 'in');
        obs.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px' }
  );
  targets.forEach((el) => obs.observe(el));
  observers.push(obs);
}

function cleanup(): void {
  clearInterval(typerId);
  observers.forEach((o) => o.disconnect());
  observers = [];
}

function init(): void {
  cleanup();
  syncThemeLabel();
  setupThemeToggle();
  setupLangSwitch();
  setupTyper();
  setupNavHighlight();
  setupFeaturedPanels();
  setupReveals();
}

document.addEventListener('astro:page-load', init);
document.addEventListener('astro:after-swap', syncThemeLabel);
