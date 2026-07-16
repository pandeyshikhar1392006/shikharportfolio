export const profile = {
  name: "Shikhar Pandey",
  tagline: "Passionate about building ideas that inspire, engage, and create impact.",
  title: "Creative Video Editor & Designer",
  location: "Delhi",
  email: "pandeyshikhar1392006@gmail.com",
  phone: "+91 8115193817",
  instagram: "https://www.instagram.com/shik.harpandey?igsh=N3o4NHpqdDJwNGZp",
  linkedin:
    "https://www.linkedin.com/in/shikhar-pandey-4563a0294?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  resumeFile: "/resume-shikhar-pandey.pdf",
};

export const about = {
  intro:
    "Hi, I'm Shikhar Pandey, a Philosophy undergraduate at Hansraj College, University of Delhi. I work as a video editor and designer, creating visuals and edits that engage audiences and make an impact.",
  extended:
    "With experience across media, design, event management, and student leadership, I aim to create work that is impactful, thoughtful, and driven by purpose. Two years in, my toolkit spans video editing, branding, and content creation, but the throughline has always been the same: figure out what a story needs, then build it with care.",
  philosophy:
    "Philosophy taught me to sit with a question before answering it. Editing taught me the same patience, cut by cut. I bring both to every project: think first, then build something that actually lands.",
  stats: [
    { value: "2+", label: "Years of experience" },
    { value: "15+", label: "Projects delivered" },
    { value: "6", label: "Teams & societies" },
  ],
};

export const skills = {
  software: [
    { name: "Adobe Premiere Pro", tag: "Editing" },
    { name: "Adobe After Effects", tag: "Motion" },
    { name: "Adobe Photoshop", tag: "Design" },
    { name: "Canva", tag: "Design" },
    { name: "CapCut", tag: "Editing" },
  ],
  aiTools: [
    { name: "ChatGPT", tag: "Ideation" },
    { name: "Claude", tag: "Writing" },
    { name: "ElevenLabs", tag: "Voice" },
  ],
};

export const experience = [
  {
    period: "May 2026 to Present",
    role: "Design Intern",
    org: "DU Beats",
    description:
      "Developing engaging visuals for social media and event promotions.",
  },
  {
    period: "June 2026 to Present",
    role: "Media & Communications Head",
    org: "Enactus Hansraj",
    description:
      "Managing the media and communications team and driving content strategy for the council.",
  },
  {
    period: "2025 to Present",
    role: "Video Editor",
    org: "Toy Treat, Startup",
    description:
      "Part of the technical team, editing promotional and social media videos.",
  },
  {
    period: "2025 to Present",
    role: "Technical Team Member",
    org: "TEDx Hansraj College",
    description: "Supporting event operations and content production.",
  },
  {
    period: "2025 to Present",
    role: "Technical Team Member",
    org: "Nishtha UPSC Society",
    description: "Involved in academic discussions and content sessions.",
  },
  {
    period: "2025 to Present",
    role: "Volunteer, Technical Team",
    org: "NSS",
    description: "Participating in community service activities.",
  },
  {
    period: "2025 to Present",
    role: "Technical Team Member",
    org: "Markus Marketing Society",
    description: "Contributing to marketing tasks and event execution.",
  },
];

export const education = [
  {
    period: "2025 to 2028",
    title: "B.A. (Hons.) Philosophy",
    place: "Hansraj College, University of Delhi",
    detail: "Current student",
  },
  {
    period: "2025",
    title: "Higher Secondary (XII), CBSE",
    place: "Delhi Public School Kalyanpur",
    detail: "97.4%",
  },
  {
    period: "2023",
    title: "Secondary (X), CBSE",
    place: "Dr Virendra Swarup Education Centre, Kanpur",
    detail: "95.4%",
  },
];

export const achievements = [
  "Administrative Head, MUN Secretariat, DPS Kalyanpur: ran international conference operations for 200+ participants",
  "4-time awardee, Inter School Singing Competition (KSS)",
  "Distinguished MUN participant across national-level conferences",
  "Dainik Jagran Excellence Award for academic performance",
];

export const interests = [
  {
    name: "Editing",
    blurb: "Cutting footage into something that actually feels like a story.",
  },
  {
    name: "Designing",
    blurb: "Visual arts, graphic design, and content built for the scroll.",
  },
  {
    name: "Cooking",
    blurb: "Kitchen experiments that follow the same instinct as a good edit.",
  },
  {
    name: "Painting",
    blurb: "Slower, quieter creative work, away from a timeline.",
  },
];

export type VideoProject = {
  id: string;
  title: string;
  category: "Short Form" | "Long Form";
  src: string;
  poster: string;
  tools: string;
  description: string;
};

export const shortFormVideos: VideoProject[] = [
  {
    id: "short-1",
    title: "Reel Cut No.1",
    category: "Short Form",
    src: "/videos/short-reel-1.mp4",
    poster: "/videos/posters/short-reel-1.jpg",
    tools: "Premiere Pro, CapCut",
    description: "Fast-paced vertical edit built for the scroll, tight cuts on the beat.",
  },
  {
    id: "short-2",
    title: "Reel Cut No.2",
    category: "Short Form",
    src: "/videos/short-reel-2.mp4",
    poster: "/videos/posters/short-reel-2.jpg",
    tools: "CapCut, After Effects",
    description: "Quick-turnaround social content with punchy pacing and captions.",
  },
  {
    id: "short-3",
    title: "Enactus Hansraj Reel",
    category: "Short Form",
    src: "/videos/short-reel-3.mp4",
    poster: "/videos/posters/short-reel-3.jpg",
    tools: "Premiere Pro, Photoshop",
    description: "Recruitment-style reel produced for Enactus Hansraj's media team.",
  },
  {
    id: "short-4",
    title: "DU Buddy Task Reel",
    category: "Short Form",
    src: "/videos/short-reel-4.mp4",
    poster: "/videos/posters/short-reel-4.jpg",
    tools: "Premiere Pro, CapCut",
    description: "Task-based creative brief turned into a full vertical narrative edit.",
  },
];

export const longFormVideos: VideoProject[] = [
  {
    id: "long-intro",
    title: "Motivation",
    category: "Long Form",
    src: "/videos/intro.mp4",
    poster: "/videos/posters/intro.jpg",
    tools: "Premiere Pro, After Effects",
    description: "A motivational edit designed to energize the viewer and showcase storytelling through motion.",
  },
  {
    id: "long-1",
    title: "Enactus Campaign Film",
    category: "Long Form",
    src: "/videos/long-enactus-campaign.mp4",
    poster: "/videos/posters/long-enactus-campaign.jpg",
    tools: "Premiere Pro, After Effects",
    description: "Cinematic campaign film produced for Enactus Hansraj's council initiatives.",
  },
  {
    id: "long-2",
    title: "Hansraj Eco Society Film",
    category: "Long Form",
    src: "/videos/long-hansraj-ecosoc.mp4",
    poster: "/videos/posters/long-hansraj-ecosoc.jpg",
    tools: "Premiere Pro, Photoshop",
    description: "Landscape production edit made for the Hansraj Eco Society.",
  },
  {
    id: "long-3",
    title: "DU Buddy Full Cut",
    category: "Long Form",
    src: "/videos/long-dubuddy-fullcut.mp4",
    poster: "/videos/posters/long-dubuddy-fullcut.jpg",
    tools: "Premiere Pro, CapCut",
    description: "The full-length version of the DU Buddy project, edited start to finish.",
  },
];

export type SocialProject = {
  id: string;
  title: string;
  image: string;
  tools: string;
  description: string;
};

export const socialProjects: SocialProject[] = [
  {
    id: "social-1",
    title: "Fanta: More Fizz, More Fun",
    image: "/images/social/social-fanta-poster.jpg",
    tools: "Photoshop, Canva",
    description: "Bold FMCG-style product poster with high-contrast typography and splash effects.",
  },
  {
    id: "social-2",
    title: "A Day In My Life, Bharat",
    image: "/images/social/social-bharat-travel.jpg",
    tools: "Photoshop, Canva",
    description: "Editorial travel cover treatment built around oversized serif type.",
  },
  {
    id: "social-3",
    title: "Great, Ratan Tata",
    image: "/images/social/social-ratantata-quote.jpg",
    tools: "Photoshop, Canva",
    description: "Quote card layered with repeated type and a tonal portrait cutout.",
  },
  {
    id: "social-4",
    title: "Mustang, Legend Reforged",
    image: "/images/social/social-mustang-poster.jpg",
    tools: "Photoshop, Canva",
    description: "Automotive poster concept with a monochrome palette and striped typography.",
  },
  {
    id: "social-5",
    title: "The Boy Who Stole Butter",
    image: "/images/social/social-whimsy-quote.jpg",
    tools: "Photoshop, Canva",
    description: "Editorial mixed-type poster blending hand lettering with archival texture.",
  },
  {
    id: "social-6",
    title: "TEDx Poster",
    image: "/images/enactus/enactus-tedx-poster.jpg",
    tools: "Photoshop, Canva",
    description: "Campaign poster adapted for social media.",
  },
  {
    id: "social-7",
    title: "Varsiki Poster",
    image: "/images/enactus/enactus-varsiki-poster.jpg",
    tools: "Photoshop, Canva",
    description: "Visual campaign poster created for Varsiki outreach.",
  },
  {
    id: "social-8",
    title: "Wanted Poster",
    image: "/images/enactus/enactus-wanted-poster.jpg",
    tools: "Photoshop, Canva",
    description: "Recruitment-style poster designed for council promotion.",
  },
];

export type CaseStudyImage = {
  id: string;
  title: string;
  image: string;
};

export const enactusCaseStudy = {
  role: "Media and Communication Head, Enactus Hansraj",
  challenge:
    "The brief was formal by design: a strict, minimal palette, a small set of approved layouts, and zero room to deviate from the organisation's branding guidelines.",
  approach:
    "Working inside those limits, the focus stayed on typography, clean composition, and a steady visual hierarchy, aiming for something that read as authoritative without feeling stiff.",
  reflection:
    "Creativity here wasn't about unlimited freedom. It was about making memorable work while staying fully inside the lines.",
  images: [
    {
      id: "case-1",
      title: "Enactus campaign art 01",
      image: "/images/enactus/enactus-case-1.png",
    },
    {
      id: "case-2",
      title: "Enactus campaign art 02",
      image: "/images/enactus/enactus-case-2.png",
    },
    {
      id: "case-3",
      title: "Enactus campaign art 03",
      image: "/images/enactus/enactus-case-3.png",
    },
  ] as CaseStudyImage[],
};

export const introVideo = {
  src: "/videos/hi.mp4",
  poster: "/videos/posters/intro.jpg",
};

export const photos = {
  primary: "/images/photos/shikhar_photo1_cutout.png",
  secondary: "/images/photos/shikhar_photo_full.png",
};
