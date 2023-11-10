var Quotes=["Wise sayings often fall on barren ground, but a kind word is never thrown away. ...",
        "For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.",
        "Start with what is right rather than what is acceptable", 
        "Believe you can, and you're halfway there.",
        "The only way to do great work is to love what you do.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Your time is limited, don't waste it living someone else's life." ,
        "The only limit to our realization of tomorrow will be our doubts of today.",

        "The future belongs to those who believe in the beauty of their dreams.",

        "Don't watch the clock; do what it does. Keep going.",

        "The only way to achieve the impossible is to believe it is possible.",

        "It always seems impossible until it's done.",

        "Success is stumbling from failure to failure with no loss of enthusiasm.",

        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",

        "The only person you are destined to become is the person you decide to be.",

        "Success usually comes to those who are too busy to be looking for it.",

        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "Do not wait to strike till the iron is hot, but make it hot by striking."];

        function randomFunction(){
         document.getElementById("demo").innerHTML =  Quotes [Math.floor(Math.random() *  Quotes.length)];
        } 
