const opts = {
  base: {
    demand: true,
    alias: "b",
  },
  limite: {
    default: 10,
    alias: "l",
  },
};

const argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicar", opts)
  .command("crear", "Genera  en un archivo la tabla de multiplicar", opts)
  .help().argv;

module.exports = {
  argv,
};
