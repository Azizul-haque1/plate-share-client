import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/userAxios';
import FoodRow from './FoodRow';

const RequestFood = () => {
    const { user } = useAuth()
    const [foods, setFoods] = useState([])
    const axiosInstance = useAxios()


    useEffect(() => {

        axiosInstance(`/food-request?email=${user.email}`)
            .then(result => {
                const data = result.data
                setFoods(data || [])
            })
            .catch(error => {
                console.log(error);
            })


    }, [user, axiosInstance])
    console.log(foods);
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
                            <th className="w-2/12">Name</th>
                            <th className="w-4/12">Contact</th>
                            <th className="w-2/12">Status</th>
                            <th className="w-2/12">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            foods.map(food => <FoodRow food={food} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestFood;
