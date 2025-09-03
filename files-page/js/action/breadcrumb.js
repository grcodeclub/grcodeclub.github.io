const breadcrumbContainer = document.getElementById("breadcrumb");
if (breadcrumbContainer) {
  const pathArray = window.location.pathname.split("/").filter(p => p);

  let fullPath = window.location.origin;
  breadcrumbContainer.innerHTML = `<li class="breadcrumb-item"><a href="${fullPath}/">Αρχική</a></li>`;

  pathArray.forEach((part, index) => {
    fullPath += "/" + part;

    if (index === pathArray.length - 1) {
      breadcrumbContainer.innerHTML += `<li class="breadcrumb-item active" aria-current="page">${decodeURIComponent(part)}</li>`;
    } else {
      breadcrumbContainer.innerHTML += `<li class="breadcrumb-item"><a href="${fullPath}/">${decodeURIComponent(part)}</a></li>`;
    }
  });
}
