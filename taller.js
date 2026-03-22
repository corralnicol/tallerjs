// 1.1

var nombreVar = "nicol"
console.log(nombreVar)
var nombreVar = "nicol vanessa"
console.log(nombreVar)

// 1.2
const nameConst = "nicol"
// falla porque const no se puede reasiganr 
// nameConst = "nicol vanessa"
console.log(nameConst)

// 1.3
if (1 + 1 == 3) {
  let edad = 20
}
// falla porque edad no esta definido en este bloque (global)
// console.log(edad)

// 2.1
const str = "Nicol Vanessa"
console.log(typeof str) // string

let num = 10
console.log(typeof num)

let boolean = true
console.log(typeof boolean)

let nullVar = null
console.log(typeof nullVar)

let und = undefined
console.log(typeof und)

// 2.2
const nicol = {
  name: "Nicol Vanessa 💄",
  age: 20,
  hobbies: [
    "Ver estrellas",
    "Estar con mi novio",
    "Comer sushi"
  ]
}

console.log(nicol)
console.log(typeof nicol)
console.log(typeof nicol.hobbies)

// 3.1
let num1= 10
let num2 = "5"
console.log(num1 + num2) // 105 porque se concatenan en vez de sumarse, 10 se convierte en string
console.log(num1 * num2) // 50 porque "5" se comvierte en number

// 3.2
console.log(String(25))
console.log(Number("100"))
console.log(Boolean("hola"))
console.log(Boolean(""))

// 4.1
if (10 === "10") {
  console.log("===")
}

if (10 == "10") {
  console.log("==")
}
// la diferencia es que los los ===  no hacen  conversiones mientras qeu los == si los hacen 

//4.2
const n = 10
if (n % 2 === 0) {
  console.log("par")
} else {
  console.log("impar")
}
// 4.3
for (let i = 1; i <= 5; i++) {
  console.log (i) 
}

// 4.4
try {
  throw new Error("Este es un error.")
} catch (e) {
  console.log("ocurrio un error inesperado: "+e)
}

// 5.1
function multiplicar(a, b) {
  return a * b
}
console.log(multiplicar(5, 3))

// 5.2
const multiplicarArrow = (a, b) => a * b
console.log(multiplicarArrow(5, 3))

// 5.3
const saludar =  () => console.log("Hola, bienvenido a la programación en JavaScript!")
saludar()

//6.1
a = 5
if (a > 0) {
  const b = 10
  console.log("a es: " + a)
  console.log("b es: " + b)
  a += 1
}
console.log("a es: " + a)
try {
  console.log("b es: " + b) 
} catch (e) {
  console.log("b no existe en el global scope")
}
//las variables que  estan definidas en el global scope se pueden usar en culalquier bloque 
// y las variables que se estan definiendo adaentro de una funcion 
// solamente podran ser usadas dentro de la misma 

//6.2
let coche = {
  marca: "Toyota",
  mostrarMarca: function() {
    console.log("La marca del coche es: " + this.marca)
  }
}
coche.mostrarMarca()
// this.marca se escribe para referirse a la variable marca 
// la cuel es una propiedad de coche 

// 7.1
const frutas = ["Manzana", "Banana"]
console.log(frutas)
frutas.push("Naranja")
console.log(frutas)
frutas.pop()
console.log(frutas)

// 7.2
const numeros = [1, 2, 3]
const numerosDoblados = numeros.map(num => num * 2)
console.log(numerosDoblados)
const filtrados = numeros.filter(num => num > 1)
console.log(filtrados)

// 7.3
frutas.forEach(fruta => console.log(fruta))
banana = frutas.find(fruta => fruta === "Banana")
console.log(banana)
const indiceManzana = frutas.findIndex(fruta => fruta === "Manzana")
console.log(indiceManzana)

// 8.1
const libro = {
  titulo: "A song of ice and fire",
  autor:  "George R.R. Martin",
  mostrarInfo: function() {
    console.log(this.titulo + " fue escrito por " + this.autor)
  }
}
libro.mostrarInfo()

// 8.2
class Animal {
  constructor(nombre, color) {
    this.nombre = nombre
    this.color = color
  }

  saludar() {
    console.log("Hola, soy un " + this.nombre + " " + this.color)
  }
}

const mono = new Animal("monito", "cafe")
console.log(typeof mono)
mono.saludar()

// 8.3
class Perro extends Animal {
  constructor(nombre, color, raza) {
    super(nombre, color)
    this.raza = raza
  }
  
  mostrarRaza() {
    console.log("Soy un " + this.raza)
  }
}

const shitzu = new Perro("perro", "blanco", "shitzu")
shitzu.saludar()
shitzu.mostrarRaza()
