import React from 'react';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const MyProfile = () => {
    const { signOutUser } = useAuth()



    const handleLogout = () => {
        signOutUser()
            .then(res => {
                toast.success('logout', res)
            })
            .catch(error => {
                console.log(error);
            })

    }
    const { user } = useAuth()
    return (
        <div className='w-10/12 mx-auto my-20'>

            <div className="border shadow-xl border-secondary/10 rounded-2xl p-5">
                {/* donor info */}
                <h1 className="text-3xl  font-bold text-secondary text-center mb-10">
                    User Information
                </h1>
                <div className=" flex flex-col w-full items-center  justify-center  ">
                    <img className="rounded-2xl mb-10 w-50" src={user.photoURL} alt="" />
                    <div className="">
                        <p className="text-3xl text-primary  text-center mb-3 font-bold">
                            <span className="font-normal">{user.displayName}</span>
                        </p>
                        <p className="text-2xl mb-20 text-secondary font-semibold">
                            <span className="font-normal">{user.email}</span>
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button onClick={handleLogout} className="btn btn-primary">Log out</button>

                </div>

            </div>




        </div>
    );
};

export default MyProfile;