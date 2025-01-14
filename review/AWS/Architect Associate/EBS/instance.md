# EC2 Instance Store

## Overview
Amazon EC2 instance store provides temporary block-level storage for your instance. This storage is located on disks that are physically attached to the host computer.

## Key Features
- **High I/O Performance**: Instance store volumes offer very high random I/O performance and are a good option for temporary storage of information that changes frequently.
- **Ephemeral Storage**: Data in instance store is lost when the instance is stopped or terminated.
- **No Additional Cost**: Instance store volumes are included in the cost of the instance.

## Use Cases
- **Buffer and Cache Storage**: Ideal for temporary storage of data that is frequently accessed and updated.
- **Scratch Data**: Suitable for temporary storage of data during processing or computation.

## Limitations
- **Data Persistence**: Data is lost when the instance is stopped or terminated.
- **Limited Size**: The size of instance store volumes is fixed and cannot be modified.

## Best Practices
- **Backup Important Data**: Regularly back up important data to persistent storage such as Amazon EBS or S3.
- **Use for Temporary Data**: Use instance store for temporary data that can be regenerated or is not critical.

## Conclusion
EC2 instance store provides high-performance temporary storage for EC2 instances, suitable for specific use cases where data persistence is not a requirement.


## Local EC2 Instance Store

### Overview
Local EC2 instance store refers to the storage that is physically attached to the host computer of an EC2 instance. This storage is temporary and provides high I/O performance.

### Key Features
- **High I/O Performance**: Local instance store offers high random I/O performance, making it suitable for temporary data storage.
- **Ephemeral Storage**: Data stored in the local instance store is lost when the instance is stopped or terminated.
- **No Additional Cost**: The cost of local instance store volumes is included in the cost of the instance.

### Use Cases
- **Temporary Data Storage**: Ideal for storing temporary data that is frequently accessed and updated.
- **Scratch Space**: Suitable for use as scratch space during data processing or computation.

### Limitations
- **Data Volatility**: Data is not persistent and will be lost if the instance is stopped or terminated.
- **Fixed Size**: The size of the local instance store is fixed and cannot be changed.

### Best Practices
- **Regular Backups**: Regularly back up important data to persistent storage solutions like Amazon EBS or S3.
- **Temporary Data Usage**: Use local instance store for data that can be easily regenerated or is not critical.

### Conclusion
Local EC2 instance store provides high-performance, temporary storage for EC2 instances, making it suitable for specific use cases where data persistence is not required.