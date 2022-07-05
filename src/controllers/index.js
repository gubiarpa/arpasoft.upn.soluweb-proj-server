const aplication = require('./aplication');
const shared = require('./shared');
const inicio = require('./inicio');
const product = require('./product');
const contacto = require('./contacto');

module.exports = {
    ...aplication,
    ...shared,
    ...inicio,
    ...product,
    ...contacto,
}