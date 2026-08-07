/* Theme toggle */
const gsapAnimations = document.createElement("script");
gsapAnimations.src = "assets/js/gsap-animations.js";
document.head.append(gsapAnimations);

const getSavedTheme = () => {
    try {
        return localStorage.getItem("theme");
    } catch {
        return null;
    }
};

const saveTheme = (theme) => {
    try {
        localStorage.setItem("theme", theme);
    } catch {
        // The selected theme still works for the current page.
    }
};

const savedTheme = getSavedTheme();
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

document.documentElement.dataset.theme = savedTheme || preferredTheme;

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.createElement("button");

    themeToggle.className = "theme-toggle";
    themeToggle.type = "button";
    themeToggle.innerHTML = `
        <span class="theme-toggle-thumb" aria-hidden="true">
            <svg class="theme-icon theme-icon-moon" viewBox="0 0 24 24">
                <path d="M20.4 15.2A8.5 8.5 0 0 1 8.8 3.6 8.5 8.5 0 1 0 20.4 15.2Z"></path>
            </svg>
            <svg class="theme-icon theme-icon-sun" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3.5"></circle>
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
            </svg>
        </span>
    `;

    const updateToggleLabel = () => {
        const isDark = document.documentElement.dataset.theme === "dark";
        themeToggle.setAttribute("aria-label", isDark ? "Ativar modo claro" : "Ativar modo escuro");
        themeToggle.setAttribute("title", isDark ? "Modo claro" : "Modo escuro");
        themeToggle.setAttribute("aria-pressed", String(isDark));
    };

    themeToggle.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";

        document.documentElement.dataset.theme = nextTheme;
        saveTheme(nextTheme);
        updateToggleLabel();
    });

    updateToggleLabel();
    document.body.prepend(themeToggle);
});

/* Digital camera frame overlay */
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".camera-frame")) {
        return;
    }

    const cameraFrame = document.createElement("div");
    cameraFrame.className = "camera-frame";
    cameraFrame.setAttribute("aria-hidden", "true");

    document.body.append(cameraFrame);
});

/* Sticky Header Reveal */
document.addEventListener("DOMContentLoaded", () => {
const headers = document.querySelectorAll(".menuwrapper, .mobile-menu-trigger");
const scrollThreshold = 100;

let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    // console.log("current: ", currentScroll);
    // console.log("last: ", lastScroll);
       // Antes de 100px não faz nada
    if (currentScroll <= scrollThreshold) {
        headers.forEach((header) => {
            header.classList.remove("scroll-down");
            header.classList.remove("scroll-up");
        });
        lastScroll = currentScroll;
        return;
    }

    if (currentScroll - lastScroll > 0) {
        // scrolled down -- header hide
        headers.forEach((header) => {
            header.classList.add("scroll-down");
            header.classList.remove("scroll-up");
        });
    } else {
        // scrolled up -- header show
        headers.forEach((header) => {
            header.classList.add("scroll-up");
            header.classList.remove("scroll-down");
        });
    }

    lastScroll = currentScroll;
    // console.log("last: ", lastScroll);

});
});

/* ACIONADOR DO MENU MOBILE */
document.addEventListener("DOMContentLoaded", () => {
    const botaomenu = document.querySelector(".botao-mobile");
    const offcanva = document.querySelector(".menuoffcanva");
    const closemenu = document.querySelector('.close-menu');

    if (!botaomenu || !offcanva || !closemenu) {
        return;
    }

    const closeMobileMenu = () => {
        offcanva.classList.remove('on');
        offcanva.setAttribute('aria-hidden', 'true');
        botaomenu.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('mobile-menu-open');
        botaomenu.focus();
    };

    botaomenu.addEventListener("click", () => {
        offcanva.classList.add('on');
        offcanva.setAttribute('aria-hidden', 'false');
        botaomenu.setAttribute('aria-expanded', 'true');
        document.body.classList.add('mobile-menu-open');
        closemenu.focus();
    });

    closemenu.addEventListener('click', closeMobileMenu);

    offcanva.addEventListener('click', (event) => {
        if (event.target === offcanva) {
            closeMobileMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && offcanva.classList.contains('on')) {
            closeMobileMenu();
        }
    });
});

 const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
            bar.style.animationDelay = `${i * 0.07}s`;
            bar.style.width = bar.style.getPropertyValue('--w') || '80%';
          });
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skills-grid').forEach(el => observer.observe(el));

    // Set actual widths for bars from CSS var
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      const w = bar.style.cssText.match(/--w:([\d%]+)/)?.[1] || '80%';
      bar.style.setProperty('--target-w', w);
      bar.style.width = w;
    });
