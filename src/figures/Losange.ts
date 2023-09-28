import { IForme } from "./Forme";
export class Losange implements IForme {
    private _petiteDiag: number;
    private _grandeDiag: number;
    public static nbrNomClasse: number = 0
    constructor(petiteDiag: number, grandeDiag: number) {
        this._petiteDiag = petiteDiag;
        this._grandeDiag = grandeDiag;
        Losange.nbrNomClasse++
    }

    public perimetre(): number {
        const cote = Math.sqrt((this._petiteDiag / 2) ** 2 + (this._grandeDiag / 2) ** 2);
        const perimetre = 4 * cote;
        console.log("Le perimetre de losange " + perimetre);
        
        return perimetre;
    }
    public aire() : number{
        const aire = (this._petiteDiag * this._grandeDiag) / 2;
        console.log("Aire de losange " + aire);
        
        return aire;
    }

    
    public get petiteDiag(): number {
        return this._petiteDiag;
    }

    public set petiteDiag(petiteDiag: number) {
        this._petiteDiag = petiteDiag;
    }

    public get grandeDiag(): number {
        return this._grandeDiag;
    }

    public set grandeDiag(grandeDiag: number) {
        this._grandeDiag = grandeDiag;
    }
}
