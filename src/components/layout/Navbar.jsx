import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';
import { User, LogOut, BarChart2, BookOpen, Menu } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                                <BarChart2 size={24} />
                            </div>
                            <span className="font-bold text-xl text-slate-800 hidden sm:block">Career Improver</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {user ? (
                            <>
                                <div className="hidden md:flex items-center gap-6 mr-4">
                                    <Link to="/dashboard" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                                        Dashboard
                                    </Link>
                                    <Link to="/courses" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                                        Courses
                                    </Link>
                                    <Link to="/assessment" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                                        Assessment
                                    </Link>
                                </div>

                                <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                                    <div className="hidden sm:flex flex-col items-end">
                                        <span className="text-sm font-medium text-slate-900">{user.name}</span>
                                        <span className="text-xs text-slate-500">{user.level || 'Beginner'}</span>
                                    </div>
                                    <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center border border-blue-200">
                                        <User size={16} />
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={handleLogout}
                                        title="Sign out"
                                        className="ml-2 !p-2"
                                    >
                                        <LogOut size={18} />
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link to="/login">
                                    <Button variant="ghost">Sign In</Button>
                                </Link>
                                <Link to="/register">
                                    <Button variant="primary">Get Started</Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
