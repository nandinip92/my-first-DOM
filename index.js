const updatePasswordProgressBar = (length) => {
  const progressBarValue = document.getElementById("pwd_progress_bar").value;
  //Sum of n consecutive numbers is n(n+1)/2 as per requirement so multiply by 5
  // So for this 5n*(n+1)/2
  sum = (5 * length * (length + 1)) / 2;
  document.getElementById("pwd_progress_bar").value = sum;

  updateProgressBarColor(length);
};

const updateProgressBarColor = (length) => {
  const progress = document.getElementById("pwd_progress_bar");
  const color = length < 8 ? "red" : length < 12 ? "orange" : "green";
  progress.style.setProperty("--c", color);
};

const checkPassword = () => {
  let password = document.getElementById("password").value;
  console.log(password.length);
  updatePasswordProgressBar(password.length);
};
