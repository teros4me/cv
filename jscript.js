const cvUrl = "mittcv.json";
let temptext = "";

async function getData() {
  const data = await fetch(cvUrl);
  const cvjson = await data.json();

  for(let i = 0; i < cvjson.length; i++) {
    let obj = cvjson[i];
    for(let key in obj) {
      let value = obj[key]
      
      if(key == "Utbildningar") {
        temptext += "<h3>" + key + "</h3>" + value + "<br>";
      }
      else if(key == "Arbetslivserfarenhet") {
        temptext += "<h3>" + key + "</h3>" + value + "<br>";
      }
      else if(key == "Datorkunskaper") {
        temptext += "<h3>" + key + "</h3>" + value + "<br>";
      }
      else if(key == "Språk") {
        temptext += "<h3>" + key + "</h3>" + value + "<br>";
      }
      else if(key == "Övrigt") {
        temptext += "<h3>" + key + "</h3>" + value + "<br>";
      }
      else {
        temptext += value + "<br>";
      }
    }
    document.getElementById("cv").innerHTML = temptext;
  }
}
getData();