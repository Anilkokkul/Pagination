 const URL = "https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json"
 var data = [];
 function getData(){
    const req= new XMLHttpRequest();
    req.open("GET",URL,true)
    req.send();
    req.onload = function(){
        data = JSON.parse(req.response);
        console.log(data)
        // for(i in data){
        //     var id = data[i].id
        //     var name = data[i].name
        //     var email = data[i].email
        // }
        var prev = document.createElement('input');
            prev.setAttribute("class", "button")
            prev.setAttribute("id", prev)
            prev.setAttribute("type", "button")
            prev.setAttribute("onClick", "Previous()")
            prev.setAttribute("value", "prev")
            document.body.append(prev);
        
        for( var i=1 ; i<=10; i++){
            var button = document.createElement('input');
            button.setAttribute("class", "button")
            button.setAttribute("id", i)
            button.setAttribute("type", "button")
            button.setAttribute("onClick", "display(id)")
            button.setAttribute("value", i)
            document.body.append(button)
        }
        
            var next = document.createElement('input');
            next.setAttribute("class", "button")
            next.setAttribute("id", next)
            next.setAttribute("type", "button")
            next.setAttribute("value", "next")
            next.setAttribute("onClick", "next()")
            document.body.append(next);
        
    }
 }
getData();

var table = document.createElement("table");
var thead = document.createElement("thead");
thead.setAttribute("class","thead");

var tr = document.createElement('tr');

var th1 = document.createElement("th");
th1.innerHTML = "ID"

var th2 = document.createElement("th");
th2.innerHTML = "Name"

var th3 = document.createElement("th");
th3.innerHTML = "Email"

tr.append(th1,th2,th3);
thead.append(tr);

var getID = 1
function display(id){
    id = parseInt(id)
    getID = id;

    table.innerHTML = "";
for ( var i=(id-1)*10; i<id*10; i++){
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")

     td1.innerHTML = data[i].id
     td2.innerHTML = data[i].name;
     td3.innerHTML = data[i].email

     tr.append(td1);
     tr.append(td2);
     tr.append(td3);
     table.append(tr, thead);
     table.setAttribute("border" ,"2");
    table.style.textAlign = "center";
}
document.body.append(table);
}

function Previous(){
    if(getID>1){
        getID--
        display(getID)
    }
}

function next(){
    if(getID<10){
        getID++
        display(getID);
    }
}





