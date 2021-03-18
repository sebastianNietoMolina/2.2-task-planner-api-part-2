var res = [
    {
        description: "Sacar al perro ",
        responsible: {
            name: "Sebastian Nieto",
            email: "juan@gmail.com"
        },
        status: "ready",
        dueDate: "12-2-2021"
    },
    {
        description: "Lab4",
        responsible: {
            name: "Sebastian Nieto",
            email: "juan@gmail.com"
        },
        status: "in progress",
        dueDate: "7-3-2021"
    },
    {
        description: "Desayunar ",
        responsible: {
            name: "Sebastian Nieto",
            email: "juan@gmail.com"
        },
        status: "completed",
        dueDate: "8-9-2021"
    }
]

class List{
    
    returnList(){
        return res
    }
    
    postList(data){
        res.push(data);
        return res;
    }
}

module.exports = new List();