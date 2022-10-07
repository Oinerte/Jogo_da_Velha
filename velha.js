var btn1Estado = 0

var btn2Estado = 0

var btn3Estado = 0

var btn4Estado = 0

var btn5Estado = 0

var btn6Estado = 0

var btn7Estado = 0

var btn8Estado = 0

var btn9Estado = 0



function marcarbtn1() {
   if (btn1Estado == 0) {
      document.getElementById("btn1").innerHTML = ('X')
      btn1Estado = 'X'
   }
   else if (btn1Estado == 'X') {
      document.getElementById('btn1').innerHTML = ('O')
      btn1Estado = 'O'
   }
   else if (btn1Estado == 'O') {
      document.getElementById('btn1').innerHTML = (' ')
      btn1Estado = 0
   }

}

function marcarbtn2() {
   if (btn2Estado == 0) {
      document.getElementById("btn2").innerHTML = ('X')
      btn2Estado = 'X'
   }
   else if (btn2Estado == 'X') {
      document.getElementById('btn2').innerHTML = ('O')
      btn2Estado = 'O'
   }
   else if (btn2Estado == 'O') {
      document.getElementById('btn2').innerHTML = (' ')
      btn2Estado = 0
   }

}

function marcarbtn3() {
   if (btn3Estado == 0) {
      document.getElementById("btn3").innerHTML = ('X')
      btn3Estado = 'X'
   }
   else if (btn3Estado == 'X') {
      document.getElementById('btn3').innerHTML = ('O')
      btn3Estado = 'O'
   }
   else if (btn3Estado == 'O') {
      document.getElementById('btn3').innerHTML = (' ')
      btn3Estado = 0
   }

}

function marcarbtn4() {

    if (btn4Estado == 0) {
      document.getElementById('btn4').innerHTML = ('X')
      btn4Estado = 'X'
   }
  else  if (btn4Estado == 'X') {
      document.getElementById("btn4").innerHTML = ('O')
      btn4Estado = "O"
   }

   else if (btn4Estado == "O") {
      document.getElementById('btn4').innerHTML = (' ')
      btn4Estado = 0
   }

}

function marcarbtn5() {
   if (btn5Estado == 0) {
      document.getElementById("btn5").innerHTML = ('X')
      btn5Estado = 'X'
   }
   else if (btn5Estado == 'X') {
      document.getElementById('btn5').innerHTML = ('O')
      btn5Estado = 'O'
   }
   else if (btn5Estado == 'O') {
      document.getElementById('btn5').innerHTML = (' ')
      btn5Estado = 0
   }

}

function marcarbtn6() {
   if (btn6Estado == 0) {
      document.getElementById("btn6").innerHTML = ('X')
      btn6Estado = 'X'
   }
   else if (btn6Estado == 'X') {
      document.getElementById('btn6').innerHTML = ('O')
      btn6Estado = 'O'
   }
   else if (btn6Estado == 'O') {
      document.getElementById('btn6').innerHTML = (' ')
      btn6Estado = 0
   }

}

function marcarbtn7() {
   if (btn7Estado == 0) {
      document.getElementById("btn7").innerHTML = ('X')
      btn7Estado = 'X'
   }
   else if (btn7Estado == 'X') {
      document.getElementById('btn7').innerHTML = ('O')
      btn7Estado = 'O'
   }
   else if (btn7Estado == 'O') {
      document.getElementById('btn7').innerHTML = (' ')
      btn7Estado = 0
   }

}

function marcarbtn8() {
   if (btn8Estado == 0) {
      document.getElementById("btn8").innerHTML = ('X')
      btn8Estado = 'X'
   }
   else if (btn8Estado == 'X') {
      document.getElementById('btn8').innerHTML = ('O')
      btn8Estado = 'O'
   }
   else if (btn8Estado == 'O') {
      document.getElementById('btn8').innerHTML = (' ')
      btn8Estado = 0
   }

}

function marcarbtn9() {
   if (btn9Estado == 0) {
      document.getElementById("btn9").innerHTML = ('X')
      btn9Estado = 'X'
   }
   else if (btn9Estado == 'X') {
      document.getElementById('btn9').innerHTML = ('O')
      btn9Estado = 'O'
   }
   else if (btn9Estado == 'O') {
      document.getElementById('btn9').innerHTML = (' ')
      btn9Estado = 0
   }  

}

function restart() {
    document.location.reload()
}
