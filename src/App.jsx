<<<<<<< HEAD
import { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { ChakraProvider, HStack } from "@chakra-ui/react";
import * as Yup from "yup";
import textTermsAndConditions from "./textContent";
import InputMask from "react-input-mask";
import { AddressAutofill } from '@mapbox/search-js-react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import vchLogo from "/vch-logo.svg"
import sentrexLogo from "/Logo_Sentrex.png"
import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  CheckboxGroup,
  Center,
  Container,
  Fade,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Image,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Radio,
  RadioGroup,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

const YourComponent = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

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

  const endOfForm = useRef(null);
  const sigCanvas = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [healthCardNumber, setHealthCardNumber] = useState("");
  const [email, setEmail] = useState("");
  const [doctor, setDoctor] = useState("");
  const [medication, setMedication] = useState("");
  const [iAm, setIam] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bestTimeToCall, setBestTimeToCall] = useState("");
  const [leaveAVoiceMail, setLeaveAVoiceMail] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [province, setProvince] = useState("");
  const [otherMedication, setOtherMedication] = useState("");
  const [nameOfSdmPrinted, setNameOfSdmPrinted] = useState("");
  const [relationshipOfSdmToPatient, setRelationshipOfSdmToPatient] = useState("");
  const [dateOfSignature, setDateOfSignature] = useState("");
  const [privateInsurance, setPrivateInsurance] = useState("");
  const [insurerGroupContractPlan, setInsurerGroupContractPlan] = useState("");
  const [insurerCertificate, setInsurerCertificate] = useState("");
  const [verbalConsentObtained, setVerbalConsentObtained] = useState("");
  const [vcbNameOfHcp, setVcbNameOfHcp] = useState("")
  const [acknowledgedcheckbox, setAcknowledgedcheckbox] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showHide, setShowHide] = useState("");

  const [input, setInput] = useState('')

  const isError = input === ''


  const formRef = useRef(null);

  // const handleCaptureScreenshot = async () => {
  //   if (formRef.current) {
  //     // Send a request to the server to trigger Puppeteer screenshot capture
  //     const response = await fetch('http://localhost:3001/capture-screenshot', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         html: formRef.current.outerHTML,
  //       }),
  //     });

  //     if (response.ok) {
  //       console.log('Screenshot captured on the server!');
  //     } else {
  //       console.error('Error capturing screenshot on the server.');
  //     }
  //   }
  // };


  // const handleCaptureSignature = () => {
  //   if (sigCanvas.current) {
  //     const dataUrl = sigCanvas.current.toDataURL();
  //     setSignatureData(dataUrl);
  //   }
  // };



  const handleRadioChange = (value) => {
    setLeaveAVoiceMail(value);
    // You can choose to call another function here if needed
    // sendDataToBackend();
  };

  const handleDoctorChange = (value) => {
    setDoctor(value);
    // You can choose to call another function here if needed
    // sendDataToBackend();
  };


  const handleCheckboxChange2 = (value) => {
    // Update the state of bestTimeToCall based on the checkbox changes
    setBestTimeToCall((prev) => {
      if (prev.includes(value)) {
        // If value is already in the array, remove it
        return prev.filter((item) => item !== value);
      } else {
        // If value is not in the array, add it
        return [...prev, value];
      }
    });
    // You can choose to call sendDataToBackend here if needed
    // sendDataToBackend();
  };

  const handleCheckboxChange = () => {
    setAcknowledgedcheckbox(!acknowledgedcheckbox);
  };

=======
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
// import html2pdf from "html2pdf.js";



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

// const generatePdf = async () => {
//   try {
//     const formElement = document.getElementById('patient-form');
//     // const pdfOptions = {
//     //   margin: [10,10],
//     //   filename: 'consent_form.pdf',
//     //   image: { type: 'jpeg', quality: 0.98 },
//     //   html2canvas: { scale: 1.5, letterRendering: true },
//     //   jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', putOnlyUsedFonts:true, floatPrecision: 16 },
//     //   pagebreak: {
//     //     mode: ['avoid-all', 'css', 'legacy'],
//     //     before: '.page-break-after',
//     //   }
      
//     // };

//     await html2pdf().from(formElement).set().save();
//     console.log('PDF generated successfully');
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//   }
// };

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



// const onSubmit = async (values, { setSubmitting }) => {
//   try {

    
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
//   await generatePdf();
//   // }
// } catch (error) {
//   console.error('Error generating PDF:', error);
// } finally {
//   setSubmitting(false);

// }
// };

function App() {


  const [showHide, setShowHide] = useState('');
>>>>>>> bc67f186879cc0eeb7cf66986d645a8409fe8d03

  const handleShowHide = (event) => {
    const getIam = event.target.value;
    setShowHide(getIam);
<<<<<<< HEAD
  };

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // MAIN CODE
  const handleSaveAndGeneratePDF = async () => {
     
    try {
     // Set isLoading to true
     setIsLoading(true);

    // Trigger Formik form submission to validate the form
    await formRef.current.submitForm();

    // Check if there are validation errors
    if (formRef.current.errors && Object.keys(formRef.current.errors).length > 0) {
      console.log('Form validation failed. Please correct the errors.');
      return;
    }


    


      const signatureDataUrl = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
       
    // Do something with the signature data (e.g., send it to the server)
    console.log(signatureDataUrl);
    // return signatureDataUrl
  
     

    // Log and send the input data to the server
// Log each piece of data on its own line
console.log("Data to be sent to the server:");
console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("healthCardNumber:", healthCardNumber);
console.log("dateOfBirth:", dateOfBirth);
console.log("phoneNumber:", phoneNumber);
console.log("bestTimeToCall:", bestTimeToCall);
console.log("leaveAVoiceMail:", leaveAVoiceMail);
console.log("address:", address);
console.log("address2:", address2);
console.log("city:", city);
console.log("province:", province);
console.log("postalCode:", postalCode);
console.log("email:", email);
console.log("doctor:", doctor);
console.log("medication:", medication);
console.log("privateInsurance:", privateInsurance);
console.log("insurerGroupContractPlan:", insurerGroupContractPlan);
console.log("insurerCertificate:", insurerCertificate);
console.log("iAm:", iAm);
console.log("acknowledgedcheckbox:", acknowledgedcheckbox);
console.log("dateOfSignature:", dateOfSignature);
console.log("signatureDataUrl:", signatureDataUrl);



      // Log and send the input data to the server
      const response = await fetch("http://localhost:3001/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
          
        }),
      });
      
      // Show the modal
      setIsModalOpen(true);
      // Handle the server response
      if (response.ok) {
        console.log("PDF generation successfully initiated!");
      } else {
        const data = await response.json();
        console.error("Error generating PDF:", data.error);
      }
    } catch (error) {
      console.error("Error handling Save and Generate PDF:", error.message);
    } finally {
      // Set isLoading to false after the delay
    setIsLoading(false);
    }
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRefresh = () => {
    // Reload the page
  window.location.reload();

  // Scroll to the top of the screen
  window.scrollTo(0, 0);
  };

 

  return (
    <Container
      maxW="container.md"
      border="1px"
      borderColor="gray.200"
      bg="white"
      boxShadow="base"
      p="6"
      className="patient-form"
      ref={formRef}
    >
    <Stack direction='row'>
  <Image
   
    src={vchLogo}
    alt='Dan Abramov'
  />
  <Spacer/>
  <Image
    w="100"
    h="45"
    src={sentrexLogo}
    alt='Dan Abramov'
  />
  
</Stack>
      <Center>
        <Text mt="5" pb="10" as="b" fontSize="xl">
          {" "}
          VHC PATIENT CONSENT FORM
        </Text>
      </Center>
      {/* <Button onClick={handleCaptureScreenshot}>Capture Screenshot</Button> */}
      
      <FormControl 
        isRequired
        
        >
        <Flex>
          <HStack spacing={4} width="100%">
            <Box flex="1">
              <FormLabel fontSize="sm" >
                First name:
              </FormLabel>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
     

            </Box>

            <Box flex="1">
              <FormLabel fontSize="sm">Last Name</FormLabel>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>
          </HStack>
        </Flex>
        
        <Box flex="1">
              <FormLabel fontSize="sm" >
                Care Card Number
              </FormLabel>
              <Input
                id="healthCardNumber"
                value={healthCardNumber}
                onChange={(e) => setHealthCardNumber(e.target.value)}
              />
            </Box>
        <Flex>
          <HStack spacing={4} width="100%" mt="5">
            <Formik>
              <Box flex="1">
                <FormLabel fontSize="sm">Date of Birth:</FormLabel>
                <Field
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={dateOfBirth}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
                <ErrorMessage
                  name="dateOfBirth"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </Box>
            </Formik>

            <Box flex="1">
              <FormLabel fontSize="sm">Phone Number:</FormLabel>
              <InputMask
                mask="999-999-9999"
                maskChar={null}
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                id="phoneNumber"
                
              >
                {(inputProps) => <Input  {...inputProps} />}
              </InputMask>
            </Box>
          </HStack>
        </Flex>
      </FormControl>
      <Flex mt="5">
        <Box flex="1">
          <FormLabel fontSize="sm">Best Time to Call:</FormLabel>
         
          <CheckboxGroup value={bestTimeToCall}>
      <Stack spacing={3} direction="row">
        <input
          id="Morning"
          type="checkbox"
          value="Morning"
          className="accent-green-600"
          onChange={() => handleCheckboxChange2('Morning')}
        />
        <label htmlFor="Morning">Morning</label>

        <input
          id="Noon"
          type="checkbox"
          value="Noon"
          className="accent-green-600"
          onChange={() => handleCheckboxChange2('Noon')}
        />
        <label htmlFor="Noon">Noon</label>

        <input
          id="Evening"
          type="checkbox"
          value="Evening"
          className="accent-green-600"
          onChange={() => handleCheckboxChange2('Evening')}
        />
        <label htmlFor="Evening">Evening</label>
      </Stack>
    </CheckboxGroup>
           
        </Box>
        <Box flex="1">
          <FormLabel fontSize="sm">Leave a voicemail:</FormLabel>
          <RadioGroup onChange={handleRadioChange} value={leaveAVoiceMail} id="leaveAVoiceMail">
      <Stack spacing={3} direction="row">
        <input
          type="radio"
          id="Yes"
          value="Yes"
          name="voicemail"
          className="accent-green-600"
          onChange={() => handleRadioChange('Yes')}
        />
        <label htmlFor="Yes">Yes</label>

        <input
          type="radio"
          id="No"
          value="No"
          name="voicemail"
          className="accent-green-600"
          onChange={() => handleRadioChange('No')}
        />
        <label htmlFor="No">No</label>
      </Stack>
    </RadioGroup>
        </Box>
      </Flex>

      <FormControl isRequired >    {/* auto address here */}
     <Formik>
     <Form >
    <AddressAutofill 
    accessToken="pk.eyJ1IjoiYm9sZGl0YWxpYyIsImEiOiJjbHFoanMyaWgwa211MmptcHdxa2Y2cGdxIn0.R7nD9m7s-4jGNdxnyfF19A"
    
    >
    
    <FormLabel fontSize="sm" mt="5"> Address</FormLabel>
      <Input
        
        id="address"
        placeholder="Please enter your address"
        value={address}
        
        autoComplete="address-line1"
        onChange={(e) => setAddress(e.target.value)}
      />
    </AddressAutofill>
   <FormControl>
    <FormLabel fontSize="sm" mt="5"> Apartment/Unit</FormLabel>
    <Input
      name="apartment"
      id="address2"
      placeholder="Apartment number"
      value={address2}
      type="text"
      autoComplete="address-line2"
      onChange={(e) => setAddress2(e.target.value)}
    />
    </FormControl>
   
     <FormLabel fontSize="sm" mt="5"> City</FormLabel>
    <Input
      name="city"
      id="city"
      placeholder="City"
      value={city}
      type="text"
      autoComplete="address-level2"
      onChange={(e) => setCity(e.target.value)}
    />
    <Flex mt="5">
    <HStack spacing={4} width="100%">
    <Box flex="1">
     <FormLabel fontSize="sm" > Province</FormLabel>
    <Input
      name="state"
      id="province"
      placeholder="Province"
      value={province}
      type="text"
      autoComplete="address-level1"
      onChange={(e) => setProvince(e.target.value)}
    />
    </Box>
     {/* <FormLabel fontSize="sm"> Country</FormLabel>
    <Input
      name="country"
      placeholder="Country"
      type="text"
      autoComplete="country"
    /> */}
    <Box flex="1">
     <FormLabel fontSize="sm"> Postal Code</FormLabel>
    <Input
      name="postcode"
      id="postalCode"
      placeholder="Postal Code"
      value={postalCode}
      type="text"
      autoComplete="postal-code"
      onChange={(e) => setPostalCode(e.target.value)}
    />
    </Box>
    </HStack>
    </Flex>

  
</Form>
  </Formik>
       
      </FormControl>

      
      <FormLabel fontSize="sm" mt="5">
        Email address:
      </FormLabel>
      <Input
        id="email"
        value={email}
        
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormLabel fontSize="sm" mt="5" className="page-break">
      Physician Name:
      </FormLabel>
      <Box>
      
      <RadioGroup id="doctor" name="doctor" onChange={setDoctor} value={doctor}>
        
      <div className="flex flex-col">
  <div>
    <input type="radio" value="Dr. Robert Carruthers (ID# 39947)" id="Dr. Robert Carruthers (ID# 39947)" size="sm" name="doctor" className="mr-3 accent-green-600"  onChange={() => handleDoctorChange('Dr. Robert Carruthers (ID# 39947)') }/>
    <label htmlFor="DR_ROBERT_CARRUTHERS">Dr. Robert Carruthers (ID# 39947)</label>
  </div>

  <div>
    <input type="radio" value="Dr. Virginia Devonshire (ID# 13005)" id="Dr. Virginia Devonshire (ID# 13005)" size="sm" name="doctor" className="mr-3 accent-green-600" onChange={() => handleDoctorChange('Dr. Virginia Devonshire (ID# 13005)') }/>
    <label htmlFor="DR_VIRGINIA_DEVONSHIRE">Dr. Virginia Devonshire (ID# 13005)</label>
  </div>

  <div>
    <input type="radio" value="Dr. Ana-luiza Sayao (ID# 24217)" id="Dr. Ana-luiza Sayao (ID# 24217)" size="sm" name="doctor" className="mr-3 accent-green-600" onChange={() => handleDoctorChange('Dr. Ana-luiza Sayao (ID# 24217)') }/>
    <label htmlFor="DR_ANA_LUIZA_SAYAO">Dr. Ana-luiza Sayao (ID# 24217)</label>
  </div>

  <div>
    <input type="radio" value="Dr. Alice Schabas (ID# 32711)" id="Dr. Alice Schabas (ID# 32711)" size="sm" name="doctor" className="mr-3 accent-green-600" onChange={() => handleDoctorChange('Dr. Alice Schabas (ID# 32711)') }/>
    <label htmlFor="DR_ALICE_SCHABAS">Dr. Alice Schabas (ID# 32711)</label>
  </div>

  <div>
    <input type="radio" value="Dr. Anthony Traboulsee (ID# 18049)" id="Dr. Anthony Traboulsee (ID# 18049)" size="sm" name="doctor" className="mr-3 accent-green-600" onChange={() => handleDoctorChange('Dr. Anthony Traboulsee (ID# 18049)') }/>
    <label htmlFor="DR_ANTHONY_TRABOULSEE">Dr. Anthony Traboulsee (ID# 18049)</label>
  </div>
</div>
        
      </RadioGroup>
    
      </Box>

      <FormLabel fontSize="sm" mt="5">
        Select Medication:
      </FormLabel>
      <RadioGroup id="medication" onChange={setMedication} value={medication} >
        <div className="flex flex-col">
          <div>
          <input id="Aubagio (Teriflunimide)" value="Aubagio (Teriflunimide)" size="sm" type="radio" name="medication" className="mr-2 accent-green-600" onChange={(e) => setMedication(e.target.value)}/>
            <label> Aubagio (Teriflunimide)</label>
          </div>
          <div>
          <input id="Enspryng (Satralizumab)" value="Enspryng (Satralizumab)" size="sm" type="radio" name="medication" className="mr-2 accent-green-600" onChange={(e) => setMedication(e.target.value)}/>
            <label> Enspryng (Satralizumab)</label>
          </div>
          <div>
          <input id="Gilenya (Fingolimod)" value="Gilenya (Fingolimod)" size="sm" type="radio" name="medication" className="mr-2 accent-green-600" onChange={(e) => setMedication(e.target.value)}/>
             <label> Gilenya (Fingolimod)</label>
          </div>
          <div>
           <input id="Kesimpta (Ofatumumab)" value="Kesimpta (Ofatumumab)" size="sm" type="radio" name="medication" className="mr-2 accent-green-600" onChange={(e) => setMedication(e.target.value)}/>
            <label> Kesimpta (Ofatumumab)</label>
          </div>
          <div>
          <input id="Lemtrada (Alemtuzumab)" value="Lemtrada (Alemtuzumab)" size="sm" type="radio" name="medication" className="mr-2 accent-green-600" onChange={(e) => setMedication(e.target.value)}/>
           <label> Lemtrada (Alemtuzumab)</label>
           </div>
           <div>
          <input id="Mavenclad (Cladribine)" value="Mavenclad (Cladribine)" size="sm" type="radio" name="medication" className="mr-2 accent-green-600" onChange={(e) => setMedication(e.target.value)}/>
            <label> Mavenclad (Cladribine)</label>
            </div>
            <div>
          <input id="Ocrevus (Ocrelizumab)" value="Ocrevus (Ocrelizumab)" size="sm" type="radio" name="medication" className="mr-2 accent-green-600" onChange={(e) => setMedication(e.target.value)}/> 
            <label> Ocrevus (Ocrelizumab)</label>
            </div>
            <div>
          <input id="Riximyo/Ruxience (Rituximab)" value="Riximyo/Ruxience (Rituximab)" size="sm" type="radio" name="medication" className="mr-2 accent-green-600" onChange={(e) => setMedication(e.target.value)}/>
            <label> Riximyo/Ruxience (Rituximab)</label>
            </div>
            <div>
          <input id="Tecfidera (Dimethyl Fumarate)" value="Tecfidera (Dimethyl Fumarate)" size="sm" type="radio" name="medication" className="mr-2 accent-green-600" onChange={(e) => setMedication(e.target.value)}/>
            <label> Tecfidera (Dimethyl Fumarate)</label>
            </div>
            <div>
          <input id="Tysabri (Natalizumab)" value="Tysabri (Natalizumab)" size="sm" type="radio" name="medication" className="mr-2 accent-green-600" onChange={(e) => setMedication(e.target.value)}/> 
            <label> Tysabri (Natalizumab)</label>
            </div>
            <div>
          <input id="I am not on therapy for MS/NMO" value="I am not on therapy for MS/NMO" size="sm" type="radio" name="medication" className="mr-2 accent-green-600" onChange={(e) => setMedication(e.target.value)}/>
            <label> I am not on therapy for MS/NMO</label>
            </div>

            <div>
          <input id="Other" value="Other" size="sm" type="radio" name="medication" className="mr-2 accent-green-600"/>
            <label>Other</label>
            <Input
              id="othermedication"
              value={otherMedication}
              onChange={(e) => setOtherMedication(e.target.value)}
            
            ></Input>
            </div>
            
          
        </div>
      </RadioGroup>
      <Flex mt="5">
        <FormLabel fontSize="sm" optionalIndicator>
          Name of Private Insurance Provider:
        </FormLabel>
      </Flex>
      <Input
        id="privateInsurance"
        placeholder="(Optional)"
        value={privateInsurance}
        onChange={(e) => setPrivateInsurance(e.target.value)}
      />

      <Flex mt="5">
        <FormLabel fontSize="sm" optionalIndicator>
          Insurer Group/Contract/Plan #:
        </FormLabel>
      </Flex>
      <Input
        id="insurerGroupContractPlan"
        placeholder="(Optional)"
        value={insurerGroupContractPlan}
        onChange={(e) => setInsurerGroupContractPlan(e.target.value)}
      />

      <Flex mt="5">
        <FormLabel fontSize="sm" as="" optionalIndicator>
          Insurer Certificate #:{" "}
        </FormLabel>
      </Flex>
      <Input
        id="insurerCertificate"
        placeholder="(Optional)"
        value={insurerCertificate}
        onChange={(e) => setInsurerCertificate(e.target.value)}
      />

      <Center>
        <FormLabel as="b" fontSize="sm" className="p-5 page-break">
          PATIENT CONSENT TO ENROL IN AND RECEIVE SERVICES FROM SENTREX
        </FormLabel>
      </Center>
      <Text as="" fontSize="xs" className="whitespace-pre-line">
        {textTermsAndConditions}
      </Text>
      <Formik>
     
      
      <Form>
      
      <input
          type="checkbox"
          id="acknowledgedcheckbox"
          name="acknowledgedcheckbox"
          checked={acknowledgedcheckbox}
          onChange={handleCheckboxChange}
          className=" accent-green-600 mr-3 my-3"
          
        />
       <label>I acknowledge, understand, and agree to the above.</label>
       
      </Form>
      
      </Formik>
      <FormControl isRequired>
        <Flex>
          {/* <Box className="my-5">
            <Checkbox
              
              id="acknowledgedcheckbox"
              colorScheme="green"
              className="border-red-500"
              isChecked={acknowledgedcheckbox}
              onChange={handleCheckboxChange}
            >
              <Center>
                <Box>
                  <FormLabel fontSize="sm" className="pt-2">
                    {" "}
                    I acknowledge, understand, and agree to the above
                  </FormLabel>
                </Box>
              </Center>
            </Checkbox>
          </Box> */}
        </Flex>
      </FormControl>

      <FormLabel fontSize="md" mb="5" className="page-break">
        PATIENT CONSENT
      </FormLabel>
      <HStack space="5">
        <Center>
          <Box>
            <Text as="b" fontSize="sm">
              I am:
            </Text>
          </Box>
        </Center>
        <Box flex="1">
          <Select
            fontSize="md"
            variant="filled"
            id="iAm"
            value={iAm}
            placeholder="Select option"
            onChange={(e) => {
            setIam(e.target.value);
            handleShowHide(e);
            }}
            onClick={() =>
              endOfForm.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <option value="thePatient">The patient</option>
            <option value="theSDM">
              The patient’s Substitute Decision Maker (SDM)
            </option>
            <option value="theHCP">
              An HCP obtaining verbal consent on behalf of the patient
            </option>
          </Select>
        </Box>
      </HStack>
      {/* IF PATIENT is SELECTED */}
      {showHide === "thePatient" && (
        <Fade
          in={showHide === "thePatient"}
          animateOpacity
          transition={{ enter: { duration: 1 } }}
        >
          <Text fontSize="xs" mt="5">
            {" "}
            I have read this consent form and/or it has been read to me. I give
            consent for Sentrex to dispense my medication(s) and/or transfer my
            prescription to Sentrex Pharmacy and enroll in systems supported by
            the Sentrex Pharmacy. I authorize the use and disclosure of my
            Information as outlined in this form.
          </Text>

          <FormLabel fontSize="md" mt="5">
            Signature of Patient:
          </FormLabel>
          <Box className="border rounded-xl signaturePad">
            <SignatureCanvas
              ref={sigCanvas}
              id="signatureCanvas"
              canvasProps={{ width: 700, height: 200, className: "sigCanvas" }}
            />
          </Box>
         
          <Stack spacing={3}>
            <Button onClick={clearSignature} className="mt-4 hide-for-pdf">
            Clear Signature
            </Button>
           
            <Formik>
              <Flex mt="5">
                <Box>
                  <FormLabel fontSize="sm" pt="2">
                    Date:
                  </FormLabel>
                </Box>
                <Box mb="2" >
                  <Field
                    type="date"
                    id="dateOfSignature"
                    value={dateOfSignature}
                    name="dateOfSignature"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm"
                    onChange={(e) => setDateOfSignature(e.target.value)}
                  />
                  <ErrorMessage
                    name="dateOfSignature"
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />
                </Box>
              </Flex>
            </Formik>
  
            <Button colorScheme="teal" onClick={handleSaveAndGeneratePDF}  isLoading={isLoading} className="generate-pdf">
              Generate PDF
            </Button>
            {/* Modal for showing the success message */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submission Complete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          The form has successfully been submitted! Submit another form?
            <Box>
            <Center>
            <ButtonGroup mt={4} spacing={4}>
              <Button colorScheme="teal" onClick={handleRefresh}>
                Yes
              </Button>
              <Button variant="outline" onClick={closeModal}>
                No
              </Button>
            </ButtonGroup>
            </Center>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
          </Stack>
          <div ref={endOfForm} className="wait-for-this-div"></div>
      
        </Fade>
        
      )}
      {/* IF SDM is SELECTED */}
      {showHide === "theSDM" && (
        <Fade
          in={showHide === "theSDM"}
          animateOpacity
          transition={{ enter: { duration: 1 } }}
        >
          <Text fontSize="xs" mt="5">
            {" "}
            I have read this consent form and/or it has been read to me. I give
            consent for Sentrex to dispense my medication(s) and/or transfer my
            prescription to Sentrex Pharmacy and enroll in systems supported by
            the Sentrex Pharmacy. I authorize the use and disclosure of my
            Information as outlined in this form.
          </Text>

          <FormLabel fontSize="md" mt="5">
            Signature of Patient's Substitute Maker (SDM):
          </FormLabel>
          <Box className="border rounded-xl">
            <SignatureCanvas
              ref={sigCanvas}
              canvasProps={{ width: 700, height: 200, className: "sigCanvas" }}
            />
          </Box>

          <Stack spacing={3}>
            <Button onClick={clearSignature} className="mt-4">
              Clear Signature
            </Button>
            <Formik>
              <Flex mt="5">
                <Box>
                  <FormLabel fontSize="sm" pt="2">
                    Date:
                  </FormLabel>
                </Box>
                <Box flex="">
                  <Field
                    type="date"
                    id="dateOfSignature"
                    value={dateOfSignature}
                    name="dateOfSignature"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm"
                    onChange={(e) => setDateOfSignature(e.target.value)}
                  />
                  <ErrorMessage
                    name="dateOfSignature"
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />
                </Box>
              </Flex>
            </Formik>
            <Flex>
              <HStack spacing={4} width="100%">
                <Box flex="1">
                  <FormLabel fontSize="sm">
                    Printed Name of Patient’s SDM:
                  </FormLabel>
                  <Input
                    id="nameOfSdmPrinted"
                    value={nameOfSdmPrinted}
                    onChange={(e) => setNameOfSdmPrinted(e.target.value)}
                  />
                </Box>

                <Box flex="1">
                  <FormLabel fontSize="sm">
                    Relationship of SDM to Patient:
                  </FormLabel>
                  <Input
                    id="relationshipOfSdmToPatient"
                    value={relationshipOfSdmToPatient}
                    onChange={(e) =>
                      setRelationshipOfSdmToPatient(e.target.value)
                    }
                  />
                </Box>
              </HStack>
            </Flex>
            {/* <Button colorScheme="blue" onClick={handleSave}>
              Save Signature
            </Button> */}
            <Button colorScheme="teal" onClick={handleSaveAndGeneratePDF}  isLoading={isLoading} className="generate-pdf">
              Submit Form
            </Button>
            {/* Modal for showing the success message */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submission Complete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          The form has successfully been submitted! Submit another form?
            <Box>
            <Center>
            <ButtonGroup mt={4} spacing={4}>
              <Button colorScheme="teal" onClick={handleRefresh}>
                Yes
              </Button>
              <Button variant="outline" onClick={closeModal}>
                No
              </Button>
            </ButtonGroup>
            </Center>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
          </Stack>
          <div ref={endOfForm} className="wait-for-this-div"></div>
      
        </Fade>
      )}

      {/* IF HCP is SELECTED */}
      {showHide === "theHCP" && (
        <Fade
          in={showHide === "theHCP"}
          animateOpacity
          transition={{ enter: { duration: 1 } }}
        >
          <Text fontSize="xs" mt="5">
            {" "}
            I have read this consent form and/or it has been read to me. I give
            consent for Sentrex to dispense my medication(s) and/or transfer my
            prescription to Sentrex Pharmacy and enroll in systems supported by
            the Sentrex Pharmacy. I authorize the use and disclosure of my
            Information as outlined in this form.
          </Text>
          <Flex mt="5">
            <FormLabel>
            Verbal Consent Obtained From:
            </FormLabel>
            <RadioGroup id="verbalConsentObtained" onChange={setVerbalConsentObtained} value={verbalConsentObtained} colorScheme="green">
          <Stack direction="row">
              <Radio value="Patient">
              Patient
              </Radio>
              <Radio value="PatientSdm">
              Patient’s Substitute Decision Maker
              </Radio>
              </Stack>
            </RadioGroup>
          </Flex>

          <FormLabel fontSize="sm" mt="5">
          Verbal Consent Obtained by (Name of HCP):
        </FormLabel>
        <Input
          id="vcbNameOfHcp"
          value={vcbNameOfHcp}
          onChange={(e) => setVcbNameOfHcp(e.target.value)}
        />

          <FormLabel fontSize="md" mt="5">
          HCP Signature:
          </FormLabel>
          <Box className="border rounded-xl">
            <SignatureCanvas
              ref={sigCanvas}
              canvasProps={{ width: 700, height: 200, className: "sigCanvas" }}
            />
          </Box>

          <Stack spacing={3}>
            <Button onClick={clearSignature} className="mt-4">
              Clear Signature
            </Button>
            <Formik>
              <Flex mt="5">
                <Box>
                  <FormLabel fontSize="sm" pt="2">
                    Date:
                  </FormLabel>
                </Box>
                <Box flex="">
                  <Field
                    type="date"
                    id="dateOfSignature"
                    value={dateOfSignature}
                    name="dateOfSignature"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm"
                    onChange={(e) => setDateOfSignature(e.target.value)}
                  />
                  <ErrorMessage
                    name="dateOfSignature"
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />
                </Box>
              </Flex>
            </Formik>
            <Text fontSize="xs">If verbal consent was obtained from a Substitute Decision Maker (SDM) please provide the following details:</Text>
            <Flex>
              <HStack spacing={4} width="100%">
                <Box flex="1">
                  <FormLabel fontSize="sm">
                    Name of SDM
                  </FormLabel>
                  <Input
                    id="nameOfSdmPrinted"
                    value={nameOfSdmPrinted}
                    onChange={(e) => setNameOfSdmPrinted(e.target.value)}
                  />
                </Box>

                <Box flex="1">
                  <FormLabel fontSize="sm">
                    Relationship of SDM to Patient:
                  </FormLabel>
                  <Input
                    id="relationshipOfSdmToPatient"
                    value={relationshipOfSdmToPatient}
                    onChange={(e) =>
                      setRelationshipOfSdmToPatient(e.target.value)
                    }
                  />
                </Box>
              </HStack>
            </Flex>
            {/* <Button colorScheme="blue" onClick={handleSave}>
              Save Signature
            </Button> */}
            <Button colorScheme="teal" onClick={handleSaveAndGeneratePDF}  isLoading={isLoading} className="generate-pdf" >
              Submit Form
            </Button>
            {/* Modal for showing the success message */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submission Complete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          The form has successfully been submitted! Submit another form?
            <Box>
            <Center>
            <ButtonGroup mt={4} spacing={4}>
              <Button colorScheme="teal" onClick={handleRefresh}>
                Yes
              </Button>
              <Button variant="outline" onClick={closeModal}>
                No
              </Button>
            </ButtonGroup>
            </Center>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
          </Stack>
          <div ref={endOfForm} className="wait-for-this-div"></div>
      
        </Fade>
      )}
    </Container>
  );
};

const App = () => {
  return (
    <ChakraProvider>
      <YourComponent />
    </ChakraProvider>
  );
};

export default App;
=======
  }

  const signaturePad = React.useRef();

  return (
    <div className="flex justify-center bg-gray-100 ">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      // onSubmit={onSubmit}
    >
      <Form id="patient-form"
      className="w-full max-w-5xl bg-white p-8 rounded-md shadow-md">
        
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
          <div className="mb-4">
            <label htmlFor="physician" className="block text-sm font-bold pb-2">
              Physician Name:
            </label>
            <div className="flex flex-col text-sm">
              {[
                { label: 'DR. VIRGINIA DEVONSHIRE', value: 'DR. VIRGINIA DEVONSHIRE' },
                { label: 'DR. ANTHONY TRABOULSEE', value: 'DR. ANTHONY TRABOULSEE' },
                { label: 'DR. ANA-LUIZA SAYAO', value: 'DR. ANA-LUIZA SAYAO' },
                { label: 'DR. ROBERT CARRUTHERS', value: 'DR. ROBERT CARRUTHERS' },
                { label: 'DR. ALICE SCHABAS', value: 'DR. ALICE SCHABAS' },
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
              <div className="mb-4 page-break-after">

              <h3 className="mb-2 font-bold">PATIENT CONSENT TO ENROL IN AND RECEIVE SERVICES FROM SENTREX</h3>
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
              <div className="mb-4">
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
>>>>>>> bc67f186879cc0eeb7cf66986d645a8409fe8d03
