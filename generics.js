function logDate(num) {
    console.log(new Date());
    return num;
}
logDate("logTime");
logDate(2738);
function logDate2(num) {
    if (typeof num == "string") {
        num.toLocaleLowerCase();
    }
    console.log(new Date());
    return num;
}
