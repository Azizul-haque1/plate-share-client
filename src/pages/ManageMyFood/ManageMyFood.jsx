import React, { useEffect, useRef, useState } from 'react';
import useAxios from '../../hooks/userAxios';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const ManageMyFood = () => {
    const { user } = useAuth()
    const axiosInstance = useAxios()
    const [refatch, setRefatch] = useState(false)
    const [foods, setFoods] = useState([])
    const [foodId, setFoodId] = useState(null)
    const [foodData, setFoodData] = useState({})

    const {
        food_name,
        food_image,
        food_quantity,
        pickup_location,
        expire_date,
        additional_notes,
    } = foodData

    const modalRef = useRef()

    useEffect(() => {
        axiosInstance(`/my-food?email=${user.email}`)
            .then(result => {
                const data = result.data
                console.log(data);
                setFoods(data)
                setRefatch(false)
            })
    }, [axiosInstance, user, refatch])

    const handleOpenModal = (_id) => {
        setFoodId(_id)
        modalRef.current.showModal()

    }




    useEffect(() => {
        if (!foodId) return;
        axiosInstance(`/foods/${foodId}`)
            .then(result => {
                const data = result.data
                setFoodData(data)
            })
    }, [axiosInstance, foodId,])

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.food_name.value;
        const foodImge = form.food_image.value;
        const pickupLocation = form.pickup_location.value;
        const foodQuantity = form.food_quantity.value;
        const expireDate = form.expire_date.value;
        const additionalNotes = form.additional_notes.value;

        const updateFood = {
            food_name: foodName,
            food_image: foodImge,
            food_quantity: Number(foodQuantity),
            pickup_location: pickupLocation,
            expire_date: expireDate,
            additional_notes: additionalNotes,
        }

        axiosInstance.patch(`/foods/${foodId}`, updateFood)
            .then(result => {
                // console.log(result);

                const data = result.data

                if (data.modifiedCount) {
                    modalRef.current.close()

                    Swal.fire({
                        title: "Food update successfully!",
                        icon: "success",
                        draggable: true
                    });

                    setRefatch(true)
                }
            })



    }

    const handleDelete = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/foods/${id}`)
                    .then(result => {
                        const data = result.data
                        if (data.deletedCount > 0) {
                            console.log(result.data);
                            setRefatch(true)
                        }
                    })

                Swal.fire({
                    title: "Deleted!",
                    text: "Your food has been deleted.",
                    icon: "success"
                });
            }
        });



    }





    return (
        <div className=' w-full md:w-10/12 mx-auto mt-10 mb-10'>
            <h1 className='text-center text-4xl font-bold text-secondary mb-10'>My Donated Food
            </h1>

            <div className="overflow-x-auto w-full ">
                <table className="w-full  table-zebra table-xs md:table">
                    {/* head */}
                    <thead className=' text-secondary font-extrabold'>
                        <tr className=''>
                            <th className="w-1/12">SI</th>
                            <th className="w-2/12">Image</th>
                            <th className="w-4/12">Food Name</th>
                            <th className="w-2/12">Status</th>
                            <th className="w-2/12">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            foods.map((food, index) => <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td className=''>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={food.food_image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>  <div>
                                    <div className="font-bold text-xs md:text-sm">{food.food_name}</div>
                                    {/* <div className="text-sm opacity-50">United States</div> */}
                                </div></td>
                                <td className=''>
                                    <p className='badge bg-green-400 text-white'>                                    {food.food_status}
                                    </p>
                                </td>
                                <th>
                                    <div className="md:flex w-full  gap-4">
                                        <button onClick={() => handleOpenModal(food._id)} className='btn w-full  md:w-20 mb-2 md:mb-0   btn-outline rounded-sm text-primary'>Edit</button>
                                        <button onClick={() => handleDelete(food._id)} className='btn w-full md:max-w-fit   btn-outline rounded-sm text-red-700
                                    '>Delete</button>
                                    </div>
                                </th>
                                {/* <th>
                                    <td className='flex items-center justify-center'></td>

                                </th> */}
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog ref={modalRef} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h1 className='text-3xl text-center  mb-10 mt-3 text-secondary font-bold'>Update Food</h1>
                    <form onSubmit={handleUpdate} className="fieldset gap-4">
                        {/* Food Name */}
                        <div className="" >

                            <label className="">Food Name</label>
                            <input
                                defaultValue={food_name}
                                required
                                type="text"
                                name='food_name'
                                className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300   border-0 focus:outline-primary "
                                placeholder="Add  A Food Name" />
                        </div>
                        {/* Food image  url */}
                        <div className="" >

                            <label className="">Food Image Url</label>
                            <input
                                defaultValue={food_image}
                                required
                                type='url'
                                name='food_image'
                                className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300   border-0 focus:outline-primary "
                                placeholder="Food Image Url here" />
                        </div>

                        {/*Pickup Location */}
                        <div className="" >

                            <label className="">Pickup Location</label>
                            <input
                                defaultValue={pickup_location}
                                required
                                type="text"
                                name='pickup_location'
                                className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300   border-0 focus:outline-primary "
                                placeholder="Pickup Location" />
                        </div>
                        <div className="flex gap-4 w-full" >
                            <div className="w-full">

                                <label className="">Food Quantity
                                </label>
                                <input
                                    defaultValue={food_quantity}
                                    required
                                    type='number'
                                    name='food_quantity'
                                    className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300   border-0 focus:outline-primary "
                                    placeholder="Food Quantity
" />
                            </div>
                            <div className="w-full">

                                <label className="">Expire Date
                                </label>
                                <input

                                    defaultValue={expire_date}
                                    required
                                    type='date'
                                    name='expire_date'
                                    className="input w-full mt-2 bg-gray-100 placeholder:text-gray-300   border-0 focus:outline-primary "
                                    placeholder="Expire Date
" />
                            </div>
                        </div>
                        <div className="">

                            <label className="">Additional Notes
                            </label>
                            <textarea
                                defaultValue={additional_notes}
                                name='additional_notes'
                                className="textarea mt-2 w-full" placeholder="Bio"></textarea>

                        </div>


                        <button className="btn btn-primary mt-4">Update Now</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ManageMyFood;