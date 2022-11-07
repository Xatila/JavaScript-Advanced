function addItem() {
    let menu = document.getElementById('menu');
    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');
    let input = [inputText.value, inputValue.value];
    let option = document.createElement('option');
    option.textContent=input[0];
    option.value=input[1];
    menu.appendChild(option);
    inputText.value='';
    inputValue.value='';
     menu.addEventListener('change', function(element){
        let selectedText = menu.options[menu.selectedIndex].text;
        let setValue = element.target.value;
        inputText.value=selectedText;
        inputValue.value=setValue;
    })
}