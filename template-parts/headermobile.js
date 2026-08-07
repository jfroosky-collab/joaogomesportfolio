class MyHeaderMobile extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="mobile-header">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&amp;icon_names=arrow_forward_ios" />
                <button class="botao-mobile mobile-menu-trigger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-navigation">
                    <span class="mobile-menu-trigger-icon" aria-hidden="true">
                        <span></span>
                        <span></span>
                    </span>
                    <span class="mobile-menu-trigger-label">Menu</span>
                </button>

                <div class="menuoffcanva" id="mobile-navigation" aria-hidden="true">
                    <div class="mobile-menu-shell">
                        <div class="mobile-menu-topbar">
                            <a class="mobile-menu-brand" href="index.html" aria-label="João Gomes - Home">
                                <div class="mobile-menu-monogram"></div>
                                <span>
                                    <strong>João Gomes</strong>
                                    <small>Web Developer</small>
                                </span>
                            </a>

                            <button class="close-menu" type="button" aria-label="Close menu">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M6 6l12 12M18 6 6 18"></path>
                                </svg>
                            </button>
                        </div>

                        <nav class="mobile-menu-nav" aria-label="Main navigation">
                            <ul class="menu-mobile">
                                <li class="menu-item1">
                                    <a href="about.html"><span>01</span><strong>About Me</strong><span class="material-symbols-outlined"> arrow_forward_ios </span></a>
                                </li>
                                <li class="menu-item1">
                                    <a href="portfolio.html"><span>02</span><strong>Websites Made</strong><span class="material-symbols-outlined"> arrow_forward_ios </span></a>
                                </li>
                                <li class="menu-item1">
                                    <a href="resume.html"><span>03</span><strong>Resume</strong><span class="material-symbols-outlined"> arrow_forward_ios </span></a>
                                </li>
                                <li class="menu-item1">
                                    <a href="contacts.html"><span>04</span><strong>Contact</strong><span class="material-symbols-outlined"> arrow_forward_ios </span></a>
                                </li>
                            </ul>
                        </nav>

                        <div class="mobile-menu-footer">
                            <span>Portugal based</span>
                            <a href="contacts.html">Let's work together</a>
                        </div>
                    </div>
                </div>
            </header>

            <style>
                .mobile-header {
                    font-family: var(--font-main);
                }

                .mobile-menu-trigger {
                    align-items: center;
                    background: linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.32));
                    border: 1px solid rgba(255, 255, 255, 0.72);
                    border-radius: 999px;
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.82), 0 16px 42px rgba(64, 78, 59, 0.18);
                    color: var(--color2);
                    cursor: pointer;
                    display: flex;
                    gap: 0.7rem;
                    height: 46px;
                    justify-content: center;
                    padding: 0 1rem;
                    position: fixed;
                    right: 14px;
                    top: 18px;
                    transition: box-shadow 0.22s ease, transform 0.22s ease;
                    z-index: 30;
                    -webkit-backdrop-filter: blur(22px) saturate(1.25);
                    backdrop-filter: blur(22px) saturate(1.25);
                }

                .mobile-menu-trigger:hover {
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 20px 54px rgba(64, 78, 59, 0.24);
                    transform: translateY(-2px);
                }

                .mobile-menu-trigger.scroll-down {
                    transform: translateY(-160%);
                }

                .mobile-menu-trigger.scroll-up {
                    transform: translateY(0);
                }

                .mobile-menu-trigger:focus-visible,
                .close-menu:focus-visible,
                .menu-mobile a:focus-visible {
                    outline: 3px solid var(--color1);
                    outline-offset: 3px;
                }

                .mobile-menu-trigger-icon {
                    display: grid;
                    gap: 5px;
                    width: 20px;
                }

                .mobile-menu-trigger-icon span {
                    background: currentColor;
                    border-radius: 999px;
                    display: block;
                    height: 2px;
                    transition: transform 0.22s ease;
                    width: 100%;
                }

                .mobile-menu-trigger-icon span:last-child {
                    justify-self: end;
                    width: 70%;
                }

                .mobile-menu-trigger-label {
                    font-size: 0.76rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                }

                .menuoffcanva {
                    background: rgba(225, 232, 222, 0.72);
                    inset: 0;
                    opacity: 0;
                    overflow-y: auto;
                    pointer-events: none;
                    position: fixed;
                    transform: translateY(-18px);
                    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(.22, .8, .3, 1);
                    visibility: hidden;
                    z-index: 1000001;
                    -webkit-backdrop-filter: blur(28px) saturate(1.25);
                    backdrop-filter: blur(28px) saturate(1.25);
                }

                .menuoffcanva.on {
                    opacity: 1;
                    pointer-events: auto;
                    transform: translateY(0);
                    visibility: visible;
                }

                .mobile-menu-shell {
                    display: flex;
                    flex-direction: column;
                    margin: 0 auto;
                    min-height: 100svh;
                    padding: 1.15rem clamp(1rem, 5vw, 2rem) 1.5rem;
                    width: min(100%, 620px);
                }

                .mobile-menu-topbar {
                    align-items: center;
                    display: flex;
                    justify-content: space-between;
                }

                .mobile-menu-brand {
                    align-items: center;
                    color: var(--color2);
                    display: inline-flex;
                    gap: 0.8rem;
                }

                .mobile-menu-brand strong,
                .mobile-menu-brand small {
                    display: block;
                    font-family: var(--font-main);
                }

                .mobile-menu-brand strong {
                    font-size: 0.95rem;
                    line-height: 1.2;
                }

                .mobile-menu-brand small {
                    color: rgba(64, 78, 59, 0.68);
                    font-size: 0.7rem;
                    margin-top: 0.12rem;
                }

                .mobile-menu-monogram {
                    align-items: center;
                    background-image: url(/assets/img/hero.png);
                    background-size: 500%;
                    background-position-x: center;
                    background-position-y: top;
                    border-radius: 50%;
                    display: inline-flex;
                    font-size: 0.72rem;
                    font-weight: 700;
                    height: 42px;
                    justify-content: center;
                    width: 42px;
                }

                .close-menu {
                    align-items: center;
                    background: rgba(255, 255, 255, 0.46);
                    border: 1px solid rgba(255, 255, 255, 0.7);
                    border-radius: 50%;
                    color: var(--color2);
                    cursor: pointer;
                    display: inline-flex;
                    height: 44px;
                    justify-content: center;
                    padding: 0;
                    transition: background-color 0.22s ease, transform 0.22s ease;
                    width: 44px;
                }

                .close-menu:hover {
                    background: rgba(255, 255, 255, 0.72);
                    transform: rotate(5deg);
                }

                .close-menu svg {
                    fill: none;
                    height: 20px;
                    stroke: currentColor;
                    stroke-linecap: round;
                    stroke-width: 1.8;
                    width: 20px;
                }

                .mobile-menu-nav {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    justify-content: center;
                    padding: clamp(2.5rem, 9vh, 5rem) 0;
                }

                .mobile-menu-kicker {
                    color: var(--color1);
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    margin-bottom: 0.8rem;
                    text-transform: uppercase;
                }

                .menu-mobile {
                    display: flex;
                    flex-direction: column;
                    margin: 0;
                    padding: 0;
                }

                .menu-item1 {
                    list-style: none;
                }

                .menu-item1 a {
                    align-items: center;
                    border-bottom: 1px solid rgba(64, 78, 59, 0.16);
                    color: var(--color2);
                    display: grid;
                    gap: 0.8rem;
                    grid-template-columns: 28px minmax(0, 1fr) 28px;
                    min-height: 74px;
                    padding: 0.75rem 0;
                    transition: color 0.22s ease, padding 0.22s ease;
                }

                .menu-item1:first-child a {
                    border-top: 1px solid rgba(64, 78, 59, 0.16);
                }

                .menu-item1 a > span {
                    color: var(--color1);
                    font-size: 0.7rem;
                    font-weight: 700;
                }

                .menu-item1 a strong {
                    font-size: clamp(1.55rem, 7vw, 2.4rem);
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 1;
                }

                .menu-item1 a i {
                    font-size: 1.05rem;
                    font-style: normal;
                    opacity: 0.52;
                    transition: opacity 0.22s ease, transform 0.22s ease;
                }

                .menu-item1 a:hover,
                .menu-item1 a[aria-current="page"] {
                    color: var(--color1);
                    padding-left: 0.45rem;
                }

                .menu-item1 a:hover i,
                .menu-item1 a[aria-current="page"] i {
                    opacity: 1;
                    transform: translate(3px, -3px);
                }

                .mobile-menu-footer {
                    align-items: center;
                    border-top: 1px solid rgba(64, 78, 59, 0.16);
                    display: flex;
                    gap: 1rem;
                    justify-content: space-between;
                    padding-top: 1rem;
                }

                .mobile-menu-footer span,
                .mobile-menu-footer a {
                    font-family: var(--font-main);
                    font-size: 0.72rem;
                }

                .mobile-menu-footer span {
                    color: rgba(64, 78, 59, 0.68);
                }

                .mobile-menu-footer a {
                    color: var(--color2);
                    font-weight: 700;
                }

                html[data-theme="dark"] .menuoffcanva {
                    background: rgba(17, 23, 19, 0.88);
                }

                html[data-theme="dark"] .mobile-menu-trigger {
                    background: linear-gradient(145deg, rgba(48, 61, 53, 0.94), rgba(17, 23, 19, 0.88));
                    border-color: rgba(224, 235, 220, 0.16);
                }

                html[data-theme="dark"] .mobile-menu-brand small,
                html[data-theme="dark"] .mobile-menu-footer span {
                    color: rgba(232, 238, 228, 0.62);
                }

                html[data-theme="dark"] .close-menu {
                    background: rgba(224, 235, 220, 0.08);
                    border-color: rgba(224, 235, 220, 0.14);
                }

                html[data-theme="dark"] .menu-item1 a,
                html[data-theme="dark"] .menu-item1:first-child a,
                html[data-theme="dark"] .mobile-menu-footer {
                    background: none;
                    border-color: rgba(224, 235, 220, 0.13);
                }

                @media (max-height: 620px) {
                    .mobile-menu-nav {
                        padding: 1.5rem 0;
                    }

                    .menu-item1 a {
                        min-height: 58px;
                    }

                    .menu-item1 a strong {
                        font-size: 1.4rem;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .menuoffcanva,
                    .mobile-menu-trigger,
                    .close-menu,
                    .menu-item1 a,
                    .menu-item1 a i {
                        transition: none;
                    }
                }
            </style>
        `;

        const pageName = window.location.pathname.split("/").pop() || "index.html";
        const currentPage = pageName.startsWith("project-") ? "portfolio.html" : pageName;
        const activeLink = this.querySelector(`.menu-mobile a[href="${currentPage}"]`);

        if (activeLink) {
            activeLink.setAttribute("aria-current", "page");
        }
    }
}

customElements.define("my-header-mobile", MyHeaderMobile);
