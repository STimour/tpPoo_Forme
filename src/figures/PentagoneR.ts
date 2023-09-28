import { IForme } from "./Forme";
export class PentagoneR implements IForme {
    private _longueurCote: number;
    private _largeurCote: number;
    public static nbrNomClasse: number = 0 
    constructor(
        _longueurCote: number,
        _largeurCote: number
        
    ){
        this._largeurCote = _largeurCote
        this._longueurCote = _longueurCote
        PentagoneR.nbrNomClasse++
    }

    public perimetre(): number {
        const perimetre = 5 * this._longueurCote;
        console.log(perimetre);
        return perimetre;
    }
    public aire() : number{
       // Calcul de l'apothème
       const apotheme = (this._longueurCote / 2) * Math.tan((72 * Math.PI) / 180);

       // Calcul de l'aire
       const aire = (5 * this._longueurCote * apotheme) / 2;
       console.log(aire);
       return aire;
    }

    public get longueurCote(): number{
        return this._longueurCote 
    }
    public set longueurCote(longueurCote: number){
        this._longueurCote = longueurCote
    }

    public get largeurCote(): number{
        return this._largeurCote 
    }
    public set largeurCote(largeurCote: number){
        this._largeurCote = largeurCote
    }

} 