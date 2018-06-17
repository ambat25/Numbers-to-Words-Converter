// var numb ="100,699,958,100,002";

// console.log(convert(numb));

function convert(num){
    var finalText = '';
    var num =num.split(',');
    for (let index = 0; index < num.length; index++) {
        if(num[index].length == 1){
            num[index] = "00"+""+num[index];
        }
        if(num[index].length == 2){
            num[index] = "00"+""+num[index];
        }
    }

    var ff = [];

    function assingLabel(rank){
        switch (rank) {
            case 1:
                return 'Thousand '
                break;
            case 2:
                return 'Million '        
                break;
            case 3:
                return 'Billion '            
                break;
            case 4:
                return 'Trillion '        
                break;    
            default:
                return '';
                break;
        }
    }

    for (let index = 0; index < num.length; index++) {
        var tempText = '';
        tempNum = num[index];
        var unit = tempNum[2];
        var tens = tempNum[1];
        var hundred = tempNum[0];

        var hundredWord = '';
        var tensWord = '';
        var unitWord = '';

        switch(unit){
            case '1':
                unitWord = "one";
                break;
            case '2':
                unitWord = "two";
                break;
            case '3':
                unitWord = "three";
                break;
            case '4':
                unitWord = "four";
                break;
            case '5':
                unitWord = "five";
                break;
            case '6':
                unitWord = "six";
                break;
            case '7':
                unitWord = "seven";
                break;
            case '8':
                unitWord = "eight";
                break;
            case '9':
                unitWord = "nine";
                break;
                
        }
        unitWord += ' '; 
        switch(tens){
            case '1':		
                switch(unit)
                {
                    case '0':
                        tensWord = "ten";
                        unitWord = "";
                        break;
                    case '1':
                        tensWord = "eleven";
                        unitWord = "";
                        break;
                    case '2':
                        tensWord = "twelve";
                        unitWord = "";
                        break;
                    case '3':
                        tensWord = "thirteen";
                        unitWord = "";
                        break;
                    case '4':
                        tensWord = "forteen";
                        unitWord = "";
                        break;
                    case '5':
                        tensWord = "fifteen";
                        unitWord = "";
                        break;
                    case '6':
                        tensWord = "sixteen";
                        unitWord = "";
                        break;
                    case '7':
                        tensWord = "seventeen";
                        unitWord = "";
                        break;
                    case '8':
                        tensWord = "eighteen";
                        unitWord = "";
                        break;
                    case '9':
                        tensWord = "nineteen";
                        unitWord = "";
                        break;
                        
                }
                break;
            case '2':
                tensWord = "twenty";
                break;
            case '3':
                tensWord = "thirty";
                break;
            case '4':
                tensWord = "forty";
                break;
            case '5':
                tensWord = "fifty";
                break;
            case '6':
                tensWord = "sixty";
                break;
            case '7':
                tensWord = "seventy";
                break;
            case '8':
                tensWord = "eighty";
                break;
            case '9':
                tensWord = "ninety";
                break;
                
        }

        switch(hundred){
            case '1':
                hundredWord="one hundred ";
                break;
            case '2':
                hundredWord="two hundred ";
                break;
            case '3':
                hundredWord="three hundred ";
                break;
            case '4':
                hundredWord="four hundred ";
                break;
            case '5':
                hundredWord="five hundred ";
                break;
            case '6':
                hundredWord="six hundred ";
                break;
            case '7':
                hundredWord="seven hundred ";
                break;
            case '8':
                hundredWord="eight hundred ";
                break;
            case '9':
                hundredWord="nine hundred ";
                break;
        }
        

        if((hundredWord=="") && (tensWord==""))
        {
            tempText = unitWord;

        }   

        else if((hundredWord==""))
        {
            tempText = tensWord+""+unitWord;
        }
        else if((tens=='0'))
        {
            if(unit=='0')
            {
                tempText = hundredWord;
            }
            else
            {
                tempText = hundredWord+" and "+ unitWord;
            }
        }
        else
        {
            tempText = hundredWord + " and " + tensWord + " "  + unitWord;
        }

        if(index == num.length -1){
            switch (tempText) {
                case 'one ':
                case 'two ':
                case 'three ':
                case 'four ':
                case 'five ':
                case 'six ':
                case 'seven ':
                case 'eight ':
                case 'nine ':
                tempText = "and " + tempText;            
                    break;
            }
        }

        ff.push(tempText);
    }
    var flag = 0;

    for (let index = ff.length -1 ; index >=0 ; index--) {
        finalText += ff[flag] + assingLabel(index);
        flag++;
    }
    return (finalText.toUpperCase().trim());
}