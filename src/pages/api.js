// import React, { useState } from 'react';

// function AddDataForm() {
//   const [prefix, setPrefix] = useState('');
//   const [fullNameThai, setFullNameThai] = useState('');
//   const [fullNameEng, setFullNameEng] = useState('');
//   const [gender, setGender] = useState('');
//   const [birthday, setBirthday] = useState('');
//   const [maritalStatus, setMaritalStatus] = useState('');
//   const [religion, setReligion] = useState('');
//   const [nationality, setNationality] = useState('');
//   const [idAddress, setIdAddress] = useState('');
//   const [currentAddress, setCurrentAddress] = useState('');
//   const [workAddress, setWorkAddress] = useState('');
//   const [personalId, setPersonalId] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [position, setPosition] = useState('');
//   const [department, setDepartment] = useState('');
//   const [salary, setSalary] = useState('');
//   const [contractDuration, setContractDuration] = useState('');
//   const [contractConsultantName, setContractConsultantName] = useState('');
//   const [client, setClient] = useState('');
//   const [ssfPay, setSsfPay] = useState('');
//   const [ssfType, setSsfType] = useState('');
//   const [nonSsf, setNonSsf] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [registrationNumber, setRegistrationNumber] = useState('');
//   const [registrationAddress, setRegistrationAddress] = useState('');
//   const [joiningDateCpay, setJoiningDateCpay] = useState('');
//   const [leaveEligibility, setLeaveEligibility] = useState('');
//   const [agreementExpirationPeriod, setAgreementExpirationPeriod] = useState('');
//   const [hospitalDetailCpay, setHospitalDetailCpay] = useState('');
//   const [withholdingTaxCpay, setWithholdingTaxCpay] = useState('');
//   const [marriedNameCpay, setMarriedNameCpay] = useState('');
//   const [childrenDetailCpay, setChildrenDetailCpay] = useState('');
//   const [parentsCpay, setParentsCpay] = useState('');
//   const [disabledPersonCpay, setDisabledPersonCpay] = useState('');
//   const [liUInsuranceEndowmentCpay, setLiUInsuranceEndowmentCpay] = useState('');
//   const [healthInsuranceAccidentCpay, setHealthInsuranceAccidentCpay] = useState('');
//   const [parentLiUResuranceCpay, setParentLiUResuranceCpay] = useState('');
//   const [annuityInsuranceCpay, setAnnuityInsuranceCpay] = useState('');
//   const [rmfCpay, setRmfCpay] = useState('');
//   const [ssfSuperSavingFundCpay, setSsfSuperSavingFundCpay] = useState('');
//   const [providentFundPvdCpay, setProvidentFundPvdCpay] = useState('');
//   const [donationsCpay, setDonationsCpay] = useState('');
//   const [resumeImage, setResumeImage] = useState('');
//   const [transcriptImage, setTranscriptImage] = useState('');
//   const [certificateImage, setCertificateImage] = useState('');
//   const [houseRegistrationImage, setHouseRegistrationImage] = useState('');
//   const [idCardImage, setIdCardImage] = useState('');
//   const [personalImage, setPersonalImage] = useState('');
//   const [photoWithIdImage, setPhotoWithIdImage] = useState('');
//   const [bankBookImage, setBankBookImage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch('http://localhost:3333/adddata', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           prefix,
//           fullNameThai,
//           fullNameEng,
//           gender,
//           birthday,
//           maritalStatus,
//           religion,
//           nationality,
//           idAddress,
//           currentAddress,
//           workAddress,
//           personalId,
//           email,
//           phoneNumber,
//           position,
//           department,
//           salary,
//           contractDuration,
//           contractConsultantName,
//           client,
//           ssfPay,
//           ssfType,
//           nonSsf,
//           companyName,
//           registrationNumber,
//           registrationAddress,
//           joiningDateCpay,
//           leaveEligibility,
//           agreementExpirationPeriod,
//           hospitalDetailCpay,
//           withholdingTaxCpay,
//           marriedNameCpay,
//           childrenDetailCpay,
//           parentsCpay,
//           disabledPersonCpay,
//           liUInsuranceEndowmentCpay,
//           healthInsuranceAccidentCpay,
//           parentLiUResuranceCpay,
//           annuityInsuranceCpay,
//           rmfCpay,
//           ssfSuperSavingFundCpay,
//           providentFundPvdCpay,
//           donationsCpay,
//           resumeImage,
//           transcriptImage,
//           certificateImage,
//           houseRegistrationImage,
//           idCardImage,
//           personalImage,
//           photoWithIdImage,
//           bankBookImage
//         })
//       });
  
//       if (response.ok) {
//         console.log('Data added successfully');
//       } else {
//         console.log('Error adding data');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }


//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={prefix} onChange={(e) => setPrefix(e.target.value)} placeholder="Prefix" required />
//       <input type="text" value={fullNameThai} onChange={(e) => setFullNameThai(e.target.value)} placeholder="Full Name (Thai)" required />
//       <input type="text" value={fullNameEng} onChange={(e) => setFullNameEng(e.target.value)} placeholder="Full Name (English)" required />
//       <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" required />
//       <input type="text" value={birthday} onChange={(e) => setBirthday(e.target.value)} placeholder="Birthday" required />
//       <input type="text" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} placeholder="Marital Status" required />
//       <input type="text" value={religion} onChange={(e) => setReligion(e.target.value)} placeholder="Religion" required />
//       <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} placeholder="Nationality" required />
//       <input type="text" value={idAddress} onChange={(e) => setIdAddress(e.target.value)} placeholder="ID Address" required />
//       <input type="text" value={currentAddress} onChange={(e) => setCurrentAddress(e.target.value)} placeholder="Current Address" required />
//       <input type="text" value={workAddress} onChange={(e) => setWorkAddress(e.target.value)} placeholder="Work Address" required />
//       <input type="text" value={personalId} onChange={(e) => setPersonalId(e.target.value)} placeholder="Personal ID" required />
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required />
//       <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" required />
//       <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Department" required />
//       <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Salary" required />
//       <input type="text" value={contractDuration} onChange={(e) => setContractDuration(e.target.value)} placeholder="Contract Duration" required />
//       <input type="text" value={contractConsultantName} onChange={(e) => setContractConsultantName(e.target.value)} placeholder="Contract Consultant Name" required />
//       <input type="text" value={client} onChange={(e) => setClient(e.target.value)} placeholder="Client" required />
//       <input type="text" value={ssfPay} onChange={(e) => setSsfPay(e.target.value)} placeholder="SSF Pay" required />
//       <input type="text" value={ssfType} onChange={(e) => setSsfType(e.target.value)} placeholder="SSF Type" required />
//       <input type="text" value={nonSsf} onChange={(e) => setNonSsf(e.target.value)} placeholder="Non SSF" required />
//       <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company Name" required />
//       <input type="text" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} placeholder="Registration Number" required />
//       <input type="text" value={registrationAddress} onChange={(e) => setRegistrationAddress(e.target.value)} placeholder="Registration Address" required />
//       <input type="text" value={joiningDateCpay} onChange={(e) => setJoiningDateCpay(e.target.value)} placeholder="Joining Date CPay" required />
//       <input type="text" value={leaveEligibility} onChange={(e) => setLeaveEligibility(e.target.value)} placeholder="Leave Eligibility" required />
//       <input type="text" value={agreementExpirationPeriod} onChange={(e) => setAgreementExpirationPeriod(e.target.value)} placeholder="Agreement Expiration Period" required />
//       <input type="text" value={hospitalDetailCpay} onChange={(e) => setHospitalDetailCpay(e.target.value)} placeholder="Hospital Detail CPay" required />
//       <input type="text" value={withholdingTaxCpay} onChange={(e) => setWithholdingTaxCpay(e.target.value)} placeholder="Withholding Tax CPay" required />
//       <input type="text" value={marriedNameCpay} onChange={(e) => setMarriedNameCpay(e.target.value)} placeholder="Married Name CPay" required />
//       <input type="text" value={childrenDetailCpay} onChange={(e) => setChildrenDetailCpay(e.target.value)} placeholder="Children Detail CPay" required />
//       <input type="text" value={parentsCpay} onChange={(e) => setParentsCpay(e.target.value)} placeholder="Parents CPay" required />
//       <input type="text" value={disabledPersonCpay} onChange={(e) => setDisabledPersonCpay(e.target.value)} placeholder="Disabled Person CPay" required />
//       <input type="text" value={liUInsuranceEndowmentCpay} onChange={(e) => setLiUInsuranceEndowmentCpay(e.target.value)} placeholder="LiU Insurance Endowment CPay" required />
//       <input type="text" value={healthInsuranceAccidentCpay} onChange={(e) => setHealthInsuranceAccidentCpay(e.target.value)} placeholder="Health Insurance Accident CPay" required />
//       <input type="text" value={parentLiUResuranceCpay} onChange={(e) => setParentLiUResuranceCpay(e.target.value)} placeholder="Parent LiU Resurance CPay" required />
//       <input type="text" value={annuityInsuranceCpay} onChange={(e) => setAnnuityInsuranceCpay(e.target.value)} placeholder="Annuity Insurance CPay" required />
//       <input type="text" value={rmfCpay} onChange={(e) => setRmfCpay(e.target.value)} placeholder="RMF CPay" required />
//       <input type="text" value={ssfSuperSavingFundCpay} onChange={(e) => setSsfSuperSavingFundCpay(e.target.value)} placeholder="SSF Super Saving Fund CPay" required />
//       <input type="text" value={providentFundPvdCpay} onChange={(e) => setProvidentFundPvdCpay(e.target.value)} placeholder="Provident Fund PVD CPay" required />
//       <input type="text" value={donationsCpay} onChange={(e) => setDonationsCpay(e.target.value)} placeholder="Donations CPay" required />
//       <input type="text" value={resumeImage} onChange={(e) => setResumeImage(e.target.value)} placeholder="Resume Image" required />
//       <input type="text" value={transcriptImage} onChange={(e) => setTranscriptImage(e.target.value)} placeholder="Transcript Image" required />
//       <input type="text" value={certificateImage} onChange={(e) => setCertificateImage(e.target.value)} placeholder="Certificate Image" required />
//       <input type="text" value={houseRegistrationImage} onChange={(e) => setHouseRegistrationImage(e.target.value)} placeholder="House Registration Image" required />
//       <input type="text" value={idCardImage} onChange={(e) => setIdCardImage(e.target.value)} placeholder="ID Card Image" required />
//       <input type="text" value={personalImage} onChange={(e) => setPersonalImage(e.target.value)} placeholder="Personal Image" required />
//       <input type="text" value={photoWithIdImage} onChange={(e) => setPhotoWithIdImage(e.target.value)} placeholder="Photo with ID Image" required />
//       <input type="text" value={bankBookImage} onChange={(e) => setBankBookImage(e.target.value)} placeholder="Bank Book Image" required />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default AddDataForm;
