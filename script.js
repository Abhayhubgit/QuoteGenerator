const quoteContainer= document.getElementById('quote-container');
const quoteText= document.getElementById('quote');
const authorText= document.getElementById('author');
const TwitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');



let apiQuotes = [] ;

//show new quote 

function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)] ;
     if( !quote.author){
        authorText.textContent = 'Unknown' ;
     }
     else{
     authorText.textContent = quote.author ;

     }
     quoteText.textContent = quote.text ;
}

//  get Quotes from API //inspirational quote react //https://type.fit/api/quotes -----> in type form text
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
      const response = await fetch(apiUrl) ;
      apiQuotes = await response.json();
    //   console.log(apiQuotes) ;
      newQuote();
    } catch (error) {
        alert(error)
        
    }
}
//tweet quote  // web intent url  
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}

//Event Listeners

newQuoteBtn.addEventListener('click' , newQuote) ; 
TwitterBtn.addEventListener('click', tweetQuote) ;

//on LOAd

getQuotes();