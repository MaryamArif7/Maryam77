import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    isBlur: false,
    company: 'Objex',
    position: 'Software Engineer',
    location: 'Canada(Remote)',
    image: '/company/objex_logo.jfif',
    description: [
      'Re-architected the frontend codebase to improve maintainability, enforce consistent standards, and simplify the addition of new features',
      'in CRM,designed and implemented a real-time WebSocket-based system by creating a live server and integrating it with the frontend, enabling instant lead loading, updates, and status changes. This reduced load time significantly and improved performance by approximately 70% compared to traditional API-based fetching.',
      'in CRM,Implemented direct calling and messaging features for leads using Twilio, enabling users to communicate with leads directly from the application',
      'Developed a full-stack admin application from scratch, handling both frontend and backend APIs.',
      'Built internal tools for user onboarding, deletion, and user management directly from the admin panel',
      'Implemented custom email functionality using SendGrid to communicate with users'
    ],
    startDate: 'Jan 2025',
    endDate: 'Aug 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
    
     
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      
    ],
    website: '#',
    github: '#',
    x: '#',
  },
  {
    isCurrent: false,
    company: 'FreeSpace',
    position: 'Software Developer Intern',
    location: 'Pakistan(remote)',
    image: '/company/freespaceinc_logo.jfif',
    description: [
      'Contributed to frontend development tasks using React and modern web technologies',
     
    ],
    startDate: 'July 2024',
    endDate: 'Aug 2024',
    technologies: [
    
       {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
    ],
    website: 'https://bhindi.io',
    github: 'https://github.com/upsurgeio',
    x: 'https://x.com/upsurgelabs',
    linkedin: 'https://www.linkedin.com/company/upsurge-labs-pte-ltd',
  },
 
 {
    isCurrent: false,
    company: 'IoTIoT',
    position: 'Software Developer Intern',
    location: 'india(remote)',
    image: '/company/iotiot_logo.jfif',
    description: [
      'Converted Figma designs to working React applications, learned best coding practices, and used GitLab for version control',
     
    ],
    startDate: 'July 2024',
    endDate: 'Aug 2024',
    technologies: [
    
       {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
    ],
    website: '',
    github: '',
    x: '',
    linkedin: 'https://www.linkedin.com/company/upsurge-labs-pte-ltd',
  },
 
 
];
