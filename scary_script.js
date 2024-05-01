
let masterPlay = document.getElementById("masterPlay");
let audioElement = new Audio("brand_music/1.mp3");
let myprogressBar = document.getElementById("myprogressBar");
myprogressBar.value=0;
let gif = document.getElementById("gif");
let song_Item = Array.from(document.getElementsByClassName("song-Item"));
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let index = 1;
let songs = [
    {songName:"Last Days",filePath:"scary_music/1.mp3"},
    {songName:"Gloomy Atmosphere",filePath:"scary_music/2.mp3"},
    {songName:"Lost Soul Medium",filePath:"scary_music/3.mp3"}
    
]
song_Item.forEach((element,i) =>
    {
     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    })
// audioElement.addEventListener("timeupdate",()=>
// {
//     console.log('timeupdate');
// let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);

// myprogressBar.value = progress;
// }
// )
myprogressBar.addEventListener("change",()=>
{
    audioElement.currentTime = (myprogressBar.value*audioElement.duration)/100;        
})

masterPlay.addEventListener('click',()=>
{
if(audioElement.currentTime<=0||audioElement.paused)
{
    gif.style.opacity = 1;
    audioElement.play();
masterPlay.classList.remove("fa-circle-play");
masterPlay.classList.add("fa-circle-pause");
}
else
{
    gif.style.opacity = 0;
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");

}
}
)
const makeAllPlays = () =>
{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>
    {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
       }
    
    )
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>
{
element.addEventListener('click' ,(e,i) =>
{
   if(!audioElement.paused)
   {
      audioElement.pause();
      e.target.classList.remove("fa-circle-pause");
      e.target.classList.add("fa-circle-play");
      
   }
   else
   {
    index = parseInt(parseInt(e.target.id)+1);
  console.log(index);
    makeAllPlays();
 e.target.classList.remove("fa-circle-play");
 e.target.classList.add("fa-circle-pause");
 let curr = audioElement.currentTime;
 
 if(index==1)
 {
    audioElement.src = 'scary_music/1.mp3';  
 }
 else
 { 
    if(index==2)
    {
       audioElement.src = 'scary_music/2.mp3';  
    }
    else
    {
        if(index==3)
 {
    audioElement.src = 'scary_music/3.mp3';  
 }
 
    }  
 }
 audioElement.currentTime=curr;
 audioElement.play();
}
}
)
}
)
previous.addEventListener('click',()=>
{

    if(index==1)
    {
        index=3;
        audioElement.src = "scary_music/3.mp3";
    }
    else
    {
        index-=1;
        if(index==1)
        {
           audioElement.src = 'scary_music/1.mp3';  
        }
        else
        { 
           if(index==2)
           {
              audioElement.src = 'scary_music/2.mp3';  
           }
          
        }
          
         
         
         
}
audioElement.play();
}
)
next.addEventListener('click',()=>
{
   
    if(index==3)
    {
        index=1;
        audioElement.src = "scary_music/1.mp3";
    }
    else
    {
        index+=1;
        if(index==3)
        {
           audioElement.src = 'scary_music/3.mp3';  
        }
        else
        { 
           if(index==2)
           {
              audioElement.src = 'scary_music/2.mp3';  
           }
           
        }
          
         
         
         
}
audioElement.play();
}
)