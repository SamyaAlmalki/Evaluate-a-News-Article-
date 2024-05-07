document.addEventListener('DOMContentLoaded', function() {
    const analyzeButton = document.getElementById('analyze-button');
    const articleText = document.getElementById('article-text');
    const resultsDiv = document.getElementById('results');

    analyzeButton.addEventListener('click', function(){
        const text = articleText.value;
        if (text.trim() !== '') {
            analyzeArticle(text);
        } else {
            alert('Please enter some text to analyze.');
        }
    });

    async function analyzeArticle(text) {
        try {
            const response = await fetch('/analyz', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text: text})
            });
            const data = await
            response.json();
            resultsDiv.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Error:', error);
        }
    }
});

