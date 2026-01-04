import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Utensils, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const Overview = () => {
    // Mock Data - Replace with real data in future
    const stats = [
        { label: 'Total Donations', value: '12', icon: Utensils, color: 'bg-primary', textColor: 'text-primary' },
        { label: 'People Helped', value: '45', icon: Users, color: 'bg-secondary', textColor: 'text-secondary' },
        { label: 'Active Requests', value: '3', icon: Clock, color: 'bg-accent', textColor: 'text-accent' },
    ];

    const recentActivity = [
        { id: 1, type: 'Donation', title: 'Homemade Pasta Batch', status: 'Completed', date: '2 hours ago' },
        { id: 2, type: 'Request', title: 'Vegetable Soup', status: 'Pending', date: '5 hours ago' },
        { id: 3, type: 'Donation', title: 'Fruit Basket', status: 'Delivered', date: '1 day ago' },
    ];

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold">Dashboard Overview</h1>
                <p className="text-base-content/60">Here's what's happening with your account.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="card bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-shadow"
                    >
                        <div className="card-body flex flex-row items-center justify-between p-6">
                            <div>
                                <h3 className="stat-title text-base-content/60 font-medium">{stat.label}</h3>
                                <div className="stat-value text-4xl mt-1">{stat.value}</div>
                            </div>
                            <div className={`p-4 rounded-2xl ${stat.color} bg-opacity-10`}>
                                <stat.icon className={`w-8 h-8 ${stat.textColor}`} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2 card bg-base-100 shadow-sm border border-base-200">
                    <div className="card-body p-0">
                        <div className="p-6 border-b border-base-200 flex justify-between items-center">
                            <h3 className="card-title text-lg">Recent Activity</h3>
                            <button className="btn btn-ghost btn-sm text-primary">View All</button>
                        </div>
                        <div className="divide-y divide-base-200">
                            {recentActivity.map((item) => (
                                <div key={item.id} className="p-6 flex items-center justify-between hover:bg-base-200/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-2 h-2 rounded-full ${item.type === 'Donation' ? 'bg-primary' : 'bg-secondary'}`}></div>
                                        <div>
                                            <p className="font-bold">{item.title}</p>
                                            <p className="text-xs text-base-content/60">{item.type} • {item.date}</p>
                                        </div>
                                    </div>
                                    <div className={`badge ${item.status === 'Completed' ? 'badge-success' : item.status === 'Pending' ? 'badge-warning' : 'badge-neutral'} badge-sm`}>
                                        {item.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card bg-gradient-to-br from-primary to-secondary text-primary-content shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title text-2xl mb-2">Ready to share?</h3>
                        <p className="opacity-90 mb-6">Make a difference today by sharing food with your community.</p>
                        <div className="space-y-3">
                            <button className="btn btn-light w-full border-none bg-white/20 hover:bg-white/30 text-white justify-between group">
                                Donate Food
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link to="/contact" className="btn btn-ghost w-full hover:bg-white/10 text-white justify-between group">
                                Contact Support
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
