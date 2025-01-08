# Security Groups and Classic Ports in EC2 of AWS

## Security Groups

Security groups act as a virtual firewall for your EC2 instances to control incoming and outgoing traffic. Here are some key points:

- **Stateful**: If you allow an incoming request from a specific IP address and port, the response is automatically allowed, regardless of outbound rules.
- **Rules**: You can add rules to each security group that allow traffic to or from specific IP addresses, CIDR blocks, or other security groups.
- **Default Security Group**: When you create a new VPC, a default security group is created. By default, it allows all outbound traffic and denies all inbound traffic.

### Example Security Group Rules

- **Inbound Rule**: Allow HTTP traffic from any IP address.
    ```
    Type: HTTP
    Protocol: TCP
    Port Range: 80
    Source: 0.0.0.0/0
    ```

- **Outbound Rule**: Allow all outbound traffic.
    ```
    Type: All traffic
    Protocol: All
    Port Range: All
    Destination: 0.0.0.0/0
    ```

## Classic Ports

Classic ports refer to well-known ports used by various services. Here are some common ones:

- **HTTP**: Port 80
- **HTTPS**: Port 443
- **SSH**: Port 22
- **RDP**: Port 3389
- **MySQL**: Port 3306
- **PostgreSQL**: Port 5432

### Example Usage

When setting up a web server on an EC2 instance, you might configure your security group to allow traffic on ports 80 (HTTP) and 443 (HTTPS).

- **Inbound Rule for HTTP**:
    ```
    Type: HTTP
    Protocol: TCP
    Port Range: 80
    Source: 0.0.0.0/0
    ```

- **Inbound Rule for HTTPS**:
    ```
    Type: HTTPS
    Protocol: TCP
    Port Range: 443
    Source: 0.0.0.0/0
    ```

By configuring these rules, you ensure that your web server can receive traffic on the standard web ports.
