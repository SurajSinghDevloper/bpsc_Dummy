import React from 'react';
import PersonLogo from '../../Assets/person.png';
import Personal_Information from './Personal_Information';
import Qualification_Information from './Qualification_Information';
import Candidate_Documents from './Candidate_Documents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


const Profile = (props) => {
  return (
    <>
        
      <div className="container p-5 ">
        {/* Page header */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:'10px'
        }}>
          <IDCard />
        </div>
        <hr className='text-black' />
        <div className='flex justify-between items-center bg-slate-200 p-2'>
          <h1 className='text-2xl'>Profile Information</h1>
          <div className='space-x-2'>
            <button className='bg-green-400 rounded-md p-2 text-white text-xl'><FontAwesomeIcon icon={faSave} className='text-xl mr-2' />Save</button>
            <button className='bg-green-700 rounded-md p-2 text-white text-xl'><FontAwesomeIcon icon={faEdit} className='text-xl mr-2' />Edit</button>
            <button className='bg-red-400 rounded-md p-2 text-white text-xl'><FontAwesomeIcon icon={faTrash} className='text-xl mr-2' />Delete</button>
          </div>
        </div>
        <div className='mt-5' style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>

          <Personal_Information />


        </div>

        <hr className='text-black mb-2' />
        <div className='flex justify-between items-center bg-slate-200 p-2'>
        <h1 className='text-2xl'>Qualification Information</h1>
          <div className='space-x-2'>
            <button className='bg-green-400 rounded-md p-2 text-white text-xl'><FontAwesomeIcon icon={faSave} className='text-xl mr-2' />Save</button>
            <button className='bg-green-700 rounded-md p-2 text-white text-xl'><FontAwesomeIcon icon={faEdit} className='text-xl mr-2' />Edit</button>
            <button className='bg-red-400 rounded-md p-2 text-white text-xl'><FontAwesomeIcon icon={faTrash} className='text-xl mr-2' />Delete</button>
          </div>
        </div>
 
        <div className='mt-5' >
          <Qualification_Information />
        </div>
        <hr className='text-black mt-3' />
        <div className='flex justify-between items-center bg-slate-200 p-2'>
        <h1 className='text-2xl'>Candidate Documents</h1>
          <div className='space-x-2'>
            <button className='bg-green-400 rounded-md p-2 text-white text-xl'><FontAwesomeIcon icon={faSave} className='text-xl mr-2' />Save</button>
            <button className='bg-green-700 rounded-md p-2 text-white text-xl'><FontAwesomeIcon icon={faEdit} className='text-xl mr-2' />Edit</button>
            <button className='bg-red-400 rounded-md p-2 text-white text-xl'><FontAwesomeIcon icon={faTrash} className='text-xl mr-2' />Delete</button>
          </div>
        </div>
        <div className='mt-5' >
          <Candidate_Documents />
        </div>
        {/* Footer */}
        <footer className="text-center text-gray-500">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
  
    </>

  );
};

const IDCard = () => {
  return (
    <div className="w-11/12  bg-white rounded-lg flex justify-between ">
      <div>
        <img className="w-48 h-32 rounded-full mx-auto" src={PersonLogo} alt="Profile" />
        <div className="text-center mt-4">
          <div className="font-bold text-xl">John Doe</div>
          <p className="text-gray-700 text-base">Username: 123456</p>
          <p className="text-gray-700 text-base">Dob: 10/12/1999</p>
        </div>
      </div>
      <div className=' container  mt-14'>
        <form className=' w-full flex '>
          <div className=' w-full'>
            <div className="flex items-center mb-4 ">
              <label className="w-1/2 text-right mr-2">Firstname:</label>
              <p type="text" className=" p-2 border rounded-md" />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/2 text-right mr-2">Middlename:</label>
              <p type="text" className=" p-2 border rounded-md" />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/2 text-right mr-2">Lastname:</label>
              <p type="text" className="p-2 border rounded-md" />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/2 text-right mr-2">E-mail ID:</label>
              <p type="text" className="p-2 border rounded-md" />
            </div>
            {/* Add more fields similarly */}
          </div>

          <div className=' '>
            <div className="flex items-center mb-4">
              <label className="w-full text-right mr-2">Father:</label>
              <p type="text" className=" p-2 border rounded-md" />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-full text-right mr-2">Mother :</label>
              <p type="text" className=" p-2 border rounded-md" />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-full text-right mr-2">Mobile:</label>
              <p type="text" className=" p-2 border rounded-md" />
            </div>
            <div className="flex items-center mb-4 ">
              <label className="w-full text-right mr-2">Aadhar No:</label>
              <p type="text" className=" p-2 border rounded-md" />
            </div>



            {/* Add more fields similarly */}
          </div>
        </form>

      </div>

    </div>
  );
};

export default Profile;
