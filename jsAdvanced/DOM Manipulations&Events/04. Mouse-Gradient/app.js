function attachGradientEvents() {
    let resultElement = document.getElementById('result');
    let boxElement = document.getElementById('gradient-box');
    const movingMouseHandler = (e)=>{
        let offsetX = e.offsetX;
        let offsetWidth = e.target.offsetWidth;
        let percent = Number(Math.floor((offsetX/offsetWidth)*100));
        resultElement.textContent=`${percent}%`;
    }
    boxElement.addEventListener('mousemove', movingMouseHandler);
}