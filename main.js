// document.addEventListener("DOMContentLoaded",async function(){
//     await getevents();
// })

// async function getevents() {
//     try {
//       const response = await fetch("index.json");
//       if (!response.ok) {
//         throw new Error("Network response was not ok " + response.statusText);
//       }
//       const jsonData = await response.json();
//       const eventsdiv = document.querySelector(".service-items");
//       console.log('hii ',jsonData);
      
//       jsonData.forEach(event => {
//         const serviceItem = document.createElement("div")
//         serviceItem.innerHTML = `
//         <img alt="" height="200" src="https://storage.googleapis.com/a1aa/image/fFqggS8y6LyNB6FyJmFJCdynpu8tMtrGqIfPfraT76HWwSFnA.jpg" width="300"/>
//           <li><a href="/office.html" class ="btn">OFFICE PARTIES</a></li>
//         `
//         eventsdiv.appendChild(serviceItem);



//       })
//     }
//     catch(error){

//     }
// }


// // ${data.alt}