require('dotenv').config();

const autoLogin = async (page) => {
	try {
		await page.goto(process.env.NAUKRI_LOGIN_PAGE);
		// wait for login elements to appear
		await page.type('#usernameField', process.env.NAUKRI_USERNAME);
		await page.type('#passwordField', process.env.NAUKRI_PASSWORD);
		const buttons = await page.$$('button[type=submit]');
		if (buttons.length > 0) {
			await buttons[0].click();
		} else {
			console.error('Login button not found');
		}
		await page.waitForNavigation({ waitUntil: 'networkidle0' });
	} catch (error) {
		console.error('Error in autoLogin:', error);
	}
}

module.exports = autoLogin;