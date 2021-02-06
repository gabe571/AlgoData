const words = ['Great', 'Tea', 'Ten', 'Teddy', 'Movie', 'Moon'];

 
document.getElementById('search').addEventListener('input', (e) => {
 
    let wordsArray = [];

    if(e.target.value){
        wordsArray = words.filter(word => word.toLowerCase().includes(e.target.value))
        wordsArray = wordsArray.map(word => `<br>${word}<br>`)
    }

    showWordsArray(wordsArray);
}); 
function showWordsArray(wordsArray){
    const html = !wordsArray.length ? '' : wordsArray.join('')
    document.querySelector('ul').innerHTML = html
}