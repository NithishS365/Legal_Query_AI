import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Fir() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const firRef = useRef();
  const [formData, setFormData] = useState(null);

  const onSubmit = async (data) => {
    setFormData(data); // Save the form data
    await new Promise((resolve) => setTimeout(resolve, 100)); // Allow re-render of hidden div

const input = firRef.current;
const canvas = await html2canvas(input, {
  scrollY: -window.scrollY
});
const imgData = canvas.toDataURL('image/png');
console.log("Image Data URL:", imgData);
const pdf = new jsPDF();
const imgProps = pdf.getImageProperties(imgData);
const pdfWidth = pdf.internal.pageSize.getWidth();
const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
pdf.save('FIR_Form.pdf');
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">F.I.R Submission Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input {...register('fullName', { required: true })} placeholder="Full Name" className="input" />
            <input {...register('fatherName', { required: true })} placeholder="Father's / Husband's Name" className="input" />
            <select {...register('gender', { required: true })} className="input">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input {...register('age', { required: true })} placeholder="Age" className="input" />
            <input {...register('address', { required: true })} placeholder="Full Address" className="input col-span-2" />
            <input {...register('phone', { required: true })} placeholder="Mobile Number" className="input" />
            <input {...register('email', { required: true })} placeholder="Email ID" className="input" />
            <input {...register('occupation', { required: true })} placeholder="Occupation / Place of Work" className="input col-span-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input {...register('date', { required: true })} type="date" className="input" />
            <input {...register('time', { required: true })} type="time" className="input" />
            <input {...register('place', { required: true })} placeholder="Place of Occurrence" className="input col-span-2" />
            <input {...register('district', { required: true })} placeholder="District" className="input" />
            <input {...register('station', { required: true })} placeholder="Police Station" className="input" />
            <input {...register('offenceType', { required: true })} placeholder="Offence Type" className="input col-span-2" />
            <textarea {...register('offenceDetails', { required: true })} placeholder="Detailed Description of Offence" className="input col-span-2 h-24" />
            <textarea {...register('accused', { required: true })} placeholder="Description of Accused (if known)" className="input col-span-2 h-20" />
            <textarea {...register('property', { required: true })} placeholder="Details of Lost/Damaged Property (if any)" className="input col-span-2 h-20" />
            <textarea {...register('witnesses')} placeholder="Witnesses (if any)" className="input col-span-2 h-20" />
          </div>

          <textarea {...register('statement', { required: true })} placeholder="Chronological Description of Incident" className="input w-full h-28" />

          <div className="flex items-center space-x-4">
            <input {...register('declaration', { required: true })} type="checkbox" className="h-4 w-4" />
            <label className="text-sm">I hereby declare that the above information is true to the best of my knowledge.</label>
          </div>

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-xl w-full font-bold shadow-md">
            Generate PDF
          </button>
        </form>

        {/* Hidden FIR output */}
<div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }} ref={firRef}>
          {formData && (
            <div style={{ padding: '40px', maxWidth: '600px' }}>
              <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>(3)</h2>
              <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
                Sample letter format to lodge a police F.I.R for loss of original certificates
              </h3>
              <p>From</p>
              <p>{formData.fullName}</p>
              <p>{formData.address}</p>
              <p>{formData.phone}</p>
              <p>{formData.email}</p>
              <br />
              <p>To</p>
              <p>The Superintendent of Police</p>
              <p>{formData.station} Police Station, {formData.district}</p>
              <br />
              <p>Respected Sir,</p>
              <p>Sub: Loss of my original degree certificates.</p>
              <p>
                I ({formData.fullName}) hereby humbly inform you that I have lost my degree
                certificates while travelling. I tried all possible ways to recover them but could not find
                them. So I am reaching out to you to file an F.I.R. I have given a paper
                advertisement too to find my certificates. I have attached a copy of it here. Please file F.I.R for
                my loss of certificates (Write certificate numbers using xerox copy or attach them with the
                letter), which will help me apply for duplicate certificates from my university. In
                case any further details are required from my end, you may please contact me through the phone
                number given above.
              </p>
              <p>Thanking you!</p>
              <br />
              <p>Yours faithfully,</p>
              <p>[Signature]</p>
              <p>{formData.fullName}</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .input {
          @apply border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400;
        }
      `}</style>
    </div>
  );
};
