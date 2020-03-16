#!/bin/sh

psql -c "DROP TABLE IF EXISTS cars;"

psql -c "CREATE TABLE cars (registration VARCHAR(50) PRIMARY KEY, color VARCHAR(50), mileage INT, topSpeed INT);"

psql -c "\\copy cars FROM /opt/injest/bin/data.csv CSV"
