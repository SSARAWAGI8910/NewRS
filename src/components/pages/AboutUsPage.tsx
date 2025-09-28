import React, { useState, useEffect } from 'react';
import { Play, Plus, Star, ChevronRight, Users, Video, Brain, FileText } from 'lucide-react';

interface AboutUsPageProps {
  onLogout?: () => void; // optional if you want a logout button
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onLogout }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi! I am Rishika!";
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Typing animation
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (currentSlide === 0 && typedText.length < fullText.length) {
      timeoutId = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
    }
    return () => clearTimeout(timeoutId);
  }, [typedText, currentSlide, fullText]);

  useEffect(() => {
    if (currentSlide === 0) setTypedText('');
  }, [currentSlide]);

  const testimonials = [
    { text: "Amazing courses that helped me land my dream job!", rating: 5 },
    { text: "The AI tools are incredibly helpful for learning.", rating: 5 },
    { text: "Rishika's teaching style is exceptional and engaging.", rating: 4 },
    { text: "Best investment I made for my career development.", rating: 5 }
  ];

  const testimonialsRow2 = [
    { text: "The personalized mentoring changed my career path completely!", rating: 5 },
    { text: "Interactive coding environments made learning so much easier.", rating: 4 },
    { text: "Live classes are engaging and well-structured.", rating: 5 },
    { text: "The community support is incredible and motivating.", rating: 4 }
  ];

  const testimonialsRow3 = [
    { text: "Certificates helped me get recognition at my workplace.", rating: 5 },
    { text: "The AI Hub tools boosted my productivity significantly.", rating: 4 },
    { text: "Offline access feature is perfect for my schedule.", rating: 5 },
    { text: "30-day guarantee shows confidence in their quality.", rating: 5 }
  ];

  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Pre-Recorded Courses",
      description: "Comprehensive courses on latest technologies and tools with lifetime access and regular updates.",
      color: "#a5d8ff"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Live Classes",
      description: "One-on-one or small group sessions tailored to your learning needs with expert instructors.",
      color: "#ffec99"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Hub Access",
      description: "Cutting-edge AI tools to maximize your learning and boost productivity with exclusive features.",
      color: "#ffc9c9"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Study Resources",
      description: "Access to PYQs, cheatsheets, and comprehensive materials for your field of study.",
      color: "#fff4e6"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with the courses?",
      answer: "Getting started is easy! Simply browse our course catalog and start learning."
    },
    {
      question: "What are the prerequisites for AI courses?",
      answer: "Basic programming knowledge is recommended. Beginner-friendly options are available."
    },
    {
      question: "Can I access courses offline?",
      answer: "Yes! Download materials and videos for offline viewing."
    },
    {
      question: "Do you offer one-on-one mentoring?",
      answer: "Absolutely! Personalized mentoring sessions are available with expert instructors."
    },
    {
      question: "What's included in the AI Hub?",
      answer: "Access to cutting-edge AI tools, coding environments, project templates, and exclusive resources."
    },
    {
      question: "How often are live classes conducted?",
      answer: "Weekly sessions for most courses, with intensive bootcamps available as well."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee."
    },
    {
      question: "Do you provide certificates upon completion?",
      answer: "Yes, verified digital certificates are provided for all completed courses."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-current text-yellow-500' : 'text-gray-300'}`}
      />
    ));

  return (
  <div className="min-h-screen px-4 py-8" style={{ backgroundColor: '#e9ecef' }}>
    <div className="container mx-auto px-2 sm:px-6 pt-28 sm:pt-36 pb-8 sm:pb-12">
      {/* Slide 1: Hero/About */}
      <div className="min-h-screen flex items-center justify-center snap-start">
        <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: Video */}
          <div className="w-full max-w-sm lg:max-w-none lg:w-2/5 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white" style={{ backgroundColor: '#1e1e1e' }}>
            <div className="aspect-[9/16] flex items-center justify-center">
              <div className="text-center text-white p-4 sm:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ff8787' }}>
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" />
                </div>
                <p className="text-base sm:text-lg font-semibold mb-2">Welcome Video</p>
                <p className="text-xs sm:text-sm opacity-80">Portrait design with custom thumbnail</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-3/5 bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-4 border-white">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 min-h-[2rem] sm:min-h-[3rem]">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="p-4 sm:p-6 rounded-2xl" style={{ backgroundColor: '#a5d8ff' }}>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">About Me</h3>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools. Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.
                  Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.
                  Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.
                  Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 sm:p-4 rounded-2xl" style={{ backgroundColor: '#ffec99' }}>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-xs sm:text-sm text-gray-700">Students</div>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-2xl" style={{ backgroundColor: '#ffc9c9' }}>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-xs sm:text-sm text-gray-700">Courses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2: Services */}
      <div className="min-h-screen flex items-center justify-center snap-start py-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: service.color }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide 3: Testimonials */}
      <div className="min-h-screen flex items-center justify-center snap-start py-8" style={{ backgroundColor: '#e9ecef' }}>
        <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 space-y-6 sm:space-y-8">
          {[testimonials, testimonialsRow2, testimonialsRow3].map((row, idxRow) => (
            <div key={idxRow} className="overflow-hidden">
              <div className={`flex space-x-4 sm:space-x-6 ${idxRow % 2 === 0 ? 'animate-slide' : 'animate-slide-reverse'}`}>
                {[...row, ...row].map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="w-64 sm:w-80 flex-shrink-0 p-4 sm:p-6 rounded-2xl shadow-lg border-2 border-white"
                    style={{ backgroundColor: idxRow === 1 ? '#ffec99' : idxRow === 2 ? '#ffc9c9' : '#ffffff' }}
                  >
                    <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
                    <p className="text-gray-800 mb-3 sm:mb-4 italic text-xs sm:text-sm">"{testimonial.text}"</p>
                    <p className="text-gray-600 font-semibold text-xs sm:text-sm">Student {idx + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 4: FAQ */}
      <div className="min-h-screen flex items-center justify-center snap-start p-4 sm:p-8" style={{ backgroundColor: '#e9ecef' }}>
        <div className="w-full max-w-6xl">
          <div className="rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-4 border-white bg-white">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Left Panel */}
              <div className="lg:col-span-2 flex flex-col justify-center space-y-6 lg:space-y-8 text-center lg:text-left">
                <div className="space-y-2 sm:space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">Frequently</h2>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">Asked</h2>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">Questions</h2>
                </div>
              </div>

              {/* Right Panel */}
              <div className="lg:col-span-3 space-y-3 sm:space-y-4 max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-2 sm:pr-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 cursor-pointer rounded-xl overflow-hidden border-2 ${
                      openFAQ === index ? 'border-gray-300 shadow-lg' : 'border-gray-100 hover:border-gray-200'
                    }`}
                    style={{ backgroundColor: openFAQ === index ? '#f8f9fa' : '#ffffff' }}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="p-4 sm:p-6 flex justify-between items-start gap-4">
                      <span className={`font-semibold pr-4 transition-all duration-300 flex-1 ${
                        openFAQ === index ? 'text-gray-900' : 'text-gray-800 hover:text-gray-900'
                      } text-sm sm:text-base`}>
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 transition-all duration-300 transform ${openFAQ === index ? 'rotate-45' : ''} w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center`}
                           style={{
                             backgroundColor: openFAQ === index ? '#ff8787' : '#e9ecef',
                             color: openFAQ === index ? '#ffffff' : '#1e1e1e'
                           }}>
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ${openFAQ === index ? 'max-h-96 opacity-100 mt-3 sm:mt-4' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-3 sm:pt-4 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Logout Footer */}
      {onLogout && (
        <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2">
          <button
            onClick={onLogout}
            className="px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            style={{ backgroundColor: '#ff8787', color: '#ffffff' }}
          >
            Logout
          </button>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes slide-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-slide {
            animation: slide 30s linear infinite;
          }
          .animate-slide-reverse {
            animation: slide-reverse 25s linear infinite;
          }
        `
      }} />
    </div>
  </div>
);
};