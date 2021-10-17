// Promise
// Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.
// 

const somethingWillHappen = () => {
    return new Promise ((resolve, reject) => {
        // Aqui la validacion de algo que queremos que suceda
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


// 2da parte
// Es importante escribir Promise con "P" mayuscula, de los contrario no funciona
// Se maneja el error con --> new Error
// Deja un trace para poder depurar mejor el codigo

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whoops!');
            reject(error);
        }
    });
};


somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


// Promise.all()

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })

