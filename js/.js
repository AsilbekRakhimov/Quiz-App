class Car {
    #engineStatus = false;

    startEngine() {
        this.#engineStatus = true;
        console.log('Dvigatel ishga tushdi');
    }

    stopEngine() {
        this.#engineStatus = false;
        console.log('Dvigatel o\'chirildi');
    }

    getEngineStatus() {
        return this.#engineStatus ? 'ishlamoqda' : 'to\'xtatildi';
    }
}

const car = new Car();
car.startEngine(); // Dvigatel ishga tushdi
console.log(car.getEngineStatus()); // ishlamoqda
car.stopEngine(); // Dvigatel o'chirildi
console.log(car.getEngineStatus()); // to'xtatildi
car