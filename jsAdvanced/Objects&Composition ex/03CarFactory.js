function pushOrder(carRequirement){
    const smallEngine = { power: 90, volume: 1800 };
    const normalEngine = { power: 120, volume: 2400 };
    const monsterEngine = { power: 200, volume: 3500 };
    const hatchback = { type: 'hatchback', color: "random" };
    const coupe = { type: 'coupe', color: "random" };

    let car = {
        model: carRequirement.model,
        power: carRequirement.power,
        carriage: carRequirement.carriage,
        wheels: carRequirement.wheels
    };
    //Engine fix:
    if(carRequirement.power>smallEngine.power){
        car.power = normalEngine;
    }else if(carRequirement.power>normalEngine.power){
        car.power = monsterEngine;
    }else{
        car.power = smallEngine;
    }
    //Carriage&Color fix:
    if(carRequirement.carriage=="hatchback"){
        hatchback.color = carRequirement.color;
        car.carriage = hatchback;
    }else{
        coupe.color = carRequirement.color;
        car.carriage = coupe;
    }
    //Wheels fix:
    let fourWheels = [];
    let oneTireSize = carRequirement.wheels;
    if(oneTireSize%2==0){oneTireSize-=1;};
    fourWheels.push(oneTireSize);
    fourWheels.push(oneTireSize);
    fourWheels.push(oneTireSize);
    fourWheels.push(oneTireSize);
    car.wheels=fourWheels;
    return car;
}

pushOrder({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheels: 14 }
);