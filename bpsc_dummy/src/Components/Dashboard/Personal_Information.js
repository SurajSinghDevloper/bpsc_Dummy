import React from 'react'

const Personal_Information = () => {
    return (
        <>
            <div className=' '>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Firstname:</label>
                    <input type="text" placeholder="Firstname" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Father:</label>
                    <input type="text" placeholder="Father" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Gender :</label>
                    <input type="text" placeholder="Gender" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Maritial Status:</label>
                    <input type="text" placeholder="Maritial Status" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">State:</label>
                    <input type="text" placeholder="State" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">City / Village:</label>
                    <input type="text" placeholder="City / Village" className=" p-2 border rounded-md" />
                </div>
                {/* <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Category:</label>
                    <input type="text" placeholder="category" className=" p-2 border rounded-md" />
                </div> */}
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">State Of Domicile:</label>
                    <input type="text" placeholder="State Of Domicile" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Prefered Language:</label>
                    <input type="text" placeholder="Prefered Language" className=" p-2 border rounded-md" />
                </div>
            </div>
            <div className=' '>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Middlename:</label>
                    <input type="text" placeholder="Middlename" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4 ">
                    <label className="w-full text-right mr-2">Mother:</label>
                    <input type="text" placeholder="Mother" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Category:</label>
                    <input type="text" placeholder="Category" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Mobile :</label>
                    <input type="text" placeholder="Mobile" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">District:</label>
                    <input type="text" placeholder="District" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Address:</label>
                    <input type="text" placeholder="Address" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Disablity :</label>
                    <input type="text" placeholder="Disablity" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Permanent Address:</label>
                    <input type="text" placeholder="Permanent Address" className=" p-2 border rounded-md" />
                </div>
            </div>
            <div className=' '>
                <div className="flex items-center mb-4 ">
                    <label className="w-full text-right mr-2">Lastname:</label>
                    <input type="text" placeholder="Lastname" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">E-mail Id:</label>
                    <input type="text" placeholder="E-mail Id" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4 ">
                    <label className="w-1/2 text-right mr-2">Nationality:</label>

                    <select className="w-60 p-2 border rounded-md">
                        <option>Select</option>
                        <option>Indian</option>
                        <option>NRI</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Aadhar No:</label>
                    <input type="text" placeholder="Aadhar No" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Pincode:</label>
                    <input type="text" placeholder="Pincode" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4 ">
                    <label className="w-1/2 text-right ">Religion:</label>
                    <select className="w-60 p-2 border rounded-md">
                        <option>Select</option>
                        <option>Hindu</option>
                        <option>Muslim</option>
                        <option>Christian</option>
                        <option>Buddhist</option>
                        <option>Sikh</option>
                        <option>Jewish</option>
                        <option>Baha'i</option>
                        <option>Jain</option>
                        <option>Shinto</option>
                        <option>Taoist</option>
                        <option>Zoroastrian</option>
                        <option>Other</option>

                    </select>
                </div>
                <div className="flex items-center mb-4 ">
                    <label className="w-full text-right mr-2">Identification marks:</label>
                    <input type="text" placeholder="Identification marks" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Do you belong <br/>to City/Town/Village:</label>
                    <input type="text" placeholder="Do you belong to City/Town/Village" className=" p-2 border rounded-md" />
                </div>
            </div>
        </>
    )
}

export default Personal_Information