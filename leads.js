var Zoho = require('zoho');
var crm = new Zoho.CRM({
  authtoken: ''
});
crm.getRecords('leads', function (err, data) {
  if (err) {
    return console.log(err);
  }
 
  console.log(JSON.stringify(data));
});