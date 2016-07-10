// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", changeBgColor, false);
var quotes = [
  {
    quote : 'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.',
    source : 'Bertrand Russell',
    citation : 'The Triumph of Stupidity',
    year : 1933
  },
  {
    quote : 'He who is not courageous enough to take risks will accomplish nothing in life.',
    source : 'Muhammad Ali',
    citation : 'The Greatest My Own Story Muhammad Ali',
    year : 1975
  },
  {
    quote : 'I hated every minute of training, but I said, \'Don\'t quit. Suffer now and live the rest of your life as a champion.\'',
    source : 'Muhammad Ali',
    citation : 'The Greatest My Own Story Muhammad Ali',
    year : 1975
  },
  {
    quote : 'Be peaceful, be courteous, obey the law, respect everyone; but if someone puts his hand on you, send him to the cemetery.',
    source : 'Malcolm X',
    citation : 'Malcolm X Speaks',
    year : 1965
  },
  {
    quote : 'Always craft a story from real life encounters. It is more believable and you are able to tell it with some emotion.',
    source : 'Khalid Muhammad',
    citation : 'Agency Rules - Never an Easy Day at the Office',
    year : 2014
  },
  {
    quote : 'A legend is who we become for a specific point in time.',
    source : 'Khalid Muhammad',
    citation : 'Agency Rules - Never an Easy Day at the Office',
    year : 2014
  },
  {
    quote : 'Intelligence is a game of imperfect information. We can guess our opponent\'s moves, but we can\'t be sure until the game is over.',
    source : 'Khalid Muhammad',
    citation : 'Agency Rules - Never an Easy Day at the Office',
    year : 2014
  }
];

// Create a random number between 0 through the length of the array to use as array index to select object
function getRandomQuote(quote) {
  var randomNumber = Math.floor(Math.random() * (quotes.length - 0) + 0);
  return quote[randomNumber];
}

// generate a random rgb color
function getRandomColor() {
  var getColor = 'rgb(';
  for (var i = 0; i < 3; i += 1) {
    var getRGB = Math.floor(Math.random() * 256);
    if (i === 2) {
      getColor += getRGB;
    } else {
      getColor += getRGB + ',';
    }
  }
  return getColor += ')';
  //return document.getElementById('bg-color').style.color = getColor;
}

// change the backgroung color to the random generate rbg number
function changeBgColor() {
  var color = getRandomColor();
  return document.body.style.background = color;
}

// Get random object and print out the properties
function printQuote() {
    var getQuote = getRandomQuote(quotes);
    var html = '<p class="quote">' + getQuote.quote + '</p>';
    html += '<p class="source">' + getQuote.source;
    html += '<span class="citation">' + getQuote.citation + ' </span>';
    html += '<span class="year">' + getQuote.year + '</span></p>';
    return document.getElementById('quote-box').innerHTML = html;
}