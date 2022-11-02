function attachEventsListeners() {
    
    //Get all elements
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    //Create functions
    const convertDays = ()=>{
        hoursInput.value = Number(daysInput.value)*24;
        minutesInput.value = Number(hoursInput.value)*60;
        secondsInput.value = Number(minutesInput.value)*60;
    }
    const convertHours = ()=>{
        daysInput.value = Number(hoursInput.value)/24;
        minutesInput.value = Number(hoursInput.value)*60;
        secondsInput.value = Number(minutesInput.value)*60;
    }
    const convertMinutes = ()=>{
        hoursInput.value = Number(minutesInput.value)/60;
        daysInput.value = Number(hoursInput.value)/24;
        secondsInput.value = Number(minutesInput.value)*60;
    }
    const convertSeconds = ()=>{
        minutesInput.value = Number(secondsInput.value)/60;
        hoursInput.value = Number(minutesInput.value)/60;
        daysInput.value = Number(hoursInput.value)/24;
    }

    //Add eventListeners
    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);

}