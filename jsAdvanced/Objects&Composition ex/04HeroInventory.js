function spawnHero(input){
    let result = [];
    
    for (let i = 0; i < input.length; i++) {
        let parts = input[i].split(' / ');
       // console.log(parts);
        let name = parts[0];
        let level = Number(parts[1]);
        let items = parts[2].split(', ');
        let object = {
            name: name,
            level: level,
            items: items
        }
        result.push(object);
    }
    console.log(JSON.stringify(result));
}
spawnHero(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);