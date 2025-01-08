# Setting Up Roles for an EC2 Instance

## Step 1: Create an IAM Role
1. Open the IAM console.
2. In the navigation pane, choose **Roles** and then **Create role**.
3. Select **AWS service** and choose **EC2**.
4. Click **Next: Permissions**.
5. Attach the necessary policies for your instance.
6. Click **Next: Tags** (optional) and then **Next: Review**.
7. Enter a **Role name** and click **Create role**.

## Step 2: Attach the IAM Role to Your EC2 Instance
1. Open the EC2 console.
2. In the navigation pane, choose **Instances**.
3. Select the instance you want to attach the role to.
4. Choose **Actions**, **Security**, and then **Modify IAM role**.
5. Select the IAM role you created from the **IAM role** drop-down.
6. Click **Update IAM role**.

## Step 3: Verify the Role
1. Connect to your EC2 instance.
2. Use the AWS CLI to verify that the role is attached correctly:
    ```sh
    aws sts get-caller-identity
    ```

You have now successfully set up roles for your EC2 instance.

## Step 4: List All Users of an EC2 Instance

To list all users of an EC2 instance, you can use the following AWS CLI command:

```sh
aws iam list-users
```

This command will return a list of all IAM users in your AWS account. Note that this is not specific to the EC2 instance but lists all users in the account.