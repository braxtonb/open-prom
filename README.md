# open-prom

## Overview

The goal of this repository is to **tinker** with OpenTelemetry, Prometheus, and Jaeger. More polish could be added to the app by adding a build script, dockerizing the express app, and auto formatting the code.

## Getting Started

1. Install the dependencies - `npm install`
2. Start up [docker desktop](https://www.docker.com/products/docker-desktop/)
3. Update bash script permisisons - `chmod 777 *.sh`
4. Start Jaeger and the Prometheus server to scrape (i.e. pull) metrics from the express app - `./start-infra.sh`
5. Start the express app - `npm run dev`
6. Open Jaeger to visualize traces - http://localhost:16686
7. Open the Prometheus UI to monitor R(equest rate) E(error rate) D(uration of requests - aka latency) - http://localhost:9090
8. To wrap up, stop the express app - `ctrl + c` and stop the infra - `./stop-infra.sh`

## Example

<video src='./media/2022_11_21_open_prom_example.mov' width="100%"></video>

## Endpoints

Endpoint | Description
:--|:--|
GET http://localhost:8080 | Returns `Hello World`
GET http://localhost:8080/api/books | Returns a list of book names

## Resources

- [OpenTelemetry](https://opentelemetry.io/)
- [Prometheus](https://prometheus.io/)
- [Jaeger](https://www.jaegertracing.io/docs/1.21/opentelemetry/)
- [Node.js Auto-instrumentation](https://github.com/open-telemetry/opentelemetry-js-contrib/tree/main/metapackages/auto-instrumentations-node#readme)

## Other Notes

**Initializing Typescript**

`npx --package typescript tsc --init`

**Initializing Eslint**

`npx eslint --init`
