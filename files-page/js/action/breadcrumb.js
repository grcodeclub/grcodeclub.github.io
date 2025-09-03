document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Breadcrumb script ξεκίνησε!");

  const breadcrumbContainer = document.getElementById("breadcrumb");
  if (!breadcrumbContainer) {
    console.log("⚠️ Δεν βρέθηκε το #breadcrumb στο DOM");
    return;
  }

  const pathArray = window.location.pathname.split("/").filter(p => p);
  console.log("🔗 Path segments:", pathArray);

  let fullPath = window.location.origin;
  breadcrumbContainer.innerHTML = `<li class="breadcrumb-item"><a href="${fullPath}/">Αρχική</a></li>`;

  pathArray.forEach((part, index) => {
    fullPath += "/" + part;
    console.log("➡️ Χτίζω link:", fullPath);

    if (index === pathArray.length - 1) {
      breadcrumbContainer.innerHTML += `<li class="breadcrumb-item active" aria-current="page">${decodeURIComponent(part)}</li>`;
    } else {
      breadcrumbContainer.innerHTML += `<li class="breadcrumb-item"><a href="${fullPath}/">${decodeURIComponent(part)}</a></li>`;
    }
  });

  console.log("✅ Breadcrumbs τελείωσαν!");
});
