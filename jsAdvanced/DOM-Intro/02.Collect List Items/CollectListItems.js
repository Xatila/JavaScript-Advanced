function extractText() {
    let ulItems = document.getElementById('items');
    let result = document.getElementById('result');
    result.textContent=ulItems.textContent;
}