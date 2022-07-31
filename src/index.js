module.exports = function toReadable (number) {
    const nums = {
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
        0 : 'zero'
    }

    const ten = {
        2 : 'twenty',
        3 : 'thirty',
        4 : 'forty',
        5 : 'fifty',
        6 : 'sixty',
        7 : 'seventy',
        8 : 'eighty',
        9 : 'ninety',
    };

    const teens = {
        1 : 'eleven',
        2 : 'twelve',
        3 : 'thirteen',
        4 : 'fourteen',
        5 : 'fifteen',
        6 : 'sixteen',
        7 : 'seventeen',
        8 : 'eighteen',
        9 : 'nineteen',
        0 : 'ten'
    };

    let temp = number;

    const hundreds = Math.floor(temp / 100);
    temp = temp % 100;
    const tens = Math.floor(temp / 10);
    temp = temp % 10;
    let result = '';
    if (hundreds != 0) {
        result = result + nums[hundreds];
        result += ' hundred'
        if(tens > 0 || temp > 0){
            result += ' ';
        }
    }
    if (tens > 1){
        result = result + ten[tens];
        if (temp > 0) {
            result = result + ' ' + nums[temp];
        }
    }
    if (tens == 1){
        result = result + teens[temp];
    }
    if (tens == 0) {
        if (temp > 0) {
            result = result + nums[temp];
        }
    }
    if (number == 0) {
        result = 'zero';
    }
    console.log(result);
    return result;
}


