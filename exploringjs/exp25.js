const users=[
    {"firstName":"first","lastName":"last1",age:23},
    {"firstName":"first2","lastName":"last2",age:24},
    {"firstName":"first3","lastName":"last3",age:25},
    {"firstName":"firs4","lastName":"last4",age:26}

]

const output=users.findOne({firstName:"firstName"})
console.log(output)