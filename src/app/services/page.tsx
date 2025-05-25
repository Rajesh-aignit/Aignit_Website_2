import Link from 'next/link';
import type { Metadata } from 'next';
import {
  CodeBracketIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CloudIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Our Services - Aignite Digital Solutions',
  description: 'Explore Aignite\'s comprehensive digital services including web development, digital marketing, SEO, mobile apps, UI/UX design, and cloud solutions. Transform your digital presence today.',
  keywords: 'web development, digital marketing, SEO, mobile development, UI/UX design, cloud solutions, digital services',
  openGraph: {
    title: 'Our Services - Aignite Digital Solutions',
    description: 'Explore Aignite\'s comprehensive digital services including web development, digital marketing, SEO, mobile apps, UI/UX design, and cloud solutions.',
    type: 'website',
    url: 'https://aignite.com/services',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Aignite Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Aignite Digital Solutions',
    description: 'Explore Aignite\'s comprehensive digital services including web development, digital marketing, SEO, mobile apps, UI/UX design, and cloud solutions.',
    images: ['/og-services.jpg'],
  },
};

const services = [
  {
    name: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    icon: CodeBracketIcon,
    features: [
      'Responsive Design',
      'Custom CMS Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'API Integration',
      'Performance Optimization',
    ],
  },
  {
    name: 'Digital Marketing',
    description: 'Strategic marketing solutions to grow your online presence and reach your target audience.',
    icon: ChartBarIcon,
    features: [
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'PPC Advertising',
      'Marketing Automation',
      'Analytics & Reporting',
    ],
  },
  {
    name: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic to your website.',
    icon: MagnifyingGlassIcon,
    features: [
      'Keyword Research',
      'On-page SEO',
      'Technical SEO',
      'Local SEO',
      'Link Building',
      'SEO Audits',
    ],
  },
  {
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: DevicePhoneMobileIcon,
    features: [
      'iOS Development',
      'Android Development',
      'React Native Apps',
      'Mobile UI/UX Design',
      'App Store Optimization',
      'Mobile Analytics',
    ],
  },
  {
    name: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging and intuitive digital experiences.',
    icon: PaintBrushIcon,
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'User Testing',
      'Design Systems',
    ],
  },
  {
    name: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure solutions for your business.',
    icon: CloudIcon,
    features: [
      'Cloud Migration',
      'Serverless Architecture',
      'DevOps Services',
      'Cloud Security',
      'Cost Optimization',
      '24/7 Monitoring',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a comprehensive range of digital services to help your business grow and succeed in the digital world. From web development to digital marketing, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <div className="flex items-center gap-x-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">{service.name}</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">{service.description}</p>
                <ul role="list" className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm leading-6 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your digital presence?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Let's work together to create a digital solution that drives your business forward.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact" className="btn-primary bg-white text-gray-900 hover:bg-gray-100">
              Get started
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 