
function Konto(nr) {
    if (this === window) throw Error("Illegal constrcutor use");
    this.nr = nr;
    this.stand = 0;
}
Konto.BLZ = 1234567;
Konto.prototype.einzahlen = function(betrag) { this.stand += betrag;}
Konto.prototype.auszahlen = function(betrag) { if( betrag > this.stand) return false; this.stand -= betrag; return true}

function GiroKonto(nr) {
    // 1. Erben der Basis-Props
    Konto.apply(this, arguments);
    // 2. Zusätzliche Props
    this.dispo = 1000;
}
// 1. Erben der Methoden
// GiroKonto.prototype.__proto__ = Konto.prototype // ES6
GiroKonto.prototype = Object.create(Konto.prototype);
GiroKonto.prototype.constructor = GiroKonto;
// 2. Überschreiben einer Methode
GiroKonto.prototype.auszahlen = function(betrag) { if( betrag > this.stand + this.dispo) return false; this.stand -= betrag; return true}

