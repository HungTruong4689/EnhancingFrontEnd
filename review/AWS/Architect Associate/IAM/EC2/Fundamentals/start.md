# Creating and Managing EC2 Instances

## Creating a New EC2 Instance

1. **Log in to AWS Management Console**: Navigate to the EC2 Dashboard.
2. **Launch Instance**:
    - Click on the "Launch Instance" button.
    - Choose an Amazon Machine Image (AMI).
    - Select an instance type.
    - Configure instance details (number of instances, network settings, IAM role, etc.).
    - Add storage (EBS volumes).
    - Add tags (optional).
    - Configure security group (set up firewall rules).
    - Review and launch.
3. **Key Pair**: Create a new key pair or select an existing one to SSH into your instance.
4. **Launch**: Click on "Launch Instances" and wait for the instance to be initialized.

## Stopping an EC2 Instance

1. **Navigate to EC2 Dashboard**: Go to the "Instances" section.
2. **Select Instance**: Check the box next to the instance you want to stop.
3. **Instance State**: Click on the "Instance State" dropdown and select "Stop".
4. **Confirm**: Confirm the action if prompted.

## Terminating an EC2 Instance

1. **Navigate to EC2 Dashboard**: Go to the "Instances" section.
2. **Select Instance**: Check the box next to the instance you want to terminate.
3. **Instance State**: Click on the "Instance State" dropdown and select "Terminate".
4. **Confirm**: Confirm the action if prompted.

## Main Points When Starting or Stopping an Instance

- **Data Persistence**: Stopping an instance does not delete the attached EBS volumes, but terminating an instance does (unless the "Delete on Termination" option is unchecked).
- **Billing**: You are billed for the instance while it is running. Stopping the instance stops the billing for compute resources, but storage costs for EBS volumes still apply.
- **Elastic IPs**: If you have an Elastic IP associated with your instance, it will be disassociated when you stop or terminate the instance.
- **Security Groups**: Ensure your security groups are configured correctly to allow necessary traffic.
- **Backups**: Always back up important data before stopping or terminating an instance.
