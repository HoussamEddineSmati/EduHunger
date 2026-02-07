import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Target, Users, Award, TrendingUp } from 'lucide-react';
import HeroBackground from '../components/common/HeroBackground';

const About = () => {
    return (
        <HeroBackground>
            {/* Navbar */}
            <nav className="px-8 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-white text-xl font-bold tracking-widest">EDUHUNGER</span>
                    </Link>

                    {/* Center Nav Links */}
                    <div className="hidden md:flex items-center gap-10">
                        <Link to="/courses" className="text-white/80 hover:text-white text-sm tracking-wide transition-colors">Discover</Link>
                        <Link to="/about" className="text-white text-sm tracking-wide font-medium">About us</Link>
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

            {/* About Content */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/60 text-xs font-medium tracking-wide">
                            About us
                        </span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extralight text-white leading-tight tracking-tight mb-6">
                        We take pride in delivering
                        <br />
                        <span className="font-light">Exceptional results</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                        We're an education platform focused on creating high-performing learning paths and assessment strategies that fuel growth.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
                    {/* Large Image */}
                    <div className="lg:col-span-1 lg:row-span-2">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden h-full min-h-[400px] flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <Target size={40} className="text-white" />
                                </div>
                                <h3 className="text-white text-2xl font-semibold mb-3">Expert-Led Learning</h3>
                                <p className="text-white/60 text-sm">Industry professionals crafting your learning journey</p>
                            </div>
                        </div>
                    </div>

                    {/* Top Right */}
                    <div className="lg:col-span-2">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden h-full min-h-[200px] flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Users size={32} className="text-white" />
                                </div>
                                <h3 className="text-white text-xl font-semibold mb-2">Collaborative Environment</h3>
                                <p className="text-white/60 text-sm">Learn together, grow together</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Right */}
                    <div className="lg:col-span-2">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden h-full min-h-[200px] flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Award size={32} className="text-white" />
                                </div>
                                <h3 className="text-white text-xl font-semibold mb-2">Results-Driven Approach</h3>
                                <p className="text-white/60 text-sm">Measurable progress, tangible outcomes</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trusted By Section */}
                <div className="text-center mb-20">
                    <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-8">Trusted by learners worldwide</p>
                    <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
                        {['Frontend', 'Backend', 'Cloud', 'Database', 'Security'].map((tech, i) => (
                            <div key={i} className="text-white/40 font-semibold text-lg tracking-wide">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quote Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-md border border-orange-400/30 rounded-3xl p-12 relative">
                        {/* Quote Icon */}
                        <div className="absolute top-8 left-8 text-orange-400/30">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                            </svg>
                        </div>

                        {/* Quote Text */}
                        <blockquote className="text-white text-xl lg:text-2xl font-light leading-relaxed text-center mb-8 relative z-10">
                            "We believe great education starts with empathy and ends with impact. Our approach is simple: listen closely, solve creatively, and build with purpose."
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                                EH
                            </div>
                            <div>
                                <div className="text-white font-semibold">EduHunger Team</div>
                                <div className="text-white/50 text-sm">Founders</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 mb-12">
                    {[
                        { icon: Users, label: 'Active Learners', value: '10K+', color: 'from-blue-400 to-blue-600' },
                        { icon: Award, label: 'Courses', value: '50+', color: 'from-purple-400 to-purple-600' },
                        { icon: Target, label: 'Assessments', value: '75+', color: 'from-orange-400 to-orange-600' },
                        { icon: TrendingUp, label: 'Success Rate', value: '95%', color: 'from-emerald-400 to-emerald-600' }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                            <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                                <stat.icon size={24} className="text-white" />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-white/60 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center pb-16">
                    <h2 className="text-3xl lg:text-5xl font-light text-white mb-6">
                        Ready to start your journey?
                    </h2>
                    <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
                        Join thousands of learners who are already transforming their careers with EDUHUNGER.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Link to="/register">
                            <button className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-[1.02] transition-all">
                                Get Started Free
                            </button>
                        </Link>
                        <Link to="/courses">
                            <button className="px-8 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all">
                                Explore Courses
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </HeroBackground>
    );
};

export default About;
