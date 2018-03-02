var net = require('net');

var gameserver = new net.Socket();

var evoMu = '173.212.240.106';
//gameserver.connect(55901, evoMu, function() {
//    console.log('Connected to GameServer');
//});
//gameserver.on('data', function(data) {
//    //packetHandler.addServerPacket(data.toString('hex'));
//});


const server = net.createServer((c) => {
    // 'connection' listener
    console.log('client connected');
    c.on('end', () => {
        console.log('client disconnected');
    });
    c.write('hello\r\n');
    c.pipe(c);
});
server.on('error', (err) => {
    throw err;
});
server.listen(55901, () => {
    console.log('server bound');
});
