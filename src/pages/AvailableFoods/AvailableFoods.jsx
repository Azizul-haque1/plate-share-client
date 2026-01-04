import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/userAxios';
import FoodCard from '../../components/FoodCard/FoodCard';
import Loader from '../../components/Loader/Loader';

const AvailableFoods = () => {
    const axiosInstance = useAxios();

    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    const [sort, setSort] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Fetch foods   
    useEffect(() => {
        setLoading(true);
        let url = `/foods?status=Available&page=${page}&limit=12`;
        if (search) url += `&search=${encodeURIComponent(search)}`;
        // if (location) url += `&location=${encodeURIComponent(location)}`;
        if (sort) url += `&sort=${sort}`;

        axiosInstance(url)
            .then(res => {
                console.log(res.data);
                setFoods(res.data.foods);
                setTotalPages(res.data.totalPages);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [search, sort, page, axiosInstance]);

    // Reset page on filter change
    useEffect(() => {
        setPage(1);
    }, [search, sort]);



    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            <h1 className="text-4xl font-bold text-center mb-8">
                Available <span className="text-primary">Foods</span>
            </h1>

            {/* Filters */}
            <div className="flex flex-col space-y-3 md:justify-between md:flex-row ">
                <input
                    className="input text-black input-bordered"
                    placeholder="Search food..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

           

                <select
                    className="select select-bordered"
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                >
                    <option value="">Expiry Soon</option>
                    <option value="expire_desc">Expiry Last</option>
                    <option value="quantity_desc">Highest Quantity</option>
                </select>
            </div>

            {/* Food grid */}
      

            {
                loading ? (<Loader />) : (
                    
                        foods.length ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {foods.map(food => (
                                    <FoodCard key={food._id} food={food} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-xl text-gray-500">No food available</p>
                        )
                
                )
            }

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-10">
                    {[...Array(totalPages).keys()].map(i => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`btn btn-sm ${page === i + 1 ? 'btn-primary' : ''}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AvailableFoods;
