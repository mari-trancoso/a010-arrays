const array1 = [18, 0, 6, 9, 27]
const array2 = ["mari", "paulo", "zé", "gato", "família"]
const array3 = [47, "família", 2, false]

//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
array1Copia = array1.slice()
array2Copia = array2.slice()
array3Copia = array3.slice()

//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
array1Copia.push("number")
console.log("array1:", array1)
console.log("array1Copia com a adição:", array1Copia)

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
array2Copia.pop()
console.log("array2:", array2)
console.log("array2Copia sem o último item:", array2Copia)

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
array3Copia.splice(1,1)
console.log("array3:", array3)
console.log("array3Copia, sem o segundo item:", array3Copia)