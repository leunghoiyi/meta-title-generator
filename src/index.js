function displayMetaTitle(response) {
  new Typewriter("#result", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}

function generateMetaTitle(event) {
  event.preventDefault();
  let topicInput = document.querySelector("#topic");
  let apiKey = "40f3565eaf0bo04aae2b14bt5e3ebe6f";
  let prompt = `Write a compelling SEO meta title (under 60 characters) targeting the keyword: "${topicInput.value}".`;
  let context =
    "You are an expert SEO copywriter specializing in writing concise, high-CTR meta titles.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let resultElement = document.querySelector("#poem");
  resultElement.classList.remove("hidden");
  resultElement.classList.add("blinking");
  resultElement.innerHTML = `Generating a meta title for "${topicInput.value}"...`;

  axios.get(apiUrl).then((response) => {
    resultElement.classList.remove("blinking");
    displayMetaTitle(response);
  });
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generateMetaTitle);
