# View in browser localhost:16686
docker run -d --rm --name jaeger \
  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \
  -e COLLECTOR_OTLP_ENABLED=true \
  -p 6831:6831/udp \
  -p 6832:6832/udp \
  -p 5778:5778 \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  -p 14250:14250 \
  -p 14268:14268 \
  -p 14269:14269 \
  -p 9411:9411 \
  jaegertracing/all-in-one:latest

# Start the docker swarm
docker swarm init

# https://docs.docker.com/config/daemon/prometheus/#configure-and-run-prometheus
# Create the Prometheus server as a Docker service on a Docker swarm
docker service create --replicas 1 --name my-prometheus \
    --mount type=bind,source=${PWD}/prometheus.yml,destination=/etc/prometheus/prometheus.yml \
    --publish published=9090,target=9090,protocol=tcp \
    prom/prometheus
