let members = [];
let mvs = [];
let albums = [];

if (window.location.pathname.includes("Dream.html")) {
    members = [
        {name: "Lee Mark",role: "Leader, Main Rapper",birth: "2 Agustus 1999",image: "../Asset/dream/mark.jpeg"},
        {name: "Huang Renjun",role: "Main Vocalist, Lead Dancer",birth: "23 Maret 2000",image: "../Asset/dream/Renjun.jpeg"},
        {name: "Lee Jeno",role: "Lead Rapper, Lead Dancer",birth: "23 April 2000",image: "../Asset/dream/jeno.jpeg"},
        {name: "Lee Haechan",role: "Main Vocalist, Lead Dancer",birth: "6 Juni 2000",image: "../Asset/dream/haechan.jpeg"},
        {name: "Na Jaemin",role: "Lead Dancer, Lead Rapper",birth: "13 Agustus 2000",image: "../Asset/dream/jaemin.jpeg"},
        {name: "Chenle",role: "Main Vocalist",birth: "22 November 2001",image: "../Asset/dream/chenle.jpeg"},
        {name: "Jisung",role: "Main Dancer, Sub Rapper",birth: "5 Februari 2002",image: "../Asset/dream/jisung.jpeg"},
    ];
    mvs = [
        {link: "https://youtu.be/PkKnp4SdE-w?si=D9siMlu4t-HflodN", video: "../Asset/dream/album/Mv/HotSauce.mp4", image : "../Asset/dream/album/cover/HotSauce.jpg", judul: "Hot Sauce", subjudul: "MV · 190M Views"},
        {link: "https://youtu.be/X-iJZ0gfKPo?si=bAm38f5tr2aYmg7q", video: "../Asset/dream/album/Mv/Boom.mp4", image : "../Asset/dream/album/cover/Boom.jpg", judul: "Boom", subjudul: "MV · 174M Views"},
        {link: "https://youtu.be/QPUjV7epJqE?si=s_TF3Up1huiJN0cv", video: "../Asset/dream/album/Mv/HelloFuture.mp4", image : "../Asset/dream/album/cover/HelloFuture.jpg", judul: "Hello Future", subjudul: "MV · 119M Views"},
        {link: "https://youtu.be/bagFQCTHXy8?si=U1PiPSCY_mDVEWbW", video: "../Asset/dream/album/Mv/Beatbox.mp4", image : "../Asset/dream/album/cover/Beatbox.jpg", judul: "Beatbox", subjudul: "MV · 93M Views"},
    ];
    albums = [
        {image : "../Asset/dream/album/cover/GBTF.jpg", link : "https://open.spotify.com/album/2sOb21DLBATC7czm21LQoM?si=4q-ddkooRwWGhi48AJCyhA", judul: "Go Back To The Future", subjudul: "Latest Release · Album"},
        {image : "../Asset/dream/album/cover/ISTJ.jpg", link : "https://open.spotify.com/album/2uk29gcBkCLJZPTIQK9azh?si=CluQEwf4TuyMx9oUdsJYOA", judul: "ISTJ - The 3rd Album", subjudul: "2023 · Album"},
        {image : "../Asset/dream/album/cover/HotSauce.jpg", link : "https://open.spotify.com/album/1miTgxRTUje9Jqml1aOSUi?si=tts2_IAuQQ68lauqE6wScg", judul: "Hot Souce - The 1rd Album ", subjudul: "2021 · Album"},
        {image : "../Asset/dream/album/cover/HelloFuture.jpg", link : "https://open.spotify.com/album/1fRqXYwoLDxG3EwP70qnjM?si=4tlJbgzCSj-sFSeYwS7feg", judul: "Hello Future - The 1st Album Repackage ", subjudul: "2021 · Album"},
        {image : "../Asset/dream/album/cover/Beatbox.jpg", link : "https://open.spotify.com/album/4sM1qNxjzxOvoH6jeFHx3W?si=14yfNGLaTMuvsKnlm33Pwg", judul: "Beatbox - The 2nd Album Repackage ", subjudul: "2022 · Album"},
    ]
} else if (window.location.pathname.includes("nct127.html")) {
    members = [
    { name: "Johnny Suh", role: "Lead Rapper, Lead Dancer",birth: "9 Februari 1995",image: "../Asset/127/johnny.jpg"},
    { name: "Lee Taeyong", role: "Leader, Main Rapper, Main Dancer",birth: "1 Juli 1995",image: "../Asset/127/taeyong.jpg"},
    { name: "Nakamoto Yuta",role: "Lead Dancer, Sub Vocalist",birth: "26 Oktober 1995",image: "../Asset/127/yuta.jpg"},
    { name: "Kim Doyoung",role: "Main Vocalist",birth: "1 Februari 1996",image: "../Asset/127/doyoung.jpg"},
    { name: "Jung Jaehyun",role: "Lead Vocalist, Lead Dancer",birth: "14 Februari 1997",image: "../Asset/127/jaehyun.jpg"},
    { name: "Kim Jungwoo",role: "Lead Vocalist, Lead Dancer", birth: "19 Februari 1998", image: "../Asset/127/jungwoo.jpg"},
    { name: "Lee Mark",role: "Main Rapper, Lead Dancer",birth: "2 Agustus 1999",image: "../Asset/127/marklee.jpg"},
    { name: "Lee Haechan",role: "Main Vocalist, Lead Dancer",birth: "6 Juni 2000",image: "../Asset/127/haechan.jpg"}
    ];
} else if (window.location.pathname.includes("wayv.html")) {
    members = [ ];
}

// Card Profile
const container = document.getElementById("cardProfile")
members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card-name">${member.name}</div>
        <div class="card-img">
            <img src="${member.image}" alt="${member.name}">
        </div>
        <div class="card-dec">
            <h4>${member.role}</h4>
            <p>${member.birth}</p>
        </div>
    `;
        container.appendChild(card);
}); 
//Albums 
const Album = document.getElementById("AlbumCard")
albums.forEach(album =>{
    const CardAlbum = document.createElement("div");
    CardAlbum.classList.add("AlbumCard");
    CardAlbum.innerHTML = `
        <div class="CardImge">
            <img src="${album.image}" alt="">
            <a class="spotify-icon" href="${album.link}" target="_blank"><i class="fa-brands fa-spotify"></i></a>
        </div>
        <div class="album-text">
            <h4>${album.judul}</h4>
            <p>${album.subjudul}</p>
        </div>
    `;
        Album.appendChild(CardAlbum);
});
// card Mv 
const Mv = document.getElementById("MvCard")
mvs.forEach(mvs => {
    const mvCard = document.createElement("div");
    mvCard.classList.add("mv-card");
    mvCard.innerHTML = `
        <a href="${mvs.link}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: white;">
            <video muted playsinline loading="lazy">
                <source src="${mvs.video}" type="video/mp4">
            </video>
            <div class="overlay"></div>
            <div class="content">
                <div class="album-info">
                    <img src="${mvs.image}" class="album-cover" alt="Album Cover">
                    <div class="album-text">
                        <h3>${mvs.judul}</h3>
                        <p>${mvs.subjudul}</p>
                    </div>
                </div>
            </div>
        </a>
    `;
      // tambahin ke DOM dulu
    Mv.appendChild(mvCard);
    const video = mvCard.querySelector("video");
    mvCard.addEventListener("mouseenter", () => {
        video.play();
    });
    mvCard.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; 
    });
});
