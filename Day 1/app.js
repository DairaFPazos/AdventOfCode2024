var data = [];
var archivoTxt = new XMLHttpRequest();
var fileRuta = 'datos.txt';
var grupo = '';
var lista1 = [];
var lista2 = [];
let resultados = [];


archivoTxt.open('GET',fileRuta,false);
archivoTxt.send(null);
var txt = archivoTxt.responseText;

for (let i = 0; i < txt.length; i++){
        grupo += txt[i]
    if (grupo.length == 7){
        data.push(parseInt(grupo));
        grupo = '';
    }
}
data.push(parseInt(grupo))

function datos(){
    for (let i = 0; i < data.length; i++){
        if(i % 2 == 0){
            lista1.push(data[i])
        } else {
            lista2.push(data[i])
        }
    } 
    
}
datos();
lista1.sort();
lista2.sort();

for (let i = 0; i < 1000; i++){
    resultados.push(lista1[i] - lista2[i])
}

let numerosPositivos = resultados.map(num => Math.abs(num));
let suma = numerosPositivos.reduce((acumulador, num) => acumulador + num, 0);

console.log(suma)
