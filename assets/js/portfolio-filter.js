document.addEventListener("DOMContentLoaded", () => {
    const filter = document.querySelector(".portfolio-filter");
    const projects = [...document.querySelectorAll(".portfolio-showcase .project-card")];

    projects.forEach((project) => {
        const link = project.querySelector('.project-media[href^="project-"]');
        const image = link?.querySelector("img");
        const match = link?.getAttribute("href").match(/^project-(.+)\.html$/);

        if (!image || !match) return;

        const generatedMockup = new Image();
        generatedMockup.addEventListener("load", () => {
            image.src = generatedMockup.src;
            image.alt = image.alt.replace(" placeholder", "");
        });
        generatedMockup.src = `assets/img/mockup-${match[1]}.webp`;
    });

    if (!filter || !projects.length) {
        return;
    }

    const buttons = [...filter.querySelectorAll(".portfolio-filter-button")];
    const count = filter.querySelector(".portfolio-filter-count");

    const applyFilter = (selectedType) => {
        let visibleProjects = 0;

        projects.forEach((project) => {
            const isVisible = selectedType === "all" || project.dataset.siteType === selectedType;

            project.hidden = !isVisible;
            visibleProjects += Number(isVisible);
        });

        buttons.forEach((button) => {
            const isActive = button.dataset.filter === selectedType;

            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        count.textContent = `${visibleProjects} ${visibleProjects === 1 ? "project" : "projects"}`;
    };

    buttons.forEach((button) => {
        button.addEventListener("click", () => applyFilter(button.dataset.filter));
    });
});
