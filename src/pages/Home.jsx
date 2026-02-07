import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import HeroBackground from '../components/common/HeroBackground';

const Home = () => {
    return (
        <HeroBackground>
            {/* Navbar */}
            <nav className="px-8 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-white text-xl font-bold tracking-widest">EDUHUNGER</span>
                    </div>

                    {/* Center Nav Links */}
                    <div className="hidden md:flex items-center gap-10">
                        <Link to="/courses" className="text-white/80 hover:text-white text-sm tracking-wide transition-colors">Discover</Link>
                        <Link to="/about" className="text-white/80 hover:text-white text-sm tracking-wide transition-colors">About us</Link>
                        <Link to="/assessment" className="text-white/80 hover:text-white text-sm tracking-wide transition-colors">Assessment</Link>
                        <Link to="/login" className="text-white/80 hover:text-white text-sm tracking-wide transition-colors">Sign In</Link>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-6">
                        <button className="text-white/80 hover:text-white transition-colors">
                            <Search size={20} />
                        </button>
                        <Link to="/register">
                            <button className="px-5 py-2 border border-white/30 text-white text-sm rounded-full hover:bg-white/10 transition-all">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="max-w-7xl mx-auto px-8 mt-8 lg:mt-16 pb-80 lg:pb-96">
                {/* Main Heading */}
                <h1 className="text-6xl sm:text-7xl lg:text-[110px] font-extralight text-white leading-none tracking-tight text-center">
                    Elevate Your
                    <br />
                    <span className="font-light">Career</span>
                </h1>

                {/* Subtitle and CTA Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-10 lg:mt-14 gap-8">
                    {/* Subtitle */}
                    <p className="text-white/60 text-base lg:text-lg max-w-md leading-relaxed">
                        Unlock your full potential with personalized learning
                        paths. Discover skills that matter and build the future
                        you deserve.
                    </p>

                    {/* CTA */}
                    <Link
                        to="/register"
                        className="group flex items-center gap-3 text-white hover:text-white/80 transition-colors flex-shrink-0"
                    >
                        <span className="text-sm font-medium tracking-wide">Start my journey</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Featured Dashboard Card */}
            <div className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2" style={{ width: 'min(700px, 85vw)' }}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-t-2xl overflow-hidden shadow-2xl">
                    {/* Card Header Bar */}
                    <div className="flex items-center gap-2 px-5 py-3 bg-white/5 border-b border-white/10">
                        <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                        <span className="ml-3 text-white/40 text-xs">Career Dashboard</span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex gap-6">
                        {/* Left Panel */}
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">JS</span>
                                </div>
                                <div>
                                    <div className="text-white text-sm font-medium">React Development</div>
                                    <div className="text-white/40 text-xs">12 modules completed</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-1.5">
                                    <span className="text-white/50">Progress</span>
                                    <span className="text-orange-400 font-medium">78%</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[78%] bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <div className="bg-white/5 rounded-lg p-3">
                                    <div className="text-white/40 text-xs">Skills Gained</div>
                                    <div className="text-white font-semibold text-lg">24</div>
                                </div>
                                <div className="bg-white/5 rounded-lg p-3">
                                    <div className="text-white/40 text-xs">Certificates</div>
                                    <div className="text-white font-semibold text-lg">3</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel - Hidden on small screens */}
                        <div className="hidden sm:block flex-1 border-l border-white/10 pl-6 space-y-3">
                            <div className="text-white/50 text-xs font-medium uppercase tracking-wider">Recent Activity</div>
                            {[
                                { label: 'Advanced React Patterns', time: '2h ago', color: 'bg-blue-400' },
                                { label: 'System Design Basics', time: '1d ago', color: 'bg-purple-400' },
                                { label: 'TypeScript Mastery', time: '3d ago', color: 'bg-emerald-400' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                                    <div className="flex-1">
                                        <div className="text-white/80 text-xs">{item.label}</div>
                                    </div>
                                    <span className="text-white/30 text-xs">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </HeroBackground>
    );
};

export default Home;
