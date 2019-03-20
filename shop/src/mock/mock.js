import Mock from 'mockjs' 
// import data from './data.json'

/*Mock.mock('http://www.alin.com/getlist',{data:data.list})


//mock第二种方法
Mock.mock('http://www.alin.com/getuser',{
    'name|2':'alin',//两个name  alinalin
    'age|18-30':20//age：18-30中的随机数  20只是表示数字类型
})

Mock.mock('http://www.alin.com/regexp',{
    'regexp1':/[a-z][A-Z][0-9]/,
    'regexp2':/\d{5,10}/
})

//占位符
Mock.mock('http://www.alin.com/list',{
    'info|10-20':[
        {
            'index|+1':1,
            'name':'@first @last',
            'id':'@integer(10000,99999)',
            'date':'@datetime',
            'img':'@image("200*200")',
            'text':'@sentence(6,22)'//6-22个单词
        }
    ]
});*/


//random
let Random=Mock.Random;
let productData = req=>{
    let productList=[];
    for(let i=0;i<100;i++){
       let product={
           name:Random.ctitle( 5,20 ),
           img:Random.dataImage( "125x125", 'VOGUE'+ Random.integer(1,100)),
           price:Random.integer(20,1000),
           owner:Random.cname()
       }
       productList.push(product)
    }
    return productList;
}
Mock.mock('http://www.alin.com/getVarietyItem',productData)
