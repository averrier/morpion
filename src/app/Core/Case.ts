export class Case {
    value = '';
    zoneNb;

    constructor(myZoneNb) {
        this.zoneNb = myZoneNb;
    }
    
    public setValue(val: string) {
        this.value = val;
    }
}
