import React from "react";
import { motion } from "framer-motion";

const DonorInfo = ({ donatorName, donatorEmail, donatorImage }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 bg-base-100/50 p-4 rounded-xl border border-secondary/10 shadow-sm backdrop-blur-sm"
        >
            <div className="avatar">
                <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                        src={donatorImage || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                        alt={donatorName}
                    />
                </div>
            </div>
            <div>
                <p className="text-sm text-base-content/60 font-medium">Donated by</p>
                <h3 className="text-base font-bold text-secondary">{donatorName}</h3>
                <p className="text-xs text-base-content/50">{donatorEmail}</p>
            </div>
        </motion.div>
    );
};

export default DonorInfo;
