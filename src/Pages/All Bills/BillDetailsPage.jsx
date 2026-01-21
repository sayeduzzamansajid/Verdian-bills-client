import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import toast from 'react-hot-toast';

const BillDetailsPage = () => {
    const { loading, error, user } = useContext(AuthContext)
    const detailsData = useLoaderData()
    const { id } = useParams();
    console.log(id);
    if (loading) {
        return <div className="text-center my-20"><p>Loading skill details...</p></div>;
    }
    if (error) {
        return <div className="text-center my-20"><p>Error: {error.message}</p></div>;
    }
    console.log(detailsData);

    // const skill = skills.find(skill => skill.skillId === parseInt(id))
    if (!detailsData) {
        return <div className="text-center my-20"><p>details Data not found.</p></div>;
    }
    console.log(detailsData);

    const handlePay = (e) => {
        e.preventDefault()
        toast.success("This Bill Is Paid Successfully")
        // e.target.email.value = ''
        // e.target.billId.value = ''
        // e.target.amount.value = ''
        // e.target.name.value = ''
        // e.target.address.value = ''
        // e.target.phone.value = ''
        e.target.reset();
        document.getElementById("my_modal_4").close();
    }
    return (
        <div>
            <div className="card justify-between gap-4 items-center lg:card-side bg-secondary shadow-sm w-[80vw] h-auto mx-auto my-20 p-10 ">


                <div className='border p-2 rounded-full lg:w-[360px] lg:h-[360px] bg-linear-to-l from-primary to-purple-400'>
                    <img
                        className=' h-full w-full rounded-full object-cover'
                        src={detailsData.image}
                        alt="Album" />
                </div>


                <div className="card-body flex-2/3 flex-col">
                    <h2 className=" card-title font-bold lg:text-4xl">{detailsData.title}</h2>
                    <p className=' font-bold text-xl text-primary'>Category : <span className='font-semibold text-xl text-black'> {detailsData.category} </span></p>
                    <p className='font-bold text-xl text-primary'>Creator's email : <span className='font-semibold text-xl text-black'> {detailsData.email} </span></p>
                    <p className=' font-bold text-xl text-primary'>Location : <span className=' font-semibold text-xl text-black'> {detailsData.location} </span></p>
                    <p className=' font-bold text-xl text-primary'>Description : <span className=' font-semibold text-xl text-black'> {detailsData.description} </span></p>
                    {/* <p className=' font-bold text-xl text-primary'>Discription : <span className=' font-light text-xl text-black'> {skill.details} </span></p> */}
                    <div>
                        {/* <p className=' font-bold text-xl text-primary flex gap-3 items-center'>Rating : <span className='font-semibold text-xl text-black flex gap-2 items-center'> <Star className='text-yellow-500' /> {skill.rating} </span> </p> */}
                    </div>
                    <div className=' flex flex-col lg:flex-row justify-between gap-2 lg:gap-80'>
                        <p className='font-bold text-xl text-primary bg-base-200 text-start rounded-lg py-2 lg:px-5 '>Date : <span className='font-semibold text-xl text-black'> {detailsData.date} </span></p>
                        <p className='font-bold text-xl text-primary bg-base-200 text-start rounded-lg py-2 px-10 '>Price : <span className='font-semibold text-xl text-black'> {detailsData.amount} $ </span></p>
                    </div>

                    <div className="card-actions justify-center">
                        <button onClick={() => document.getElementById('my_modal_4').showModal()} className="btn btn-primary lg:w-[40%] text-white">Pay The Bill</button>
                    </div>
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white space-y-2">
                    <h3 className="font-bold text-lg">Information for Pay The Bill</h3>
                    <form onSubmit={handlePay}>
                        <label className='font-semibold ' htmlFor="email">Your email :
                            <input name='email' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter your email' type="email" value={user.email} />
                        </label>
                        <label className='font-semibold ' htmlFor="billId">Your BillId :
                            <input name='billId' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter your BillId' type="text" value={detailsData._id} />
                        </label>
                        <label className='font-semibold ' htmlFor="amount">Your Amount To Pay :
                            <input name='amount' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter amount to pay' type="text" value={detailsData.amount} />
                        </label>
                        <label className='font-semibold' htmlFor="name">Enter your username :
                            <input name='name' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter your name' type="text" />
                        </label>
                        <label className='font-semibold' htmlFor="address">Enter your address :
                            <input name='address' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter your address' type="text" />
                        </label>
                        <label className='font-semibold' htmlFor="phone">Enter your Phone Number :
                            <input name='phone' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter your Phone Number' type="text" />
                        </label>
                        <div className='flex w-full justify-center items-center'>
                            <button className='btn btn-primary w-[60%] mt-3 text-white'>Pay</button>
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

export default BillDetailsPage;