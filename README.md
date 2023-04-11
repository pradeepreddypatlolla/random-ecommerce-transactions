# random-transactions-data
This package is used to generate random ecommerce transactions data.

# Installation
```
npm i random-transactions-data
```
# Usage

```
import {getTransactions} from 'random-transactions-data'

const data = getTransaction(count)
```

Here count is the number of random transactions to be generated. Default count value is 10 if you dont pass any count.

# Sample output
```
[
  {
    transactionId: 1000,
    product: 'Macbook Air',
    productId: 'P12',
    quantity: 4,
    timeStamp: 2021-07-21T09:11:30.866Z,
    category: 'laptops',
    pricePerOne: 99900,
    totalPrice: 399600
  },
  {
    transactionId: 1005,
    product: 'iPhone13',
    productId: 'P1',
    quantity: 4,
    timeStamp: 2021-11-09T06:03:46.334Z,
    category: 'mobiles',
    pricePerOne: 62000,
    totalPrice: 248000
  },
  {
    transactionId: 1001,
    product: 'iPhone13 Pro',
    productId: 'P3',
    quantity: 4,
    timeStamp: 2021-11-21T08:52:09.789Z,
    category: 'mobiles',
    pricePerOne: 106000,
    totalPrice: 424000
  },
  {
    transactionId: 1004,
    product: 'iPad Mini',
    productId: 'P8',
    quantity: 1,
    timeStamp: 2021-12-05T12:06:57.964Z,
    category: 'tablets',
    pricePerOne: 49900,
    totalPrice: 49900
  },
  {
    transactionId: 1006,
    product: 'iPad Mini',
    productId: 'P8',
    quantity: 1,
    timeStamp: 2022-01-28T12:23:06.103Z,
    category: 'tablets',
    pricePerOne: 49900,
    totalPrice: 49900
  },
  {
    transactionId: 1002,
    product: 'iPhone14 Pro',
    productId: 'P6',
    quantity: 1,
    timeStamp: 2022-02-20T08:00:20.049Z,
    category: 'mobiles',
    pricePerOne: 119900,
    totalPrice: 119900
  },
  {
    transactionId: 1003,
    product: 'Apple Watch Ultra',
    productId: 'P16',
    quantity: 3,
    timeStamp: 2022-03-14T14:37:12.779Z,
    category: 'watches',
    pricePerOne: 89900,
    totalPrice: 269700
  },
  {
    transactionId: 1007,
    product: 'iPad Mini',
    productId: 'P8',
    quantity: 3,
    timeStamp: 2022-06-02T13:31:34.076Z,
    category: 'tablets',
    pricePerOne: 49900,
    totalPrice: 149700
  },
  {
    transactionId: 1008,
    product: 'iPhone13 Pro',
    productId: 'P3',
    quantity: 4,
    timeStamp: 2023-03-05T10:31:43.816Z,
    category: 'mobiles',
    pricePerOne: 106000,
    totalPrice: 424000
  },
  {
    transactionId: 1009,
    product: 'iPhone14 Pro',
    productId: 'P6',
    quantity: 1,
    timeStamp: 2023-04-07T05:05:29.615Z,
    category: 'mobiles',
    pricePerOne: 119900,
    totalPrice: 119900
  }
]
```
