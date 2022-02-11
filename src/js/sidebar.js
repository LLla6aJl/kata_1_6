function mainSidebar() {
  const feedBackPopup = document.querySelector(".popup");
  const CallRequestPopup = document.querySelector(".call-request-popup");
  const sidebar = document.querySelector(".sidebar");
  const maskContent = document.querySelector(".wrapper");
  const toogleSidebarBtn = document.getElementById("toogleSidebar");
  const closeSidebarBtn = document.getElementById("closeSidebar");
  let isSidebar = false;
  window.addEventListener("click", (e) => {
    const target = e.target;
    if (
      !target.closest(".sidebar") &&
      !target.closest(".menu__burger") &&
      !target.closest(".popup") &&
      !target.closest(".menu__feedback") &&
      !target.closest(".call-request-popup") &&
      !target.closest(".menu__phone")
    ) {
      maskContent.style.opacity = "1";
      sidebar.style.left = "-320px";
      feedBackPopup.style.display = "none";
      CallRequestPopup.style.display = "none";
      sidebar.style.opacity = "1";
      closeSidebarBtn.disabled = false;
    }
  });

  closeSidebarBtn.addEventListener("click", function () {
    maskContent.style.opacity = "1";
    sidebar.style.left = "-320px";
  });

  toogleSidebarBtn.addEventListener("click", function () {
    maskContent.style.opacity = "0.1";
    sidebar.style.left = "0px";
    return (isSidebar = true);
  });
}
export { mainSidebar };
