# customers_REST_API

* After cloning run
*     npm install
* This will download all dependencies declared in package.json
*
* For running the service run
*     node service.js
* For running costumer 1
*     node consumers/consumer1.js
* For running costumer 2
*     node consumers/consumer2.js
* You can test the service on:
*     http://localhost:8080/costumers

## Service and the costumers

The response of the service should look like: .

```{
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

The response of costumer 1 should look like: .

```{
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

The response of costumer 2 should look like: .

```{
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
## Contracts

* The respons is the hole list of costumers (with attributes)
* Die Applikation erstellt dann eine Datenbank, wenn noch keine Vorhanden ist. Wenn eine vorhanden ist, wird es verwendet.
