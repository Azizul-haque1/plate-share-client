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
    const [refatch, setRefatch] = useState(false)
    const [foodData, setFoodData] = useState({})
    const [foods, setFoods] = useState([])
    const [refatchTable, setRefatchTable] = useState(false)
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
                setLoading(false)
                setFoodData(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [axiosInstance, id, refatch])




    useEffect(() => {
        axiosInstance(`/food-request/${id}`)
            .then(res => {
                setLoading(false)
                setFoods(res.data)
            })
            .catch(error => {
                console.log(error);
            })


    }, [id, axiosInstance, refatchTable])


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
                e.target.reset()
                modalRef.current.close()
                setRefatchTable(prev => !prev)


            })

    }


    const handleAccept = (_id) => {
        const accepted = { status: "Accepted" }
        axiosInstance.patch(`/food-request/${_id}`, accepted)
            .then(result => {
                const data = result.data;
                console.log('data.......', data);
                toast.success('Request Accepted')
                setRefatchTable(prev => !prev)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleReject = (_id) => {
        const rejected = { status: "Rejected" }
        axiosInstance.patch(`/food-request/${_id}`, rejected)
            .then(result => {
                const data = result.data;
                console.log('data.......', data);
                toast.success('Request Rejected')
                setRefatchTable(prev => !prev)
            })
            .catch(error => {
                console.log(error);
            })
    }


    if (loading) return <Loader />
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
                        <form >
                            {/* if there is a button in form, it will close the modal */}
                            <button type='button' onClick={() => modalRef.current.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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


                            <button type='submit' className="btn btn-primary mt-4">Submit Request</button>
                        </form>
                    </div>
                </dialog>
            </div>
            {

                user.email === donator_email ?
                    (
                        <div className="w-full md:w-10/12 mx-auto mt-10 mb-10">
                            <h1 className="text-center text-4xl font-bold text-secondary mb-10">
                                All requested this food
                            </h1>

                            <div className="overflow-x-auto w-full">
                                <table className="w-full table-zebra table-xs md:table">
                                    <thead className="text-secondary font-extrabold">
                                        <tr>
                                            <th className="w-1/12">SI</th>
                                            <th className="w-2/12">Name</th>
                                            <th className="w-4/12">Contact</th>
                                            <th className="w-2/12">Status</th>
                                            <th className="w-2/12">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {

                                            foods.map((reqeuseFood, index) => <tr>
                                                <th>{index + 1}</th>
                                                <td>
                                                    {/* Name and phto */}
                                                    <div>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle h-12 w-12">
                                                                    <img
                                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                                        alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{reqeuseFood.name}</div>
                                                                <div className="text-sm opacity-50">{reqeuseFood.userEmail}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <td>
                                                        Location : {reqeuseFood.write_location}
                                                        <br />
                                                        <span className="">{reqeuseFood.contactNo}</span>
                                                    </td>
                                                </td>
                                                <td>
                                                    <p className="badge badge-warning text-white">
                                                        {reqeuseFood.status}
                                                    </p>
                                                </td>
                                                <td>
                                                    <div className="md:flex w-full gap-4">
                                                        <button onClick={() => handleAccept(reqeuseFood._id)}
                                                            disabled={reqeuseFood.status === 'Accepted' || reqeuseFood.status === 'Rejected'}

                                                            className="btn w-full md:w-20 mb-2 md:mb-0 btn-outline rounded-sm text-green-500">
                                                            {reqeuseFood.status === 'Accepted' ? "Accepted" : 'Accept'}
                                                        </button>
                                                        <button onClick={() => handleReject(reqeuseFood._id)}
                                                            disabled={reqeuseFood.status === 'Accepted' || reqeuseFood.status === 'Rejected'}
                                                            className="btn w-full md:max-w-fit btn-outline rounded-sm text-red-700">
                                                            {reqeuseFood.status === 'Rejected' ? "Rejected" : 'Reject'}

                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>)
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : ('')
            }

        </div >
    );
};
export default FoodDetails;
