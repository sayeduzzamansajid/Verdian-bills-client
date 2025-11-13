import React, { useContext, useRef} from 'react';
import { AuthContext } from '../Context/AuthContext';
import { NavLink } from 'react-router';
import { updateEmail, updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';

const MyProfile = () => {
    const { user, setUser } = useContext(AuthContext)
    const nameref = useRef();
    const emailref = useRef();
    const photoref = useRef();
    // let [key,setKey]=useState(0);


    const updateuser = (e) => {
        e.preventDefault()


        updateProfile(user, {
            displayName: nameref?.current?.value,
            photoURL: photoref?.current?.value
        }).then(res => {
            
            setUser({
                ...user, displayName: nameref?.current?.value,
                photoURL: photoref?.current?.value
            });toast.success("Updated Profile!")
            // setKey(key++)

        })
        if (emailref.current.value) {
            updateEmail(user, emailref?.current?.value)

        }

        document.getElementById("my_modal_5").close();


    }
    return (
        <div className="card w-[80vw] h-auto lg:h-[60vh] mx-auto my-20 lg:card-side bg-secondary shadow-2xl">
            <figure>
                <img
                    className='lg:w-[450px] p-8'
                    src={user.photoURL}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold lg:text-4xl my-1">User Name : {user.displayName}</h2>
                <p className='lg:text-2xl font-semibold '>Email Address : {user.email} </p>
                <p className='lg:text-2xl font-semibold '>Email Verification Status :  {user.emailVerified ? "Verified" : "Not Verified"} </p>
                <p className='lg:text-2xl font-semibold'>Phone number : {user.phoneNumber ? String(user.phoneNumber) : "Not Provided Yet"} </p>
                <p className='lg:text-2xl font-semibold '>Join Date : {user?.metadata?.creationTime}</p>

                <div className="card-actions justify-start">
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-primary w-[60%] text-white"><NavLink >Update Profile</NavLink></button>
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" >open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white space-y-2">
                    <h3 className="font-bold text-lg">Update your Profile info</h3>
                    <form onSubmit={updateuser}>
                        <label className='font-semibold' htmlFor="name">Enter your Name :
                            <input ref={nameref} className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter your name' type="text" required="true" />
                        </label>
                        <label className='font-semibold ' htmlFor="email">Enter your email : (Don’t change email for that you will lose access)
                            <input ref={emailref} className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter your email' type="email" />
                        </label>
                        <label className='font-semibold' htmlFor="photo">Provide photo url :
                            <input ref={photoref} className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter your name' type="text" required />
                        </label>
                        <div className='flex w-full justify-center items-center'>
                            <button className='btn btn-primary w-[60%] mt-3 text-white'>Update</button>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyProfile;