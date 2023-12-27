// src/App.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import SignatureCanvas from "react-signature-canvas";
import textTermsAndConditions from "./TextContent";
// import axios from "axios";
import { useState } from "react";
import logo from '/vch-logo.svg'
import sentrexLogo from '/Logo_Sentrex.png'







const Asterisk = () => (
  <span
    className="text-red-500 inline-block"
    style={{ verticalAlign: 'top', marginRight: '0.2em' }}
  >
    *
  </span>
)

const Optional = () => (
  <span
    className="font-normal text-sm text-slate-700"
  >
    (Optional)
  </span>

)


// const yourClientId = import.meta.env.VITE_AZURE_CLIENT_ID;
// const yourClientSecret = import.meta.env.VITE_AZURE_CLIENT_SECRET;
// const yourRedirectUri = import.meta.env.VITE_AZURE_REDIRECT_URL;
// const yourSharePointSiteUrl = import.meta.env.VITE_SHAREPOINT_SITE_URL;
// const yourListName = import.meta.env.VITE_SHAREPOINT_LIST_NAME;
// const yourAccessToken = import.meta.env.VITE_ACCESS_TOKEN;



const validationSchema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"), 
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  postalCode: Yup.string().required("Postal Code is required"),
  province: Yup.string().required("Province is required"),
  publicHealthCardNumber: Yup.string().required("Public Health Card Number is required"),
  consentAcknowledge: Yup.array().required("Consent acknowledge is required"),
  // signature: Yup.string().required("Signature is required"),
});

const initialValues = {
  address: "",
  city: "",
  dateOfBirth: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  postalCode:"",
  province: "",
  publicHealthCardNumber: "",
  signature: "",
  consentAcknowledge: "",
};



const onSubmit = async (values, { setSubmitting }) => {
  try {

    
//     // // Make HTTP POST request to SharePoint API
//     // const response = await axios.post(
//     //   `${yourSharePointSiteUrl}/_api/web/lists/getbytitle('${yourListName}')/items`,
//     //   {
//     //     // Map form values to SharePoint list columns
//     //     Title: values.firstName,
//     //     Address: values.address,
//     //     SignatureData: values.signatureData, // Adjust this based on your SharePoint column name
//     //     // Map other fields accordingly
//     //   },
//     //   {
//     //     headers: {
//     //       'Accept': 'application/json;odata=verbose',
//     //       'Content-Type': 'application/json;odata=verbose',
//     //       'Authorization': `Bearer ${yourAccessToken}`,
//     //       // Include Azure AD app details
//     //       'client_id': yourClientId,
//     //       'client_secret': yourClientSecret,
//     //       'redirect_uri': yourRedirectUri,
//     //     },
//     //   }
//     // );

//   //   // Generate PDF Code
//   // const formElement = document.documentElement; // Make sure to set an ID on your form
//   // const pdfOptions = {
//   //   margin: 10,
//   //   filename: 'consent_form.pdf',
//   //   image: { type: 'jpeg', quality: 0.98 },
//   //   html2canvas: { scale: 2 },
//   //   jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
//   // };

//   // await html2pdf().from(formElement).set(pdfOptions).save();
//   // // If needed, you can log the generated PDF blob or URL
//   // console.log('PDF generated successfully');

//   //   console.log('SharePoint API Response:', response.data);
//   // } catch (error) {
//   //   console.error('Error submitting to SharePoint:', error);
//   // } finally {
//   //   setSubmitting(false);
await NewFormTitle();
  // }
} catch (error) {
  console.error('Error generating PDF:', error);
} finally {
  setSubmitting(false);

}
};

function App() {


  const [showHide, setShowHide] = useState('');

  const handleShowHide = (event) => {
    const getIam = event.target.value;
    setShowHide(getIam);
  }

  const signaturePad = React.useRef();

  return (
    <div className="flex justify-center bg-gray-100 ">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form id="patient-form"
      className="w-full max-w-5xl bg-white p-12 rounded-md shadow-md">
        
        <div className="flex justify-between">
        <img className="h-10 w-35"src={logo} alt='logo' /><img className="h-10 w-35" src={sentrexLogo} alt='logo' />
        </div>
        <h1 className="text-2xl font-bold pt-2 pb-10 text-center">VCH Patient Consent Form</h1>
        

        {/* First Name and Last Name in a flex container */}
        <div className="flex pb-4">
          <div className="w-1/2 pr-2">
            <label htmlFor="firstName" className="block text-sm font-bold pb-2">
              <Asterisk />First Name:
            </label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm"
              
            />
            <ErrorMessage name="firstName" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          <div className="w-1/2 pl-2">
            <label htmlFor="lastName" className="block text-sm font-bold mb-2">
            <Asterisk />Last Name:
            </label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm"
            />
            <ErrorMessage name="lastName" component="p" className="text-red-500 text-xs mt-1" />
          </div>
        </div>


         {/* Public Health Card Number */}
         <div className="mb-4">
            <label htmlFor="publicHealthCardNumber" className="block text-sm font-bold mb-2">
            <Asterisk />Care Card Number:
            </label>
            <Field
              type="text"
              id="publicHealthCardNumber"
              name="publicHealthCardNumber"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm"
            />
            <ErrorMessage
              name="publicHealthCardNumber"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-sm font-bold mb-2">
            <Asterisk />Date of Birth:
            </label>
            <Field
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm"
            />
            <ErrorMessage name="dateOfBirth" component="p" className="text-red-500 text-xs mt-1" />
          </div>

         {/* Phone Number */}
         <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-bold mb-2">
            <Asterisk />Phone Number:
            </label>
            <Field
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm"
            />
            <ErrorMessage name="phoneNumber" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Best Time to Call */}
          <div className="mb-4">
            <p className="text-sm font-bold mb-2">Best Time to Call: </p>
            <div className="flex">
              {[
                { label: 'Morning', value: 'morning' },
                { label: 'Noon', value: 'noon' },
                { label: 'Evening', value: 'evening' },
              ].map(({ label, value }) => (
                <label key={value} className="mr-4">
                  <Field
                    type="checkbox"
                    name="bestTimeToCall"
                    value={value}
                    className="mr-2"
                  />
                  {label}
                </label>
              ))}
            </div>
            <ErrorMessage name="bestTimeToCall" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Can Leave a VoiceMail */}
          <div className="mb-4">
            <p className="text-sm font-bold mb-2">Can leave a voice mail:</p>
            <div className="flex">
              {[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ].map(({ label, value }) => (
                <label key={value} className="mr-4">
                  <Field
                    type="radio"
                    name="canLeaveVoiceMail"
                    value={value}
                    className="mr-2"
                  />
                  {label}
                </label>
              ))}
            </div>
            <ErrorMessage name="bestTimeToCall" component="p" className="text-red-500 text-xs mt-1" />
          </div>


          {/* Address Section */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-bold mb-2">
            <Asterisk />Address:
            </label>
            <Field
              type="text"
              id="address"
              name="address"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              
            />
            <ErrorMessage name="address" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-bold mb-2">
              <Asterisk />City:
              </label>
              <Field
                type="text"
                id="city"
                name="city"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                
              />
              <ErrorMessage name="city" component="p" className="text-red-500 text-xs mt-1" />
            </div>

          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label htmlFor="postalCode" className="block text-sm font-bold mb-2">
              <Asterisk />Postal Code:
              </label>
              <Field
                type="text"
                id="postalCode"
                name="postalCode"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                
              />
              <ErrorMessage name="postalCode" component="p" className="text-red-500 text-xs mt-1" />
            </div>

            <div className="w-1/2 ml-2">
              <label htmlFor="province" className="block text-sm font-bold mb-2">
              <Asterisk />Province:
              </label>
              <Field
                type="text"
                id="province"
                name="province"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                
              />
              <ErrorMessage name="province" component="p" className="text-red-500 text-xs mt-1" />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email: <Optional />
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Physician Field*/}
          <div className="mb-4 page-break">
            <label htmlFor="physician" className="block text-sm font-bold pb-2">
              Physician Name:
            </label>
            <div className="flex flex-col text-sm">
              {[
                { label: 'Dr. Virginia Devonshire (ID# 13005)', value: 'Dr. Virginia Devonshire (ID# 13005)' },
                { label: 'Dr. Anthony Traboulsee (ID# 18049)', value: 'Dr. Anthony Traboulsee (ID# 18049)' },
                { label: 'Dr. Ana-luiza Sayao (ID# 24217)', value: 'Dr. Ana-luiza Sayao (ID# 24217)' },
                { label: 'Dr. Robert Carruthers (ID# 39947)', value: 'Dr. Robert Carruthers (ID# 39947)' },
                { label: 'Dr. Alice Schabas (ID# 32711)', value: 'Dr. Alice Schabas (ID# 32711)' },
              ].map(({ label, value }) => (
                <label key={value} className="inline-flex items-center mb-2">
                  <Field
                    type="radio"
                    id={value}
                    name="physicians"
                    value={value}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">{label}</span>
                </label>
              ))}
            </div>
            <ErrorMessage name="physicians" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          

          {/* If Yes Select */}
          <div className="mb-4">
            <p className="text-sm font-bold mb-2">If you are on therapy for Multiple Sclerosis (MS) or Neuromyelitis Optica (NMO) please select which medication you are taking:  </p>
            <div className="flex flex-col">
              {[
                { label: 'Aubagio (Teriflunimide)', value: 'Aubagio (Teriflunimide)' },
                { label: 'Enspryng (Satralizumab)', value: 'Enspryng (Satralizumab)' },
                { label: 'Gilenya (Fingolimod)', value: 'Gilenya (Fingolimod)' },
                { label: 'Kesimpta (Ofatumumab)', value: 'Kesimpta (Ofatumumab)' },
                { label: 'Lemtrada (Alemtuzumab)', value: 'Lemtrada (Alemtuzumab)' },
                { label: 'Mavenclad (Cladribine)', value: 'Mavenclad (Cladribine)' },
                { label: 'Ocrevus (Ocrelizumab)', value: 'Ocrevus (Ocrelizumab)' },
                { label: 'Riximyo/Ruxience (Rituximab)', value: 'Riximyo/Ruxience (Rituximab)' },
                { label: 'Tecfidera (Dimethyl Fumarate)', value: 'Tecfidera (Dimethyl Fumarate)' },
                { label: 'Tysabri (Natalizumab)', value: 'Tysabri (Natalizumab)' },
                { label: 'I am not on therapy for MS/NMO', value: 'I am not on therapy for MS/NMO' },
              ].map(({ label, value }) => (
                <label key={value} className="inline-flex items-center mb-2">
                  <Field
                    type="radio"
                    name="typeOfTherapiesCheckbox"
                    value={value}
                    className="mr-2"
                  />
                  {label}
                </label>
              ))}
              {/* Add "Other" checkbox and text input */}
              <label className="mr-4 mb-2">
                <Field
                  type="radio"
                  name="otherTherapyRadio"
                  value="otherTherapyRadio"
                  className="mr-2"
                />
                Other
                {/* Conditional rendering of the text input based on the "Other" checkbox */}
                <Field
                  type="text"
                  name="otherTherapy"
                  className="ml-2 pl-2 border rounded-md"
                  placeholder=""
                />
                
              </label>

            </div>
            <ErrorMessage name="typeOfTherapies" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Primary Insurance Provider */}
            <div className="mb-4">
              <label htmlFor="primaryInsuranceProvider" className="block text-sm font-bold mb-2">
               Name of Private Insurance Provider: <Optional />
              </label>
              <Field
                type="text"
                id="primaryInsuranceProvider"
                name="primaryInsuranceProvider"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="primaryInsuranceProvider" component="p" className="text-red-500 text-xs mt-1" />
            </div>

            {/* Insurer Contract # */}
            <div className="mb-4 ">
              <label htmlFor="insurerContract" className="block text-sm font-bold mb-2">
                Insurer Group/Contract/Plan #: <Optional />
              </label>
              <Field
                type="text"
                id="insurerContract"
                name="insurerContract"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="insurerContract" component="p" className="text-red-500 text-xs mt-1" />
            </div>

            {/* Insurer Certificate # */}
            <div className="mb-4">
              <label htmlFor="insurerCertificate" className="block text-sm font-bold mb-2">
                Insurer Certificate #: <Optional />
              </label>
              <Field
                type="text"
                id="insurerCertificate"
                name="insurerCertificate"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name="insurerCertificate" component="p" className="text-red-500 text-xs mt-1" />
            </div>





            {/* Patient Consent Text */}
              <div className="mb-4 page-break">
              <label className="mb-2 font-bold">PATIENT CONSENT TO ENROL IN AND RECEIVE SERVICES FROM SENTREX</label>
                <p className="text-sm mb-4 whitespace-pre-line">
                {textTermsAndConditions}
                </p>
              
                <label className="mb-2">
                <Field
                  type="checkbox"
                  name="consentAcknowledge"
                  value="consentAcknowledge"
                  className="mr-2"
                  
                />
                <Asterisk />I acknowledge, understand, and agree to the above. 
                <ErrorMessage name="consentAcknowledge" component="p" className="text-red-500 text-xs mt-1" />
              </label>
              
              </div>


              {/* I AM Patien Consent */}
              <div className="mb-4 ">
  <h3 className="mb-4 font-bold ">PATIENT CONSENT </h3>
  <div className="flex">
    <label className="text-sm font-bold mb-2 mr-2">I am:</label>
    <div className="flex flex-col">
      {[
        { label: 'The patient', value: 'thePatient' },
        { label: 'The patient’s Substitute Decision Maker (SDM)', value: 'theSDM' },
        { label: 'An HCP obtaining verbal consent on behalf of the patient', value: 'theHCP' },
      ].map(({ label, value }) => (
        <label key={value} className="mr-4">
          <Field
            type="radio"
            id={value}
            name="thePatientConsent"
            value={value}
            className=" text-blue-600"
            onClick={(e) => handleShowHide(e)}
            
            
          />
          <span className="ml-2">{label}</span>
        </label>
      ))}
    </div>
    <ErrorMessage name="thePatientConsent" component="p" className="text-red-500 text-xs mt-1" />
  </div>
</div>

          {/* </div> */}


           {/* IF I AM PATIENT is SELECTED */}
          {
            showHide === 'thePatient' && (
              <div className="mb-4">
              <p className="mb-4 text-sm">I have read this consent form and/or it has been read to me. I give consent for Sentrex to dispense my medication(s) and/or transfer my prescription to Sentrex Pharmacy and enroll in systems supported by the Sentrex Pharmacy.  I authorize the use and disclosure of my Information as outlined in this form.</p>
                <label htmlFor="signature" className="block text-sm font-bold mb-2">
                 Signature of Patient:
                </label>
                <div className="border border-gray-300 rounded-md p-4">
                  <SignatureCanvas
                    ref={signaturePad}
                    penColor="black"
                    canvasProps={{
                      className: 'w-full h-20',
                    }}
                  />
                </div>
                <ErrorMessage name="signature" component="p" className="text-red-500 text-xs mt-1" />
                <div className="flex space-x-4 mb-4 mt-2">
        <button
          type="button"
          onClick={() => {
            const signatureData = signaturePad.current.toDataURL();
            console.log('Signature Data:', signatureData);
          }}
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Save Signature
        </button>

        
      </div>
                <div className="mb-8 mt-3 flex items-end">
            <label htmlFor="patientSignatureDate" className="block text-sm font-bold mr-2">
              Date:
            </label>
            <div className="relative">
              <Field
                type="date"
                id="iAmPatientDate"
                name="iAmPatientDate"
                className="mt-2 px-3 py-1 border-none focus:outline-none"
              />
              <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-500" />
            </div>

            <ErrorMessage name="iAmPatientDate" component="p" className="text-red-500 text-xs mt-1" />
          </div>
              </div>
              
            )
          }

          
           {/* IF I AM SDM is SELECTED */}
           {
            showHide === 'theSDM' && (
            
              <div className="mb-4">
              <p className="mb-4 text-sm">I have read this consent form and/or it has been read to me. I give consent for Sentrex to dispense my medication(s) and/or transfer my prescription to Sentrex Pharmacy and enroll in systems supported by the Sentrex Pharmacy.  I authorize the use and disclosure of my Information as outlined in this form.</p>
                <label htmlFor="signature" className="block text-sm font-bold mb-2">
                  Signature of Patient&apos;s Substitute Maker (SDM):
                </label>
                <div className="border border-gray-300 rounded-md p-4">
                  <SignatureCanvas
                    ref={signaturePad}
                    penColor="black"
                    canvasProps={{
                      className: 'w-full h-20',
                    }}
                  />
                </div>
                <ErrorMessage name="signature" component="p" className="text-red-500 text-xs mt-1" />
                <div className="flex space-x-4 mb-4 mt-2">
        <button
          type="button"
          onClick={() => {
            const signatureData = signaturePad.current.toDataURL();
            console.log('Signature Data:', signatureData);
          }}
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Save Signature
        </button>

        
      </div>
                <div className="mb-8 mt-3 flex items-end">
            <label htmlFor="patientSignatureDate" className="block text-sm font-bold mr-2">
              Date:
            </label>
            <div className="relative">
              <Field
                type="date"
                id="iAmSDMDate"
                name="iAmSDMDate"
                className="mt-2 px-3 py-1 border-none focus:outline-none"
              />
              <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-500" />
            </div>

            <ErrorMessage name="patientSignatureDate" component="p" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="patientPrintedNameOrSDM" className="block text-sm font-bold mb-2">
              Printed Name of Patient’s SDM:
            </label>
              <Field
                type="text"
                id="patientPrintedNameOrSDM"
                name="patientPrintedNameOrSDM"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            <ErrorMessage name="patientPrintedNameOrSDM" component="p" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="relationshipToPatient" className="block text-sm font-bold mb-2">
              Relationship of SDM to Patient:
            </label>
            
              <Field
                type="text"
                id="relationshipToPatient"
                name="relationshipToPatient"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            <ErrorMessage name="relationshipToPatient" component="p" className="text-red-500 text-xs mt-1" />
          </div>
          </div>
            )
          }

          {/* IF I AM HCP is SELECTED */}
          {
            showHide === 'theHCP' && (
            <div className="mb-4">
            <p className="mb-4 text-sm">I have read this consent form and/or it has been read to me. I give consent for Sentrex to dispense my medication(s) and/or transfer my prescription to Sentrex Pharmacy and enroll in systems supported by the Sentrex Pharmacy.  I authorize the use and disclosure of my Information as outlined in this form.</p>
            <div className="mb-4 mt-5">
            <span className="font-bold text-sm mr-2">Verbal Consent Obtained From: </span>
            {[
                { label: 'Patient', value: 'yes' },
                { label: 'Patient’s Substitute Decision Maker ', value: 'no' },
              ].map(({ label, value }) => (
                <label key={value} className="mr-4">
                  <Field
                    type="radio"
                    name="hcpVerbalConsentRadip"
                    value={value}
                    className="mr-2"
                  />
                  {label}
                </label>
              ))}
              
             
            
            <ErrorMessage name="verbalConsentPatientTo" component="p" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="mb-4 mt-3">
  {/* Verbal Consent Obtained By */}
  <div className="mb-4">
    <label htmlFor="verbalConsentObtainedBy" className="block text-sm font-bold mb-2">
      Verbal Consent Obtained by (Name of HCP):
    </label>
      <Field
        type="text"
        id="verbalConsentObtainedBy"
        name="verbalConsentObtainedBy"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
    <ErrorMessage name="verbalConsentObtainedBy" component="p" className="text-red-500 text-xs mt-1" />
  </div>
</div>

<div className="mb-4">
  {/* Verbal Consent Date input */}
  <div className="flex items-end">
    <label htmlFor="verbalConsentDate" className="block text-sm font-bold mb-2">
      Date:
    </label>
    <div className="relative">
      <Field
        type="date"
        id="verbalConsentDate"
        name="verbalConsentDate"
        className=" px-3 py-1 border-none focus:outline-none"
      />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-500" />
    </div>
    <ErrorMessage name="verbalConsentDate" component="p" className="text-red-500 text-xs mt-1" />
  </div>
  <label htmlFor="signature" className="block text-sm font-bold mb-2 mt-4">
                  HCP Signature:
                </label>
                <div className="border border-gray-300 rounded-md p-4">
                  <SignatureCanvas
                    ref={signaturePad}
                    penColor="black"
                    canvasProps={{
                      className: 'w-full h-20',
                    }}
                  />
                </div>
                <ErrorMessage name="signature" component="p" className="text-red-500 text-xs mt-1" />
  
</div>
<p className="text-sm mb-2">If verbal consent was obtained from a Substitute Decision Maker (SDM) please provide the following details:</p>

<div className="mb-4">
    <label htmlFor="verbalConsentObtainedBy" className="block text-sm font-bold mb-2">
      Name of SDM:
    </label>

      <Field
        type="text"
        id="verbalConsentObtainedBy"
        name="verbalConsentObtainedBy"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
    <ErrorMessage name="verbalConsentObtainedBy" component="p" className="text-red-500 text-xs mt-1" />
    <label htmlFor="relationshipToPatient" className="block text-sm font-bold mb-2 mt-2">
              Relationship of SDM to Patient:
            </label>
            
              <Field
                type="text"
                id="relationshipToPatient"
                name="relationshipToPatient"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            <ErrorMessage name="relationshipToPatient" component="p" className="text-red-500 text-xs mt-1" />
  </div>
  

            </div>
            )
          }
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-4">
          Submit Consent Form
        </button>


        
      </Form>
    </Formik>

  </div>


);

}

export default App;