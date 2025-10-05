function openMenu() {
        document.getElementById("sideMenu").classList.add("active");
        document.querySelector(".menu-btn").style.display = "none";
    }

    function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
    // tunggu 500ms (sesuai transition sidebar) baru tampilkan tombol
    setTimeout(() => {
        document.querySelector(".menu-btn").style.display = "block";
    }, 500);
}

// Playlist Function
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const playlistContainer = document.getElementById('playlist-container');
    const audioPlay = document.getElementById('audio-play');

    let currentSongEl = null; // simpan elemen lagu yang lagi diputar

    const songs = [
        { title: "Breathing", artist: "NCT DREAM", group: "nctdream", imageUrl: "Asset/image/Albums/dream2.jpg",  audioUrl: "Asset/audio/Breathing.mp3" },
        { title: "Graduation", artist: "NCT DREAM", group: "nctdream", imageUrl: "Asset/image/Albums/dream1.jpg", audioUrl: "Asset/audio/Graduation.mp3" },
        { title: "Fact Check", artist: "NCT 127", group: "nct127", imageUrl:"Asset/image/Albums/nct1277.jpg", audioUrl: "Asset/audio/FactCheck.mp3" },
        { title: "Sticker", artist: "NCT 127", group: "nct127", imageUrl: "Asset/image/Albums/nct127.jpg", audioUrl: "Asset/audio/Sticker.mp3" },
        { title: "Beautiful", artist: "NCT", group: "nct", imageUrl: "Asset/image/Albums/nct1.jpg", audioUrl: "Asset/audio/Beautiful.mp3" },
        { title: "Surf", artist: "NCT WISH", group: "nctwish", imageUrl: "Asset/wish/cover/surf.jpg", audioUrl: "Asset/audio/Surf.mp3" },
        { title: "COLOR", artist: "NCT WISH", group: "nctwish", imageUrl: "Asset/image/Albums/wish.jpg", audioUrl: "Asset/audio/Color.mp3" },
        { title: "From Home", artist: "NCT", group: "nct", imageUrl: "Asset/image/Albums/nct2.jpg", audioUrl: "Asset/audio/FromHome.mp3" },
        { title: "Love Talk", artist: "WAYV", group: "wayv", imageUrl:"Asset/image/Albums/wayv.jpg", audioUrl: "Asset/audio/LoveTalk.mp3" },
        { title: "Turn Back Time", artist: "WAYV", group: "wayv", imageUrl: "Asset/image/Albums/wayv2.jpg", audioUrl: "Asset/audio/TurnBackTime.mp3" },
    ];

    function renderPlaylist(list){
        playlistContainer.innerHTML = '';
        list.forEach(song=>{
            const songEl = document.createElement('div');
            songEl.className = 'song-item';
            songEl.innerHTML = `
                <div class="song-details">
                    <img src="${song.imageUrl}" alt="${song.title}">
                    <div class="song-info">
                        <h4>${song.title}</h4>
                        <span>Artist - ${song.artist}</span>
                    </div>
                </div>
                <span class="play-icon">
                    <i class="fa-solid fa-play"></i>
                </span>
            `;

            const playIcon = songEl.querySelector('.play-icon i');

            songEl.addEventListener('click', ()=>{
                if(currentSongEl === songEl && !audioPlay.paused){
                    audioPlay.pause();
                    audioPlay.currentTime = 0;
                    playIcon.classList.remove('fa-stop');
                    playIcon.classList.add('fa-play');
                    currentSongEl = null;
                } else {
                    document.querySelectorAll('.play-icon i').forEach(icon=>{
                        icon.classList.remove('fa-stop');
                        icon.classList.add('fa-play');
                    });

                    audioPlay.src = song.audioUrl;
                    audioPlay.play();

                    playIcon.classList.remove('fa-play');
                    playIcon.classList.add('fa-stop');
                    songEl.style.border = '1px solid var(--neon-purple)';
                    if(currentSongEl && currentSongEl !== songEl){
                        currentSongEl.style.border = 'none';
                        const prevIcon = currentSongEl.querySelector('.play-icon i');
                        prevIcon.classList.remove('fa-stop');
                        prevIcon.classList.add('fa-play');
                    }   

                    currentSongEl = songEl;
                }
            });

            playlistContainer.appendChild(songEl);
        });
    }

    function filterSongs(groupName){
        if(groupName === 'all'){ renderPlaylist(songs); }
        else { renderPlaylist(songs.filter(s => s.group === groupName)); }
    }

    tabs.forEach(tab=>{
        tab.addEventListener('click', ()=>{
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filterSongs(tab.getAttribute('data-filter'));
        });
    });

    // Initial render
    renderPlaylist(songs);
});

// pop up teaser
function openPopup() { 
    const popup = document.getElementById("Popup"); 
    const video = document.getElementById("myVideo");

    popup.style.display = "block";
    video.play();
}
function closePopup() {
    const popup = document.getElementById("Popup");
    const video = document.getElementById("myVideo");

    popup.style.display = "none";
    video.pause();
    video.currentTime = 0;
}
