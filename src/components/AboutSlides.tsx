import React, { useState, useEffect } from 'react';
import { Play, Plus, Minus, Star, ChevronRight, Users, Video, Brain, FileText } from 'lucide-react';

interface AboutSlidesProps {
  onLogin: () => void;
}

export const AboutSlides: React.FC<AboutSlidesProps> = ({ onLogin }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi! I am Rishika!";
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Typing animation effect
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (currentSlide === 0 && typedText.length < fullText.length) {
      timeoutId = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
    }
    return () => clearTimeout(timeoutId);
  }, [typedText, currentSlide, fullText]);

  // Reset typing animation when returning to first slide
  useEffect(() => {
    if (currentSlide === 0) {
      setTypedText('');
    }
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
      answer: "Getting started is easy! Simply sign up for an account, browse our course catalog, and enroll in the courses that interest you. All courses come with detailed prerequisites and learning paths."
    },
    {
      question: "What are the prerequisites for AI courses?",
      answer: "Most of our AI courses require basic programming knowledge in Python. We also offer beginner-friendly courses that start from the fundamentals. Check each course description for specific requirements."
    },
    {
      question: "Can I access courses offline?",
      answer: "Yes! Once you enroll, you can download course materials and videos for offline viewing. However, some interactive elements and live sessions require an internet connection."
    },
    {
      question: "Do you offer one-on-one mentoring?",
      answer: "Absolutely! We provide personalized mentoring sessions with industry experts. You can book one-on-one sessions or join small group mentoring programs based on your learning goals."
    },
    {
      question: "What's included in the AI Hub?",
      answer: "The AI Hub includes access to cutting-edge AI tools, interactive coding environments, project templates, and exclusive resources to boost your productivity and learning experience."
    },
    {
      question: "How often are live classes conducted?",
      answer: "Live classes are conducted weekly for most courses. We also offer intensive bootcamps with daily sessions. All live classes are recorded and available for later viewing."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not completely satisfied with your course within the first 30 days, we'll provide a full refund, no questions asked."
    },
    {
      question: "Do you provide certificates upon completion?",
      answer: "Yes! You'll receive a verified digital certificate upon successful completion of each course. These certificates are recognized by industry partners and can be shared on LinkedIn."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-current text-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      {/* Slide 1: Hero/About */}
      <div className="min-h-screen flex items-center justify-center snap-start px-4 py-8" style={{ backgroundColor: '#e9ecef' }}>
        <div className="w-full max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left: Video Section */}
            <div className="w-full max-w-sm lg:max-w-none lg:w-2/5">
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                style={{ backgroundColor: '#1e1e1e' }}
              >
                <div className="aspect-[9/16] flex items-center justify-center">
                  <div className="text-center text-white p-4 sm:p-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ff8787' }}>
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" />
                    </div>
                    <p className="text-base sm:text-lg font-semibold mb-2">Welcome Video</p>
                    <p className="text-xs sm:text-sm opacity-80">Portrait design with custom thumbnail</p>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 p-2 sm:p-3 rounded-2xl" style={{ backgroundColor: '#a5d8ff' }}>
                  <p className="text-xs sm:text-sm font-medium text-center text-gray-900">Click to play introduction</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-3/5">
              {/* EduPilot Branding - positioned above the white card */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#ff8787' }}>
                  <span className="text-white font-bold text-lg sm:text-xl">R</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold" style={{ color: '#1e1e1e' }}>EduPilot</span>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-4 border-white">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 min-h-[2rem] sm:min-h-[3rem]">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  <div className="p-4 sm:p-6 rounded-2xl" style={{ backgroundColor: '#a5d8ff' }}>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">About Me</h3>
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                      Welcome to my learning platform! I'm passionate about helping students master cutting-edge 
                      technologies and AI tools. With years of industry experience and a proven track record in 
                      education, I've created a . Welcome to my learning platform! I'm passionate about helping students master cutting-edge 
                      technologies and AI tools. With years of industry experience and a proven track record in 
                      education, I've created a comprehensive learning ecosystem that combines theoretical knowledge 
                      with practical applications.
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

                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-4">
                    <button
                      onClick={onLogin}
                      className="flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{ backgroundColor: '#1e1e1e', color: '#ffffff' }}
                    >
                      Get Started
                    </button>
                    <button
                      onClick={onLogin}
                      className="flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{ borderColor: '#1e1e1e', color: '#1e1e1e', backgroundColor: 'transparent' }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2: Services */}
      <div className="min-h-screen flex items-center justify-center snap-start px-4 py-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-full max-w-7xl px-6 md:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ff8787' }}>
                <span className="text-white font-bold text-base sm:text-lg">R</span>
              </div>
              <span className="text-lg sm:text-xl font-bold" style={{ color: '#1e1e1e' }}>EduPilot</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              What We Offer
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive learning solutions designed to accelerate your career growth and skill development
            </p>
          </div>

          {/* Services Grid */}
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

          {/* CTA */}
          <div className="text-center">
            <button 
              className="px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#1e1e1e', color: '#ffffff' }}
            >
              Explore All Courses <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 inline ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide 3: Testimonials */}
      <div className="min-h-screen flex items-center justify-center snap-start px-4 py-8" style={{ backgroundColor: '#e9ecef' }}>
        <div className="w-full max-w-7xl px-6 md:px-8 lg:px-12">
          {/* Header - Fixed with proper spacing */}
          <div className="text-center mb-8 sm:mb-12 relative z-10">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 mt-8 sm:mt-16">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ff8787' }}>
                <span className="text-white font-bold text-base sm:text-lg">R</span>
              </div>
              <span className="text-lg sm:text-xl font-bold" style={{ color: '#1e1e1e' }}>EduPilot</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
              Student Success Stories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Join thousands of learners who have transformed their careers with our programs
            </p>
          </div>

          {/* Testimonial Rows - Adjusted spacing */}
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            {/* First Row */}
            <div className="overflow-hidden">
              <div className="flex animate-slide space-x-4 sm:space-x-6 w-max">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-64 sm:w-80 flex-shrink-0 bg-white p-4 sm:p-6 rounded-2xl shadow-lg border-2 border-white"
                  >
                    <div className="flex mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-800 mb-3 sm:mb-4 italic text-xs sm:text-sm leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <p className="text-gray-600 font-semibold text-xs sm:text-sm">
                      Student {index % testimonials.length + 1}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row */}
            <div className="overflow-hidden">
              <div className="flex animate-slide-reverse space-x-4 sm:space-x-6 w-max">
                {[...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-64 sm:w-80 flex-shrink-0 p-4 sm:p-6 rounded-2xl shadow-lg border-2 border-white"
                    style={{ backgroundColor: '#ffec99' }}
                  >
                    <div className="flex mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-800 mb-3 sm:mb-4 italic text-xs sm:text-sm leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <p className="text-gray-600 font-semibold text-xs sm:text-sm">
                      Student {index % testimonialsRow2.length + 5}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Third Row */}
            <div className="overflow-hidden">
              <div className="flex animate-slide space-x-4 sm:space-x-6 w-max">
                {[...testimonialsRow3, ...testimonialsRow3].map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-64 sm:w-80 flex-shrink-0 p-4 sm:p-6 rounded-2xl shadow-lg border-2 border-white"
                    style={{ backgroundColor: '#ffc9c9' }}
                  >
                    <div className="flex mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-800 mb-3 sm:mb-4 italic text-xs sm:text-sm leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <p className="text-gray-600 font-semibold text-xs sm:text-sm">
                      Student {index % testimonialsRow3.length + 9}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center relative z-10">
            <button 
              className="px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#1e1e1e', color: '#ffffff' }}
            >
              Join Our Community <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 inline ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide 4: FAQ Section */}
      <div className="min-h-screen flex items-center justify-center snap-start p-4 sm:p-8" style={{ backgroundColor: '#e9ecef' }}>
        <div className="w-full max-w-6xl">
          <div className="relative">
            {/* Main FAQ Container */}
            <div className="relative rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-4 border-white" style={{ backgroundColor: '#ffffff' }}>
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                
                {/* Left Panel */}
                <div className="lg:col-span-2 flex flex-col justify-center space-y-6 lg:space-y-8">
                  {/* EduPilot Branding */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#ff8787' }}>
                      <span className="text-white font-bold text-base sm:text-lg">R</span>
                    </div>
                    <span className="text-lg sm:text-xl font-bold" style={{ color: '#1e1e1e' }}>EduPilot</span>
                  </div>

                  <div className="space-y-2 sm:space-y-4 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
                      Frequently
                    </h2>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
                      Asked
                    </h2>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
                      Questions
                    </h2>
                  </div>
                  
                  <div className="flex flex-col space-y-3 sm:space-y-4 items-center lg:items-start">
                    <button 
                      onClick={onLogin}
                      className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{ backgroundColor: '#1e1e1e', color: '#ffffff' }}
                    >
                      Get Started Today
                    </button>
                    <p className="text-sm sm:text-base text-gray-600 font-medium text-center lg:text-left">
                      Everything you need to know about our platform
                    </p>
                  </div>
                </div>

                {/* Right Panel */}
                <div className="lg:col-span-3">
                  <div className="rounded-2xl h-full flex flex-col">
                    <div className="space-y-3 sm:space-y-4 max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-2 sm:pr-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className={`transition-all duration-300 cursor-pointer rounded-xl overflow-hidden border-2 ${
                            openFAQ === index 
                              ? 'border-gray-300 shadow-lg' 
                              : 'border-gray-100 hover:border-gray-200'
                          }`}
                          style={{ 
                            backgroundColor: openFAQ === index ? '#f8f9fa' : '#ffffff'
                          }}
                          onClick={() => toggleFAQ(index)}
                        >
                          <div className="p-4 sm:p-6">
                            <div className="flex justify-between items-start gap-4">
                              <span className={`font-semibold pr-4 transition-all duration-300 flex-1 ${
                                openFAQ === index 
                                  ? 'text-gray-900' 
                                  : 'text-gray-800 hover:text-gray-900'
                              } text-sm sm:text-base`}>
                                {faq.question}
                              </span>
                              <div className={`flex-shrink-0 transition-all duration-300 transform ${
                                openFAQ === index ? 'rotate-45' : ''
                              } w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center`}
                              style={{ 
                                backgroundColor: openFAQ === index ? '#ff8787' : '#e9ecef',
                                color: openFAQ === index ? '#ffffff' : '#1e1e1e'
                              }}>
                                <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                              </div>
                            </div>
                            
                            {/* Answer */}
                            <div className={`overflow-hidden transition-all duration-500 ${
                              openFAQ === index ? 'max-h-96 opacity-100 mt-3 sm:mt-4' : 'max-h-0 opacity-0'
                            }`}>
                              <div className="pt-3 sm:pt-4 border-t border-gray-200">
                                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Footer */}
                    <div className="pt-6 sm:pt-8 mt-3 sm:mt-4 border-t border-gray-200 text-center">
                      <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                        Still have questions?
                      </p>
                      <button 
                        onClick={onLogin}
                        className="px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                        style={{ backgroundColor: '#a5d8ff', color: '#1e1e1e' }}
                      >
                        Contact Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            width: max-content;
          }
          .animate-slide-reverse {
            animation: slide-reverse 25s linear infinite;
            width: max-content;
          }
        `
      }} />
    </div>
  );
};