
class Konto {

    constructor(nr) {
        this.nr = nr;
        this._stand = 0;
    }

    get stand() {
        return this._stand;
    }

    // ES7
    static get BLZ() {
        return Konto._BLZ;
    }

    einzahlen(betrag) {
        this._stand += betrag;
    }

   auszahlen(betrag) {
       if( betrag > this.stand) return false;
       this._stand -= betrag;
       return true;
    }
}
Konto._BLZ = 12345678;

class GiroKonto extends Konto {

    constructor(nr) {
        super(nr);
        this.dispo = 1000;
    }

    auszahlen(betrag) {
        if( betrag > this.stand + this.dispo) return false;
        this._stand -= betrag;
        return true;
     }
}
