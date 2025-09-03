document.addEventListener("DOMContentLoaded", () => {
  const breadcrumbNav = document.getElementById("breadcrumbNav");
  const breadcrumbContainer = document.getElementById("breadcrumb");
  const pathArray = window.location.pathname.split("/").filter(p => p);

  // 🚫 Λίστα URLs όπου ΔΕΝ θέλουμε breadcrumbs
  const excludedUrls = [
    "/",                  // Αρχική
    "/login/",            // Σελίδα login
    "/contact/",          // Επικοινωνία
    "/about/"             // About page
  ];

  // Αν το URL είναι στη λίστα -> Μην εμφανίσεις breadcrumbs
  if (excludedUrls.includes(window.location.pathname)) {
    return;
  }

  // Αλλιώς δείξε το breadcrumb
  breadcrumbNav.style.display = "block";

  // Προσθήκη "Αρχική"
  let fullPath = "/";
  breadcrumbContainer.innerHTML = `<li class="breadcrumb-item"><a href="/">Αρχική</a></li>`;

  // Δημιουργία breadcrumbs από το URL
  pathArray.forEach((part, index) => {
    fullPath += part + "/";

    if (index === pathArray.length - 1) {
      breadcrumbContainer.innerHTML += `<li class="breadcrumb-item active" aria-current="page">${decodeURIComponent(part)}</li>`;
    } else {
      breadcrumbContainer.innerHTML += `<li class="breadcrumb-item"><a href="${fullPath}">${decodeURIComponent(part)}</a></li>`;
    }
  });
});