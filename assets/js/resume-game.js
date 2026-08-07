document.addEventListener("DOMContentLoaded", () => {
    const totalBugs = 5;
    const arena = document.querySelector("#bug-arena");
    const status = document.querySelector("#bug-status");
    const fixedCounter = document.querySelector("#bugs-fixed");
    const progressBar = document.querySelector("#resume-progress-bar");
    const startButton = document.querySelector("#resume-start");
    const resetButton = document.querySelector("#resume-reset");
    const downloadButton = document.querySelector(".resume-download");

    if (!arena || !status || !fixedCounter || !progressBar || !startButton || !resetButton || !downloadButton) {
        return;
    }

    const bugLabels = ["404", "</>", "{ }", "CSS", "JS", "ERR"];
    let bugsFixed = 0;
    let currentBug = null;
    let spawnTimer = null;
    let isPlaying = false;

    const setDownloadLocked = (locked) => {
        downloadButton.classList.toggle("is-locked", locked);
        downloadButton.setAttribute("aria-disabled", locked ? "true" : "false");
        downloadButton.tabIndex = locked ? -1 : 0;
    };

    const updateProgress = () => {
        fixedCounter.textContent = bugsFixed;
        progressBar.style.width = `${(bugsFixed / totalBugs) * 100}%`;
    };

    const removeCurrentBug = () => {
        if (currentBug) {
            currentBug.remove();
            currentBug = null;
        }
    };

    const randomBetween = (min, max) => Math.random() * (max - min) + min;

    const spawnBug = () => {
        removeCurrentBug();

        if (!isPlaying || bugsFixed >= totalBugs) {
            return;
        }

        const bug = document.createElement("button");
        const label = bugLabels[Math.floor(Math.random() * bugLabels.length)];
        const size = randomBetween(58, 82);

        bug.className = "bug-target";
        bug.type = "button";
        bug.textContent = label;
        bug.style.width = `${size}px`;
        bug.style.height = `${size}px`;
        bug.style.left = `${randomBetween(8, 82)}%`;
        bug.style.top = `${randomBetween(16, 74)}%`;
        bug.style.animationDuration = `${randomBetween(1.6, 2.35)}s`;
        bug.setAttribute("aria-label", `Catch bug ${label}`);

        bug.addEventListener("click", () => {
            window.clearTimeout(spawnTimer);
            bugsFixed += 1;
            updateProgress();
            bug.classList.add("is-hit");
            status.textContent = bugsFixed === totalBugs
                ? "You've deleted 5 bugs! The code is clean and my Resume is ready for download."
                : `Nice. Only ${totalBugs - bugsFixed} bugs remaining.`;

            window.setTimeout(() => {
                removeCurrentBug();

                if (bugsFixed >= totalBugs) {
                    finishGame();
                    return;
                }

                spawnTimer = window.setTimeout(spawnBug, 320);
            }, 180);
        });

        arena.appendChild(bug);
        currentBug = bug;
        spawnTimer = window.setTimeout(spawnBug, 1450);
    };

    const finishGame = () => {
        isPlaying = false;
        startButton.disabled = true;
        setDownloadLocked(false);
        removeCurrentBug();
    };

    const resetGame = () => {
        window.clearTimeout(spawnTimer);
        bugsFixed = 0;
        isPlaying = false;
        startButton.disabled = false;
        status.textContent = "Click Start and prepare yourself.";
        setDownloadLocked(true);
        updateProgress();
        removeCurrentBug();
    };

    startButton.addEventListener("click", () => {
        if (isPlaying) {
            return;
        }

        isPlaying = true;
        startButton.disabled = true;
        status.textContent = "Catch the bugs before they run.";
        spawnBug();
    });

    resetButton.addEventListener("click", resetGame);

    downloadButton.addEventListener("click", (event) => {
        if (downloadButton.getAttribute("aria-disabled") === "true") {
            event.preventDefault();
            status.textContent = "You still have bugs to catch before download.";
        }
    });

    resetGame();
});
