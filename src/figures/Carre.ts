import { IForme } from "./Forme";
export class Carre implements IForme {
    private _longeurCote: number;
    public static nbrNomClasse: number = 0 
    
    constructor(_longeurCote: number){
        this._longeurCote = _longeurCote
        Carre.nbrNomClasse++
    }
    
    public perimetre(): number {
        let perimetreCarre = this._longeurCote * 4
        console.log("Perimetre de Carre " + perimetreCarre);
        return perimetreCarre
    }

    public aire() : number{
        let aireCarre = this._longeurCote * this._longeurCote
        console.log("Aire de Carre " + aireCarre);
        return aireCarre;//??;
   }

   public get longeurCote(): number{
        return this._longeurCote
   }

   public set longeurCote(longeurCote: number){
        this._longeurCote = longeurCote
   }


} 