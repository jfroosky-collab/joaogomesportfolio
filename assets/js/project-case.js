const projectCases = {
    "e-commerce-3": {
        number: "01",
        title: "e-Commerce 3",
        type: "eCommerce",
        summary: "A responsive website built to present the project with a clear visual hierarchy, accessible content and a consistent experience across every screen size.",
        technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Responsive Design"],
        image: "assets/img/geracoesdatalha.com.jpeg",
        next: "project-website-3.html",
        nextTitle: "Website 3"
    },
    "website-3": {
        number: "02",
        title: "Website 3",
        type: "Business website",
        summary: "A polished business presence focused on making services easy to understand and the interface simple to navigate on desktop and mobile.",
        technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "UI Design"],
        next: "project-e-commerce-2.html",
        nextTitle: "e-Commerce 2"
    },
    "e-commerce-2": {
        number: "03",
        title: "e-Commerce 2",
        type: "eCommerce",
        summary: "A brand-led website shaped around direct communication, flexible content management and a responsive layout that remains readable on smaller devices.",
        technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Mobile First"],
        next: "project-e-commerce-1.html",
        nextTitle: "e-Commerce 1"
    },
    "e-commerce-1": {
        number: "04",
        title: "e-Commerce 1",
        type: "eCommerce",
        summary: "A conversion-oriented experience designed to communicate the offer quickly, reduce friction and guide visitors towards the main action.",
        technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "UX"],
        next: "project-website-1.html",
        nextTitle: "Website 1"
    },
    "website-1": {
        number: "05",
        title: "Website 1",
        type: "Editorial platform",
        summary: "A content-first WordPress build structured for comfortable reading, straightforward publishing and a solid technical foundation for organic visibility.",
        technologies: ["WordPress", "PHP", "Custom Templates", "CSS", "SEO", "Content"],
        next: "project-website-5.html",
        nextTitle: "NTAguas"
    },
    "website-5": {
        number: "06",
        title: "Website 5",
        type: "Corporate website",
        summary: "A corporate website that organises technical information into a dependable, approachable interface with careful responsive behaviour.",
        technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Web Design"],
        next: "project-e-commerce-4.html",
        nextTitle: "e-Commerce 4"
    },
    "e-commerce-4": {
        number: "07",
        title: "e-Commerce 4",
        type: "eCommerce",
        summary: "A more expressive WordPress project balancing personality with a manageable content structure and practical performance choices.",
        technologies: ["WordPress", "PHP", "Custom Widgets", "HTML", "CSS", "CMS"],
        next: "project-website-2.html",
        nextTitle: "Website 2"
    },
    "website-2": {
        number: "08",
        title: "Website 2",
        type: "Company Website",
        summary: "A commerce-focused WordPress project designed around clear product presentation, straightforward navigation and smooth responsive browsing.",
        technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Responsive Design"],
        screenshotsPath: "website-2",
        next: "project-website-4.html",
        nextTitle: "Website 4"
    },
    "website-4": {
        number: "09",
        title: "Website 4",
        type: "Company website",
        summary: "A responsive company website developed around clarity, reusable page components and an editing experience that remains simple for the client.",
        technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Responsive Design"],
        next: "project-e-commerce-3.html",
        nextTitle: "e-Commerce 3"
    }
};

class ProjectCase extends HTMLElement {
    connectedCallback() {
        const project = projectCases[this.dataset.project];

        if (!project) {
            return;
        }

        const screenshotsPath = project.screenshotsPath || this.dataset.project;
        const devicePreview = (device, label) => `
            <img
                src="assets/img/screenshots/${screenshotsPath}/${device}.webp"
                alt="${project.title} website shown on ${label}"
                data-device-image
                data-device-label="${label}"
                data-fallback="${project.image || ""}"
                loading="lazy"
            >`;

        this.innerHTML = `
            <main class="page-shell case-page">
                <a class="case-back-link" href="portfolio.html"><span aria-hidden="true">←</span> All websites</a>

                <section class="case-hero animate__animated animate__fadeIn">
                    <div class="case-hero-heading">
                        <span class="page-kicker">Project ${project.number}</span>
                        <h1>${project.title}</h1>
                    </div>
                    <div class="case-hero-summary">
                        <span class="case-project-type">${project.type}</span>
                        <p>${project.summary}</p>
                    </div>
                </section>

                <section class="case-devices" aria-labelledby="responsive-title">
                    <div class="case-section-heading">
                        <span class="page-kicker">Responsive by design</span>
                        <h2 id="responsive-title">One website.<br>Every screen.</h2>
                        <p>The layout, content hierarchy and interactions were considered across desktop, tablet and mobile instead of being reduced as an afterthought.</p>
                    </div>

                    <div class="device-stage">
                        <figure class="device-preview device-desktop">
                            <div class="device-frame">
                                <div class="device-camera"></div>
                                <div class="device-screen">${devicePreview("laptop", "Laptop")}</div>
                            </div>
                            <figcaption>Laptop</figcaption>
                        </figure>

                        <figure class="device-preview device-tablet">
                            <div class="device-frame">
                                <div class="device-camera"></div>
                                <div class="device-screen">${devicePreview("tablet", "Tablet")}</div>
                            </div>
                            <figcaption>Tablet</figcaption>
                        </figure>

                        <figure class="device-preview device-mobile">
                            <div class="device-frame">
                                <div class="device-camera"></div>
                                <div class="device-screen">${devicePreview("phone", "Mobile")}</div>
                            </div>
                            <figcaption>Mobile</figcaption>
                        </figure>
                    </div>
                </section>

                <section class="case-details">
                    <div class="case-summary-panel">
                        <span class="page-kicker">Project summary</span>
                        <h2>Built around the content, not around a theme.</h2>
                        <p>${project.summary}</p>
                        <p>The final structure was designed to be responsive, maintainable and straightforward for the client to update inside WordPress.</p>
                    </div>

                    <aside class="case-tech-panel">
                        <span class="case-panel-label">Technologies</span>
                        <ul class="case-tech-list">
                            ${project.technologies.map((technology) => `<li>${technology}</li>`).join("")}
                        </ul>
                    </aside>
                </section>

                <nav class="case-next" aria-label="Project navigation">
                    <span>Next project</span>
                    <a href="${project.next}">${project.nextTitle}<i aria-hidden="true">↗</i></a>
                </nav>
            </main>
        `;

        this.querySelectorAll("[data-device-image]").forEach((image) => {
            const showFallback = () => {
                if (image.dataset.fallback && !image.dataset.fallbackUsed) {
                    image.dataset.fallbackUsed = "true";
                    image.src = image.dataset.fallback;
                    return;
                }

                const placeholder = document.createElement("div");
                placeholder.className = "case-device-placeholder";
                placeholder.innerHTML = `<span>${image.dataset.deviceLabel}</span><small>Screenshot ready to add</small>`;
                image.replaceWith(placeholder);
            };

            image.addEventListener("error", showFallback);
            if (image.complete && image.naturalWidth === 0) showFallback();
        });
    }
}

customElements.define("project-case", ProjectCase);
