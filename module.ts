module Shipping {
    export interface Ship {
        name:string;
        port:string;
        displacement:number
    }
    export class Ferry implements Ship {
        constructor(public name:string,
                    public port:string,
                    public displacement:number) {

        }
    }
    var defaultDisplacement = 400;
    class PrivateShip implements Ship {
        constructor(public name:string,
                    public port:string,
                    public displacement:number = defaultDisplacement) {

        }
    }

}

var feryy = new Shipping.Ferry('Assurance', 'London', 3220);
console.log(feryy);