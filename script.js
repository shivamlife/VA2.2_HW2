console.log('Hello!');
// Program 1 Select a mood
const mood = document.getElementsByName('mood');
const showResult1 = document.getElementById('showResult1');
for (let i = 0; i < mood.length; i++) {
  mood[i].addEventListener('change', () => {
    console.log('hiii');
    const value1 = document.querySelector('input[name="mood"]:checked').value;
    showResult1.innerText = `Your mood is ${value1}`;
  });
}
// Program 2:Choose a book genre:
const book = document.getElementsByName('book');
const displayBookBtn = document.getElementById('displayBookBtn');
const showResult2 = document.getElementById('showResult2');
displayBookBtn.addEventListener('click', () => {
  const value2 = document.querySelector('input[name="book"]:checked');
  if (value2) {
    showResult2.textContent = `Your Selected book is ${value2.value}`;
  } else {
    showResult2.textContent = `Please Select a Book genre`;
  }
});
// Program 3:Select a clothing style:
const cloth = document.getElementsByName('cloth');
const displayClothBtn = document.getElementById('displayClothBtn');
const showResult3 = document.getElementById('showResult3');
displayClothBtn.addEventListener('click', () => {
  const value3 = document.querySelector('input[name="cloth"]:checked');
  if (value3) {
    showResult3.textContent = `Your selected style is ${value3.value}`;
  } else {
    showResult3.textContent = `Please select a style`;
  }
});

// Program 4- Choose a weather preference
const weather = document.getElementsByName('weather');
const displayWeatherBtn = document.getElementById('displayWeatherBtn');
const showResult4 = document.getElementById('showResult4');
displayWeatherBtn.addEventListener('click', () => {
  const value4 = document.querySelector('input[name="weather"]:checked');
  if (value4) {
    showResult4.textContent = `Your weather preference is ${value4.value}`;
  } else {
    showResult4.textContent = `Please select a weather`;
  }
});
// Program 5- Select a travel mode
const mode = document.getElementsByName('mode');
const showResult5 = document.getElementById('showResult5');
for (let i = 0; i < mode.length; i++) {
  mode[i].addEventListener('change', () => {
    const value5 = document.querySelector('input[name="mode"]:checked').value;
    showResult5.textContent = `Your mode is ${value5}`;
  });
}
