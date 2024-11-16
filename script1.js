document.addEventListener("DOMContentLoaded",async function(){
    await getevents();
})

async function getevents() {
    try {
      const response = await fetch("office.json");
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const jsonData = await response.json();
      const eventsdiv = document.querySelector(".events");
      console.log('hii ',jsonData)
      
  jsonData.forEach(event => {
      //for (let i = 0; i < jsonData.length; i++) {
          const carddiv = document.createElement("div");
          const eventimg = document.createElement("img");
          const h3 = document.createElement("h3");
          const date = document.createElement("div");
          const p = document.createElement("p");
          
           console.log(jsonData[0]);
          carddiv.classList.add("event-card");
        //   carddiv.addclassName = "event-card";
          eventimg.src = jsonData[1].event_img;
          eventimg.alt = "Event Image";
          h3.innerHTML = jsonData[1].name;
          date.innerHTML=jsonData[1].date;
          date.classList.add("date");
        //   date.className="date";
          p.innerHTML = jsonData[1].tag;
  
          carddiv.appendChild(eventimg);
          carddiv.appendChild(h3);
          carddiv.appendChild(date);
          carddiv.appendChild(p);
          eventsdiv.appendChild(carddiv);
      });
    
    } catch (error) {
      console.log(error, "in loading data");
    }
  }

  getevents();