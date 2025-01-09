# Review of EC2 Purchase Options and Spot Instances

## EC2 Purchase Options

Amazon EC2 provides several purchasing options to help you optimize your costs based on your needs:

1. **On-Demand Instances**: Pay for compute capacity by the hour or second with no long-term commitments. Ideal for short-term, irregular workloads.
2. **Reserved Instances**: Provide a significant discount (up to 75%) compared to On-Demand pricing. Best for steady-state or predictable usage.
3. **Savings Plans**: Flexible pricing model that offers low prices on EC2, Lambda, and Fargate usage, in exchange for a commitment to a consistent amount of usage (measured in $/hour) for a 1 or 3 year term.
4. **Spot Instances**: Allow you to bid for unused EC2 capacity at a significant discount (up to 90%) compared to On-Demand prices. Suitable for flexible, interruption-tolerant workloads.
5. **Dedicated Hosts**: Physical servers with EC2 instance capacity fully dedicated to your use. Helps you meet compliance requirements and reduce costs by allowing you to use your existing server-bound software licenses.

## Spot Instances

Spot Instances are a cost-effective choice for running fault-tolerant workloads. Here are some key points:

- **Pricing**: Spot Instances are available at up to a 90% discount compared to On-Demand prices.
- **Interruption**: AWS can reclaim Spot Instances with a two-minute warning when it needs the capacity back.
- **Use Cases**: Ideal for batch processing, big data, containerized workloads, CI/CD, web services, and other flexible applications.
- **Spot Fleet**: Allows you to automatically request and manage multiple Spot Instances to meet your desired capacity and maintain availability.

### Benefits of Spot Instances

- **Cost Savings**: Significantly reduce your EC2 costs.
- **Scalability**: Access to additional compute capacity.
- **Flexibility**: Suitable for a wide range of applications that can handle interruptions.

### Managing Spot Instances

- **Spot Instance Requests**: You can request Spot Instances through the AWS Management Console, CLI, or API.
- **Spot Fleet**: Use Spot Fleet to manage a collection of Spot Instances and optionally On-Demand Instances.
- **Interruption Handling**: Implement strategies to handle interruptions, such as checkpointing, using multiple instance types, and diversifying across Availability Zones.

For more detailed information, refer to the [AWS EC2 Spot Instances documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html).

SAA - purchase options - ip4 charge - spot instance - spot fleet
