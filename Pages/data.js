let members = [];

if (window.location.pathname.includes("Dream.html")) {
    members = [
        {name: "Lee Mark",role: "Leader, Main Rapper",birth: "2 Agustus 1999",image: "../image/dream/mark.jpeg"},
        {name: "Huang Renjun",role: "Main Vocalist, Lead Dancer",birth: "23 Maret 2000",image: "../image/dream/renjun.jpeg"},
        {name: "Lee Jeno",role: "Lead Rapper, Lead Dancer",birth: "23 April 2000",image: "../image/dream/jeno.jpeg"},
        {name: "Lee Haechan",role: "Main Vocalist, Lead Dancer",birth: "6 Juni 2000",image: "../image/dream/haechan.jpeg"},
        {name: "Na Jaemin",role: "Lead Dancer, Lead Rapper",birth: "13 Agustus 2000",image: "../image/dream/jaemin.jpeg"},
        {name: "Chenle",role: "Main Vocalist",birth: "22 November 2001",image: "../image/dream/chenle.jpeg"},
        {name: "Jisung",role: "Main Dancer, Sub Rapper",birth: "5 Februari 2002",image: "../image/dream/jisung.jpeg"},
    ];
} else if (window.location.pathname.includes("nct127.html")) {
    members = [
    { name: "Johnny Suh", role: "Lead Rapper, Lead Dancer",birth: "9 Februari 1995",image: "../image/127/johnny.jpg"},
    { name: "Lee Taeyong", role: "Leader, Main Rapper, Main Dancer",birth: "1 Juli 1995",image: "../image/127/taeyong.jpg"},
    { name: "Nakamoto Yuta",role: "Lead Dancer, Sub Vocalist",birth: "26 Oktober 1995",image: "../image/127/yuta.jpg"},
    { name: "Kim Doyoung",role: "Main Vocalist",birth: "1 Februari 1996",image: "../image/127/doyoung.jpg"},
    { name: "Jung Jaehyun",role: "Lead Vocalist, Lead Dancer",birth: "14 Februari 1997",image: "../image/127/jaehyun.jpg"},
    { name: "Kim Jungwoo",role: "Lead Vocalist, Lead Dancer", birth: "19 Februari 1998", image: "../image/127/jungwoo.jpg"},
    { name: "Lee Mark",role: "Main Rapper, Lead Dancer",birth: "2 Agustus 1999",image: "../image/127/marklee.jpg"},
    { name: "Lee Haechan",role: "Main Vocalist, Lead Dancer",birth: "6 Juni 2000",image: "../image/127/haechan.jpg"}
    ];
} else if (window.location.pathname.includes("wayv.html")) {
  members = [/* data wayv */];
}

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