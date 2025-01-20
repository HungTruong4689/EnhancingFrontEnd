# Route 53 and 3rd Party Registrar

## Overview
Amazon Route 53 is a scalable and highly available Domain Name System (DNS) web service. It can be used to manage your domain names and route internet traffic to your web applications.

## Using Route 53 with a 3rd Party Registrar
If your domain is registered with a third-party registrar, you can still use Route 53 to manage your DNS records. Here are the steps to do so:

### Step 1: Create a Hosted Zone in Route 53
1. Sign in to the AWS Management Console.
2. Open the Route 53 console.
3. Click on "Hosted zones" in the navigation pane.
4. Click on "Create hosted zone".
5. Enter your domain name and click "Create".

### Step 2: Update Name Servers with Your Registrar
1. After creating the hosted zone, note the name servers (NS) provided by Route 53.
2. Log in to your third-party registrar's website.
3. Find the option to manage your domain's DNS settings.
4. Replace the existing name servers with the ones provided by Route 53.
5. Save the changes.

### Step 3: Add DNS Records in Route 53
1. Go back to the Route 53 console.
2. Select your hosted zone.
3. Click on "Create record" to add DNS records (A, CNAME, MX, etc.) as needed for your domain.

## Conclusion
By following these steps, you can use Amazon Route 53 to manage DNS records for a domain registered with a third-party registrar. This allows you to take advantage of Route 53's features while keeping your domain registration with your preferred registrar.
