class Class_utility{
    static getinputvalue(elementId:string):string {
        let inputelement:HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
        return inputelement.value;
    }
    
}