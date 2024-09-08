const quotesList = [
    {"quote": "The only way to do great work is to love what you do.", "writtenBy": "Steve Jobs"},
    {"quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.", "writtenBy": "Martin Luther King Jr."},
    {"quote": "The only limit to our realization of tomorrow is our doubts of today.", "writtenBy": "Franklin D. Roosevelt"},
    {"quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "writtenBy": "Ralph Waldo Emerson"},
    {"quote": "Life is what happens when you're busy making other plans.", "writtenBy": "John Lennon"},
    {"quote": "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", "writtenBy": "Ralph Waldo Emerson"},
    {"quote": "You miss 100% of the shots you don’t take.", "writtenBy": "Wayne Gretzky"},
    {"quote": "Whether you think you can or you think you can't, you're right.", "writtenBy": "Henry Ford"},
    {"quote": "The only thing we have to fear is fear itself.", "writtenBy": "Franklin D. Roosevelt"},
    {"quote": "Act as if what you do makes a difference. It does.", "writtenBy": "William James"},
    {"quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "writtenBy": "Winston Churchill"},
    {"quote": "You only live once, but if you do it right, once is enough.", "writtenBy": "Mae West"},
    {"quote": "In three words I can sum up everything I've learned about life: it goes on.", "writtenBy": "Robert Frost"},
    {"quote": "The best way to predict your future is to create it.", "writtenBy": "Peter Drucker"},
    {"quote": "Life is really simple, but we insist on making it complicated.", "writtenBy": "Confucius"},
    {"quote": "It does not do to dwell on dreams and forget to live.", "writtenBy": "J.K. Rowling"},
    {"quote": "The journey of a thousand miles begins with one step.", "writtenBy": "Lao Tzu"},
    {"quote": "To live is the rarest thing in the world. Most people exist, that is all.", "writtenBy": "Oscar Wilde"},
    {"quote": "You must be the change you wish to see in the world.", "writtenBy": "Mahatma Gandhi"},
    {"quote": "The only way to achieve the impossible is to believe it is possible.", "writtenBy": "Charles Kingsleigh"},
    {"quote": "Success usually comes to those who are too busy to be looking for it.", "writtenBy": "Henry David Thoreau"},
    {"quote": "Opportunities don't happen, you create them.", "writtenBy": "Chris Grosser"},
    {"quote": "Don't count the days, make the days count.", "writtenBy": "Muhammad Ali"},
    {"quote": "The best revenge is massive success.", "writtenBy": "Frank Sinatra"},
    {"quote": "Life is short, and it is up to you to make it sweet.", "writtenBy": "Sarah Louise Delany"},
    {"quote": "Do not wait to strike till the iron is hot, but make it hot by striking.", "writtenBy": "William Butler Yeats"},
    {"quote": "The harder I work, the luckier I get.", "writtenBy": "Samuel Goldwyn"},
    {"quote": "Dream big and dare to fail.", "writtenBy": "Norman Vaughan"},
    {"quote": "Everything you’ve ever wanted is on the other side of fear.", "writtenBy": "George Addair"},
    {"quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "writtenBy": "Nelson Mandela"},
    {"quote": "You must do the things you think you cannot do.", "writtenBy": "Eleanor Roosevelt"},
    {"quote": "The future belongs to those who believe in the beauty of their dreams.", "writtenBy": "Eleanor Roosevelt"},
    {"quote": "It is never too late to be what you might have been.", "writtenBy": "George Eliot"},
    {"quote": "You can't use up creativity. The more you use, the more you have.", "writtenBy": "Maya Angelou"},
    {"quote": "Everything has beauty, but not everyone can see.", "writtenBy": "Confucius"},
    {"quote": "Happiness is not something ready made. It comes from your own actions.", "writtenBy": "Dalai Lama"},
    {"quote": "The best time to plant a tree was 20 years ago. The second best time is now.", "writtenBy": "Chinese Proverb"},
    {"quote": "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.", "writtenBy": "William James"},
    {"quote": "I have not failed. I've just found 10,000 ways that won't work.", "writtenBy": "Thomas Edison"},
    {"quote": "The mind is everything. What you think you become.", "writtenBy": "Buddha"},
    {"quote": "Your time is limited, so don’t waste it living someone else’s life.", "writtenBy": "Steve Jobs"},
    {"quote": "In the end, it's not the years in your life that count. It's the life in your years.", "writtenBy": "Abraham Lincoln"},
    {"quote": "We may encounter many defeats but we must not be defeated.", "writtenBy": "Maya Angelou"},
    {"quote": "You don’t have to be great to start, but you have to start to be great.", "writtenBy": "Zig Ziglar"},
    {"quote": "The best way out is always through.", "writtenBy": "Robert Frost"},
    {"quote": "It is not the mountain we conquer but ourselves.", "writtenBy": "Sir Edmund Hillary"},
    {"quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.", "writtenBy": "Ralph Waldo Emerson"},
    {"quote": "Believe you can and you're halfway there.", "writtenBy": "Theodore Roosevelt"},
    {"quote": "The best preparation for tomorrow is doing your best today.", "writtenBy": "H. Jackson Brown Jr."},
    {"quote": "In the middle of every difficulty lies opportunity.", "writtenBy": "Albert Einstein"},
    {"quote": "Be yourself; everyone else is already taken.", "writtenBy": "Oscar Wilde"},
    {"quote": "Life isn’t about finding yourself. Life is about creating yourself.", "writtenBy": "George Bernard Shaw"},
    {"quote": "You can’t go back and change the beginning, but you can start where you are and change the ending.", "writtenBy": "C.S. Lewis"},
    {"quote": "The best way to predict the future is to invent it.", "writtenBy": "Alan Kay"},
    {"quote": "Success is not how high you have climbed, but how you make a positive difference to the world.", "writtenBy": "Roy T. Bennett"}
  ];
  
  function generateQuote() {
    // Generate a random index between 0 and the length of quotesList - 1
    let randomIndex = Math.floor(Math.random() * quotesList.length);
    
    let quote = quotesList[randomIndex].quote;
    let writtenBy = quotesList[randomIndex].writtenBy;
  
    // Update the HTML with the new quote and author
    document.getElementById('quote').textContent = `${quote}`;
    document.getElementById('author').textContent =`${writtenBy}`;
  }
  generateQuote();