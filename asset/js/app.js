const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
setTimeout(() => {
  const playControl = $(".playControl");
  const titleSong = $("#titleSong");
  const audio = $("#audio");
  const cdThumb = $("#cdThumb");
  const seekBar = $("#seekBar");
  const timeContent = $("#timeContent");
  const songArr = $$(".playlist li");
  const imgSong = $$(".playlist li img");
  const volumeBtn = $("#volumeBtn");
  const volumeRange = $("#volumeRange");
  const volume = $(".volume");
  const app = {
    currentIndex: 0,
    currentTime: 0,
    isPlaying: false,
    isMute: false,
    song: function () {
      let img = imgSong[this.currentIndex].getAttribute("src");
      let title = songArr[this.currentIndex].innerText;
      let src = `./asset/songs/${songArr[this.currentIndex].dataset.src}`;
      return [img, title, src];
    },
    /**
     * audio play event
     */
    playSong: function () {
      const [img, title, src] = this.song();
      cdThumb.style.backgroundImage = `url(${img})`;
      titleSong.innerText = title;
      audio.src = src;
      audio.addEventListener("play", () => {
        app.isPlaying = true;
        cdThumb.style.animationPlayState = "running";
        audio.currentTime = this.currentTime;
      });
      audio.addEventListener("timeupdate", () => {
        const currentPercent = Math.floor((audio.currentTime / audio.duration) * 100);
        seekBar.value = currentPercent;
        let minute, second, minuteValue, secondValue;
        minute = Math.floor(audio.currentTime / 60);
        second = Math.floor(audio.currentTime % 60);
        10 > minute ? (minuteValue = `0${minute}`) : (minuteValue = minute);
        10 > second ? (secondValue = `0${second}`) : (secondValue = second);
        timeContent.innerText = `${minuteValue}:${secondValue}`;
        timeContent.style.setProperty("--timeContent-left", `${currentPercent * 3.84}px`);
      });
      audio.addEventListener("ended", () => {
        app.nextSong();
      });
      playControl.classList.add("playing");
      audio.play();
    },
    /**
     * audio pause event
     */
    pauseSong: function () {
      audio.addEventListener("pause", () => {
        app.isPlaying = false;
        cdThumb.style.animationPlayState = "paused";
        this.currentTime = audio.currentTime;
      });
      playControl.classList.remove("playing");
      audio.pause();
    },
    /**
     * audio next song event
     */
    nextSong: function () {
      if (this.currentIndex == songArr.length - 1) {
        this.currentIndex = -1;
      }
      this.currentTime = 0;
      this.currentIndex++;
      this.playSong();
    },
    /**
     * audio previous song event
     */
    prevSong: function () {
      if (this.currentIndex == 0) {
        this.currentIndex = songArr.length;
      }
      this.currentTime = 0;
      this.currentIndex--;
      this.playSong();
    },
    seekTime: function (e) {
      let seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    },
    volumeEvent: function () {
      audio.volume = volumeRange.value / 100;
    },
    muteEvent: function () {
      if (true == this.isMute) {
        volume.classList.remove("muted");
      } else {
        volume.classList.add("muted");
      }
      audio.muted = this.isMute;
    },
  };
  /**
   * Control player
   */
  $(".playControl").addEventListener("click", () => {
    if (true == app.isPlaying) {
      app.pauseSong();
    } else app.playSong();
  });
  $("#nextBtn").addEventListener("click", () => {
    app.nextSong();
  });
  $("#prevBtn").addEventListener("click", () => {
    app.prevSong();
  });
  seekBar.addEventListener("change", (e) => {
    app.seekTime(e);
  });
  volumeBtn.addEventListener("click", () => {
    app.muteEvent();
  });
  volumeRange.addEventListener("change", () => {
    app.volumeEvent();
  });
}, 500);
