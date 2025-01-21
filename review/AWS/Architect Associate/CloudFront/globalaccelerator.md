# AWS Global Accelerator

## Overview
AWS Global Accelerator is a networking service that improves the availability and performance of your applications with local or global users. It provides static IP addresses that act as a fixed entry point to your application endpoints in one or more AWS Regions.

## Key Features
- **Static IP Addresses**: Provides two static IP addresses for your application.
- **Global Performance**: Routes traffic to the optimal endpoint based on performance, improving latency and availability.
- **Health Checks**: Continuously monitors the health of your application endpoints.
- **DDoS Protection**: Integrated with AWS Shield for protection against DDoS attacks.

## Use Cases
- **Global Applications**: Improve performance for applications with users distributed globally.
- **Disaster Recovery**: Automatically reroute traffic to healthy endpoints in case of failure.
- **Gaming**: Reduce latency and improve user experience for online games.

## How It Works
1. **Create an Accelerator**: Define your accelerator and assign static IP addresses.
2. **Configure Listeners**: Set up listeners to process incoming traffic.
3. **Add Endpoint Groups**: Specify the AWS Regions and endpoints to route traffic to.
4. **Traffic Routing**: Global Accelerator routes user traffic to the optimal endpoint based on health and performance.

## Pricing
AWS Global Accelerator pricing is based on two components:
- **Fixed Fee**: Charged hourly for each accelerator.
- **Data Transfer**: Charged per GB of data transferred through the accelerator.

For detailed pricing information, visit the [AWS Global Accelerator Pricing](https://aws.amazon.com/global-accelerator/pricing/) page.

## Resources
- [AWS Global Accelerator Documentation](https://docs.aws.amazon.com/global-accelerator/)
- [Getting Started with AWS Global Accelerator](https://aws.amazon.com/global-accelerator/getting-started/)
- [AWS Global Accelerator FAQs](https://aws.amazon.com/global-accelerator/faqs/)
