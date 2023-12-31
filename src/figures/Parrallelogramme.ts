import { IForme } from "./Forme";
export class Parrallelogramme implements IForme {
    private _hauteur: number;
    private _cote: number;
    public static nbrNomClasse: number = 0 
    constructor(_hauteur: number, _cote: number){
        this._cote = _cote
        this._hauteur = _hauteur
        Parrallelogramme.nbrNomClasse++
    }

    public perimetre(): number {
        const perimetre = 2 * (this._cote + this._hauteur);
        console.log("Perimetre de Parrallelogramme " + perimetre);
        return perimetre;
    }
    public aire() : number{
        const aire = this._cote * this._hauteur;
        console.log("aire de Parrallelogramme " + aire);
        return aire;
    }

    public get hauteur(): number {
        return this._hauteur;
    }

    public set hauteur(hauteur: number) {
        this._hauteur = hauteur;
    }

    public get cote(): number {
        return this._cote;
    }

    public set cote(cote: number) {
        this._cote = cote;
    }

    public static sommeAirePerimetre(parrallelogrammes: Parrallelogramme[]): {sommeAire: number, sommePerimetre: number}{
        let sommeAire = 0
        let sommePerimetre = 0

        for(const parrallelogramme of parrallelogrammes){
            sommeAire += parrallelogramme.aire()
            sommePerimetre += parrallelogramme.perimetre()
            console.log(`voici la somme des aires : ${sommeAire}. Voici la somme des Perimetre ${sommePerimetre}`)
        }

        return {sommeAire, sommePerimetre}
   }
} 