let mapaImagem = document.getElementById('mapaImagem');
let escala = 1;

function zoomIn() {
    escala += 0.1;
    mapaImagem.style.transform = `scale(${escala})`;
}

function zoomOut() {
    escala -= 0.1;
    mapaImagem.style.transform = `scale(${escala})`;
}

mapaImagem.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {
        zoomOut();
    } else {
        zoomIn();
    }
});
