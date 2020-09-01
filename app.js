const { argv } = require("./config/yargs");
const colors = require("colors");

const { crearArchivo } = require("./multiplicar/multiplicar.js");
const { listarTaba } = require("./multiplicar/multiplicar.js");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTaba(argv.base, argv.limite);
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) =>
        console.log(colors.green(`Archivo creado`), colors.yellow(`${archivo}`))
      )
      .catch((err) => console.log(err));
    break;
  default:
    console.log("Command no reconocido");
}

//let parameter=argv[2];
//let base = parameter.split('=')[1];
//let base = "abc";
