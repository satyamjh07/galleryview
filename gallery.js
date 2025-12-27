let currentImages = [];
let currentIndex = 0;

const characters = {
  makima: {
    name: "Guangqiao, Qinhua",
    cover: "Guangqiao/1.jpeg",
    images: [
      "Guangqiao/1.jpeg",
      "Guangqiao/2.jpeg",
      "Guangqiao/00008-2763177372.jpeg",
      "Guangqiao/00009-2763177373.jpeg",
      "Guangqiao/00010-2763177374.jpeg",
      "Guangqiao/00011-2763177375.jpeg",
      "Guangqiao/00012-2763177376.jpeg",
      "Guangqiao/00013-2763177377.jpeg",
      "Guangqiao/00014-2763177378.jpeg",
      "Guangqiao/00015-2763177379.jpeg",
      "Guangqiao/00016-2763177380.jpeg",
      "Guangqiao/00017-2763177381.jpeg",
      "Guangqiao/00018-1860644952.jpeg",
      "Guangqiao/00019-1860644953.jpeg",
      "Guangqiao/00020-1860644954.jpeg",
      "Guangqiao/00021-1860644955.jpeg",
      "Guangqiao/00022-1860644956.jpeg",
      "Guangqiao/00023-1860644957.jpeg",
      "Guangqiao/00024-1860644958.jpeg",
      "Guangqiao/00025-1860644959.jpeg",
      "Guangqiao/00026-1860644960.jpeg",
      "Guangqiao/00027-1860644961.jpeg",
      "Guangqiao/00028-1860644962.jpeg",
      "Guangqiao/00029-1860644963.jpeg",
      "Guangqiao/00030-1860644964.jpeg",
      "Guangqiao/00031-1860644965.jpeg",
      "Guangqiao/00032-1860644966.jpeg",
      "Guangqiao/00033-1860644967.jpeg",
      "Guangqiao/00034-1669646099.jpeg",
      "Guangqiao/00035-1669646100.jpeg",
      "Guangqiao/00036-1669646101.jpeg",
      "Guangqiao/00037-1669646102.jpeg",
      "Guangqiao/00038-1669646103.jpeg",
      "Guangqiao/00039-1669646104.jpeg",
      "Guangqiao/00040-1669646105.jpeg",
      "Guangqiao/00041-1669646106.jpeg",
      "Guangqiao/00042-1669646107.jpeg",
       "Guangqiao/00043-1669646108.jpeg",
      "Guangqiao/00044-1669646109.jpeg",
       "Guangqiao/00045-1669646110.jpeg",
      "Guangqiao/00046-1669646111.jpeg",
      "Guangqiao/00047-1669646112.jpeg",
      "Guangqiao/00048-1669646113.jpeg",
      "Guangqiao/00049-1669646114.jpeg",
      "Guangqiao/00050-1923031478.jpeg",
      "Guangqiao/00051-1923031479.jpeg",
      "Guangqiao/00052-1923031480.jpeg",
      "Guangqiao/00053-1923031481.jpeg",
      "Guangqiao/00054-1923031482.jpeg",
      "Guangqiao/00055-1923031483.jpeg",
      "Guangqiao/00056-1923031484.jpeg",
      "Guangqiao/00057-1923031485.jpeg",
      "Guangqiao/00058-1305525478.jpeg",
      "Guangqiao/00059-1305525479.jpeg",
      "Guangqiao/00060-1305525480.jpeg",
      "Guangqiao/00061-1305525481.jpeg",
      "Guangqiao/00062-1305525482.jpeg",
      "Guangqiao/00063-1305525483.jpeg",
      "Guangqiao/00064-1305525484.jpeg",
      "Guangqiao/00065-1305525485.jpeg",
      "Guangqiao/00066-1539013989.jpeg",
      "Guangqiao/00067-1539013990.jpeg",
      "Guangqiao/00068-1539013991.jpeg",
      "Guangqiao/00069-1539013992.jpeg",
      "Guangqiao/00070-1539013993.jpeg",
      "Guangqiao/00071-1539013994.jpeg",
      "Guangqiao/00072-1539013995.jpeg",
      "Guangqiao/00073-1539013996.jpeg",
      "Guangqiao/00075-1539013998.jpeg",
      "Guangqiao/00076-1785524192.jpeg",
      "Guangqiao/00077-1785524193.jpeg",
      "Guangqiao/00078-1785524194.jpeg",
      "Guangqiao/00079-1785524195.jpeg",
      "Guangqiao/00080-1785524196.jpeg",
      "Guangqiao/00081-1785524197.jpeg",
      "Guangqiao/00082-1785524198.jpeg",
      "Guangqiao/00083-1785524199.jpeg",
      "Guangqiao/00084-1785524200.jpeg",
       "Guangqiao/00085-1785524201.jpeg",
      "Guangqiao/00086-2358357380.jpeg",
      "Guangqiao/00087-2358357381.jpeg",
      "Guangqiao/00088-2358357382.jpeg",
      "Guangqiao/00089-2358357383.jpeg",
      "Guangqiao/00090-2358357384.jpeg",
      "Guangqiao/00091-2358357385.jpeg",
      "Guangqiao/00092-2358357386.jpeg",
      "Guangqiao/00093-2358357387.jpeg",
       "Guangqiao/00094-2358357388.jpeg",
       "Guangqiao/00095-2358357389.jpeg",
       "Guangqiao/00096-504873801.jpeg",
       "Guangqiao/00099-504873804.jpeg",
       "Guangqiao/00100-504873805.jpeg",
       "Guangqiao/00101-504873806.jpeg",
       "Guangqiao/00102-504873807.jpeg",
       "Guangqiao/00103-504873808.jpeg",
       "Guangqiao/00104-504873809.jpeg",
       "Guangqiao/00105-504873810.jpeg",
       "Guangqiao/00106-1635350612.jpeg",
       "Guangqiao/00107-1635350613.jpeg",
       "Guangqiao/00108-1635350614.jpeg",
       "Guangqiao/00109-1635350615.jpeg",
       "Guangqiao/00110-1635350616.jpeg",
       "Guangqiao/00111-1635350617.jpeg",
       "Guangqiao/00112-1635350618.jpeg",
       "Guangqiao/00113-1635350619.jpeg",
       "Guangqiao/00114-1635350620.jpeg",
       "Guangqiao/00115-1635350621.jpeg",
       "Guangqiao/00116-1419010456.jpeg",
       "Guangqiao/00117-1419010457.jpeg",
       "Guangqiao/00118-1419010458.jpeg",
       "Guangqiao/00119-1419010459.jpeg",
       "Guangqiao/00120-1419010460.jpeg",
       "Guangqiao/00121-1419010461.jpeg",
       "Guangqiao/00122-1419010462.jpeg",
       "Guangqiao/00123-1419010463.jpeg",
       "Guangqiao/00124-4204160849.jpeg",
       "Guangqiao/00125-4204160850.jpeg",
       "Guangqiao/00126-4204160851.jpeg",
       "Guangqiao/00127-4204160852.jpeg",
       "Guangqiao/00128-4204160853.jpeg",
       "Guangqiao/00129-4204160854.jpeg",
       "Guangqiao/00130-4204160855.jpeg",
       "Guangqiao/00131-4204160856.jpeg",
       "Guangqiao/00133-1104231598.jpeg",
       "Guangqiao/00134-1104231599.jpeg",
       "Guangqiao/00135-1104231600.jpeg",
       "Guangqiao/00136-1104231601.jpeg",
       "Guangqiao/00137-1104231602.jpeg",
       "Guangqiao/00138-1104231603.jpeg",
       "Guangqiao/00139-1104231604.jpeg",
       "Guangqiao/00140-3480668263.jpeg",
       "Guangqiao/00141-3480668264.jpeg",
       "Guangqiao/00142-3480668265.jpeg",
       "Guangqiao/00143-3480668266.jpeg",
       "Guangqiao/00144-3480668267.jpeg",
       "Guangqiao/00145-3480668268.jpeg",
       "Guangqiao/00146-3480668269.jpeg",
       "Guangqiao/00147-3480668270.jpeg",
       "Guangqiao/00148-132378039.jpeg",
       "Guangqiao/00149-132378040.jpeg",
       "Guangqiao/00150-132378041.jpeg",
       "Guangqiao/00151-132378042.jpeg",
       "Guangqiao/00152-132378043.jpeg",
       "Guangqiao/00153-132378044.jpeg",
       "Guangqiao/00154-132378045.jpeg",
       "Guangqiao/00155-132378046.jpeg",
       "Guangqiao/00156-3778094018.jpeg",
       "Guangqiao/00157-3778094019.jpeg",
       "Guangqiao/00158-3778094020.jpeg",
       "Guangqiao/00159-3778094021.jpeg",
       "Guangqiao/00160-3778094022.jpeg",
       "Guangqiao/00161-3778094023.jpeg",
       "Guangqiao/00162-3778094024.jpeg",
       "Guangqiao/00163-3778094025.jpeg",
       "Guangqiao/00164-1593221410.jpeg",
       "Guangqiao/00165-1593221411.jpeg",
       "Guangqiao/00166-1593221412.jpeg",
       "Guangqiao/00167-1593221413.jpeg",
       "Guangqiao/00168-1593221414.jpeg",
       "Guangqiao/00169-1593221415.jpeg",
       "Guangqiao/00170-1593221416.jpeg",
       "Guangqiao/00171-1593221417.jpeg",
    ]
  },
    Tsubakihara: {
    name: "Mira Tsubakihara",
    cover: "MiraTsubakihara/1.jpeg",
    images: Array.from({ length: 168 }, (_, i) =>
      `MiraTsubakihara/${i + 1}.jpeg`
    )
  },
  Sigurd: {
    name: "sigurd",
    cover: "sigurd/1.jpeg",
    images: Array.from({ length: 184 }, (_, i) =>
      `sigurd/${i + 1}.jpeg`
    )
  },
  freya: {
    name: "freya",
    cover: "freya/1.jpeg",
    images: Array.from({ length: 183 }, (_, i) =>
      `freya/${i + 1}.jpeg`
    )
  },
  CelestineLucullus: {
    name: "CelestineLucullus",
    cover: "CelestineLucullus/1.jpeg",
    images: Array.from({ length: 168 }, (_, i) =>
      `CelestineLucullus/${i + 1}.jpeg`
    )
  },
  
  Annierose: {
    name: "Annierose",
    cover: "bdsm/1 .jpeg",
    images: Array.from({ length: 160 }, (_, i) =>
      `bdsm/${i + 1} .jpeg`
    )
  },
  
  SakuraAoi: {
    name: "Sakura Aoi",
    cover: "SakuraAoi/1.jpeg",
    images: Array.from({ length: 153 }, (_, i) =>
      `SakuraAoi/${i + 1}.jpeg`
    )
  },
  
  ShizumoriNodoka: {
    name: "Shizumori Nodoka",
    cover: "ShizumoriNodoka/1.jpeg",
    images: Array.from({ length: 150 }, (_, i) =>
      `ShizumoriNodoka/${i + 1}.jpeg`
    )
  },
  
  Asagilgawa: {
    name: "Asagilgawa",
    cover: "Asagilgawa/1.jpeg",
    images: Array.from({ length: 160 }, (_, i) =>
      `Asagilgawa/${i + 1}.jpeg`
    )
  },
  
  KogawaAsuka: {
    name: "KogawaAsuka",
    cover: "KogawaAsuka/1.jpeg",
    images: Array.from({ length: 160 }, (_, i) =>
      `KogawaAsuka/${i + 1}.jpeg`
    )
  },
         };

const galleryGrid = document.getElementById("galleryGrid");
const galleryModal = document.getElementById("galleryModal");
const galleryImages = document.getElementById("galleryImages");
const characterName = document.getElementById("characterName");

/* Render character cards */
Object.keys(characters).forEach(key => {
  const char = characters[key];

  const card = document.createElement("div");
  card.className = "character-card";
  card.innerHTML = `
    <img src="${char.cover}">
    <h3>${char.name}</h3>
  `;

  card.onclick = () => openGallery(char);
  galleryGrid.appendChild(card);
});

/* Close gallery */
function closeGallery() {
  galleryModal.style.display = "none";
  document.body.style.overflow = "auto";
}

/* Redirect back to anime site */
function goToAnime() {
  window.location.href = "https://adultverse.netlify.app/";
}
const imageZoomModal = document.getElementById("imageZoomModal");
const zoomedImage = document.getElementById("zoomedImage");

/* Modify openGallery() image creation */
function openGallery(character) {
  characterName.textContent = character.name;
  galleryImages.innerHTML = "";
  currentImages = character.images;

  character.images.forEach((img, index) => {
    const image = document.createElement("img");
    image.src = img;
    image.loading = "lazy";

    image.onclick = () => openImageZoom(index);

    galleryImages.appendChild(image);
  });

  galleryModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}
/* Function to count images */
function updateCounter() {
  imageCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
}
/* Open zoom */
function openImageZoom(index) {
  currentIndex = index;
  zoomedImage.src = currentImages[currentIndex];
  imageZoomModal.style.display = "flex";
  updateCounter();
}
/* Previous Image */
function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    zoomedImage.src = currentImages[currentIndex];
    updateCounter();
  }
}
/* Next Image */
function nextImage() {
  if (currentIndex < currentImages.length - 1) {
    currentIndex++;
    zoomedImage.src = currentImages[currentIndex];
    updateCounter();
  }
}

/* Close zoom */
function closeImageZoom() {
  zoomedImage.src = "";
  imageZoomModal.style.display = "none";
}

/* Close zoom when clicking background */
imageZoomModal.addEventListener("click", (e) => {
  if (e.target === imageZoomModal) {
    closeImageZoom();
  }
});

let startX = 0;
let endX = 0;

imageZoomModal.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

imageZoomModal.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = endX - startX;

  if (Math.abs(swipeDistance) < 50) return; // ignore small swipes

  if (swipeDistance < 0) {
    nextImage(); // swipe left
  } else {
    prevImage(); // swipe right
  }
}
