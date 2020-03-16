#!/bin/sh

mkdir -p data

docker run \
  --rm \
  --name local-postgres \
  -e POSTGRES_PASSWORD=master \
  -e POSTGRES_USER=master \
  -e POSTGRES_DB=postgres \
  -v $(pwd)/data:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres:12.2-alpine
