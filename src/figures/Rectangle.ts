import { IForme } from "./Forme";

export class Rectangle implements IForme {
    private _longeurCote: number;
    private _largeurCote: number;

    constructor(_longeurCote: number, _largeurCote: number){
        this._largeurCote = _largeurCote
        this._longeurCote = _longeurCote
  
    }

    public perimetre(): number {
        let perimetre = 2 * (this._largeurCote + this._longeurCote)
        console.log("Perimetre de Rectangele " + perimetre);
        
        return perimetre
    }

    public aire() : number{
        let aire = this._longeurCote * this._largeurCote
        console.log("Aire de Rectangele " + aire);
        
        return aire;//??;
    }

    public get longeurCote(): number{
         return this._longeurCote
    }

    public get largeurCote(): number{
         return this._largeurCote
    }

    public set longeurCote(longeurCote: number){
         this._longeurCote = longeurCote
    }

    public set largeurCote(largeurCote: number){
     this._largeurCote = largeurCote
    }   
} 
