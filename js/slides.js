// 슬라이드 HTML 파일 경로 배열
const slideFiles = [
    "slides/slide1.html",
    "slides/slide2.html",
    "slides/slide3.html",
    "slides/slide4.html",
    "slides/slide5.html",
    "slides/slide6.html",
    "slides/slide7.html",
    "slides/slide8.html",
    "slides/slide9.html",
    "slides/slide10.html",
    "slides/slide11.html",
    "slides/slide12.html",
    "slides/slide13.html",
    "slides/slide14.html",
    "slides/slide15.html",
    "slides/slide16.html",
    "slides/slide17.html",
    "slides/slide18.html",

];

// 초기 슬라이드 설정
let currentSlideIndex = 0;
const slideContainer = document.getElementById("slideContainer");
const bg_Music = document.getElementById("bgMusic"); // 오디오 요소 가져오기

// 슬라이드 로드 함수
function loadSlide(index) {
    if (index < slideFiles.length) {
        fetch(slideFiles[index]) // 슬라이드 HTML 파일 로드
            .then((response) => response.text())
            .then((html) => {
                slideContainer.innerHTML = html; // 로드된 HTML 삽입
                currentSlideIndex = index;
                if (currentSlideIndex === 6) { // slide7.html은 index 6
                    const startButton = slideContainer.querySelector("#startButton");
                    const resetButton = slideContainer.querySelector("#resetButton");

                    if (startButton) {
                        startButton.addEventListener("click", () => bubbleSort());
                    }

                    if (resetButton) {
                        resetButton.addEventListener("click", () => resetArray());
                    }
                }
                if (currentSlideIndex === 8) {
                    const script = document.createElement("script");
                    script.src = "js/bubbletest.js";
                    document.body.appendChild(script);
                }
                if (currentSlideIndex === 12) {
                    const script = document.createElement("script");
                    script.src = "js/coin.js";
                    document.body.appendChild(script);
                }
                if (currentSlideIndex === 14) {
                    const script = document.createElement("script");
                    script.src = "js/coinchange.js";
                    document.body.appendChild(script);
                }
                // 애니메이션 클래스 재적용
                const slide = slideContainer.querySelector(".slide");
                if (slide) {
                    slide.style.animation = "none"; // 기존 애니메이션 초기화
                    setTimeout(() => {
                        slide.style.animation = ""; // 애니메이션 재적용
                    }, 10);
                }

                // 버튼 이벤트 처리
                const nextButton = slideContainer.querySelector(".slide-button");
                if (nextButton) {
                    nextButton.addEventListener("click", () => {
                        if (currentSlideIndex === 0) {
                            bg_Music.play().catch((error) => {
                                console.error("Audio play error:", error);
                            });
                        }
                        loadSlide(currentSlideIndex + 1);
                    });
                }
            })
            .catch((error) => console.error("Error loading slide:", error));
    } else {
        // 모든 슬라이드가 끝났을 때
        slideContainer.innerHTML = `
      <div class="slide">
        <p>Created By p-jh0<br>Music - "Fouler l'horizon" by Komiku</p>
        <button class="slide-button" id="resetButton">처음으로</button>
      </div>
    `;

        // 초기화 버튼 이벤트
        const resetButton = slideContainer.querySelector("#resetButton");
        resetButton.addEventListener("click", () => {
            loadSlide(0); // 첫 번째 슬라이드로 이동
        });
    }
}

// 초기 슬라이드 로드
loadSlide(0);
