import React from 'react';

const FoodRow = ({ food }) => {

    const {
        _id,
        foodId,
        name,
        userEmail,
        photoURL,
        write_location,
        contactNo,
        status
    } = food;


    const handleAccept = () => {


    }

    return (
        <tr>
            <th>1</th>
            <td>
                {/* Name and phto */}
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{userEmail}</div>
                        </div>
                    </div>
                </td>
            </td>
            <td>
                <td>
                    Location : {write_location}
                    <br />
                    <span className="">{contactNo}</span>
                </td>
            </td>
            <td>
                <p className="badge badge-warning text-white">
                    {status}
                </p>
            </td>
            <td>
                <div className="md:flex w-full gap-4">
                    <button className="btn w-full md:w-20 mb-2 md:mb-0 btn-outline rounded-sm text-green-500">
                        Accept
                    </button>
                    <button className="btn w-full md:max-w-fit btn-outline rounded-sm text-red-700">
                        Reject
                    </button>
                </div>
            </td>
        </tr>

    );
};

export default FoodRow;