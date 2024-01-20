import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../ContextApis/MyContext';

const Qualification_Information = ({handleFormSubmit}) => {
    const { userInfo } = useContext(MyContext);
    const [qualificationData, setQualificationData] = useState({
        '10': { name: '10', specialization: '', school: '', marks: '', year: '' },
        '12': { name: '12', specialization: '', school: '', marks: '', year: '' },
        'UG': { name: 'UG', specialization: '', school: '', marks: '', year: '' },
        'PG': { name: 'PG', specialization: '', school: '', marks: '', year: '' },
        'OTHER': { name: 'OTHER', specialization: '', school: '', marks: '', year: '' },
    });
    const [uploadedFiles, setUploadedFiles] = useState({
        '10': null,
        '12': null,
        'UG': null,
        'PG': null,
        'OTHER': null,
    });

    useEffect(() =>{
        if(Object.keys(userInfo).length>0){
            const updatedInfo = {
                '10': userInfo.qualificationDoc.tenthDoc,
                '12': userInfo.qualificationDoc.twelethDoc,
                'UG': userInfo.qualificationDoc.ugDoc,
                'PG': userInfo.qualificationDoc.pgDoc,
                'OTHER': userInfo.qualificationDoc.otherDoc,  
            }
    
            setUploadedFiles(updatedInfo)
        }
    
    },[userInfo])

    useEffect(() => {
        if (userInfo.qualificationType && userInfo.qualificationType.length > 0) {
            const initialQualificationData = {};
            // const initialAcademicDocuments = {};

            userInfo.qualificationType.forEach(({ qualificationId, name, specialization, school, marks, year }) => {
                initialQualificationData[qualificationId] = {
                    name: name,
                    specialization: specialization,
                    school: school,
                    marks: marks,
                    year: year,
                };

                // initialAcademicDocuments[qualificationId] = {
                //     name: name,
                //     marksSheet: null,
                //     viewDocuments: '',
                // };
            });

            setQualificationData(initialQualificationData);
            // setAcademicDocuments(initialAcademicDocuments);
        }
    }, [userInfo.qualificationType]);






    const handleQualificationChange = (key, field, event) => {
        setQualificationData((prevData) => ({
            ...prevData,
            [key]: {
                ...prevData[key],
                [field]: event.target.value,
            },
        }));
    };




    if (handleFormSubmit === true) {
        const handleUserQuali = async () => {
            const requestData = Object.values(qualificationData).map(({ name, specialization, school, marks, year }) => ({
                name,
                specialization,
                school,
                marks,
                year,
            }));

            try {
                const Authorization = localStorage.getItem("token");
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/qualification-types/qualification?username=${userInfo.username}`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${Authorization}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                });
                if (response.ok) {
                    console.log(response)
                } else {

                    console.error('API request failed');
                }
            } catch (error) {

                console.error('Error:', error);
            }
        }

        handleUserQuali();
        return;
    }



const handleFileChange = async (key, event) => {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('pdf', file);
      formData.append('documentType', key);
      formData.append('username', userInfo.username);
  
      const Authorization = localStorage.getItem('token');
  
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/qualification-types/save`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${Authorization}`,
        },
        body: formData,
      });
  
      if (response.ok) {
        const fileName = await response.text();
        setUploadedFiles((prevFiles) => ({
          ...prevFiles,
          [key]: fileName,
        }));
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const displayFile = async (key, value) => {
    console.log(value)
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/files/view/${value}`, {
            method: 'GET',
        });

        if (response.ok) {
            const fileContent = await response.blob();

            if (fileContent.type === 'application/pdf') {
                const fileURL = URL.createObjectURL(fileContent);
                window.open(fileURL, '_blank');
            } else {
                console.error('Invalid file format. Only PDF files can be viewed.');
            }
        } else {
            console.error(`Failed to retrieve ${key} document`);

        }
    
};




const deleteFile = async (key) => {
    try {
        const Authorization = localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/qualification-types/delete?documentType=${key}&username=${userInfo.username}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${Authorization}`,
            },
        });

        if (response.ok) {
            setUploadedFiles((prevFiles) => ({
                ...prevFiles,
                [key]: null,
            }));
            console.log('File deleted successfully');
        } else {
            console.error('Failed to delete file');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

    return (
        <>
            <table className='w-full'>
                <thead className='border '>
                    <tr>
                        <td className='text-lg border text-center'>Qualification Name</td>
                        <td className='text-lg border text-center'>Qualification <br /> (Specialization)</td>
                        <td className='text-lg border text-center'>Name of School <br />University</td>
                        <td className='text-lg border text-center'>Marks Score %</td>
                        <td className='text-lg border text-center'>Year of Completion</td>
                    </tr>
                </thead>
                <tbody className='mt-2'>
                    {Object.keys(qualificationData).map(key => (
                        <tr key={key} className='border'>
                            <td className='border p-1'>
                                <input
                                    type='text'
                                    className='text-center'
                                    value={qualificationData[key].name}
                                    readOnly
                                />
                            </td>
                            <td className='border'>
                                <input
                                    type='text'
                                    className='w-full'
                                    value={qualificationData[key].specialization}
                                    onChange={(e) => handleQualificationChange(key, 'specialization', e)}
                                />
                            </td>
                            <td className='border'>
                                <input
                                    type='text'
                                    className='w-full'
                                    value={qualificationData[key].school}
                                    onChange={(e) => handleQualificationChange(key, 'school', e)}
                                />
                            </td>
                            <td className='border'>
                                <input
                                    type='number'
                                    className='w-full'
                                    value={qualificationData[key].marks}
                                    onChange={(e) => handleQualificationChange(key, 'marks', e)}
                                />
                            </td>
                            <td className='border'>
                                <input
                                    type='date'
                                    className='w-full'
                                    value={qualificationData[key].year}
                                    onChange={(e) => handleQualificationChange(key, 'year', e)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='container'>
                <div className='bg-slate-200' >
                    <h3 className='text-2xl text-center text-gray-500 p-2'>Accademic Documents</h3>
                    <hr className='w-11/12 ml-12 text-center' />
                </div>
                <div>
                <table className='w-full'>
            <thead className='border'>
                <tr>
                    <td className='text-lg border text-center'>Qualification Name</td>
                    <td className='text-lg border text-center'>Marks Sheet Upload In only PDF</td>
                    <td className='text-lg border text-center'>View Uploaded Documents</td>
                    <td className='text-lg border text-center'>Delete Document</td>
                </tr>
            </thead>
            <tbody className='mt-2'>

            {Object.keys(uploadedFiles).map((key) => (
    <tr key={key} className='border'>
        <td className='border p-1'>
            <input type='text' className='text-center' value={key} readOnly />
        </td>
        <td className='border'>
            <input type='file' className='w-full' onChange={(e) => handleFileChange(key, e)} />
        </td>
        <td className='border justify-center'>
            {uploadedFiles[key] && (
                <button className='bg-green-400 text-white p-1 w-full'  onClick={() => displayFile(key, uploadedFiles[key])}>View</button>
            )}
        </td>
        <td className='border'>
            <button onClick={() => deleteFile(key)}>Delete</button>
        </td>
    </tr>
))}

            </tbody>
        </table>
                    {/* <button className='p-5 bg-slate-400' onClick={handleFormSubmit}>SUBMIT FORM</button> */}
                </div>

            </div>
        </>
    )
}

export default Qualification_Information