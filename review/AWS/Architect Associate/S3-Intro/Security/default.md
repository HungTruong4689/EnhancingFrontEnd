# Default Encryption of S3 in AWS

Amazon S3 offers the ability to automatically encrypt data at rest. This feature is known as default encryption. When you enable default encryption for an S3 bucket, all new objects stored in the bucket are automatically encrypted using the specified encryption method.

## Steps to Enable Default Encryption

1. **Sign in to the AWS Management Console** and open the Amazon S3 console.
2. **Choose the bucket** you want to enable default encryption for.
3. **Select the "Properties" tab**.
4. **Scroll down to the "Default encryption" section** and click "Edit".
5. **Choose the encryption method**:
    - **SSE-S3**: Server-Side Encryption with Amazon S3-Managed Keys.
    - **SSE-KMS**: Server-Side Encryption with AWS KMS-Managed Keys.
6. **Save changes**.

## Encryption Methods

- **SSE-S3**: Encrypts each object with a unique key. Amazon S3 manages the keys.
- **SSE-KMS**: Uses AWS Key Management Service (KMS) to manage encryption keys. Provides additional features such as key rotation and access control.

## Benefits of Default Encryption

- **Data Protection**: Ensures that data is encrypted at rest, providing an additional layer of security.
- **Compliance**: Helps meet regulatory and compliance requirements for data encryption.
- **Ease of Use**: Automatically encrypts new objects without requiring changes to applications.

For more detailed information, refer to the [AWS S3 Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html).
