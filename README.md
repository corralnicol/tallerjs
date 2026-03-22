# TallerJS

Instrucciones para el Estudiante:
Crea un archivo taller.js.
Resuelve cada ejercicio y usa console.log() para mostrar los resultados en la consola de tu navegador o en Node.js.
¡No pases al siguiente ejercicio sin haber resuelto el anterior!

1. Tipos de Variables (var, let, const)
Ejercicio 1.1: Declara una variable nombre con var, asígnale tu nombre y luego reasigna un nuevo nombre. Muestra ambos en consola.
Ejercicio 1.2: Intenta hacer lo mismo pero con const y explica por qué falló.
Ejercicio 1.3: Declara una variable edad con let dentro de un bloque if (sin que se cumpla la condición) y luego intenta acceder a ella fuera del bloque. Explica el resultado.

2. Tipos de Datos (Primitivos y Complejos)
Ejercicio 2.1: Declara una variable para cada uno de los siguientes tipos de datos primitivos: string, number, boolean, null y undefined. Usa typeof para verificar el tipo de cada una.
Ejercicio 2.2: Declara un objeto persona con propiedades nombre y edad, y un array hobbies con tres elementos. ¿Qué tipo de dato son el objeto y el array?

3. Conversión de Tipos (Implícita y Explícita)
Ejercicio 3.1 (Implícita):
Crea una variable numero1 = 10 (number) y numero2 = "5" (string).
Muestra el resultado de numero1 + numero2. ¿Qué sucedió?
Muestra el resultado de numero1 * numero2. ¿Qué sucedió ahora?
Ejercicio 3.2 (Explícita):
Usa String() para convertir el número 25 a un string.
Usa Number() para convertir el string "100" a un número.
Usa Boolean() para convertir el string vacío "" y el string "hola" a booleanos.

4. Operadores, Condicionales, Ciclos y Excepciones
Ejercicio 4.1: Usa operadores de comparación para verificar si 10 === "10" y 10 == "10". Explica la diferencia.
Ejercicio 4.2: Crea un if/else que verifique si una variable numero es par o impar. Usa el operador %.
Ejercicio 4.3: Usa un ciclo for para imprimir en la consola los números del 1 al 5.
Ejercicio 4.4: Usa un bloque try...catch para intentar ejecutar un código que genere un error (throw new Error("Este es un error.")) y captura el error para mostrar un mensaje amigable.

5. Funciones y Arrow Functions
Ejercicio 5.1: Escribe una función tradicional llamada multiplicar que reciba dos parámetros y retorne su producto. Llama a la función y muestra el resultado.
Ejercicio 5.2: Convierte la función multiplicar del ejercicio anterior en una arrow function de una sola línea.
Ejercicio 5.3: Escribe una arrow function llamada saludar que no reciba parámetros y retorne el texto "¡Hola a todos!".

6. Scope y Contextos
Ejercicio 6.1: Declara una variable global en el ámbito global. Luego, dentro de una función, declara una variable local. Intenta acceder a ambas variables dentro y fuera de la función, y explica qué funciona y qué no.
Ejercicio 6.2: Crea un objeto coche con una propiedad marca y un método mostrarMarca que use this. Llama al método y explica qué representa this.

7. Arrays
Ejercicio 7.1 (Mutables):
Crea un array frutas = ["Manzana", "Banana"].
Usa push() para agregar "Naranja" y pop() para eliminar el último elemento. Muestra el array en cada paso.
Ejercicio 7.2 (Inmutables):
Crea un array numeros = [1, 2, 3].
Usa map() para crear un nuevo array con cada número multiplicado por 2.
Usa filter() para crear un nuevo array con solo los números mayores a 1.
Ejercicio 7.3 (Iteración):
Usa forEach() para iterar sobre el array frutas y mostrar cada fruta en la consola.
Usa find() para encontrar la fruta que sea "Banana".
Usa findIndex() para encontrar el índice de la fruta "Manzana".

8. Objetos y Clases
Ejercicio 8.1 (Métodos en Objetos):
Crea un objeto libro con propiedades titulo y autor.
Añade un método mostrarInfo que use this para imprimir la información del libro.
Ejercicio 8.2 (Clases):
Crea una clase llamada Animal con un constructor que reciba un nombre.
Agrega un método saludar que retorne un saludo usando el nombre.
Crea una instancia de la clase y llama al método saludar.
Ejercicio 8.3 (Herencia de Clases):
Crea una clase Perro que herede de Animal.
Añade una propiedad raza al constructor de Perro y usa super() para llamar al constructor de la clase padre.
Crea una instancia de Perro y muestra su saludo.

Fin del taller
