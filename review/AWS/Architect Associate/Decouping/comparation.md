# SQS vs SNS vs Kinesis

## Amazon SQS (Simple Queue Service)
- **Type**: Message Queue
- **Use Case**: Decoupling and scaling microservices, distributed systems, and serverless applications.
- **Message Delivery**: At least once delivery, FIFO (First-In-First-Out) available.
- **Message Retention**: Up to 14 days.
- **Ordering**: FIFO queues ensure strict message ordering.
- **Throughput**: High throughput, but limited by the number of messages per second.

## Amazon SNS (Simple Notification Service)
- **Type**: Pub/Sub (Publish/Subscribe) Messaging
- **Use Case**: Sending notifications to multiple subscribers, fan-out scenarios.
- **Message Delivery**: At least once delivery, can deliver to multiple endpoints (e.g., SQS, Lambda, HTTP/S).
- **Message Retention**: No retention, messages are delivered immediately.
- **Ordering**: No guaranteed ordering.
- **Throughput**: High throughput, can handle millions of messages per second.

## Amazon Kinesis
- **Type**: Real-time Data Streaming
- **Use Case**: Real-time analytics, log and event data collection, real-time data processing.
- **Message Delivery**: At least once delivery, can be configured for exactly-once processing.
- **Message Retention**: Up to 7 days.
- **Ordering**: Guaranteed ordering within shards.
- **Throughput**: High throughput, can handle gigabytes of data per second.

## Comparison Summary
- **SQS** is ideal for decoupling components and ensuring reliable message delivery with optional FIFO ordering.
- **SNS** is best for broadcasting messages to multiple subscribers and fan-out scenarios.
- **Kinesis** is designed for real-time data streaming and processing with high throughput and ordering guarantees within shards.
