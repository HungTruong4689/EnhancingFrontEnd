# Using ALB as an Origin in AWS CloudFront

## Introduction
Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds. You can use an Application Load Balancer (ALB) as an origin for CloudFront to distribute incoming traffic across multiple targets, such as EC2 instances, in one or more Availability Zones.

## Steps to Configure ALB as an Origin

### Step 1: Create an Application Load Balancer
1. Open the Amazon EC2 console.
2. In the navigation pane, under "Load Balancing," choose "Load Balancers."
3. Choose "Create Load Balancer."
4. Select "Application Load Balancer" and follow the prompts to configure your ALB.

### Step 2: Register Targets with the ALB
1. After creating the ALB, navigate to the "Target Groups" section.
2. Create a target group and register your EC2 instances or other resources with the target group.
3. Ensure that the health checks are configured correctly for your targets.

### Step 3: Create a CloudFront Distribution
1. Open the Amazon CloudFront console.
2. Choose "Create Distribution."
3. Select "Web" and proceed to the distribution settings.
4. In the "Origin Settings" section, specify the DNS name of your ALB.
5. Configure other settings as needed, such as cache behaviors, SSL/TLS settings, and logging.

### Step 4: Update DNS Settings
1. Update your DNS records to point to the CloudFront distribution domain name.
2. This ensures that incoming requests are routed through CloudFront to your ALB.

## Conclusion
By using an ALB as an origin for CloudFront, you can leverage the benefits of both services to improve the performance, scalability, and security of your applications. This setup allows you to distribute traffic efficiently and handle varying loads with ease.

## References
- [Amazon CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [Amazon EC2 Documentation](https://docs.aws.amazon.com/ec2/)
- [AWS Application Load Balancer Documentation](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/)
