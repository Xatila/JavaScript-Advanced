    function calcCalories(input) {
    let object = {};
    for (let i = 0; i < input.length; i += 2) {
        let propertyName = input[i];
        object[propertyName] = Number(input[i + 1]);
    }
    return object;
    }
calcCalories(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
