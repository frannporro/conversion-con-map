/* map-for each: permiten aplicar una funcion a cada elemento del array
y construir un nuevo array con los resultados, interesante
vamos con los ej:
    const=numbers[1,2,3,4,5]
    const squarenumbers=numbers.map(num=>num*num)

*/

const numbers=[1,2,3,4,5]
const squarednumbers=numbers.map(num=>num*num)

console.log(numbers)
console.log(squarednumbers)

/* for each: itera sobre cada elemento de un array y ejecuta una funcion
proporcionada para cada elemento sin crear un nuevo array */

const colors=["pink", "red","blue"]
const iteredcolors=colors.forEach(color=>console.log(color))

/* conversion de fahrenheit a celsius 
formula: c=5/9*(f-32)*/

const gradosf=[32,68,34,121,45,100,107]
const gradosc=gradosf.map(fahrenheit=>5/9*(fahrenheit-32))
console.log(gradosf)
console.log(gradosc)
