import React from "react";
import { Check, X } from "lucide-react";

const RequestTable = ({ requests, onAccept, onReject }) => {
    if (!requests || requests.length === 0) {
        return (
            <div className="text-center py-10 bg-base-200/50 rounded-2xl mt-10">
                <p className="text-base-content/60">No requests yet for this food.</p>
            </div>
        );
    }

    

    return (
        <div className="w-full mt-16 mb-10 overflow-hidden rounded-2xl border border-base-200 shadow-lg bg-base-100">
            <div className="p-6 bg-base-100 border-b border-base-200">
                <h2 className="text-2xl font-bold text-secondary">Request History</h2>
                <p className="text-sm text-base-content/60">Manage incoming requests for your donation.</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-base-200/50 text-base-content uppercase text-xs font-bold tracking-wider">
                        <tr>
                            <th className="py-4 pl-6">Requester</th>
                            <th>Details</th>
                            <th>Status</th>
                            <th className="pr-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-base-200">
                        {requests.map((request, index) => (
                            <tr key={request._id} className="hover:bg-base-50 transition-colors">
                                <td className="pl-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12 bg-base-300">
                                                {request.photoURL ? (
                                                    <img src={request.photoURL} alt={request.name} />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-xl font-bold text-base-content/50">
                                                        {request.name?.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-base-content">{request.name}</div>
                                            <div className="text-sm text-base-content/50">{request.userEmail}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div className="space-y-1">
                                        <p className="text-sm">
                                            <span className="font-semibold">Loc:</span> {request.write_location}
                                        </p>
                                        <p className="text-sm">
                                            <span className="font-semibold">Contact:</span> {request.contactNo}
                                        </p>
                                        <p className="text-xs text-base-content/60 mt-1 max-w-xs truncate" title={request.whayNeeFood}>
                                            "{request.whayNeeFood}"
                                        </p>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <span
                                        className={`badge badge-lg font-medium ${request.status === "Accepted"
                                                ? "badge-success text-white"
                                                : request.status === "Rejected"
                                                    ? "badge-error text-white"
                                                    : "badge-warning text-white"
                                            }`}
                                    >
                                        {request.status}
                                    </span>
                                </td>
                                <td className="pr-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => onAccept(request._id, request.foodId)}
                                            disabled={request.status !== "pending"}
                                            className="btn btn-sm btn-success text-white btn-square tooltip tooltip-left"
                                            data-tip="Accept"
                                        >
                                            <Check className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => onReject(request._id)}
                                            disabled={request.status !== "pending"}
                                            className="btn btn-sm btn-error text-white btn-square tooltip tooltip-left"
                                            data-tip="Reject"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
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

export default RequestTable;
