const redis = require('redis');
const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

let total = 0;
client.on("message", function(channel, message) {
    let dateNow = process.hrtime.bigint();
    let dateDiff = parseInt(dateNow - BigInt(message), 10);
    if (dateDiff > 999999) {
        total = total + 1;
        console.log(`Diff: ${parseInt(dateDiff, 10) / 1000000}ms (${total})`);
    }
    
});
  
client.subscribe("speed");