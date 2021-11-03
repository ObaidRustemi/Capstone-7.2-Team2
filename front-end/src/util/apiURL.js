export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://limitless-cliffs-15247.herokuapp.com";
};
