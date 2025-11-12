import React, { useEffect, useState } from 'react';
import FoodCard from '../../components/FoodCard/FoodCard';
import useAxios from '../../hooks/userAxios';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import Loader from '../../components/Loader/Loader';

const Home = () => {
    const axiosInstance = useAxios()
    const [foods, setFoods] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosInstance('/featured-foods')
            .then(data => {
                console.log(data.data)
                setLoading(false)
                setFoods(data.data)
            }
            )


    }, [axiosInstance, setFoods])


    if (loading) return <Loader />

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}


            className='w-10/12 mx-auto'>
            <div className=" relative h-[700px]">
                <img
                    className='h-full object-cover w-full'
                    src="https://i.ibb.co.com/LD6NLJXk/delicious-chicken-rolls-stuffed-with-cheese-spinach-wrapped-strips-bacon-top-view-2829-17420.jpg" alt="" />
                {/* // src="https://i.ibb.co.com/8nZKs2sc/istockphoto-1457889029-612x612.jpg" alt="" /> */}

                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ ease: 'easeOut', duration: 1 }}

                    className='text-left space-y-5 absolute top-1/2  w-6/12 mx-auto  text-white text-xl z-10 py-5 px-20 transform    '>
                    <p className='text-2xl'>We have food ands </p>

                    <h2 className='text-6xl'>we’re ready to help!</h2>
                    <p className='text-2xl'>If you, or anyone you know, needs assistance with food through these challenging times, we’re here to help</p>
                    <Link to='/available-foods' className='btn'>View All Foods</Link>
                </motion.div>
            </div>
            <h1 className='text-center mt-30 mb-4 text-5xl font-bold text-secondary' >Featured <span className='text-primary'>Foods</span></h1>

            <p className='text-xl text-center my-5 text-secondary/80  '>Nourish your community, one plate at a time, by sharing the bounty.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 gap-4">

                {
                    foods.map((food, index) =>
                        <motion.div

                            key={food._id}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 60, damping: 70, delay: index * 0.1 }}

                            className="">
                            <FoodCard food={food} />
                        </motion.div>


                    )
                }




            </div>

            <div className=" text-center flex justify-center mt-20  mb-40 items-center">
                <Link to='/available-foods' className='btn btn-primary'>Show All</Link>
            </div>

            {/* our  misstion */}
            <div className="flex flex-col-reverse  md:flex-row items-center  justify-center">
                <motion.div

                    initial={{ opacity: 0, x: -100 }}
                    // animate={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: .1 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ ease: 'easeOut', duration: 0.6, delay: 0.4 }}

                    className=" rounded-2xl overflow-auto  shadow-2xl flex-1">
                    <img className='shadow-xl  w-full' src="https://i.ibb.co.com/DHXjfdXt/man-holds-donation-bag-ready-to-be-handed-out-donation-bag-contains-food-cleaning-supplies-delivery.webp" alt="" />

                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    // animate={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: .1 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ ease: 'easeOut', duration: 0.6, delay: 0.4 }}


                    className="w-full flex-1 p-4 mb-4 md:mb-0 md:p-20">
                    <h1 className=' text-5xl text-secondary font-bold text-center mb-20
                    '>Our Mission

                    </h1>
                    <p className='text-xl leading-10  text-justify text-secondary/50'> our
                        mission is to reduce food waste and fight hunger by connecting people
                        who have extra food with those who need it most. Together, we build a
                        community that shares, cares, and sustains.</p>
                </motion.div>


            </div>



            <h1 className='text-5xl text-secondary font-bold text-center mt-40 mb-20'>How It Works
            </h1>

            <motion.div

                initial={{ opacity: 0, y: 100 }}
                // animate={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .05 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ ease: 'easeOut', duration: 0.6, delay: 0.4 }}

                className=" grid md:grid-cols-2   lg:grid-cols-3 mb-20 gap-4">


                <div

                    className={`  hover:**:text-white hover:bg-primary duration-110  transition ease-in-out   bg-secondary/4 p-10`}>
                    <h1 className='text-center text-4xl mb-3 font-bold text-secondary'>Food is Donated </h1>
                    <p className='text-center mx-auto leading-6 w- tracking-normal text-secondary/70' >Farms, restaurants, cafeterias, hotels, stadiums, and grocery stores post excess food in under a minute on the Waste No Food app.</p>
                </div>

                <div className={`  hover:**:text-white hover:bg-primary duration-110  transition ease-in-out   bg-secondary/4 p-10`}>
                    <h1 className='text-center text-4xl mb-3 font-bold text-secondary'>Food is Secured
                    </h1>
                    <p className='text-center mx-auto leading-6 w- tracking-normal text-secondary/70' >Pre-vetted charities immediately get notified about food donations and can claim any donations they can use to serve hungry clients.</p>
                </div>

                <div className={`  hover:**:text-white hover:bg-primary duration-110  transition ease-in-out   bg-secondary/4 p-10`}>
                    <h1 className='text-center text-4xl mb-3 font-bold text-secondary'>Food Is Picked Up
                    </h1>
                    <p className='text-center mx-auto leading-6 w- tracking-normal text-secondary/70' >The charity, or a network of volunteers, picks up the food and serves it to hungry people.</p>
                </div>


            </motion.div>

        </motion.div>
    );
};

export default Home;