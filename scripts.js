(function () {
  'use strict';

  /* ── Loading screen ── */
  var loader = document.createElement('div');
  loader.id = 'loader';
  loader.innerHTML = '<div class="loader-brand"><img src="images/logowhite.png" alt="Vimtra Ventures"></div><div class="loader-bar"><div class="loader-fill"></div></div>';
  document.body.insertBefore(loader, document.body.firstChild);
  window.addEventListener('load', function () {
    setTimeout(function () { loader.classList.add('hide'); }, 500);
  });

  /* ── SVG icon library ── */
  var SVG = {
    linkedin: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><path d='M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.065 2.065 0 110-4.13 2.065 2.065 0 010 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z'/></svg>",
    instagram: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><path d='M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07C3.89 21.62 2.38 20.08 2.23 16.85 2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98C23.99 15.67 24 15.26 24 12s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32A6.16 6.16 0 0012 5.84zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z'/></svg>",
    facebook: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><path d='M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 5.99 4.39 10.96 10.13 11.86v-8.38H7.08v-3.48h3.05V9.43c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.48h-2.8v8.38C19.62 23.03 24 18.06 24 12.07z'/></svg>",
    phone: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.7 9.74 19.79 19.79 0 01.67 1.1 2 2 0 012.66 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z'/></svg>",
    email: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'/><polyline points='22,6 12,13 2,6'/></svg>",
    location: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z'/><circle cx='12' cy='10' r='3'/></svg>",
    share: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><circle cx='18' cy='5' r='3'/><circle cx='6' cy='12' r='3'/><circle cx='18' cy='19' r='3'/><line x1='8.59' y1='13.51' x2='15.42' y2='17.49'/><line x1='15.41' y1='6.51' x2='8.59' y2='10.49'/></svg>"
  };

  /* ── Inject social icons ── */
  document.querySelectorAll('.socials a').forEach(function (a) {
    var label = (a.getAttribute('aria-label') || '').toLowerCase();
    if (label.indexOf('linkedin') > -1)  { a.innerHTML = SVG.linkedin; }
    else if (label.indexOf('instagram') > -1) { a.innerHTML = SVG.instagram; }
    else if (label.indexOf('facebook') > -1)  { a.innerHTML = SVG.facebook; }
  });

  /* ── Inject contact-info icons ── */
  document.querySelectorAll('.ci-block').forEach(function (block) {
    var h4 = block.querySelector('h4');
    if (!h4) return;
    var text = h4.textContent.trim().toLowerCase();
    var icon = null;
    if (text === 'phone')          icon = SVG.phone;
    else if (text === 'email')     icon = SVG.email;
    else if (text.indexOf('headquart') > -1) icon = SVG.location;
    else if (text === 'follow')    icon = SVG.share;
    if (icon) {
      h4.innerHTML = "<span class='ci-icon'>" + icon + h4.textContent.trim() + "</span>";
    }
  });

  /* ── Nav scroll state ── */
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  /* ── Mobile menu + burger ✕ animation ── */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Scroll reveal ── */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* ── Custom cursor (initialized off-screen to prevent corner flash) ── */
  var dot = document.querySelector('.cursor-dot');
  var ring = document.querySelector('.cursor-ring');
  if (dot && ring && window.matchMedia('(hover: hover)').matches) {
    var rx = -200, ry = -200, mx = -200, my = -200;
    window.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a, button, .feature-card, .sector-card, .logo-cell, .showcase-card, .proj-row, .office, .burger, input, textarea').forEach(function (el) {
      el.addEventListener('mouseenter', function () { ring.classList.add('hover'); });
      el.addEventListener('mouseleave', function () { ring.classList.remove('hover'); });
    });
  }

  /* ── Homepage Hero Gravity Pull Interaction ── */
  var hero = document.querySelector('.hero');
  if (hero) {
    var canvas = document.createElement('canvas');
    canvas.className = 'hero-gravity-canvas';
    hero.insertBefore(canvas, hero.firstChild);

    var ctx = canvas.getContext('2d');
    var particles = [];
    var mouse = { x: null, y: null, active: false };

    var resizeCanvas = function () {
      canvas.width = hero.clientWidth;
      canvas.height = hero.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse
    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });

    hero.addEventListener('mouseleave', function () {
      mouse.active = false;
    });

    // Create particles
    var numParticles = Math.min(60, Math.floor((canvas.width * canvas.height) / 15000));
    for (var i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseVx: (Math.random() - 0.5) * 0.4,
        baseVy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
        color: 'rgba(201, 169, 106, ' + (Math.random() * 0.4 + 0.2) + ')' // gold theme
      });
    }

    var animate = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];

        // Gravity pull to mouse
        if (mouse.active) {
          var dx = mouse.x - p.x;
          var dy = mouse.y - p.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          var maxDist = 250;

          if (dist < maxDist) {
            // Force strength proportional to distance (stronger closer, weak far)
            var force = (maxDist - dist) / maxDist;
            var pull = 0.08 * force; // adjust pull strength
            p.vx += (dx / dist) * pull;
            p.vy += (dy / dist) * pull;
          }
        }

        // Apply drag to damp gravity acceleration
        p.vx *= 0.95;
        p.vy *= 0.95;

        // Add small random drift back to base speed
        p.vx += p.baseVx * 0.05;
        p.vy += p.baseVy * 0.05;

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce/Wrap boundaries
        if (p.x < 0 || p.x > canvas.width) {
          p.baseVx *= -1;
          p.vx *= -1;
          p.x = Math.max(0, Math.min(canvas.width, p.x));
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.baseVy *= -1;
          p.vy *= -1;
          p.y = Math.max(0, Math.min(canvas.height, p.y));
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Draw lines between close particles
        for (var j = i + 1; j < particles.length; j++) {
          var p2 = particles[j];
          var ldx = p.x - p2.x;
          var ldy = p.y - p2.y;
          var ldist = Math.sqrt(ldx * ldx + ldy * ldy);

          if (ldist < 100) {
            var alpha = (100 - ldist) / 100 * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = 'rgba(201, 169, 106, ' + alpha + ')';
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }
})();
