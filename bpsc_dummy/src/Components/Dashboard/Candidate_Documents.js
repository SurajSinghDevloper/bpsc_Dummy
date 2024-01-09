import React from 'react'

const Candidate_Documents = () => {
    return (
        <>                <table className='w-full'>
            <thead className='border '>
                <tr >
                    <td className='text-lg border text-center'>Documents</td>
                    <td className='text-lg border text-center'>Upload</td>
                    <td className='text-lg border text-center'>View Document</td>
                    
                </tr>
            </thead>
            <tbody className='mt-2'>
                <tr className='border'>
                <td className='text-lg border text-center'>Aadhar Of Candidate</td>
                    
                    <td className='border '><input type='file' className='w-full' /></td>
                    <td className='border '><input type='text' className='w-full' /></td>

                </tr>
                <tr className='border '>
                <td className='text-lg border text-center'>Domicile Certificate</td>
                    
                    <td className='border '><input type='file' className='w-full' /></td>
                    <td className='border '><input type='text' className='w-full' /></td>

                </tr>
                <tr className='border '>
                <td className='text-lg border text-center'>Income Certificate</td>
                    
                    <td className='border '><input type='file' className='w-full' /></td>
                    <td className='border '><input type='text' className='w-full' /></td>

                </tr>
                <tr className='border '>
                <td className='text-lg border text-center'>Cast Certificate</td>
                    
                    <td className='border '><input type='file' /></td>
                    <td className='border '><input type='text' /></td>

                </tr>
                <tr>
                <td className='text-lg border text-center'>Birth Certificate</td>
                    
                    <td className='border '><input type='file' /></td>
                    <td className='border '><input type='text' /></td>

                </tr>
                <tr>
                <td className='text-lg border text-center'>Other Certificate</td>
                    
                    <td className='border '><input type='file' /></td>
                    <td className='border '><input type='text' /></td>

                </tr>
            </tbody>

        </table></>
    )
}

export default Candidate_Documents