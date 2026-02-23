(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const nextUrlField = document.getElementById("next-url");
  if (nextUrlField) {
    const currentUrl = new URL(window.location.href);
    const cleanPath = currentUrl.pathname.endsWith("/")
      ? currentUrl.pathname
      : currentUrl.pathname.replace(/[^/]*$/, "");
    const thankYouUrl = `${currentUrl.origin}${cleanPath}gracias.html`;
    nextUrlField.value = thankYouUrl;
  }
})();
