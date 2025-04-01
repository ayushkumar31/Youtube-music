console.log("ayush")

// document.getElementById("cont1").addEventListener("click", play);
// function play(){
//     console.log("ayush")
// }
async function fetchsongs(){
   let res= await fetch("http://127.0.0.1:3000/songs/",{mode: 'no-cors'})
   let data =await res.json
       console.log(data)
    // let a=await fetch("http://127.0.0.1:3000/songs/",{mode: 'no-cors'})
    // let response= await a.text();
    // console.log(response)
//     let div=document.createElement("div") //read element defn 
//     div.innerHTML=response
//     let as=document.getElementsByTagName("a")
//     console.log(as)
//     songs=[]
//    for (let index = 0; index < as.length; index++) {
//     const element = as[index];
//      if(as[index].href.endsWith(".mp3")){
//         songs.push(as[index].href)
//      }
//    }
//    console.log(songs[0])
}

fetchsongs()


// here in below changed css property from seek to seek 1 using toggle
// let play=()=>{
//     var element=document.querySelector(".seek");
//     element.classList.toggle("seek2")
// }

//  document.querySelector(".seek").addEventListener("click", play);


//this is for movement of seekbar onclicking it
 document.querySelector(".seekbar").addEventListener("click",e=>{
    let x1 = (e.offsetX / e.target.getBoundingClientRect().width) * 100;   //e.target gives the element on wjich event occured andgetboundingrect returnsdimensions
   
    console.log(x1)
    document.querySelector(".seek").style.left = x1+"%"
 })


 //this is for play pause
 let playfun=()=>{
    let rc=document.getElementById("playid").src
   // console.log(rc)  using this i got the value of the rc 
    if(rc=="file:///C:/WEB%20D/spotify/play.svg"){
         document.getElementById("playid").src="pause.svg"
    }
    else{
         document.getElementById("playid").src="play.svg"
    }
  

}

