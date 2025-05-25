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
      <section className="hero bg-gradient-to-r from-[#ffe5d0] via-[#ffd6a5] to-[#ffb385] py-10 my-6 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="hero-content relative z-10 text-center md:text-left text-gray-900">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 whitespace-nowrap">Level Up Learning with AI</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto md:mx-0 opacity-90">
              Make teaching easier and more effective with simple AI tools. Personalize lessons to fit each student's needs, save time on routine tasks, and keep your classroom more engaged- no tech skills needed
            </p>
            <Link href="https://calendly.com/founder-aignit/aignit-personalized-education-demo" target="_blank" rel="noopener noreferrer" className="text-lg px-8 py-4 font-bold rounded-lg shadow-lg bg-[#d2691e] text-white hover:bg-[#b35a1a] transition-colors">
              See It In Action
            </Link>
          </div>
          <div className="hidden md:flex justify-center items-center relative h-full">
            <img
              src="/personalized-education.svg"
              alt="Personalized Education Illustration"
              className="max-h-72 w-auto rounded-xl shadow-lg relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Advantages Section - moved up */}
      <section id="advantages" className="advantages">
        <div className="container">
          <h2 className="section-title">Transform Your Educational Impact</h2>
          <p className="section-subtitle">
            Discover how Aignit empowers educators to achieve unprecedented results in student engagement and learning outcomes
          </p>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-number">1</div>
              <div className="advantage-icon">🎯</div>
              <h3>Personalized Learning Experience</h3>
              <p>Deliver tailored content and adaptive learning paths that match each student's unique learning style, pace, and preferences.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-number">2</div>
              <div className="advantage-icon">📈</div>
              <h3>Higher Retention</h3>
              <p>Due to daily and personalised engagement, students are more likely to retain knowledge and stay motivated throughout the course.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-number">3</div>
              <div className="advantage-icon">🏆</div>
              <h3>Better Course Completion</h3>
              <p>Better course completion rates and improved learning outcomes through continuous support and adaptive feedback.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-number">4</div>
              <div className="advantage-icon">💸</div>
              <h3>Lower Cost</h3>
              <p>Reduce the cost of evaluators and mentors by leveraging AI-driven assessment and feedback tools.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats bg-gradient-to-r from-[#667eea] to-[#764ba2] py-8 my-8 rounded-2xl text-white text-center">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat-item">
              <div className="text-3xl font-extrabold mb-1"><span data-count="5000">5,000</span>+</div>
              <div className="text-sm opacity-90">Questions Evaluated</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-extrabold mb-1"><span data-count="1000">1,000</span>+</div>
              <div className="text-sm opacity-90">Students Served</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-extrabold mb-1"><span data-count="10">10</span>+</div>
              <div className="text-sm opacity-90">Trusted Educators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <h2 className="section-title">Our AI-Powered Solutions</h2>
        <p className="section-subtitle">Comprehensive tools designed to enhance every aspect of the educational experience</p>
        
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={product.title} className="product-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="product-icon">{product.icon}</div>
              <h3 className="text-2xl font-extrabold mb-2 text-[#d2691e]">{product.title}</h3>
              <p>{product.description}</p>
              <ul className="features-list">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="product-demo">
                <div className="demo-label">{product.demo.label}</div>
                <div className="text-sm italic whitespace-pre-line">{product.demo.content}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Elevate Every Lesson with AI Section */}
      <section className="bg-gradient-to-r from-[#fff7ed] via-[#ffe5d0] to-[#ffe5ec] py-16 my-8 rounded-3xl shadow-xl">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-[#d2691e] drop-shadow-lg">Elevate Every Lesson with AI</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-r from-[#ffd6a5] to-[#fdffb6] rounded-2xl p-8 shadow border border-orange-200 flex flex-col items-start">
                <div className="text-3xl mb-4 text-[#d2691e]">🔌</div>
                <h3 className="text-xl font-semibold mb-2 text-[#d2691e]">Plug and Play</h3>
                <p className="text-gray-700">We can integrate these features into your website and your students can access these products under one single roof.</p>
              </div>
              <div className="bg-gradient-to-r from-[#b2f7ef] to-[#f3ffe3] rounded-2xl p-8 shadow border border-green-200 flex flex-col items-start">
                <div className="text-3xl mb-4 text-green-600">💳</div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">Pay as per Use</h3>
                <p className="text-gray-700">Post integration, pay only as per the usage of the product.</p>
              </div>
              <div className="bg-gradient-to-r from-[#a0c4ff] to-[#bdb2ff] rounded-2xl p-8 shadow border border-blue-200 flex flex-col items-start">
                <div className="text-3xl mb-4 text-blue-700">📊</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Track Your Students' Activities</h3>
                <p className="text-gray-700">Understand the doubts students are asking, where they struggle, and update your courses accordingly—all in one place.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 md:mt-0">
            <img
              src="/ai-lesson-illustration.svg"
              alt="AI-Powered Lesson Analytics"
              className="rounded-xl shadow-lg max-w-full h-auto border-4 border-[#d2691e]"
            />
            <span className="mt-4 text-gray-500 text-sm">AI-Powered Lesson Analytics</span>
          </div>
        </div>
      </section>

      <section id="demo" className="demo-section">
        <h2 className="section-title text-center">Sample Evaluation Output</h2>
        <p className="section-subtitle text-center mb-12">See how our AI evaluates handwritten answers and provides detailed feedback.</p>
        <div className="demo-grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-start">
          <div className="flex flex-col items-center justify-center w-full">
            {/* AI Evaluation Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#667eea] mb-6 max-w-xl w-full mx-auto">
              <div className="font-semibold mb-2 text-gray-900 text-sm">
                Q: Discuss the evolving dynamics of digital parenting in urban India. How does it influence parent-child emotional bonding and developmental outcomes. What interventions are needed to promote mindful engagement in the digital age? <span className='text-xs'>(15 M)</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 italic mb-4 border border-dashed border-gray-200 text-sm">
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