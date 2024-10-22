const header = document.getElementById("popup-header");
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

header.addEventListener("mousedown", (e) => {
  isDragging = true;
  console.log(e.clientX);
  offsetX = e.clientX;
  offsetY = e.clientY;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const windowX = window.screenX + (e.clientX - offsetX);
    console.log(windowX);
    const windowY = window.screenY + (e.clientY - offsetY);
    chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {
      left: windowX,
      top: windowY,
    });
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
