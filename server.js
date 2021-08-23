const Shell = require('shelljs')
const axios = require('axios')
const express = require('express') //Crear expres
const app = express()              //crear una nueva aplicación
let fs = require('fs')
const readline = require("readline")
var answer = []

const lineReader = require('line-reader');


    lineReader.eachLine('prueba.log', function (line) {
        if (answer.length >= 2) {
            answer.shift();
        }
        answer.push(line)
    });
    

//app.use("/static", express.static("static"))
/*let archivo = fs.readFileSync('prueba.log', 'utf-8');
console.log(archivo);*/


//Shell.exec('ejecutable.sh')

/*axios.get('http://localhost:3030')
.then(response => {
    if (response.status == 200){
        console.log("Escribo en el log")
    }else{
        console.log("El servidor esta caido")
    }

})
.catch(e => {
    console.log(e);
})*/

/*app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(3030, () => {
    console.log('el middleware esta corriendo en el puerto 3030')
})*/
function mensaje() {
    setTimeout(function() {
        console.log(answer)
    },5000);
  }
mensaje()