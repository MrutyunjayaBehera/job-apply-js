const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();
app.use(express.json());

// listen
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});


// autoLogin
const autoLogin = require('./routes/autoLogin');
const applySearchedJobs = require('./routes/applySearchedJobs');
const puppeteer = require('puppeteer');

async function launchBrowser() {
	const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
	console.log('Puppeteer browser launched');
	return browser;
}

// Handle browser operations separately
async function startAutomation() {
    try {
		const browserInstance = await launchBrowser();
		const page = await browserInstance.newPage();
		await autoLogin(page);
		await applySearchedJobs(page);
		// await browserInstance.close();
		console.log('Automation completed successfully');
    } catch (error) {
		console.error('Automation failed:', error);
	} finally {
		console.log('Browser closed');
	}
}

// Start automation after server is running
startAutomation();