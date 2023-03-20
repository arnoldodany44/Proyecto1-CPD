var express = require('express');
var bodyParser = require('body-parser');
var oracledb = require('oracledb');
const { response } = require('express');
var app = express();
var port = 3002;
var dbConfig = {
    user: 'SYSTEM',
    password: 'root',
    connectString: 'localhost:1521/xe'
};
console.log('Starting server on port '+port+'...');
function doRelease(connection) {
    connection.close(
        function (err) {
            if (err)
                console.error(err.message);
        });
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var router = express.Router();
router.use(function (req, res, next) {
    console.log('Request: '+req.method+' '+req.url);
    console.log('Request body: '+JSON.stringify(req.body));
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
router.route('/sucursales').get(function (req, res) {
    //console.log('GET /sucursales');
    oracledb.getConnection( dbConfig, function (err, connection) {
        if (err) {
            console.error(err.message);
            res.status(500).send(err.message);
            return;
        }
        console.log('Connection was successful!');
        connection.execute("SELECT * FROM SUCURSAL", {}, { outFormat: oracledb.OBJECT }, function (err, result) {
            if(err){
                console.error(err.message);
                res.status(500).send("ERRORRR: "+err.message);
                doRelease(connection);
                return;
            }
            //console.log('Result: '+JSON.stringify(result.metaData));
            var sucursales = [];
            result.rows.forEach(function (row) {
                sucursales.push({ id: row.IDSUCURSAL, nombre: row.NOMBRESUCURSAL,
                ciudad: row.CIUDADSUCURSAL, activos: row.ACTIVOS, region: row.REGION });
            }, this);
            console.log(JSON.stringify(sucursales));
            res.status(200).json(sucursales);
            doRelease(connection);
        });
    });
});
router.route('/prestamos').get(function (req, res) {
    //console.log('GET /prestamos');
    oracledb.getConnection( dbConfig, function (err, connection) {
        if (err) {
            console.error(err.message);
            res.status(500).send(err.message);
            return;
        }
        console.log('Connection was successful!');
        connection.execute("SELECT * FROM PRESTAMO", {}, { outFormat: oracledb.OBJECT }, function (err, result) {
            if(err){
                console.error(err.message);
                res.status(500).send("ERRORRR: "+err.message);
                doRelease(connection);
                return;
            }
            //console.log('Result: '+JSON.stringify(result.metaData));
            var prestamos = [];
            result.rows.forEach(function (row) {
                prestamos.push({ id: row.NOPRESTAMO, idsucursal: row.IDSUCURSAL,
                    cantidad: row.CANTIDAD});
            }, this);
            console.log(JSON.stringify(prestamos));
            res.status(200).json(prestamos);
            doRelease(connection);
        });
    });
});
app.use(express.static('static'));
app.use('/api', router);
app.listen(port, function () {
    console.log('Server running on port '+port);
});