const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCasedTutorials = tutorials.map(tutorial=> {
  const words = tutorial.split(' ');

  const titleCasedWords = words.map(word => {
    const lowerCaseWord = word.toLowerCase();
    const firstLetter = lowerCaseWord.charAt(0).toUpperCase();
    const restOfWord = lowerCaseWord.slice(1);

    return firstLetter + restOfWord;
  });
  return titleCasedWords.join(' ');
});


const titleCased = () => {
   let done = tutorials.map(tutorial=> {
    const words = tutorial.split(' ');
  
    const titleCased = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
  
      return firstLetter + restOfWord;
    });
    return titleCased.join(' ');
  });
  return done
}

console.log(titleCased())