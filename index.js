const { Application } = require('spectron');
const { strictEqual } = require('assert');

const app = new Application({ path: '/opt/E-Parse/eparse' });

app.start().then(
    ()           => { return app.client.getText('.brand-logo');    }).then(
    (brand_logo) => { strictEqual(brand_logo, 'G-Parse');          }).catch(
    (error)      => { console.error('Test failed', error.message); }).finally(
    ()           => { return app.stop();                           }).finally(
    ()           => { process.exit(0);                             });
