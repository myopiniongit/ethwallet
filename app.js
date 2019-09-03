var express = require('express')
var fs = require('fs')
var app = express()
var Web3 = require('web3')
var indexRouter = require('./routes/index')
var topicRouter = require('./routes/topic')

//네트워크 이 부분도 
var mainnet = 'https://mainnet.infura.io/'
var ropsten = 'https://ropsten.infura.io'
var rinkeby = 'https://rinkeby.infura.io'
var local = 'http://127.0.0.1:8545/'
var web3 = new Web3(new Web3.providers.HttpProvider(ropsten))

app.use('/', indexRouter);
app.use('/topic', topicRouter);

//계정 생성(버튼을 클릭하면 여기에서 콘솔에 찍히는 privatekey, publickey를 보여줘야하는 기능을 만들어야함)
var newaccount = web3.eth.accounts.create(web3.utils.randomHex(32))
console.log("계정생성 완료!", newaccount)

//로그인(프라이빗 키를 입력하면 계정이 언락되면서 이더전송이 가능한 페이지로 이동.)
var wallet = web3.eth.accounts.wallet.add('0xcf3d78dbaed5ec759f24abac6447d8816f411672252bd15431ecd4e18953c6dd')
console.log("로그인 성공", wallet)

//언락하는거 아직 해결안됨.
//var unlock = web3.eth.personal.unlockAccount('0x2C2274F00dcED8BdA78ae4A8aa2606Ddc6c37979', '0xcf3d78dbaed5ec759f24abac6447d8816f411672252bd15431ecd4e18953c6dd', 1000)
//console.log("계정 잠금해제 완료", unlock)

//잔액 조회하기
web3.eth.getBalance("0x2C2274F00dcED8BdA78ae4A8aa2606Ddc6c37979",(err, wei) => {
    let balance = web3.utils.fromWei(wei, 'ether')
    console.log("balance : " , balance) 
})


 app.listen(3000, function() {
    console.log('3000port start..')
});