import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { courseService } from '../services/courseService';
import { assessmentService } from '../services/assessmentService';
import HeroBackground from '../components/common/HeroBackground';
import {
    BookOpen, Trophy, Target, ArrowRight, Loader2,
    TrendingUp, Award, LogOut, BarChart3, Star
} from 'lucide-react';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [stats, setStats] = useState({
        completedCourses: 0,
        inProgressCourses: 0,
        totalEnrolled: 0,
        skillLevel: 'Beginner'
    });
    const [recommendations, setRecommendations] = useState([]);
    const [skillResults, setSkillResults] = useState([]);
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!user) return;

            const [results, recs, userEnrollments, domains] = await Promise.all([
                assessmentService.getUserResults(user.id),
                courseService.getRecommendations(user.id),
                courseService.getUserEnrollments(user.id),
                assessmentService.getDomains()
            ]);

            const lastResult = results[results.length - 1];
            const currentLevel = lastResult ? lastResult.skill_level : 'Beginner';
            const completed = userEnrollments.filter(e => e.status === 'completed');
            const inProgress = userEnrollments.filter(e => e.status === 'in_progress');

            const enrichedResults = results.map(r => ({
                ...r,
                domain: domains.find(d => d.id === r.skill_domain_id)
            }));

            setStats({
                completedCourses: completed.length,
                inProgressCourses: inProgress.length,
                totalEnrolled: userEnrollments.length,
                skillLevel: currentLevel
            });

            setSkillResults(enrichedResults);
            setRecommendations(recs);
            setEnrollments(userEnrollments);
            setLoading(false);
        };

        fetchData();
    }, [user]);

    // Navbar Component
    const Navbar = () => (
        <nav className="px-8 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-white text-xl font-bold tracking-widest">EDUHUNGER</span>
                </Link>

                {/* Center Nav Links */}
                <div className="hidden md:flex items-center gap-10">
                    <Link to="/dashboard" className="text-white text-sm tracking-wide font-medium">Dashboard</Link>
                    <Link to="/courses" className="text-white/80 hover:text-white text-sm tracking-wide transition-colors">Courses</Link>
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
                        <p className="text-white/60 font-medium">Loading your dashboard...</p>
                    </div>
                </div>
            </HeroBackground>
        );
    }

    const overallProgress = stats.totalEnrolled > 0
        ? Math.round((stats.completedCourses / stats.totalEnrolled) * 100)
        : 0;

    return (
        <HeroBackground>
            <Navbar />
            <div className="px-6 lg:px-8 py-8">
                <div className="max-w-7xl mx-auto space-y-8">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                        <div>
                            <h1 className="text-5xl lg:text-7xl font-extralight text-white leading-tight tracking-tight mb-3">
                                Your <span className="font-light">Journey</span>
                            </h1>
                            <p className="text-lg text-white/60 max-w-lg leading-relaxed">
                                Track progress, complete assessments, and grow your skills
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to="/assessment">
                                <button className="px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-[1.02] transition-all flex items-center gap-2">
                                    <Target size={18} />
                                    Take Assessment
                                </button>
                            </Link>
                            <Link to="/courses">
                                <button className="px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all">
                                    Browse Courses
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Total Enrolled */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-orange-400/20 rounded-xl">
                                    <BookOpen size={20} className="text-orange-400" />
                                </div>
                                <span className="text-sm font-medium text-white/60">Total Enrolled</span>
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">{stats.totalEnrolled}</div>
                            <div className="flex items-center gap-1.5 text-xs text-white/50">
                                <TrendingUp size={12} />
                                Keep learning!
                            </div>
                        </div>

                        {/* Completed */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-400/20 rounded-xl">
                                    <Trophy size={20} className="text-emerald-400" />
                                </div>
                                <span className="text-sm font-medium text-white/60">Completed</span>
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">{stats.completedCourses}</div>
                            <div className="flex items-center gap-1.5 text-xs text-emerald-300">
                                <TrendingUp size={12} />
                                Great progress!
                            </div>
                        </div>

                        {/* In Progress */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-amber-400/20 rounded-xl">
                                    <BarChart3 size={20} className="text-amber-400" />
                                </div>
                                <span className="text-sm font-medium text-white/60">In Progress</span>
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">{stats.inProgressCourses}</div>
                            <div className="flex items-center gap-1.5 text-xs text-amber-300">
                                Stay focused!
                            </div>
                        </div>

                        {/* Skill Level */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-400/20 rounded-xl">
                                    <Award size={20} className="text-purple-400" />
                                </div>
                                <span className="text-sm font-medium text-white/60">Skill Level</span>
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">{stats.skillLevel}</div>
                            <div className="flex items-center gap-1.5 text-xs text-white/50">
                                Current rank
                            </div>
                        </div>
                    </div>

                    {/* Middle Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Skill Analytics */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-6">Skill Analytics</h3>
                            {skillResults.length > 0 ? (
                                <div className="flex items-end gap-3 h-40">
                                    {skillResults.map((result, i) => {
                                        const height = Math.max(result.score, 10);
                                        const domainLabel = result.domain?.name?.split(' ')[0] || `D${i + 1}`;
                                        return (
                                            <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                                <span className="text-xs font-semibold text-white">{result.score}%</span>
                                                <div className="w-full bg-white/10 rounded-lg overflow-hidden" style={{ height: '100px' }}>
                                                    <div
                                                        className="w-full rounded-lg transition-all duration-500"
                                                        style={{
                                                            height: `${height}%`,
                                                            marginTop: `${100 - height}%`,
                                                            background: 'linear-gradient(to top, #fb923c, #fdba74)'
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-[10px] text-white/40 font-medium text-center leading-tight">{domainLabel}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-40 text-center">
                                    <Target size={32} className="text-white/30 mb-3" />
                                    <p className="text-sm text-white/50">Take an assessment to see your analytics</p>
                                    <Link to="/assessment" className="text-xs text-orange-400 font-semibold mt-2">
                                        Start Assessment →
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Recommended Courses */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-white">Recommended</h3>
                                <Link to="/courses" className="text-xs text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                                    View All
                                </Link>
                            </div>
                            {recommendations.length > 0 ? (
                                <div className="space-y-3">
                                    {recommendations.slice(0, 3).map((course) => (
                                        <Link
                                            key={course.id}
                                            to="/courses"
                                            className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                                        >
                                            <div className="p-2 bg-orange-400/20 rounded-lg">
                                                <BookOpen size={16} className="text-orange-400" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-semibold text-white truncate">{course.title}</div>
                                                <div className="text-xs text-white/50">{course.level}</div>
                                            </div>
                                            <ArrowRight size={14} className="text-white/30 group-hover:text-orange-400 transition-colors" />
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <Target size={32} className="text-white/30 mx-auto mb-3" />
                                    <p className="text-sm text-white/50 mb-2">Complete assessments</p>
                                    <Link to="/assessment" className="text-xs text-orange-400 font-semibold">
                                        Take Assessment
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Learning Progress */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-6">Progress</h3>
                            <div className="flex flex-col items-center">
                                <div className="relative w-32 h-32 mb-4">
                                    <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                                        <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
                                        {stats.completedCourses > 0 && (
                                            <circle cx="60" cy="60" r="50" fill="none" stroke="#fb923c" strokeWidth="10"
                                                strokeDasharray={`${(stats.completedCourses / Math.max(stats.totalEnrolled, 1)) * 314} 314`}
                                                strokeLinecap="round"
                                            />
                                        )}
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-3xl font-bold text-white">{overallProgress}%</span>
                                        <span className="text-[10px] text-white/50 font-medium">Overall</span>
                                    </div>
                                </div>
                                <div className="space-y-2 w-full">
                                    <div className="flex items-center justify-between text-xs text-white/60">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                                            <span>Completed</span>
                                        </div>
                                        <span className="font-semibold text-white">{stats.completedCourses}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-white/60">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                            <span>Remaining</span>
                                        </div>
                                        <span className="font-semibold text-white">{stats.totalEnrolled - stats.completedCourses}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-16">

                        {/* My Courses */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-white">My Courses</h3>
                                <Link to="/courses" className="text-xs text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                                    View All
                                </Link>
                            </div>
                            {enrollments.length > 0 ? (
                                <div className="space-y-3">
                                    {enrollments.slice(0, 4).map((enrollment) => {
                                        const statusColors = {
                                            completed: 'bg-emerald-400/20 text-emerald-300',
                                            in_progress: 'bg-amber-400/20 text-amber-300',
                                        };
                                        const statusLabels = {
                                            completed: 'Completed',
                                            in_progress: 'In Progress',
                                        };
                                        return (
                                            <div key={enrollment.id} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                                    {enrollment.course?.title?.charAt(0) || 'C'}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-sm font-semibold text-white truncate">{enrollment.course?.title || 'Course'}</div>
                                                    <div className="text-xs text-white/50">Progress: {enrollment.progress_percentage || 0}%</div>
                                                </div>
                                                <span className={`text-[10px] font-semibold px-3 py-1.5 rounded-full border border-white/10 ${statusColors[enrollment.status] || 'bg-white/10 text-white/50'}`}>
                                                    {statusLabels[enrollment.status] || enrollment.status}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <BookOpen size={40} className="text-white/30 mx-auto mb-3" />
                                    <p className="text-sm text-white/50 mb-3">No courses enrolled yet</p>
                                    <Link to="/courses" className="inline-block px-5 py-2.5 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-[1.02] transition-all">
                                        Browse Courses
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Study Summary */}
                        <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-md border border-orange-400/30 rounded-2xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-6">Study Summary</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-orange-400/20 rounded-lg">
                                            <Trophy size={18} className="text-orange-400" />
                                        </div>
                                        <span className="text-sm text-white">Assessments Taken</span>
                                    </div>
                                    <span className="text-xl font-bold text-white">{skillResults.length}</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-emerald-400/20 rounded-lg">
                                            <Award size={18} className="text-emerald-400" />
                                        </div>
                                        <span className="text-sm text-white">Skills Evaluated</span>
                                    </div>
                                    <span className="text-xl font-bold text-white">{skillResults.length}</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-400/20 rounded-lg">
                                            <BookOpen size={18} className="text-purple-400" />
                                        </div>
                                        <span className="text-sm text-white">Courses Enrolled</span>
                                    </div>
                                    <span className="text-xl font-bold text-white">{stats.totalEnrolled}</span>
                                </div>
                            </div>
                            <Link to="/assessment" className="mt-6 block">
                                <button className="w-full py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                    Improve Skills
                                    <ArrowRight size={16} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </HeroBackground>
    );
};

export default Dashboard;
