const questions = [
	{
		question:
			'What is the process of starting or restarting a computer called?',
		answers: [
			{ text: 'Booting', isCorrect: true },
			{ text: 'Start up point', isCorrect: false },
			{ text: 'Connecting', isCorrect: false },
			{ text: 'Resetting', isCorrect: false }
		]
	},
	{
		question: 'How many bits are in a byte?',
		answers: [
			{ text: '16 bits', isCorrect: false },
			{ text: '8 bits', isCorrect: true },
			{ text: '10 bits', isCorrect: false },
			{ text: '12 bits', isCorrect: false }
		]
	},
	{
		question: 'What was the first search engine on the Internet?',
		answers: [
			{ text: 'Google', isCorrect: false },
			{ text: 'Bing', isCorrect: false },
			{ text: 'Archie', isCorrect: true },
			{ text: 'Yahoo', isCorrect: false }
		]
	},
	{
		question: 'How many bits are used in an IPv6 address?',
		answers: [
			{ text: '16', isCorrect: false },
			{ text: '32', isCorrect: false },
			{ text: '64', isCorrect: false },
			{ text: '128', isCorrect: true }
		]
	},
	{
		question: 'What was the first web browser invented in 1990?',
		answers: [
			{ text: 'WorldWideWeb', isCorrect: true },
			{ text: 'Internet Explorer', isCorrect: false },
			{ text: 'Mosaic', isCorrect: false },
			{ text: 'Nexus', isCorrect: false }
		]
	},
	{
		question: 'Which technology is used to record cryptocurrency transactions?',
		answers: [
			{ text: 'Mining', isCorrect: false },
			{ text: 'Blockchain', isCorrect: true },
			{ text: 'Digital wallet', isCorrect: false },
			{ text: 'Token', isCorrect: false }
		]
	},
	{
		question: 'What is one of the advantages of information technology?',
		answers: [
			{ text: 'Easy to handle', isCorrect: false },
			{ text: 'Both A and B', isCorrect: false },
			{ text: 'Sreamline communication', isCorrect: true },
			{ text: 'None', isCorrect: false }
		]
	},
	{
		question: 'What was the name of the first computer virus?',
		answers: [
			{ text: 'Rabbit', isCorrect: false },
			{ text: 'Elk Cloner', isCorrect: false },
			{ text: 'SCA Virus', isCorrect: false },
			{ text: 'Creeper program', isCorrect: true }
		]
	},
	{
		question: 'What technology enables telephone calls over the Internet?',
		answers: [
			{ text: 'VoIP', isCorrect: true },
			{ text: 'Bluetooth', isCorrect: false },
			{ text: 'Ethernet', isCorrect: false },
			{ text: 'All of the Above', isCorrect: false }
		]
	},
	{
		question: 'What does CPU stand for?',
		answers: [
			{ text: 'Critical Processing Unit', isCorrect: false },
			{ text: 'Central Processing Unit', isCorrect: true },
			{ text: 'Crutioal Processing Unit', isCorrect: false },
			{ text: 'Central Printing Unit', isCorrect: false }
		]
	}
]

const stepsNumbersFrame = document.getElementById('stepsNumbersFrame')

for (let i = 1; i <= 10; i++) {
	const stepNumberEllipse = document.createElement('div')
	stepNumberEllipse.id = `stepNumberEllipse${i}`
	stepNumberEllipse.className = 'stepNumberEllipse'

	const stepNumber = document.createElement('h1')
	stepNumber.id = `stepNumber${i}`
	stepNumber.className = 'stepNumber'
	stepNumber.textContent = i

	stepNumberEllipse.appendChild(stepNumber)
	stepsNumbersFrame.appendChild(stepNumberEllipse)
}

const answersBox = document.getElementById('answersBox')

for (let i = 1; i <= 4; i++) {
	const answerButtonDefault = document.createElement('div')
	answerButtonDefault.id = `answerButtonDefault${i}`
	answerButtonDefault.className = 'answerButtonDefault'

	const answerOptionText = document.createElement('div')
	answerOptionText.id = `answerOptionText${i}`
	answerOptionText.className = 'answerOptionText'
	answerOptionText.textContent = i

	answerButtonDefault.appendChild(answerOptionText)
	answersBox.appendChild(answerButtonDefault)
}

let shuffledArray = questions.sort(() => Math.random() - 0.5)

let currentQuestionIndex = 0
let score = 0
let answerChosen = false
let currentQuestion

document.getElementById('scoreCircle').style.display = 'none'
document.getElementById('startAgainDot').style.display = 'none'

let startCircleDiv = document.getElementById('startCircleDiv')
let startCircle = document.getElementById('startCircle')
let startTheQuizText = document.getElementById('startTheQuizText')

for (let i = 1; i < 5; i++) {
	window['answerButtonDefault' + i] = document.getElementById(
		`answerButtonDefault${i}`
	)
}

for (let i = 1; i < 5; i++) {
	window['answerOptionText' + i] = document.getElementById(
		`answerOptionText${i}`
	)
}

let submitButton = document.getElementById('submitButton')
let nextButton = document.getElementById('nextButton')

let startAgainDot = document.getElementById('startAgainDot')
let startAgainText = document.getElementById('startAgainText')

startCircleDiv.addEventListener('click', () => startTheQuizFunction())
startCircle.addEventListener('click', () => startTheQuizFunction())
startTheQuizText.addEventListener('click', () => startTheQuizFunction())

for (let i = 1; i < 5; i++) {
	window['answerButtonDefault' + i].addEventListener('click', () =>
		clickAnswerButton(i)
	)
}

for (let i = 1; i < 5; i++) {
	window['answerOptionText' + i].addEventListener('click', () =>
		clickAnswerButton(i)
	)
}

submitButton.addEventListener('click', () => checkAnswer())
nextButton.addEventListener('click', () => proceedToTheNextQuestion())

startAgainDot.addEventListener('click', () => restart())
startAgainText.addEventListener('click', () => restart())

const startTheQuizFunction = () => {
	document.getElementById('startCircleDiv').style.display = 'none'
	document.getElementById('stepsFrame').style.display = 'block'
	document.getElementById('questionContainer').style.display = 'flex'
	document.getElementById('answersBox').style.display = 'grid'
	document.getElementById('questionContainer').style.display = 'flex'
	document.getElementById('submitButton').style.display = 'block'

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

const showQuestion = () => {
	if (shuffledArray[currentQuestionIndex]) {
		currentQuestion = shuffledArray[currentQuestionIndex]
		document.getElementById('questionText').innerHTML = currentQuestion.question

		for (let i = 1; i < 5; i++) {
			document.getElementById(`answerOptionText${i}`).innerHTML =
				currentQuestion.answers[i - 1].text
		}
	}
}

const clickAnswerButton = (elementNumber) => {
	for (let i = 1; i < 5; i++) {
		document.getElementById(`answerButtonDefault${i}`).className =
			'answerButtonDefault'
		document.getElementById(`answerOptionText${i}`).className =
			'answerOptionText'
	}
	document.getElementById(`answerButtonDefault${elementNumber}`).className =
		'answerButtonSelected'
	document.getElementById(`answerOptionText${elementNumber}`).className =
		'answerOptionTextSelected'
	document.getElementById('submitButton').className = 'submitButtonWorking'
	answerChosen = true
}

const proceedToTheNextQuestion = () => {
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
		document.getElementById('submitButton').className = 'submitButtonDefault'
		document.getElementById('nextButton').style.display = 'none'

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

const checkAnswer = () => {
	if (answerChosen == true) {
		for (let i = 0; i < 4; i++) {
			if (
				document.getElementById(`answerButtonDefault${i + 1}`).className ===
				'answerButtonSelected'
			) {
				if (shuffledArray[currentQuestionIndex].answers[i].isCorrect === true) {
					score++
				}
			}
		}

		for (let i = 0; i < 4; i++) {
			if (
				document.getElementById(`answerButtonDefault${i + 1}`).className ==
					'answerButtonSelected' &&
				shuffledArray[currentQuestionIndex].answers[i].isCorrect == false
			) {
				document.getElementById(`answerButtonDefault${i + 1}`).className =
					'answerButtonIncorrect'
				document.getElementById(`answerOptionText${i + 1}`).className =
					'answerOptionTextIncorrect'
			}

			if (shuffledArray[currentQuestionIndex].answers[i].isCorrect == true) {
				document.getElementById(`answerButtonDefault${i + 1}`).className =
					'answerButtonCorrect'
				document.getElementById(`answerOptionText${i + 1}`).className =
					'answerOptionTextCorrect'
			}
		}

		document.getElementById('submitButton').style.display = 'none'
		document.getElementById('nextButton').style.display = 'block'
	}
}

const restart = () => {
	location.reload()
	let shuffledArray = questions.sort(() => Math.random() - 0.5)
}
