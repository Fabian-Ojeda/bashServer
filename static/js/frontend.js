alert("se conecto el js")
//const axios = require('axios')
//leo ese log XD
axios.get('http://localhost:3031').then(response => {
    if (response.status == 200){
        
        document.getElementById("et1").innerHTML="El servidor 1 esta en funcionamiento"
        console.log("El servidor esta en funcionamiento")
    }else{
        document.getElementById("et2").innerHTML="El servidor 1 no esta en funcionamiento"
        console.log("El servidor esta caido")
    }
    
})
.catch(e => {
    console.log(e);
})

axios.get('http://localhost:3032')
.then(response => {
    if (response.status == 200){
        document.getElementById("et2").innerHTML="El servidor 2 esta en funcionamiento"
        console.log("El servidor esta en funcionamiento")
    }else{
        document.getElementById("et2").innerHTML="El servidor 2 no esta en funcionamiento"
        console.log("El servidor esta caido")
    }
    
})
.catch(e => {
    console.log(e);
})