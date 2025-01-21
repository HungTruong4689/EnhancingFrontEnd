# S3 Lifecycle in AWS

Amazon S3 provides lifecycle policies to manage your objects so that they are stored cost-effectively throughout their lifecycle. You can use these policies to transition objects to different storage classes or expire them after a specified period.

## Key Features

- **Transition Actions**: Define when objects transition to another storage class.
    - **Standard-IA**: Infrequent Access
    - **One Zone-IA**: Lower-cost option for infrequent access
    - **Glacier**: Long-term archival
    - **Glacier Deep Archive**: Lowest-cost storage for long-term archival

- **Expiration Actions**: Define when objects expire and are permanently deleted.

## Example Lifecycle Policy

```json
{
    "Rules": [
        {
            "ID": "Transition to Standard-IA after 30 days",
            "Status": "Enabled",
            "Prefix": "",
            "Transitions": [
                {
                    "Days": 30,
                    "StorageClass": "STANDARD_IA"
                }
            ]
        },
        {
            "ID": "Transition to Glacier after 365 days",
            "Status": "Enabled",
            "Prefix": "",
            "Transitions": [
                {
                    "Days": 365,
                    "StorageClass": "GLACIER"
                }
            ]
        },
        {
            "ID": "Expire after 2 years",
            "Status": "Enabled",
            "Prefix": "",
            "Expiration": {
                "Days": 730
            }
        }
    ]
}
```

## Benefits

- **Cost Management**: Optimize storage costs by transitioning objects to more cost-effective storage classes.
- **Data Retention**: Automatically manage the lifecycle of your data, ensuring compliance with data retention policies.

For more details, refer to the [AWS S3 Lifecycle Documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html).