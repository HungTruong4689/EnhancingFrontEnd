# S3 Event Notification in AWS

Amazon S3 can send event notifications when certain events happen in your bucket. These notifications can be sent to:

- Amazon Simple Notification Service (SNS) topic
- Amazon Simple Queue Service (SQS) queue
- AWS Lambda function

## Configuring Event Notifications

To configure event notifications, you can use the S3 console, AWS CLI, or AWS SDKs. Here is an example using the AWS CLI:

```sh
aws s3api put-bucket-notification-configuration --bucket your-bucket-name --notification-configuration file://notification.json
```

### Example `notification.json`

```json
{
    "LambdaFunctionConfigurations": [
        {
            "Id": "ExampleLambdaFunction",
            "LambdaFunctionArn": "arn:aws:lambda:us-west-2:123456789012:function:ExampleFunction",
            "Events": ["s3:ObjectCreated:*"]
        }
    ],
    "QueueConfigurations": [
        {
            "Id": "ExampleQueue",
            "QueueArn": "arn:aws:sqs:us-west-2:123456789012:ExampleQueue",
            "Events": ["s3:ObjectRemoved:*"]
        }
    ],
    "TopicConfigurations": [
        {
            "Id": "ExampleTopic",
            "TopicArn": "arn:aws:sns:us-west-2:123456789012:ExampleTopic",
            "Events": ["s3:ObjectRestore:Completed"]
        }
    ]
}
```

## Supported Event Types

- `s3:ObjectCreated:*`
- `s3:ObjectRemoved:*`
- `s3:ObjectRestore:*`
- `s3:Replication:*`
- `s3:ReducedRedundancyLostObject`

## Permissions

Ensure that the S3 bucket has the necessary permissions to publish to the SNS topic, SQS queue, or invoke the Lambda function.

## Example IAM Policy for Lambda

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "lambda:InvokeFunction",
            "Resource": "arn:aws:lambda:us-west-2:123456789012:function:ExampleFunction"
        }
    ]
}
```

## Conclusion

S3 event notifications are a powerful way to automate workflows and integrate S3 with other AWS services. By configuring event notifications, you can trigger actions in response to specific events in your S3 bucket.
