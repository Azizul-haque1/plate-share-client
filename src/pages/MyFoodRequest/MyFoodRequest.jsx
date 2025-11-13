import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/userAxios";
import useAuth from "../../hooks/useAuth";

const MyFoodRequest = () => {
    const axiosInstance = useAxios();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [foods, setFoods] = useState([]);
    const [refatch, setRefatch] = useState(false)



    const handleCancel = (_id) => {
        console.log('cancccel', _id);
        axiosInstance.delete(`/food-request/${_id}`)
            .then(res => {
                console.log(res.data);
                setLoading(false)
                setRefatch(prev => !prev)
            })
            .catch(error => {
                console.log(error);
                setLoading(false)
            })

    }

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const { data: requestsFoods } = await axiosInstance(
                    `/food-request?email=${user.email}`
                );
                setLoading(false);
                console.log("req data ", requestsFoods);

                const joinFoods = await Promise.all(
                    requestsFoods.map(async (requestFood) => {
                        const { data: food } = await axiosInstance(
                            `/foods/${requestFood.foodId}`
                        );
                        return {
                            ...requestFood,
                            food_image: food.food_image,
                            food_name: food.food_name,
                        };
                    })
                );

                setFoods(joinFoods);
                console.log("join foods  data  ", joinFoods);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        };
        fetchRequest();
    }, [axiosInstance, user, refatch]);

    return (
        <div className="w-full md:w-10/12 mx-auto mt-10 mb-10">
            <h1 className="text-center text-4xl font-bold text-secondary mb-10">
                All requested this food
            </h1>

            <div className="overflow-x-auto w-full">
                <table className="w-full table-zebra table-xs md:table">
                    <thead className="text-secondary font-extrabold">
                        <tr>
                            <th className="w-1/12">SI</th>
                            <th className="w-2/12">Food Image</th>
                            <th className="w-4/12">Food Name</th>
                            <th className="w-2/12">Status</th>
                            <th className="w-2/12">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {foods.map((reqeuseFood, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>
                                    {/* Name and phto */}
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={reqeuseFood.food_image}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span> {reqeuseFood.food_name}</span>
                                </td>
                                <td>
                                    <p className="badge badge-warning text-white">
                                        {reqeuseFood.status}
                                    </p>
                                </td>
                                <td>
                                    <div className="md:flex w-full gap-4">
                                        <button
                                            onClick={() => handleCancel(reqeuseFood._id)}
                                            disabled={reqeuseFood.status === 'Accepted' || reqeuseFood.status === 'Rejected'}
                                            className={`btn btn-outline ${reqeuseFood.status === 'Accepted' ? 'text-gray-400' : reqeuseFood.status === 'Rejected' ? 'text-gray-400' : 'text-red-400'}`}>
                                            Cancel</button>
                                        {/* <button
                                            onClick={() =>
                                                handleAccept(reqeuseFood._id, reqeuseFood.foodId)
                                            }
                                            disabled={
                                                reqeuseFood.status === "Accepted" ||
                                                reqeuseFood.status === "Rejected"
                                            }
                                            className="btn w-full md:w-20 mb-2 md:mb-0 btn-outline rounded-sm text-green-500"
                                        >
                                            {reqeuseFood.status === "Accepted"
                                                ? "Accepted"
                                                : "Accept"}
                                        </button>
                                        <button
                                            onClick={() => handleReject(reqeuseFood._id)}
                                            disabled={
                                                reqeuseFood.status === "Accepted" ||
                                                reqeuseFood.status === "Rejected"
                                            }
                                            className="btn w-full md:max-w-fit btn-outline rounded-sm text-red-700"
                                        >
                                            {reqeuseFood.status === "Rejected"
                                                ? "Rejected"
                                                : "Reject"}
                                        </button> */}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoodRequest;
