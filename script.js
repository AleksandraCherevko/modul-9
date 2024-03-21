const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));
const savedsetting = localStorage.getItem("settings");
console.log(savedsetting);

const parsedSettings = JSON.parse(savedsetting);
console.log(parsedSettings);
