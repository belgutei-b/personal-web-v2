---
title: 12. S3 Intro
date: 27 Sep, 2026
tags: ["aws"]
---

# Intro to S3

It is an object storage on AWS.
- stores objects (files) in buckets (directories)
- buckets are defined in **region** level
- max object size is **50TB**
    - to upload more than **5GB**, must use "multi part upload"

### S3 Versioning
- enabled in **bucket** level
- all the files that uploaded before versioning gets a version **null**
- suspending versioning keeps all the prevsious versions

### S3 Replication
- must enable **versioning**
- CRR (Cross Region Replication)
- SRR (Same Region Replication)
- copying is ASYNC
- buckets can be in different accounts
- after enabling replication, all the files added to the source is added to the destination bucket and marked as replica.
    - it is not chaining (if `bucket1 -> bucket2` and `bucket2 -> bucket3`, adding to `bucket1` wouldn't get added to `bucket3`)
    - to achieve bucket1 -> bucket3, make replication for `bucket1 -> bucket3`
- deleting depends on whether it is deleted normally or permanently deleted. When replicating, you can choose whether Delete Marker (DM) replication is ON.

| Delete type | Bucket 1 (source) | Bucket 2 (destination) |
|---|---|---|
| Normal delete, delete marker replication **OFF** (default) | Hidden (delete marker added) | Still visible |
| Normal delete, delete marker replication **ON** | Hidden (delete marker added) | Hidden (delete marker replicated) |
| Delete with specific version ID | Permanently deleted | Still visible (never replicated) |

### Glaciar S3 Tier

- retrieve the data in either
    - 12 hours
    - 48 hours