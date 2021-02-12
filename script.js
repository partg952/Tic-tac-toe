var buttons =  document.querySelectorAll('button')
var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var button4 = document.getElementById('button4')
var button5 = document.getElementById('button5')
var button6 = document.getElementById('button6')
var button7 = document.getElementById('button7')
var button8 = document.getElementById('button8')
var button9 = document.getElementById('button9')

var num = true
var array1 = []
var array2 = []



button1.addEventListener('click' , function(){
    add('button1');
    check1();
})

button2.addEventListener('click' , function(){
    add('button2');
    check1();
})
button3.addEventListener('click' , function(){
    add('button3');
    check1();
})
button4.addEventListener('click' , function(){
    add('button4');
    check1();
})
button5.addEventListener('click' , function(){
    add('button5');
    check1();
})
button6.addEventListener('click' , function(){
    add('button6');
    check1();

})
button7.addEventListener('click' , function(){
    add('button7');
    check1();
})
button8.addEventListener('click' , function(){
    add('button8');
    check1();
})


button9.addEventListener('click',function(){
    add('button9');
    check1();
})






    function add(id){
        if(num==true){
            console.log(num)
            document.getElementById(id).style.backgroundColor = 'red'
            document.getElementById(id).innerHTML = 'O'
            document.getElementById(id).disabled = true
            num = false
            console.log(id)
            array1.push(id)
        }

        else{
            console.log(num)
            document.getElementById(id).style.backgroundColor = 'green'
            document.getElementById(id).innerHTML = 'X'
            console.log(id)
            document.getElementById(id).disabled = true
        num = true
        array2.push(id)
        }
        
    }

    function check1(){
        if(array1.includes('button1')&&array1.includes('button5')&&array1.includes('button9')){
            alert('Player1 won!')
        
        }
        else if(array1.includes('button1')&&array1.includes('button2')&&array1.includes('button3')){
                alert('Player1 won!')
        }
        else if(array1.includes('button4'&&'button5'&&'button6')){
            alert('Player1 won!')
        }

        else if(array1.includes('button7'&&'button8'&&'button9')){
            alert('Player1 won!')
        }
        else if(array1.includes('button1'&&'button4'&&'button7')){
            alert('Player1 won!')
        }
        else if(array1.includes('button2'&&'button5'&&'button8')){
            alert('Player1 won!')
        }
    }

    

