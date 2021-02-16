export class Hero {
    id: number;
    name: string;
    superPower: string;
    address: string;

    constructor(id: number, name: string, superPower: string, address: string){
        this.id = id;
        this.name = name;
        this.superPower = superPower;
        this.address = address;
    }
}
