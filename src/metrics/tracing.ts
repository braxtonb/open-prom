import process from 'process'
import * as opentelemetry from '@opentelemetry/sdk-node'
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node'
// import { PrometheusExporter } from '@opentelemetry/exporter-prometheus'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'

// https://opentelemetry.io/docs/instrumentation/js/exporters/#otlp-endpoint
const sdk = new opentelemetry.NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'open-prom',
  }),
  traceExporter: new OTLPTraceExporter(),
  // metricReader: new PrometheusExporter(),
  instrumentations: [getNodeAutoInstrumentations()],
})

// initialize the SDK and register with the OpenTelemetry API
// this enables the API to record telemetry
sdk
  .start()
  .then(() => console.log('Tracing initialized'))
  .catch((error) => console.log('Error initializing tracing', error))

// gracefully shut down the SDK on process exit
process.on('SIGTERM', () => {
  sdk
    .shutdown()
    .then(() => console.log('Tracing terminated'))
    .catch((error) => console.log('Error terminating tracing', error))
    .finally(() => process.exit(0))
})
