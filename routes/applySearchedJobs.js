require('dotenv').config();
const { exec } = require('child_process');
const sampleQuestions = require('../utils/sampleQuestions');
const { title } = require('process');

const applySearchedJobs = async (page) => {
	try {
		await page.goto(process.env.NAUKRI_SEARCHED_JOBS_PAGE, {
			waitUntil: 'networkidle0',
			timeout: 0,
		});

		// Array to hold all the scrapped jobs
		let allScrappedJobs = [];

		// // Loop for two pages (0-based index, so it will scrape pages 1 and 2)
		// for (let i = 0; i < 2; i++) {
		// 	const url = `${process.env.NAUKRI_SEARCHED_JOBS_PAGE}?page=${i + 1}`;
		// 	await page.goto(url, {
		// 		waitUntil: 'networkidle0',
		// 		timeout: 0,
		// 	});

		// 	// Scraping the job details from the page
		// 	const pageJobs = await page.$$eval('.cust-job-tuple', (jobCards) => {
		// 		return jobCards.map((jobCard) => {
		// 			// Ensure you use the correct selectors based on the actual HTML structure
		// 			const title = jobCard.querySelector('.title') ? jobCard.querySelector('.title').innerText : '';
		// 			const company = jobCard.querySelector('.comp-name') ? jobCard.querySelector('.comp-name').innerText : '';
		// 			const location = jobCard.querySelector('.loc-wrap .locWdth') ? jobCard.querySelector('.loc-wrap .locWdth').innerText : '';
		// 			const link = jobCard.querySelector('a') ? jobCard.querySelector('a').href : '';

		// 			return { title, company, location, link };
		// 		});
		// 	});

		// 	allScrappedJobs = [...allScrappedJobs, ...pageJobs];
		// }

		// let jobApplicationStats = (allScrappedJobs || []).map((job) => {
		// 	return {
		// 		title: job.title,
		// 		company: job.company,
		// 		location: job.location,
		// 		applied: false,
		// 	};
		// });

		const dummmyData = [
			{
				title: 'Software Engineer',
				company: 'Tech Company',
				location: 'Remote',
				link: 'https://www.naukri.com/job-listings-full-stack-software-engineer-contour-education-bengaluru-2-to-4-years-150425022086?src=jobsearchDesk&sid=17454153285111587&xp=1&px=1&nignbevent_src=jobsearchDeskGNB'
			}
		]

		for (const job of dummmyData) {
			try {
				await page.goto(job?.link, {
					waitUntil: 'networkidle0',
					timeout: 0,
				});
				await page.waitForSelector('.apply-button', { timeout: 5000 });
				await page.click('.apply-button');
				console.log(`Clicked apply button on job: ${job.title} at ${job.company}`);
				// wait for modal to appear
				try {
					await page.waitForSelector('.chatbot_DrawerContentWrapper', { timeout: 3000 });
					console.log('🧾 Modal form opened, awaiting manual input...');

					let modalStillOpen = true;
					while (modalStillOpen) {
						try {
							await page.waitForSelector('.chatbot_DrawerContentWrapper', { timeout: 3000 });
							// fill he form
							const questions = await page.$$eval('li.botItem.chatbot_ListItem', (nodes) => {
								return nodes.map((node) => {
									const span = node.querySelector('div.botMsg > div > span');
									return span?.innerText.trim();
								}).filter(Boolean); // Remove null/undefined
							});
							const latestQuestion = questions[questions.length - 1];
							const matchedQuestion = sampleQuestions.find((q) => q.match(latestQuestion));

							console.log({ matchedQuestion });
							if (matchedQuestion) {
								if (matchedQuestion.type === 'input') {
									await page.type('.chatbot_InputContainer', matchedQuestion.answer);
								} else if (matchedQuestion.type === 'select') {
									await page.select('.chatbot_SelectContainer', matchedQuestion.answer);
								} else if (matchedQuestion.type === 'radio') {
									await page.click(`label[for="${matchedQuestion.answer}"]`);
								}
								console.log(`Filled answer for question: ${latestQuestion}`);
							} else {
								console.log(`No matching question found for: ${latestQuestion}`);
							}
							console.log('⌛ Waiting for user to close the modal...');
						} catch (error) {
							console.error('Error in waiting for modal:', error);
							modalStillOpen = false;
						}
						await new Promise((resolve) => setTimeout(resolve, 3000));
					}
					console.log(`✅ Modal closed, likely applied to ${job.title} at ${job.company}`);
				} catch (error) {
					console.error('Error in waiting for modal:', error);
				}
			} catch (error) {
				console.error('Error in clicking apply button:', error);
			}
		}

		// Returning all scraped jobs
		return allScrappedJobs;

	} catch (error) {
		console.error('Error in applySearchedJobs:', error);
	}
};

module.exports = applySearchedJobs;
