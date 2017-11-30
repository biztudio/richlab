/*
http://dexie.org/docs/Typescript
*/
import Dexie from 'dexie';

interface IFund{
    id?:number,
    code:string,
    name:string,
    fee:string
}

/* 
 * [Optional]
 * This is a 'physical' class that is mapped to
 * the fund table. We can have methods on it that
 * we could call on retrieved database objects.
 */
class Fund implements IFund{
    constructor(public code:string, public name:string, public fee:string, public id?:number){}
}

class RichlabDatabase extends Dexie {
    // Declare implicit table properties.
    // (just to inform Typescript. Instanciated by Dexie in stores() method)
    // List definition of Tables here:
    fund: Dexie.Table<IFund, number>;

    constructor(){
        super('RichlabDatabase');
        this.version(1).stores({
            fund:'++id, code, name, fee'
        });
        this.fund.mapToClass(Fund);
    }
}

export {
    IFund,
    Fund,
    RichlabDatabase
}