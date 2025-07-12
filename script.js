document.addEventListener('DOMContentLoaded', () => {
    const artistTabs = document.querySelectorAll('.artist-tab');
    const artistContents = document.querySelectorAll('.artist-content');

    artistTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetArtist = tab.dataset.artist;

            artistTabs.forEach(t => {
                t.classList.remove('active-tab');
                t.classList.add('inactive-tab');
            });
            
            tab.classList.remove('inactive-tab');
            tab.classList.add('active-tab');

            artistContents.forEach(content => {
                if (content.id === targetArtist) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80; // height of sticky nav + some padding
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = targetElement.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});