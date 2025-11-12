import React, { useEffect, useRef, useState } from 'react';
import useAxios from '../../hooks/userAxios';
import { useParams } from 'react-router';
import Loader from '../../components/Loader/Loader';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import RequestFood from '../../components/RequestFood/RequestFood';


const FoodDetails = () => {
    const axiosInstance = useAxios()
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)
    const [foodData, setFoodData] = useState({})
    const { id } = useParams()
    const modalRef = useRef()

    const {
        _id,
        food_name,
        food_image,
        food_quantity,
        pickup_location,
        expire_date,
        additional_notes,
        donator_name,
        donator_email,
        donator_image,
        food_status,
        created_at
    } = foodData


    useEffect(() => {

        axiosInstance.get(`/foods/${id}`)
            .then(result => {
                // console.log(result);
                const data = result.data;
                setFoodData(data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
            })
    }, [axiosInstance, id])

    const handleOpenModal = () => {
        modalRef.current.showModal()

    }

    const handleSubmitRequest = (e, _id) => {
        e.preventDefault()
        const writeLocation = e.target.writeLocation.value;
        const whayNeeFood = e.target.whayNeeFood.value;
        const contact = e.target.contact.value;
        console.log({ writeLocation, whayNeeFood, contact, _id });

        const newRequestFood = {
            foodId: _id,
            name: user.displayName,
            userEmail: user.email,
            photoURL: user.photoURL,
            write_location: writeLocation,
            contactNo: contact,
            status: 'pending'
        }

        console.log(newRequestFood);

        axiosInstance.post('/food-request', newRequestFood)
            .then(result => {
                const data = result.data
                if (data.insertedId)
                    toast.success('Food Request Successfull')

            })

    }

    loading && <Loader />
    return (

        <div className="">
            <div className='w-full md:w-6/12 mx-auto my-20'>

                <div className="flex flex-col gap-10  ">
                    <div className="border shadow-xl border-secondary/10 rounded-2xl p-5">
                        {/* donor info */}
                        <h1 className='text-3xl font-bold text-secondary text-center mb-4'>Donor Information
                        </h1>
                        <div className="flex items-center gap-10">
                            <img className='rounded-2xl w-30' src={donator_image} alt="" />
                            <div className="">
                                <p className='text-xl mb-3 font-semibold'>Name: <span className='font-normal'>{donator_name}</span></p>
                                <p className='text-xl font-semibold'>Email: <span className='font-normal'>{donator_email}</span></p>
                            </div>

                        </div>
                    </div>


                    {/* food info */}
                    <div className="border shadow-xl border-secondary/10 rounded-2xl p-5">
                        <h1 className='text-3xl font-bold text-secondary text-center'>Food Information</h1>
                        <div className="mt-4">
                            <img className='w-full rounded-2xl h-1/2' src={food_image} alt="" />
                            <div className="mt-4">
                                <p className='text-xl font-semibold'>Food Name: <span>{food_name}</span></p>
                                <p className='text-xl font-semibold'>Food Status: <span className='text-green-500 badge'>{food_status}</span></p>
                                <p className='text-xl font-semibold'>Food Quantity: Serves <span className=''>{food_quantity}</span> people</p>
                                <p className='text-xl font-semibold'>pickup Location: <span>{pickup_location}</span></p>
                                <p className='text-xl font-semibold'>Expire Date: <span>{expire_date}</span></p>
                                <div className="divider"></div>
                                <p className='text-xl font-semibold mb-10'>Additional Notes: <span className='font-normal text-secondary/80'>{additional_notes}</span></p>
                                <div className="w-full flex justify-end">

                                    <button onClick={handleOpenModal} className='btn   btn-primary'>Request Food</button>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                {/* You can open the modal using document.getElementById('ID').showModal() method */}

                <dialog ref={modalRef} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h1 className='text-3xl text-center  mb-10 mt-3 text-secondary font-bold'>Update Food</h1>
                        <form
                            onSubmit={(e) => handleSubmitRequest(e, _id)}
                            className="fieldset gap-4">
                            {/* Write Location */}
                            <div className="" >

                                <label className="">Write Location</label>
                                <input

                                    required
                                    type="text"
                                    name='writeLocation'
                                    className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300   border-0 focus:outline-primary "
                                    placeholder="Write your Location" />
                            </div>
                            {/* Why Need Food  */}
                            <div className="" >

                                <label className="">Why Need Food</label>
                                <input

                                    required
                                    type='text'
                                    name='whayNeeFood'
                                    className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300   border-0 focus:outline-primary "
                                    placeholder="Why Need Food" />
                            </div>


                            {/* Contact No. */}
                            <div className="flex gap-4 w-full" >
                                <div className="w-full">

                                    <label className="">Contact No.
                                    </label>
                                    <input

                                        required
                                        type='number'
                                        name='contact'
                                        className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300   border-0 focus:outline-primary "
                                        placeholder="Type your contact number.
" />
                                </div>

                            </div>


                            <button className="btn btn-primary mt-4">Submit Request</button>
                        </form>
                    </div>
                </dialog>
            </div>
            {

                user.email === donator_email ?
                    <RequestFood /> : ''
            }

        </div>
    );
};
export default FoodDetails;
