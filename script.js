const crearCanción = (informacioncancion) => {
  const img = document.createElement("img");
  img.setAttribute("class", "song");
  img.setAttribute(
    "src",
    "https://api.institutoalfa.org/api/songs/image/" +
      informacioncancion.image.filename
  );

  img.addEventListener("click", () => {
    document
      .getElementById("song-front")
      .setAttribute(
        "src",
        "https://api.institutoalfa.org/api/songs/image/" +
          informacioncancion.image.filename
      );
    document
      .getElementById("song_audio")
      .setAttribute(
        "src",
        "https://api.institutoalfa.org/api/songs/audio/" +
          informacioncancion.audio.filename
      );
  });

  img.setAttribute("width", "238px");
  return img;
};

document.getElementById("play_boton").addEventListener("click", () => {
  const audio = document.getElementById("song_audio");

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

axios.get("https://api.institutoalfa.org/api/songs").then((res) => {
  let canciones = res.data.songs;
  canciones = canciones.slice(0, 16);

  canciones.map((cancion) => {
    document.getElementById("container").appendChild(crearCanción(cancion));
  });
});
