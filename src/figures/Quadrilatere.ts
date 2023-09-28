import { IForme } from "./Forme";
export class Quadrilatere implements IForme {
    private _cote1: number;
    private _cote2: number;
    private _cote3: number;
    private _cote4: number;
    private _diag: number;
    public static nbrNomClasse: number = 0 
    constructor(
        _cote1: number,
        _cote2: number,
        _cote3: number,
        _cote4: number,
        _diag: number
        ){
            this._cote1 = _cote1
            this._cote2 = _cote2
            this._cote3 = _cote3
            this._cote4 = _cote4
            this._diag = _diag
            Quadrilatere.nbrNomClasse++


        }

    public perimetre(): number {
        let perimetre = this._cote1 + this._cote2 + this._cote3 + this._cote4
        console.log("Le perimetre de Quadrilatere " + perimetre);
        return perimetre
         
    }
    public aire() : number{
        const angle12Radians = Math.acos((this._diag**2 + this._cote1**2 - this._cote2**2) / (2 * this._diag * this._cote1));
        const angle34Radians = Math.acos((this._diag**2 + this._cote3**2 - this._cote4**2) / (2 * this._diag * this._cote3));
        const aire = (1/4) * Math.sqrt(4 * this._cote1 * this._cote3 * (this._diag**2 - (this._cote2 * this._cote4 * Math.cos(angle12Radians - angle34Radians))));
        console.log("L'aire du quadrilatère : " + aire);
        return aire;
    }

    public get cote1(): number{
        return this._cote1 
    }
    public set cote1(cote1: number){
        this._cote1 = cote1
    }

    public get cote2(): number{
        return this._cote2 
    }
    public set cote2(cote2: number){
        this._cote2 = cote2
    }


    public get cote3(): number{
        return this._cote3 
    }
    public set cote3(cote3: number){
        this._cote3 = cote3
    }


    public get cote4(): number{
        return this._cote4 
    }
    public set cote4(cote4: number){
        this._cote4 = cote4
    }


    public get diag(): number{
        return this._diag 
    }
    public set diag(diag: number){
        this._diag = diag
    }
} 