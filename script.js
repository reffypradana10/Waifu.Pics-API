const gambar = document.getElementById("img");
const dgambar = document.getElementById("image");
const tipe = document.getElementById("tipe").value;
const categori = document.getElementById("categori").value;
const submit1 = document.getElementById("submit1");
const submit2 = document.getElementById("submit2");
const hapus = document.getElementById("hapus");

document;

if (submit1.value == 1) {
  submit1.addEventListener("click", function () {
    getapi();
    dgambar.innerHTML = "";
  });
}
if (submit2.value == 2) {
  submit2.addEventListener("click", function () {
    dgambar.innerHTML = "";
    getgambarsemua();
    gambar.src = "";
  });
}

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
    dgambar.appendChild(img);
    dgambar.style.display = "block";
  });

  console.log(result);
}

hapus.addEventListener("click", function () {
  dgambar.innerHTML = "";
  gambar.src = "";
  dgambar.style.display = "none";
  gambar.style.display = "none";
});
