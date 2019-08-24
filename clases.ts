class Person {    
    private name: string;    
    protected edad: number;
    protected constructor(theName: string, theAge: number) {        
        this.name = theName;    
        this.edad= theAge;
    }    
    introduceSelf() {        
        console.log("Hola, soy " + this.name + "!");    
    } 
}
class Friend extends Person {    
    conocer: number;    
    constructor(name: string, edad: number, conocer: number) {       
         super(name, edad);        
         this.conocer = conocer;    
        }    
        timeKnown() {        
            console.log("Nosotros nos conocemos hace " + this.conocer + " años.")    
        } 
        friendSince() {        
            let firstAge = this.edad - this.conocer;        
            console.log(`nosotros nos conocemos desde que tenia ${firstAge} años de edad.`)    
        } 
    }
 
//let friendA = new Friend("Juan", 8);
 
 
let personA = new Person("Issac");
let friendA = new Friend("William", 19, 8);
 
 
personA.introduceSelf();
friendA.introduceSelf();
friendA.timeKnown();
friendA.friendSince();


