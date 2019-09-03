var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
    var html = `
    <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>현걸 mask</title>
        </head>
        <body>
            <h3>ETH Wallet</h3>
            <div>
                <select name ="네트워크 서버 선택목록">
                    <option value="ropsten"> ropsten </option>
                    <option value="rinkeby"> rinkeby </option>
                </select>
           </div>
           <div>
                <select name ="계정 리스트">
                    <option value> aaa</option>
                    <option value> bbbb </option>
                </select>
                <a href = "/topic/create"><input type = button value = "계정 생성"></a>
            </div>
            <div>
                <a href = "/topic/deposit"><input type = button value = "입금하기"></a>
                <a href = "/topic/send"><input type = button value = "전송하기"></a>
            </div>
            <div>
                <a href = "https://etherscan.io/" target="_blank"><input type = button value = "이더 스캔에서 현재 계정 보러가기"></a>
            </div>
            <div>
            히스토리
            <div>
        </body>
        </html>
    `
    res.send(html);
});

module.exports = router;    