function test(liczba) {

    if(liczba%2 == 0){
        console.log('liczba ' + liczba + ' jest przysta');
    }
    else {
        console.log('liczba ' + liczba + ' jest nie przysta');
    }

}

test(5);
test(4);


function dzielenie() {
    for (let a=0; a<100; a++){
        if(a%3 == 0){
            console.log(a);
        }
    }

}
dzielenie();

function ciagLiczb (){

    array = [];

    for(let i = 1; i < 101; i ++){
        console.log(i);
        array.push(i);
    }

    console.log(array)

}

ciagLiczb();