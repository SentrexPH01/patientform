import express from 'express';
import puppeteer from 'puppeteer';
import cors from 'cors';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs/promises';
import sgMail from '@sendgrid/mail'
import axios from 'axios'

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

sgMail.setApiKey('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'); // Replace with your SendGrid API key


// Function to send email with only JSON data
const sendEmailWithJsonData = async (recipientEmail, jsonData) => {
  try {
    const senderEmail = 'itautomation@sentrex.com'; // Replace with your sender email

    const msg = {
      to: recipientEmail,
      from: senderEmail,
      subject: 'New Form Submission',
      text: JSON.stringify(jsonData, null, 2),
    };

    await sgMail.send(msg);

    console.log('Email with JSON data sent successfully!');
  } catch (error) {
    console.error('Error sending email with JSON data:', error);
    throw new Error('Error sending email with JSON data');
  }
};


// Function to convert a data URL to a buffer
const dataUrlToBuffer = (dataUrl) => {
  const base64 = dataUrl.split(',')[1];
  return {
    buffer: Buffer.from(base64, 'base64'),
    mimeType: dataUrl.split(';')[0].split(':')[1],
  };
};

const currentDate = new Date()
console.log(currentDate);

// Function to add an image to a specific location on the last page of a PDF
const addImageToPDF = async (pdfPath, imageDataUrl, outputPdfPath, iAm) => {
  try {
    const pdfBytes = await fs.readFile(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Get the last page of the PDF
    const lastPage = pdfDoc.getPages()[pdfDoc.getPages().length - 1];

    const { width, height } = lastPage.getSize();

    const { buffer, mimeType } = dataUrlToBuffer(imageDataUrl);
    const image = await pdfDoc.embedPng(buffer);

    // Set the desired width and height for the image
    const desiredWidth = 490;
    const desiredHeight = 130;

    // Conditionally set x and y based on the value of iAm
    let x, y;

    if (iAm === 'theHCP') {
      // Set coordinates for 'theHCP'
      x = 100; // Adjust as needed
      y = 500; // Adjust as needed
    } else {
      // Set default coordinates for other cases
      x = 55; // Adjust as needed
      y = 465; // Adjust as needed
    }

    console.log(`iAm: ${iAm}, x: ${x}, y: ${y}`); // Debugging statement

    lastPage.drawImage(image, { x, y, width: desiredWidth, height: desiredHeight });

    const modifiedPdfBytes = await pdfDoc.save();
    await fs.writeFile(outputPdfPath, modifiedPdfBytes);
  } catch (error) {
    console.error('Error in addImageToPDF:', error);
  }
};

app.post('/generate-pdf', async (req, res) => {
  try {
    // Extract input data from the request body
    const { 
          firstName,
          lastName,
          healthCardNumber,
          bestTimeToCall,
          leaveAVoiceMail,
          address,
          address2,
          city,
          province,
          postalCode,
          email,
          doctor,
          medication,
          privateInsurance,
          insurerGroupContractPlan,
          insurerCertificate,
          iAm,
          dateOfBirth,
          phoneNumber,
          acknowledgedcheckbox,
          dateOfSignature,
          signatureDataUrl

    } = req.body;


    // Call the function to send an email with JSON data to paulh@sentrex.com
    await sendEmailWithJsonData('paulh@sentrex.com', {
      firstName,
      lastName,
      healthCardNumber,
      bestTimeToCall,
      leaveAVoiceMail,
      address,
      address2,
      city,
      province,
      postalCode,
      email,
      doctor,
      medication,
      privateInsurance,
      insurerGroupContractPlan,
      insurerCertificate,
      iAm,
      dateOfBirth,
      phoneNumber,
      acknowledgedcheckbox,
      dateOfSignature,
      currentDate,
    });

    console.log('Received data on server:', { 

          firstName,
          lastName,
          healthCardNumber,
          dateOfBirth,
          phoneNumber,
          bestTimeToCall,
          leaveAVoiceMail,
          address,
          address2,
          city,
          province,
          postalCode,
          email,
          doctor,
          medication,
          privateInsurance,
          insurerGroupContractPlan,
          insurerCertificate,
          iAm,
          acknowledgedcheckbox,
          dateOfSignature,
          signatureDataUrl,
          currentDate,
    
    });


    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Navigates to the project README file
    await page.goto('http://localhost:5173/');

    
     // Wait for form
    await page.waitForSelector('.patient-form');
    await page.waitForSelector('#acknowledgedcheckbox');

  
   

    // Apply inline style for page break before using querySelectorAll
    await page.evaluate(() => {
        const pageBreakElements = document.querySelectorAll('.page-break');
        pageBreakElements.forEach((pageBreakElement) => {
        pageBreakElement.style.pageBreakBefore = 'always';
        pageBreakElement.style.marginTop = '25px'; // Adjust the margin-top value as needed
      });
    });




    await page.type('#firstName', firstName);
    await page.type('#lastName', lastName);
    await page.type('#healthCardNumber', healthCardNumber);
    await page.type('#phoneNumber', phoneNumber);
    await page.type('#address', address)
    await page.type('#address2', address2)
    await page.type('#city', city)
    await page.type('#province', province)
    await page.type('#postalCode', postalCode)
    await page.type('#email', email)
    await page.type('#privateInsurance', privateInsurance)
    await page.type('#insurerGroupContractPlan', insurerGroupContractPlan)
    await page.type('#insurerCertificate', insurerCertificate)
   
 

    for (const value of bestTimeToCall) {
      const checkbox = await page.waitForXPath(`//input[@id='${value}']`);
      await checkbox.click();
    }



    let radioButton = await page.waitForXPath(`//input[@id='${leaveAVoiceMail}']`)
    await radioButton.click();

    let doctorRadioButton = await page.waitForXPath(`//input[@id='${doctor}']`)
    await doctorRadioButton.click();

    let medicationRadioButton = await page.waitForXPath(`//input[@id='${medication}']`)
    await medicationRadioButton.click();

    // for (const value of leaveAVoiceMail) {
    //   const radio = await page.waitForXPath(`//input[@id='${value}']`);
    //   await radio.click();
    // }

    await page.click("#leaveAVoiceMail", {clickCount: 1});


    // Clicks the Acknowledged Checkbox
    await page.click('#acknowledgedcheckbox', {clickCount: 1});
    await page.select('#iAm', iAm)


  

    // Wait for 5 seconds
    await page.waitForTimeout(500);

  // Generates a PDF from the page content with margins
  const pdfPath = 'patient-form-test.pdf';
  await page.pdf({
    path: pdfPath,
    format: 'letter',
    margin: {
      top: '15px',
      bottom: 0,
      left: '15px',
      right: '15px',
    },
  });

    

   // Add an image (signature) to the bottom of the generated PDF
   const imageDataUrl = req.body.signatureDataUrl;
   const outputPdfPath = 'patient-form-final.pdf';
   await addImageToPDF(pdfPath, imageDataUrl, outputPdfPath);

   // Cleanup: Delete the original PDF without the image
   await fs.unlink(pdfPath)

   // Send email with the generated PDF as an attachment
   const pdfBytes = await fs.readFile(outputPdfPath);
   await sendEmailWithAttachment(req.body.email, pdfBytes);

   await browser.close();



   res.json({ success: true, pdfPath: outputPdfPath });
   console.log('PDF generated and emailed successfully!');
 } catch (error) {
   console.error('Error generating PDF:', error);
   res.status(500).json({ success: false, error: error.message });
 }
});


// Function to send email with attachment using SendGrid
const sendEmailWithAttachment = async (recipientEmail, attachmentBytes) => {
  try {
    const senderEmail = 'itautomation@sentrex.com'; // Replace with your sender email

    const msg = {
      to: '87hendricks@gmail.com',
      from: senderEmail,
      subject: 'VHC Form',
      text: 'Please see the attachment',
      attachments: [
        {
          content: attachmentBytes.toString('base64'),
          filename: 'patient-form.pdf',
          type: 'application/pdf',
          disposition: 'attachment',
        },
      ],
    };

    await sgMail.send(msg);

    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
};


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
