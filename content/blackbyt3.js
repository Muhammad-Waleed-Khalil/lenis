export const siteInfo = {
  name: 'Black Byt3',
  tagline: 'Silent. Swift. Secure.',
  description: 'Empowering Secure Innovation in the Digital Age',
  longDescription:
    'Black Byt3 is a cyber space — a living digital sentinel combining ethical hackers, AI engineers, and practical R&D. We deliver penetration testing, red teaming, threat intelligence, and AI-driven solutions so enterprises, startups, and students can innovate without fear.',
  email: 'contact@blackbyt3.com',
  phone: '+1 (555) 000-0000',
  social: {
    twitter: '@blackbyt3',
    github: 'blackbyt3',
    linkedin: 'company/blackbyt3',
  },
}

export const whyChooseUs = [
  {
    title: 'Talented & Verified Team',
    description:
      'Ethical hackers, security engineers, and AI developers with hands-on deliverables.',
  },
  {
    title: 'Hands-on Development',
    description:
      'From exploit prototyping to production-ready remediation and automation.',
  },
  {
    title: 'Educational Outreach',
    description:
      'Academy, OCMP mentorship, FYP support — building future talent.',
  },
  {
    title: 'Innovation',
    description: 'Building and creating our own IoT tools and ML Models.',
  },
]

export const featuredServices = [
  {
    title: 'Penetration Testing',
    description: 'Real attack simulations, clear remediation.',
    href: '/services/cybersecurity/penetration-testing',
  },
  {
    title: 'Red Teaming',
    description: 'Full-scope adversary emulation.',
    href: '/services/cybersecurity/red-teaming',
  },
  {
    title: 'AI Solutions',
    description: 'Custom ML & automation for security operations.',
    href: '/services/ai-ml',
  },
  {
    title: 'Hardware Tools',
    description: 'Offensive hardware toolkits and firmware analysis.',
    href: '/services/hardware',
  },
]

export const team = [
  {
    name: 'Muhammad Waqar',
    role: 'Co-Founder & CEO',
    description: 'Placeholder description',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Muhammad Jawad',
    role: 'Co-Founder & CTO',
    description: 'Placeholder description',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Shamir Khan',
    role: 'Security Engineer',
    description: 'Placeholder description',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Ammar Hanif',
    role: 'Security Researcher',
    description: 'Placeholder description',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Saad Khan',
    role: 'AI Engineer',
    description: 'Placeholder description',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Jafar Ali',
    role: 'Penetration Tester',
    description: 'Placeholder description',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Zeeshan Ali',
    role: 'Security Analyst',
    description: 'Placeholder description',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Maham',
    role: 'Security Engineer',
    description: 'Placeholder description',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Aqsa',
    role: 'Developer',
    description: 'Placeholder description',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Sanan Ali Shah',
    role: 'Security Researcher',
    description: 'Placeholder description',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Hisbullah',
    role: 'Developer',
    description: 'Placeholder description',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Waleed',
    role: 'Full Stack Developer',
    description: 'Placeholder description',
    image: '/team/placeholder.jpg',
  },
]

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      {
        name: 'Cybersecurity Services',
        children: [
          { name: 'Penetration Testing', href: '/services/cybersecurity/penetration-testing' },
          { name: 'GRC', href: '/services/cybersecurity/grc' },
          { name: 'Red Teaming & Purple Teaming', href: '/services/cybersecurity/red-teaming' },
          { name: 'Threat Intelligence', href: '/services/cybersecurity/threat-intelligence' },
          { name: 'Incident Response', href: '/services/cybersecurity/incident-response' },
          { name: 'Managed Security Services', href: '/services/cybersecurity/managed-security' },
        ],
      },
      {
        name: 'AI & ML Solutions',
        href: '/services/ai-ml',
      },
      {
        name: 'Hardware-based Security Tools',
        href: '/services/hardware',
      },
      {
        name: 'FYP & Student Projects Support',
        href: '/services/fyp',
      },
      {
        name: 'OCMP',
        href: '/services/ocmp',
      },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
  },
  {
    name: 'Academy',
    href: '/academy',
  },
  {
    name: 'The Arena',
    href: '/arena',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Partnerships',
    href: '/partnerships',
  },
  {
    name: 'Resources',
    href: '/resources',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export const partners = [
  { name: 'Rayonix', description: 'Strategic technology partner', logo: '/partners/rayonix.png' },
  { name: 'TechBiz', description: 'Business solutions partner', logo: '/partners/techbiz.png' },
  { name: 'Cyber Pashto', description: 'Community partner', logo: '/partners/cyberpashto.png' },
  { name: 'AQEDA', description: 'Research partner', logo: '/partners/aqeda.png' },
]
