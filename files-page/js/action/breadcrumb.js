document.addEventListener("DOMContentLoaded", () => {
  const breadcrumbContainer = document.getElementById("breadcrumb");
  if (!breadcrumbContainer) return; // αν δεν υπάρχει, σταμάτα

  const pathArray = window.location.pathname.split("/").filter(p => p);

  // Προσθήκη "Αρχική"
  let fullPath = window.location.origin;
  breadcrumbContainer.innerHTML = `<li class="breadcrumb-item"><a href="${fullPath}/">Αρχική</a></li>`;

  // Δημιουργία breadcrumbs
  pathArray.forEach((part, index) => {
    fullPath += "/" + part;

    if (index === pathArray.length - 1) {
      // τελευταίο στοιχείο (active)
      breadcrumbContainer.innerHTML += `<li class="breadcrumb-item active" aria-current="page">${decodeURIComponent(part)}</li>`;
    } else {
      // ενδιάμεσο στοιχείο με link
      breadcrumbContainer.innerHTML += `<li class="breadcrumb-item"><a href="${fullPath}/">${decodeURIComponent(part)}</a></li>`;
    }
  });
});
