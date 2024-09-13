var quotes = [
    "Believe you can, and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only way to achieve the impossible is to believe it is possible.",
    "It always seems impossible until it's done.",
    "Success is stumbling from failure to failure with no loss of enthusiasm.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The future belongs to those who believe in the beauty of their dreams."
];

var poems = [
    "The woods are lovely, dark and deep, But I have promises to keep, And miles to go before I sleep.",
    "Hold fast to dreams, For if dreams die, Life is a broken-winged bird That cannot fly.",
    "I wandered lonely as a cloud, That floats on high o'er vales and hills, When all at once I saw a crowd, A host, of golden daffodils.",
    "Two roads diverged in a yellow wood, And sorry I could not travel both, And be one traveler, long I stood, And looked down one as far as I could.",
    "Out of the night that covers me, Black as the pit from pole to pole, I thank whatever gods may be, For my unconquerable soul.",
    "I celebrate myself, and sing myself, And what I assume you shall assume, For every atom belonging to me as good belongs to you.",
    "A thing of beauty is a joy forever: Its loveliness increases; it will never pass into nothingness.",
    "If you can keep your head when all about you are losing theirs and blaming it on you...",
    "Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light."
];

function randomQuote() {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteText").innerHTML = quote;
}

function randomPoem() {
    var poem = poems[Math.floor(Math.random() * poems.length)];
    document.getElementById("quoteText").innerHTML = poem;
}
