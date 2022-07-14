let car: Car;
function submitCar() {
    const regexForPlateInput: RegExp = /^[0-9]{4}[A-Z]{3}$/;
    let errores = 0;
    let plateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("plateInput");
    let brandInput: HTMLInputElement = <HTMLInputElement>document.getElementById("brandInput");
    let colorInput: HTMLInputElement = <HTMLInputElement>document.getElementById("colorInput");

    //EX1. Validar los campos de matricula (formato: 1234ABC), marca y color, antes de hacer el new Car
    if (!regexForPlateInput.test(plateInput.value) || brandInput.value === "" || colorInput.value === "") errores++;

    if (errores != 0) {
        alert('Please, fill in the blanks correctly')
        return;
    }
    car = new Car(plateInput.value, colorInput.value, brandInput.value);
    showVehicle();
    showWheelForm();
}

function showVehicle() {
    let carTitle: HTMLInputElement = <HTMLInputElement>document.getElementById("carTitle");
    let plateOutput: HTMLInputElement = <HTMLInputElement>document.getElementById("plateOutput");
    let brandOutput: HTMLInputElement = <HTMLInputElement>document.getElementById("brandOutput");
    let colorOutput: HTMLInputElement = <HTMLInputElement>document.getElementById("colorOutput");

    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + car.plate;
    brandOutput.innerText = "Brand: " + car.brand;
    colorOutput.innerText = "Color: " + car.color;

}
function submitWheelForm() {
    let errors: number = 0;
    //EX2. Solo hacer el "new Wheel" si las 4 ruedas son correctas
    //EX3. Una rueda correcta deberá tener un diámetro entre 1 y 2. Crear una función para validarlas
    const validateDiameter = (diameter: number): boolean => {
        return diameter >= 1 && diameter <= 2 ? true : false;
    }
    for (let i = 1; i <= 4; i++) {
        let brandWheel: HTMLInputElement = <HTMLInputElement>document.getElementById("brandWheel" + i);
        let diameterWheel: HTMLInputElement = <HTMLInputElement>document.getElementById("diameterWheel" + i);

        if (!validateDiameter(Number(diameterWheel.value)) || brandWheel.value === "") errors++;
    }
    if (errors != 0) {
        alert("Wheel diameter should be between 1 and 2 and all fields must be filled in.");
        return;
    }
    for (let i = 1; i <= 4; i++) {
        let brandWheel: HTMLInputElement = <HTMLInputElement>document.getElementById("brandWheel" + i);
        let diameterWheel: HTMLInputElement = <HTMLInputElement>document.getElementById("diameterWheel" + i);
        let wheel_generica: Wheel = new Wheel(Number(diameterWheel.value), brandWheel.value);
        car.addWheel(wheel_generica);
    }
    console.log(car)
    showWheels();
}

function showWheels() {
    //EX4. Optimizar la función showWheels
    let wheelTitle = <HTMLInputElement>document.getElementById("wheelTitle");
    // let wheelOutput1 = <HTMLInputElement>document.getElementById("wheelOutput1");
    // let wheelOutput2 = <HTMLInputElement>document.getElementById("wheelOutput2");
    // let wheelOutput3 = <HTMLInputElement>document.getElementById("wheelOutput3");
    // let wheelOutput4 = <HTMLInputElement>document.getElementById("wheelOutput4");
    wheelTitle.innerText = "Wheels:";
    // wheelOutput1.innerText = "Wheel 1:  " + "Brand: " + car.wheels[0].brand + "  Diameter: " + car.wheels[0].diameter;
    // wheelOutput2.innerText = "Wheel 2:  " + "Brand: " + car.wheels[1].brand + "  Diameter: " + car.wheels[1].diameter;
    // wheelOutput3.innerText = "Wheel 3:  " + "Brand: " + car.wheels[2].brand + "  Diameter: " + car.wheels[2].diameter;
    // wheelOutput4.innerText = "Wheel 4:  " + "Brand: " + car.wheels[3].brand + "  Diameter: " + car.wheels[3].diameter;
    for (let i = 1; i < 5; i++) {
        let wheelOutput: HTMLInputElement = <HTMLInputElement>document.getElementById(`wheelOutput${i}`);
        wheelOutput.innerText = `Wheel ${i} | Brand: ${car.wheels[i - 1].brand}, Diameter: ${car.wheels[i - 1].diameter}`;
    }
}
function showWheelForm() {
    let carForm = <HTMLInputElement>document.getElementById("create-car-form");
    let carWheel = <HTMLInputElement>document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";

}
