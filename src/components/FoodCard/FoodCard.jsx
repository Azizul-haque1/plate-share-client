import React from 'react';

const FoodCard = ({ food }) => {
    const {
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
    } = food
    return (

        <div className='  shadow-xl  rounded-xl space-y-5' >
            <div className="image w-full overflow-hidden  relative ">
                <img
                    className='hover:scale-110 w-full transition-transform object-cover  rounded-xl overflow-hidden'
                    src='https://i.ibb.co.com/LDTBH1Z0/fried-salmon-steak-cooked-green-600nw-2489026949.webp' alt="" />
                <p className='badge text-green-500 absolute top-4 right-4'>{food_status}</p>
            </div>

            <div className="content  flex flex-col gap-3 px-2 text-secondary">
                <h4 className='text-2xl border-b pb-2 border-gray-100 font-bold text-primary'>{food_name}</h4>
                <div className="flex items-center gap-3 my-2">
                    <div className=" rounded-full w-7 h-7">
                        <img src="https://i.ibb.co.com/NgX6sdH9/images.png" alt="" />
                    </div>
                    <p className='text-xl font-semibold'>{donator_name}</p>
                </div>
                <p>Pickup location: <span className='font-semibold'>{pickup_location}</span> </p>
                <div className="flex items-center justify-between gap-4">
                    <p>{food_quantity}</p>
                    <p className='text-red-500'>Expires:{expire_date}</p>
                </div>
                <button className='btn my-4 btn-outline border-primary text-primary
                '>View Details</button>

            </div>
        </div >
    );
};

export default FoodCard;