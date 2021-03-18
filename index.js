const list = require("./src/lambda/list.js")

const validate = function(event){
    var func = null;
    switch(event.path){
        case "/list-tasks-sebnieto/get": func =list.returnList(); break;
        case "/list-tasks-sebnieto/post": func =list.postList(JSON.parse(event.body)); break;
        default:
            return {
                statusCode: 404,
                body:'We can´t find this path',
            };
    }
    return func
}

exports.handler = async (event) => {

    var data = null;
    var res = null;
    switch(event.httpMethod){
        case "GET":
            data = validate(event);
            break;
        case "POST":
            data = validate(event);
            break;
        default:
            res = "Only return get and post methods"
    }

    if(res==null){
        res = data;
    }    
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(res),
    };
    return response;
};
