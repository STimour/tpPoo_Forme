import { IForme } from "./Forme";

export class Cercle implements IForme {
   private _rayon : number;
   constructor(_rayon: number){
      this._rayon = _rayon
   }
   public perimetre(): number {
      let diametre = this._rayon * 2
      let perimetre = diametre * Math.PI
      console.log("Perimetre de Cercle " + perimetre);
      return perimetre
   }
   public aire() : number{
      let rayonC = this._rayon * this._rayon  
      let aire = rayonC * Math.PI
      console.log("aire de Cercle " + aire);
      
      return aire;  //Math.PI* ??;
   }

   public get rayon():number{
      return this._rayon
   }

   public set rayon(rayon: number){
      this._rayon = rayon
   }
}