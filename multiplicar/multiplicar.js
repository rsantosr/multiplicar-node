const fs = require("fs");
const colors = require("colors");

let listarTaba = (base, limite = 10) => {
  console.log("==================");
  console.log(`========Tabla de ${base}==========`.green);
  console.log("==================");
  for (let i = 1; i <= limite; i++) {
    //data += `${base} * ${i} = ${base * i}\n`;
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor ingresado ${base} no es un número`);
      return;
    }
    let data = "";
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    //const data = new Uint8Array(Buffer.from("Hola mundo"));
    fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      resolve(`tabla-${base}-al-${limite}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTaba,
};
