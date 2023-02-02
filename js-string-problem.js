// case problem
// const username = 'blackPinK';
// const userInput = 'blackPink';
// console.log(username.toLowerCase())
// if(username.toLowerCase == userInput.toLowerCase){
//     console.log('valid user')
// }
// else{
//     console.log('invalid user')
// }

// string search 
const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomae bolte pariny. kala kala sada sada rong jomcece sada kala';
const searchString = 'PaKhi';

// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('pakhi');
const lyricsLowerCase = lyrics.toLowerCase()

const searchStringLower =  searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower)
// console.log(doesExist);

// console.log(lyrics.indexOf('kala'));

if(lyrics.indexOf('sada') !== -1){
    console.log('exists inside the string')
}
else{
    console.log('cannot find it');
}

// startWith 
console.log(lyrics.startsWith('Tumi'))

// endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf')