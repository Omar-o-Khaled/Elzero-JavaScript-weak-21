let getFromJson=new XMLHttpRequest();

getFromJson.open("get","./T3.json");
getFromJson.send();

getFromJson.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){
        let obj=JSON.parse(getFromJson.responseText);
        for(let i=0;i<obj.length;i++){
            obj[i].category="All"
            console.log(obj[i]);
        }
        console.log(obj);
        updatedData=JSON.stringify(obj)
        console.log("JSON Object Content Here");
    }
}