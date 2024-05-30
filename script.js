function checkAnswers() {
  event.preventDefault()
  var questions = [
    {
      q1: document.getElementById('q1').value,
      a1: 'computer science'// FITB: Computer programmers need a degree in [BLANK].
    },
    {
      q2: document.getElementById('q2').value,
      a2: 'javascript',// FITB: One example of a language computer programmers should know is [BLANK].
      a2_1: 'c++',
      a2_2: 'python',
      a2_3: 'html'
    },
    {
      q3: document.querySelector('input[name="q3"]:checked').value,
      a3: 'true'// T/F: Knowledge of databases can be helpful.
    },
    {
      q4: document.querySelector('input[name="q4"]:checked').value,
      a4: 'false'// T/F: A strong understanding of software development is NOT needed.
    },
    {
      q5: document.querySelector('input[name="q5"]:checked').value,
      a5: 'true'// T/F: Employers usually look for people with previous experience.
    },
    {
      q6: document.querySelector('input[name="q6"]:checked').value,
      a6: 'true'// T/F: Employers usually look for people with strong IT experience.
    },
    {
      q7: document.querySelector('input[name="q7"]:checked').value,
      a7: 'true'// T/F: Employers usually require on-the-job training.
    },
    {
      q8: document.querySelector('input[name="q8"]:checked').value,
      a8: 'false'// T/F: Programmers should NOT be certified in at least one programming language.
    },
    {
      q9: document.getElementById('q9').value,
      a9: '3'// SA: How many years of experience are typically required for computer programmers?
    },
    {
      q10: document.getElementById('q10').value,
      a10: 'time management',// SA: What skills do computer programmers need?  List one.
      a10_1: 'teamwork',
      a10_2: 'communication',
      a10_3: 'problem solving',
      a10_4: 'critical thinking',
      a10_5: 'creative thinking'
    }
  ]
  var results = [
    {
      result1: result1 == 'Correct' ? true : false
    },
    {
      result2: result2 == 'Correct' ? true : false
    },
    {
      result3: result3 == 'Correct' ? true : false
    },
    {
      result4: result4 == 'Correct' ? true : false
    },
    {
      result5: result5 == 'Correct' ? true : false
    },
    {
      result6: result6 == 'Correct' ? true : false
    },
    {
      result7: result7 == 'Correct' ? true : false
    },
    {
      result8: result8 == 'Correct' ? true : false
    },
    {
      result9: result9 == 'Correct' ? true : false
    }, {
      result10: result10 == 'Correct' ? true : false
    },
  ]
  for (i in questions) {
    if (questions[0].q1 == questions[0].a1) {
      var result1 = 'Correct'
    } else {
      var result1 = 'Incorrect'
    }
    if (questions[1].q2 == questions[1].a2||questions[1].q2 == questions[1].a2_1||questions[1].q2 == questions[1].a2_2||questions[1].q2 == questions[1].a2_3) {
      var result2 = 'Correct'
    } else {
      var result2 = 'Incorrect'
    }
    if (questions[2].q3 == questions[2].a3) {
      var result3 = 'Correct'
    } else {
      var result3 = 'Incorrect'
    }
    if (questions[3].q4 == questions[3].a4) {
      var result4 = 'Correct'
    } else {
      var result4 = 'Incorrect'
    }
    if (questions[4].q5 == questions[4].a5) {
      var result5 = 'Correct'
    } else {
      var result5 = 'Incorrect'
    }
    if (questions[5].q6 == questions[5].a6) {
      var result6 = 'Correct'
    } else {
      var result6 = 'Incorrect'
    }
    if (questions[6].q7 == questions[6].a7) {
      var result7 = 'Correct'
    } else {
      var result7 = 'Incorrect'
    }
    if (questions[7].q8 == questions[7].a8) {
      var result8 = 'Correct'
    } else {
      var result8 = 'Incorrect'
    }
    if (questions[8].q9 == questions[8].a9) 
      var result9 = 'Correct'
    } else {
      var result9 = 'Incorrect'
    }
    if (questions[9].q10 == questions[9].a10||questions[9]) {
      var result10 = 'Correct'
    } else {
      var result10 = 'Incorrect'
    }
  }
  var results = [
    {
      result1: result1 == 'Correct' ? true : false
    },
    {
      result2: result2 == 'Correct' ? true : false
    },
    {
      result3: result3 == 'Correct' ? true : false
    },
    {
      result4: result4 == 'Correct' ? true : false
    },
    {
      result5: result5 == 'Correct' ? true : false
    },
    {
      result6: result6 == 'Correct' ? true : false
    },
    {
      result7: result7 == 'Correct' ? true : false
    },
    {
      result8: result8 == 'Correct' ? true : false
    },
    {
      result9: result9 == 'Correct' ? true : false
    }, {
      result10: result10 == 'Correct' ? true : false
    },
  ]
  var correctAnswers = 0
  var totalAnswers = results.length
  for (var i = 0; i < results.length; i++) {
    for (var result in results[i]) {
      if (results[i][result] === true) {
        correctAnswers++
      }
    }
  }
  
  var finalPercent = (correctAnswers/results.length) * 100
  var finalMark = `${correctAnswers}/${totalAnswers}`
  document.getElementsByName('result1')[0].innerHTML = `Question is ${result1}`
  document.getElementsByName('result2')[0].innerHTML = `Question is ${result2}`
  document.getElementsByName('result3')[0].innerHTML = `Question is ${result3}`
  document.getElementsByName('result4')[0].innerHTML = `Question is ${result4}`
  document.getElementsByName('result5')[0].innerHTML = `Question is ${result5}`
  document.getElementsByName('result6')[0].innerHTML = `Question is ${result6}`
  document.getElementsByName('result7')[0].innerHTML = `Question is ${result7}`
  document.getElementsByName('result8')[0].innerHTML = `Question is ${result8}`
  document.getElementsByName('result9')[0].innerHTML = `Question is ${result9}`
  document.getElementsByName('result10')[0].innerHTML = `Question is ${result10}`
  document.getElementsByName('finalMark')[0].innerHTML = `Your final mark is ${finalMark}`
  document.getElementsByName('finalPercent')[0].innerHTML = `${finalPercent}%`
}