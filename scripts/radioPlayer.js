export const radioPlayerInit = () => {
  const radio = document.querySelector(".radio");
  const radioCoverImg = document.querySelector(".radio-cover__img");
  const radioHeaderBig = document.querySelector(".radio-header__big");
  const radioNavigation = document.querySelector(".radio-navigation");
  const radioItem = document.querySelectorAll(".radio-item");
  const radioStop = document.querySelector(".radio-stop");
  const radiooVolume = document.querySelector(".radioo-volume");
  const radioVolume = document.querySelector(".radio-volume");

  const audio = new Audio();
  audio.type = "audio/aac";

  radioStop.disabled = true;

  const changeIconPlay = () => {
    if (audio.paused) {
      radio.classList.remove("play");
      radioStop.classList.add("fa-play");
      radioStop.classList.remove("fa-pause");
    } else {
      radioStop.classList.remove("fa-play");
      radioStop.classList.add("fa-pause");
      radio.classList.add("play");
    }
  };

  const selectItem = (elem) => {
    radioItem.forEach((item) => item.classList.remove("select"));
    elem.classList.add("select");
  };

  radioNavigation.addEventListener("change", (event) => {
    const target = event.target;
    const parrent = target.closest(".radio-item");
    const title = parrent.querySelector(".radio-name").textContent;
    const urlImg = parrent.querySelector(".radio-img").src;

    radioHeaderBig.textContent = title;
    radioStop.disabled = false;
    audio.src = target.dataset.radioStantion;
    radioCoverImg.src = urlImg;

    audio.play();
    changeIconPlay();
    selectItem(parrent);
  });

  radioStop.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    changeIconPlay();
  });

  radioVolume.addEventListener("input", () => {
    audio.volume = radioVolume.value / 100;
  });

  radioVolume.value = audio.volume * 100;

  radioPlayerInit.stop = () => {
    changeIconPlay();
    audio.pause();
  };
};
