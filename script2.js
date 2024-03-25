const gambar = document.getElementById("image");
const tipe = document.getElementById("tipe").value;
const categori = document.getElementById("categori").value;
const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  getgambarsemua();
});

async function getgambarsemua() {
  const url = `https://api.waifu.pics/many/${tipe}/${categori}`;
  const akosong = [];

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ akosong }),
  });

  const resData = await res.json();
  const result = resData.files;

  result.forEach((i) => {
    const img = document.createElement("img");
    img.src = i;
    img.style.display = "block"; // Menampilkan gambar
    gambar.appendChild(img);
  });

  console.log(result);
}
