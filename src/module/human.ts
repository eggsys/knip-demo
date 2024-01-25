import { concat } from 'lodash';
export class Human {
    constructor() {
        
    }

    public sayHello(): void {
        console.debug("Hello Knip !");
    }
    
    public mergeArray(arrayA: string[], arrayB: string[]): string[] {
        return concat(arrayA, arrayB);
    }
    
}