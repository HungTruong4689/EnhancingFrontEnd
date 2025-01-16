# SSL in AWS Load Balancer

## Overview
Secure Sockets Layer (SSL) is a standard security technology for establishing an encrypted link between a server and a client. In AWS, Elastic Load Balancers (ELB) support SSL termination, which means they can handle the SSL decryption process.

## Server Name Indication (SNI)
Server Name Indication (SNI) is an extension to the SSL/TLS protocol that allows multiple SSL certificates to be hosted on a single IP address. This is particularly useful for load balancers that need to serve multiple domains.

### Benefits of SNI
- **Cost-effective**: Reduces the need for multiple IP addresses.
- **Scalability**: Simplifies the management of SSL certificates for multiple domains.

### How SNI Works
When a client connects to a server, it includes the hostname it wants to connect to in the initial SSL handshake. The load balancer uses this information to select the appropriate SSL certificate to present to the client.

## Configuring SSL with SNI on AWS ELB
1. **Create or Import SSL Certificates**: Use AWS Certificate Manager (ACM) to create or import SSL certificates.
2. **Attach Certificates to Load Balancer**: In the ELB settings, attach the SSL certificates to the load balancer.
3. **Enable SNI**: Ensure that SNI is enabled to allow the load balancer to serve multiple SSL certificates.

## Conclusion
Using SSL with SNI on AWS Load Balancers enhances security and allows for efficient management of multiple domains. This setup is essential for modern web applications that require secure connections.
