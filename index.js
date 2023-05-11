// Array of quotes
var quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  // Continue adding more quotes...
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  // Add more quotes here...
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
];

// Function to generate a random quote
function generateRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quoteElement = document.getElementById("quote");
  var authorElement = document.getElementById("author");
  quoteElement.textContent = quotes[randomIndex].text;
  authorElement.textContent = "- " + quotes[randomIndex].author;
}

// Function to handle visibility change
function handleVisibilityChange() {
  if (!document.hidden) {
    // Tab is visible, generate a new quote
    generateRandomQuote();
  }
}

// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {
  // Generate a random quote
  generateRandomQuote();

  // Check for Page Visibility API support
  if (typeof document.hidden !== "undefined") {
    // Add event listeners for visibility change
    document.addEventListener("visibilitychange", handleVisibilityChange);
  }
});

// Animation
window.addEventListener("load", function () {
  var quoteContainer = document.getElementById("quote-container");
  quoteContainer.classList.add('show');
});
