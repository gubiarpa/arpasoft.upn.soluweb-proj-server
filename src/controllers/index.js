const shared = require('./shared');
const inicio = require('./inicio');
const product = require('./product');
const contacto = require('./contacto');

module.exports = {
    ...shared,
    ...inicio,
    ...product,
    ...contacto,
}