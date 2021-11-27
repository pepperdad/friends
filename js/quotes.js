const quotes = [
  {
      quote:"i love you",
      author:"강인철"
  },
  {
      quote:"fuck you",
      author:"doyeong"
  },
  {
      quote:"fighting",
      author:"minseok"
  },
  {
      quote:"wanna go home",
      author:"jaeguk"
  }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; 
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;