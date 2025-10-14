// Song data with audio sources
const songsData = {
    songs: [
        {
            id: 1,
            title: "Drippy",
            artist: "Sidhu Moose Wala",
            image: "img/1.jpg",
            src: "audio/1.mp3"
        },
        {
            id: 2,
            title: "Petrol",
            artist: "Avi Sidhu & Grewal 31 31",
            image: "img/2.jpg",
            src: "audio/2.mp3"
        },
        {
            id: 3,
            title: "Desi Kalakaar",
            artist: "Yo Yo Honey Singh",
            image: "img/3.jpg",
            src: "audio/3.mp3"
        },
        {
            id: 4,
            title: "My Prime",
            artist: "Navaan Sandhu",
            image: "img/4.jpg",
            src: "audio/4.mp3"
        },
        {
            id: 5,
            title: "G.O.A.T",
            artist: "Diljit Dosanjh",
            image: "img/5.jpg",
            src: "audio/5.mp3"
        },
        {
            id: 6,
            title: "Ilzaam",
            artist: "Arjan Dhillon",
            image: "img/6.jpg",
            src: "audio/6.mp3"
        },
        {
            id: 7,
            title: "King Shit",
            artist: "Shubh",
            image: "img/7.jpg",
            src: "audio/7.mp3"
        },
        {
            id: 8,
            title: "Dead Zone",
            artist: "Gulab Sidhu",
            image: "img/8.jpg",
            src: "audio/8.mp3"
        },
        {
            id: 9,
            title: "Chal Jindiye",
            artist: "Amrinder Gill",
            image: "img/9.jpg",
            src: "audio/9.mp3"
        },
        {
            id: 10,
            title: "Regrat",
            artist: "Sidhu Moose Wala",
            image: "img/10.jpg",
            src: "audio/10.mp3"
        },
        {
            id: 11,
            title: "Maa Boldi Aa",
            artist: "Karan Aujla",
            image: "img/11.jpg",
            src: "audio/11.mp3"
        },
        {
            id: 12,
            title: "Nightmare",
            artist: "Chandra Brar",
            image: "img/12.jpg",
            src: "audio/12.mp3"
        },
        {
            id: 13,
            title: "Chandigarh Police",
            artist: "G SkillZ",
            image: "img/13.jpg",
            src: "audio/13.mp3"
        },
        {
            id: 14,
            title: "Munda Iphone Warga",
            artist: "A Key",
            image: "img/14.webp",
            src: "audio/14.mp3"
        },
        {
            id: 15,
            title: "Levels",
            artist: "Sidhu Moose wala",
            image: "img/15.jpg",
            src: "audio/15.mp3"
        },
        {
            id: 16,
            title: "Blue Eyes",
            artist: "Yo Yo Honey Singh",
            image: "img/16.jpg",
            src: "audio/16.mp3"
        },
        {
            id: 17,
            title: "Ki Banu Duniya Da",
            artist: "Gurdas Maan",
            image: "img/17.jpg",
            src: "audio/17.mp3"
        },
        {
            id: 18,
            title: "Pani Deya Bul Buleya",
            artist: "Chamkila",
            image: "img/18.jpg",
            src: "audio/18.mp3"
        },
        {
            id: 19,
            title: "Geet De Wargi",
            artist: "Tarsem Jasser",
            image: "img/19.jpg",
            src: "audio/19.mp3"
        },
        {
            id: 20,
            title: "Dabde Ni",
            artist: "Ammy Virk",
            image: "img/20.jpg",
            src: "audio/20.mp3"
        },
        {
            id: 21,
            title: "Unbothered",
            artist: "Navaan Sandhu",
            image: "img/21.jpg",
            src: "audio/21.mp3"
        },
        {
            id: 22,
            title: "Red Battiyan",
            artist: "R Nait",
            image: "img/22.jpg",
            src: "audio/22.mp3"
        },
        {
            id: 23,
            title: "Brown Munde",
            artist: "AP Dhillon",
            image: "img/23.jpg",
            src: "audio/23.mp3"
        },
        {
            id: 24,
            title: "Fuck Em All",
            artist: "Sidhu Moose Wala",
            image: "img/24.jpg",
            src: "audio/24.mp3"
        },
        {
            id: 25,
            title: "Case",
            artist: "Diljit Dosanjh",
            image: "img/25.jpg",
            src: "audio/25.mp3"
        },
        {
            id: 26,
            title: "Scapegoat",
            artist: "Sidhu Moose Wala",
            image: "img/26.jpg",
            src: "audio/26.mp3"
        },
        {
            id: 27,
            title: "Never Fold",
            artist: "Sidhu Moose Wala",
            image: "img/27.jpg",
            src: "audio/27.mp3"
        },
        {
            id: 28,
            title: "Chote Chote Ghar",
            artist: "Ranjit Bawa",
            image: "img/28.jpg",
            src: "audio/28.mp3"
        },
        {
            id: 29,
            title: "Pendu",
            artist: "Amrinder Gill",
            image: "img/29.jpg",
            src: "audio/29.mp3"
        },
        {
            id: 30,
            title: "Kaun Kuri",
            artist: "KS Makhan",
            image: "img/30.jpg",
            src: "audio/30.mp3"
        },
        {
            id: 31,
            title: "Good Luck Charm",
            artist: "KS Makhan",
            image: "img/31.jpg",
            src: "audio/31.mp3"
        },
        {
            id: 32,
            title: "Bachke Bachke",
            artist: "Karan Aujla",
            image: "img/32.jpg",
            src: "audio/32.mp3"
        },
        {
            id: 33,
            title: "Love Sick",
            artist: "Sidhu Moose Wala",
            image: "img/33.jpg",
            src: "audio/33.mp3"
        },
        {
            id: 34,
            title: "Jatt Life",
            artist: "Varinder Brar",
            image: "img/34.jpg",
            src: "audio/34.mp3"
        },
        {
            id: 35,
            title: "Foreigns",
            artist: "AP Dhillion",
            image: "img/35.jpg",
            src: "audio/35.mp3"
        },
        {
            id: 36,
            title: "Built Different",
            artist: "Sidhu Moose Wala",
            image: "img/36.jpg",
            src: "audio/36.mp3"
        },
        {
            id: 37,
            title: "Racks And Rounds",
            artist: "Sidhu Moose Wala",
            image: "img/37.jpg",
            src: "audio/37.mp3"
        },
        {
            id: 38,
            title: "Goat",
            artist: "AP Dhillion",
            image: "img/38.jpg",
            src: "audio/38.mp3"
        },
        {
            id: 39,
            title: "Jaguar",
            artist: "Bohemia",
            image: "img/39.webp",
            src: "audio/39.mp3"
        },
        {
            id: 40,
            title: "Car Nachdi",
            artist: "Gippy Grewal",
            image: "img/40.jpg",
            src: "audio/40.mp3"
        },
        {
            id: 41,
            title: "I M Better Now",
            artist: "Sidhu Moose Wala",
            image: "img/41.jpg",
            src: "audio/41.mp3"
        },
        {
            id: 42,
            title: "Same Beef",
            artist: "Sidhu Moose Wala",
            image: "img/42.jpg",
            src: "audio/42.mp3"
        },
        {
            id: 43,
            title: "Pagol",
            artist: "Deep Jandu",
            image: "img/43.jpg",
            src: "audio/43.mp3"
        },
        {
            id: 44,
            title: "2 Number",
            artist: "Aminder Gill",
            image: "img/44.jpg",
            src: "audio/44.mp3"
        },
        {
            id: 45,
            title: "Challenge",
            artist: "Ninja",
            image: "img/45.jpg",
            src: "audio/45.mp3"
        },
        {
            id: 46,
            title: "Paapi",
            artist: "Sidhu Moose Wala",
            image: "img/46.jpg",
            src: "audio/46.mp3"
        },
        {
            id: 47,
            title: "Emotional Banda",
            artist: "Ranjit Bawa",
            image: "img/47.jpg",
            src: "audio/47.mp3"
        },
        {
            id: 48,
            title: "Sohne Mukhde Da",
            artist: "Sharry Mann",
            image: "img/48.jpg",
            src: "audio/48.mp3"
        },

    ],
    other: [
        {
            id: 49,
            title: "Fight",
            artist: "KS Makhan",
            image: "img/otherimage/49.webp",
            src: "audio/othersong/49.mp3"
        },
        {
            id: 50,
            title: "Dildarian",
            artist: "Aminder Gill",
            image: "img/otherimage/50.jpg",
            src: "audio/othersong/50.mp3"
        },
        {
            id: 51,
            title: "Meri Zindgi Bana Ja",
            artist: "Sharry Mann",
            image: "img/otherimage/51.webp",
            src: "audio/othersong/51.mp3"
        },
        {
            id: 52,
            title: "Sohni Kuri",
            artist: "Amrinder Gill",
            image: "img/otherimage/52.webp",
            src: "audio/othersong/52.mp3"
        },
        {
            id: 53,
            title: "Changa Mada Time",
            artist: "A-kay",
            image: "img/otherimage/53.jpg",
            src: "audio/othersong/53.mp3"
        },
        {
            id: 54,
            title: "Guerrilla War",
            artist: "Amrit Maan",
            image: "img/otherimage/54.jpg",
            src: "audio/othersong/54.mp3"
        },
        {
            id: 55,
            title: "Gabbroo",
            artist: "Jassi Gill",
            image: "img/otherimage/55.jpg",
            src: "audio/othersong/55.mp3"
        },
        {
            id: 56,
            title: "Dil Tutda",
            artist: "Jassi Gill",
            image: "img/otherimage/56.jpg",
            src: "audio/othersong/56.mp3"
        },
        {
            id: 57,
            title: "Lahore",
            artist: "Ranjit Bawa",
            image: "img/otherimage/57.jpg",
            src: "audio/othersong/57.mp3"
        },
        {
            id: 58,
            title: "Guitar Sikhda",
            artist: "Jassi Gill",
            image: "img/otherimage/58.jpg",
            src: "audio/othersong/58.mp3"
        },
        {
            id: 59,
            title: "Yaarian",
            artist: "Amrinder Gill",
            image: "img/otherimage/59.jpg",
            src: "audio/othersong/59.mp3"
        },
        {
            id: 60,
            title: "Aroma",
            artist: "Sidhu Moose Wala",
            image: "img/otherimage/60.jpg",
            src: "audio/othersong/60.mp3"
        },
        {
            id: 61,
            title: "Saahan Nu Suroor",
            artist: "Feroz Khan",
            image: "img/otherimage/61.jpg",
            src: "audio/othersong/61.mp3"
        },
        {
            id: 62,
            title: "Peshi",
            artist: "Zora Randhawa",
            image: "img/otherimage/62.jpg",
            src: "audio/othersong/62.mp3"
        },
        {
            id: 63,
            title: "Diary",
            artist: "Amrinder Gill",
            image: "img/otherimage/63.jpg",
            src: "audio/othersong/63.mp3"
        },
        {
            id: 64,
            title: "Dil Da Dimaag",
            artist: "Sharry Maan",
            src: "audio/othersong/64.mp3",
            image: "img/otherimage/64.jpg"
        },
        {
            id: 65,
            title: "Sher-E-Panjab",
            artist: "Arjan Dhillon",
            src: "audio/othersong/65.mp3",
            image: "img/otherimage/65.jpg"
        },
        {
            id: 66,
            title: "Oh Kyu Ni Jaan Ske",
            artist: "Ninja",
            src: "audio/othersong/66.mp3",
            image: "img/otherimage/66.jpg"
        },
        {
            id: 67,
            title: "Loud Jatt",
            artist: "Garrie Dhaliwal",
            src: "audio/othersong/67.mp3",
            image: "img/otherimage/67.jpg"
        },
        {
            id: 68,
            title: "Police",
            artist: "Cheema Y",
            src: "audio/othersong/68.mp3",
            image: "img/otherimage/68.jpg"
        },
        {
            id: 69,
            title: "Vaaj",
            artist: "Kanwar Grewal",
            src: "audio/othersong/69.mp3",
            image: "img/otherimage/69.jpg"
        },
        {
            id: 70,
            title: "Big Scene",
            artist: "Diljit Dosanjh",
            src: "audio/othersong/70.mp3",
            image: "img/otherimage/70.jpg"
        },
        {
            id: 71,
            title: "Jordan",
            artist: "A-Key",
            src: "audio/othersong/71.mp3",
            image: "img/otherimage/71.jpg"
        },
        {
            id: 72,
            title: "Bass Baliye",
            artist: "Gurj Sidhu",
            src: "audio/othersong/72.mp3",
            image: "img/otherimage/72.jpg"
        },
        {
            id: 73,
            title: "Dil Yaaran De",
            artist: "Gurj Sidhu",
            src: "audio/othersong/73.mp3",
            image: "img/otherimage/73.jpg"
        },
        {
            id: 74,
            title: "Kaali Range",
            artist: "R Nait",
            src: "audio/othersong/74.mp3",
            image: "img/otherimage/74.jpg"
        },
        {
            id: 75,
            title: "Adha Pind",
            artist: "Gurj Sidhu",
            src: "audio/othersong/75.mp3",
            image: "img/otherimage/75.jpg"
        },
        {
            id: 76,
            title: "Flop",
            artist: "Sidhu Moose Wala",
            src: "audio/othersong/76.mp3",
            image: "img/otherimage/76.jpg"
        },
        {
            id: 77,
            title: "Tru Talk",
            artist: "Jassi Gill",
            src: "audio/othersong/77.mp3",
            image: "img/otherimage/77.jpg"
        },
        {
            id: 78,
            title: "Litt Lyf",
            artist: "Babble Rai",
            src: "audio/othersong/78.mp3",
            image: "img/otherimage/78.jpg"
        },
        {
            id: 79,
            title: "By God",
            artist: "B Jay Randhawa",
            src: "audio/othersong/79.mp3",
            image: "img/otherimage/79.webp"
        },
        {
            id: 80,
            title: "Fuel",
            artist: "Gippy Grewal",
            src: "audio/othersong/80.mp3",
            image: "img/otherimage/80.jpg"
        },
        {
            id: 81,
            title: "Raatan",
            artist: "Amrinder Gill",
            src: "audio/othersong/81.mp3",
            image: "img/otherimage/81.webp"
        },
        {
            id: 82,
            title: "Hauli Hauli",
            artist: "Sidhu Moose Wala",
            src: "audio/othersong/82.mp3",
            image: "img/otherimage/82.jpg"
        },
        {
            id: 83,
            title: "Kaa Bole Banere Te",
            artist: "A-Key",
            src: "audio/othersong/83.mp3",
            image: "img/otherimage/83.jpg"
        },
        {
            id: 84,
            title: "Sahan Ton Nere",
            artist: "Amrinder Gill",
            src: "audio/othersong/84.mp3",
            image: "img/otherimage/84.jpg"
        },
        {
            id: 85,
            title: "Mitti Di Khushboo",
            artist: "Ayushmann Khurrana",
            src: "audio/othersong/85.mp3",
            image: "img/otherimage/85.jpg"
        },
        {
            id: 86,
            title: "Yaari",
            artist: "Maninder Butter",
            src: "audio/othersong/86.mp3",
            image: "img/otherimage/86.jpg"
        },
        {
            id: 87,
            title: "Ehna Hanjuyan",
            artist: "Kaler Kanth",
            src: "audio/othersong/87.mp3",
            image: "img/otherimage/87.jpg"
        },
        {
            id: 88,
            title: "Insomnia",
            artist: "Sippy Gill",
            src: "audio/othersong/88.mp3",
            image: "img/otherimage/88.webp"
        },
        {
            id: 89,
            title: "Forget About It",
            artist: "Sidhu Moose Wala",
            src: "audio/othersong/89.mp3",
            image: "img/otherimage/89.webp"
        },
        {
            id: 90,
            title: "Sidhu Anthem",
            artist: "Sidhu Moose Wala",
            src: "audio/othersong/90.mp3",
            image: "img/otherimage/90.jpg"
        },
        {
            id: 91,
            title: "Rang Sanwla",
            artist: "Aarsh Benipal",
            src: "audio/othersong/91.mp3",
            image: "img/otherimage/91.jpg"
        },
        {
            id: 92,
            title: "Racks And Rounds",
            artist: "Sidhu Moose Wala",
            src: "audio/othersong/92.mp3",
            image: "img/otherimage/92.webp"
        },
        {
            id: 93,
            title: "Supna",
            artist: "Amrinder Gill",
            src: "audio/othersong/93.mp3",
            image: "img/otherimage/93.jpg"
        },
        {
            id: 94,
            title: "Channa",
            artist: "Gippy Grewal",
            src: "audio/othersong/94.mp3",
            image: "img/otherimage/94.webp"
        },
        {
            id: 95,
            title: "Naar",
            artist: "Babbu Maan",
            src: "audio/othersong/95.mp3",
            image: "img/otherimage/95.jpg"
        },
        {
            id: 96,
            title: "Black Suit",
            artist: "Preet Harpal",
            src: "audio/othersong/96.mp3",
            image: "img/otherimage/96.jpg"
        },
        {
            id: 98,
            title: "Oh Bande ",
            artist: "Dilraj Dhillon",
            src: "audio/othersong/97.mp3",
            image: "img/otherimage/97.jpg"
        },



    ],
    phonk: [
    { 
        id: 97, 
        title: "Who Is She x The Perfect Girl", 
        artist: " Xanemusic, NVBR", 
        image: "img/phonk/1.jpg", 
        src: "audio/phonksong/1.mp3" 
    },
    { 
        id: 99, 
        title: "Experience", 
        artist: " Noel.smt", 
        image: "img/phonk/2.webp", 
        src: "audio/phonksong/2.mp3" 
    },
    { 
        id: 100, 
        title: "7weeks & 3 Days", 
        artist: " Luigi version", 
        image: "img/phonk/3.jpg", 
        src: "audio/phonksong/3.mp3" 
    },
    { 
        id: 101, 
        title: "Kerosene", 
        artist: "  Crystal Castles", 
        image: "img/phonk/4.jpg", 
        src: "audio/phonksong/4.mp3" 
    },
    { 
        id: 102, 
        title: " Death Is No More", 
        artist: "  BLESSED MANE", 
        image: "img/phonk/5.jpg", 
        src: "audio/phonksong/5.mp3" 
    },
    { 
        id: 103, 
        title: "BONKERS", 
        artist: "MonkeyTaio", 
        image: "img/phonk/6.jpg", 
        src: "audio/phonksong/6.mp3" 
    },
    { 
        id: 104, 
        title: "Solitude", 
        artist: "Fatih", 
        image: "img/phonk/7.jpg", 
        src: "audio/phonksong/7.mp3" 
    },
    { 
        id: 105, 
        title: "Fluxxwave", 
        artist: "Clovis Reyes", 
        image: "img/phonk/8.jpg", 
        src: "audio/phonksong/8.mp3" 
    },
    { 
        id: 106, 
        title: "Mask Off", 
        artist: "Future", 
        image: "img/phonk/9.jpg", 
        src: "audio/phonksong/9.mp3" 
    },
    { 
        id: 107, 
        title: "HomeTown Hero", 
        artist: " Not Affiliated", 
        image: "img/phonk/10.jpg", 
        src: "audio/phonksong/10.mp3" 
    },
    { 
        id: 108, 
        title: "I was Only Tamporary", 
        artist: " Not Affiliated", 
        image: "img/phonk/11.jpg", 
        src: "audio/phonksong/11.mp3" 
    },
    { 
        id: 109, 
        title: " FUNK UNIVERSO", 
        artist: " Irokz", 
        image: "img/phonk/12.jpg", 
        src: "audio/phonksong/12.mp3" 
    },
    { 
        id: 110, 
        title: " Bloody Mary ", 
        artist: " Lady Gaga", 
        image: "img/phonk/13.jpg", 
        src: "audio/phonksong/13.mp3" 
    },
    { 
        id: 111, 
        title: "Lovely Bastards", 
        artist: "ZWE1HVNDXR, yatashigang; ", 
        image: "img/phonk/14.jpeg", 
        src: "audio/phonksong/14.mp3" 
    },
    { 
        id: 112, 
        title: "Metamorphoss", 
        artist: "InterWorld", 
        image: "img/phonk/15.jpg", 
        src: "audio/phonksong/15.mp3" 
    },
    { 
        id: 113, 
        title: "Ethereal", 
        artist: "Mikeeymind", 
        image: "img/phonk/16.jpg", 
        src: "audio/phonksong/16.mp3" 
    },
    { 
        id: 114, 
        title: "Fainted", 
        artist: "Narvent", 
        image: "img/phonk/17.jpg", 
        src: "audio/phonksong/17.mp3" 
    },
    { 
        id: 115, 
        title: "Your Love Is My Drug", 
        artist: "Kesha", 
        image: "img/phonk/18.jpg", 
        src: "audio/phonksong/18.mp3" 
    },
    { 
        id: 116, 
        title: "Cancel", 
        artist: "Redchinawave", 
        image: "img/phonk/19.jpg", 
        src: "audio/phonksong/19.mp3" 
    },
    { 
        id: 117, 
        title: "Slide da Treme", 
        artist: "Dj Fnk", 
        image: "img/phonk/20.jpg", 
        src: "audio/phonksong/20.mp3" 
    },
    { 
        id: 118, 
        title: "X-Tali", 
        artist: "Mxccree", 
        image: "img/phonk/21.jpg", 
        src: "audio/phonksong/21.mp3" 
    },
        
    ]
};

// Player state
let currentSong = null;
let isPlaying = false;
let currentPlaylist = [];
let currentPlaylistIndex = 0;
let isShuffled = false;
let isRepeating = false;
let currentSection = 'home';

// User data
let likedSongs = [];
let recentlyPlayed = [];
let playlists = [];
let currentPlaylistId = null;

// DOM elements - Audio player
const audioPlayer = document.getElementById('audioPlayer');

// DOM elements - Bottom player
const bottomPlayer = document.getElementById('bottomPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseIcon = document.getElementById('playPauseIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');
const volumeLevel = document.getElementById('volumeLevel');
const volumeBtn = document.getElementById('volumeBtn');
const nowPlayingTitle = document.getElementById('nowPlayingTitle');
const nowPlayingArtist = document.getElementById('nowPlayingArtist');
const nowPlayingImage = document.getElementById('nowPlayingImage');

// DOM elements - Home player
const playPauseBtnHome = document.getElementById('playPauseBtnHome');
const playPauseIconHome = document.getElementById('playPauseIconHome');
const prevBtnHome = document.getElementById('prevBtnHome');
const nextBtnHome = document.getElementById('nextBtnHome');
const shuffleBtnHome = document.getElementById('shuffleBtnHome');
const repeatBtnHome = document.getElementById('repeatBtnHome');
const progressBarHome = document.getElementById('progressBarHome');
const progressHome = document.getElementById('progressHome');
const currentTimeHome = document.getElementById('currentTimeHome');
const durationHome = document.getElementById('durationHome');
const volumeSliderHome = document.getElementById('volumeSliderHome');
const volumeLevelHome = document.getElementById('volumeLevelHome');
const volumeBtnHome = document.getElementById('volumeBtnHome');
const homePlayerTitle = document.getElementById('homePlayerTitle');
const homePlayerArtist = document.getElementById('homePlayerArtist');
const homePlayerImage = document.getElementById('homePlayerImage');
const homeLikeBtn = document.getElementById('homeLikeBtn');

// DOM elements - Modals
const createPlaylistModal = document.getElementById('create-playlist-modal');
const addToPlaylistModal = document.getElementById('add-to-playlist-modal');
const queueModal = document.getElementById('queue-modal');
const playlistNameInput = document.getElementById('playlist-name');
const playlistDescriptionInput = document.getElementById('playlist-description');
const playlistList = document.getElementById('playlist-list');

const searchInput = document.getElementById('searchInput');

// Initialize
function init() {
    renderAllSongs();
    setupEventListeners();
    updateVolume(70);
    showSection('home');
    setupAudioPlayer();
    loadUserData();
}

// Setup audio player
function setupAudioPlayer() {
    // Audio event listeners
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', handleSongEnd);
    audioPlayer.addEventListener('loadedmetadata', updateDuration);
    audioPlayer.addEventListener('volumechange', updateVolumeUI);
}

// Load user data from localStorage
function loadUserData() {
    try {
        const savedLikedSongs = localStorage.getItem('likedSongs');
        const savedRecentlyPlayed = localStorage.getItem('recentlyPlayed');
        const savedPlaylists = localStorage.getItem('playlists');

        if (savedLikedSongs) {
            likedSongs = JSON.parse(savedLikedSongs);
        }

        if (savedRecentlyPlayed) {
            recentlyPlayed = JSON.parse(savedRecentlyPlayed);
        }

        if (savedPlaylists) {
            playlists = JSON.parse(savedPlaylists);
        }
    } catch (error) {
        console.error('Error loading user data:', error);
        // Initialize with empty arrays if there's an error
        likedSongs = [];
        recentlyPlayed = [];
        playlists = [];
    }
}

// Save user data to localStorage
function saveUserData() {
    try {
        localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
        localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed));
        localStorage.setItem('playlists', JSON.stringify(playlists));
    } catch (error) {
        console.error('Error saving user data:', error);
    }
}

// Render all songs
function renderAllSongs() {
    renderSongs('songs-grid', songsData.songs, true, false, true);
    renderSongs('other-grid', songsData.other, true, false, true);
    renderSongs('phonk-grid', songsData.phonk, true, false, true);
}

// Render songs in a specific grid
function renderSongs(gridId, songs, showLikeButton = true, showRemoveButton = false, showAddButton = false) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    grid.innerHTML = songs.map(song => `
                <div class="song-card" data-song-id="${song.id}" data-category="${getCategoryFromGridId(gridId)}">
                    ${showRemoveButton ? `<div class="remove-btn" data-song-id="${song.id}" data-grid="${gridId}">
                        <i class="fas fa-times"></i>
                    </div>` : ''}
                    ${showAddButton ? `<div class="add-to-playlist-btn" data-song-id="${song.id}">
                        <i class="fas fa-plus"></i>
                    </div>` : ''}
                    ${showLikeButton ? `<div class="like-btn ${isSongLiked(song.id) ? 'liked' : ''}" data-song-id="${song.id}">
                        <i class="fas fa-heart"></i>
                    </div>` : ''}
                    <img src="${song.image}" alt="${song.title}" class="song-image">
                    <div class="song-info">
                        <h3>${song.title}</h3>
                        <p>${song.artist}</p>
                    </div>
                    <div class="play-overlay">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            `).join('');
}

// Check if a song is liked
function isSongLiked(songId) {
    return likedSongs.some(song => song.id === songId);
}

// Get category from grid ID
function getCategoryFromGridId(gridId) {
    if (gridId === 'songs-grid') return 'songs';
    if (gridId === 'other-grid') return 'other';
    if (gridId === 'phonk-grid') return 'phonk';
    if (gridId === 'liked-grid') return 'liked';
    if (gridId === 'recent-grid') return 'recent';
    if (gridId === 'playlist-detail-grid') return 'playlist';
    return null;
}

// Show a specific section
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const sectionEl = document.getElementById(`${sectionName}-section`);
    if (sectionEl) {
        sectionEl.classList.remove('hidden');
        currentSection = sectionName;
    }

    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    const activeNavItem = document.querySelector(`.nav-item[data-section="${sectionName}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }

    // Show/hide bottom player based on section
    if (sectionName === 'home') {
        bottomPlayer.classList.add('hidden');
        // Add class to body to hide search bar
        document.body.classList.add('home-section');
    } else {
        bottomPlayer.classList.remove('hidden');
        // Remove class from body to show search bar
        document.body.classList.remove('home-section');
    }

    // Load section-specific content
    if (sectionName === 'liked') {
        renderLikedSongs();
    } else if (sectionName === 'recent') {
        renderRecentlyPlayed();
    } else if (sectionName === 'playlists') {
        renderPlaylists();
    } else if (sectionName === 'playlist-detail') {
        renderPlaylistDetail();
    }
}

// Render liked songs
function renderLikedSongs() {
    const likedGrid = document.getElementById('liked-grid');
    const emptyState = document.getElementById('liked-empty');

    if (!likedGrid) return;

    if (likedSongs.length === 0) {
        likedGrid.style.display = 'none';
        emptyState.style.display = 'flex';
    } else {
        likedGrid.style.display = 'grid';
        emptyState.style.display = 'none';
        renderSongs('liked-grid', likedSongs, false, true, true);
    }
}

// Render recently played songs
function renderRecentlyPlayed() {
    const recentGrid = document.getElementById('recent-grid');
    const emptyState = document.getElementById('recent-empty');

    if (!recentGrid) return;

    // Filter out songs with undefined title or artist
    const validRecentlyPlayed = recentlyPlayed.filter(song => song && song.title && song.artist);

    if (validRecentlyPlayed.length === 0) {
        recentGrid.style.display = 'none';
        emptyState.style.display = 'flex';
    } else {
        recentGrid.style.display = 'grid';
        emptyState.style.display = 'none';
        renderSongs('recent-grid', validRecentlyPlayed, false, true, true);
    }

    // Update the recentlyPlayed array to remove invalid entries
    recentlyPlayed = validRecentlyPlayed;
    saveUserData();
}

// Render playlists
function renderPlaylists() {
    const playlistContainer = document.getElementById('playlist-container');
    const emptyState = document.getElementById('playlists-empty');

    if (!playlistContainer) return;

    if (playlists.length === 0) {
        playlistContainer.style.display = 'none';
        emptyState.style.display = 'flex';
    } else {
        playlistContainer.style.display = 'flex';
        emptyState.style.display = 'none';

        playlistContainer.innerHTML = '';

        playlists.forEach(playlist => {
            const playlistCard = document.createElement('div');
            playlistCard.className = 'playlist-card';
            playlistCard.dataset.playlistId = playlist.id;
            playlistCard.innerHTML = `
                        <div class="remove-btn" data-playlist-id="${playlist.id}">
                            <i class="fas fa-times"></i>
                        </div>
                        <div class="playlist-image">
                            <i class="fas fa-music"></i>
                        </div>
                        <div class="playlist-info">
                            <h3>${playlist.name}</h3>
                            <p>${playlist.songs ? playlist.songs.length : 0} songs</p>
                        </div>
                    `;
            playlistCard.addEventListener('click', (e) => {
                if (e.target.closest('.remove-btn')) return; // Don't navigate if remove button clicked
                currentPlaylistId = playlist.id;
                showSection('playlist-detail');
            });
            playlistContainer.appendChild(playlistCard);
        });
    }
}

// Render playlist detail
function renderPlaylistDetail() {
    const playlist = playlists.find(p => p.id === currentPlaylistId);
    const playlistDetailTitle = document.getElementById('playlist-detail-title');
    const playlistDetailGrid = document.getElementById('playlist-detail-grid');
    const emptyState = document.getElementById('playlist-detail-empty');

    if (!playlistDetailTitle || !playlistDetailGrid || !emptyState) return;

    if (playlist) {
        playlistDetailTitle.innerHTML = `<i class="fas fa-list"></i>${playlist.name}`;

        if (!playlist.songs || playlist.songs.length === 0) {
            playlistDetailGrid.style.display = 'none';
            emptyState.style.display = 'flex';
        } else {
            playlistDetailGrid.style.display = 'grid';
            emptyState.style.display = 'none';
            renderSongs('playlist-detail-grid', playlist.songs, true, true, false);
        }
    }
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu button
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileSidebar = document.getElementById('mobileSidebar');

    if (mobileMenuBtn && mobileNavOverlay && mobileSidebar) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.toggle('active');
            mobileSidebar.classList.toggle('active');
        });

        mobileNavOverlay.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('active');
            mobileSidebar.classList.remove('active');
        });
    }

    // Bottom player controls
    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    progressBar.addEventListener('click', seekTo);
    volumeSlider.addEventListener('click', setVolume);
    volumeBtn.addEventListener('click', toggleMute);

    // Home player controls
    playPauseBtnHome.addEventListener('click', togglePlayPause);
    prevBtnHome.addEventListener('click', playPrevious);
    nextBtnHome.addEventListener('click', playNext);
    shuffleBtnHome.addEventListener('click', toggleShuffle);
    repeatBtnHome.addEventListener('click', toggleRepeat);
    progressBarHome.addEventListener('click', seekTo);
    volumeSliderHome.addEventListener('click', setVolume);
    volumeBtnHome.addEventListener('click', toggleMute);
    queueBtnHome.addEventListener('click', showQueueModal);
    homeLikeBtn.addEventListener('click', () => {
        if (currentSong) {
            toggleLikeSong(currentSong.id);
        }
    });

    // Song cards
    document.addEventListener('click', (e) => {
        const songCard = e.target.closest('.song-card');
        if (songCard) {
            // Don't play if clicking on buttons
            if (e.target.closest('.like-btn') || e.target.closest('.remove-btn') || e.target.closest('.add-to-playlist-btn')) {
                // Handle buttons below
            } else {
                const songId = parseInt(songCard.dataset.songId);
                const category = songCard.dataset.category;
                playSong(songId, category);
            }
        }

        // Like button
        const likeBtn = e.target.closest('.like-btn');
        if (likeBtn) {
            const songId = parseInt(likeBtn.dataset.songId);
            toggleLikeSong(songId);
        }

        // Remove button
        const removeBtn = e.target.closest('.remove-btn');
        if (removeBtn) {
            if (removeBtn.dataset.songId) {
                // Remove song
                const songId = parseInt(removeBtn.dataset.songId);
                const gridId = removeBtn.dataset.grid;
                removeSongFromCollection(songId, gridId);
            } else if (removeBtn.dataset.playlistId) {
                // Remove playlist
                const playlistId = parseInt(removeBtn.dataset.playlistId);
                deletePlaylist(playlistId);
            }
        }

        // Add to playlist button
        const addToPlaylistBtn = e.target.closest('.add-to-playlist-btn');
        if (addToPlaylistBtn) {
            const songId = parseInt(addToPlaylistBtn.dataset.songId);
            showAddToPlaylistModal(songId);
        }
    });

    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            if (section) {
                showSection(section);
            }
        });
    });

    // Search
    searchInput.addEventListener('input', handleSearch);

    // Create playlist
    const createPlaylistBtn = document.getElementById('create-playlist');
    if (createPlaylistBtn) {
        createPlaylistBtn.addEventListener('click', () => {
            if (createPlaylistModal) {
                createPlaylistModal.classList.add('active');
                if (playlistNameInput) playlistNameInput.value = '';
                if (playlistDescriptionInput) playlistDescriptionInput.value = '';
                if (playlistNameInput) playlistNameInput.focus();
            }
        });
    }

    // Modal close buttons
    const closeModalBtn = document.getElementById('close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            if (createPlaylistModal) createPlaylistModal.classList.remove('active');
        });
    }

    const cancelCreateBtn = document.getElementById('cancel-create');
    if (cancelCreateBtn) {
        cancelCreateBtn.addEventListener('click', () => {
            if (createPlaylistModal) createPlaylistModal.classList.remove('active');
        });
    }

    const confirmCreateBtn = document.getElementById('confirm-create');
    if (confirmCreateBtn) {
        confirmCreateBtn.addEventListener('click', createPlaylist);
    }

    // Add to playlist modal
    const closeAddModalBtn = document.getElementById('close-add-modal');
    if (closeAddModalBtn) {
        closeAddModalBtn.addEventListener('click', () => {
            if (addToPlaylistModal) addToPlaylistModal.classList.remove('active');
        });
    }

    const cancelAddBtn = document.getElementById('cancel-add');
    if (cancelAddBtn) {
        cancelAddBtn.addEventListener('click', () => {
            if (addToPlaylistModal) addToPlaylistModal.classList.remove('active');
        });
    }

    // Back to playlists button
    const backToPlaylistsBtn = document.getElementById('back-to-playlists');
    if (backToPlaylistsBtn) {
        backToPlaylistsBtn.addEventListener('click', () => {
            showSection('playlists');
        });
    }

    // Close queue modal button
    const closeQueueModalBtn = document.getElementById('close-queue-modal');
    if (closeQueueModalBtn) {
        closeQueueModalBtn.addEventListener('click', () => {
            if (queueModal) queueModal.classList.remove('active');
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === createPlaylistModal) {
            createPlaylistModal.classList.remove('active');
        }
        if (e.target === addToPlaylistModal) {
            addToPlaylistModal.classList.remove('active');
        }
        if (e.target === queueModal) {
            queueModal.classList.remove('active');
        }
    });
}

// Create a new playlist
function createPlaylist() {
    const name = playlistNameInput.value.trim();
    const description = playlistDescriptionInput.value.trim();

    if (!name) {
        if (playlistNameInput) playlistNameInput.focus();
        return;
    }

    // Initialize playlists array if it doesn't exist
    if (!playlists) {
        playlists = [];
    }

    const newPlaylist = {
        id: Date.now(),
        name: name,
        description: description,
        songs: [],
        createdAt: new Date().toISOString()
    };

    playlists.push(newPlaylist);
    saveUserData();

    if (createPlaylistModal) {
        createPlaylistModal.classList.remove('active');
    }

    // Show playlists section
    showSection('playlists');
}

// Show add to playlist modal
function showAddToPlaylistModal(songId) {
    if (!playlists || playlists.length === 0) {
        // If no playlists, show create playlist modal instead
        if (createPlaylistModal) {
            createPlaylistModal.classList.add('active');
        }
        return;
    }

    // Clear previous list
    if (playlistList) {
        playlistList.innerHTML = '';
    }

    // Add playlist options
    playlists.forEach(playlist => {
        const playlistOption = document.createElement('div');
        playlistOption.className = 'playlist-card';
        playlistOption.innerHTML = `
                    <div class="playlist-image">
                        <i class="fas fa-music"></i>
                    </div>
                    <div class="playlist-info">
                        <h3>${playlist.name}</h3>
                        <p>${playlist.songs ? playlist.songs.length : 0} songs</p>
                    </div>
                `;

        playlistOption.addEventListener('click', () => {
            addSongToPlaylist(songId, playlist.id);
            if (addToPlaylistModal) addToPlaylistModal.classList.remove('active');
        });

        if (playlistList) {
            playlistList.appendChild(playlistOption);
        }
    });

    // Show/hide empty state
    const noPlaylistsEl = document.getElementById('no-playlists');
    if (noPlaylistsEl) {
        noPlaylistsEl.style.display = 'none';
    }

    // Show modal
    if (addToPlaylistModal) {
        addToPlaylistModal.classList.add('active');
    }
}

// Add song to playlist
function addSongToPlaylist(songId, playlistId) {
    const playlist = playlists.find(p => p.id === playlistId);
    const allSongs = [...songsData.songs, ...songsData.other, ...songsData.phonk];
    const song = allSongs.find(s => s.id === songId);

    if (!playlist || !song) return;

    // Initialize songs array if it doesn't exist
    if (!playlist.songs) {
        playlist.songs = [];
    }

    if (!playlist.songs.some(s => s.id === songId)) {
        playlist.songs.push(song);
        saveUserData();

        // If we're currently viewing this playlist, refresh it
        if (currentSection === 'playlist-detail' && currentPlaylistId === playlistId) {
            renderPlaylistDetail();
        }
    }
}

// Remove song from collection
function removeSongFromCollection(songId, gridId) {
    if (gridId === 'liked-grid') {
        // Remove from liked songs
        const index = likedSongs.findIndex(s => s.id === songId);
        if (index !== -1) {
            likedSongs.splice(index, 1);
            saveUserData();
            renderLikedSongs();
        }
    } else if (gridId === 'recent-grid') {
        // Remove from recently played
        const index = recentlyPlayed.findIndex(s => s.id === songId);
        if (index !== -1) {
            recentlyPlayed.splice(index, 1);
            saveUserData();
            renderRecentlyPlayed();
        }
    } else if (gridId === 'playlist-detail-grid') {
        // Remove from playlist
        const playlist = playlists.find(p => p.id === currentPlaylistId);
        if (playlist && playlist.songs) {
            const index = playlist.songs.findIndex(s => s.id === songId);
            if (index !== -1) {
                playlist.songs.splice(index, 1);
                saveUserData();
                renderPlaylistDetail();
            }
        }
    }
}

// Delete playlist
function deletePlaylist(playlistId) {
    const index = playlists.findIndex(p => p.id === playlistId);
    if (index !== -1) {
        playlists.splice(index, 1);
        saveUserData();
        renderPlaylists();
        // If we're viewing the deleted playlist, go back to playlists
        if (currentPlaylistId === playlistId) {
            showSection('playlists');
        }
    }
}

// Toggle like for a song
function toggleLikeSong(songId) {
    const allSongs = [...songsData.songs, ...songsData.other, ...songsData.phonk];
    const song = allSongs.find(s => s.id === songId);

    if (!song) return;

    const index = likedSongs.findIndex(s => s.id === songId);

    if (index === -1) {
        // Add to liked songs
        likedSongs.unshift(song);
    } else {
        // Remove from liked songs
        likedSongs.splice(index, 1);
    }

    saveUserData();

    // Update UI
    const likeBtn = document.querySelector(`.like-btn[data-song-id="${songId}"]`);
    if (likeBtn) {
        likeBtn.classList.toggle('liked');
    }

    // Update home like button
    if (homeLikeBtn && currentSong) {
        homeLikeBtn.classList.toggle('liked', isSongLiked(currentSong.id));
    }

    // If we're in the liked section, refresh it
    if (currentSection === 'liked') {
        renderLikedSongs();
    }
}

// Play a song
function playSong(songId, category) {
    const allSongs = [...songsData.songs, ...songsData.other, ...songsData.phonk];
    const song = allSongs.find(s => s.id === songId);

    if (!song) return;

    currentSong = song;

    // Set current playlist based on category
    if (category === 'songs') {
        currentPlaylist = songsData.songs;
    } else if (category === 'other') {
        currentPlaylist = songsData.other;
    } else if (category === 'phonk') {
        currentPlaylist = songsData.phonk;
    } else if (category === 'liked') {
        currentPlaylist = likedSongs;
    } else if (category === 'recent') {
        currentPlaylist = recentlyPlayed;
    } else if (category === 'playlist') {
        const playlist = playlists.find(p => p.id === currentPlaylistId);
        currentPlaylist = playlist && playlist.songs ? playlist.songs : [];
    }

    currentPlaylistIndex = currentPlaylist.findIndex(s => s.id === songId);

    // Add to recently played
    addToRecentlyPlayed(song);

    // Load and play the song
    audioPlayer.src = song.src;
    audioPlayer.load();

    updateNowPlaying();
    play();
}

// Add song to recently played
function addToRecentlyPlayed(song) {
    // Remove if already in list
    const index = recentlyPlayed.findIndex(s => s.id === song.id);
    if (index !== -1) {
        recentlyPlayed.splice(index, 1);
    }

    // Add to beginning of list
    recentlyPlayed.unshift(song);

    // Keep only the last 20 songs
    if (recentlyPlayed.length > 20) {
        recentlyPlayed = recentlyPlayed.slice(0, 20);
    }

    saveUserData();

    // If we're in the recent section, refresh it
    if (currentSection === 'recent') {
        renderRecentlyPlayed();
    }
}

// Update now playing display (both players)
function updateNowPlaying() {
    // Update bottom player
    if (currentSong) {
        if (nowPlayingTitle) nowPlayingTitle.textContent = currentSong.title;
        if (nowPlayingArtist) nowPlayingArtist.textContent = currentSong.artist;
        if (nowPlayingImage) nowPlayingImage.src = currentSong.image;
    } else {
        if (nowPlayingTitle) nowPlayingTitle.textContent = 'Select a song';
        if (nowPlayingArtist) nowPlayingArtist.textContent = 'No song playing';
        if (nowPlayingImage) nowPlayingImage.src = 'img/icon/icon.jpg';
    }

    // Update home player
    if (currentSong) {
        if (homePlayerTitle) homePlayerTitle.textContent = currentSong.title;
        if (homePlayerArtist) homePlayerArtist.textContent = currentSong.artist;
        if (homePlayerImage) homePlayerImage.src = currentSong.image;
        if (homeLikeBtn) homeLikeBtn.classList.toggle('liked', isSongLiked(currentSong.id));
    } else {
        if (homePlayerTitle) homePlayerTitle.textContent = 'Select a song';
        if (homePlayerArtist) homePlayerArtist.textContent = 'No song playing';
        if (homePlayerImage) homePlayerImage.src = 'img/icon/icon.jpg';
        if (homeLikeBtn) homeLikeBtn.classList.remove('liked');
    }

    // Update playing state on cards
    document.querySelectorAll('.song-card').forEach(card => {
        const icon = card.querySelector('.play-overlay i');
        card.classList.remove('playing');
        if (currentSong && parseInt(card.dataset.songId) === currentSong.id) {
            card.classList.add('playing');
            if (isPlaying) {
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
            } else {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
            }
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    });
}

// Toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        pause();
    } else {
        if (currentSong) {
            play();
        }
    }
}

// Play
function play() {
    audioPlayer.play()
        .then(() => {
            isPlaying = true;
            // Update bottom player
            if (playPauseIcon) playPauseIcon.classList.remove('fa-play');
            if (playPauseIcon) playPauseIcon.classList.add('fa-pause');
            // Update home player
            if (playPauseIconHome) playPauseIconHome.classList.remove('fa-play');
            if (playPauseIconHome) playPauseIconHome.classList.add('fa-pause');
        })
        .catch(error => {
            console.error('Error playing audio:', error);
        });
}

// Pause
function pause() {
    audioPlayer.pause();
    isPlaying = false;
    // Update bottom player
    if (playPauseIcon) playPauseIcon.classList.remove('fa-pause');
    if (playPauseIcon) playPauseIcon.classList.add('fa-play');
    // Update home player
    if (playPauseIconHome) playPauseIconHome.classList.remove('fa-pause');
    if (playPauseIconHome) playPauseIconHome.classList.add('fa-play');
}

// Play previous song
function playPrevious() {
    if (!currentPlaylist || currentPlaylist.length === 0) return;

    if (currentPlaylistIndex > 0) {
        currentPlaylistIndex--;
    } else {
        currentPlaylistIndex = currentPlaylist.length - 1;
    }

    currentSong = currentPlaylist[currentPlaylistIndex];

    // Add to recently played
    addToRecentlyPlayed(currentSong);

    playSong(currentSong.id, getCategoryFromCurrentPlaylist());
}

// Play next song
function playNext() {
    if (!currentPlaylist || currentPlaylist.length === 0) return;

    if (isShuffled) {
        currentPlaylistIndex = Math.floor(Math.random() * currentPlaylist.length);
    } else if (currentPlaylistIndex < currentPlaylist.length - 1) {
        currentPlaylistIndex++;
    } else {
        if (isRepeating) {
            currentPlaylistIndex = 0;
        } else {
            pause();
            return;
        }
    }

    currentSong = currentPlaylist[currentPlaylistIndex];

    // Add to recently played
    addToRecentlyPlayed(currentSong);

    playSong(currentSong.id, getCategoryFromCurrentPlaylist());
}

// Get category from current playlist
function getCategoryFromCurrentPlaylist() {
    if (currentPlaylist === songsData.songs) return 'songs';
    if (currentPlaylist === songsData.other) return 'other';
    if (currentPlaylist === songsData.phonk) return 'phonk';
    if (currentPlaylist === likedSongs) return 'liked';
    if (currentPlaylist === recentlyPlayed) return 'recent';
    if (playlists && playlists.some(p => p.songs === currentPlaylist)) return 'playlist';
    return null;
}

// Toggle shuffle
function toggleShuffle() {
    isShuffled = !isShuffled;
    if (shuffleBtn) shuffleBtn.style.color = isShuffled ? 'var(--accent)' : 'var(--text-primary)';
    if (shuffleBtnHome) shuffleBtnHome.style.color = isShuffled ? 'var(--accent)' : 'var(--text-primary)';
}

// Toggle repeat
function toggleRepeat() {
    isRepeating = !isRepeating;
    if (repeatBtn) repeatBtn.style.color = isRepeating ? 'var(--accent)' : 'var(--text-primary)';
    if (repeatBtnHome) repeatBtnHome.style.color = isRepeating ? 'var(--accent)' : 'var(--text-primary)';
}

// Seek to position
function seekTo(e) {
    if (!currentSong) return;

    const rect = e.target.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const currentTime = percent * audioPlayer.duration;

    audioPlayer.currentTime = currentTime;
}

// Set volume
function setVolume(e) {
    const rect = e.target.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    updateVolume(percent * 100);
}

// Update volume
function updateVolume(percent) {
    const volumePercent = Math.max(0, Math.min(100, percent));
    audioPlayer.volume = volumePercent / 100;
}

// Update volume UI
function updateVolumeUI() {
    const volumePercent = audioPlayer.volume * 100;

    // Update both volume sliders
    if (volumeLevel) volumeLevel.style.width = `${volumePercent}%`;
    if (volumeLevelHome) volumeLevelHome.style.width = `${volumePercent}%`;

    // Update volume icons
    updateVolumeIcon(volumeBtn, volumePercent);
    updateVolumeIcon(volumeBtnHome, volumePercent);
}

// Update volume icon
function updateVolumeIcon(button, percent) {
    if (!button) return;

    const icon = button.querySelector('i');
    if (!icon) return;

    icon.classList.remove('fa-volume-up', 'fa-volume-down', 'fa-volume-off', 'fa-volume-mute');

    if (percent === 0) {
        icon.classList.add('fa-volume-mute');
    } else if (percent < 33) {
        icon.classList.add('fa-volume-off');
    } else if (percent < 66) {
        icon.classList.add('fa-volume-down');
    } else {
        icon.classList.add('fa-volume-up');
    }
}

// Toggle mute
function toggleMute() {
    if (audioPlayer.volume > 0) {
        audioPlayer.dataset.previousVolume = audioPlayer.volume;
        audioPlayer.volume = 0;
    } else {
        audioPlayer.volume = audioPlayer.dataset.previousVolume || 0.7;
    }
}

// Update progress
function updateProgress() {
    if (!currentSong) return;

    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;

    // Update both progress bars
    if (progress) progress.style.width = `${percent}%`;
    if (progressHome) progressHome.style.width = `${percent}%`;
    if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    if (currentTimeHome) currentTimeHome.textContent = formatTime(audioPlayer.currentTime);
}

// Update duration
function updateDuration() {
    if (!currentSong) return;

    if (durationEl) durationEl.textContent = formatTime(audioPlayer.duration);
    if (durationHome) durationHome.textContent = formatTime(audioPlayer.duration);
}

// Handle song end
function handleSongEnd() {
    if (isRepeating) {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    } else {
        playNext();
    }
}

// Format time
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Show queue modal
function showQueueModal() {
    const queueList = document.getElementById('queue-list');
    const queueEmpty = document.getElementById('queue-empty');

    if (!queueList || !queueEmpty) return;

    if (!currentPlaylist || currentPlaylist.length === 0) {
        queueList.style.display = 'none';
        queueEmpty.style.display = 'flex';
    } else {
        queueList.style.display = 'block';
        queueEmpty.style.display = 'none';
        queueList.innerHTML = currentPlaylist.map(song => `
                    <div class="queue-song-item ${song.id === currentSong.id ? 'playing' : ''}" data-song-id="${song.id}">
                        <img src="${song.image}" alt="${song.title}" class="queue-song-image">
                        <div class="queue-song-info">
                            <h4>${song.title}</h4>
                            <p>${song.artist}</p>
                        </div>
                    </div>
                `).join('');

        // Add click listeners to queue items
        queueList.querySelectorAll('.queue-song-item').forEach(item => {
            item.addEventListener('click', () => {
                const songId = parseInt(item.dataset.songId);
                playSong(songId, getCategoryFromCurrentPlaylist());
                if (queueModal) queueModal.classList.remove('active');
            });
        });
    }

    if (queueModal) queueModal.classList.add('active');
}

// Handle search
function handleSearch(e) {
    const query = e.target.value.toLowerCase();

    // Only search in the current section
    const currentGrid = document.querySelector(`#${currentSection}-grid`);
    if (!currentGrid) return;

    currentGrid.querySelectorAll('.song-card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const artist = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(query) || artist.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.classList.add('light');
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    themeToggle.classList.toggle('light');

    // Save theme preference
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
// Initialize the app
init();