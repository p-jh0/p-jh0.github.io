const soundControl = document.getElementById("sound");
const bgMusic = document.getElementById("bgMusic");

// 초기 상태 설정
bgMusic.play();
soundControl.setAttribute("sound", "on");

// 클릭 이벤트로 음악 제어
soundControl.addEventListener("click", () => {
  const soundState = soundControl.getAttribute("sound");

  if (soundState === "on") {
    bgMusic.pause();
    soundControl.setAttribute("sound", "off"); // 끔 상태로 변경
  } else {
    bgMusic.play();
    soundControl.setAttribute("sound", "on"); // 켬 상태로 변경
  }
});
