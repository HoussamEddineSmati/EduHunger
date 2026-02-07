import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assessmentService } from '../services/assessmentService';
import { useAuth } from '../context/AuthContext';
import { Award, Loader2, CheckCircle2, ArrowRight, Brain, ArrowLeft, LogOut } from 'lucide-react';
import HeroBackground from '../components/common/HeroBackground';

const Assessment = () => {
    const { user, logout } = useAuth();
    const [domains, setDomains] = useState([]);
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [assessmentData, setAssessmentData] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDomains = async () => {
            const data = await assessmentService.getDomains();
            setDomains(data);
            setLoading(false);
        };
        fetchDomains();
    }, []);

    useEffect(() => {
        const fetchAssessment = async () => {
            if (selectedDomain) {
                setLoading(true);
                const data = await assessmentService.getAssessmentByDomain(selectedDomain);
                setAssessmentData(data);
                setCurrentQuestionIndex(0);
                setAnswers({});
                setIsFinished(false);
                setResult(null);
                setSelectedAnswer(null);
                setLoading(false);
            }
        };
        fetchAssessment();
    }, [selectedDomain]);

    const handleAnswer = (optionId) => {
        const currentQuestion = assessmentData.questions[currentQuestionIndex];
        setSelectedAnswer(optionId);
        setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionId }));

        setTimeout(() => {
            if (currentQuestionIndex < assessmentData.questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setSelectedAnswer(null);
            } else {
                finishAssessment({ ...answers, [currentQuestion.id]: optionId });
            }
        }, 500);
    };

    const finishAssessment = async (finalAnswers) => {
        setLoading(true);
        const attempt = await assessmentService.submitAssessment(user.id, assessmentData.id, finalAnswers);
        setResult(attempt);
        setIsFinished(true);
        setLoading(false);
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
                    <Link to="/courses" className="text-white/80 hover:text-white text-sm tracking-wide transition-colors">Courses</Link>
                    <Link to="/assessment" className="text-white text-sm tracking-wide font-medium">Assessment</Link>
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
                        <p className="text-white/60 font-medium">Loading...</p>
                    </div>
                </div>
            </HeroBackground>
        );
    }

    // Domain Selection View
    if (!selectedDomain) {
        return (
            <HeroBackground>
                <Navbar />
                <div className="px-6 lg:px-8 py-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <div className="inline-block p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl mb-6">
                                <Brain size={40} className="text-white" />
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extralight text-white leading-tight tracking-tight mb-4">
                                Skill <span className="font-light">Assessment</span>
                            </h1>
                            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                                Test your knowledge and get personalized course recommendations
                            </p>
                        </div>

                        {/* Domain Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
                            {domains.map((domain, index) => (
                                <div
                                    key={domain.id}
                                    onClick={() => setSelectedDomain(domain.id)}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 cursor-pointer hover:bg-white/15 hover:border-white/30 transition-all duration-300 group"
                                    style={{
                                        animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                                    }}
                                >
                                    {/* Domain Icon */}
                                    <div className="mb-6 p-4 bg-gradient-to-br from-orange-400/20 to-orange-600/20 group-hover:from-orange-400/30 group-hover:to-orange-600/30 rounded-2xl w-fit transition-all">
                                        <span className="font-bold text-3xl text-orange-400">
                                            {domain.name.charAt(0)}
                                        </span>
                                    </div>

                                    {/* Domain Name */}
                                    <h3 className="font-semibold text-xl text-white mb-3 group-hover:text-orange-300 transition-colors">
                                        {domain.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                                        {domain.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="flex items-center text-orange-400 font-medium text-sm group-hover:gap-2 transition-all">
                                        Start Assessment <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            ))}
                        </div>
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
    }

    // Results View
    if (isFinished && result) {
        const getScoreColor = (score) => {
            if (score >= 80) return 'from-emerald-400 to-green-500';
            if (score >= 60) return 'from-amber-400 to-orange-500';
            return 'from-rose-400 to-pink-500';
        };

        const getScoreMessage = (score) => {
            if (score >= 80) return 'Excellent work!';
            if (score >= 60) return 'Good job!';
            return 'Keep practicing!';
        };

        return (
            <HeroBackground>
                <Navbar />
                <div className="px-6 lg:px-8 py-8 flex items-center justify-center min-h-[80vh]">
                    <div className="max-w-2xl w-full">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center">
                            {/* Success Icon */}
                            <div className="mb-6 flex justify-center">
                                <div className={`p-6 bg-gradient-to-br ${getScoreColor(result.score)} rounded-full`}>
                                    <Award size={56} className="text-white" />
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl font-light text-white mb-2">Assessment Complete!</h2>
                            <p className="text-white/60 mb-8">{getScoreMessage(result.score)}</p>

                            {/* Score Cards */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <p className="text-sm font-medium text-white/50 mb-2">Your Score</p>
                                    <p className="text-5xl font-bold text-orange-400">
                                        {result.score}%
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <p className="text-sm font-medium text-white/50 mb-2">Skill Level</p>
                                    <p className="text-4xl font-bold text-white">
                                        {result.skill_level}
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setSelectedDomain(null)}
                                    className="flex-1 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all"
                                >
                                    Back to Assessments
                                </button>
                                <button
                                    onClick={() => navigate('/courses')}
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                                >
                                    View Courses
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </HeroBackground>
        );
    }

    // Quiz View
    if (!assessmentData) return <div>Assessment not found.</div>;
    const currentQuestion = assessmentData.questions[currentQuestionIndex];
    if (!currentQuestion) return <div>No questions in this assessment.</div>;

    const progress = ((currentQuestionIndex + 1) / assessmentData.questions.length) * 100;

    const getDifficultyColor = (difficulty) => {
        switch (difficulty?.toLowerCase()) {
            case 'easy':
                return 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30';
            case 'medium':
                return 'bg-amber-400/20 text-amber-300 border-amber-400/30';
            case 'hard':
                return 'bg-rose-400/20 text-rose-300 border-rose-400/30';
            default:
                return 'bg-blue-400/20 text-blue-300 border-blue-400/30';
        }
    };

    return (
        <HeroBackground>
            <Navbar />
            <div className="px-6 lg:px-8 py-8">
                <div className="max-w-3xl mx-auto">
                    {/* Back Button */}
                    <button
                        onClick={() => setSelectedDomain(null)}
                        className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span className="text-sm font-medium">Back to Assessments</span>
                    </button>

                    {/* Header */}
                    <div className="mb-8 flex justify-between items-center">
                        <div>
                            <p className="text-sm font-medium text-white/50 mb-1">
                                Question {currentQuestionIndex + 1} of {assessmentData.questions.length}
                            </p>
                            <p className="text-lg font-semibold text-orange-400">
                                {assessmentData.title}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold text-white">{Math.round(progress)}%</p>
                            <p className="text-xs text-white/50">Complete</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-8 bg-white/10 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-orange-400 to-orange-500 h-full rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    {/* Question Card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-10">
                        <div className="flex justify-between items-start gap-4 mb-8">
                            <h2 className="text-2xl font-light text-white leading-relaxed flex-1">
                                {currentQuestion.question_text}
                            </h2>
                            <span className={`px-3 py-1.5 ${getDifficultyColor(currentQuestion.difficulty_level)} rounded-full text-xs font-bold border whitespace-nowrap`}>
                                {currentQuestion.difficulty_level || 'Medium'}
                            </span>
                        </div>

                        {/* Options */}
                        <div className="space-y-4">
                            {currentQuestion.options.map((option, index) => {
                                const isSelected = selectedAnswer === option.id;
                                const letter = String.fromCharCode(65 + index);

                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => handleAnswer(option.id)}
                                        disabled={selectedAnswer !== null}
                                        className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${isSelected
                                                ? 'border-orange-400 bg-orange-400/20 shadow-lg scale-[1.02]'
                                                : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                                            } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold transition-all ${isSelected
                                                    ? 'border-orange-400 bg-orange-400 text-white scale-110'
                                                    : 'border-white/30 text-white/60'
                                                }`}>
                                                {letter}
                                            </div>
                                            <span className={`flex-1 font-medium ${isSelected ? 'text-white' : 'text-white/80'}`}>
                                                {option.answer_text}
                                            </span>
                                            {isSelected && (
                                                <CheckCircle2 className="text-orange-400" size={24} />
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </HeroBackground>
    );
};

export default Assessment;
