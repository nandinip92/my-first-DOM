const updatePasswordProgressBar = (length) => {
  const progressBarValue = document.getElementById("pwd_progress_bar").value;

  sum = 5 * length;
  document.getElementById("pwd_progress_bar").value = sum <= 100 ? sum : 100;

  updateProgressBarColor(length);
  giveFeedback(length);
};

const updateProgressBarColor = (length) => {
  const progress = document.getElementById("pwd_progress_bar");
  const color = length < 8 ? "red" : length < 12 ? "orange" : "green";
  progress.style.setProperty("--c", color);
};

const giveFeedback = (length) => {
  const progress = document.getElementById("pwd_progress_bar");
  let strength =
    length < 8 ? "Should be longer" : length < 12 ? "Pretty good" : "Grrrreat!";
  if (length === 0) strength = "";

  document.getElementById("pwd_strength").textContent = strength;
};

const checkPassword = () => {
  let password = document.getElementById("password").value;
  console.log(password.length);
  updatePasswordProgressBar(password.length);
};
