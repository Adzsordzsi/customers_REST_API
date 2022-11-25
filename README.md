# REST API with costumer-driven contract testing

This project is developed with node.js (javaScript)
The contract testing is done by using postman json schemas

    - created test with postman
    - created json schema with https://jsonschema.net/#/ for the requied json attributes
    - created pre-request script with the json schema
    - created this postman request and saved as collection
    - exported collection as json file and pasted into the contracts folder in this project
    - running this json file with imported 'newman' module in the project does the contract testing according to the schema

After cloning run the following command:
*     npm install
  This will download all dependencies declared in package.json

For running the service run this command:
*     node service.js
For running costumer 1 run this command:
*     node consumers/consumer1.js
  with running the consumer 1 the contract testing is triggered too

For running costumer 2 run this command:
*     node consumers/consumer2.js
  with running the consumer 2 the contract testing is triggered too

You can test the service on:
*     http://localhost:8080/costumers

## Service and the costumers

The response of the service should look like this:

```JSON
{
 "costumers": [
  {
   "name": "max mustermann",
   "address": "1040 Wien Musterstrasse 13",
   "birth_date": "1995.02.14",
   "email": "maxmus@gmail.com",
   "status": "positiv",
   "more": "something more1",
   "financial_products": [
    {
     "name": "Apfel",
     "balance": 5,
     "product_code": "133-01",
     "interest_rate": "3",
     "among_others": "something others"
    }
   ]
  }
 ]
}
```

The response of consumer 1 should look like this:

```JSON
{
  "costumers": [
    {
      "name": "max mustermann",
      "email": "maxmus@gmail.com",
      "status": "maxmus@gmail.com"
    }
  ]
}

```

The response of consumer 2 should look like this:

```JSON
{
  "costumers": [
    { "name": "max mustermann", "aggregated_balance": 15 }
  ]
}

```
## Contracts

* Every contract test tests if the endpoint **`/costumers`** available is


* The first json schema tests the following rules for the costumer 1:
  *  required attributes: **`costumers`**: [ **`name`**, **`email`**, **`status`** ]
  *  email should match the patten: **`^\\S+@\\S+\\.\\S+$`**
  *  status should match one of the enum entries: **`positiv`** or **`negativ`**


* The second json schema tests the following rules for the costumer 2:
  *  required attributes: **`costumers`**: [ **`name`**, **`financial_products`**: [ **`balance`** ] ]
  *  balance should be the format: **`number`**

Successfully tested contracts have the output like this:
```
GET http://localhost:8080/costumers [200 OK, 3.7kB, 22ms]
✓  Schema should be correct

┌─────────────────────────┬──────────────────┬──────────────────┐
│                         │         executed │           failed │
├─────────────────────────┼──────────────────┼──────────────────┤
│              iterations │                1 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│                requests │                1 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│            test-scripts │                1 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│      prerequest-scripts │                1 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│              assertions │                1 │                0 │
├─────────────────────────┴──────────────────┴──────────────────┤
│ total run duration: 65ms                                      │
├───────────────────────────────────────────────────────────────┤
│ total data received: 3.54kB (approx)                          │
├───────────────────────────────────────────────────────────────┤
│ average response time: 22ms [min: 22ms, max: 22ms, s.d.: 0µs] │
└───────────────────────────────────────────────────────────────┘

```
If the contract test fails the output is like this:

```
GET http://localhost:8080/costumers [200 OK, 3.68kB, 22ms]
1. Schema should be correct

┌─────────────────────────┬──────────────────┬──────────────────┐
│                         │         executed │           failed │
├─────────────────────────┼──────────────────┼──────────────────┤
│              iterations │                1 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│                requests │                1 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│            test-scripts │                1 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│      prerequest-scripts │                1 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│              assertions │                1 │                1 │
├─────────────────────────┴──────────────────┴──────────────────┤
│ total run duration: 70ms                                      │
├───────────────────────────────────────────────────────────────┤
│ total data received: 3.51kB (approx)                          │
├───────────────────────────────────────────────────────────────┤
│ average response time: 22ms [min: 22ms, max: 22ms, s.d.: 0µs] │
└───────────────────────────────────────────────────────────────┘

#  failure                                detail

1.  AssertionError                         Schema should be correct                                                                                                                                 
                                           expected 'Missing required property: name' to be true                                                                                                    
                                           at assertion:0 in test-script                                                                                                                            
                                           inside "http://localhost:8080/costumers"  
```
