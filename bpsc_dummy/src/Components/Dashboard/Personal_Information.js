import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { personalInfoAction } from '../../Actions/Users/PersonalInfoAction';




const Personal_Information = ({ formData, onFormChange, setFormData }) => {
    const [isDisability, setIsDisability] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const info = useSelector((state) => state.personalInfo);
    console.log(info.userProfile)







    const handleDisabilityChange = (event) => {
        const value = event.target.value === 'true';
        setIsDisability(value);

        if (value) {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }
        handleInputChange('isDisability', value);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleCategoryChange = (event) => {
        handleInputChange('category', event.target.value);
    };

    const handleMaritalStatus = (event) => {
        handleInputChange('maritalStatus', event.target.value)
    }

    const handleNationalityChange = (event) => {
        handleInputChange('nationality', event.target.value);
    };

    const handleReligionChange = (event) => {
        handleInputChange('religion', event.target.value);
    };

    const handleBelongToChange = (event) => {
        handleInputChange('belongTo', event.target.value);
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };
    const handleGenderChange = (event) => {
        handleInputChange('belongTo', event.target.value);
    };
    return (
        <>
            <div className=' '>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Firstname:</label>
                    <input type="text"
                        name='firstname'
                        value={formData.firstname || info.userProfile.firstname}
                        onChange={(e) => onFormChange('firstname', e.target.value)}
                        placeholder="Firstname"
                        className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Father:</label>
                    <input type="text"
                        name='father'
                        value={formData.father||info.userProfile.fname}
                        onChange={(e) => onFormChange('father', e.target.value)}
                        placeholder="Father"
                        className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/2 text-right mr-2">Gender :</label>
                       
                         <select className="w-60 p-2 border rounded-md" onChange={handleGenderChange} value={formData.gender||info.userProfile.gender}>
                        <option >Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/2 text-right mr-2">Maritial Status:</label>
                    <select className="w-60 p-2 border rounded-md" onChange={handleMaritalStatus} value={formData.maritalStatus||info.userProfile.gender}>
                        <option >Select</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Widows">Widows</option>
                        <option value="Divosed">Divosed</option>
                    </select>
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">State:</label>
                    <input type="text"
                        name='state'
                        value={formData.state||info.userProfile.state}
                        onChange={(e) => onFormChange('state', e.target.value)}
                        placeholder="State" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">City / Village:</label>
                    <input type="text"
                        name='city'
                        value={formData.city||info.userProfile.cityOrVillage}
                        onChange={(e) => onFormChange('city', e.target.value)}
                        placeholder="City / Village" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">State Of Domicile:</label>
                    <input type="text"
                        name='stateOfDomicile'
                        value={formData.stateOfDomicile||info.userProfile.domicile}
                        onChange={(e) => onFormChange('stateOfDomicile', e.target.value)}
                        placeholder="State Of Domicile" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Prefered Language:</label>
                    <input type="text"
                        name='preferredLanguage'
                        value={formData.preferredLanguage||info.userProfile.pLanguage}
                        onChange={(e) => onFormChange('preferredLanguage', e.target.value)}
                        placeholder="Prefered Language" className=" p-2 border rounded-md" />
                </div>
            </div>
            <div className=' '>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Middlename:</label>
                    <input type="text"
                        name='middlename'
                        value={formData.middlename||info.userProfile.middlename}
                        onChange={(e) => onFormChange('middlename', e.target.value)}
                        placeholder="Middlename" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4 ">
                    <label className="w-full text-right mr-2">Mother:</label>
                    <input type="text"
                        name='mother'
                        value={formData.mother||info.userProfile.mname}
                        onChange={(e) => onFormChange('mother', e.target.value)}
                        placeholder="Mother" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/2 text-right mr-2">Category:</label>
                    <select className="w-60 p-2 border rounded-md" onChange={handleCategoryChange} value={formData.category||info.userProfile.category}>
                        <option >Select</option>
                        <option value={"GEN"}>GEN</option>
                        <option value={"ST"}>ST</option>
                        <option value={"OBC"}>OBC</option>
                        <option value={"SC"}>SC</option>
                        <option value={"OTHER"}>OTHER</option>
                    </select>
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Mobile :</label>
                    <input type="text"
                        name='mobile'
                        value={formData.mobile||info.userProfile.mobile}
                        onChange={(e) => onFormChange('mobile', e.target.value)}
                        placeholder="Mobile" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">District:</label>
                    <input type="text"
                        name='district'
                        value={formData.district||info.userProfile.district}
                        onChange={(e) => onFormChange('district', e.target.value)}
                        placeholder="District" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Address:</label>
                    <input type="text"
                        name='address'
                        value={formData.address||info.userProfile.address}
                        onChange={(e) => onFormChange('address', e.target.value)}
                        placeholder="Address" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/2 text-right mr-2">Disablity :</label>
                    {/* <input type="text" placeholder="Disablity" className=" p-2 border rounded-md" /> */}
                    <select className="w-60 p-2 border rounded-md" onChange={handleDisabilityChange} value={formData.isDisability.toString()||info.userProfile.isDisability}>
                        <option >Select</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="absolute bg-slate-400 text-white p-8 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Disability Information</h2>
                            <div className='flex flex-row'>
                                <div className="mb-4 mr-2">
                                    <label htmlFor="input1" className="block mb-1">
                                        Disability Type:
                                    </label>
                                    <input
                                        type="text"
                                        id="disabilityType"
                                        value={formData.disabilityType||info.userProfile.disabilityType}
                                        onChange={(e) => onFormChange('disabilityType', e.target.value)}
                                        className="w-full p-2 border rounded-md"
                                    />
                                </div>
                                <div className="mb-4 mr-2">
                                    <label htmlFor="input2" className="block mb-1">
                                        Disability Remark:
                                    </label>
                                    <input
                                        type="text"
                                        id="disabilityRemark"
                                        value={formData.disabilityRemark||info.userProfile.disabilityRemark}
                                        onChange={(e) => onFormChange('disabilityRemark', e.target.value)}
                                        className="w-full p-2 border rounded-md"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="input3" className="block mb-1">
                                        Document:
                                    </label>
                                    <input
                                        type="file"
                                        id="document"
                                        className="p-1 border rounded-md"
                                        onChange={(e) => onFormChange('document', e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <button
                                    className="bg-green-500 text-white p-2 rounded-md hover:bg-lime-700 w-1/2"
                                    onClick={handleModalClose}
                                >
                                    Save
                                </button>
                                <button
                                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-48"
                                    onClick={handleModalClose}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Permanent Address:</label>
                    <input type="text"
                        id='permanentAddress'
                        value={formData.permanentAddress||info.userProfile.permanentAddress}
                        onChange={(e) => onFormChange('permanentAddress', e.target.value)}
                        placeholder="Permanent Address" className=" p-2 border rounded-md" />
                </div>
            </div>
            <div className=' '>
                <div className="flex items-center mb-4 ">
                    <label className="w-full text-right mr-2">Lastname:</label>
                    <input type="text"
                        id='lastname'
                        value={formData.lastname||info.userProfile.lastname}
                        onChange={(e) => onFormChange('lastname', e.target.value)}
                        placeholder="Lastname" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">E-mail Id:</label>
                    <input type="text"
                        id='email'
                        value={formData.email||info.userProfile.email}
                        onChange={(e) => onFormChange('email', e.target.value)}
                        placeholder="E-mail Id" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4 ">
                    <label className="w-1/2 text-right mr-2">Nationality:</label>

                    <select className="w-60 p-2 border rounded-md" onChange={handleNationalityChange} value={formData.nationality||info.userProfile.nationality}>
                        <option value="">Select</option>
                        <option value="Indian">Indian</option>
                        <option value="NRI">NRI</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Aadhar No:</label>
                    <input type="text"
                        id='aadharNo'
                        value={formData.aadharNo||info.userProfile.aadharNo}
                        onChange={(e) => onFormChange('aadharNo', e.target.value)}
                        placeholder="Aadhar No" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-full text-right mr-2">Pincode:</label>
                    <input type="text"
                        id='pincode'
                        value={formData.pincode||info.userProfile.pincode}
                        onChange={(e) => onFormChange('pincode', e.target.value)}
                        placeholder="Pincode" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4 ">
                    <label className="w-1/2 text-right ">Religion:</label>
                    <select className="w-60 p-2 border rounded-md" onChange={handleReligionChange} value={formData.religion||info.userProfile.religion}>
                        <option>Select</option>
                        <option value={"Hindu"}>Hindu</option>
                        <option value={"Muslim"}>Muslim</option>
                        <option value={"Christian"}>Christian</option>
                        <option value={"Buddhist"}>Buddhist</option>
                        <option value={"Sikh"}>Sikh</option>
                        <option value={"Other"}>Other</option>

                    </select>
                </div>
                <div className="flex items-center mb-4 ">
                    <label className="w-full text-right mr-2">Identification marks:</label>
                    <input type="text"
                        id='identificationMarks'
                        value={formData.identificationMarks||info.userProfile.identification}
                        onChange={(e) => onFormChange('identificationMarks', e.target.value)}
                        placeholder="Identification marks" className=" p-2 border rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/2 text-right mr-2">Do you belong <br />to City/Town/Village:</label>
                    {/* <input type="text" placeholder="Do you belong to City/Town/Village" className=" p-2 border rounded-md" /> */}
                    <select className="w-60 p-2 border rounded-md" onChange={handleBelongToChange} value={formData.belongTo||info.userProfile.locationType}>
                        <option >Select</option>
                        <option value="City">City</option>
                        <option value="Town">Town</option>
                        <option value="Village">Village</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Personal_Information