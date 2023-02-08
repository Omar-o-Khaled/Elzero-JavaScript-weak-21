let mainDiv=document.createElement("div");
mainDiv.id="data";

let getFromJson=new XMLHttpRequest();

getFromJson.open("get","./T4.json");
getFromJson.send();

getFromJson.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){
        let obj=JSON.parse(getFromJson.responseText);
        for(let i=0;i<obj.length;i++){
            let subDiv=document.createElement("div");
            let h2=document.createElement("h2");
            let articleP=document.createElement("p");
            let authorP=document.createElement("p");
            let categoryP=document.createElement("p");

            h2.innerHTML=obj[i].title;
            articleP.innerHTML=obj[i].body;
            authorP.innerHTML=`Author: ${obj[i].author}`;
            categoryP.innerHTML=`Category: ${obj[i].category}`;

            subDiv.append(h2,articleP,authorP,categoryP)
            mainDiv.append(subDiv);
            document.body.appendChild(mainDiv);
        }
    }
}