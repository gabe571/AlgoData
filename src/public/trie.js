//trie autocomplete search
const fruits = ['Apple', 'Orange', 'Mango', 'Watermelon', 'Kiwi', 'Banana', 'Grapes'];
 
 
document.getElementById('search').addEventListener('input', (e)=> {
 
    let fruitsArray = [];

    if(e.target.value){
        fruitsArray = fruits.filter(fruit => fruit.toLowerCase().includes(e.target.value))
        fruitsArray = fruitsArray.map(fruit => `${fruit}`)
    }

    showFruitsArray(fruitsArray);
}); 
function showFruitsArray(fruitsArray){
    const html = !fruitsArray.length ? '' : fruitsArray.join('')
    document.querySelector('ul').innerHTML = html
}
