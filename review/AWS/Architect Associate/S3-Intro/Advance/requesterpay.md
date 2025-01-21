# Requester Pays in Amazon S3

Amazon S3 supports a feature called "Requester Pays" where the requester, instead of the bucket owner, is charged for the data transfer and request costs.

## Key Points

- **Bucket Owner**: The person or entity that owns the S3 bucket.
- **Requester**: The person or entity that makes a request to access the data in the S3 bucket.

## How It Works

1. **Enable Requester Pays**: The bucket owner enables the Requester Pays feature on the S3 bucket.
2. **Accessing Data**: When a requester accesses data from the bucket, they are charged for the data transfer and request costs.
3. **Billing**: The requester's AWS account is billed for the costs associated with accessing the data.

## Use Cases

- **Public Data Sets**: Organizations that provide large public data sets can use Requester Pays to distribute the cost of data transfer to the users who access the data.
- **Cost Management**: Helps bucket owners manage costs by shifting the data transfer and request costs to the users who access the data.

## Enabling Requester Pays

To enable Requester Pays on an S3 bucket, use the following AWS CLI command:

```sh
aws s3api put-bucket-request-payment --bucket your-bucket-name --request-payment-configuration '{"Payer":"Requester"}'
```

## Accessing Requester Pays Buckets

When accessing a Requester Pays bucket, the requester must include the `x-amz-request-payer` header in their request:

```sh
aws s3 cp s3://your-bucket-name/your-object-name ./ --request-payer requester
```

## Considerations

- **Permissions**: The requester must have the necessary permissions to access the bucket and objects.
- **Costs**: Requesters should be aware of the costs associated with accessing data from a Requester Pays bucket.

For more information, refer to the [Amazon S3 documentation on Requester Pays](https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html).
