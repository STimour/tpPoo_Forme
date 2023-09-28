import { IForme } from "./Forme";

export class Cercle implements IForme {
   private _rayon : number;
   public static nbrNomClasse: number = 0 

   constructor(_rayon: number){
      this._rayon = _rayon
      Cercle.nbrNomClasse++
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

   public static sommeAirePerimetre(cercles: Cercle[]): {sommeAire: number; sommePerimetre: number}{
      let sommeAire = 0
      let sommePerimetre = 0

      for(const cercle of cercles){
         sommeAire += cercle.aire()
         sommePerimetre += cercle.perimetre()
         console.log(`voici la somme des aires : ${sommeAire}. Voici la somme des Perimetre ${sommePerimetre}`)
      } 
      return {sommeAire, sommePerimetre}
   }
}