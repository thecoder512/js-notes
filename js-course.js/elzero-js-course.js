/*
    leason (1)  output to screan

    1- window.alert()
    2- document.write() -- it is not pro ,
    3- console.log()
*/
/*
// Examples

window.alert('hi this is alert!!')
document.write('<h1>this is paragraph</h1>')
console.log('hi from console')
*/
// --------------------------------------------------------

/*
    leason (2) console methods && styling console

    1- console.log()
    2- console.table()
    3- console.error()

    styling => Decrative %c
*/
/*
// Examples

console.log('hi from console')
console.error('hi from console')
console.table(['hi from console','ahmed'])

console.log('ahmed %cayob abdo', 'color: red; font-size: 1rem;')
*/
// --------------------------------------------------------

/*
    leason (3) ES6 => ecma script
*/
// --------------------------------------------------------
/*
    leason (4) Data Types Intro
    1- string => ''
    2- numbers
    3- bolean => true , false
    4- array => object => []
    5- object => {}
    6- undefined
    7- null
    
    *- typeOf()
*/
// --------------------------------------------------------
/*
    leason (5) variables 

    1- var => old => can redeclare it agine => declared globaly
    2- let => es6 => can redeclare it agine => declared aa blooked scope 
    3- const => es6 => can't redeclare it agine =>  declared aa blooked scope
    
    1- var  => Redevlare (Yes)
            => Access Before Declare(no => Undefined)  
            => Variavle Scope Drama [Added To Window] (Yes)
            => Bloch or Function Scope () 
    
    2- let  => Redevlare (No => Error)
            => Access Before Declare(No => Error)  
            => Variavle Scope Drama  ()
            => Bloch or Function Scope () 
            
    3- const => Redevlare (No => Error)
            => Access Before Declare(No => Error)  
            => Variavle Scope Drama ()
            => Bloch or Function Scope () 
*/
/*
// Examples

    var name = 'ahmed'
    const name = 'ahmed'
    let name = 'ahmed'

    let ahmed = 'ahmed', // multi 
    age = '15';

// notice that id can access directly in js    
*/
// --------------------------------------------------------
/*
    leason (6) idenigiers

    1- name conditional & Rules 
    2- Reversed words

*/
/*
// Examples
        IDENTFIRE
            =
    var = userName = 'ahmedayob1';

// --------------------------------------------------------
/*
    leason (7) string syntax + character Escape sequences

    => \ Escape + line continue
    => \n
    => \\
    => \'
    => \"
*/
/*
// Examples

    console.log('ahmed \'ayob\'')

// --------------------------------------------------------
/*
    leason (8) Cocatenation
    
    => +
*/
/*
// Examples

    let userName = 'ahmed';
    let password = 'thecoder';
    let info = "userName + '' + password"

    Template Literals (template String => (``) back tick marck
    let info = `${userName} ${password}`;


// --------------------------------------------------------
/*
    leason (9) Arethmetic operators

    => + addition
    => - substraction
    => * multiplication
    => / division
    => ** exponentiation
    => ++ increament [post / pre]
    => -- decreament [post / pre]
    => % modulus (division remainder)

*/
/*

// --------------------------------------------------------
/*
    leason (10) Unary plus & Unary nogation 

    => Unary plus => [Return number if its not number]
    => Unary nogation => [return number if its not number + negates it ]

    // tests 

    - normal number => console.log(+100) // 100
    - string number => console.log(+'100') // 100
    - string negative => console.log(+'-100') // -100
    - sring text => console.log(+'ahmed') // NAN
    - float => console.log(+"15.5") // 15.5
    - Hexadecimal => console.log(+""xff) // 255
    - null => console.log(+null) // 0
    - false => console.log(+false) // 0 
    - true => console.log(+true) // 1


     - normal number => console.log(-100) // -100
    - string number => console.log(-'100') // -100
    - string negative => console.log(-'-100') // 100
    - sring text => console.log(-'ahmed') // NAN
    - float => console.log(-"15.5") // -15.5
    - Hexadecimal => console.log(-""xff) // -255
    - null => console.log(-null) // 0
    - false => console.log(-false) // 0 
    - true => console.log(-true) // -1

*/

// --------------------------------------------------------
/*
    leason (11) Type coercion (type casting)

    - +
    - - 
    - "" - 2
    - false - true

*/
/*
// Examples

    let a = "10"
    let b = 20
    let c = true

    console.log(+a + b) // 30
    console.log(a - b) // -10
    console.log("" - b) // -20
    console.log(true - false) // 1 

// --------------------------------------------------------
/*
    leason (12) Assignment Operators
    
    - +=
    - -=
    - *=
    - /=
    - %=

    // examples 

    let a = 10;
    let b = "20";
    let c = 80;

    console.log(++a + +b++ + +c++ - +a++);
    //  11 + (20+1=>) + (80+1=>) - (11+1=>) => 100
    console.log(++a + -b + +c++ - -a++ + +a);
            //  13 + -21 + (81+1=>) - (-13+1=>) +14\
    console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
    //          81 + 21 + 13 * (21+1) - 22 * 13 + 12 - 1 



        let d = "100",
    e = "20",
    f = 30,
    g = true;

    console.log(+d * +e); //1000
    console.log(+d + d / e + --e + f + --e + true); // 173


// --------------------------------------------------------
/*
    leason (13) 1-  number 

    - double precision
    - syntactic sugar '_' => console.log(1_000_000)
    - e =>  console.log(1e6)
    - ** => console.log(10 ** 6)
    - woth deicmal => console.log(1000000.0)
    - number + bigInt => console.log(Number.MIN_SAFE_INTEGER);
    - number min value => console.log(Number.MAX_SAFE_INTEGER);
    - number max value => console.log(Number.MAX_VALUE);

*/
/*
//  - 

// --------------------------------------------------------
/*
    leason (14) number mothods

    - toString()
    - toFixed()
    - parseInt()
    - parseFloat(a)
    - isNaN(a) => [ES6]
    - isInteger(a)  => [ES6]
*/
/*
// Examples
*/
// --------------------------------------------------------
/*
    leason (14) math object

    - Math.round()  => takes the low value < 5 and make it 0 ,
                    => takes the low value > 5 and make it 1
    - Math.ceil() => takes the low value > 5 and make it 1
    - Math.floor() => takes the low value < 5 and make it 0
    - Math.min() => gets the smallest number 
    - Math.max() => gets the biggest nummber
    - Math.pow() => it's like 2 ** 4 but like that (2, 4)
    - Math.random() => get you random number 1 : 0
    - Math.trunc() [ES6] => gets you integer number no decimals

    //Emaples
    
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        console.log(Math.round(Math.random() * numbers[8]));

*/
// --------------------------------------------------------
/*
    leason (15)  string methods

    - Access With index
    - access with charAt()
    - length
    - trim()
    - toUpperCase()
    - toLowerCase()
    - chain methods

    - indexOf(value, start [opt] 0) (if no = -1)
    - lastIndexOf(value, start [opt] length)
    - slice(start [mand], end [opt] not include end)
    - repeat(times) ES6
    - split(separator [opt], limit [opt])

    - substring(start [mand], end [opt] including end)
    -- start > end will swap
    -- start < 0 it start from 0
    -- use length to get last character
    - substr(start [mand], characters to extract)
    -- start >= length = ''
    -- negative start from end
    - includes(value [mand], start [opt] defult 0 ) [ES6]
    - startWith(value [mand], start [opt] defult 0) [ES6]
    - endsWith( value [mand], length [opt] defult full length) [ES6]

    /eXAPMLES

    // let a = "Elzero Web School";

    // console.log(a.substring(2, 3).toLocaleUpperCase() + a.slice(3, 6));
    // console.log(a.substr(13, 1).toUpperCase().repeat(8));
    // console.log(a.substring(0, 6).split());
    // console.log(a.substr(0, 6) + a.substr(10, 7));
    // console.log(
    a[0].toLowerCase() + a.substr(1, 15).toUpperCase() + a.slice(-1).toLowerCase()
);

//

*/
// --------------------------------------------------------
/*
    leason (16) 

*/
/*
// Examples
*/
// --------------------------------------------------------
/*
    leason (14) 

*/
/*
// Examples
*/
// --------------------------------------------------------
let a = "Elzero Web School";
console.log(
  a[0].toLowerCase() + a.substr(1, 15).toUpperCase() + a.slice(-1).toLowerCase()
);
