import React from 'react';
import { Outlet, Link, useLocation } from 'react-router'; // Assuming react-router-dom is used
import { LayoutDashboard, User, List, LogOut, Menu, X, Utensils } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';
import useAuth from '../../hooks/useAuth';

const DashboardLayout = () => {
    const { user, signOutUser } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const location = useLocation();

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    const navItems = [
        { label: 'Overview', path: '/dashboard', icon: LayoutDashboard },
        { label: 'My Profile', path: '/dashboard/my-profile', icon: User },
        { label: 'My Requests', path: '/dashboard/my-food-request', icon: List },
    ];

    const handleLogout = () => {
        signOutUser();
    };

    return (
        <div className="flex h-screen bg-base-200">
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeSidebar}
                        className="fixed inset-0 bg-black/50 z-20 lg:hidden backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                initial={false}
                className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-base-100 border-r border-base-300 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
            >
                <div className="h-full flex flex-col">
                    {/* Sidebar Header */}
                    <div className="h-16 flex items-center px-6 border-b border-base-300">
                        <Link to="/" className="text-xl font-bold text-primary flex items-center gap-2">
                            <span className="text-2xl">🍽️</span> PlateShare
                        </Link>
                        <button onClick={closeSidebar} className="lg:hidden ml-auto btn btn-ghost btn-sm btn-circle">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                        <div className="mb-6">
                            <p className="px-4 text-xs font-semibold text-base-content/50 uppercase tracking-wider mb-2">Menu</p>
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={closeSidebar}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive ? 'bg-primary text-primary-content shadow-lg shadow-primary/30' : 'hover:bg-base-200 text-base-content'}`}
                                    >
                                        <item.icon className={`w-5 h-5 ${isActive ? '' : 'group-hover:scale-110 transition-transform'}`} />
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>

                    {/* User Profile & Logout */}
                    <div className="p-4 border-t border-base-300 bg-base-100/50">
                        <div className="flex items-center gap-3 mb-4 px-2">
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="avatar" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold truncate">{user?.displayName || 'User'}</p>
                                <p className="text-xs text-base-content/60 truncate">{user?.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline btn-error w-full gap-2 rounded-xl"
                        >
                            <LogOut size={18} />
                            Logout
                        </button>
                    </div>
                    
                </div>
            </motion.aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Header */}
                <header className="h-16 flex items-center justify-between px-6 bg-base-100/80 backdrop-blur-md border-b border-base-200 sticky top-0 z-10">
                    <button onClick={toggleSidebar} className="lg:hidden btn btn-ghost btn-circle">
                        <Menu size={24} />
                    </button>
                    <div className="flex items-center gap-4 ml-auto">
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold leading-none">{user?.displayName || 'User'}</p>
                                <p className="text-xs text-base-content/60 leading-none">{user?.email}</p>
                            </div>
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
