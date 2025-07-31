// mobile menu 
let openMenu = document.querySelector(".mobile-nav");
let closeMenu = document.querySelector(".close-menu");
let mobileMenu = document.querySelector(".menu");

openMenu.addEventListener("click", ()=> {
    mobileMenu.classList.add("active");
});
closeMenu.addEventListener("click", ()=> {
    mobileMenu.classList.remove("active");
});

// links update 

let mostPopular = document.querySelectorAll(".most-popularbox a");
mostPopular.forEach(link=> {
    link.href= "https://www.facebook.com/share/1Q21d1Yz52/?mibextid=wwXIfr";
    link.setAttribute("target","_blank");
});

let recomendedGameLink = document.querySelectorAll(".game-recomendation-box a");
recomendedGameLink.forEach(link=> {
    link.href="https://www.facebook.com/share/1Q21d1Yz52/?mibextid=wwXIfr";
    link.setAttribute("target","_blank");
});

let mostPlayed = document.querySelectorAll(".most-played-games a");
mostPlayed.forEach(link=> {
    link.href="http://web.orionstars.org/hot_play/orionstars_pc/";
    link.setAttribute("target","_blank");
});


let getStarted = document.querySelectorAll(".exp-main a");
getStarted.forEach(link=> {
    link.href="https://www.facebook.com/share/1Q21d1Yz52/?mibextid=wwXIfr";
    link.setAttribute("target","_blank");
});



let faqBtn = document.querySelectorAll(".faq-que ul li");
let faqAns = document.querySelectorAll(".faq-ans");

faqBtn.forEach((btn, index)=> {
    btn.addEventListener("click", function(){
        faqBtn.forEach(li=> {
            li.classList.remove("active");
        });
        btn.classList.add("active");
        faqAns.forEach(an=> {
            an.classList.remove("active");
        });
        faqAns[index].classList.add("active");
    });
});


// main games filter 
let mainFilterBtn = document.querySelectorAll(".games-main-filter ul li");
let mainFilterImg = document.querySelectorAll(".games-filter-box");

mainFilterBtn.forEach((btn, index)=> {
    btn.addEventListener("click", function(){
        mainFilterBtn.forEach(btn=> {
            btn.classList.remove("active");
        });
        btn.classList.add("active");
        mainFilterImg.forEach(box=> {
            box.classList.remove("active");
        });
        mainFilterImg[index].classList.add("active");
    });
});




let copyText = document.querySelectorAll('.copy1');
copyText.forEach(copy=> {
    copy.innerHTML = `<p>https://orionstarsonline.com all rights reseverd</p>`;
});




// mobile faqs
let mobileFaqList = document.querySelectorAll(".mobile-faq li");
let mobileFaqAns = document.querySelectorAll(".mobile-faq-ans");

mobileFaqList.forEach((list, index)=> {
    list.addEventListener("click", ()=> {
        mobileFaqList.forEach(li=> {
            li.classList.remove("active");
        });
        list.classList.add("active");
        mobileFaqAns.forEach(ans=> {
            ans.classList.remove("active");
        });
        mobileFaqAns[index].classList.add("active");
    });
});



// all games create boxes 
let allGames = document.querySelector(".first-game-box .games-filter-box-img");

// Load all available images (1-72 with various suffixes)
const allGameImages = [
    '1.jpg_1.jpeg', '1.jpg_2.jpeg', '1.jpg_3.jpeg', '1.jpg.jpeg',
    '2.jpg_1.jpeg', '2.jpg_2.jpeg', '2.jpg_3.jpeg', '2.jpg.jpeg',
    '3.jpg_1.jpeg', '3.jpg_2.jpeg', '3.jpg_3.jpeg', '3.jpg.jpeg',
    '4.jpg_1.jpeg', '4.jpg_2.jpeg', '4.jpg_3.jpeg',
    '5.jpg_1.jpeg', '5.jpg_2.jpeg', '5.jpg_3.jpeg',
    '6.jpg_1.jpeg', '6.jpg_2.jpeg', '6.jpg_3.jpeg',
    '7.jpg_1.jpeg', '7.jpg_2.jpeg',
    '8.jpg_1.jpeg', '8.jpg_2.jpeg', '8.jpg.jpeg',
    '9.jpg_1.jpeg', '9.jpg_2.jpeg',
    '10.jpg_1.jpeg', '10.jpg_2.jpeg',
    '11.jpg_1.jpeg', '11.jpg_2.jpeg', '11.jpg.jpeg',
    '12.jpg_1.jpeg', '12.jpg_2.jpeg',
    '13.jpg_1.jpeg', '13.jpg_2.jpeg', '13.jpg.jpeg',
    '14.jpg_1.jpeg', '14.jpg_2.jpeg',
    '15.jpg_1.jpeg', '15.jpg_2.jpeg', '15.jpg.jpeg',
    '16.jpg_1.jpeg', '16.jpg_2.jpeg', '16.jpg.jpeg',
    '17.jpg_1.jpeg', '17.jpg_2.jpeg', '17.jpg.jpeg',
    '18.jpg_1.jpeg', '18.jpg_2.jpeg', '18.jpg.jpeg',
    '19.jpg_1.jpeg', '19.jpg_2.jpeg', '19.jpg.jpeg',
    '20.jpg_1.jpeg', '20.jpg_2.jpeg', '20.jpg.jpeg',
    '21.jpg_1.jpeg', '21.jpg_2.jpeg',
    '22.jpg_1.jpeg', '22.jpg_2.jpeg',
    '23.jpg_1.jpeg', '23.jpg_2.jpeg', '23.jpg.jpeg',
    '24.jpg_1.jpeg', '24.jpg_2.jpeg',
    '25.jpg_1.jpeg', '25.jpg.jpeg',
    '26.jpg.jpeg',
    '27.jpg.jpeg',
    '28.jpg.jpeg',
    '29.jpg.jpeg',
    '30.jpg.jpeg',
    '31.jpg.jpeg',
    '33.jpg.jpeg',
    '34.jpg.jpeg',
    '35.jpg.jpeg',
    '37.jpg.jpeg',
    '38.jpg.jpeg',
    '41.jpg.jpeg',
    '43.jpg.jpeg',
    '45.jpg.jpeg',
    '46.jpg.jpeg',
    '47.jpg.jpeg',
    '52.jpg.jpeg',
    '54.jpg.jpeg',
    '55.jpg.jpeg',
    '56.jpg.jpeg',
    '57.jpg.jpeg',
    '58.jpg.jpeg',
    '59.jpg.jpeg',
    '60.jpg.jpeg',
    '61.jpg.jpeg',
    '62.jpg.jpeg',
    '63.jpg.jpeg',
    '65.jpg.jpeg',
    '68.jpg.jpeg',
    '69.jpg.jpeg',
    '70.jpg.jpeg',
    '71.jpg.jpeg',
    '72.jpg.jpeg'
];

// Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle all images
const shuffledImages = shuffleArray([...allGameImages]);

// Clear existing content and add ALL game boxes
allGames.innerHTML = '';
shuffledImages.forEach((imageName, index) => {
    let createDiv = document.createElement("div");
    createDiv.classList.add("game-box");
    let createLink = document.createElement("a");
    createLink.href = "https://www.facebook.com/share/1Q21d1Yz52/?mibextid=wwXIfr";
    createLink.target = "_blank";
    let createImg = document.createElement("img");
    createImg.src = `./media/all/${imageName}`;
    createImg.alt = `Orion Stars Game ${index + 1}`;
    createLink.appendChild(createImg);
    createDiv.appendChild(createLink);
    allGames.appendChild(createDiv);
});

// popular games - use first 20 shuffled images
let popularGames = document.querySelector(".second-game-box .games-filter-box-img");
popularGames.innerHTML = '';

const popularImages = shuffledImages.slice(0, 20);
popularImages.forEach((imageName, index) => {
    let createDiv = document.createElement("div");
    createDiv.classList.add("game-box");
    let createLink = document.createElement("a");
    createLink.href = "https://www.facebook.com/share/1Q21d1Yz52/?mibextid=wwXIfr";
    createLink.target = "_blank";
    let createImg = document.createElement("img");
    createImg.src = `./media/all/${imageName}`;
    createImg.alt = `Popular Game ${index + 1}`;
    createLink.appendChild(createImg);
    createDiv.appendChild(createLink);
    popularGames.appendChild(createDiv);
});

// new games - use next 12 shuffled images
let newGames = document.querySelector(".third-game-box .games-filter-box-img");
newGames.innerHTML = '';

const newImages = shuffledImages.slice(20, 32);
newImages.forEach((imageName, index) => {
    let createDiv = document.createElement("div");
    createDiv.classList.add("game-box");
    let createLink = document.createElement("a");
    createLink.href = "https://www.facebook.com/share/1Q21d1Yz52/?mibextid=wwXIfr";
    createLink.target = "_blank";
    let createImg = document.createElement("img");
    createImg.src = `./media/all/${imageName}`;
    createImg.alt = `New Game ${index + 1}`;
    createLink.appendChild(createImg);
    createDiv.appendChild(createLink);
    newGames.appendChild(createDiv);
});

// coming soon games - use 4 unique images from the end of the array
let comingGames = document.querySelector(".four-game-box .games-filter-box-img");
comingGames.innerHTML = '';

const comingImages = shuffledImages.slice(-4); // Last 4 unique images
comingImages.forEach((imageName, index) => {
    let createDiv = document.createElement("div");
    createDiv.classList.add("game-box");
    let createLink = document.createElement("a");
    createLink.href = "https://www.facebook.com/share/1Q21d1Yz52/?mibextid=wwXIfr";
    createLink.target = "_blank";
    let createImg = document.createElement("img");
    createImg.src = `./media/all/${imageName}`;
    createImg.alt = `Coming Soon Game ${index + 1}`;
    createLink.appendChild(createImg);
    createDiv.appendChild(createLink);
    comingGames.appendChild(createDiv);
});




