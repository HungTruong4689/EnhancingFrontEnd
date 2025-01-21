# Glacier Vault Lock & S3 Object Lock in AWS

## Glacier Vault Lock

Amazon S3 Glacier Vault Lock allows you to easily deploy and enforce compliance controls for individual S3 Glacier vaults with a vault lock policy. You can specify controls such as Write Once Read Many (WORM) in a Vault Lock policy and lock the policy from future edits. Once locked, the policy can no longer be changed.

### Key Features:
- **Compliance Enforcement**: Ensures that data cannot be altered or deleted for a specified period.
- **WORM Protection**: Write Once Read Many protection to prevent data modification.
- **Policy Locking**: Once a policy is locked, it cannot be changed.

## S3 Object Lock

Amazon S3 Object Lock enables you to store objects using a WORM model, which helps you prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely. This feature is useful for regulatory compliance and data protection.

### Key Features:
- **Retention Periods**: Set retention periods to protect objects for a fixed duration.
- **Legal Holds**: Place a legal hold on an object to prevent deletion.
- **Compliance Mode**: Ensures that an object version cannot be overwritten or deleted for the duration of the retention period.

### Usage Scenarios:
- **Regulatory Compliance**: Ensure data is immutable for compliance with regulations.
- **Data Protection**: Protect critical data from accidental or malicious deletion.

### Example:
```markdown
# Enable S3 Object Lock on a Bucket
aws s3api create-bucket --bucket my-bucket --object-lock-enabled-for-bucket

# Apply Retention Policy
aws s3api put-object-retention --bucket my-bucket --key my-object --retention '{"Mode": "COMPLIANCE", "RetainUntilDate": "2025-01-01T00:00:00Z"}'
```

By using Glacier Vault Lock and S3 Object Lock, you can ensure that your data is protected and compliant with various regulatory requirements.