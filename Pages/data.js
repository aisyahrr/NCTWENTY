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
        {name: "Jisung",role: "Main Dancer,Maknae",birth: "5 Februari 2002",image: "../Asset/dream/jisung.jpeg"},
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
    ];
} else if (window.location.pathname.includes("nct127.html")) {
    members = [
    { name: "Johnny Suh", role: "Lead Rapper, Lead Dancer",birth: "9 Februari 1995",image: "../Asset/127/johnny.jpg"},
    { name: "Lee Taeyong", role: "Leader, Main Rapper, Main Dancer",birth: "1 Juli 1995",image: "../Asset/127/taeyong.jpg"},
    { name: "Nakamoto Yuta",role: "Lead Dancer, Sub Vocalist",birth: "26 Oktober 1995",image: "../Asset/127/yuta.jpg"},
    { name: "Kim Doyoung",role: "Main Vocalist",birth: "1 Februari 1996",image: "../Asset/127/doyoung.jpg"},
    { name: "Jung Jaehyun",role: "Lead Vocalist, Lead Dancer",birth: "14 Februari 1997",image: "../Asset/127/jaehyun.jpg"},
    { name: "Kim Jungwoo",role: "Lead Vocalist, Lead Dancer", birth: "19 Februari 1998", image: "../Asset/127/jungwoo.jpg"},
    { name: "Lee Mark",role: "Main Rapper, Lead Dancer",birth: "2 Agustus 1999",image: "../Asset/127/marklee.jpg"},
    { name: "Lee Haechan",role: "Main Vocalist, Maknae",birth: "6 Juni 2000",image: "../Asset/127/haechan.jpg"}
    ];
    mvs = [
        {link: "https://youtu.be/2OvyA2__Eas?si=rzYndxo6n-HAzzj_", video: "../Asset/127/mv/kickit.mp4", image : "../Asset/127/cover/kickit.jpg", judul: "Kick it", subjudul: "MV · 195M Views"},
        {link: "https://youtu.be/FRilMXZqNhA?si=7ymq9xpYV1EHVIXi", video: "../Asset/127/mv/baddies.mp4", image : "../Asset/127/cover/2baddies.jpg", judul: "2 Baddies", subjudul: "MV · 107M Views"},
        {link: "https://youtu.be/1oYWnbTSang?si=VZAEs5Z2wiGMjb8O", video: "../Asset/127/mv/sticker.mp4", image : "../Asset/127/cover/sticker.png", judul: "Sticker", subjudul: "MV · 99M Views"},
    ];
    albums = [
        {image : "../Asset/127/cover/walk.jpg", link : "https://open.spotify.com/album/1awTeiNvKPg5ZIVHrK0QML?si=BOTEPP_0Tnek4IpRfflMLg", judul: "WALK - The 6th Album", subjudul: "2024 · Album"},
        {image : "../Asset/127/cover/factcheck.jpg", link : "https://open.spotify.com/album/4TUYG0oaiFCP03hYlE5Exw?si=IFaHftyfRxWbWIf1IA1w3Q", judul: "Fact Check - The 5th Album", subjudul: "2023 · Album"},
        {image : "../Asset/127/cover/2baddies.jpg", link : "https://open.spotify.com/album/6PMZEFLrGOUBBn4BtLBp0F?si=1qBmAYPkS72g3w2tWy9JuA", judul: "2 Baddies - The 4th Album ", subjudul: "2022 · Album"},
        {image : "../Asset/127/cover/cherryboom.jpg", link : "https://open.spotify.com/album/7H5FkCA6cTDBX3wtvIbN8s?si=3S1CBMkZSlWw2fwk5JeDrQ", judul: "Cherry Boom - The 3rd Mini Album", subjudul: "2017 · Album"},
        {image : "../Asset/127/cover/sticker.png", link : "https://open.spotify.com/album/7sf7G0C6NuW8GjQbWwJlGk?si=s7hZ_oSEQYCTwGYz7UTKtA", judul: "Sticker - The 3rd Album", subjudul: "2021 · Album"},
    ];
} else if (window.location.pathname.includes("wayv.html")) {
    members = [
        { name: "Kun", role: "Leader, Main Vocalist", birth: "1 Januari 1996", image: "../Asset/wayv/kun.jpg" },
        { name: "Ten", role: "Main Dancer, Lead Vocalist", birth: "27 Februari 1996", image: "../Asset/wayv/ten.jpg" },
        { name: "Winwin", role: "Lead Dancer, Sub Vocalist", birth: "28 Oktober 1997", image: "../Asset/wayv/winwin.png" },
        { name: "Xiaojun", role: "Main Vocalist", birth: "8 Agustus 1999", image: "../Asset/wayv/xiojun.jpg" },
        { name: "Hendery", role: "Lead Rapper, Sub Vocalist", birth: "28 September 1999", image: "../Asset/wayv/hendery.jpg" },
        { name: "Yangyang", role: "Main Rapper, Maknae", birth: "10 Oktober 2000", image: "../Asset/wayv/yangyang.jpg" }
    ];
    albums = [
        {image : "../Asset/wayv/cover/bigbands.jpg", link : "https://open.spotify.com/album/7bznUQPHdmQnEPx0AjC9qI?si=6ovdDLa8T1e1VAN5JPkqxA", judul: "BIG BANDS - The 7th Mini Album", subjudul: "Latest Release · Album"},
        {image : "../Asset/wayv/cover/FREQUENCY.jpg", link : "https://open.spotify.com/album/6PmkuHFyelDURr3QlbFY3K?si=a0BaGePVTQGnon8QrNI9TA", judul: "FREQUENCY - The 6th Mini Album", subjudul: "2024 · EP"},
        {image : "../Asset/wayv/cover/LoveTalk.jpg", link : "https://open.spotify.com/album/60A7gFYvWmaDULmxUWSjyS?si=gnjGTZ7TRS6CCxhHUOwZYA", judul: "Love Talk - English Version ", subjudul: "2019 · Single"},
        {image : "../Asset/wayv/cover/OnMyYouth.jpg", link : "https://open.spotify.com/album/5E0N8pJpGjx60wKTlpu9Hs?si=187HSE8YTFKa2f6dkA5ZjA", judul: "On My Youth - The 2nd Album", subjudul: "2023 · Album"},
        {image : "../Asset/wayv/cover/TakeOverTheMoon.jpg", link : "https://open.spotify.com/album/4ha80ucjDvhmQPLT77yyob?si=eGxyh16uREek52nU9qoKHQ", judul: "Take Over The Moon - The 2nd Mini Album", subjudul: "2019 · EP"},
    ];
    mvs = [
        {link: "https://youtu.be/eUCVRF6hjSQ?si=u2q81ys5i3LryiGj", video: "../Asset/wayv/mv/turnbacktime.mp4", image : "../Asset/wayv/cover/turnbacktime.jpg", judul: "Turn Back Time", subjudul: "MV · 44M Views"},
        {link: "https://youtu.be/irXZve4QRos?si=sXWGekYdOc7haWvr", video: "../Asset/wayv/mv/takeoff.mp4", image : "../Asset/wayv/cover/takeoff.jpg", judul: "Take Off", subjudul: "MV · 38M Views"},
        {link: "https://youtu.be/N5qWjQ9j6l0?si=W3KJCiFyNCCPl6KL", video: "../Asset/wayv/mv/lovetalk.mp4", image : "../Asset/wayv/cover/LoveTalk.jpg", judul: "Love Talk", subjudul: "MV · 97M Views"},
    ];
}else if (window.location.pathname.includes("wish.html")){
    members = [
        { name: "Oh Sion ", role: "Leader, Lead Vocalist", birth: "11 Mei 2002", image: "../Asset/wish/sion.jpg" },
        { name: "Maeda Riku", role: "Main Rapper", birth: "28 Juni 2003", image: "../Asset/wish/riku.jpg" },
        { name: "Tokuno Yūshi", role: "Main Dancer, Sub Vocalist", birth: "5 April 2004", image: "../Asset/wish/yushi.jpg" },
        { name: "Kim Daeyoung", role: "Lead Vocalist", birth: "21 Juni 2005", image: "../Asset/wish/jaehee.jpg" },
        { name: "Hirose Ryo", role: "Lead Dancer, Sub Vocalist", birth: "4 Agustus 2007", image: "../Asset/wish/ryo.jpg" },
        { name: "Fujinaga Sakuya", role: "Lead Rapper, Maknae", birth: "18 November 2007", image: "../Asset/wish/sakuya.jpg" }
    ];
    albums = [
        {image : "../Asset/wish/cover/surf.jpg", link : "https://open.spotify.com/album/5XC6zgE2x581zlkJdOxjsZ?si=MUIYHE3OSpKXsCnCoUaHRw", judul: "Surf", subjudul: "2025 · Single"},
        {image : "../Asset/wish/cover/wishful.jpg", link : "https://open.spotify.com/album/3JSUHAskqOwtOnMLO21kd3?si=hK51ukS8SO-F8fJjkCEDVQ", judul: "WISHFUL", subjudul: "2024 · Album"},
        {image : "../Asset/wish/cover/steady.jpg", link : "https://open.spotify.com/album/3fWEp6LTn7hHD4w3Oo4hvF?si=xRyxOWHyTXSu_k59rMudgg", judul: "Steady - The 1st Mini Album ", subjudul: "2024 · Album"},
        {image : "../Asset/wish/cover/poppop.jpg", link : "https://open.spotify.com/album/46VvKhK6C8GC2Ew7nAIK3Y?si=dzY2jDE-Q3KF1F-DqAGi7g", judul: "poppop - The 2nd Mini Album", subjudul: "2025 · EP"},
        {image : "../Asset/image/Albums/wish.jpg", link : "https://open.spotify.com/album/1tNgwDohccU3bCwaylqOQ0?si=FaNAH9F1R16dDT6N7yXpUg", judul: "COLOR - The 3rd Mini Album", subjudul: "Latest Release · Album"},
    ];
    mvs = [
        {link: "https://youtu.be/ZgrEZmAgzM8?si=sFGHkX1OXhMEIx3J", video: "../Asset/wish/mv/wish.mp4", image : "../Asset/wish/cover/wish.jpg", judul: "Wish - Japanese.ver", subjudul: "MV · 7.4M Views"},
        {link: "https://youtu.be/IKlkZZv76Ho?si=IP9LefErt6xEKdqq", video: "../Asset/wish/mv/steady.mp4", image : "../Asset/wish/cover/steady.jpg", judul: "Steady", subjudul: "MV · 9.6M Views"},
        {link: "https://youtu.be/LNETckymbzk?si=gm3scFHTgb6xbE7g", video: "../Asset/wish/mv/poppop.mp4", image : "../Asset/wish/cover/poppop.jpg", judul: "Poppop", subjudul: "MV · 10M Views"},
    ];

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
