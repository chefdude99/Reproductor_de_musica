const crearCanción = (informacioncancion) => {
  const img = document.createElement("img");
  img.setAttribute("class", "song");
  img.setAttribute(
    "src",
    "https://api.institutoalfa.org/api/songs/image/" +
      informacioncancion.image.filename
  );
  img.setAttribute('width','238px')
  return img;
};

axios.get("https://api.institutoalfa.org/api/songs").then((res) => {
  let canciones = res.data.songs;
  canciones = canciones.slice(0,16)

  canciones.map((cancion) => {
    document.getElementById("container").appendChild(crearCanción(cancion));
  });
});
