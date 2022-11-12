const { spawn } = require('child_process');
const temperatures = []; // Store readings

const sensor = spawn('python', ['sensor.py']);
sensor.stdout.on('data', function (data) {

    temperatures.push(parseFloat(data));
    console.log(temperatures);
});