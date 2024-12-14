
    const initialNumbers = [5, 3, 8, 1, 2]; // 초기 배열
    let numbers = [...initialNumbers]; // 현재 배열
    const correctSwapCount = calculateCorrectSwapCount([...initialNumbers]); // 버블 정렬 교체 횟수
    let number = 1; // 숫자 조정 초기값
    let wrongAttempts = 0; // 오답 횟수

    const gameContainer = document.getElementById("gameContainer");
    const numberElement = document.getElementById("number");
    const increaseButton = document.getElementById("increase");
    const decreaseButton = document.getElementById("decrease");
    const submitButton = document.getElementById("submitButton");
    const resetButton = document.getElementById("resetButton");
    const resultMessage = document.getElementById("resultMessage");
    const nextButton = document.getElementById('nextButton');

    // 초기 블록 생성
    function createBlocks() {
        gameContainer.innerHTML = ""; // 초기화
        numbers.forEach((num, index) => {
            const block = document.createElement("div");
            block.className = "block text-center p-4 rounded bg-blue-500 text-white";
            block.textContent = num;
            block.setAttribute("data-index", index);
            block.addEventListener("click", () => handleBlockClick(index));
            gameContainer.appendChild(block);
        });
    }

    let firstIndex = null;

    // 블록 클릭 핸들러
    function handleBlockClick(index) {
        const blocks = document.querySelectorAll(".block");

        if (firstIndex === null) {
            firstIndex = index;
            blocks[index].classList.add("active");
        } else {
            swapNumbers(firstIndex, index);
            blocks[firstIndex].classList.remove("active");
            firstIndex = null;
            createBlocks();
        }
    }

    // 숫자 교환
    function swapNumbers(i, j) {
        if (i === j) return; // 동일한 블록 클릭 시 무시
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
    }

    // 교체 횟수 계산 (버블 정렬)
    function calculateCorrectSwapCount(array) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    count++;
                }
            }
        }
        return count;
    }

    // 숫자 증가
    increaseButton.addEventListener("click", () => {
        number++;
        numberElement.textContent = number;
    });

    // 숫자 감소
    decreaseButton.addEventListener("click", () => {
        if (number > 0) {
            number--;
            numberElement.textContent = number;
        }
    });

    // 정답 확인
    submitButton.addEventListener("click", () => {
        if (number === correctSwapCount) {
            resultMessage.textContent = "정답입니다!";
            resultMessage.className = "text-green-500 text-center font-bold";
            nextButton.style.display = 'inline-block';
            nextButton.classList.add('animate');
        } else {
            wrongAttempts++;
            resultMessage.textContent = `오답입니다!`;
            resultMessage.className = "text-red-500 text-center font-bold";

            if (wrongAttempts >= 3) {
                nextButton.style.display = 'inline-block';
                nextButton.classList.add('animate');

            }
        }
    });

    // 초기화
    resetButton.addEventListener("click", () => {
        numbers = [...initialNumbers];
        number = 1;
        wrongAttempts = 0;
        numberElement.textContent = number;
        resultMessage.textContent = "";
        createBlocks();
    });

    // 초기화
    createBlocks();
