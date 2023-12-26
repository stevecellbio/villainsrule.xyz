document.body.oncontextmenu = () => false;
document.body.onkeydown = () => false;

document.querySelector('.loadCover').onclick = () => {
    document.querySelector('.loadCover').classList.remove('show');
    document.documentElement.requestFullscreen();

    let video = document.querySelector('.video');
    video.muted = false;
    video.volume = .3;
    video.play();
};

let emojis = ['😏', '😉', '😎', '😍', '🤩', '🤔', '🤨', '😮', '🥳', '🤯', '😩', '😳', '🤪', '🥺', '🤓', '🤭', '🤥'];

let usernameIteration = 0;
document.querySelector('.usernameTitle').style.animation = '1s linear 1s infinite running usernameAnimation';
setInterval(() => document.querySelector('.usernameTitle').innerHTML = 'THONK ' + emojis[usernameIteration++ % emojis.length], 1000);

let titleIteration = 0;
document.querySelector('title').innerHTML = emojis[titleIteration++ % emojis.length], 585;

let typed = new Typed('.type', {
    strings: [
        'fullstack developer',
        'javascript / node',
        'frontend',
        'sql',
        'c#',
        'python',
        ''
    ],
    typeSpeed: 69,
    backSpeed: 32,
    backDelay: 1500,
    loop: true,
    smartBackspace: true
});