

function load() {
    let animateProgressBarCounter = 5;
    const animate = (progressBarId) => {
        if (progressBarId < animateProgressBarCounter) {
            const $progressBar = document.getElementById(`current-progress-${progressBarId}`);

            const totalWidth = 200;
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const width = i / 4 * totalWidth;
                    $progressBar.style.width = `${width}px`;
                    if (i === 4) {
                        animateProgressBarCounter += 1;
                    }
                }, i * 1000);
            }
        } else {
            setTimeout(() => {
                animate(progressBarId);
            }, 1000);
        }
    };
    animate(0);

    let createProgressBarCounter = 1;
    const addButton = document.getElementById('add');
    addButton.onclick = () => {
        const $progressContainer = document.createElement('div');
        $progressContainer.classList.add('progress');

        const $progressBar = document.createElement('div');
        $progressBar.classList.add('current-progress');
        $progressBar.id = `current-progress-${createProgressBarCounter}`;

        $progressContainer.appendChild($progressBar);

        document.getElementById('progress-container').appendChild($progressContainer);
        animate(createProgressBarCounter);
        createProgressBarCounter += 1;
    }
}
