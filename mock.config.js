let fs = require('fs');

function response(path, req, res){
    console.log(`request: ${path} mock to ${'./mock' + path}`);
    path = './mock' + path;
    res.writeHead(200, {
        'Content-Type': 'text/html;charset:UTF-8'
    });
if ((fs.existsSync(path + '/index.js'))) {
    res.end(JSON.stringify(require(path + '/index.js')()))
    delete require.cache[require.resolve(path + '/index.js')]
}
}
module.exports = function (req, res, next) {
    if (req.headers.isajax === 'true') {
        let path = req.path;
        response(path, req, res);
        return true;
    }
    return next();
 }