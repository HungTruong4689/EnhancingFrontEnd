# Amazon Kinesis Data Streams

Amazon Kinesis Data Streams (KDS) is a scalable and durable real-time data streaming service. It can continuously capture gigabytes of data per second from hundreds of thousands of sources such as website clickstreams, database event streams, financial transactions, social media feeds, IT logs, and location-tracking events.

## Key Features

- **Real-time processing**: Enables real-time analytics and processing of streaming data.
- **Scalability**: Automatically scales to match the throughput of your data.
- **Durability**: Data is replicated across multiple availability zones for high availability and durability.
- **Integration**: Easily integrates with other AWS services such as Lambda, S3, Redshift, and more.

## Use Cases

- **Real-time analytics**: Analyze data in real-time to gain insights and make decisions quickly.
- **Log and event data collection**: Collect and process log and event data from various sources.
- **Data lake ingestion**: Ingest data into a data lake for further analysis and processing.
- **Machine learning**: Feed real-time data into machine learning models for predictions and anomaly detection.

## Getting Started

1. **Create a Kinesis Data Stream**: Use the AWS Management Console, AWS CLI, or AWS SDKs to create a new data stream.
2. **Put Records**: Use the Kinesis API to put records into the stream.
3. **Process Records**: Use AWS Lambda, Kinesis Data Analytics, or Kinesis Client Library (KCL) to process records from the stream.

## Pricing

Amazon Kinesis Data Streams pricing is based on the number of shards you use, the amount of data you ingest, and the amount of data you retrieve. For detailed pricing information, visit the [Kinesis Data Streams pricing page](https://aws.amazon.com/kinesis/data-streams/pricing/).

## Resources

- [Amazon Kinesis Data Streams Documentation](https://docs.aws.amazon.com/kinesis/)
- [Getting Started with Amazon Kinesis Data Streams](https://docs.aws.amazon.com/streams/latest/dev/getting-started.html)
- [Amazon Kinesis Data Streams FAQs](https://aws.amazon.com/kinesis/data-streams/faqs/)
