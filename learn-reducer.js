const array1 = [ 1, 2, 3, 4, 5 ];
const reducer = ( accumualtor, currenValue ) => accumualtor + currenValue;
console.log( array1.reduce( reducer ) );
console.log( array1.reduce( reducer, 10 ) );