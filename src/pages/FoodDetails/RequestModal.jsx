import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const RequestModal = ({ isOpen, onClose, onSubmit, foodId }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    {/* Modal Panel */}
                    <motion.div
                        key="modal-panel"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-base-100 rounded-2xl shadow-2xl overflow-hidden border border-base-200"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-secondary">
                                    Request Food
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="btn btn-sm btn-circle btn-ghost hover:bg-base-200"
                                >
                                    ✕
                                </button>
                            </div>

                            <form onSubmit={(e) => onSubmit(e, foodId)} className="space-y-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Pickup Location</span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="writeLocation"
                                        placeholder="Where will you pick this up?"
                                        className="input input-bordered w-full focus:input-primary bg-base-200/50"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Reason for Request</span>
                                    </label>
                                    <textarea
                                        required
                                        name="whayNeeFood"
                                        placeholder="Why do you need this food?"
                                        className="textarea textarea-bordered w-full h-24 focus:textarea-primary bg-base-200/50 resize-none"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Contact Number</span>
                                    </label>
                                    <input
                                        required
                                        type="tel"
                                        name="contact"
                                        placeholder="Your contact number"
                                        className="input input-bordered w-full focus:input-primary bg-base-200/50"
                                    />
                                </div>

                                <div className="flex flex-col-reverse sm:flex-row gap-3 mt-8">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="btn btn-ghost flex-1"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary flex-1 text-white"
                                    >
                                        Submit Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RequestModal;
