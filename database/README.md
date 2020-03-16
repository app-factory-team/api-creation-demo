# Running the database #

## Requirements ##

* [Docker](https://www.docker.com/)

## Running ##

1. Run the database

    ```sh
    sh run.sh
    ```

1. In a new terminal add the data to the database (Once you have ran the injest once you can skip this step)

    ```sh
    sh injest.sh
    ```

## Add more data ##

To add more data simply add more rows to [`injestBin/data.csv`](injestBin/data.csv).

To add more columns add them to [`injestBin/data.csv`](injestBin/data.csv) and update the commands in [`injestBin/copy.sh`](injestBin/copy.sh) to include the new column names.
