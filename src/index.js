function displayPoem(reponse) {
  new Typewriter("#poem", {
    strings: reponse.data.answer,
    autoStart: true,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let topicInput = document.querySelector("#topic");
  let apiKey = "40f3565eaf0bo04aae2b14bt5e3ebe6f";
  let prompt = `Write a 4-line poem in French about "${topicInput.value}". Make it artistic and expressive.`;
  let context =
    "You are a French poet writing short, elegant poetry limited to four lines only.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.classList.add("blinking");
  poemElement.innerHTML = `Generating a poem about ${topicInput.value}...`;

  axios.get(apiUrl).then((response) => {
    poemElement.classList.remove("blinking");
    displayPoem(response);
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
