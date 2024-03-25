const gambar = document.getElementById("image");
const tipe = document.getElementById("tipe").value;
const categori = document.getElementById("categori").value;
const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  getapi();
});
async function getapi() {
  const url = `https://api.waifu.pics/${tipe}/${categori}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const datagambar = data.url;
    console.log(datagambar);
    gambar.src = datagambar;
    gambar.style.display = "block";
  } catch (err) {
    console.log(err);
  }
}
