
    const denominations = [1, 5, 10, 50, 100, 500]; // 동전 단위
    const simulateButton = document.getElementById('simulateButton');
    const tableBody = document.querySelector('#stepsTable tbody');
    simulateButton.addEventListener('click', () => {
        const nextButton = document.getElementById('nextButton');
        const amountInput = document.getElementById('amount').value;
        let amount = parseInt(amountInput, 10);
        tableBody.innerHTML = ''; // 이전 결과 지우기
        let step = 1;

        if (isNaN(amount) || amount <= 0) {
            alert('유효한 금액을 입력하세요.');
            return;
        }

        for (let i = denominations.length - 1; i >= 0; i--) {
            const coin = denominations[i];
            while (amount >= coin) {
                tableBody.innerHTML += `
                    <tr>
                        <td>${step}</td>
                        <td>${coin}₩</td>
                        <td>${amount - coin}</td>
                    </tr>
                `;
                amount -= coin;
                step++;
            }
        }

        if (amount > 0) {
            tableBody.innerHTML += `
                <tr>
                    <td>${step}</td>
                    <td colspan="2">남은 금액 (${amount}₩)을 주어진 동전 단위로 교환할 수 없습니다.</td>
                </tr>
            `;
        }
        nextButton.style.display = 'inline-block';
        nextButton.classList.add('animate');
    });
