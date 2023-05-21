const tabContainer = document.querySelector('.tab-container');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-pane');

let activeTabIndex = 0;
let startTouchX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

function setTranslate(translateX) {
  tabContents.forEach((content) => {
    content.style.transform = `translateX(${translateX}px)`;
  });
}

function changeTab(index) {
  if (index < 0 || index >= tabContents.length) return;

  activeTabIndex = index;
  currentTranslate = -tabContainer.offsetWidth * index;

  setTranslate(currentTranslate);
  setActiveTabButton(index);
}

function setActiveTabButton(index) {
  tabButtons.forEach((button, i) => {
    if (i === index) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function handleTouchStart(e) {
  startTouchX = getTouchX(e);
}

function handleTouchMove(e) {
  const touchX = getTouchX(e);
  const deltaX = touchX - startTouchX;
  const containerWidth = tabContainer.offsetWidth;

  currentTranslate = prevTranslate + deltaX;

  // Limit the translation within the bounds of the tab container
  if (currentTranslate > 0) {
    currentTranslate = 0;
  } else if (currentTranslate < -containerWidth * (tabContents.length - 1)) {
    currentTranslate = -containerWidth * (tabContents.length - 1);
  }

  setTranslate(currentTranslate);
}

function handleTouchEnd() {
  const containerWidth = tabContainer.offsetWidth;
  const delta = currentTranslate - prevTranslate;

  // Determine if the slide should change based on the delta value
  if (Math.abs(delta) > containerWidth * 0.2) {
    if (delta > 0 && activeTabIndex > 0) {
      changeTab(activeTabIndex - 1);
    } else if (delta < 0 && activeTabIndex < tabContents.length - 1) {
      changeTab(activeTabIndex + 1);
    } else {
      setTranslate(prevTranslate);
    }
  } else {
    setTranslate(prevTranslate);
  }

  prevTranslate = currentTranslate;
}

function getTouchX(e) {
  return e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
}

function handleTabClick(index) {
  if (index !== activeTabIndex) {
    changeTab(index);
  }
}

tabContainer.addEventListener('touchstart', handleTouchStart);
tabContainer.addEventListener('touchmove', handleTouchMove);
tabContainer.addEventListener('touchend', handleTouchEnd);

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => handleTabClick(index));
});

// Set initial tab
changeTab(activeTabIndex);

function bukaHalaman() {
  window.location.href = "comic/martial-peak.html";
}

function hapusData() {
  if (confirm("Apakah Anda yakin ingin menghapus data?")) {
    // Logika penghapusan data secara lokal
    // Misalnya, jika data disimpan dalam array:
    data = null;
    console.log("Data berhasil dihapus.");

    // Lakukan tindakan lain setelah penghapusan sukses
  } else {
    // Tidak melakukan apa-apa jika pengguna membatalkan
  }
}


