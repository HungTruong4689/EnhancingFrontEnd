# AWS CloudFront

## Overview
Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.

## Key Features
- **Global Distribution**: Uses a network of edge locations worldwide to deliver content with low latency.
- **Security**: Integrates with AWS Shield, AWS Web Application Firewall (WAF), and SSL/TLS encryption.
- **Customizable**: Allows for custom domain names, custom SSL certificates, and URL rewriting.
- **Scalable**: Automatically scales to handle sudden traffic spikes.

## Use Cases
- **Website Acceleration**: Improves load times for websites by caching content at edge locations.
- **Live and On-Demand Video Streaming**: Delivers high-quality video content to a global audience.
- **API Acceleration**: Reduces latency for API responses by caching at edge locations.
- **Software Distribution**: Efficiently distributes software updates and patches.

## Pricing
CloudFront pricing is based on data transfer out, HTTP/HTTPS requests, and additional features like invalidation requests and field-level encryption.

## Getting Started
1. **Create a CloudFront Distribution**: Set up a new distribution from the AWS Management Console.
2. **Configure Origins and Behaviors**: Specify the origin servers and configure caching behaviors.
3. **Deploy and Test**: Deploy the distribution and test the content delivery performance.

## Resources
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
- [AWS CloudFront Pricing](https://aws.amazon.com/cloudfront/pricing/)
- [AWS CloudFront FAQs](https://aws.amazon.com/cloudfront/faqs/)
