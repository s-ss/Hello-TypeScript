var Shipping;
(function (Shipping) {
    var Ferry = (function () {
        function Ferry(name, port, displacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return Ferry;
    }());
    Shipping.Ferry = Ferry;
    var defaultDisplacement = 400;
    var PrivateShip = (function () {
        function PrivateShip(name, port, displacement) {
            if (displacement === void 0) { displacement = defaultDisplacement; }
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return PrivateShip;
    }());
})(Shipping || (Shipping = {}));
var feryy = new Shipping.Ferry('Assurance', 'London', 3220);
console.log(feryy);
//# sourceMappingURL=module.js.map