let getFromJson=new XMLHttpRequest();

getFromJson.open("get","./T2.json");
getFromJson.send();

getFromJson.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){
        let obj=JSON.parse(getFromJson.responseText);
        console.log("JSON Object Content Here");
        console.log("Data Loaded");
    }
}