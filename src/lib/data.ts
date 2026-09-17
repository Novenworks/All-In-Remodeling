import { ProjectItem, TransformationItem, ReviewItem } from '@/types';

export const projectsData: ProjectItem[] = [
  {
    id: 'k1',
    title: 'Custom Shaker Kitchen & Waterfall Quartz Island',
    category: 'kitchens',
    image: '/assets/all-in-remodeling/projects/kitchens/kitchen-white-island.jpg',
    location: 'Rancho Cucamonga, CA',
    highlights: ['Calacatta Gold Quartz', 'Solid Wood Shakers', 'Under-cabinet LED Lighting'],
    description: 'Complete kitchen overhaul featuring custom floor-to-ceiling cabinetry, extended quartz island with breakfast seating, and seamless tile backsplash.',
    duration: '4 Weeks'
  },
  {
    id: 'k2',
    title: 'Modern Chef Kitchen with Quartzite Countertops',
    category: 'kitchens',
    image: '/assets/all-in-remodeling/projects/kitchens/kitchen-quartz-countertop.jpg',
    location: 'Redlands, CA',
    highlights: ['Natural Quartzite Surfaces', 'Commercial Dual-Fuel Range', 'Pendant Illumination'],
    description: 'Engineered for entertaining with custom appliance paneling, soft-close hardware, and high-flow commercial ventilation.',
    duration: '3.5 Weeks'
  },
  {
    id: 'k3',
    title: 'Handcrafted Cabinetry & Walk-In Pantry Build',
    category: 'kitchens',
    image: '/assets/all-in-remodeling/projects/kitchens/kitchen-custom-cabinets.jpg',
    location: 'Rialto, CA',
    highlights: ['Dovetail Construction', 'Deep Pull-Out Drawers', 'Custom Crown Molding'],
    description: 'Tailored storage solution maximizing square footage with bespoke pantry shelving and integrated microwave drawer.',
    duration: '3 Weeks'
  },
  {
    id: 'k4',
    title: 'Designer Herringbone Backsplash & Ambient Lighting',
    category: 'kitchens',
    image: '/assets/all-in-remodeling/projects/kitchens/kitchen-modern-backsplash.jpg',
    location: 'Fontana, CA',
    highlights: ['Herringbone Marble Tile', 'Brushed Brass Accents', 'Floating Oak Shelving'],
    description: 'Precision artisan tile layout creating a stunning focal point between upper cabinetry and matching quartz surfaces.',
    duration: '2 Weeks'
  },
  {
    id: 'b1',
    title: 'Spa-Inspired Master Bath with Frameless Glass Enclosure',
    category: 'bathrooms',
    image: '/assets/all-in-remodeling/projects/bathrooms/bath-frameless-shower.jpg',
    location: 'Redlands, CA',
    highlights: ['1/2" Tempered Frameless Glass', 'Linear Drain System', 'Rain Shower Head'],
    description: 'Zero-threshold walk-in shower conversion with dual shower valves, built-in shampoo niches, and moisture-sealed subsurfaces.',
    duration: '3 Weeks'
  },
  {
    id: 'b2',
    title: 'Modern Floating Double Vanity & Backlit Mirrors',
    category: 'bathrooms',
    image: '/assets/all-in-remodeling/projects/bathrooms/bath-modern-vanity.jpg',
    location: 'Rancho Cucamonga, CA',
    highlights: ['Floating Oak Double Vanity', 'Matte Black Plumbing', 'Smart LED Anti-Fog Mirrors'],
    description: 'Contemporary master bath redesign optimizing morning routines with dedicated dual grooming stations and hidden outlets.',
    duration: '2.5 Weeks'
  },
  {
    id: 'b3',
    title: 'Floor-to-Ceiling Porcelain Tile & Soaking Tub Suite',
    category: 'bathrooms',
    image: '/assets/all-in-remodeling/projects/bathrooms/bath-soaking-tub.jpg',
    location: 'Riverside, CA',
    highlights: ['Freestanding Acrylic Soaker', 'Floor-Mount Tub Filler', 'Large-Format 24x48 Tile'],
    description: 'Luxury relaxation sanctuary with freestanding soaking tub surrounded by waterproofed imported porcelain tile walls.',
    duration: '3.5 Weeks'
  },
  {
    id: 'b4',
    title: 'Custom Vertical Niche Tilework & Designer Fixtures',
    category: 'bathrooms',
    image: '/assets/all-in-remodeling/projects/bathrooms/bath-custom-tile-shower.jpg',
    location: 'Ontario, CA',
    highlights: ['Full-Height Niche Tile', 'Thermostatic Valve', 'Slip-Resistant Mosaic Floor'],
    description: 'Intricate custom tile alignment with schluter metal edge profiling and anti-microbial epoxy grout.',
    duration: '2 Weeks'
  },
  {
    id: 'o1',
    title: 'Architectural Modern Pergola with Integrated Lighting',
    category: 'outdoor',
    image: '/assets/all-in-remodeling/projects/outdoor/outdoor-modern-pergola-1.jpg',
    location: 'Rialto, CA',
    highlights: ['Heavy-Timber Engineered Beams', 'UV Shading Louvers', 'Integrated Low-Voltage LED'],
    description: 'Custom engineered shade structure built to withstand Inland Empire desert heat while extending comfortable outdoor living.',
    duration: '2 Weeks'
  },
  {
    id: 'o2',
    title: 'Covered Patio Living Room & Entertainment Deck',
    category: 'outdoor',
    image: '/assets/all-in-remodeling/projects/outdoor/outdoor-covered-patio.jpg',
    location: 'Fontana, CA',
    highlights: ['Tongue-and-Groove Ceiling', 'Outdoor Ceiling Fans', 'Permitted Structural Tie-in'],
    description: 'Seamless roofline extension creating an all-season outdoor lounge space with recessed lighting and TV mounting.',
    duration: '3 Weeks'
  },
  {
    id: 'o3',
    title: 'Modern Outdoor Dining Pavilion & Paver Patio',
    category: 'outdoor',
    image: '/assets/all-in-remodeling/projects/outdoor/outdoor-entertaining-living.jpg',
    location: 'Redlands, CA',
    highlights: ['Interlocking Stone Pavers', 'Cantilevered Shade System', 'Electrical Outlets'],
    description: 'Backyard transformation turning underutilized lawn into a private dining and relaxation pavilion.',
    duration: '2.5 Weeks'
  },
  {
    id: 'w1',
    title: 'Whole-Home Open Concept Wall Removal & Luxury Vinyl',
    category: 'whole-home',
    image: '/assets/all-in-remodeling/projects/whole-home/living-room-flooring.webp',
    location: 'San Bernardino, CA',
    highlights: ['Engineered LVL Beam Install', 'Waterproof SPC Vinyl Plank', 'Continuous Baseboards'],
    description: 'Eliminated compartmentalized 1980s walls to create a massive modern open living, dining, and kitchen great room.',
    duration: '5 Weeks'
  },
  {
    id: 'w2',
    title: 'Architectural Modern Staircase & Custom Railing',
    category: 'whole-home',
    image: '/assets/all-in-remodeling/projects/whole-home/staircase-remodel.webp',
    location: 'Rancho Cucamonga, CA',
    highlights: ['Solid Hardwood Treads', 'Horizontal Iron Balusters', 'Stained Newel Posts'],
    description: 'Transformed outdated carpeted stairs into a breathtaking architectural centerpiece with modern ironwork.',
    duration: '2 Weeks'
  },
  {
    id: 'w3',
    title: 'Master Suite & Interior Architectural Overhaul',
    category: 'whole-home',
    image: '/assets/all-in-remodeling/projects/whole-home/master-suite-overhaul.webp',
    location: 'Yucaipa, CA',
    highlights: ['Custom Walk-in Closet', 'Solid Core Doors', 'Recessed Lighting Package'],
    description: 'Full bedroom, bathroom, and closet reconfiguration creating a serene, hotel-quality owner retreat.',
    duration: '4 Weeks'
  }
];

export const transformationsData: TransformationItem[] = [
  {
    id: 'trans-kitchen',
    title: 'Outdated 90s Oak Kitchen to Modern Chef Oasis',
    location: 'Rancho Cucamonga, CA',
    category: 'Full Kitchen Renovation',
    beforeImage: '/assets/all-in-remodeling/projects/transformations/before-kitchen-1.png',
    afterImage: '/assets/all-in-remodeling/projects/transformations/after-kitchen-1.png',
    beforeNote: 'Cramped layout, worn oak cabinetry, low fluorescent ceiling box, yellow laminate countertops.',
    afterNote: 'Raised ceiling, crisp white shaker cabinets, continuous quartz surfaces, island breakfast bar, modern recessed cans.',
    scope: [
      'Removed ceiling drop and expanded usable height',
      'Installed custom soft-close shaker cabinetry with full pantry',
      'Solid slab Calacatta quartz countertops with breakfast overhang',
      'Dedicated 20A electrical circuits for modern appliances'
    ]
  },
  {
    id: 'trans-bath',
    title: 'Fiberglass Tub Enclosure to Walk-In Glass Spa',
    location: 'Redlands, CA',
    category: 'Master Bath Transformation',
    beforeImage: '/assets/all-in-remodeling/projects/transformations/before-bath-1.png',
    afterImage: '/assets/all-in-remodeling/projects/transformations/after-bath-1.png',
    beforeNote: 'Yellowing fiberglass insert, leaky sliding doors, damaged drywall, cramped layout.',
    afterNote: 'Custom floor-to-ceiling tile, frameless heavy glass, linear floor drain, and modern matte black fixtures.',
    scope: [
      'Complete demolition and waterproof membrane installation (Schluter-Kerdi)',
      'Large-format Italian porcelain tile with custom vertical accent niche',
      'Custom heavy 3/8" tempered frameless glass enclosure',
      'Dual thermostatic valve and handheld sprayer system'
    ]
  }
];

export const processSteps = [
  {
    number: '01',
    title: 'In-Home Consultation & Vision Assessment',
    description: 'Abraham visits your home in person. We walk the space, discuss your design goals, evaluate structural possibilities, and establish a realistic budget framework.',
    deliverable: 'Initial project scope & ballpark timeline',
    badge: 'Direct with Abraham'
  },
  {
    number: '02',
    title: '3D Design & Fixed Itemized Quote',
    description: 'We turn ideas into clear layout drawings and precise material specifications. You receive an itemized, transparent quote with zero hidden surprises or ambiguous allowances.',
    deliverable: 'Detailed 3D layout & locked-in budget agreement',
    badge: 'Transparent Pricing'
  },
  {
    number: '03',
    title: 'City Permitting & HOA Approvals',
    description: 'We handle all paperwork, engineering calculations, plan submissions, and inspections with your local Inland Empire city building department and HOA.',
    deliverable: '100% code-compliant approved permits',
    badge: 'Zero Stress for You'
  },
  {
    number: '04',
    title: 'Precision Craftsmanship & Daily Cleanliness',
    description: 'Our dedicated trade specialists build your project with daily hands-on supervision by Abraham. We protect your home with dust containment and clean up every evening.',
    deliverable: 'Daily progress updates & clean work zone',
    badge: 'Hands-On Supervision'
  },
  {
    number: '05',
    title: 'Detailed Walkthrough & 100% Sign-Off',
    description: 'We perform a thorough 50-point punch list review together. We do not consider the project complete until every seam, fixture, and cabinet is flawless.',
    deliverable: 'Final sign-off & long-term craftsmanship backing',
    badge: '100% Satisfaction'
  }
];

export const serviceAreas = [
  { name: 'Rialto', note: 'Home base & priority scheduling', zip: '92376, 92377' },
  { name: 'Rancho Cucamonga', note: 'Kitchen & master bath specialists', zip: '91701, 91730, 91737' },
  { name: 'Redlands', note: 'Historic & modern home renovations', zip: '92373, 92374' },
  { name: 'Fontana', note: 'Whole-home & outdoor pergolas', zip: '92335, 92336, 92337' },
  { name: 'Riverside', note: 'Custom additions & kitchen overhauls', zip: '92501 - 92508' },
  { name: 'Ontario', note: 'Modern bathroom & living space upgrades', zip: '91761, 91762, 91764' },
  { name: 'San Bernardino', note: 'Structural modifications & full remodels', zip: '92401 - 92411' },
  { name: 'Yucaipa & Mentone', note: 'Outdoor living & master suite builds', zip: '92399, 92359' }
];

export const reviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Mark & Sarah T.',
    location: 'Rancho Cucamonga, CA',
    projectType: 'Full Kitchen & Island Remodel',
    rating: 5,
    date: 'Recent Client',
    quote: 'Abraham was on-site constantly making sure every cabinet line and quartz seam was millimeter-perfect. Having the actual owner running the job instead of a random subcontractor made all the difference.',
    highlight: 'Owner Abraham was on-site constantly.'
  },
  {
    id: 'rev-2',
    author: 'David L.',
    location: 'Redlands, CA',
    projectType: 'Master Bathroom & Walk-in Shower',
    rating: 5,
    date: 'Recent Client',
    quote: 'We had bad experiences with other contractors who took weeks to reply. All In Remodeling communicated every single day, protected our hardwood floors, and finished our luxury bathroom on schedule.',
    highlight: 'Finished on schedule with daily communication.'
  },
  {
    id: 'rev-3',
    author: 'Elena R.',
    location: 'Rialto, CA',
    projectType: 'Modern Outdoor Pergola & Patio',
    rating: 5,
    date: 'Recent Client',
    quote: 'Our new pergola completely changed how we use our backyard. The structural timber work and lighting are stunning. Honest pricing with zero unexpected add-on costs.',
    highlight: 'Honest pricing with zero surprise costs.'
  }
];
