var Zoho = require('zoho');
var crm = new Zoho.CRM({
  authtoken: 'c9a5be8192b22672d6e921a9b1e9644f'
});
crm.getRecords('leads', function (err, data) {
  if (err) {
    return console.log(err);
  }
 
  console.log(JSON.stringify(data));
});