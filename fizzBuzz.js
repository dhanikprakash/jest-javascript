function fizzBuzz() {
    var data = '';
 for(let i=1; i <= 10; i++)
  {
      if(i % 3 ===0 && i % 5 === 0){
          data = data + 'FizzBuzz';
      }
     else if(i % 3 === 0){
         data = data + 'Fizz';
      }
      else if( i % 5 === 0)
      {
          data = data + 'Buzz'
      }

  }

  return data;
}

module.exports = fizzBuzz;
