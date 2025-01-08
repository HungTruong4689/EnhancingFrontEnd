# SSH Hands-on with EC2 Instance

## Prerequisites
- AWS account
- AWS CLI installed and configured
- SSH client installed

## Steps

### 1. Launch an EC2 Instance
1. Open the [EC2 Dashboard](https://console.aws.amazon.com/ec2/).
2. Click on **Launch Instance**.
3. Choose an Amazon Machine Image (AMI).
4. Select an instance type (e.g., t2.micro).
5. Configure instance details, add storage, and add tags as needed.
6. Configure the security group to allow SSH (port 22) access.
7. Review and launch the instance.
8. Download the key pair (.pem file) and save it securely.

### 2. Connect to the EC2 Instance
1. Open your terminal.
2. Navigate to the directory where your key pair file is located.
3. Change the permissions of the key pair file:
    ```sh
    chmod 400 your-key-pair.pem
    ```
4. Connect to your instance using SSH:
    ```sh
    ssh -i "your-key-pair.pem" ec2-user@your-ec2-public-dns
    ```

### 3. Verify Connection
- Once connected, you should see a welcome message and a prompt from the EC2 instance.

### 4. Troubleshooting
- Ensure the security group allows inbound SSH traffic.
- Verify the correct public DNS and key pair are used.
- Check your network connection.

## Conclusion
You have successfully connected to your EC2 instance using SSH.
