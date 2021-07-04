export const setBackground = () => {
  const grid = document.getElementsByTagName('grid-area')[0];
  grid?.firstChild?.remove();

  const background = document.createElement('div');
  background.style.position = "absolute";
  background.style.width = "100%";
  background.style.height = "100vh";
  background.style.background = "#181818";

  grid?.appendChild(background);
}