const assert = require('chai').assert;

const MilitaryPlane = require('../Planes/MilitaryPlane');
const PassengerPlane = require('../Planes/PassengerPlane');
const Airport = require('../Airport');
const MilitaryType = require('../models/militaryType');

describe('Planes types and characteristics check', () => {

    const planes = [
        new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
        new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
        new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
        new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
        new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
        new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
        new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
        new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
        new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MilitaryType.TYPE_BOMBER),
        new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MilitaryType.TYPE_BOMBER),
        new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, MilitaryType.TYPE_BOMBER),
        new MilitaryPlane('F-15', 1500, 12000, 10000, MilitaryType.TYPE_FIGHTER),
        new MilitaryPlane('F-22', 1550, 13000, 11000, MilitaryType.TYPE_FIGHTER),
        new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MilitaryType.TYPE_TRANSPORT)
    ];
    const planeWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);
    const planeWithMaxLoadCapacity = new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MilitaryType.TYPE_TRANSPORT);

    it('should have military plane with transport type', () => {
        const airport = new Airport(planes);
        assert.isNotEmpty(airport.getTransportMilitaryPlanes());
    });

    it('should check passenger plane with max capacity', () => {
        const airport = new Airport(planes);
        assert.deepEqual(airport.getPassengerPlaneWithMaxPassengersCapacity(), planeWithMaxPassengerCapacity);
    });

    it('should check passenger plane with max load capacity', () => {
        const airport = new Airport(planes);
        assert.deepEqual(airport.sortByMaxLoadCapacity().getPlanes()[airport.sortByMaxLoadCapacity().getPlanes().length - 1], planeWithMaxLoadCapacity);
    });

    it('should have military plane with bomber type', () => {
        const airport = new Airport(planes);
        assert.isNotEmpty(airport.getBomberMilitaryPlanes());
    });
});