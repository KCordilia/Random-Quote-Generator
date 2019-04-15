// Array of quotes as object literals.
const quotes = [
  {
    quote: "All that we are is the result of what we have thought.",
    source: "Buddha",
    tags: "Humans"
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    tags: "Inspirational"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    tags: "Inspirational"
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs",
    tags: "Thinking"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
    tags: "Funny"
  }
];

// This function grabs a random quote from the array
getRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber];
  return randomQuote;
};

// This function prints the random quote to the html variable and sets it
printQuote = () => {
  let randomQuote = getRandomQuote();
  let html = "";
  html += '<p class="quote">' + randomQuote.quote + "</p>";

  html += '<p class="source">' + randomQuote.source + "";

  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + "</span>";
  }
  if (randomQuote.year) {
    html += '<span class="citation">' + randomQuote.citation + "</span>";
  }

  html += "</p>";
  html += '<p class="tags">' + randomQuote.tags + "</p>";
  document.getElementById("quote-box").innerHTML = html;
  randomRGB();
};

// This shows a different quote when the "show another quote" button is clicked
document.getElementById("loadQuote").addEventListener("click", printQuote, false);

// This will generate a random RGB background color when the quote changes
randomRGB = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let body = document.querySelector('body');
  let button = document.getElementById('loadQuote');

  body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  button.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

setInterval(printQuote, 3000);