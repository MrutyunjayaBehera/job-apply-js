const sampleQuestions = [
	{
		match: (text) => text.toLowerCase().includes('are you currently on a notice period If yes, how many days'),
		type: 'input',
		answer: '0'
	},
	{
		match: (text) => text.toLowerCase().includes('current ctc'),
		type: 'input',
		answer: '14'
	},
	{
		match: (text) => text.toLowerCase().includes('expected ctc'),
		type: 'input',
		answer: '20'
	},
	{
		match: (text) => text.toLowerCase().includes('notice period'),
		type: 'select',
		answer: 'Immediate Joiner'
	},
	{
		match: (text) => text.toLowerCase().includes('experience do you have'),
		type: 'input',
		answer: '3'
	},
	{
		match: (text) => text.toLowerCase().includes('open to relocate'),
		type: 'radio',
		answer: 'yesOption' // label[for="yesOption"]
	}
];

module.exports = sampleQuestions;