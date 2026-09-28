---
title: 13. Advanced S3
date: 28 Sep, 2026
tags: ["aws"]
---

# S3 Lifecycle Rules

Moving objects between storage classes.
- e.g. infrequently accessed objects can move from standard to standard IA

###  Transition Actions

Move from one storage class to different storage class after certain time
- Expiration Actions
    - configure objects to expire (delete) after some time
    - delete old versions after X time
    - delete incomplete multipart uploads
- Certain prefix
- Certain tags

### Storage class analysis

Helps to decide which storage class to use
- Recomended for Standard and Standard IA

# S3 Requester Pays

Owner stills pays for the storage class but the requester pays for the networking cost (data transfer)
- Useful for sharing large files
- Requester must be authenticated in AWS (AWS needs to bill the requester)

# S3 Event notification

Notify (by SNS, SQS or Lambda Function) when there is an event (object creation/removal...) in the bucket.
- Can be created using either **Event Notification** or **AWS EventBridge**.

# S3 Performance

- per prefix (prefix until the object name)
    - 3500 PUT/POST/COPY/DELETE operation per second
    - 5500 GET/HEAD operation per second
    - `/dir1/dir2/file1` & `/dir/file2` are different prefixes
- multipart upload
    - recommended for > `100MB`
    - must for > `5GB`
    - parellelize the upload
        - speed up the process
        - can recover in case of network failure
- S3 Transfer acceleration
    - when uploading across regions, it will upload by using `Edge Location`
    - source ->(by public internet) `Edge Location` at source -> (by private internet) `AWS server`
    - it will use less public internet (faster speed)
- Byte Range Fetches
    - Fetching specifc range

# S3 Batch Operation
Performing bulk operations in existing objects
- it manages
    - retries
    - progress
    - generate reports
    - sending completeion notification

