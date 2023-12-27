import puppeteer from 'puppeteer';

const createPDF = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Navigates to the project README file
    await page.goto('http://localhost:5173/');

    // Wait for the entire form to be present
    await page.waitForSelector('#patient-form');

    // Apply inline style for page break before using querySelectorAll
    await page.evaluate(() => {
      const pageBreakElements = document.querySelectorAll('.page-break');
      pageBreakElements.forEach((pageBreakElement) => {
        pageBreakElement.style.pageBreakBefore = 'always';
        pageBreakElement.style.marginTop = '30px'; // Adjust the margin-top value as needed
      });
    });

    // Generates a PDF from the page content with margins
    await page.pdf({
      path: 'patient-form.pdf',
      margin: {
        top: '15px',    // Adjust the top margin as needed
        bottom: 0,      // Adjust the bottom margin as needed
        left: '15px',   // Adjust the left margin as needed
        right: '15px',  // Adjust the right margin as needed
      },
    });

    // Console Log Success
    console.log('PDF generation successfully completed!');
    
    // Close the browser
    await browser.close();
  } catch (error) {
    // Console Log Errors along with stack trace
    console.error('Error generating PDF:', error.stack);
  }
};

// Export the createPDF function as the default export
export default createPDF;

// Call the function
createPDF();
