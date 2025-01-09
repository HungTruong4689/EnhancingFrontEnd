# Basic Concept of EC2 in AWS

Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.

## Key Features

- **Scalability**: Easily scale up or down based on demand.
- **Flexibility**: Wide selection of instance types optimized for different use cases.
- **Cost-Effective**: Pay only for the compute time you use.
- **Reliability**: Built on a highly reliable infrastructure.
- **Security**: Provides robust security features to control access to instances.

## Use Cases

- **Web Hosting**: Host websites and web applications.
- **Big Data**: Run big data applications like Hadoop.
- **Machine Learning**: Train and deploy machine learning models.
- **Batch Processing**: Perform batch processing jobs.

## Getting Started

1. **Launch an Instance**: Choose an Amazon Machine Image (AMI) and instance type.
2. **Connect to Your Instance**: Use SSH or RDP to connect to your instance.
3. **Configure Security**: Set up security groups and key pairs.
4. **Manage Your Instance**: Monitor and manage your instance using the AWS Management Console or CLI.

For more detailed information, refer to the [AWS EC2 Documentation](https://docs.aws.amazon.com/ec2/index.html).

## User Data in EC2

User data is a feature that allows you to run scripts and perform common automated configuration tasks during the launch of your EC2 instance. You can use user data to:

- **Install Software**: Automatically install software packages.
- **Run Commands**: Execute shell commands or scripts.
- **Configure Settings**: Set up configuration files or environment variables.

### Example

Here is an example of a simple user data script that installs Apache web server on an Amazon Linux instance:

```bash
#!/bin/bash
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
```

To add user data to your instance:

1. **Launch an Instance**: When configuring your instance, find the "Advanced Details" section.
2. **Enter User Data**: Paste your script into the "User data" field.
3. **Launch**: Complete the instance launch process.

For more information, refer to the [Running Commands on Your Linux Instance at Launch](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html) documentation.
