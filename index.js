var Zoho = require('zoho');
var invoice = new Zoho.Invoice({
  authtoken: 'c9a5be8192b22672d6e921a9b1e9644f',
  organization_id: '24197050'
});

invoice.getRecords('invoices', function (err, data) {
  if (err) {
    return console.log(err);
  }
 
  console.log(data);
});