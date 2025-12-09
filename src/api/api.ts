export const getJoke = async () => {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
  );
  const data = await response.json();
  if (data.type === "twopart") {
    return `${data.setup} — ${data.delivery}`;
  }
  return data.joke;
};

export const getQuote = async () => {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  return `${data.content} — ${data.author}`;
};
