import React from 'react';

const HeroBackground = ({ children }) => {
    return (
        <div className="relative min-h-screen overflow-hidden" style={{
            background: 'linear-gradient(180deg, #87CEEB 0%, #5BA3D9 20%, #3B7DD8 40%, #2A5FA8 60%, #1E3A5F 80%, #0F1B2D 100%)'
        }}>
            {/* Decorative Birds */}
            <svg className="absolute z-[1]" style={{ top: '18%', left: '28%' }} width="40" height="30" viewBox="0 0 40 30" fill="none">
                <path d="M0 15 Q10 5 20 15 Q30 5 40 15" stroke="rgba(15,27,45,0.5)" strokeWidth="1.5" fill="none" />
            </svg>
            <svg className="absolute z-[1]" style={{ top: '22%', left: '25%' }} width="30" height="22" viewBox="0 0 30 22" fill="none">
                <path d="M0 11 Q7.5 3 15 11 Q22.5 3 30 11" stroke="rgba(15,27,45,0.4)" strokeWidth="1.2" fill="none" />
            </svg>
            <svg className="absolute z-[1]" style={{ top: '15%', left: '32%' }} width="20" height="15" viewBox="0 0 20 15" fill="none">
                <path d="M0 7.5 Q5 2 10 7.5 Q15 2 20 7.5" stroke="rgba(15,27,45,0.3)" strokeWidth="1" fill="none" />
            </svg>

            {/* Mountain/Cityscape Silhouettes */}
            <div className="absolute bottom-0 left-0 right-0 z-[1]" style={{ height: '55%' }}>
                {/* Back layer */}
                <svg className="absolute bottom-0 w-full" style={{ height: '100%' }} viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none">
                    <path d="M0 600 L0 280 Q50 220 100 260 Q130 200 160 240 L180 220 Q200 180 220 210 L260 170 Q280 140 300 180 L320 160 Q340 120 360 150 L400 130 Q420 100 440 140 L460 160 Q480 180 500 170 L520 190 Q540 210 560 200 L580 220 Q600 240 620 230 L660 250 Q700 220 740 260 Q760 230 780 250 L800 240 Q820 200 840 220 L860 200 Q880 160 900 190 L920 170 Q940 130 960 160 L980 140 Q1000 110 1020 150 L1040 170 Q1060 200 1080 180 L1100 200 Q1120 230 1140 210 L1160 230 Q1180 260 1200 240 L1220 260 Q1260 230 1300 270 Q1340 240 1380 280 L1440 250 L1440 600 Z" fill="#162638" />
                </svg>

                {/* Mid layer */}
                <svg className="absolute bottom-0 w-full" style={{ height: '85%' }} viewBox="0 0 1440 500" preserveAspectRatio="none" fill="none">
                    <path d="M0 500 L0 350 Q30 300 60 340 L80 320 Q100 280 120 310 L150 280 Q170 250 190 290 L200 300 Q220 320 240 310 Q280 280 300 320 L320 340 Q350 370 380 350 L420 380 Q450 360 480 390 L500 380 Q520 350 540 370 L560 360 Q580 340 600 360 Q640 320 680 370 L700 390 Q720 400 740 380 Q780 340 800 370 L820 360 Q840 330 860 350 L880 340 Q900 310 920 340 L940 320 Q960 290 980 330 L1000 350 Q1020 370 1040 350 L1060 370 Q1080 400 1100 380 L1120 400 Q1150 380 1180 410 L1200 390 Q1230 360 1260 400 Q1300 370 1340 410 L1380 390 Q1410 370 1440 400 L1440 500 Z" fill="#1a2d42" />
                </svg>

                {/* Front layer */}
                <svg className="absolute bottom-0 w-full" style={{ height: '70%' }} viewBox="0 0 1440 400" preserveAspectRatio="none" fill="none">
                    <path d="M0 400 L0 200 Q10 180 20 200 L30 170 Q40 140 50 160 L60 130 Q70 90 80 120 L90 100 Q100 70 110 100 L120 130 Q130 150 140 140 L150 160 Q160 180 170 170 L180 190 Q200 210 210 200 L230 220 Q250 240 260 230 L280 250 Q300 240 320 260 L340 270 Q370 290 400 300 L440 310 Q470 320 500 330 L1440 400 L0 400 Z" fill="#0f1e30" />
                    <path d="M1440 400 L1440 180 Q1430 160 1420 180 L1410 150 Q1400 120 1390 140 L1380 110 Q1370 80 1360 110 L1350 90 Q1340 60 1330 90 L1320 120 Q1310 140 1300 130 L1290 150 Q1280 170 1270 160 L1250 180 Q1230 200 1220 190 L1200 210 Q1180 230 1160 220 L1140 240 Q1120 260 1100 250 L1080 270 Q1050 290 1020 300 L980 310 Q950 320 920 330 L0 400 L1440 400 Z" fill="#0f1e30" />
                    <path d="M400 400 L400 340 Q450 320 500 330 Q550 310 600 320 Q650 305 700 315 Q750 310 800 320 Q850 310 900 325 Q950 315 1000 330 Q1050 320 1100 340 L1100 400 Z" fill="#0f1e30" />
                </svg>

                {/* Spires */}
                <svg className="absolute bottom-0 w-full" style={{ height: '75%' }} viewBox="0 0 1440 420" preserveAspectRatio="none" fill="none">
                    <path d="M280 420 L280 280 L290 220 L295 260 L300 200 L305 250 L310 180 L320 270 L320 420 Z" fill="#132536" />
                    <path d="M200 420 L200 300 L208 240 L212 270 L218 210 L224 260 L230 420 Z" fill="#132536" />
                    <path d="M350 420 L350 310 L358 260 L362 290 L368 230 L374 280 L380 420 Z" fill="#0f1e30" />
                    <path d="M1120 420 L1120 280 L1130 220 L1135 260 L1140 200 L1145 250 L1150 180 L1160 270 L1160 420 Z" fill="#132536" />
                    <path d="M1200 420 L1200 300 L1208 240 L1212 270 L1218 210 L1224 260 L1230 420 Z" fill="#132536" />
                    <path d="M1080 420 L1080 310 L1088 260 L1092 290 L1098 230 L1104 280 L1110 420 Z" fill="#0f1e30" />
                    <path d="M150 420 L150 320 L155 280 L160 310 L165 270 L170 320 L170 420 Z" fill="#152a3e" />
                    <path d="M420 420 L420 330 L425 300 L430 320 L435 290 L440 330 L440 420 Z" fill="#152a3e" />
                    <path d="M1000 420 L1000 330 L1005 300 L1010 320 L1015 290 L1020 330 L1020 420 Z" fill="#152a3e" />
                    <path d="M1280 420 L1280 320 L1285 280 L1290 310 L1295 270 L1300 320 L1300 420 Z" fill="#152a3e" />
                </svg>
            </div>

            {/* Light streaks */}
            <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] right-[15%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-[-15deg]"></div>
                <div className="absolute top-[15%] right-[10%] w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent rotate-[-12deg]"></div>
                <div className="absolute top-[8%] right-[25%] w-[150px] h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-[-18deg]"></div>
            </div>

            {/* Page content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default HeroBackground;
