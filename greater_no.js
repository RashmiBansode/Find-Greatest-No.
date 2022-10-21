

function result() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const value3 = document.getElementById('value3').value;

    if (value1 === value2 && value2 === value3) {

        document.write(' all 3 Number are equal');
    }

    else if (value1 > value2 && value2 > value3) { document.write('Number1 is greater') } else if (value1 > value3 && value3 > value2) { document.write('Number1 is greater') }

    else if (value2 > value1 && value1 > value3) { document.write('Number2 is greater') } else if (value2 > value2 && value2 > value1) { document.write('Number2 is greater') }

    else if (value3 > value2 && value2 > value1) { document.write('Number3 is greater') } else if (value3 > value1 && value1 > value2) { document.write('Number3 is greater') }
    else {
        document.write('⛔️ values are NOT equal');
    }
}