const redis = require('redis');
const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    for(var i=0; i < 1000; i++){
        client.publish("speed", process.hrtime.bigint());
        await sleep(20)
    }
    client.end(true);
}

main()