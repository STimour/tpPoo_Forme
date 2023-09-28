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

   public static sommeAirePerimetre(carres: Carre[]): {sommeAire: number, sommePerimetre: number}{
        let sommeAire = 0
        let sommePerimetre = 0

        for(const carre of carres){
            sommeAire += carre.aire()
            sommePerimetre += carre.perimetre()
            console.log(`voici la somme des aires : ${sommeAire}. Voici la somme des Perimetre ${sommePerimetre}`)
        }

        return {sommeAire, sommePerimetre}
   }

} 