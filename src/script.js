const questions = [
	{
		question:
			'What is the process of starting or restarting a computer called?',
		answers: [
			{ text: 'Booting', correct: true },
			{ text: 'Start up point', correct: false },
			{ text: 'Connecting', correct: false },
			{ text: 'Resetting', correct: false }
		]
	},
	{
		question: 'How many bits are in a byte?',
		answers: [
			{ text: '16 bits', correct: false },
			{ text: '8 bits', correct: true },
			{ text: '10 bits', correct: false },
			{ text: '12 bits', correct: false }
		]
	},
	{
		question: 'What was the first search engine on the Internet?',
		answers: [
			{ text: 'Google', correct: false },
			{ text: 'Bing', correct: false },
			{ text: 'Archie', correct: true },
			{ text: 'Yahoo', correct: false }
		]
	},
	{
		question: 'How many bits are used in an IPv6 address?',
		answers: [
			{ text: '16', correct: false },
			{ text: '32', correct: false },
			{ text: '64', correct: false },
			{ text: '128', correct: true }
		]
	},
	{
		question: 'What was the first web browser invented in 1990?',
		answers: [
			{ text: 'WorldWideWeb', correct: true },
			{ text: 'Internet Explorer', correct: false },
			{ text: 'Mosaic', correct: false },
			{ text: 'Nexus', correct: false }
		]
	},
	{
		question: 'Which technology is used to record cryptocurrency transactions?',
		answers: [
			{ text: 'Mining', correct: false },
			{ text: 'Blockchain', correct: true },
			{ text: 'Digital wallet', correct: false },
			{ text: 'Token', correct: false }
		]
	},
	{
		question: 'What is one of the advantages of information technology?',
		answers: [
			{ text: 'Easy to handle', correct: false },
			{ text: 'Both A and B', correct: false },
			{ text: 'Sreamline communication', correct: true },
			{ text: 'None', correct: false }
		]
	},
	{
		question: 'What was the name of the first computer virus?',
		answers: [
			{ text: 'Rabbit', correct: false },
			{ text: 'Elk Cloner', correct: false },
			{ text: 'SCA Virus', correct: false },
			{ text: 'Creeper program', correct: true }
		]
	},
	{
		question: 'What technology enables telephone calls over the Internet?',
		answers: [
			{ text: 'VoIP', correct: true },
			{ text: 'Bluetooth', correct: false },
			{ text: 'Ethernet', correct: false },
			{ text: 'All of the Above', correct: false }
		]
	},
	{
		question: 'What does CPU stand for?',
		answers: [
			{ text: 'Critical Processing Unit', correct: false },
			{ text: 'Central Processing Unit', correct: true },
			{ text: 'Crutioal Processing Unit', correct: false },
			{ text: 'Central Printing Unit', correct: false }
		]
	}
]

let shuffledArray = questions.sort(() => Math.random() - 0.5)

let currentQuestionIndex = 0
let score = 0
let answerChosen = false
let currentQuestion

document.getElementById('scoreCircle').style.display = 'none'
document.getElementById('startAgainDot').style.display = 'none'

let answerButtonDefault1 = document.getElementById('answerButtonDefault1')
let answerButtonDefault2 = document.getElementById('answerButtonDefault2')
let answerButtonDefault3 = document.getElementById('answerButtonDefault3')
let answerButtonDefault4 = document.getElementById('answerButtonDefault4')
let answerOptionText1 = document.getElementById('answerOptionText1')
let answerOptionText2 = document.getElementById('answerOptionText2')
let answerOptionText3 = document.getElementById('answerOptionText3')
let answerOptionText4 = document.getElementById('answerOptionText4')
let submitButton = document.getElementById('submitButton')
let submitText = document.getElementById('submitText')
let nextButton = document.getElementById('nextButton')
let nextButtonText = document.getElementById('nextButtonText')

answerButtonDefault1.addEventListener('click', () => clickAnswerButton1())
answerButtonDefault2.addEventListener('click', () => clickAnswerButton2())
answerButtonDefault3.addEventListener('click', () => clickAnswerButton3())
answerButtonDefault4.addEventListener('click', () => clickAnswerButton4())
answerOptionText1.addEventListener('click', () => clickAnswerButton1())
answerOptionText2.addEventListener('click', () => clickAnswerButton2())
answerOptionText3.addEventListener('click', () => clickAnswerButton3())
answerOptionText4.addEventListener('click', () => clickAnswerButton4())
submitButton.addEventListener('click', () => checkAnswer())
submitText.addEventListener('click', () => checkAnswer())
nextButton.addEventListener('click', () => proceedToTheNextQuestion())
nextButtonText.addEventListener('click', () => proceedToTheNextQuestion())

function startTheQuizFunction() {
	document.getElementById('startCircleDiv').style.display = 'none'
	document.getElementById('stepsFrame').style.display = 'block'
	document.getElementById('questionContainer').style.display = 'flex'
	document.getElementById('answersBox').style.display = 'grid'
	document.getElementById('questionContainer').style.display = 'flex'
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
	if (shuffledArray[currentQuestionIndex]) {
		currentQuestion = shuffledArray[currentQuestionIndex]
		document.getElementById('questionText').innerHTML = currentQuestion.question

		for (let i = 1; i < 5; i++) {
			document.getElementById(`answerOptionText${i}`).innerHTML =
				currentQuestion.answers[i - 1].text
		}
	}
}

function clickAnswerButton1() {
	for (let i = 1; i < 5; i++) {
		document.getElementById(`answerButtonDefault${i}`).className =
			'answerButtonDefault'
		document.getElementById(`answerOptionText${i}`).className =
			'answerOptionText'
	}
	document.getElementById('answerButtonDefault1').className =
		'answerButtonSelected'
	document.getElementById('answerOptionText1').className =
		'answerOptionTextSelected'
	document.getElementById('submitButton').className = 'submitButtonWorking'
	answerChosen = true
}

function clickAnswerButton2() {
	for (let i = 1; i < 5; i++) {
		document.getElementById(`answerButtonDefault${i}`).className =
			'answerButtonDefault'
		document.getElementById(`answerOptionText${i}`).className =
			'answerOptionText'
	}
	document.getElementById('answerButtonDefault2').className =
		'answerButtonSelected'
	document.getElementById('answerOptionText2').className =
		'answerOptionTextSelected'
	document.getElementById('submitButton').className = 'submitButtonWorking'
	answerChosen = true
}

function clickAnswerButton3() {
	for (let i = 1; i < 5; i++) {
		document.getElementById(`answerButtonDefault${i}`).className =
			'answerButtonDefault'
		document.getElementById(`answerOptionText${i}`).className =
			'answerOptionText'
	}
	document.getElementById('answerButtonDefault3').className =
		'answerButtonSelected'
	document.getElementById('answerOptionText3').className =
		'answerOptionTextSelected'
	document.getElementById('submitButton').className = 'submitButtonWorking'
	answerChosen = true
}

function clickAnswerButton4() {
	for (let i = 1; i < 5; i++) {
		document.getElementById(`answerButtonDefault${i}`).className =
			'answerButtonDefault'
		document.getElementById(`answerOptionText${i}`).className =
			'answerOptionText'
	}
	document.getElementById('answerButtonDefault4').className =
		'answerButtonSelected'
	document.getElementById('answerOptionText4').className =
		'answerOptionTextSelected'
	document.getElementById('submitButton').className = 'submitButtonWorking'
	answerChosen = true
}

function proceedToTheNextQuestion() {
	answerChosen = false
	currentQuestionIndex++
	showQuestion()

	if (currentQuestionIndex === 10) {
		document.getElementById('answersBox').style.display = 'none'
		document.getElementById('stepsFrame').style.display = 'none'
		document.getElementById('additionalContainer').style.display = 'none'
		document.getElementById('stepsLine').style.display = 'none'
		document.getElementById('stepsNumbersFrame').style.display = 'none'
		document.getElementById('questionContainer').style.display = 'none'
		document.getElementById('questionBox').style.display = 'none'
		document.getElementById('questionText').style.display = 'none'
		document.getElementById('nextButton').style.display = 'none'
		document.getElementById('nextButtonText').style.display = 'none'

		for (let i = 1; i < 5; i++) {
			document.getElementById(`answerButtonDefault${i}`).style.display = 'none'
			document.getElementById(`answerOptionText${i}`).style.display = 'none'
		}

		for (let i = 1; i < 11; i++) {
			document.getElementById(`stepNumberEllipse${i}`).style.display = 'none'
			document.getElementById(`stepNumber${i}`).style.display = 'none'
		}

		document.getElementById('scoreText').style.display = 'block'
		document.getElementById('scoreCircle').style.display = 'block'
		document.getElementById('startAgainDot').style.display = 'flex'
		document.getElementById('startAgainText').style.display = 'block'

		document.getElementById('scoreText').innerHTML = `Your score is ${score}!`
	} else {
		for (let i = 1; i < 5; i++) {
			document.getElementById(`answerButtonDefault${i}`).className =
				'answerButtonDefault'
			document.getElementById(`answerOptionText${i}`).className =
				'answerOptionText'
		}

		document.getElementById('submitButton').style.display = 'block'
		document.getElementById('submitText').style.display = 'block'
		document.getElementById('submitButton').className = 'submitButtonDefault'
		document.getElementById('nextButton').style.display = 'none'
		document.getElementById('nextButtonText').style.display = 'none'

		for (let i = 0; i < currentQuestionIndex + 1; i++) {
			document.getElementById(`stepNumberEllipse${i + 1}`).className =
				'stepNumberEllipse'
			document.getElementById(`stepNumber${i + 1}`).className = 'stepNumber'
		}

		document.getElementById(
			`stepNumberEllipse${currentQuestionIndex + 1}`
		).className = 'stepNumberEllipseCurrent'
		document.getElementById(`stepNumber${currentQuestionIndex + 1}`).className =
			'stepNumberCurrent'
	}
}

function checkAnswer() {
	if (answerChosen == true) {
		for (let i = 0; i < 4; i++) {
			if (
				document.getElementById(`answerButtonDefault${i + 1}`).className ===
				'answerButtonSelected'
			) {
				if (shuffledArray[currentQuestionIndex].answers[i].correct === true) {
					score++
				}
			}
		}

		for (let i = 0; i < 4; i++) {
			if (
				document.getElementById(`answerButtonDefault${i + 1}`).className ==
					'answerButtonSelected' &&
				shuffledArray[currentQuestionIndex].answers[i].correct == false
			) {
				document.getElementById(`answerButtonDefault${i + 1}`).className =
					'answerButtonIncorrect'
				document.getElementById(`answerOptionText${i + 1}`).className =
					'answerOptionTextIncorrect'
			}

			if (shuffledArray[currentQuestionIndex].answers[i].correct == true) {
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
	}
}

function restart() {
	location.reload()
	let shuffledArray = questions.sort(() => Math.random() - 0.5)
}
