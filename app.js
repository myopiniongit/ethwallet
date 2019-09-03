var express = require('express');
var fs = require('fs');
var app = express();
var Web3 = require('web3');

var mainnet = 'https://mainnet.infura.io/'; 
//var mainnet = 'https://api.myetherapi.com/eth'; 
var ropsten = 'https://ropsten.infura.io'; 
//var ropsten = 'https://api.myetherapi.com/rop'; 
var local = 'http://127.0.0.1:8545/';
var web3 = new Web3(new Web3.providers.HttpProvider(ropsten));
var address = "0x0B0BC38FC776E7AF00D1eBe2BC085B6D4918CF90";

web3.eth.getBalance(address,(err, wei) => {
  let balance = web3.utils.fromWei(wei, 'ether')
  console.log("balance : " , balance) 
})

app.get('/', function(request, response) {
    fs.readFile('./static/index.html', function(err, data) {
      if(err) {
        response.send('에러')
      } else {
        response.writeHead(200, {'Content-Type':'text/html'})
        response.write(data)
        response.end()
      }
    })
  })

 app.listen(3000, function() {
    console.log('3000port start..')
})