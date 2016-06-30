var Zoho = require('zoho');
var invoice = new Zoho.Invoice({
  authtoken: '800e5760c1af595c21bb1913dde55c2b',
  organization_id: '24197050'
});

invoice.getRecords('invoices', function (err, data) {
  if (err) {
    return console.log(err);
  }
 
  console.log(data);
});