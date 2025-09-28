import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

export const LiveClassesPage: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          return prev;
        }

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#e9ecef] text-[#1e1e1e]">
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-8 sm:pb-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e1e1e] px-4">
            Live Classes
          </h1>
          <p className="text-[#495057] mt-2 text-base sm:text-lg px-4">
            Stay updated with schedules, announcements & requests
          </p>
        </div>

        {/* Upcoming Class */}
        <div className="bg-[#a5d8ff] p-6 sm:p-8 rounded-3xl mb-8 sm:mb-14 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
            <h2 className="text-xl sm:text-2xl font-bold">Upcoming Class</h2>
            <button className="bg-[#ff8787] hover:bg-[#ffc9c9] text-white px-4 sm:px-6 py-2 rounded-xl font-semibold shadow-md transition text-sm sm:text-base">
              Join Now
            </button>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#1e1e1e]">
              Countdown to Start
            </h3>
            <div className="grid grid-cols-2 sm:flex sm:justify-center gap-3 sm:gap-6">
              {[
                { label: 'Days', value: countdown.days },
                { label: 'Hours', value: countdown.hours },
                { label: 'Minutes', value: countdown.minutes },
                { label: 'Seconds', value: countdown.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fff4e6] rounded-xl px-3 sm:px-5 py-3 sm:py-4 shadow-md"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#1e1e1e]">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#495057]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Calendar */}
          <div className="bg-[#ffffff] p-4 sm:p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff8787]" />
              Calendar
            </h3>
            <p className="text-xs sm:text-sm text-[#495057] mb-3 sm:mb-4">
              Click a date to see deadlines & to-dos
            </p>
            <div className="bg-[#f8f9fa] p-3 sm:p-4 rounded-xl border border-[#e9ecef]">
              <div className="grid grid-cols-7 gap-1 sm:gap-2 text-xs text-center font-semibold">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="p-1 sm:p-2 text-[#1e1e1e]">{day}</div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-1 sm:p-2 rounded-lg hover:bg-[#ffd8a8] cursor-pointer text-xs"
                  >
                    {i < 30 ? i + 1 : ''}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reschedule Request */}
          <div className="bg-[#fff4e6] p-4 sm:p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#1e1e1e]">
              Request Reschedule
            </h3>
            <textarea
              className="w-full p-2 sm:p-3 border border-[#e9ecef] rounded-lg mb-3 sm:mb-4 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#a5d8ff] resize-none"
              rows={3}
              placeholder="Provide reason for rescheduling..."
            />
            <button className="bg-[#a5d8ff] hover:bg-[#ffec99] text-[#1e1e1e] font-semibold px-4 sm:px-6 py-2 rounded-xl w-full transition text-sm sm:text-base">
              Submit Request
            </button>
          </div>

          {/* Announcements */}
          <div className="bg-[#ffc9c9] p-4 sm:p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#1e1e1e]">
              Announcements
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {[
                { title: 'Next class: Advanced React Patterns', time: 'Tomorrow at 3:00 PM' },
                { title: 'Assignment deadline reminder', time: 'Due in 3 days' },
                { title: 'New course materials uploaded', time: 'Check your dashboard' },
              ].map((note, i) => (
                <div
                  key={i}
                  className="bg-[#ffffff] p-2 sm:p-3 rounded-xl shadow-sm border border-[#e9ecef]"
                >
                  <p className="text-xs sm:text-sm font-medium">{note.title}</p>
                  <p className="text-xs text-[#495057] mt-1">{note.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
