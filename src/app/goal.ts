//we ng generate command(terminal) to a class
export class Goal {
    public showDescription: boolean;
    constructor(public id: number, public name: string, public description: string, public completeDate: Date) {
        this.showDescription = false;

    }
    
}
//above- created a constructor function and defined the properties of each instance of the class
