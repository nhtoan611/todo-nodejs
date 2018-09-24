var configValues = require("./config");

var username = configValues.username;
var password = configValues.password;
module.exports = {
    

    getDbConnectionString: function(){
        return 'mongodb://' + username + ':' + password + '@ds213183.mlab.com:13183/node-todos'
    }
}