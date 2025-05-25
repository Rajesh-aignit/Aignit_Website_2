'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  AcademicCapIcon, 
  DocumentTextIcon, 
  LightBulbIcon,
  UserGroupIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  useEffect(() => {
    // Initialize counters when stats section is visible
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('[data-count]');
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count') || '0');
            animateCounter(counter, target);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    // Add scroll effect to header
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('bg-white/98', 'shadow-lg');
          header.classList.remove('bg-white/95', 'shadow-md');
        } else {
          header.classList.add('bg-white/95', 'shadow-md');
          header.classList.remove('bg-white/98', 'shadow-lg');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const animateCounter = (element: Element, target: number) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current).toLocaleString() + '+';
    }, 20);
  };

  const products = [
    {
      icon: '🤖',
      title: 'Smart Doubt Clearance Bot',
      description: 'AI-powered chatbot that provides instant, personalized assistance to students for lecture-wise and topic-wise doubts, available 24/7.',
      features: [
        'Contextual understanding of course materials',
        'Multi-language support for diverse classrooms',
        'Progressive difficulty adjustment',
        'Integration with existing LMS platforms',
        'Real-time analytics on student queries'
      ],
      demo: {
        label: '💬 Sample Interaction:',
        content: 'Student: "I don\'t understand thermodynamics"\nBot: "Let\'s break it down! Which part is confusing - heat transfer, energy conservation, or entropy?"'
      }
    },
    {
      icon: '📝',
      title: 'Intelligent Question Paper Generator',
      description: 'Create customized question papers in minutes with AI that understands curriculum requirements, difficulty levels, and learning objectives.',
      features: [
        'Bloom\'s taxonomy-based question classification',
        'Automatic difficulty level balancing',
        'Topic-wise weightage distribution',
        'Multiple question formats (MCQ, Short, Long)',
        'Plagiarism-free original questions'
      ],
      demo: {
        label: '⚡ Generation Speed:',
        content: '100-question paper in under 30 seconds\nComplete with marking scheme and answer key'
      }
    },
    {
      icon: '✅',
      title: 'Advanced Answer Evaluation System',
      description: 'Revolutionary AI system that evaluates both objective and subjective answers, including handwritten responses, with human-level accuracy.',
      features: [
        'OCR technology for handwritten text recognition',
        'Natural language processing for subjective evaluation',
        'Instant feedback and detailed scoring rubrics',
        'Bias-free consistent grading',
        'Plagiarism detection and originality scoring'
      ],
      demo: {
        label: '🎯 Accuracy Rate:',
        content: '96.8% accuracy matching expert evaluators\nProcesses 1000+ answers per hour'
      }
    },
    {
      icon: '🎯',
      title: 'Personalized Curriculum Generator',
      description: 'Create tailored learning experiences with AI-driven curriculum design that adapts to individual student needs and learning styles.',
      features: [
        'Learning style assessment and adaptation',
        'Competency-based progression tracking',
        'Industry-aligned skill development paths',
        'Resource recommendation engine',
        'Prerequisite mapping and gap analysis'
      ],
      demo: {
        label: '🔄 Adaptive Learning:',
        content: 'Curriculum adjusts in real-time based on\nstudent performance and engagement patterns'
      }
    },
    {
      icon: '📊',
      title: 'Learning Analytics Dashboard',
      description: 'Comprehensive analytics platform that provides deep insights into student performance, engagement, and learning patterns.',
      features: [
        'Real-time performance monitoring',
        'Predictive analytics for at-risk students',
        'Engagement pattern analysis',
        'Comparative performance benchmarking',
        'Automated progress reports'
      ],
      demo: {
        label: '📈 Key Metrics:',
        content: 'Track 40+ learning indicators\nPredict outcomes with 94% accuracy'
      }
    },
    {
      icon: '📊',
      title: 'Student Performance Tracker',
      description: 'Monitor and enhance student progress with actionable insights and real-time analytics.',
      features: [
        'Real-time progress monitoring',
        'Personalized analytics dashboard',
        'Early warning for at-risk students',
        'Visual learning trends and reports',
        'Parent/teacher notification system'
      ],
      demo: {
        label: '📈 Performance Insights:',
        content: 'Track individual and class performance, identify learning gaps, and celebrate achievements.'
      }
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Pick a Question',
      description: 'Choose from our vast collection of questions from every subject and difficulty level, or upload your own custom questions.'
    },
    {
      number: '2',
      title: 'Student Answers',
      description: 'Students can handwrite answers on paper or type digitally. Our OCR technology handles both formats seamlessly.'
    },
    {
      number: '3',
      title: 'Upload & Process',
      description: 'Simply upload images of handwritten answers or submit digital text. Our AI processes everything instantly.'
    },
    {
      number: '4',
      title: 'Get AI Analysis',
      description: 'Receive detailed, multi-dimensional analysis with scores, feedback, and personalized improvement suggestions within seconds.'
    }
  ];

  return (
    <main className="container">
      <section className="bg-[#f7f7fa] py-16 rounded-3xl shadow-md my-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
          <div>
            <h1 className="text-5xl font-extrabold mb-4 text-[#222]">
              Level Up <span className="text-[#d2691e]">Learning</span> with AI
            </h1>
            <p className="text-lg text-[#333] mb-8">
              Make teaching easier and more effective with simple AI tools. Personalize lessons to fit each student's needs, save time on routine tasks, and keep your classroom more engaged—no tech skills needed.
            </p>
            <a
              href="https://calendly.com/founder-aignit/aignit-personalized-education-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#d2691e] text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-[#b35a1a] transition"
            >
              See It In Action
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="/personalized-education.svg"
              alt="Personalized Education Illustration"
              className="max-h-72 w-auto rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="bg-[#fff7f0] py-16 rounded-3xl shadow-md my-10 border-b border-[#ffe5d0]">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#222] text-center mb-4">Transform Your Educational Impact</h2>
          <p className="text-lg text-[#333] text-center mb-10">
            Discover how Aignit empowers educators to achieve unprecedented results in student engagement and learning outcomes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
              <div className="text-3xl font-bold text-[#d2691e] mb-2">1</div>
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-semibold text-lg text-[#222] mb-2 text-center">Personalized Learning Experience</h3>
              <p className="text-[#333] text-center">Deliver tailored content and adaptive learning paths that match each student's unique learning style, pace, and preferences.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
              <div className="text-3xl font-bold text-[#d2691e] mb-2">2</div>
              <div className="text-4xl mb-2">📈</div>
              <h3 className="font-semibold text-lg text-[#222] mb-2 text-center">Higher Retention</h3>
              <p className="text-[#333] text-center">Due to daily and personalised engagement, students are more likely to retain knowledge and stay motivated throughout the course.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
              <div className="text-3xl font-bold text-[#d2691e] mb-2">3</div>
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="font-semibold text-lg text-[#222] mb-2 text-center">Better Course Completion</h3>
              <p className="text-[#333] text-center">Better course completion rates and improved learning outcomes through continuous support and adaptive feedback.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
              <div className="text-3xl font-bold text-[#d2691e] mb-2">4</div>
              <div className="text-4xl mb-2">💸</div>
              <h3 className="font-semibold text-lg text-[#222] mb-2 text-center">Lower Cost</h3>
              <p className="text-[#333] text-center">Reduce the cost of evaluators and mentors by leveraging AI-driven assessment and feedback tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#fff] py-10 rounded-2xl shadow mb-10 border-b border-[#ffd6a5]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-[#d2691e] mb-1"><span data-count="5000">5,000</span>+</div>
              <div className="text-base text-[#222]">Questions Evaluated</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#d2691e] mb-1"><span data-count="1000">1,000</span>+</div>
              <div className="text-base text-[#222]">Students Served</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#d2691e] mb-1"><span data-count="10">10</span>+</div>
              <div className="text-base text-[#222]">Trusted Educators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-[#ffd6a5] py-16 rounded-3xl shadow-md my-10 border-b border-[#fff]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#222] text-center mb-4">Our AI-Powered Solutions</h2>
        <p className="text-lg text-[#333] text-center mb-10">Comprehensive tools designed to enhance every aspect of the educational experience</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          {products.map((product, index) => (
            <div key={product.title} className="bg-white rounded-2xl shadow p-8 flex flex-col h-full" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-4xl mb-2">{product.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#d2691e]">{product.title}</h3>
              <p className="text-[#333] mb-4">{product.description}</p>
              <ul className="list-disc pl-5 mb-4 text-[#333]">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="bg-[#f7f7fa] rounded-lg p-4 mt-auto">
                <div className="font-semibold text-[#d2691e] mb-1">{product.demo.label}</div>
                <div className="text-sm italic whitespace-pre-line text-[#333]">{product.demo.content}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Elevate Every Lesson with AI Section */}
      <section className="bg-[#fff] py-16 rounded-3xl shadow-md my-10 border-b border-[#ffd6a5]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-[#d2691e] drop-shadow-lg">Elevate Every Lesson with AI</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-[#f7f7fa] rounded-2xl p-8 shadow flex flex-col items-start">
                <div className="text-3xl mb-4 text-[#d2691e]">🔌</div>
                <h3 className="text-lg font-semibold mb-2 text-[#d2691e]">Plug and Play</h3>
                <p className="text-[#333]">We can integrate these features into your website and your students can access these products under one single roof.</p>
              </div>
              <div className="bg-[#f7f7fa] rounded-2xl p-8 shadow flex flex-col items-start">
                <div className="text-3xl mb-4 text-green-600">💳</div>
                <h3 className="text-lg font-semibold mb-2 text-green-700">Pay as per Use</h3>
                <p className="text-[#333]">Post integration, pay only as per the usage of the product.</p>
              </div>
              <div className="bg-[#f7f7fa] rounded-2xl p-8 shadow flex flex-col items-start">
                <div className="text-3xl mb-4 text-blue-700">📊</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-800">Track Your Students' Activities</h3>
                <p className="text-[#333]">Understand the doubts students are asking, where they struggle, and update your courses accordingly—all in one place.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 md:mt-0">
            <img
              src="/ai-lesson-illustration.svg"
              alt="AI-Powered Lesson Analytics"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
            <span className="mt-4 text-gray-500 text-sm">AI-Powered Lesson Analytics</span>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="bg-[#ffe5d0] py-16 rounded-3xl shadow-md my-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#222] text-center mb-4">Sample Evaluation Output</h2>
        <p className="text-lg text-[#333] text-center mb-10">See how our AI evaluates handwritten answers and provides detailed feedback.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-start container mx-auto">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#667eea] mb-6 max-w-xl w-full mx-auto">
              <div className="font-semibold mb-2 text-[#222] text-sm">
                Q: Discuss the evolving dynamics of digital parenting in urban India. How does it influence parent-child emotional bonding and developmental outcomes. What interventions are needed to promote mindful engagement in the digital age? <span className='text-xs'>(15 M)</span>
              </div>
              <div className="bg-[#f7f7fa] rounded-lg p-4 italic mb-4 border border-dashed border-gray-200 text-sm text-[#333]">
                "Digital parenting in urban India is evolving with increased use of mobile devices among children. Parents face challenges like mobile addiction and reduced communication..."
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500 mb-2 text-sm">
                <div className="flex items-center gap-2 font-semibold text-green-800 mb-1">
                  <span role="img" aria-label="robot">🤖</span> AI Analysis
                  <span className="ml-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-3 py-1 rounded-full text-xs font-semibold">78/100</span>
                </div>
                <div className="text-green-900 text-xs mb-2">
                  <strong>Introduction</strong><br/>
                  Your answer lacks a proper introduction explaining <strong>digital parenting trends</strong> in urban India's context.<br/><br/>
                  <strong>Body</strong>
                  <ul className="list-disc pl-5">
                    <li>You've identified key negative impacts like <strong>mobile addiction</strong> and <strong>reduced communication</strong>, which shows good understanding.</li>
                    <li>The discussion on <strong>baby sitters as digital devices</strong> demonstrates awareness of emerging parenting patterns.</li>
                    <li><strong>Interventions section</strong> is well-structured with practical solutions, though could be more comprehensive.</li>
                    <li>Missing clear linkage between <strong>emotional bonding deficits</strong> and specific developmental outcomes.</li>
                  </ul>
                  <strong>Conclusion</strong><br/>
                  Your answer ends abruptly without a proper conclusion synthesizing the <strong>balanced approach</strong> needed for digital parenting.<br/><br/>
                  <strong>Overall Structure</strong><br/>
                  The flow from problems to solutions is logical, but <strong>clearer sub-headings</strong> would improve readability and organization.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 md:mt-0 w-full">
            <img
              src="/evaluation-right-image.png"
              alt="Sample Evaluation Illustration"
              className="rounded-xl shadow-lg max-w-[80%] h-auto"
            />
            <span className="mt-4 text-gray-500 text-sm">Sample Handwritten Answer Sheet</span>
          </div>
        </div>
      </section>
    </main>
  );
} 