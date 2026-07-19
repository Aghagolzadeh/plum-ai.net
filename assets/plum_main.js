const revealItems = document.querySelectorAll(".reveal");

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const productToggle = document.querySelector("[data-product-toggle]");

if (productToggle) {
  const windowBrand = document.querySelector(".window-brand");
  const actionLabel = document.querySelector(".action-row span");
  const actionText = document.querySelector(".action-row strong");
  let showingAds = false;

  productToggle.addEventListener("click", () => {
    showingAds = !showingAds;
    windowBrand.innerHTML = showingAds ? "plum<span>Ads</span>" : "plum<span>AI</span>";
    actionLabel.textContent = showingAds ? "Activation plan ready" : "Recommended next move";
    actionText.textContent = showingAds
      ? "Three channel changes prepared for review."
      : "Shift 8% from paid social to CTV prospecting.";
    productToggle.textContent = showingAds ? "Return to plumAI" : "Open in plumAds";
  });
}
