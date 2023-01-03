import Building from './5-building';
/* Represenstation of the SkyHighBuilding class */

export default class SkyHighBuilding extends Building {
    /* Parameters used : sqft , floors : both defined in thee constructor */
    constructor(sqft, floors) {
        // remember to assign sqft to parent class Building
        this.sqft = sqft;
        this.floors = floors;
    }

    /* The get method for sqft */
    get floors() {
        return this._sqft;
    }

    /* The get method for the floors */
    set floors(value) {
        this._floors = value
    }
    /* Override the evacuationWarningMessage method */
    evacuationWarningMessage() {
        return (`Evacuate slowly the ${this.floors} floors`)
    }
}
