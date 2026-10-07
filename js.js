const themeSection = document.querySelector(".section2");
const themeSection2 = document.querySelector(".section3");
const page = document.body;

// Skifter tema, når sektionen når 10 % ned fra toppen af skærmen.
function updateThemeOnScroll() {
  const switchPoint =
    themeSection.offsetTop - window.innerHeight * 0.1;

  const nextTheme = window.scrollY >= switchPoint ? "nummer2" : "normal";

   const switchPoint2 =
    themeSection2.offsetTop - window.innerHeight * 0.1;

  const nextTheme2 = window.scrollY >= switchPoint2 ? "normal" : "nummer2";

  // Opdater kun temaet, når det faktisk ændrer sig.
  if (page.dataset.tema !== nextTheme) {
    page.dataset.tema = nextTheme;
  }
}

// Opdater temaet ved scroll og ændring af vinduets størrelse.
window.addEventListener("scroll", updateThemeOnScroll, { passive: true });
window.addEventListener("resize", updateThemeOnScroll);

updateThemeOnScroll();