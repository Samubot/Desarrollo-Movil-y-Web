// Ejemplo de callback

function leerArchivo(callback) {
    setTimeout(() => {
        console.log("Archivo leído");
        callback();
    }, 1000);
}

leerArchivo(() => {
    console.log("Procesar archivo");
});

// Ejemplo de promesa

function leerArchivo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Archivo leído");
            resolve("Contenido del archivo");
        }, 1000);
    });
}

leerArchivo()
    .then((contenido) => {
        console.log("Procesar:", contenido);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


// Ejemplo de async/await

function leerArchivo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Archivo leído");
            resolve("Contenido del archivo");
        }, 1000);
    });
}

async function procesarArchivo() {
    try {
        const contenido = await leerArchivo();
        console.log("Procesar:", contenido);
    } catch (error) {
        console.error("Error:", error);
    }
}

procesarArchivo();
