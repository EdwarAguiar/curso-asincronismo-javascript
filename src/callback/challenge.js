
//Callbacks y Peticion a una API

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4){
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

// Se usa la tripple igualdad "===" xq se quiere garantizar que sea en valor y en tipo el mismo elemento.
// xhttp.readyState recibe un valor numerico
// readyState		Holds the status of the XMLHttpRequest.
//                  0: request not initialized
//                  1: server connection established
//                  2: request received
//                  3: processing request
//                  4: request finished and response is ready

//status	        200: "OK"
//                  403: "Forbidden"
//                  404: "Page not found"
//                  For a complete list go to the Http Messages Reference
//                  statusText	Returns the status-text (e.g. "OK" or "Not Found")


// Resolviendo el problema
// El Problema: Hacer una peticion a la API, obtener cuantos elementos tiene de personajes
// Acceder al 1er personaje y obtener la ubicacion en la que se encuentra
// para despues saber en que dimension se encuentra

fetchData(API, function (error1, data1){
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})