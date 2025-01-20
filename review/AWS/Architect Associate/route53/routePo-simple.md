# Route 53 Simple Routing Policy

## Overview
The Simple Routing Policy is the default routing policy in Amazon Route 53. It is used to route traffic to a single resource, such as a web server or an Amazon S3 bucket.

## Use Cases
- Single web server
- Single Amazon S3 bucket
- Any single resource endpoint

## Configuration
1. **Create a Hosted Zone**: 
    - Go to the Route 53 console.
    - Click on "Create Hosted Zone".
    - Enter the domain name and click "Create".

2. **Create a Record Set**:
    - In the hosted zone, click on "Create Record Set".
    - Enter the name (subdomain) and select the type (A, AAAA, CNAME, etc.).
    - Enter the value (IP address, domain name, etc.).
    - Leave the routing policy as "Simple".
    - Click "Create".

## Example
```markdown
- Hosted Zone: example.com
- Record Set:
  - Name: www.example.com
  - Type: A
  - Value: 192.0.2.1
  - Routing Policy: Simple
```

## Benefits
- Easy to configure
- Suitable for simple use cases

## Limitations
- Not suitable for complex routing requirements
- No health checks

## Conclusion
The Simple Routing Policy is ideal for straightforward scenarios where traffic needs to be routed to a single resource. For more complex routing needs, consider using other Route 53 routing policies such as Weighted, Latency, or Failover.
