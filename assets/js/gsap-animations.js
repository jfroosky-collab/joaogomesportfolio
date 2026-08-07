(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
        return;
    }

    const loadScript = (src) => new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);

        if (existingScript) {
            existingScript.addEventListener("load", resolve, { once: true });
            existingScript.addEventListener("error", reject, { once: true });
            return;
        }

        const script = document.createElement("script");

        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.append(script);
    });

    const revealSection = (element, index = 0) => {
        gsap.from(element, {
            autoAlpha: 0,
            clearProps: "transform,opacity,visibility",
            duration: 0.72,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true
            },
            y: Math.min(28 + index * 2, 36)
        });
    };

    const revealGroup = (container, items) => {
        gsap.from(items, {
            autoAlpha: 0,
            clearProps: "transform,opacity,visibility",
            duration: 0.62,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
                trigger: container,
                start: "top 86%",
                once: true
            },
            y: 24
        });
    };

    const initAnimations = () => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = [
            ".about-story",
            ".about-skills-section",
            ".about-cta",
            ".resume-game",
            ".portfolio-expertise",
            ".portfolio-success-heading",
            ".portfolio-filter",
            ".case-devices",
            ".case-details",
            ".case-next"
        ];

        document.querySelectorAll(sections.join(",")).forEach(revealSection);

        const groups = [
            [".portfolio-showcase", ".project-card:not([hidden])"],
            [".about-principles", ".about-principle"],
            [".about-skills-grid", ".skill-item"],
            [".contact-grid", ".contact-card"],
            [".case-wordpress-grid", "article"]
        ];

        groups.forEach(([containerSelector, itemSelector]) => {
            document.querySelectorAll(containerSelector).forEach((container) => {
                const items = container.querySelectorAll(itemSelector);

                if (items.length) {
                    revealGroup(container, items);
                }
            });
        });

        window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
    };

    Promise.resolve()
        .then(() => loadScript("https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"))
        .then(() => loadScript("https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js"))
        .then(initAnimations)
        .catch(() => {
            // CSS entrances and fully visible content remain as the fallback.
        });
})();
