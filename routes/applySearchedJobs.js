require('dotenv').config();

const applySearchedJobs = async (page) => {
	try {
		await page.goto(process.env.NAUKRI_SEARCHED_JOBS_PAGE);
	} catch (error) {
		console.error('Error in applySearchedJobs:', error);
		// res.status(500).json({ message: 'Internal server error' });
	}
}

module.exports = applySearchedJobs;