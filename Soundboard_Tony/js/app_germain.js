const sounds = [
    {
      img: "https://i.ytimg.com/vi/UTzFjw4U8eU/maxresdefault.jpg",
      sound_url: "",
      external_link: "https://www.youtube.com/watch?v=UTzFjw4U8eU",
      alt: "l'équipe de Salut les Musclés",
    },
    {
      img: "http://img.over-blog-kiwi.com/0/99/46/17/20140707/ob_d95452_2806004-jaws.jpg",
      sound_url: "../ressources/jaws_theme.mp3",
      external_link: "",
      alt: "affiche des dents de la mer",
    },
    {
      img: "https://i.ytimg.com/vi/VBlFHuCzPgY/hqdefault.jpg",
      sound_url: "../ressources/elevator.mp3",
      external_link: "",
      alt: "elevator",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/fr/2/2b/Logo-Qui-veut-gagner-des-millions.png",
      sound_url: "../ressources/millions_theme.mp3",
      external_link: "",
      alt: "qui veut gagner des millions logo",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ea67a1c8ae6ec4ebd3b0bfe72db01aad5d126a7e5035362a53c18d058c629b55._V_SX1080_.png",
      sound_url: "../ressources/BabyShark_cut_theme.mp3",
      external_link: "",
      alt: "babyshark",
    },
    {
      img: "https://ctlsites.uga.edu/poeticskewels3050/wp-content/uploads/sites/321/2017/02/Dun-Dun-Duuun.jpg",
      sound_url: "../ressources/dun.mp3",
      external_link: "",
      alt: "dun dun dun",
    },
    {
      img: "https://www.meme-arsenal.com/memes/3f890695c6b26baa5469b12cdd64986f.jpg",
      sound_url: "../ressources/badum.mp3",
      external_link: "",
      alt: "badum tss face",
    },
    ];
    
    const playSound = (sound) => {
    if (!audio.paused) {
      audio.pause();
    }
    audio.src = sound.sound_url;
    audio.currentTime = 0;
    audio.play();
    };
    
    const handleStop = (btn) => {
    btn.remove();
    audio.pause();
    audio.currentTime = 0;
    };
    
    const audio = document.createElement("audio");
    const main = document.querySelector(".main-container");
    
    audio.onplaying = (e) => {
    const btn = document.querySelector('.pause');
    if(btn) document.remove(btn);
    const btnPlayPause = document.createElement("button");
    btnPlayPause.type = "button";
    btnPlayPause.textContent = "STOP";
    btnPlayPause.className = "pause";
    document.body.appendChild(btnPlayPause);
    btnPlayPause.addEventListener("click", () => handleStop(btnPlayPause));
    };
    
    
    sounds.forEach((sound) => {
    const miniature = document.createElement("div");
    const img = document.createElement("img");
    img.src = sound.img;
    img.alt = sound.alt;
    img.className = "miniature";
    
    if (sound.external_link) {
      const aLink = document.createElement("a");
      aLink.href = sound.external_link;
      aLink.target = "_blank";
      aLink.appendChild(img);
      miniature.appendChild(aLink);
    } else {
      miniature.appendChild(img);
    }
    miniature.addEventListener("click", (e) => playSound(sound));
    main.appendChild(miniature);
    });