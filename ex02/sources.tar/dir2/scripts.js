const rm_pop = () =>{
    document.getElementById("main_video").pause();
    document.getElementById("main_video").currentTime = 0;
    document.getElementsByClassName("video_container")[0].style.display = "none";
}

const add_pop = () =>{
    document.getElementsByClassName("video_container")[0].style.display = "block";
    document.getElementById("main_video").play();
}