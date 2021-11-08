const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');

class Airport {

    constructor(planes) {
        this.planes = planes;
    }

    getPlanes() {
        return this.planes;
    }

    getPassengerPlane() {
        return this.planes.filter((plane) => plane instanceof PassengerPlane);
    }

    getMilitaryPlanes() {
        return this.planes.filter((plane) => plane instanceof MilitaryPlane);
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let maxPassengersCapacity = this.getPassengerPlane().sort((firstPlane, secondPlane) => (firstPlane.getPassengersCapacity() < secondPlane.getPassengersCapacity()) ? 1 : -1);
        return maxPassengersCapacity[0];
    }

    getTransportMilitaryPlanes() {
        return this.getMilitaryPlanes().filter((plane) => plane.militaryType === MilitaryType.TYPE_TRANSPORT);
    }

    getBomberMilitaryPlanes() {
        return this.getMilitaryPlanes().filter((plane) => plane.militaryType === MilitaryType.TYPE_BOMBER);
    }

    sortByMaxDistance() {
        this.planes.sort((firstPlane, secondPlane) => (firstPlane.getMaxFlightDistance() > secondPlane.getMaxFlightDistance()) ? 1 : -1);
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((firstPlane, secondPlane) => (firstPlane.getMaxSpeed() > secondPlane.getMaxSpeed()) ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((firstPlane, secondPlane) => (firstPlane.getMaxLoadCapacity() > secondPlane.getMaxLoadCapacity()) ? 1 : -1);
        return this;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;