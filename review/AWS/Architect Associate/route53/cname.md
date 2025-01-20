# CNAME and Alias in Route 53 (AWS)

## CNAME (Canonical Name) Record
- A CNAME record maps an alias name to a true or canonical domain name.
- Commonly used to map a subdomain such as `www` or `mail` to the domain hosting that content.
- Example: `www.example.com` -> `example.com`

### Key Points
- Cannot be used for the root domain (e.g., `example.com`).
- DNS resolution involves an additional lookup, which can introduce slight latency.

## Alias Record
- Alias records are specific to AWS Route 53.
- They map a domain name to an AWS resource such as an S3 bucket, CloudFront distribution, or another Route 53 record.
- Example: `example.com` -> `d123.cloudfront.net`

### Key Points
- Can be used for the root domain.
- No additional DNS lookup, which can improve performance.
- Supports AWS-specific targets and integrates seamlessly with AWS services.

## Comparison
| Feature           | CNAME Record                | Alias Record                  |
|-------------------|-----------------------------|-------------------------------|
| Root Domain       | Not Supported               | Supported                     |
| AWS Integration   | Limited                     | Full Integration              |
| DNS Lookup        | Additional Lookup Required  | No Additional Lookup          |
| Use Case          | General DNS Mapping         | AWS Resource Mapping          |

## When to Use
- **CNAME Record**: When you need to map subdomains to other domains.
- **Alias Record**: When you need to map your domain to AWS resources, especially for the root domain.
