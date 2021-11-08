class Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }

    getModel() {
        return this.model;
    }

    setModel(value) {
        this.model = value;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    setMaxSpeed(value) {
        this.maxSpeed = value;
    }

    getMaxFlightDistance() {
        return this.maxFlightDistance;
    }

    getMaxLoadCapacity() {
        return this.maxLoadCapacity;
    }
}
module.exports = Plane;