document.addEventListener('mousemove', (e) => {
    const parallaxBg = document.querySelector('.parallax-bg');
    const content = document.querySelector('.content');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const moveX = (mouseX / windowWidth - 0.5) * 20;
    const moveY = (mouseY / windowHeight - 0.5) * 20;
    
    parallaxBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    content.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
});

particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 5, direction: "none", random: true, straight: false, out_mode: "out", bounce: true, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 0 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});

$(document).ready(function(){
// Add smooth scrolling to all links
$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
    });
    } // End if
});
});

document.addEventListener('DOMContentLoaded', function () {
    const discordBotBtn = document.getElementById('discordBotBtn');
    const gameDevBtn = document.getElementById('gameDevBtn');
    const skillsSection = document.querySelector('.skills-section');
    const projectsSection = document.getElementById('projects');

    const discordBotSkills = [
        { name: "Python", level: "89%", icon: "fab fa-python" },
        { name: "Nextcord", level: "93%", icon: "fab fa-discord" },
        { name: "Time Management", level: "80%", icon: "fas fa-clock" },
        { name: "Database", level: "50%", icon: "fas fa-database" },
        { name: "Problem-Solving & Debugging", level: "66%", icon: "fas fa-bug" }
    ];

    const gameDevSkills = [
        { name: "Godot Game Engine", level: "90%", icon: "fas fa-cog" },
        { name: "Programming(GDScript)", level: "75%", icon: "fas fa-code" },
        { name: "Pixel Art", level: "66%", icon: "fas fa-paint-brush" },
        { name: "Game Design", level: "85%", icon: "fas fa-gamepad" },
        { name: "Sounds", level: "70%", icon: "fas fa-volume-up" }
    ];

    const discordBotProjects = [
        { name: "SquadSeek", description: "A Bot to connect with players, find teammates, and discover your gaming buddy.", image: "assets/squadseek.png", url: "https://discord.bots.gg/bots/1279165316311810080"},
        { name: "Memerator", description: "Summon a meme post from reddit by using a simple command.", image:"assets/meme.jpg", url: "https://discord.bots.gg/bots/1267201343060447262"},
        { name: "Mathter", description: "A Bot that can calculate your math equations, convert units and creates a math problem.", image:"assets/mathcalc.png", url: "https://discord.bots.gg/bots/1266844297173405850"},
        { name: "RPS Rumble", description: "A Bot Let You Play A Classic Rock Paper Scissors Round!", image:"assets/rpsChoice.png", url: "https://discord.bots.gg/bots/1187407521095368715"},
        { name: "EmojiType", description: "A Bot That Converts Text To Emojis With Characters.", image:"assets/emoji.png", url: "https://discord.bots.gg/bots/1263900166273105960"},
        { name: "DiceRoller", description: "A Dice Rolling Bot That Rolls Dice.", image: "assets/rollDice.jpg", url: "https://discord.bots.gg/bots/1187069692783898786"},
    ];

    const gameDevProjects = [
        { name: "Metroll(Feat. Metic)", description: "2D PC pixel game, It was originally made for a game jam(3 days)", image: "https://img.itch.zone/aW1nLzE2ODMzNjU5LnBuZw==/315x250%23c/OxJ3aW.png", url: "https://salamony.itch.io/metroll" },
        { name: "Quest Odyssey(WIP)", description: "2D Pixel Platformer Game, Integrating Google Admob. \n My First Mobile Game.", image: "https://i.postimg.cc/ZKQkCwvR/header.gif", url: "#" },
        { name: "Freedawn", description: "Action pixel top-down game, it was made in 7 days,", image: "assets/freedawn.gif", url: "https://salamony.itch.io/freedawn" },
        { name: "Feeless", description: "Eat viruses with a fluffy blood cell. \n Made To Support Rare Disease Patients", image: "assets/virus.png", url: "https://salamony.itch.io/feeless" },
        { name: "Wave Save", description: "Play as the enemy and prevent the player from winning.", image: "https://img.itch.zone/aW1nLzE2OTI0MTMyLnBuZw==/315x250%23c/ziHofI.png", url: "https://salamony.itch.io/wave-save" },
        { name: "LOST", description: "LOST is a platformer game with a size of ~3Mb. \n My First Game In LÖVE2D Library", image: "https://img.itch.zone/aW1nLzEyMzM3MjUyLmdpZg==/315x250%23cm/R%2BiX0H.gif", url: "https://salamony.itch.io/lost" },
    ];

    function updateSkills(skills) {
        skillsSection.innerHTML = '';
        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.classList.add('skill');
            skillElement.innerHTML = `
                <div class="skill-name">
                    <div class="skill-icon">
                        <i class="${skill.icon}"></i>
                    </div>
                    ${skill.name}
                </div>
                <div class="progress-bar">
                    <div class="progress" style="max-width: ${skill.level};"></div>
                </div>
            `;
            skillsSection.appendChild(skillElement);
        });
    }

    function updateProjects(projects) {
        projectsSection.innerHTML = '<h2>Projects</h2>';
        projects.forEach(project => {
            const card = document.createElement('a');
            card.href = project.url;
            card.target = "_blank"
            card.className = 'card';
            card.innerHTML = `
                <img src="${project.image}" alt="${project.name}" class="card__img">
                <span class="card__footer">
                    <span>${project.name}</span>
                    <span>${project.description}</span>
                </span>
                <span class="card__action">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                    </svg>
                </span>
            `;
            projectsSection.appendChild(card);
        });
    }

    discordBotBtn.addEventListener('click', function () {
        updateSkills(discordBotSkills);
        updateProjects(discordBotProjects);
        document.getElementById('skills-text').textContent = '(as a Discord Bot Developer)';
    });

    gameDevBtn.addEventListener('click', function () {
        updateSkills(gameDevSkills);
        updateProjects(gameDevProjects);
        document.getElementById('skills-text').textContent = '(as a Game Developer)';
    });

    // Initialize with Discord Bot Developer skills and projects
    discordBotBtn.click();
});

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
document.querySelectorAll('*'),
function(el) {
    if (el.offsetWidth > docWidth) {
    console.log(el);
    }
}
);