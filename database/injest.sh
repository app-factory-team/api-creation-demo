#!/bin/sh

docker run \
  -e PGPASSWORD=master \
  -e PGUSER=master \
  -e PGDATABASE=postgres \
  -e PGHOST=host.docker.internal \
  -v $(pwd)/injestBin:/opt/injest/bin \
  postgres:12.2-alpine \
  /bin/sh /opt/injest/bin/copy.sh
