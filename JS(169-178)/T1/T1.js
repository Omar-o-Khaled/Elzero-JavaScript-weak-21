let getFromJson=new XMLHttpRequest();

getFromJson.open("get","./T1.json");
getFromJson.send();

getFromJson.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){
        let obj=JSON.parse(getFromJson.responseText);
        console.log(obj);
        for(let i=0;i<obj.length;i++){
            console.log(obj[i]);
        }
    }
}