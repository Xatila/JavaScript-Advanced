function checkDaysInMonth(month, year){
    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };
    console.log(getDays(year, month));
}
checkDaysInMonth(1, 2012);
checkDaysInMonth(2, 2021);