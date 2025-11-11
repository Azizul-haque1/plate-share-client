import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/userAxios';
import toast from 'react-hot-toast';


const AddFood = () => {
    const { user } = useAuth()
    const axiosInstance = useAxios()

    const handleAddFood = (e) => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.food_name.value;
        const foodImge = form.food_image.value;
        const pickupLocation = form.pickup_location.value;
        const foodQuantity = form.food_quantity.value;
        const expireDate = form.expire_date.value;
        const additionalNotes = form.additional_notes.value;
        console.log({ foodName, foodImge, pickupLocation, foodQuantity, expireDate, additionalNotes });

        const newFood = {
            food_name: foodName,
            food_image: foodImge,
            food_quantity: Number(foodQuantity),
            pickup_location: pickupLocation,
            expire_date: expireDate,
            additional_notes: additionalNotes,
            donator_name: user.displayName,
            donator_email: user.email,
            donator_image: user.photoURL,
            food_status: "Available",
            created_at: new Date()

        }

        axiosInstance.post('/foods', newFood)
            .then(result => {
                const data = result.data

                if (data.insertedId) {
                    toast.success('added food')

                }
            })







    }
    return (
        <div className=' px-2  md:px-0 md:w-10/12 mx-auto flex flex-col items-center md:flex-row gap-20 justify-center h-fu md:h-screen '>
            <div className="  w-full shadow-2xl  md:w-1/2 lg:1/3 border border-transparent  md:p-10 p-2 rounded-xl md:border-gray-300 ">
                <h1 className='text-center text-2xl my-10 text-gray-500'>Create an account
                </h1>

                <form onSubmit={handleAddFood} className="fieldset gap-4">
                    {/* Food Name */}
                    <div className="" >

                        <label className="">Food Name</label>
                        <input
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
                            name='additional_notes'
                            className="textarea mt-2 w-full" placeholder="Bio"></textarea>

                    </div>


                    <button className="btn btn-primary mt-4">Add Food</button>
                </form>

            </div>



        </div >

    );
};

export default AddFood;