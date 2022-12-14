
# API

## Distance calculator for train stations

There are around 360 train stations in Germany that are served by ICs and ICEs. Every train station has
a unique two- to six-digit abbreviation, the so-called DS100 code. The list of all
Train stations are provided by DB Station&Service AG as a CSV file. The train stations that
Long-distance traffic are marked with FV in the traffic column. FV stands for long-distance transport.

## Task 
Providing a REST interface. For example, the distance between
Frankfurt Main Hbf (FF) and Berlin Hbf (BLS) should determine the service following REST interface
to offer:

``` GET /api/v1/distance/FF/BLS ```

The following JSON response is expected as an answer:

``` {
"from": "Frankfurt(Main)Hbf",
"to": "Berlin Hbf",
"distance": 423,
"unit": "km"
} 
```


## Converting the CSV file into a JSON format

1. To convert the CSV file you have to enter the following command:

``` npx ts-node src/utils/csv2json.ts ```


2. Make sure that the CSV file to be converted is in:

``` src/utils/files ```

3. create an interface for your Json file to be generated  


## Frontend-Part

[Here is the link to the frontend part](https://github.com/MehmetC80/db-frontend)


## Online 

[Here is the link to online View](https://d-bahn.memozone.de/)