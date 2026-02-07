import React from 'react';

const ProgressBar = ({ value, max = 100, color = 'primary', className = '', showLabel = false }) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    const colors = {
        primary: 'bg-blue-600',
        secondary: 'bg-emerald-500',
        warning: 'bg-amber-500',
        danger: 'bg-red-600',
    };

    return (
        <div className={`w-full ${className}`}>
            {showLabel && (
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">{percentage.toFixed(0)}%</span>
                </div>
            )}
            <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div
                    className={`h-2.5 rounded-full transition-all duration-300 ${colors[color] || colors.primary}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
