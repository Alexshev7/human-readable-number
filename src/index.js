module.exports = function toReadable(number) {
   number = number.toString();
   let units;
   let tens;
   let hundreds;

   if (number == 0) {
      units = "zero" // если строка равна 0, то 0 - "zero"
   }
   if (number[number.length - 1] == 1) {
      units = "one" // если элемент с последним индексом в массиве равен 1, то 1 - "one"
   }
   if (number[number.length - 1] == 2) {
      units = "two" // если элемент с последним индексом в массиве равен 2, то 2 - "two"
   }
   if (number[number.length - 1] == 3) {
      units = "three" // если элемент с последним индексом в массиве равен 3, то 3 - "three"
   }
   if (number[number.length - 1] == 4) {
      units = "four" // если элемент с последним индексом в массиве равен 4, то 4 - "four"
   }
   if (number[number.length - 1] == 5) {
      units = "five" // если элемент с последним индексом в массиве равен 5, то 5 - "five"
   }
   if (number[number.length - 1] == 6) {
      units = "six" // если элемент с последним индексом в массиве равен 6, то 6 - "six"
   }
   if (number[number.length - 1] == 7) {
      units = "seven" // если элемент с последним индексом в массиве равен 7, то 7 - "seven"
   }
   if (number[number.length - 1] == 8) {
      units = "eight" // если элемент с последним индексом в массиве равен 8, то 8 - "eight"
   }
   if (number[number.length - 1] == 9) {
      units = "nine" // если элемент с последним индексом в массиве равен 9, то 9 - "nine"
   }
   if (number == 10) {
      units = "ten" // если строка равна 10, то 10 - "ten"
   }
   if (number.length === 2 && number[0] == 1 && number[1] == 1) {
      units = "eleven" // если строка длинной 2 символа, 1 эл = 1 и 2 эл = 1, то 11 - "eleven"
   }
   if (number.length === 2 && number[0] == 1 && number[1] == 2) {
      units = "twelve" // если строка длинной 2 символа, 1 эл = 1 и 2 эл = 2, то 12 - "twelve"
   }
   if (number.length === 2 && number[0] == 1 && number[1] == 3) {
      units = "thirteen" // если строка длинной 2 символа, 1 эл = 1 и 2 эл = 3, то 13 - "thirteen"
   }
   if (number.length === 2 && number[0] == 1 && number[1] == 4) {
      units = "fourteen" // если строка длинной 2 символа, 1 эл = 1 и 2 эл = 4, то 14 - "fourteen"
   }
   if (number.length === 2 && number[0] == 1 && number[1] == 5) {
      units = "fifteen" // если строка длинной 2 символа, 1 эл = 1 и 2 эл = 5, то 15 - "fifteen"
   }
   if (number.length === 2 && number[0] == 1 && number[1] == 6) {
      units = "sixteen" // если строка длинной 2 символа, 1 эл = 1 и 2 эл = 6, то 16 - "sixteen"
   }
   if (number.length === 2 && number[0] == 1 && number[1] == 7) {
      units = "seventeen" // если строка длинной 2 символа, 1 эл = 1 и 2 эл = 7, то 17 - "seventeen"
   }
   if (number.length === 2 && number[0] == 1 && number[1] == 8) {
      units = "eighteen" // если строка длинной 2 символа, 1 эл = 1 и 2 эл = 8, то 18 - "eighteen"
   }
   if (number.length === 2 && number[0] == 1 && number[1] == 9) {
      units = "nineteen" // если строка длинной 2 символа, 1 эл = 1 и 2 эл = 9, то 19 - "nineteen"
   }
   if (number.length === 2 && number[0] == 2) {
      tens = "twenty " // если строка длинной 2 символа и 1 эл. = 2, "twenty "
   }
   if (number == 20) {
      tens = "twenty" // если строка 20 - "twenty"
   }
   if (number.length === 2 && number[0] == 3) {
      tens = "thirty " // если строка длинной 2 символа и 1 эл. = 3, "thirty "
   }
   if (number == 30) {
      tens = "thirty" // если строка 30 - "thirty"
   }
   if (number.length === 2 && number[0] == 4) {
      tens = "forty " // если строка длинной 2 символа и 1 эл. = 4, "thirty "
   }
   if (number == 40) {
      tens = "forty" // если строка 40 - "forty"
   }
   if (number.length === 2 && number[0] == 5) {
      tens = "fifty " // если строка длинной 2 символа и 1 эл. = 5, "fifty "
   }
   if (number == 50) {
      tens = "fifty" // если строка 50 - "fifty"
   }
   if (number.length === 2 && number[0] == 6) {
      tens = "sixty " // если строка длинной 2 символа и 1 эл. = 6, "sixty "
   }
   if (number == 60) {
      tens = "sixty" // если строка 60 - "sixty"
   }
   if (number.length === 2 && number[0] == 7) {
      tens = "seventy " // если строка длинной 2 символа и 1 эл. = 7, "seventy "
   }
   if (number == 70) {
      tens = "seventy" // если строка 70 - "seventy"
   }
   if (number.length === 2 && number[0] == 8) {
      tens = "eighty " // если строка длинной 2 символа и 1 эл. = 8, "eighty "
   }
   if (number == 80) {
      tens = "eighty" // если строка 80 - "eighty"
   }
   if (number.length === 2 && number[0] == 9) {
      tens = "ninety " // если строка длинной 2 символа и 1 эл. = 9, "ninety "
   }
   if (number == 90) {
      tens = "ninety" // если строка 90 - "ninety"
   }
   if (number === 100) {
      units = "one hundred" // если строка 100 - "one hundred"
   }


   if (number.length === 3 && number[0] == 1) {
      hundreds = "one hundred " // если строка из 3 символов и 1 эл = 1 - "one hundred "
   }
   if (number.length === 3 && number[0] == 2) {
      hundreds = "two hundred " // если строка из 3 символов и 1 эл = 2 - "two hundred "
   }
   if (number.length === 3 && number[0] == 3) {
      hundreds = "three hundred " // если строка из 3 символов и 1 эл = 3 - "three hundred "
   }
   if (number.length === 3 && number[0] == 4) {
      hundreds = "four hundred " // если строка из 3 символов и 1 эл = 4 - "four hundred "
   }
   if (number.length === 3 && number[0] == 5) {
      hundreds = "five hundred " // если строка из 3 символов и 1 эл = 5 - "five hundred "
   }
   if (number.length === 3 && number[0] == 6) {
      hundreds = "six hundred " // если строка из 3 символов и 1 эл = 6 - "six hundred "
   }
   if (number.length === 3 && number[0] == 7) {
      hundreds = "seven hundred " // если строка из 3 символов и 1 эл = 7 - "seven hundred "
   }
   if (number.length === 3 && number[0] == 8) {
      hundreds = "eight hundred " // если строка из 3 символов и 1 эл = 8 - "eight hundred "
   }
   if (number.length === 3 && number[0] == 9) {
      hundreds = "nine hundred " // если строка из 3 символов и 1 эл = 9 - "nine hundred "
   }


   if (number.length === 3 && number[1] == 2) {
      tens = "twenty " // если строка из 3 символов и 2 эл = 2 - "twenty "
   }
   if (number.length === 3 && number[1] == 3) {
      tens = "thirty " // если строка из 3 символов и 2 эл = 3 - "thirty "
   }
   if (number.length === 3 && number[1] == 4) {
      tens = "forty " // если строка из 3 символов и 2 эл = 4 - "forty "
   }
   if (number.length === 3 && number[1] == 5) {
      tens = "fifty " // если строка из 3 символов и 2 эл = 5 - "fifty "
   }
   if (number.length === 3 && number[1] == 6) {
      tens = "sixty " // если строка из 3 символов и 2 эл = 6 - "sixty "
   }
   if (number.length === 3 && number[1] == 7) {
      tens = "seventy " // если строка из 3 символов и 2 эл = 7 - "seventy "
   }
   if (number.length === 3 && number[1] == 8) {
      tens = "eighty " // если строка из 3 символов и 2 эл = 8 - "eighty "
   }
   if (number.length === 3 && number[1] == 9) {
      tens = "ninety " // если строка из 3 символов и 2 эл = 9 - "ninety "
   }


   if (number.length === 3 && number[2] == 0 && number[1] == 1) {
      tens = "ten"; // если строка из 3 символов и 2 эл = 1 и 3 эл = 0, то 10 - "ten "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 0 && number[1] == 2) {
      tens = "twenty"; // если строка из 3 символов и 2 эл = 2 и 3 эл = 0, то 20 - "twenty "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 0 && number[1] == 3) {
      tens = "thirty"; // если строка из 3 символов и 2 эл = 3 и 3 эл = 0, то 30 - "thirty "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 0 && number[1] == 4) {
      tens = "forty"; // если строка из 3 символов и 2 эл = 4 и 3 эл = 0, то 40 - "forty "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 0 && number[1] == 5) {
      tens = "fifty"; // если строка из 3 символов и 2 эл = 5 и 3 эл = 0, то 50 - "fifty "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 0 && number[1] == 6) {
      tens = "sixty"; // если строка из 3 символов и 2 эл = 6 и 3 эл = 0, то 60 - "sixty "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 0 && number[1] == 7) {
      tens = "seventy"; // если строка из 3 символов и 2 эл = 7 и 3 эл = 0, то 70 - "seventy "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 0 && number[1] == 8) {
      tens = "eighty"; // если строка из 3 символов и 2 эл = 8 и 3 эл = 0, то 80 - "eighty "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 0 && number[1] == 9) {
      tens = "ninety"; // если строка из 3 символов и 2 эл = 9 и 3 эл = 0, то 90 - "ninety "
      units = undefined;
   }


   if (number.length === 3 && number[2] == 1 && number[1] == 1) {
      tens = "eleven"; // если строка из 3 символов и 2 эл = 1 и 3 эл = 1, то 11 - "eleven "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 2 && number[1] == 1) {
      tens = "twelve"; // если строка из 3 символов и 2 эл = 1 и 3 эл = 2, то 12 - "twelve "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 3 && number[1] == 1) {
      tens = "thirteen"; // если строка из 3 символов и 2 эл = 1 и 3 эл = 3, то 13 - "thirteen "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 4 && number[1] == 1) {
      tens = "fourteen"; // если строка из 3 символов и 2 эл = 1 и 3 эл = 4, то 14 - "fourteen "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 5 && number[1] == 1) {
      tens = "fifteen"; // если строка из 3 символов и 2 эл = 1 и 3 эл = 5, то 15 - "fifteen "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 6 && number[1] == 1) {
      tens = "sixteen"; // если строка из 3 символов и 2 эл = 1 и 3 эл = 6, то 16 - "sixteen "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 7 && number[1] == 1) {
      tens = "seventeen"; // если строка из 3 символов и 2 эл = 1 и 3 эл = 7, то 17 - "seventeen "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 8 && number[1] == 1) {
      tens = "eighteen"; // если строка из 3 символов и 2 эл = 1 и 3 эл = 8, то 18 - "eighteen "
      units = undefined;
   }
   if (number.length === 3 && number[2] == 9 && number[1] == 1) {
      tens = "nineteen"; // если строка из 3 символов и 2 эл = 1 и 3 эл = 9, то 19 - "nineteen "
      units = undefined;
   }


   if (number.length === 3 && number[1] == 0) {
      tens = undefined; // если строка из 3 символов и 2 эл = 0, то tens = undefined;
   }


   if (number.length === 3 && number[1] == 0 && number[2] == 0) {
      tens = undefined; // если строка из 3 символов и 2 эл = 0 и 3 эл = 0, то tens = undefined; units = undefined;
      units = undefined;
   }


   if (tens == undefined && hundreds == undefined) {
      return units; // если десятки и сотни не определены, то вернуть только единцы
   }
   if (units == undefined && hundreds == undefined) {
      return tens; // если единицы и сотни не определены, то вернуть только десятки
   }
   if (units == undefined && tens == undefined) {
      return hundreds.trim(); // если единицы и десятки не определены, то вернуть только сотни и убрать пробел
   }
   if (hundreds == undefined && units != undefined && tens != undefined) {
      return tens + units; // если сотни не определены и (единици и десятки определены), то вернуть десятки + единицы
   }
   if (hundreds != undefined && units == undefined && tens != undefined) {
      return hundreds + tens; // если сотни определены и десятки определены, а единицы не определены, то вернуть сотни + десятки
   }
   if (hundreds != undefined && tens == undefined && units != undefined) {
      return hundreds + units; // если сотни определены и единицы определены, а десятки не определены, то вернуть сотни + единицы
   }
   else {
      return hundreds + tens + units; // иначе вернуть сотни + десятки + единицы
   }
}