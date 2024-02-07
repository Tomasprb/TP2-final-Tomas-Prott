const fs = require('fs');


module.exports = {
    // Punto 1a
    concatWords(req, res) {
        const words = req.body.words;
        const fullText = words.concat(' ');
        fs.appendFile('./texto.txt', fullText,'utf8', (err) => {
            if (err) {
              return res.status(500).send('Error al escribir en el archivo');
            }
            return res.status(200).send(`Las palabras '${words}' fueron añadidas correctamente.`);
        });
    },
    // Punto 1b
    showText(req,res){
        fs.readFile('./texto.txt',(err,data)=>{
            if (err) {
                return res.status(500).send('Error al leer en el archivo');
            }
            return res.status(200).send(data);
        });
    },
    // Punto 1c
    showTextByFilter(req, res) {
        const { amount, startpos } = req.body;
    
        if (typeof amount !== 'number' || typeof startpos !== 'number') {
            return res.status(400).send('Los parámetros deben ser números');
        }
        if (startpos <=  0 || amount <=  0) {
            return res.status(400).send('La posición inicial y la cantidad deben ser mayores a cero');
        }
    
        fs.readFile('./texto.txt', (err, data) => {
            if (err) {
                return res.status(500).send('Error al leer en el archivo');
            }
            let array = data.toString().split(" ");

            if ((startpos + amount -  1) > array.length) {
                return res.status(500).send('La posicion inicial más la cantidad excede la longitud del texto');
            }
            let output = "";
            for (let i = startpos -  1; i < startpos + amount -  1; i++) {
                output = output.concat(array[i] + " ");
            }
            return res.status(200).send(output);
        });
    }
}