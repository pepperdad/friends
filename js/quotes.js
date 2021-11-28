const quotes = [
  {
      quote:"i love It is kind of fun to do the impossible.",
      author:"- Walt Disney"
  },
  {
      quote:"There are better starters than me but I’m a strong finisher.",
      author:"- Usain Bolt"
  },
  {
      quote:"I’ve failed over and over and over again in my life and that is why I succeed.",
      author:"– Michael Jordan"
  },
  {
      quote:"But I know, somehow, that only when it is dark enough can you see the stars.",
      author:"- Martin Luther King, Jr"
  },  
  {
    quote:"      Grind Hard, Shine Hard.",
    author:"- Dwayne Johnson" 
  },
  {
    quote:"Do not go gentle into that good night",
    author:"- Dylan Thomas" 
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; 
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;