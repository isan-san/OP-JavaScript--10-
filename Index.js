import chalk from 'chalk';
// const {suma, multiplicacion} = require('./modulos/Controller');
import { suma, multiplicacion } from "./modulos/Controller.js";

console.log(suma(1,2));
console.log(chalk.blue(multiplicacion(3,4)));