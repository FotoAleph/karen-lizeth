
import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((difference / 1000 / 60) % 60),
                segundos: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval] && timeLeft[interval] !== 0) {
            return;
        }

        timerComponents.push(
            <div key={interval} className="flex flex-col items-center mx-2 sm:mx-4">
                <span className="text-2xl sm:text-4xl font-bold text-[#D4AF37] font-serif">
                    {timeLeft[interval].toString().padStart(2, '0')}
                </span>
                <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mt-1">
                    {interval}
                </span>
            </div>
        );
    });

    return (
        <div className="flex justify-center flex-wrap my-6 p-4 border-y border-[#D4AF37]/20 bg-[#0B1026]/50">
            {timerComponents.length ? timerComponents : <span className="text-[#D4AF37]">¡Es hoy!</span>}
        </div>
    );
}
