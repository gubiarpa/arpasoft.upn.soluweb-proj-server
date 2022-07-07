const shared = require('./shared');
const inicio = require('./inicio');
const product = require('./product');
const contacto = require('./contacto');
const price = require('./price');

module.exports = {
    ...shared,
    ...inicio,
    ...product,
    ...contacto,
    ...price,
}