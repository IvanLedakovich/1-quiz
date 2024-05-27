const questions = [
	{
		question:
			'An interface design application that runs in the browser with team-based collaborative design projects',
		answers: [
			{ text: 'Figma', correct: true },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false }
		]
	},
	{
		question:
			'An interface design application that runs in the browser with team-based collaborative design projects',
		answers: [
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: true },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false }
		]
	},
	{
		question:
			'An interface design application that runs in the browser with team-based collaborative design projects',
		answers: [
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: true },
			{ text: 'Figma', correct: false }
		]
	},
	{
		question:
			'An interface design application that runs in the browser with team-based collaborative design projects',
		answers: [
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: true }
		]
	},
	{
		question:
			'An interface design application that runs in the browser with team-based collaborative design projects',
		answers: [
			{ text: 'Figma', correct: true },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false }
		]
	},
	{
		question:
			'An interface design application that runs in the browser with team-based collaborative design projects',
		answers: [
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: true },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false }
		]
	},
	{
		question:
			'An interface design application that runs in the browser with team-based collaborative design projects',
		answers: [
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: true },
			{ text: 'Figma', correct: false }
		]
	},
	{
		question:
			'An interface design application that runs in the browser with team-based collaborative design projects',
		answers: [
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: true }
		]
	},
	{
		question:
			'An interface design application that runs in the browser with team-based collaborative design projects',
		answers: [
			{ text: 'Figma', correct: true },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false }
		]
	},
	{
		question:
			'An interface design application that runs in the browser with team-based collaborative design projects',
		answers: [
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: true },
			{ text: 'Figma', correct: false },
			{ text: 'Figma', correct: false }
		]
	}
]

let currentQuestionIndex = 0
let score = 0
let answerChosen = false

function startTheQuizFunction() {
	document.getElementById('startCircleDiv').style.display = 'none'
	document.getElementById('stepsFrame').style.display = 'block'
	document.getElementById('questionContainer').style.display = 'block'
	document.getElementById('answersBox').style.display = 'grid'
	document.getElementById('questionContainer').style.display = 'block'
	document.getElementById('submitButton').style.display = 'block'
	document.getElementById('submitText').style.display = 'block'

	for (let i = 1; i < 5; i++) {
		document.getElementById(`answerButtonDefault${i}`).style.display = 'block'
	}

	document.getElementById('stepNumberEllipse1').className =
		'stepNumberEllipseCurrent'
	document.getElementById('stepNumber1').className = 'stepNumberCurrent'

	for (let i = 2; i < 11; i++) {
		document.getElementById(`stepNumberEllipse${i}`).className =
			'stepNumberEllipseUpcoming'
		document.getElementById(`stepNumber${i}`).className = 'stepNumberUpcoming'
	}

	showQuestion()
}

function showQuestion() {
	let currentQuestion = questions[currentQuestionIndex]
	let questionNo = currentQuestionIndex + 1
	document.getElementById('questionText').innerHTML = currentQuestion.question
}

function clickAnswerButton1() {
	if (answerChosen === false) {
		document.getElementById('answerButtonDefault1').className =
			'answerButtonSelected'
		document.getElementById('answerOptionText1').className =
			'answerOptionTextSelected'
		document.getElementById('submitButton').className = 'submitButtonWorking'
		answerChosen = 'true'
	}
}

function clickAnswerButton2() {
	if (answerChosen === false) {
		document.getElementById('answerButtonDefault2').className =
			'answerButtonSelected'
		document.getElementById('answerOptionText2').className =
			'answerOptionTextSelected'
		document.getElementById('submitButton').className = 'submitButtonWorking'
		answerChosen = 'true'
	}
}

function clickAnswerButton3() {
	if (answerChosen === false) {
		document.getElementById('answerButtonDefault3').className =
			'answerButtonSelected'
		document.getElementById('answerOptionText3').className =
			'answerOptionTextSelected'
		document.getElementById('submitButton').className = 'submitButtonWorking'
		answerChosen = 'true'
	}
}

function clickAnswerButton4() {
	if (answerChosen === false) {
		document.getElementById('answerButtonDefault4').className =
			'answerButtonSelected'
		document.getElementById('answerOptionText4').className =
			'answerOptionTextSelected'
		document.getElementById('submitButton').className = 'submitButtonWorking'
		answerChosen = 'true'
	}
}

function proceedToTheNextQuestion() {
	showQuestion()

	for (let i = 1; i < 5; i++) {
		document.getElementById(`answerButtonDefault${i}`).className =
			'answerButtonDefault'
		document.getElementById(`answerOptionText${i}`).className =
			'answerOptionText'
	}

	document.getElementById('submitButton').style.display = 'block'
	document.getElementById('submitText').style.display = 'block'
	document.getElementById('nextButton').style.display = 'none'
	document.getElementById('nextButtonText').style.display = 'none'

	for (let i = 0; i < currentQuestionIndex + 1; i++) {
		document.getElementById(`stepNumberEllipse${i + 1}`).className =
			'stepNumberEllipse'
		document.getElementById(`stepNumber${i + 1}`).className = 'stepNumber'
	}

	console.log(`stepNumberEllipse${currentQuestionIndex + 2}`)
	document.getElementById(
		`stepNumberEllipse${currentQuestionIndex + 2}`
	).className = 'stepNumberEllipseCurrent'
	document.getElementById(`stepNumber${currentQuestionIndex + 2}`).className =
		'stepNumberCurrent'
}

function checkAnswer() {
	for (let i = 0; i < 4; i++) {
		if (
			document.getElementById(`answerButtonDefault${i + 1}`).className ===
			'answerButtonSelected'
		) {
			if (true === questions[currentQuestionIndex].answers[i].correct) {
				score++
			}
		}
	}

	for (let i = 0; i < 4; i++) {
		if (
			document.getElementById(`answerButtonDefault${i + 1}`).className ==
				'answerButtonSelected' &&
			questions[currentQuestionIndex].answers[i].correct == false
		) {
			document.getElementById(`answerButtonDefault${i + 1}`).className =
				'answerButtonIncorrect'
			document.getElementById(`answerOptionText${i + 1}`).className =
				'answerOptionTextIncorrect'
		}

		if (questions[currentQuestionIndex].answers[i].correct == true) {
			document.getElementById(`answerButtonDefault${i + 1}`).className =
				'answerButtonCorrect'
			document.getElementById(`answerOptionText${i + 1}`).className =
				'answerOptionTextCorrect'
		}
	}

	document.getElementById('submitButton').style.display = 'none'
	document.getElementById('submitText').style.display = 'none'
	document.getElementById('nextButton').style.display = 'block'
	document.getElementById('nextButtonText').style.display = 'block'

	console.log(currentQuestionIndex)
}
