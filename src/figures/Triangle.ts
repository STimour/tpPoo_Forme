import { IForme } from "./Forme";
export class Triangle implements IForme {
    private _longeurCote: number;
    private _hauteur: number
    public static nbrNomClasse: number = 0 
    constructor(_longeur: number, _hauteur: number){
        this._longeurCote = _longeur
        this._hauteur = _hauteur
        Triangle.nbrNomClasse++
    }

   perimetre(): number {
       let perimetre = this._longeurCote * 3
       console.log("Perimetre de Triangle " + perimetre);
       return perimetre
   }
   aire() : number{
       let aire = (this._longeurCote * this._hauteur)/2
       console.log("Aire de Triangle " + aire);
       return aire 
   }

   
} 