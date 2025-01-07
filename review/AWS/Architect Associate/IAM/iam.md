# Users, Groups, and Policies in AWS

## Users
In AWS Identity and Access Management (IAM), a user is an entity that you create in AWS to represent the person or application that interacts with AWS services and resources. Users have unique credentials and permissions.

## Groups
A group is a collection of IAM users. You can use groups to specify permissions for multiple users, which can make it easier to manage permissions for those users. For example, you could have a group named "Developers" and give that group the permissions to access certain AWS services.

## Policies
Policies are documents that define permissions. Policies are attached to users, groups, or roles and define what actions are allowed or denied. Policies are written in JSON and specify the actions, resources, and conditions under which actions are allowed or denied.

### Example Policy
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "s3:ListBucket",
            "Resource": "arn:aws:s3:::example_bucket"
        }
    ]
}
```

This example policy allows the `s3:ListBucket` action on the `example_bucket` resource.

## Best Practices
- **Least Privilege**: Grant only the permissions required to perform a task.
- **Use Groups**: Assign permissions to groups rather than individual users.
- **Regular Audits**: Regularly review and audit permissions to ensure they are still needed.

For more information, refer to the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html).

## Roles
In AWS Identity and Access Management (IAM), a role is an IAM identity that you can create in your account that has specific permissions. A role is intended to be assumable by anyone who needs it. Roles are similar to users in that they are AWS identities with permissions policies that determine what the identity can and cannot do in AWS.

### Example Role
```json
{
    "RoleName": "example-role",
    "AssumeRolePolicyDocument": {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {
                    "Service": "ec2.amazonaws.com"
                },
                "Action": "sts:AssumeRole"
            }
        ]
    },
    "Description": "Example role for EC2 instances",
    "MaxSessionDuration": 3600
}
```

This example role allows EC2 instances to assume the role and perform actions defined by the attached policies.

### Use Cases for Roles
- **Cross-Account Access**: Allow users from one AWS account to access resources in another account.
- **AWS Services**: Grant permissions to AWS services to perform actions on your behalf.
- **Federated Users**: Allow users from an external identity provider to access AWS resources.

For more information, refer to the [AWS IAM Roles documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html).