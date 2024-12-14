let array = [5, 3, 8, 4, 2, 11, 6, 9, 1]; // 초기 배열

// 배열 렌더링 함수
function renderArray() {
    const container = document.getElementById("array-container");
    container.innerHTML = "";
    array.forEach((value) => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = `${value * 20}px`;
        container.appendChild(bar);
    });
}

// 버블 정렬 함수
async function bubbleSort() {
    const nextButton = document.getElementById('nextButton');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                renderArray();
                await new Promise((resolve) => setTimeout(resolve, 300)); // 애니메이션 딜레이
            }
        }
    }
    nextButton.style.display = 'inline-block';
    nextButton.classList.add('animate');
}

// 배열 초기화 함수
function resetArray() {
    array = [5, 3, 8, 4, 2, 11, 6, 9, 1]; // 초기 배열 복원
    renderArray();
}
