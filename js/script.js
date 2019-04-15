// Array of quotes as object literals.
const quotes = [
  {
    quote: "All that we are is the result of what we have thought.",
    source: "Buddha"
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney"
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon"
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
  document.getElementById("quote-box").innerHTML = html;
};

// This shows a different quote when the "show another quote" button is clicked
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
