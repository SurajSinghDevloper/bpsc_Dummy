import React, { useContext, useState } from 'react';
import { MyContext } from '../../ContextApis/MyContext';

const Candidate_Documents = () => {
    const { userInfo } = useContext(MyContext);

    const [uploadedFiles, setUploadedFiles] = useState({
        'Photo Of Candidate': null,
        'Signature Of Candidate': null,
        'Aadhar Card': null,
        'Domicile Certificate': null,
        'Income Certificate': null,
        'Cast Certificate': null,
        'Birt Certificate': null,
        'Other Relivant Doc': null,
    });

    const handleFileChange = async (key, event) => {
        try {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('pdf', file);
            formData.append('documentType', key);
            formData.append('username', userInfo.username);

            const Authorization = localStorage.getItem('token');
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/save-doc`, {
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
            const documentName = uploadedFiles[key];

            console.log(documentName)
            if (!documentName) {
                console.error(`No document found for ${key}`);
                return;
            }

            const Authorization = localStorage.getItem('token');
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/files/view/${documentName}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Authorization}`,
                },
            });

            if (response.ok) {
                const fileContent = await response.blob();
                const fileURL = URL.createObjectURL(fileContent);
                window.open(fileURL, '_blank');
            } else {
                console.error(`Failed to retrieve ${key} document`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const deleteFile = async (key) => {
        try {
            const Authorization = localStorage.getItem('token');
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/delete-doc?documentType=${key}&username=${userInfo.username}`, {
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
                <thead className='border'>
                    <tr>
                        <td className='text-lg border text-center'>Documents</td>
                        <td className='text-lg border text-center'>Upload Document in PDF</td>
                        <td className='text-lg border text-center'>View Document</td>
                    </tr>
                </thead>
                <tbody className='mt-2'>
                    {Object.keys(uploadedFiles).map((key) => (
                        <tr key={key} className='border'>
                            <td className='text-lg border text-center'>{key}</td>
                            <td className='border'>
                                <input type='file' onChange={(e) => handleFileChange(key, e)} className='w-full' />
                            </td>
                            <td className='border'>
                                {uploadedFiles[key] && (
                                    <div className='flex flex-row justify-between p-2'>
                                        <button className='bg-green-400 text-white p-1 w-1/2 mr-2' onClick={() => displayFile(key)}>View</button>

                                        <button className='bg-red-400 text-white p-1 w-1/2' onClick={() => deleteFile(key)}>Delete</button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Candidate_Documents;
