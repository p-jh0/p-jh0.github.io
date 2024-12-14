const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');

musicToggle.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.src = "https://via.placeholder.com/50?text=ON"; // 켬 상태 이미지
    musicToggle.classList.remove('off');
  } else {
    bgMusic.pause();
    musicToggle.src = "https://via.placeholder.com/50?text=OFF"; // 끔 상태 이미지
    musicToggle.classList.add('off');
  }
});
