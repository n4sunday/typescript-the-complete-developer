var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    a - b;
};
var divide = function (a, b) {
    return a / b;
};
var logger = function (message) {
    console.log(message);
    return undefined; // null or undefined
};
var throwError = function (message) {
    if (!message) {
        throw new Error(message);
    }
};
var todayWeather = {
    date: new Date(),
    weather: "sunny"
};
var logWeather = function (forecast) {
    console.log(forecast.date);
    console.log(forecast.weather);
};
logWeather(todayWeather);
