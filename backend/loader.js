//require the file that configures the server ports, middlewares and connections
server = require('./config/server')
//require the file the configures the data base connection
require('./config/database')

require('./config/routes')(server)