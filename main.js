let Quotes=[];

let originalQuotes=document.getElementById('originalQuotes');
let writerName=document.getElementById('writerName');
let updateQuotes=document.getElementById('updateQuotes');
let updateWriter=document.getElementById('updateWriter');
let loadingQuote=document.getElementById('loadingQuote');
let errorMsg=document.getElementById('errorMsg');
let updateButton=document.querySelector('.updateQuote Button');
let updateSection=document.querySelector('.updateQuote');
let loadingSection=document.querySelector('.loading');
let errorSection=document.querySelector('.msgError');
let quotesBox=document.querySelector('.quotesBox');


async function getQuote() {
    let API_URL='https://dummyjson.com/quotes/random';
    try{
        let response=await fetch(API_URL);
        let data=await response.json();
        return{
            quote:data.quote,
            author:data.author
        };
    }
    catch(error){
        console.error("wrong",error);
        return null;
    }
}
async function updateQuote(){
    loadingSection.style.display='block';
    errorSection.style.display='none';
    quotesBox.style.display='none';
    let quoteDate=await getQuote();
    loadingSection.style.display='none';
    if(quoteDate){
        originalQuotes.textContent=quoteDate.quote;
        writerName.textContent='-' +quoteDate.author;
        quotesBox.style.display='grid';
    }
    else{
        errorSection.style.display='block';
    }
}
updateButton.addEventListener('click',updateQuote);
updateQuote();