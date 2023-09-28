//class Pomme {
//
//    public name: string
//    public color: string
//
//    constructor(
//        name: string,
//        color: string,
//    ) {
//      console.log('Initialisation de la pomme')
//      this.name = name
//      this.color = color
//    }
//
//    public eat() {
//      console.log('Je mange une pomme')
//    }
//
//    public changeColor(newColor: string) {
//      this.color = newColor
//    }
//
//}
//
//const apple = new Pomme('Golden', 'yellow')
//apple.eat()
//apple.changeColor('red')
//console.log(apple.color)

import { Cercle } from "./figures/Cercle"
import { Carre } from "./figures/Carre"
import { Rectangle } from "./figures/Rectangle"
import { Triangle } from "./figures/Triangle"
//
//console.log("----------------")
//
//const carre = new Carre(3)
//  carre.aire()
//  carre.perimetre()
//
//console.log("----------------")
//
//  const rect = new Rectangle(5, 3)
//  rect.aire()
//  rect.perimetre()
//
//console.log("----------------")
//
//const triangle = new Triangle(2, 3)
//  triangle.aire()
//  triangle.perimetre()
//

const cercle = new Cercle(3)
  cercle.perimetre()
  cercle.aire()
console.log("----------------")

const cercle2 = new Cercle(5)
  cercle2.perimetre()
  cercle2.aire()
console.log("----------------")

const mesCercles = [cercle, cercle2]
Cercle.sommeAirePerimetre(mesCercles)

console.log(Cercle.nbrNomClasse)
