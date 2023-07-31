function getSunday() {
    const date = new Date();
    const today = date.getDate();
    const currentDay = date.getDay();
    const newDate = date.setDate(today - currentDay + 1);
    return new Date(newDate);
}

console.log(getSunday());