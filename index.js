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
  if (length < 8) progress.style.setProperty("--c", "red");
  else if (length < 12) progress.style.setProperty("--c", "orange");
  else progress.style.setProperty("--c", "green");
};

const checkPassword = () => {
  let password = document.getElementById("password").value;
  console.log(password.length);
  updatePasswordProgressBar(password.length);
};
