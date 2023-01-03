/* Represents class Building */

class Building {
    /* Parameters used: sqft*/
    constructor(sqft){
        this.sqft = sqft;
        if(constructor !== Building){
            if(typeof this.evacuationWarningMessage !== 'function'){
                throw new Error('Class extending Building must override evacuationWarningMessage')
            }
        }
    }
    /*
    Attributes accessed via as underscore attributes.
    */
    get sqft() {
        return this._sqft
    }
    set sqft(value) {
        this._sqft = value
    }
}
