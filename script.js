const playPauseBtn = document.getElementById('playPauseBtn');
const audio = document.getElementById('audio');
const mensagem = document.getElementById('mensagem');
const imagemContainer = document.querySelector('.imagem-container');
const foto = document.getElementById('foto');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        playPauseBtn.textContent = "⏸️ Pause";
        isPlaying = true;
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶️ Play";
        isPlaying = false;
    }
});

audio.addEventListener('ended', () => {
    mensagem.classList.remove('hidden');
    imagemContainer.classList.remove('hidden');
});

foto.addEventListener('click', () => {
    foto.classList.add('nitida');
});
