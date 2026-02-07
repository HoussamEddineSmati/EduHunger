import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { courseService } from '../services/courseService';
import { Clock, BookOpen, Search, Filter, TrendingUp, Star, ArrowRight, Loader2, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import HeroBackground from '../components/common/HeroBackground';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [loading, setLoading] = useState(true);
    const { user, logout } = useAuth();

    useEffect(() => {
        const loadCourses = async () => {
            const data = await courseService.getAllCourses();
            setCourses(data);
            setLoading(false);
        };
        loadCourses();
    }, []);

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
        return matchesSearch && matchesLevel;
    });

    const getLevelGradient = (level) => {
        switch (level) {
            case 'Beginner':
                return 'from-emerald-400 to-green-500';
            case 'Intermediate':
                return 'from-amber-400 to-orange-500';
            case 'Advanced':
                return 'from-rose-400 to-pink-500';
            default:
                return 'from-blue-400 to-indigo-500';
        }
    };

    const getLevelBadgeColor = (level) => {
        switch (level) {
            case 'Beginner':
                return 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30';
            case 'Intermediate':
                return 'bg-amber-400/20 text-amber-300 border-amber-400/30';
            case 'Advanced':
                return 'bg-rose-400/20 text-rose-300 border-rose-400/30';
            default:
                return 'bg-blue-400/20 text-blue-300 border-blue-400/30';
        }
    };

    // Navbar Component (same as Home page)
    const Navbar = () => (
        <nav className="px-8 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-white text-xl font-bold tracking-widest">EDULEARN</span>
                </Link>

                {/* Center Nav Links */}
                <div className="hidden md:flex items-center gap-10">
                    <Link to="/dashboard" className="text-white/80 hover:text-white text-sm tracking-wide transition-colors">Dashboard</Link>
                    <Link to="/courses" className="text-white text-sm tracking-wide font-medium">Courses</Link>
                    <Link to="/assessment" className="text-white/80 hover:text-white text-sm tracking-wide transition-colors">Assessment</Link>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                    <span className="text-white/60 text-sm">{user?.name}</span>
                    <button
                        onClick={logout}
                        className="px-5 py-2 border border-white/30 text-white text-sm rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );

    if (loading) {
        return (
            <HeroBackground>
                <Navbar />
                <div className="flex justify-center items-center h-[70vh]">
                    <div className="text-center">
                        <Loader2 className="animate-spin text-white mx-auto mb-4" size={56} />
                        <p className="text-white/60 font-medium">Loading courses...</p>
                    </div>
                </div>
            </HeroBackground>
        );
    }

    return (
        <HeroBackground>
            <Navbar />
            <div className="px-6 lg:px-8 py-8">
                <div className="max-w-7xl mx-auto space-y-8">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                        <div>
                            <h1 className="text-5xl lg:text-7xl font-extralight text-white leading-tight tracking-tight mb-3">
                                Explore <span className="font-light">Courses</span>
                            </h1>
                            <p className="text-lg text-white/60 max-w-lg leading-relaxed">
                                Discover the perfect course to advance your skills and elevate your career
                            </p>
                        </div>

                        {/* Search and Filter Bar */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                            <div className="relative flex-1 sm:w-80">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search courses..."
                                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-all"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                                <select
                                    className="pl-12 pr-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white focus:outline-none focus:border-white/40 appearance-none cursor-pointer font-medium transition-all w-full sm:w-auto"
                                    value={selectedLevel}
                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                    style={{ backgroundImage: 'none' }}
                                >
                                    <option value="All" className="bg-slate-800 text-white">All Levels</option>
                                    <option value="Beginner" className="bg-slate-800 text-white">Beginner</option>
                                    <option value="Intermediate" className="bg-slate-800 text-white">Intermediate</option>
                                    <option value="Advanced" className="bg-slate-800 text-white">Advanced</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="flex items-center gap-2 text-white/60">
                        <TrendingUp size={18} />
                        <span className="font-medium">{filteredCourses.length} courses available</span>
                    </div>

                    {/* Courses Grid */}
                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
                            {filteredCourses.map((course, index) => (
                                <div
                                    key={course.id}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 hover:border-white/30 transition-all duration-300 group cursor-pointer"
                                    style={{
                                        animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                                    }}
                                >
                                    {/* Course Header with Gradient */}
                                    <div className={`h-36 bg-gradient-to-br ${getLevelGradient(course.level)} relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/20"></div>
                                        <div className="absolute inset-0 opacity-30">
                                            <div className="absolute top-4 right-4 w-24 h-24 bg-white rounded-full blur-3xl"></div>
                                            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full blur-2xl"></div>
                                        </div>

                                        {/* Level Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-3 py-1.5 ${getLevelBadgeColor(course.level)} rounded-full text-xs font-bold border backdrop-blur-sm`}>
                                                {course.level}
                                            </span>
                                        </div>

                                        {/* Domain Icon */}
                                        <div className="absolute bottom-4 left-4">
                                            <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                                                <BookOpen size={24} className="text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Course Content */}
                                    <div className="p-6">
                                        {/* Domain Tag */}
                                        <div className="mb-3">
                                            <span className="text-xs font-bold text-white/40 uppercase tracking-wider">
                                                {course.domain?.name || 'General'}
                                            </span>
                                        </div>

                                        {/* Course Title */}
                                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors line-clamp-2">
                                            {course.title}
                                        </h3>

                                        {/* Course Description */}
                                        <p className="text-sm text-white/50 mb-4 line-clamp-3 leading-relaxed">
                                            {course.description}
                                        </p>

                                        {/* Course Meta Info */}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/10 mb-4">
                                            <div className="flex items-center gap-2 text-white/60">
                                                <Clock size={16} />
                                                <span className="text-sm font-medium">{course.estimated_hours || 8}h</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-amber-400">
                                                <Star size={16} fill="currentColor" />
                                                <span className="text-sm font-semibold">4.8</span>
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium py-3 rounded-full hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                            Start Learning
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="inline-block p-6 bg-white/10 backdrop-blur-md rounded-full mb-4">
                                <Search size={48} className="text-white/40" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
                            <p className="text-white/60">Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </HeroBackground>
    );
};

export default Courses;
