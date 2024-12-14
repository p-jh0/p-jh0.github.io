const musicControl = document.getElementById('musicControl');
const musicIcon = document.getElementById('musicIcon');
const musicText = document.getElementById('musicText');
const bgMusic = document.getElementById('bgMusic');

// 페이지 로드 시 자동 재생
bgMusic.play();
musicIcon.src = "https://via.placeholder.com/40?text=🔊"; // 초기 상태: 켬
musicText.textContent = "켬";

// 클릭 이벤트로 음악 제어
musicControl.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicIcon.src = "https://via.placeholder.com/40?text=🔊"; // 켬 상태
    musicIcon.classList.remove('off');
    musicText.textContent = "켬";
  } else {
    bgMusic.pause();
    musicIcon.src = "https://via.placeholder.com/40?text=🔈"; // 끔 상태
    musicIcon.classList.add('off');
    musicText.textContent = "끔";
  }
});
