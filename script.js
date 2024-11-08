const crearCanción = (informacioncancion) => {
  const img = document.createElement("img");
  img.setAttribute("class", "song");
  img.setAttribute(
    "src",
    "https://api.institutoalfa.org/api/songs/image/" +
      informacioncancion.image.filename
  );
  return img;
};

axios.get("https://api.institutoalfa.org/api/songs").then((res) => {
  const canciones = res.data.songs;

  canciones.map((cancion) => {
    document.getElementById("container").appendChild(crearCanción(cancion));
  });
});
