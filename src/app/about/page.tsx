import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Aignit - Your Digital Transformation Partner',
  description: 'Learn about Aignit, a team of passionate digital experts dedicated to helping businesses thrive in the digital age. Discover our mission, team, and success stories.',
  keywords: 'digital agency, web development, digital marketing, team, mission, about us',
  openGraph: {
    title: 'About Aignit - Your Digital Transformation Partner',
    description: 'Learn about Aignit, a team of passionate digital experts dedicated to helping businesses thrive in the digital age.',
    type: 'website',
    url: 'https://aignit.com/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Aignit Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Aignit - Your Digital Transformation Partner',
    description: 'Learn about Aignit, a team of passionate digital experts dedicated to helping businesses thrive in the digital age.',
    images: ['/og-about.jpg'],
  },
};

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Team Members', value: '25+' },
];

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    imageUrl: '/team/john-smith.jpg',
    bio: 'With over 15 years of experience in digital transformation, John leads our team with vision and expertise.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Creative Director',
    imageUrl: '/team/sarah-johnson.jpg',
    bio: 'Sarah brings creativity and innovation to every project, ensuring our solutions are both beautiful and effective.',
  },
  {
    name: 'Michael Chen',
    role: 'Technical Lead',
    imageUrl: '/team/michael-chen.jpg',
    bio: 'Michael oversees our technical strategy, ensuring we deliver robust and scalable solutions.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Aignit
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're a team of passionate digital experts dedicated to helping businesses thrive in the digital age. Our mission is to transform ideas into impactful digital solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by businesses worldwide
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col bg-gray-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Mission section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Aignit, we believe in the power of digital transformation. Our mission is to empower businesses with innovative digital solutions that drive growth and create lasting impact. We combine technical expertise with creative thinking to deliver exceptional results for our clients.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
              Our services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the talented people behind our success. Our diverse team brings together expertise from various fields to deliver exceptional results.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {team.map((person) => (
            <li key={person.name}>
              <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Team Member Photo]
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-primary">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 