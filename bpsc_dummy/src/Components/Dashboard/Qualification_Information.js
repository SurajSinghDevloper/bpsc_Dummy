import React from 'react'

const Qualification_Information = () => {
    return (
        <>
            <table className='w-full'>
                <thead className='border '>
                    <tr >
                        <td className='text-lg border text-center'>Qualification Name</td>
                        <td className='text-lg border text-center'>Qualification <br/> (Specialization)</td>
                        <td className='text-lg border text-center'>Name of School <br/>University</td>
                        <td className='text-lg border text-center'>Marks Score</td>
                        <td className='text-lg border text-center'>Year of Completion</td>
                    </tr>
                </thead>
                <tbody className='mt-2'>
                <tr className='border'>
                    <td className='border p-1'><input type='text'  className='text-center' value={10}/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                </tr>
                <tr className='border '>
                    <td className='border p-1'><input type='text' className='text-center' value={12}/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                </tr>
                <tr className='border '>
                    <td className='border p-1'><input type='text' className='text-center' value={'UG'}/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                </tr>
                <tr className='border '>
                    <td className='border p-1'><input type='text' className='text-center' value={'PG'}/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                </tr>
                <tr className='border '>
                    <td className='border p-1'><input type='text' className='text-center' value={'OTHER'} /></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>
                </tr>
                </tbody>

            </table>
            <div className='container'>
                <div className='bg-slate-200' >
                    <h3 className='text-2xl text-center text-gray-500 p-2'>Accademic Documents</h3>
                    <hr className='w-11/12 ml-12 text-center'/>
                </div>
                <div>
                <table className='w-full'>
                <thead className='border '>
                    <tr >
                        <td className='text-lg border text-center'>Qualification Name</td>
                        <td className='text-lg border text-center'>Marks Sheet Upload</td>
                        <td className='text-lg border text-center'>View Uploded Documents</td>
                    </tr>
                </thead>
                <tbody className='mt-2'>
                <tr className='border'>
                    <td className='border p-1'><input type='text'  className='text-center' value={10}/></td>
                    <td className='border '><input type='file' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>

                </tr>
                <tr className='border '>
                    <td className='border p-1'><input type='text' className='text-center' value={12}/></td>
                    <td className='border '><input type='file' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>

                </tr>
                <tr className='border '>
                    <td className='border p-1'><input type='text' className='text-center' value={'UG'}/></td>
                    <td className='border '><input type='file' className='w-full'/></td>
                    <td className='border '><input type='text' className='w-full'/></td>

                </tr>
                <tr className='border '>
                    <td className='border p-1'><input type='text' className='text-center' value={'PG'}/></td>
                    <td className='border '><input type='file' /></td>
                    <td className='border '><input type='text' /></td>

                </tr>
                <tr className='border '>
                    <td className='border p-1'><input type='text' className='text-center' value={'OTHER'} /></td>
                    <td className='border '><input type='file' /></td>
                    <td className='border '><input type='text' /></td>

                </tr>
                </tbody>

            </table>
                </div>
            </div>
        </>
    )
}

export default Qualification_Information