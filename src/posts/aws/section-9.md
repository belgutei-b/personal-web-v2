---
title: 9. RDS + Aurora
date: 25 Sep, 2026
tags: ["aws"]
---

# Relational Database Service (RDS)

- managed DB service that use SQL as a query language
    - AWS provide services on top of database such as
    - OS patching / disaster recovery
    - continuous backups and restores specific timestamps
    - vertical & horizontal scaling capability
    - storage backed by EBS
    - can't log into underlying ec2 instance
- auto scale
    - when the current usage of RDS database reaches the certain threshold (x% of the max capacity), it automatically increases the capacity
    - can set up a hard storage limit
- Read replicas
    - QUERY
        1. primary executes the query
        2. change is recorded in the replication log
        3. send ASYNC request to the replicas
        4. replica applies change
    - NOTE: the data in the read replica could be older if the ASYNC request from the primary hasn't been processed yet
    - USE CASE: running an anylitics program in the main database could affect the users (longer request time). with replicas, the users wouldn't get affected
    - COST: it is free to make replica AZ to AZ. It only costs when it moves regions
- RDS multi AZ
    - goal: disaster recovery
    - QUERY
        1. primary execute the query
        2. send SYNC request
        3. respond to the query after sync request
    - it ensures that data consistency and get ready to start using secondary AZ when primary AZ goes down

# Amazon Aurora
- AWS Cloud Optimized & have a better performance than native Postgres & SQL on RDS
- Storage: 10GB to 256TB
- Up to 10 replicas and replica process is faster
- Structure
    - 6 copies of data across 3 AZ
    - up to 15 Aurora read (not each reader has its own read replica)
- self healing with peer-to-peer replication
- storage is striped across 100s of volumes
- WRITER ENDPOINT: main write storage
- READER ENDOINT: Load Balancer for read replicas. Balancing connections
- AURORA Replica: seperate compute instances sharing Aurora's distributed cluster storage

# RDS proxy

By using an existing connectionn to the db, it would saves on CPU & memory of the db.
- application making a query to the db
    - open a DB connection
    - query
    - close a DB connection
- with RDS proxy
    - borrow existing connection
    - query
    - return connection to pool
