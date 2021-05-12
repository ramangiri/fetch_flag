function displayTemp(country,latlng)
{
    let lat=latlng.split(",")[0];
    let lng=latlng.split(",")[1];
    let apikey="3a048235afdddb8e7ef9b5fb7d51cd6d";
    let data1=fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lng+"&exclude=alerts&appid="+apikey);
    data1.then((response)=> response.json())
    .then(result=>alert("The Current temperature in"+ country+ " is "+result.current.temp+" K"));
}   

function skeleton(){
    let body=document.body;
    body.style.backgroundColor="#22404b";
    let row=document.createElement("div");
    row.setAttribute("class","row");
    let data=fetch("https://restcountries.eu/rest/v2/all");
    data.then((response)=> response.json())
    .then(cData=>
        {
            cData.forEach((item)=> {
                let name=item.name;
                let capital=item.capital;
                let region=item.region;
                let latlng=item.latlng.join(",");
                let flag=item.flag;
                let countrycode=item.alpha3Code;
                
                let col=document.createElement("div");
                col.classList.add("col-lg-4","col-sm-12","col-12","col-md-4");
                let card=document.createElement("div");
                card.setAttribute("class","card");
                let cardheader=document.createElement("div");
                cardheader.setAttribute("class","card-header");
                cardheader.innerText=name;
                cardheader.style.backgroundColor="black";
                cardheader.style.color="white";
                let cardbody=document.createElement("div");
                cardbody.setAttribute("class","card-body");      
                let flagdiv=document.createElement("img");
                flagdiv.setAttribute("src",flag); 
                let capitaldiv=document.createElement("div");
                capitaldiv.setAttribute("class","capital-div")
                capitaldiv.innerText="Capital: "+capital; 
                let regiondiv=document.createElement("div");
                regiondiv.setAttribute("class","region-div")
                regiondiv.innerText="Region: "+region; 
                let countrycodediv=document.createElement("div");
                countrycodediv.setAttribute("class","countrycode-div");
                countrycodediv.innerText="Country Code: "+countrycode; 
                let buttondiv=document.createElement("button");
                buttondiv.setAttribute("id",latlng);
                buttondiv.classList.add("btn","btn-primary","button-div");
                buttondiv.innerText="Click for Weather";
                buttondiv.onclick=function(){
                    (displayTemp(name,latlng))
                }
                cardbody.append(flagdiv,capitaldiv,regiondiv,countrycodediv,buttondiv);
                card.append(cardheader,cardbody);
                col.appendChild(card);
                row.appendChild(col);
            })
        });
    body.appendChild(row);
}


skeleton()