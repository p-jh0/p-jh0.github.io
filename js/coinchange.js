const denominations_1 = [500, 350, 100, 50, 10];
const targetAmount = 1700;
const optimalSolution = 4; // 최적의 해
const algorithmSolution = 5; // 알고리즘의 해
let remainingAmount = targetAmount;
wrongAttempts = 0;

const coinsContainer = document.getElementById("coins");
const targetElement = document.getElementById("targetAmount");
const resultMessage_1 = document.getElementById("resultMessage");
const submitAnswer = document.getElementById("submitAnswer");
// 최적의 해 관련 요소
const optimalDecrease = document.getElementById("optimalDecrease");
const optimalIncrease = document.getElementById("optimalIncrease");
const optimalNumber = document.getElementById("optimalNumber");
let optimalValue = 1;

// 알고리즘의 해 관련 요소
const algorithmDecrease = document.getElementById("algorithmDecrease");
const algorithmIncrease = document.getElementById("algorithmIncrease");
const algorithmNumber = document.getElementById("algorithmNumber");
let algorithmValue = 1;

targetElement.textContent = targetAmount;
const resetGame = document.getElementById("resetGame");

resetGame.addEventListener("click", () => {
    // 목표 금액과 상태 초기화
    remainingAmount = targetAmount;
    optimalValue = 1;
    algorithmValue = 1;
    wrongAttempts = 0;

    // 화면 요소 초기화
    document.getElementById("optimalNumber").textContent = optimalValue;
    document.getElementById("algorithmNumber").textContent = algorithmValue;
    resultMessage_1.textContent = "";
    resultMessage_1.style.color = "";
    document.getElementById("nextButton").style.display = "none";

    // 동전 버튼 다시 생성
    coinsContainer.innerHTML = "";
    denominations_1.forEach((coin) => {
        const coinDiv = document.createElement("div");
        coinDiv.className = "coin";
        coinDiv.textContent = `${coin}원`;
        coinDiv.dataset.value = coin;

        coinDiv.addEventListener("click", () => {
            const coinValue = parseInt(coinDiv.dataset.value, 10);
            if (remainingAmount >= coinValue) {
                remainingAmount -= coinValue;
            }
            if (remainingAmount === 0) {
                resultMessage_1.textContent = "목표 금액 달성";
            } else {
                resultMessage_1.textContent = `남은 금액: ${remainingAmount}원`;
            }
        });

        coinsContainer.appendChild(coinDiv);
    });

    // 목표 금액 초기화
    targetElement.textContent = targetAmount;
});
// 동전 버튼 생성
denominations_1.forEach((coin) => {

    const coinDiv = document.createElement("div");
    coinDiv.className = "coin";
    coinDiv.textContent = `${coin}원`;
    coinDiv.dataset.value = coin;

    coinDiv.addEventListener("click", () => {
        const coinValue = parseInt(coinDiv.dataset.value, 10);
        if (remainingAmount >= coinValue) {
            remainingAmount -= coinValue;
        }
        if (remainingAmount === 0) {
            resultMessage_1.textContent = "목표 금액 달성";
        } else {
            resultMessage_1.textContent = `남은 금액: ${remainingAmount}원`;
        }
    });

    coinsContainer.appendChild(coinDiv);
});

// 최적의 해 버튼 동작
optimalDecrease.addEventListener("click", () => {
    if (optimalValue > 1) {
        optimalValue--;
        optimalNumber.textContent = optimalValue;
    }
});

optimalIncrease.addEventListener("click", () => {
    optimalValue++;
    optimalNumber.textContent = optimalValue;
});

// 알고리즘의 해 버튼 동작
algorithmDecrease.addEventListener("click", () => {
    if (algorithmValue > 1) {
        algorithmValue--;
        algorithmNumber.textContent = algorithmValue;
    }
});

algorithmIncrease.addEventListener("click", () => {
    algorithmValue++;
    algorithmNumber.textContent = algorithmValue;
});

// 정답 제출 버튼
submitAnswer.addEventListener("click", () => {
    const nextButton = document.getElementById("nextButton");
    if (optimalValue === optimalSolution && algorithmValue === algorithmSolution) {
        resultMessage_1.textContent = "정답입니다!";
        resultMessage_1.style.color = "green";
        nextButton.style.display = 'inline-block';
        nextButton.classList.add('animate');
    } else {
        wrongAttempts++;
        resultMessage_1.textContent = `오답입니다!`;
        resultMessage_1.style.color = "red";

        if (wrongAttempts >= 3) {
            nextButton.style.display = 'inline-block';
            nextButton.classList.add('animate');
        }
    }
});