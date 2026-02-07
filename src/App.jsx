import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Assessment from './pages/Assessment';
import Home from './pages/Home';

// Protected Route specific component
const ProtectedRoute = ({ children }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

// Public Route (redirects to dashboard if already logged in)
const PublicRoute = ({ children }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) return null;

    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Public Standalone Home Page */}
                    <Route path="/" element={<Home />} />

                    {/* Public Auth Routes */}
                    <Route path="/login" element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    } />

                    <Route path="/register" element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    } />

                    {/* Standalone Full-Screen Pages (like Home) */}
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } />

                    <Route path="/courses" element={
                        <ProtectedRoute>
                            <Courses />
                        </ProtectedRoute>
                    } />

                    <Route path="/assessment" element={
                        <ProtectedRoute>
                            <Assessment />
                        </ProtectedRoute>
                    } />

                    {/* Protected App Layout Routes (currently empty) */}
                    <Route element={<Layout />}>
                    </Route>

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
