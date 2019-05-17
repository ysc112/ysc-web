var http = require('http'); //引入包
var url = require('url');

var USERS = [{
    username: 'ysc',
    password: '123456'
}];
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("请求" + pathname + "收到");
    console.log("请求" + request.method.toUpperCase() + "收到");

    if (pathname == '/login') {  
        if(request.method.toUpperCase() !='GET'){
            var postdata ='';
            request.addListener('data',function(data){
                postdata +=data;
            });
            request.addListener('end',function(){
                console.log(postdata);
                var user =JSON.parse(postdata);
                response.writeHead(200, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                });
                if(user.username == USERS[0].username &&
                    user.password == USERS[0].password){
                        response.write('{"success":true,"errorCode":0}');
                    }
                    else{
                        response.write('{"success":false,"errorCode":100}');
                    }
                    response.end();
            });
        }
    else {
        response.writeHead(200,{
            'Content-type': 'application/json',//返回类型JSON类型
            'Access-Control-Allow-Origin': '*'//允许跨域访问
        });
        response.write(JSON.stringify(USERS));
        response.end();
    }
}
    else {
        response.write("Hello this is my world");
        response.end();
    }

}).listen(8081);
console.log("启动服务器");