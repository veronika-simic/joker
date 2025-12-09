export const getJoke = async () => {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any");
  const data = await response.json();

  if (data.type === "twopart") {
    return { line1: data.setup, line2: data.delivery };
  }

  return { line1: data.joke, line2: "" };
};

export const getQuote = async () => {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();

  return { line1: data.content, line2: data.author };
};
