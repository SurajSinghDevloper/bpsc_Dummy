import React, { useContext, useState } from 'react'
import { MyContext } from '../../ContextApis/MyContext';

const Candidate_Documents = () => {
    const { userInfo } = useContext(MyContext);
    
    const [uploadedFiles, setUploadedFiles] = useState({
        'aadhar': null,
        'domicile': null,
        'income': null,
        'cast': null,
        'birth': null,
        'other':null
    });
    const handleFileChange = async (key, event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('pdf', file);
        formData.append('documentType', key);
        formData.append('username', userInfo.username);
    
        try {
            console.log(formData)
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
    
    const displayFile = async (key) => {
        try {
            const Authorization = localStorage.getItem('token');
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/qualification-types/display?documentType=${key}&username=${userInfo.username}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Authorization}`,
                },
            });
    
            if (response.ok) {
                // Assuming the backend returns the file content
                const fileContent = await response.blob();
                const fileURL = URL.createObjectURL(fileContent);
                window.open(fileURL, '_blank');
            } else {
                console.error('Failed to retrieve file');
            }
        } catch (error) {
            console.error('Error:', error);
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
                    <tr >
                        <td className='text-lg border text-center'>Documents</td>
                        <td className='text-lg border text-center'>Upload Document in PDF</td>
                        <td className='text-lg border text-center'>View Document</td>

                    </tr>
                </thead>
                <tbody className='mt-2'>
                    <tr className='border'>
                        <td className='text-lg border text-center'>Aadhar Of Candidate</td>

                        <td className='border '><input type='file' onChange={handleFileChange}  className='w-full' /></td>
                        <td className='border '><input type='text' className='w-full' /></td>

                    </tr>
                    <tr className='border '>
                        <td className='text-lg border text-center'>Domicile Certificate</td>

                        <td className='border '><input type='file' onChange={handleFileChange}  className='w-full' /></td>
                        <td className='border '><input type='text' className='w-full' /></td>

                    </tr>
                    <tr className='border '>
                        <td className='text-lg border text-center'>Income Certificate</td>

                        <td className='border '><input type='file' onChange={handleFileChange}  className='w-full' /></td>
                        <td className='border '><input type='text' className='w-full' /></td>

                    </tr>
                    <tr className='border '>
                        <td className='text-lg border text-center'>Cast Certificate</td>

                        <td className='border '><input type='file' onChange={handleFileChange}  /></td>
                        <td className='border '><input type='text' /></td>

                    </tr>
                    <tr>
                        <td className='text-lg border text-center'>Birth Certificate</td>

                        <td className='border '><input type='file' onChange={handleFileChange}  /></td>
                        <td className='border '><input type='text' /></td>

                    </tr>
                    <tr>
                        <td className='text-lg border text-center'>Other Certificate</td>

                        <td className='border '><input type='file' onChange={handleFileChange}  /></td>
                        <td className='border '><input type='text' /></td>

                    </tr>
                </tbody>

            </table>
        </>
    )
}

export default Candidate_Documents