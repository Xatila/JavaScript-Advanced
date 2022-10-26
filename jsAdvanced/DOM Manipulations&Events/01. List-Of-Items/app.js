function addItem() {
    let unorderedList = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = document.getElementById('newItemText').value;
    unorderedList.appendChild(li);
}