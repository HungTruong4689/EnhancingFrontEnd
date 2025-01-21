# S3 CORS in AWS

## Introduction
Cross-Origin Resource Sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated. AWS S3 supports CORS to enable web applications to interact with resources in S3 buckets.

## Configuring CORS on an S3 Bucket
To configure CORS on an S3 bucket, you need to add a CORS configuration to the bucket. This configuration is a JSON document that specifies the allowed origins, HTTP methods, and other settings.

### Example CORS Configuration
```json
{
    "CORSRules": [
        {
            "AllowedOrigins": ["*"],
            "AllowedMethods": ["GET", "POST", "PUT"],
            "AllowedHeaders": ["*"],
            "MaxAgeSeconds": 3000,
            "ExposeHeaders": ["x-amz-server-side-encryption"]
        }
    ]
}
```

### Steps to Add CORS Configuration
1. Open the Amazon S3 console.
2. Choose the bucket you want to configure.
3. Choose the **Permissions** tab.
4. Scroll down to the **Cross-origin resource sharing (CORS)** section.
5. Choose **Edit**.
6. Enter the CORS configuration in the text box.
7. Choose **Save changes**.

## Conclusion
Configuring CORS on your S3 bucket allows your web applications to interact with the resources stored in the bucket securely. Make sure to tailor the CORS configuration to your specific needs to ensure the security and functionality of your application.

For more information, refer to the [AWS S3 CORS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html).