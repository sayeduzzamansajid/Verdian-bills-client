import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';

const AddBillsPage = () => {
    const { user } = useContext(AuthContext);


    const handleAddBill = (e) => {
        e.preventDefault()
        const newBill = {
            title: e.target.title.value || 'Not Given any titile',
            category: e.target.category.value,
            email: user.email,
            location: e.target.category.value || 'Not Given',
            description: e.target.location.value || 'Not Given',
            image: e.target.image.value,
            date: e.target.date.value,
            amount: parseInt(e.target.amount.value) || 0,
            username: e.target.username.value,
            address: e.target.address.value,
            phone: parseInt(e.target.phone.value),

        }

        fetch("https://bill-management-server-five.vercel.app/bills/all-bills", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBill)
        })
            .then(res => {
                res.json()
                toast.success("This Bill Is Paid Successfully")
            })
            .catch(err => { console.log(err.message); toast.error(err.message) })
        e.target.reset();
        document.getElementById("my_modal_6").close();
    }
    return (
        <div className='w-full h-[60vh] flex justify-center items-center mt-10 pb-10 shadow-2xl'>
            <div className='flex flex-col items-center justify-center gap-4 bg-secondary p-10 px-15 rounded-xl'>
                <img className='rounded-lg' src="https://i.pinimg.com/736x/fe/fb/ab/fefbab487a586ff84aed117a5bd6e6db.jpg" alt="" />
                <button onClick={() => document.getElementById('my_modal_6').showModal()} className='btn btn-primary text-white'>Add A Bill</button>
            </div>

            {/* Modal here  */}
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white space-y-2">
                    <h3 className="font-bold text-lg">Information for Pay The Bill</h3>
                    <form onSubmit={handleAddBill}>
                        <label className='font-semibold ' htmlFor="email">Your email :
                            <input name='email' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter your email' type="email" value={user.email} />
                        </label>
                        {/* <label className='font-semibold ' htmlFor="billId">Your BillId :
                            <input name='billId' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter your BillId' type="text"  />
                        </label> */}
                        <label className='font-semibold ' htmlFor="title">Title for the bill :
                            <input name='title' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter the title for the bill' type="text" />
                        </label>
                        <label className='font-semibold ' htmlFor="category">Category of the bill :
                            <input name='category' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter the category' type="text" required="true" />
                        </label>
                        <label className='font-semibold ' htmlFor="amount">Your Amount To Pay :
                            <input name='amount' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter amount to pay' type="text" required="true" />
                        </label>
                        <label className='font-semibold' htmlFor="location">Enter Location :
                            <input name='location' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='Write location' type="text" />
                        </label>
                        <label className='font-semibold' htmlFor="description">Write discription of the bill  :
                            <input name='description' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='write the description' type="text" />
                        </label>
                        <label className='font-semibold' htmlFor="image">Provide Image Url :
                            <input name='image' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='Provide the Image Url' type="text" required="true" />
                        </label>
                        <label className='font-semibold' htmlFor="username">Enter Username :
                            <input name='username' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='Provide Username' type="text" required="true" />
                        </label>
                        <label className='font-semibold' htmlFor="address">Provide Address :
                            <input name='address' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='Provide address' type="text" required="true" />
                        </label>
                        <label className='font-semibold' htmlFor="phone">Provide Number :
                            <input name='phone' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='Provide phone number' type="text" required="true" />
                        </label>
                        <label className='font-semibold' htmlFor="date">Pick a date :
                            <input name='date' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='dd/mm/yyyy' type="date" required="true" />
                        </label>
                        <div className='flex w-full justify-center items-center'>
                            <button type='submit' className='btn btn-primary w-[60%] mt-3 text-white'>Add the bill</button>
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

export default AddBillsPage;