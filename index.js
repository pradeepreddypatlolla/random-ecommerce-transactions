
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function randomDatebetweenInterval(start,end,startHour,endHour){

    let date = new Date(+start+Math.random()*(end-start));
    let hour = startHour +Math.random()*(endHour-startHour) | 0;
    date.setHours(hour)
    return date

}

const products = [
    {   id:'P1',
        title:"iPhone13",
        price:62000,
        category:'mobiles'
    },
    {   id:'P2',
        title:"iPhone13 Mini",
        price:54900,
        category:'mobiles'
    },
    {   id:'P3',
        title:"iPhone13 Pro",
        price:106000,
        category:'mobiles'
    },
    {   id:'P4',
        title:"iPhone13 Pro Max",
        price:109900,
        category:'mobiles'
    },
    {   id:'P5',
        title:"iPhone14",
        price:71900,
        category:'mobiles'
    },
    {   id:'P6',
        title:"iPhone14 Pro",
        price:119900,
        category:'mobiles'
    },
    {   id:'P7',
        title:"iPhone14 Pro Max",
        price:139900,
        category:'mobiles'
    },
    {   id:'P8',
        title:"iPad Mini",
        price:49900,
        category:'tablets'
    },
    {   id:'P9',
    title:"iPad",
    price:44500,
    category:'tablets'
    },
    {   id:'P10',
    title:"iPad Air",
    price:59900,
    category:'tablets'
    },
    {   id:'P11',
    title:"iPad Pro",
    price:81900,
    category:'tablets'
    },
    {   id:'P12',
    title:"Macbook Air",
    price:99900,
    category:'laptops'
    }   ,
    {   id:'P13',
    title:"Macbook Pro",
    price:129900,
    category:'laptops'
    },
    {   id:'P14',
    title:"Apple Watch Series 8",
    price:45900,
    category:'watches'
    },
    {   id:'P15',
    title:"Apple Watch SE",
    price:29900,
    category:'watches'
    },
    {   id:'P16',
    title:"Apple Watch Ultra",
    price:89900,
    category:'watches'
    },
    {   id:'P17',
    title:"Airpods",
    price:14900,
    category:'earphones'
    },
    {   id:'P18',
    title:"Airpods Pro",
    price:26900,
    category:'earphones'
    },


]

function getTransactions(count=10){
    if(count>10000){
        return "Transactions count should be less than 10,000"
    }
    let transactionsData = []
    for(let i=0;i<count;i++){
        let transaction={}
        transaction.transactionId=1000+i
        let randomProduct = products[randomIntFromInterval(0,17)]
        transaction.product = randomProduct.title
        transaction.productId=randomProduct.id
        let quantity= randomIntFromInterval(1,4)
        transaction.quantity =quantity
        transaction.timeStamp = randomDatebetweenInterval(new Date(2021,0,1),new Date(),0,24)
        transaction.category = randomProduct.category
        transaction.pricePerOne = randomProduct.price
        transaction.totalPrice = randomProduct.price * quantity
        transactionsData.push(transaction)
    }
    transactionsData.sort((a,b)=>a.timeStamp-b.timeStamp)
    return transactionsData
}

module.exports = {getTransactions}