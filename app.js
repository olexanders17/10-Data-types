/*
 1) Write function which takes array of strings and returns array of numbers.
 E.g. getNumbers([‘2’, ‘3’, ‘4’, ‘das’]); // -> [2, 3, 4]
 */


function getNumbers(stringArray) {
    var numbersArray = [];
    for (var i = 0; i < stringArray.length; i++) {

        if (!isNaN(+stringArray[i])) {
            numbersArray.push(+stringArray[i]);
        }

    }
    return numbersArray;
}

var strArray = ['2a', '3', '4', 'das', '12.5'];

console.log("Answer 1");
console.log(getNumbers(strArray));

/*2) Write function which takes array of strings and returns SUM of all numeric values.
 E.g. getNumericSum( [‘a’, ‘2’, ‘3’] ); // -> 5*/

function getNumericSum(stringArray) {
    var numericSum = 0;
    for (var i = 0; i < stringArray.length; i++) {

        if (!isNaN(+stringArray[i])) {
            numericSum += +stringArray[i];
        }

    }
    return numericSum;

}
console.log("Answer 2");
console.log(getNumericSum(['2', 'ddsads', '34', '-1', 'a23']));


/*3) Write function which takes array of elements and returns quantity of it’s unique elements
 E.g. getQuanOfUniqueElements( [2, ‘3’, 3, 2] ); // -> 3*/

function getQuanOfUniqueElements(arr) {
    //var qtyUniqElements = 0;
    var uniqElementsArray = [];
    for (var i = 0; i < arr.length; i++) {
        var elem = +arr[i];
        if (!isNaN(elem)) {
            if (uniqElementsArray.length == 0) {
                uniqElementsArray.push(elem)
            } else {
                var isUniq = true;
                for (var j = 0; j < uniqElementsArray.length; j++) {
                    if (elem == uniqElementsArray[j]) {
                        isUniq = false;
                    }

                }

                if (isUniq) {
                    uniqElementsArray.push(elem);
                }

            }


        }

    }
    return uniqElementsArray.length;

}


console.log("Answer 3");
console.log(getQuanOfUniqueElements(['2', '2', '34', '-1', '34', 2, 45]));


/*
 4) Write function which takes string and returns quantity of it’s unique characters
 E.g. getQuanOfUniqueCharacters( ‘muahaha’ ); // -> 4*/

function getQuanOfUniqueCharacters(str) {
    var strUniqArr = [];
    var strInputArr = str.split('');

    strInputArr.forEach(function (el1) {
        var isUniqEl = true;

        strUniqArr.forEach(function (el2) {

            if (el2 == el1) {
                isUniqEl = false;
            }

        }, el1);

        if (isUniqEl) {
            strUniqArr.push(el1);
        }

    });
    return strUniqArr;
}

console.log("Answer 4");
console.log(getQuanOfUniqueCharacters("abcdabcd1&?"));


/*
 5)*Write function which takes array of objects (think of human) in a given format of:
 { name: ‘somename’, age: 35 }
 and returns array of names of those people who are older than 65.
 E.g getPensionersName( [ {name: ‘Vasya’, age: 13}, {name: ‘Vasiliy’, age: 66} ] // -> [ ‘Vasiliy’ ]*/

function getPensionersName(people) {
    var result = [];
    people.forEach(function (el) {
            if (el.age > 65) {
                result.push(el.name);
            }
        }
    );
    return result

}


console.log("Answer 5");
var people = [
    {name: 'Vasya', age: 13},
    {name: 'Ivan', age: 66},
    {name: 'Petro', age: 25},
    {name: 'Pavlo', age: 78}
];
console.log("list of pensioners : " + getPensionersName(people));


/*
 6) BONUS practice:
 A finance company is carrying out a study on the worst stock investments and would like to acquire a program to do so.
 The program must be able to analyze a chronological series of stock values in order to show the largest loss that
 it is possible to make by buying a share at a given time t0 and by selling it at a later date t1. The loss will be expressed as
 the difference in value between t0 and t1. If there is no loss, the loss will be worth 0.

 getBiggestPossibleLoss( [3, 2, 4, 2, 1, 5] ); // -> -3  | getBiggestPossibleLoss( [1, 2, 4, 4, 5] ); // -> 0

 */


function getBiggestPossibleLoss(data) {
    var tmpLoss=0;
    for (var i = 1; i < data.length ; i++) {
        for (var j = 2; j < data.length; j++) {

            if ((data[j]-data[i])<tmpLoss) {
                tmpLoss=data[j]-data[i];
            }


        }

    }

return tmpLoss;
}
console.log("Answer 6");
var stockData = [3, 2, 4, 2, 1, 5,10,7];
console.log("The Biggest Possible Loss: "+getBiggestPossibleLoss(stockData));










