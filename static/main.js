document.addEventListener('DOMContentLoaded', () => {
    const questionBlocks = document.querySelectorAll('.question-block');
    const allRadios = document.querySelectorAll('input[type="radio"]');
    const submitButton = document.getElementById('submit-button');
    const totalQuestions = questionBlocks.length;

    // 回答済みの質問IDを保存するセット
    const answeredQuestions = new Set();

    allRadios.forEach(radio => {
        radio.addEventListener('click', () => {
            const currentBlock = radio.closest('.question-block');
            
            // 回答済みセットに質問IDを追加
            answeredQuestions.add(currentBlock.id);

            // すべての質問に回答したかチェック
            if (answeredQuestions.size === totalQuestions) {
                // 20問すべて回答済みなら、ボタンを有効化
                submitButton.disabled = false;
            }

            // --- フォーカス移動とスクロールのロジック ---
            const nextBlock = currentBlock.nextElementSibling;
            if (nextBlock && nextBlock.classList.contains('question-block')) {
                currentBlock.classList.remove('active');
                nextBlock.classList.add('active');
                nextBlock.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });

    // Enterキーでのフォーム送信を無効化する
    const form = document.querySelector('form');
    form.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    });
});