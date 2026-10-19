// Tiny enhancements only. The page is fully readable with JavaScript off (the "no-js" class is removed first thing below).
document.documentElement.classList.remove("no-js");
const btn = document.querySelector(".menu-btn"), menu = document.getElementById("menu");
btn?.addEventListener("click", () => { const open = menu.classList.toggle("open"); btn.setAttribute("aria-expanded", String(open)); btn.setAttribute("aria-label", open ? "Close menu" : "Open menu"); });
menu?.addEventListener("click", (e) => { if (e.target.closest("a")) { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });
const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.15 }) : null;
document.querySelectorAll("[data-reveal]").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
document.getElementById("copy-sha")?.addEventListener("click", async (e) => {
  const b = e.currentTarget;
  try { await navigator.clipboard.writeText(document.getElementById("sha").textContent.trim()); b.textContent = "Copied"; } catch { b.textContent = "Select and copy"; }
  setTimeout(() => (b.textContent = "Copy"), 2000);
});