# Geolocation of CloudFront in AWS

Amazon CloudFront is a content delivery network (CDN) service that allows you to distribute content to users with low latency and high transfer speeds. One of the features of CloudFront is geolocation, which allows you to serve different content to users based on their geographic location.

## Key Features

- **Geolocation Headers**: CloudFront adds geolocation headers to requests, which you can use to customize content based on the user's location.
- **Geo Restriction**: You can restrict access to your content based on the geographic location of your viewers.
- **Lambda@Edge**: Use Lambda@Edge to run code closer to your users and customize the content that CloudFront delivers based on geolocation.

## Geolocation Headers

CloudFront provides several headers that contain geolocation information:

- `CloudFront-Viewer-Country`: The country code of the viewer.
- `CloudFront-Viewer-City`: The city of the viewer.
- `CloudFront-Viewer-Postal-Code`: The postal code of the viewer.
- `CloudFront-Viewer-Time-Zone`: The time zone of the viewer.

## Example Usage

Here is an example of how you can use Lambda@Edge to customize content based on the viewer's country:

```javascript
'use strict';
exports.handler = async (event) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;

    // Get the viewer's country from the CloudFront-Viewer-Country header
    const country = headers['cloudfront-viewer-country'][0].value;

    // Customize content based on the country
    if (country === 'US') {
        // Serve content for US users
    } else if (country === 'FR') {
        // Serve content for French users
    } else {
        // Serve default content
    }

    return request;
};
```

## Geo Restriction

To restrict access to your content based on geographic location:

1. Open the CloudFront console.
2. Select the distribution you want to update.
3. Choose the **Restrictions** tab.
4. Under **Geo Restriction**, choose **Edit**.
5. Select **Whitelist** or **Blacklist** and specify the countries.

## Conclusion

Using geolocation with Amazon CloudFront allows you to enhance the user experience by serving customized content and restricting access based on geographic location.

For more information, refer to the [Amazon CloudFront Developer Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html).


## Additional Resources

For more detailed information on geo restriction and other features of Amazon CloudFront, you can refer to the following resources:

- [Amazon CloudFront Geo Restriction](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html): Official documentation on how to configure geo restrictions in CloudFront.
- [AWS Lambda@Edge](https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html): Learn how to use Lambda@Edge to run code closer to your users and customize content delivery.
- [Amazon CloudFront Pricing](https://aws.amazon.com/cloudfront/pricing/): Understand the pricing model for CloudFront, including costs associated with geo restriction and other features.

These resources will help you get a deeper understanding of how to effectively use geolocation and geo restriction with Amazon CloudFront.