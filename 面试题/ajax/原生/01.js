var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')

//公开文件夹
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules')))
app.use('/public/', express.static(path.join(__dirname, './public/')))

//express-art-template 的配置
app.engine('html', require('express-art-template'))

// 默认就是 ./views 目录
app.set('views', path.join(__dirname, './views/')) 

//body-parse的配置
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())




app.get('/',function(req,res){
    res.render('index.html')
})

app.post('/check',function(req,res){
    console.log(req.body)
    var body = req.body
    if(body.username === 'admin' && body.password === '123'){
        res.send('1')
    }
    else{
        res.send('2')
    }

})

app.listen(5000,function(){
    console.log('running');
    
})