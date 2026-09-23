/**
 * BRC Group × FocusOn Interiors — single-project case study data.
 *
 * SWAP-IN CHECKLIST (search this file / components for "ADD "):
 *  - ADD CEO PHOTO        → src/data/project.js  team.ceo.photo
 *  - ADD PM PHOTO         → team.pm.photo
 *  - ADD CLIENT PHOTO     → testimonial.photo
 *  - ADD CERTIFICATE      → certificates[].src
 *  - ADD PROJECT VIDEO    → film.videoSrc  (drop file in public/videos/)
 *  - Extra Drive photos   → gallery[]     (drop files in public/images/gallery/)
 */

export const project = {
  title: '4,200 Sq.Ft Interior & Civil Fit-Out for BRC Group',
  shortTitle: 'BRC Group Fit-Out',
  tagline: 'Turnkey workplace execution — delivered on time, to the last detail.',
  location: 'Kolkata',
  carpetArea: 4200,
  carpetAreaLabel: '4,200 sq.ft',
  type: 'Interior & Civil Works',
  status: 'Completed on time',
  startDate: '1 May 2026',
  handoverDate: '18 August 2026',
  startISO: '2026-05-01',
  handoverISO: '2026-08-18',
  durationDays: 109, // 1 May → 18 Aug 2026 (inclusive span: 110 calendar days; elapsed 109)
  durationWeeks: 16, // 109 days ≈ 15 weeks 4 days — reported as 16 weeks
  achievement:
    'Successfully completed the 4,200 sq.ft project within timeline. Client was highly satisfied with quality and execution. CMD Mr. Arun Kumar Rai appreciated the team’s performance and expressed interest in awarding more future projects.',
  overview:
    'FocusOn Interior Decorators Pvt. Ltd. delivered the complete interior and civil fit-out of a 4,200 sq.ft workplace for BRC Group in Kolkata. Working with Node Urban Lab as Project Management Consultant, the team mobilised on 1 May 2026 and handed over a finished, client-ready office on 18 August 2026 — sixteen weeks, on schedule. Quality of workmanship was commended by CMD Mr. Arun Kumar Rai, who indicated interest in future collaborations.',
}

export const executor = {
  name: 'FocusOn Interior Decorators Pvt. Ltd.',
  shortName: 'FocusOn Interiors',
  role: 'Vendor / Execution partner (Interior & Civil Works)',
  founded: 2017,
  hq: 'Gurugram, Haryana, India',
  website: 'https://focusoninteriors.com/',
  email: 'info@focusoninterior.in',
  phones: ['+91 011 4928 7589', '+91 99 1025 8820'],
  address: 'UN-150, Near Shiv Mandir, Sikanderpur, Gurugram, 122002',
  logo: './images/logos/focuson-logo.png',
  about:
    'End-to-end interior design and turnkey execution for commercial and corporate spaces — concept design, space planning, material selection, project management, and on-ground execution. Design intent, delivered.',
  socials: {
    instagram: 'https://www.instagram.com/focuson_interiors_pvt_ltd',
    youtube: 'https://www.youtube.com/channel/UCQKMdyybltlCdo4b2iq4RpQ',
    website: 'https://focusoninteriors.com/',
  },
}

export const client = {
  name: 'BRC Group — M/S Badri Rai & Company',
  shortName: 'BRC Group',
  role: 'Client',
  founded: 1975,
  hq: 'Duliajan, Dibrugarh, Assam',
  website: 'https://www.badriraico.com/',
  logo: './images/logos/brc-logo.png',
  cmd: 'Mr. Arun Kumar Rai',
  about:
    'Leading Indian construction company spanning Industrial, Petrochemical, Civil, Infrastructure and Institutional projects. ISO 9001:2015 and ISO 14001:2015 certified, with a five-decade record of government and PSU work.',
  certifications: ['ISO 9001:2015', 'ISO 14001:2015'],
  associations: [
    'CPWD',
    'Engineers India Limited',
    'NBCC',
    'Assam PWD',
    'MES',
    'Karbi Anglong Autonomous Council',
  ],
}

export const pmc = {
  name: 'Node Urban Lab',
  role: 'Project Management Consultant',
  founded: 2014,
  hq: 'Noida / Lucknow, India',
  website: 'https://www.nodeurbanlab.com/',
  about:
    'Interdisciplinary architecture, interiors and urban-design practice. On this project Node Urban Lab served as Project Management Consultant — coordinating design intent, programme and quality between client and execution partner.',
}

export const team = {
  ceo: {
    name: 'Azim Khan',
    title: 'Chief Executive Officer',
    role: 'Project Lead',
    // ADD CEO PHOTO: save a square/portrait of Azim Khan to public/images/team/azim-khan.jpg
    // Source (when network allows): https://focusoninteriors.com/team/
    photo: null,
    bio: 'CEO of FocusOn Interiors (appointed January 2025) after an eight-year tenure spanning operations to executive leadership. Known for translating design intent into on-ground delivery — people, process, performance. Has led prestigious workplace programmes for organisations including Infosys, L&T Finance and Luminous.',
  },
  pm: {
    name: 'Raj Mishra',
    title: 'Project Manager',
    role: 'Project Manager',
    // ADD PM PHOTO: save portrait to public/images/team/raj-mishra.jpg
    photo: null,
    bio: 'On-site project manager for the BRC Group Kolkata fit-out — coordinating civil works, interiors, vendors and the daily programme through to handover.',
  },
}

export const testimonial = {
  quote:
    'The client appreciated the timely completion, quality workmanship, and overall project execution, and assured future project opportunities with BRC Group.',
  name: 'Mr. Arun Kumar Rai',
  designation: 'CMD, BRC Group',
  // ADD CLIENT PHOTO: save portrait to public/images/team/arun-kumar-rai.jpg
  // Official page: https://www.badriraico.com/our-management
  photo: null,
}

export const timeline = [
  {
    date: '1 May 2026',
    title: 'Project Start',
    body: 'Kick-off, site mobilisation and programme lock with PMC Node Urban Lab and BRC Group stakeholders.',
  },
  {
    date: 'May 2026',
    title: 'Civil & Services',
    body: 'Civil interventions, partitioning, flooring substrates and MEP / services rough-in across the 4,200 sq.ft plate.',
  },
  {
    date: 'June – July 2026',
    title: 'Interior Fit-Out',
    body: 'Joinery, finishes, ceiling systems, lighting, furniture and the reception, cabin, lounge and workstation zones.',
  },
  {
    date: 'Early August 2026',
    title: 'Snagging & QA',
    body: 'Quality walkthroughs, snag closure and finishing to handover standard.',
  },
  {
    date: '18 August 2026',
    title: 'Handover',
    body: 'On-time completion and client handover. CMD appreciation recorded; interest in future BRC programmes noted.',
  },
]

export const gallery = [
  {
    src: './images/gallery/KRI_3128.jpg',
    thumb: './images/gallery/thumb-KRI_3128.jpg',
    alt: 'Reception desk with illuminated Om feature wall and visitor lounge',
    caption: 'Reception',
    span: 'wide',
  },
  {
    src: './images/gallery/KRI_3118.jpg',
    thumb: './images/gallery/thumb-KRI_3118.jpg',
    alt: 'Visitor lounge with grey sofas and living green wall',
    caption: 'Lounge',
    span: 'wide',
  },
  {
    src: './images/gallery/KRI_3180.jpg',
    thumb: './images/gallery/thumb-KRI_3180.jpg',
    alt: 'Executive cabin with marble flooring, lounge seating and workstation',
    caption: 'Executive cabin',
    span: 'wide',
  },
  {
    src: './images/gallery/KRI_3207.jpg',
    thumb: './images/gallery/thumb-KRI_3207.jpg',
    alt: 'Director desk with millwork storage and glass-fronted meeting room',
    caption: 'Director’s bay',
    span: 'tall',
  },
  {
    src: './images/gallery/KRI_3228.jpg',
    thumb: './images/gallery/thumb-KRI_3228.jpg',
    alt: 'Meeting room looking through glass into open-plan workstations',
    caption: 'Meeting & work floor',
    span: 'wide',
  },
  {
    src: './images/gallery/KRI_3128-reception.jpg',
    thumb: './images/gallery/KRI_3128-reception.jpg',
    alt: 'Detail of the reception joinery and Om backlit niche',
    caption: 'Reception detail',
    span: 'tall',
  },
  {
    src: './images/gallery/KRI_3118-greenwall.jpg',
    thumb: './images/gallery/KRI_3118-greenwall.jpg',
    alt: 'Vertical garden and fluted timber feature in the lounge',
    caption: 'Green wall',
    span: 'tall',
  },
  {
    src: './images/gallery/KRI_3228-workstations.jpg',
    thumb: './images/gallery/KRI_3228-workstations.jpg',
    alt: 'Open-plan workstations seen through frosted glass partitions',
    caption: 'Workstations',
    span: 'tall',
  },
  {
    src: './images/gallery/KRI_3207-desk.jpg',
    thumb: './images/gallery/KRI_3207-desk.jpg',
    alt: 'Close view of the executive desk, storage and Ganesha niche',
    caption: 'Cabin millwork',
    span: 'wide',
  },
  {
    src: './images/gallery/KRI_3180-lounge.jpg',
    thumb: './images/gallery/KRI_3180-lounge.jpg',
    alt: 'Tufted lounge sofa in the executive cabin',
    caption: 'Cabin lounge',
    span: 'tall',
  },
]

export const film = {
  // ADD PROJECT VIDEO: place MP4/WebM at public/videos/project-film.mp4 and set videoSrc below.
  // Until then the player runs a cinematic Ken-Burns sequence of project stills.
  videoSrc: null, // e.g. './videos/project-film.mp4'
  poster: './images/gallery/KRI_3180.jpg',
  stills: [
    './images/gallery/KRI_3180.jpg',
    './images/gallery/KRI_3128.jpg',
    './images/gallery/KRI_3207.jpg',
    './images/gallery/KRI_3118.jpg',
    './images/gallery/KRI_3228.jpg',
  ],
  durationPerStill: 5,
}

export const certificates = [
  {
    title: 'Project Completion Certificate',
    // ADD CERTIFICATE: save scan/photo to public/images/certificates/completion.jpg
    src: null,
    note: 'ADD CERTIFICATE IMAGE — drop the signed completion certificate here.',
  },
  {
    title: 'Quality / Handover Record',
    src: null,
    note: 'ADD CERTIFICATE IMAGE — optional additional certifications or snag-free handover letter.',
  },
]

export const nav = [
  { id: 'overview', label: 'Overview' },
  { id: 'executor', label: 'Executed By' },
  { id: 'client', label: 'Client' },
  { id: 'team', label: 'Team' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'testimonial', label: 'Testimonial' },
  { id: 'contact', label: 'Contact' },
]
