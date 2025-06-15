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
  let prompt = `Generate a poem in French about ${topicInput.value}`;
  let context = "You are a French poet";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
