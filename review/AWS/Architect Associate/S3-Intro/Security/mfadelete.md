# MFA Delete on S3 of AWS

## Overview
MFA (Multi-Factor Authentication) Delete is an additional layer of security for Amazon S3 buckets. It requires the user to authenticate with a second factor before they can delete objects or change the versioning state of the bucket.

## Enabling MFA Delete

### Prerequisites
- An AWS account with administrative access.
- An MFA device (hardware or virtual).

### Steps to Enable MFA Delete

1. **Enable Versioning on the S3 Bucket**
    - Go to the S3 console.
    - Select the bucket you want to enable MFA Delete on.
    - Go to the "Properties" tab.
    - Click on "Versioning" and enable it.

2. **Enable MFA Delete Using AWS CLI**
    - Open your terminal.
    - Use the following command to enable MFA Delete:
      ```sh
      aws s3api put-bucket-versioning --bucket your-bucket-name --versioning-configuration Status=Enabled,MFADelete=Enabled --mfa "arn:aws:iam::account-id:mfa/your-mfa-device serial-number your-mfa-code"
      ```

## Using MFA Delete

### Deleting Objects with MFA Delete Enabled
- When you attempt to delete an object or change the versioning state, you will be prompted to provide MFA authentication.

### Example Command
```sh
aws s3api delete-object --bucket your-bucket-name --key your-object-key --mfa "arn:aws:iam::account-id:mfa/your-mfa-device serial-number your-mfa-code"
```

## Best Practices
- Regularly rotate your MFA device.
- Ensure that only authorized users have access to the MFA device.
- Monitor bucket activities using AWS CloudTrail.

## Conclusion
Enabling MFA Delete on your S3 buckets adds an extra layer of security, ensuring that only authenticated users can perform critical operations.
