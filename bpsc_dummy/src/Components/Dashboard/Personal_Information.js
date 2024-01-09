import React from 'react'

const Personal_Information = () => {
    return (
        <>
            <div className=' '>
                <div className="flex items-center mb-4 ">
                    <label className="w-1/2 text-right mr-2">Religion:</label>
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
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Category:</label>
                    <input type="text" value="category" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Gender :</label>
                    <input type="text" value="gender" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Address:</label>
                    <input type="text" value="address" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">parmanent Address:</label>
                    <input type="text" value="p_address" className=" p-2 border rounded-md" />
                </div>
                {/* Add more fields similarly */}
            </div>
            <div className=' '>
                <div className="flex items-center mb-4 ">
                    <label className="w-1/2 text-right mr-2">Nationality:</label>
                    
                    <select className="w-60 p-2 border rounded-md">
                    <option>Select</option>
                        <option>Indian</option>
                        <option>NRI</option>
                        <option>Other</option>


                    </select>
                </div>
                <div className="flex items-center mb-4 ">
                    <label className="w-full text-right mr-2">Religion:</label>
                    <input type="text" value="religion" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Category:</label>
                    <input type="text" value="category" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Gender :</label>
                    <input type="text" value="gender" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Address:</label>
                    <input type="text" value="address" className=" p-2 border rounded-md" />
                </div>
                {/* Add more fields similarly */}
            </div>
            <div className=' '>
                <div className="flex items-center mb-4 ">
                    <label className="w-full text-right mr-2">Identification marks:</label>
                    <input type="text" value="religion" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Prefered Language:</label>
                    <input type="text" value="category" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Disablity :</label>
                    <input type="text" value="gender" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">State of Domicile:</label>
                    <input type="text" value="address" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Maritial Status:</label>
                    <input type="text" value="p_address" className=" p-2 border rounded-md" />
                </div>
                {/* Add more fields similarly */}
            </div>
        </>
    )
}

export default Personal_Information