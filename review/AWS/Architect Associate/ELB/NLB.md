# Network Load Balancer (NLB) in AWS

## Overview
A Network Load Balancer (NLB) is designed to handle millions of requests per second while maintaining ultra-low latencies. It operates at the connection level (Layer 4), routing connections to targets within Amazon Virtual Private Cloud (VPC) based on IP protocol data.

## Key Features
- **High Performance:** Capable of handling millions of requests per second.
- **Low Latency:** Provides ultra-low latencies for real-time applications.
- **Static IP Support:** Assigns a static IP address to the load balancer.
- **Zonal Isolation:** Isolates failures within a single zone, ensuring high availability.

## Use Cases
- **Real-time Applications:** Ideal for applications requiring high performance and low latency, such as gaming and financial services.
- **Microservices:** Efficiently distributes traffic across microservices.
- **IoT:** Handles large volumes of connections from IoT devices.

## Configuration
1. **Create a Load Balancer:**
    - Navigate to the EC2 Dashboard.
    - Select "Load Balancers" and click "Create Load Balancer."
    - Choose "Network Load Balancer."

2. **Configure Load Balancer:**
    - Specify a name, scheme (internet-facing or internal), and IP address type (IPv4 or dualstack).
    - Select the VPC and subnets.

3. **Configure Listeners and Routing:**
    - Add listeners (protocol and port).
    - Configure target groups and health checks.

4. **Register Targets:**
    - Add instances or IP addresses to the target group.

5. **Review and Create:**
    - Review the configuration and create the load balancer.

## Monitoring
- **CloudWatch Metrics:** Monitor NLB performance using Amazon CloudWatch.
- **Access Logs:** Enable access logs to capture detailed information about requests.

## Pricing
NLB pricing is based on the number of Network Load Balancer Capacity Units (NLCUs) used per hour and the number of Load Balancer Capacity Units (LCUs) used per hour.

For more details, refer to the [AWS NLB Pricing](https://aws.amazon.com/elasticloadbalancing/pricing/).

## Conclusion
AWS Network Load Balancer is a powerful tool for distributing traffic efficiently and reliably across your applications, ensuring high performance and availability.
