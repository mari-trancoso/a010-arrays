
const array1 = [18, 0, 6, 9, 27]
const array2 = ["mari", "paulo", "zé", "gato", "família"]
const array3 = [47, "família", 2, false]

//Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(`Quantidade de itens do array1: ${array1.length}`)
console.log("Quantidade de itens do array2:", array2.length)
console.log("Quantidade de itens do array3:", array3.length)

//Imprima o primeiro item do primeiro array 
console.log("Primeiro item do primeiro array:", array1[0])
//O segundo item do segundo array
console.log("Segundo item do segundo array:", array2[1]) 
//E o terceiro item do terceiro array;
console.log("Trerceiro item do terceiro array:", array3[2])

//Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, 
array1.push(1993)
console.log("array1 depois do push:", array1)
console.log("O 1993 foi adicionado ao array1?", array1.includes(1993))
//e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. 
array3.push("gato")
console.log("array3 depois do push:", array3)
console.log("tem 'paulo' no array3?", array3.includes("paulo"))
//Isto é, um `includes()` verdadeiro, e outro falso.