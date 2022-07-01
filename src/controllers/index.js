const aplication = require('./aplication');
const product = require('./product');
const inicio = require('./inicio');

module.exports = {
    ...aplication,
    ...product,
    ...inicio
}