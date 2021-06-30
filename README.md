# Pub/Sub Speed Test

Testing out how fast pub/sub setups work.

## Set up Redis

```
docker run --name redis -d -p 6379:6379 redis
docker exec -it redis redis-cli psubscribe \*
```


## Getting Started 


Start the subscriber:
```
yarn sub
```

Then run the publisher:
```
yarn pub
```

