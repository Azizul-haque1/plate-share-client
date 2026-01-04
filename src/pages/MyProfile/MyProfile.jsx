import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, LogOut, Edit3, Heart, Utensils, Award, MapPin, X, Camera, User } from 'lucide-react';

const MyProfile = () => {
    const { signOutUser, user, updateUser } = useAuth();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    // const [refetch, setRefatch] = useState(null)

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                toast.success('Logged out successfully');
            })
            .catch(error => {
                console.log(error);
                toast.error('Failed to logout');
            });
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        toast.success("Profile Updated");
        setIsEditModalOpen(false);
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log({ name, photo });
        updateUser(name, photo)
            .then(res => {
                console.log(res);
                // setRefatch(user)
                !user

            })
            .catch(err => console.log(err))
    }

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-base-100 py-20 px-4'>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-base-100 rounded-[2.5rem] shadow-2xl overflow-hidden border border-base-200"
                >
                    {/* Header Banner */}
                    <div className="h-48 bg-gradient-to-r from-primary to-secondary relative flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <h1 className="text-white/20 text-9xl font-bold absolute -bottom-10 select-none">PROFILE</h1>
                    </div>

                    {/* Profile Content */}
                    <div className="px-8 pb-12 relative">
                        {/* Avatar */}
                        <div className="relative -mt-20 mb-6 flex justify-center">
                            <div className="p-2 bg-base-100 rounded-full">
                                <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-primary ring-offset-4 ring-offset-base-100 shadow-xl">
                                    <img
                                        src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                        alt={user.displayName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* User Info */}
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-secondary mb-2">{user.displayName}</h2>
                            <div className="flex items-center justify-center gap-2 text-base-content/60">
                                <Mail className="w-4 h-4" />
                                <span>{user.email}</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-base-content/60 mt-1">
                                <MapPin className="w-4 h-4" />
                                <span>User Location (Unknown)</span>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {[
                                { icon: Utensils, label: "Food Donated", value: "0", color: "text-primary" },
                                { icon: Heart, label: "Requests Made", value: "0", color: "text-red-500" },
                                { icon: Award, label: "Community Rank", value: "Newbie", color: "text-yellow-500" },
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * (idx + 1) }}
                                    className="bg-base-200/50 p-6 rounded-3xl text-center hover:bg-base-200 transition-colors cursor-default border border-transparent hover:border-base-300"
                                >
                                    <div className={`w-12 h-12 mx-auto rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 ${stat.color}`}>
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <div className="text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                                    <div className="text-sm text-base-content/60 font-medium uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <button
                                onClick={() => setIsEditModalOpen(true)}
                                className="btn btn-outline border-base-300 hover:border-base-content hover:bg-base-content hover:text-base-100 rounded-xl flex-1 gap-2"
                            >
                                <Edit3 className="w-4 h-4" />
                                Edit Profile
                            </button>
                            <button
                                onClick={handleLogout}
                                className="btn btn-error text-white rounded-xl flex-1 gap-2 shadow-lg hover:shadow-error/30"
                            >
                                <LogOut className="w-4 h-4" />
                                Log Out
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Edit Profile Modal */}
            <AnimatePresence>
                {isEditModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-base-100 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
                        >
                            <div className="p-6 border-b border-base-200 flex justify-between items-center bg-base-100">
                                <h3 className="text-xl font-bold">Edit Profile</h3>
                                <button
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="btn btn-ghost btn-sm btn-circle"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <form
                                onSubmit={handleUpdate}

                                className="p-8 space-y-6">
                                {/* Photo URL Input */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium flex items-center gap-2">
                                            <Camera className="w-4 h-4" />
                                            Photo URL
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name='photo'
                                        defaultValue={user?.photoURL}
                                        placeholder="https://example.com/photo.jpg"
                                        className="input input-bordered rounded-xl focus:input-primary"
                                    />
                                </div>

                                {/* Display Name Input */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            Display Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name='name'
                                        defaultValue={user?.displayName}
                                        placeholder="Your Name"
                                        className="input input-bordered rounded-xl focus:input-primary"
                                    />
                                </div>

                                <div className="pt-4 flex gap-3">
                                    <button
                                        onClick={() => setIsEditModalOpen(false)}
                                        className="btn btn-ghost flex-1 rounded-xl"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type='submit'
                                        className="btn btn-primary flex-1 rounded-xl text-white"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MyProfile;