function mainPopup() {
  const feedBackPopup = document.querySelector(".popup");
  const CallRequestPopup = document.querySelector(".call-request-popup");
  const openFeedback = document.querySelectorAll(".openFeedbackBtn");
  const openCallRequestBtn = document.querySelectorAll(".openCallRequestBtn");
  const closeCallRequestBtn = document.getElementById("closeCallRequestBtn");
  const closeFeedbackBtn = document.getElementById("closeFeedbackBtn");
  const closeSidebarBtn = document.getElementById("closeSidebar");
  const sidebar = document.querySelector(".sidebar");
  const maskContent = document.querySelector(".wrapper");

  openFeedback.forEach(function (item) {
    item.addEventListener("click", function () {
      maskContent.style.opacity = "0.1";
      sidebar.style.opacity = "0.1";
      feedBackPopup.style.display = "block";
      closeSidebarBtn.disabled = true;
    });
  });

  closeFeedbackBtn.addEventListener("click", function () {
    closeSidebarBtn.disabled = false;
    feedBackPopup.style.display = "none";
    sidebar.style.opacity = "1";
    maskContent.style.opacity = "1";
  });

  closeCallRequestBtn.addEventListener("click", function () {
    closeSidebarBtn.disabled = false;
    CallRequestPopup.style.display = "none";
    sidebar.style.opacity = "1";
    maskContent.style.opacity = "1";
  });

  openCallRequestBtn.forEach(function (item) {
    item.addEventListener("click", function () {
      maskContent.style.opacity = "0.1";
      sidebar.style.opacity = "0.1";
      CallRequestPopup.style.display = "block";
      closeSidebarBtn.disabled = true;
    });
  });
}

export { mainPopup };
