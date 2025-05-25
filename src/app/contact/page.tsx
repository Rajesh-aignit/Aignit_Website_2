import ContactForm from '@/components/ContactForm';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const contactInfo = [
  {
    name: 'Email',
    description: 'Get in touch with us via email',
    icon: EnvelopeIcon,
    value: 'founder@aignit.com',
    href: 'mailto:founder@aignit.com',
  },
  {
    name: 'Phone',
    description: 'Call us directly',
    icon: PhoneIcon,
    value: '+91 8056221822',
    href: 'tel:+918056221822',
  },
  {
    name: 'Office',
    description: 'Visit our office',
    icon: MapPinIcon,
    value: '123 Business Street, Suite 100, City, State 12345',
    href: 'https://maps.google.com',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Get in touch</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a question or want to work together? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-8">
            {contactInfo.map((item) => (
              <div key={item.name} className="flex gap-x-3">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                  <p className="mt-2">
                    <a
                      href={item.href}
                      className="text-sm font-semibold leading-6 text-primary hover:text-primary/80"
                    >
                      {item.value} <span aria-hidden="true">&rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-gray-50 p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
} 