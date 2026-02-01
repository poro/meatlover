export type Product = {
  id: string
  name: string
  brand: string
  category: 'grill' | 'smoker' | 'accessory' | 'thermometer'
  subcategory: string
  description: string
  image_url: string
  price: number
  rating: number
  reviews_count: number
  pros: string[]
  cons: string[]
  specs: Record<string, string>
  affiliate_url: string
  asin?: string
  featured?: boolean
  best_for?: string
  expert_tested?: boolean
}

export type Subscription = {
  id: string
  name: string
  description: string
  image_url: string
  price_range: string
  rating: number
  pros: string[]
  cons: string[]
  affiliate_url: string
  commission: string
}

export type Guide = {
  slug: string
  title: string
  description: string
  category: 'Buying Guide' | 'Tutorial' | 'Comparison' | 'Recipe'
  readTime: string
  date: string
  featured: boolean
  image?: string
  relatedProducts?: string[]
}

export const products: Product[] = [
  // =====================
  // GRILLS - Pellet (8 products)
  // =====================
  {
    id: '1',
    name: 'Traeger Pro 780',
    brand: 'Traeger',
    category: 'grill',
    subcategory: 'pellet',
    description: 'The Traeger Pro 780 brings unmatched flavor to your backyard. With 780 sq. inches of cooking space and WiFIRE technology, you can monitor and control your grill from anywhere.',
    image_url: '/images/traeger-pro-780.jpg',
    price: 1299.99,
    rating: 4.7,
    reviews_count: 2847,
    pros: ['WiFi connectivity', 'Large cooking area', 'Consistent temperature', 'Great smoke flavor'],
    cons: ['Premium price', 'Requires electricity', 'Pellet consumption can be high'],
    specs: {
      'Cooking Area': '780 sq. in.',
      'Temperature Range': '165°F - 500°F',
      'Hopper Capacity': '18 lbs',
      'Weight': '165 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B08LCJK9CP?tag=meatlover-20',
    asin: 'B08LCJK9CP',
    featured: true,
    best_for: 'Best Overall Pellet Grill',
    expert_tested: true
  },
  {
    id: '2',
    name: 'Weber SmokeFire EX6',
    brand: 'Weber',
    category: 'grill',
    subcategory: 'pellet',
    description: 'Weber\'s flagship pellet grill combines the convenience of pellet cooking with Weber\'s legendary build quality. Sear station hits 600°F for perfect steaks.',
    image_url: '/images/weber-smokefire-ex6.jpg',
    price: 1499.99,
    rating: 4.5,
    reviews_count: 1523,
    pros: ['High sear temperatures', 'Weber Connect app', 'Durable construction', 'Easy ash cleanup'],
    cons: ['Expensive', 'Heavy', 'Learning curve for pellet newbies'],
    specs: {
      'Cooking Area': '1008 sq. in.',
      'Temperature Range': '200°F - 600°F',
      'Hopper Capacity': '22 lbs',
      'Weight': '178 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B084HGWGKS?tag=meatlover-20',
    asin: 'B084HGWGKS',
    featured: true,
    best_for: 'Best for High-Heat Searing',
    expert_tested: true
  },
  {
    id: '15',
    name: 'Traeger Ironwood 885',
    brand: 'Traeger',
    category: 'grill',
    subcategory: 'pellet',
    description: 'The Ironwood 885 features Traeger\'s D2 drivetrain and super smoke mode for maximum flavor. Double-wall insulation maintains consistent temps in any weather.',
    image_url: '/images/traeger-ironwood-885.jpg',
    price: 1999.99,
    rating: 4.8,
    reviews_count: 982,
    pros: ['Super Smoke mode', 'D2 Direct Drive', 'Double-wall insulation', 'Downdraft exhaust'],
    cons: ['Premium price point', 'Complex WiFi setup', 'Heavy at 185 lbs'],
    specs: {
      'Cooking Area': '885 sq. in.',
      'Temperature Range': '165°F - 500°F',
      'Hopper Capacity': '20 lbs',
      'Weight': '185 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B084Q1J2MP?tag=meatlover-20',
    asin: 'B084Q1J2MP',
    expert_tested: true
  },
  {
    id: '16',
    name: 'Pit Boss Austin XL',
    brand: 'Pit Boss',
    category: 'grill',
    subcategory: 'pellet',
    description: 'The Austin XL delivers competition-level performance at a fraction of the price. 1000 sq in of cooking space handles the biggest cookouts with ease.',
    image_url: '/images/pit-boss-austin-xl.jpg',
    price: 599.99,
    rating: 4.4,
    reviews_count: 3421,
    pros: ['Great value', 'Huge cooking area', 'Flame broiler for searing', '5-year warranty'],
    cons: ['Temperature swings', 'Cheap controller', 'Paint chips easily'],
    specs: {
      'Cooking Area': '1000 sq. in.',
      'Temperature Range': '180°F - 500°F',
      'Hopper Capacity': '31 lbs',
      'Weight': '150 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B07ZTSWKD2?tag=meatlover-20',
    asin: 'B07ZTSWKD2',
    best_for: 'Best Budget Pellet Grill'
  },
  {
    id: '17',
    name: 'Camp Chef Woodwind Pro 36',
    brand: 'Camp Chef',
    category: 'grill',
    subcategory: 'pellet',
    description: 'The Woodwind Pro 36 features a sidekick-compatible design and PID controller for ±5° accuracy. The ash cleanout system makes maintenance a breeze.',
    image_url: '/images/camp-chef-woodwind-36.jpg',
    price: 1299.00,
    rating: 4.6,
    reviews_count: 756,
    pros: ['Excellent temp control', 'Sidekick compatible', 'Easy cleanup', 'Great smoke flavor'],
    cons: ['Sidekick sold separately', 'WiFi can disconnect', 'Heavy for portability'],
    specs: {
      'Cooking Area': '1236 sq. in.',
      'Temperature Range': '160°F - 500°F',
      'Hopper Capacity': '22 lbs',
      'Weight': '170 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B09QZ3DXYL?tag=meatlover-20',
    asin: 'B09QZ3DXYL',
    expert_tested: true
  },
  {
    id: '18',
    name: 'Z Grills 700D4E',
    brand: 'Z Grills',
    category: 'grill',
    subcategory: 'pellet',
    description: 'Z Grills brings serious value with the 700D4E. PID controller, 697 sq in cooking space, and a price that won\'t break the bank.',
    image_url: '/images/z-grills-700d4e.jpg',
    price: 449.00,
    rating: 4.3,
    reviews_count: 2156,
    pros: ['Incredible value', 'Good temp control', 'Solid construction', 'Easy assembly'],
    cons: ['Customer service issues', 'Basic app features', 'Pellet consumption high'],
    specs: {
      'Cooking Area': '697 sq. in.',
      'Temperature Range': '180°F - 450°F',
      'Hopper Capacity': '20 lbs',
      'Weight': '108 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B09NQKM7TL?tag=meatlover-20',
    asin: 'B09NQKM7TL'
  },
  {
    id: '19',
    name: 'RecTeq RT-700 Bull',
    brand: 'RecTeq',
    category: 'grill',
    subcategory: 'pellet',
    description: 'RecTeq\'s Bull series is built like a tank with full stainless steel construction. The smart PID controller holds temps within 5 degrees.',
    image_url: '/images/recteq-rt700.jpg',
    price: 1499.00,
    rating: 4.8,
    reviews_count: 1834,
    pros: ['Stainless steel build', 'Excellent temp control', 'Great customer service', '6-year warranty'],
    cons: ['Premium price', 'No flame broiler', 'Limited accessories'],
    specs: {
      'Cooking Area': '702 sq. in.',
      'Temperature Range': '180°F - 500°F',
      'Hopper Capacity': '40 lbs',
      'Weight': '200 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B07P85KP8S?tag=meatlover-20',
    asin: 'B07P85KP8S',
    expert_tested: true
  },
  {
    id: '20',
    name: 'Grilla Grills Silverbac Alpha',
    brand: 'Grilla',
    category: 'grill',
    subcategory: 'pellet',
    description: 'The Silverbac Alpha features a unique alpha smoke controller that lets you dial in the perfect smoke level. Heavy-duty 14-gauge steel construction.',
    image_url: '/images/grilla-silverbac.jpg',
    price: 799.00,
    rating: 4.6,
    reviews_count: 892,
    pros: ['Heavy-gauge steel', 'Alpha smoke mode', 'Double-walled lid', 'Lifetime warranty on burner'],
    cons: ['No WiFi', 'Smaller hopper', 'Limited brand recognition'],
    specs: {
      'Cooking Area': '692 sq. in.',
      'Temperature Range': '180°F - 500°F',
      'Hopper Capacity': '18 lbs',
      'Weight': '165 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B07N1J8Y2P?tag=meatlover-20',
    asin: 'B07N1J8Y2P'
  },

  // =====================
  // GRILLS - Charcoal (6 products)
  // =====================
  {
    id: '3',
    name: 'Weber Original Kettle Premium 22"',
    brand: 'Weber',
    category: 'grill',
    subcategory: 'charcoal',
    description: 'The iconic Weber Kettle has been perfected over decades. Simple, reliable, and produces incredible flavor. The one-touch cleaning system makes cleanup a breeze.',
    image_url: '/images/weber-kettle-22.jpg',
    price: 189.00,
    rating: 4.8,
    reviews_count: 8943,
    pros: ['Legendary reliability', 'Affordable price', 'Great for beginners', 'Versatile cooking'],
    cons: ['Requires charcoal management', 'No built-in thermometer', 'Limited space'],
    specs: {
      'Cooking Area': '363 sq. in.',
      'Fuel Type': 'Charcoal',
      'Lid Material': 'Porcelain-enameled steel',
      'Weight': '32 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B00MKB5TXA?tag=meatlover-20',
    asin: 'B00MKB5TXA',
    featured: true,
    best_for: 'Best Value Charcoal Grill',
    expert_tested: true
  },
  {
    id: '4',
    name: 'Kamado Joe Classic III',
    brand: 'Kamado Joe',
    category: 'grill',
    subcategory: 'charcoal',
    description: 'Premium ceramic kamado cooker with patented SloRoller technology for better smoke distribution. The Divide & Conquer system lets you cook multiple dishes at different temps.',
    image_url: '/images/kamado-joe-classic-iii.jpg',
    price: 2499.00,
    rating: 4.9,
    reviews_count: 1247,
    pros: ['Exceptional heat retention', 'Versatile cooking styles', 'Premium construction', 'Great smoke flavor'],
    cons: ['Very heavy', 'Expensive', 'Requires lump charcoal'],
    specs: {
      'Cooking Area': '256 sq. in. (expandable)',
      'Temperature Range': '225°F - 750°F',
      'Material': 'Ceramic',
      'Weight': '188 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B08CC81QNH?tag=meatlover-20',
    asin: 'B08CC81QNH',
    featured: true,
    best_for: 'Best Kamado Grill',
    expert_tested: true
  },
  {
    id: '21',
    name: 'Big Green Egg Large',
    brand: 'Big Green Egg',
    category: 'grill',
    subcategory: 'charcoal',
    description: 'The original kamado that started it all. The Large BGE handles everything from pizza to brisket with legendary efficiency.',
    image_url: '/images/big-green-egg-large.jpg',
    price: 1299.00,
    rating: 4.8,
    reviews_count: 2341,
    pros: ['Iconic brand', 'Exceptional quality', 'Huge accessory ecosystem', 'Excellent heat retention'],
    cons: ['Very expensive', 'Heavy and fragile', 'Stand sold separately'],
    specs: {
      'Cooking Area': '262 sq. in.',
      'Temperature Range': '200°F - 700°F+',
      'Material': 'Ceramic',
      'Weight': '162 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B003D6HPDG?tag=meatlover-20',
    asin: 'B003D6HPDG',
    expert_tested: true
  },
  {
    id: '22',
    name: 'Weber Master-Touch 22"',
    brand: 'Weber',
    category: 'grill',
    subcategory: 'charcoal',
    description: 'The Master-Touch takes the classic Weber kettle and adds a hinged grate, built-in thermometer, and one-touch cleaning. The gold standard for charcoal grilling.',
    image_url: '/images/weber-master-touch.jpg',
    price: 299.00,
    rating: 4.7,
    reviews_count: 3421,
    pros: ['Hinged grate', 'Built-in thermometer', 'Proven design', 'Easy cleanup'],
    cons: ['Premium over standard kettle', 'Still requires ash management', 'Limited smoking capacity'],
    specs: {
      'Cooking Area': '363 sq. in.',
      'Fuel Type': 'Charcoal',
      'Lid Thermometer': 'Built-in',
      'Weight': '35 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B0098HR0XK?tag=meatlover-20',
    asin: 'B0098HR0XK'
  },
  {
    id: '23',
    name: 'Char-Griller Akorn Kamado',
    brand: 'Char-Griller',
    category: 'grill',
    subcategory: 'charcoal',
    description: 'Steel kamado cooker that delivers ceramic performance at a fraction of the price. Triple-walled insulation holds temps steady for long cooks.',
    image_url: '/images/char-griller-akorn.jpg',
    price: 369.00,
    rating: 4.5,
    reviews_count: 4562,
    pros: ['Affordable kamado', 'Lightweight vs ceramic', 'Good insulation', 'Quick heat-up'],
    cons: ['Prone to rust', 'Less heat retention than ceramic', 'Limited accessories'],
    specs: {
      'Cooking Area': '314 sq. in.',
      'Temperature Range': '200°F - 700°F',
      'Material': 'Steel',
      'Weight': '97 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B00CHLT88C?tag=meatlover-20',
    asin: 'B00CHLT88C',
    best_for: 'Best Budget Kamado'
  },
  {
    id: '24',
    name: 'PK Grills Original PK300',
    brand: 'PK Grills',
    category: 'grill',
    subcategory: 'charcoal',
    description: 'Cast aluminum grill with a unique capsule shape. Maintains precise temps and will never rust. Made in the USA with a 10-year warranty.',
    image_url: '/images/pk-grills-300.jpg',
    price: 699.00,
    rating: 4.7,
    reviews_count: 834,
    pros: ['Never rusts', 'Excellent heat control', 'Made in USA', '10-year warranty'],
    cons: ['Unique look', 'Smaller cooking area', 'Limited accessories'],
    specs: {
      'Cooking Area': '300 sq. in.',
      'Material': 'Cast Aluminum',
      'Features': '4-point venting',
      'Weight': '55 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B08DCMPWZ3?tag=meatlover-20',
    asin: 'B08DCMPWZ3',
    expert_tested: true
  },

  // =====================
  // GRILLS - Gas (6 products)
  // =====================
  {
    id: '5',
    name: 'Weber Genesis E-335',
    brand: 'Weber',
    category: 'grill',
    subcategory: 'gas',
    description: 'The Weber Genesis line sets the standard for gas grilling. Three powerful burners, a sear station, and the Weber Connect technology make this a backyard powerhouse.',
    image_url: '/images/weber-genesis-e335.jpg',
    price: 1149.00,
    rating: 4.6,
    reviews_count: 1892,
    pros: ['Even heat distribution', 'Sear station burner', 'Built-in thermometer', 'Weber Connect'],
    cons: ['Pricey for gas grill', 'Assembly required', 'Large footprint'],
    specs: {
      'Cooking Area': '513 sq. in.',
      'BTU': '39,000',
      'Burners': '3 + Sear Station',
      'Weight': '155 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B09LXZK1KM?tag=meatlover-20',
    asin: 'B09LXZK1KM',
    best_for: 'Best Premium Gas Grill',
    expert_tested: true
  },
  {
    id: '6',
    name: 'Char-Broil Performance 4-Burner',
    brand: 'Char-Broil',
    category: 'grill',
    subcategory: 'gas',
    description: 'Budget-friendly 4-burner gas grill with side burner. Porcelain-coated grates and electronic ignition make this a great entry-level option.',
    image_url: '/images/charbroil-performance-4.jpg',
    price: 349.99,
    rating: 4.2,
    reviews_count: 5678,
    pros: ['Great value', 'Side burner included', 'Easy ignition', 'Decent cooking space'],
    cons: ['Build quality is average', 'Hot spots possible', 'May rust over time'],
    specs: {
      'Cooking Area': '425 sq. in.',
      'BTU': '36,000',
      'Burners': '4 + Side burner',
      'Weight': '98 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B0B6HYZJ7C?tag=meatlover-20',
    asin: 'B0B6HYZJ7C'
  },
  {
    id: '25',
    name: 'Weber Spirit II E-310',
    brand: 'Weber',
    category: 'grill',
    subcategory: 'gas',
    description: 'The Spirit II E-310 is the perfect entry point to Weber gas grilling. Compact footprint, 3 burners, and the GS4 grilling system.',
    image_url: '/images/weber-spirit-ii.jpg',
    price: 529.00,
    rating: 4.6,
    reviews_count: 4231,
    pros: ['Compact design', 'Weber quality', 'GS4 system', 'Easy cleanup'],
    cons: ['Smaller cooking area', 'No side burner', 'Basic features'],
    specs: {
      'Cooking Area': '424 sq. in.',
      'BTU': '30,000',
      'Burners': '3',
      'Weight': '114 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B07793V9NK?tag=meatlover-20',
    asin: 'B07793V9NK',
    best_for: 'Best Compact Gas Grill'
  },
  {
    id: '26',
    name: 'Napoleon Prestige 500',
    brand: 'Napoleon',
    category: 'grill',
    subcategory: 'gas',
    description: 'Canadian engineering meets BBQ excellence. The Prestige 500 features infrared rear and side burners, plus stainless steel construction throughout.',
    image_url: '/images/napoleon-prestige-500.jpg',
    price: 1799.00,
    rating: 4.7,
    reviews_count: 923,
    pros: ['Premium build quality', 'Infrared burners', 'Night Light knobs', 'Lifetime warranty'],
    cons: ['Expensive', 'Large footprint', 'Complex assembly'],
    specs: {
      'Cooking Area': '760 sq. in.',
      'BTU': '80,000',
      'Burners': '4 + IR Side + IR Rear',
      'Weight': '184 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B01N2P7HWS?tag=meatlover-20',
    asin: 'B01N2P7HWS',
    expert_tested: true
  },
  {
    id: '27',
    name: 'Nexgrill Evolution 5-Burner',
    brand: 'Nexgrill',
    category: 'grill',
    subcategory: 'gas',
    description: 'Home Depot exclusive with massive cooking space and infrared side burner. Incredible value for the features included.',
    image_url: '/images/nexgrill-evolution.jpg',
    price: 499.00,
    rating: 4.3,
    reviews_count: 2341,
    pros: ['Huge cooking space', 'Infrared side burner', 'LED-lit knobs', 'Great value'],
    cons: ['Can have hot spots', 'Average grease management', 'Home Depot exclusive'],
    specs: {
      'Cooking Area': '618 sq. in.',
      'BTU': '60,000',
      'Burners': '5 + Infrared Side',
      'Weight': '145 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B09JZ4GZJ7?tag=meatlover-20',
    asin: 'B09JZ4GZJ7'
  },
  {
    id: '28',
    name: 'Weber Q 1200',
    brand: 'Weber',
    category: 'grill',
    subcategory: 'gas',
    description: 'The ultimate portable gas grill. Compact design, push-button ignition, and enough cooking space for 6 burgers.',
    image_url: '/images/weber-q1200.jpg',
    price: 269.00,
    rating: 4.7,
    reviews_count: 6782,
    pros: ['Super portable', 'Quality construction', 'Easy ignition', 'Great for tailgating'],
    cons: ['Small cooking area', 'Uses propane canisters', 'No built-in thermometer'],
    specs: {
      'Cooking Area': '189 sq. in.',
      'BTU': '8,500',
      'Fuel': 'LP Gas',
      'Weight': '29 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B00FGEHG84?tag=meatlover-20',
    asin: 'B00FGEHG84',
    best_for: 'Best Portable Gas Grill'
  },

  // =====================
  // SMOKERS (8 products)
  // =====================
  {
    id: '7',
    name: 'Oklahoma Joe\'s Highland Offset',
    brand: 'Oklahoma Joe\'s',
    category: 'smoker',
    subcategory: 'offset',
    description: 'Classic offset smoker for the purist. The heavy-gauge steel and large cooking chamber make this perfect for competition-style BBQ.',
    image_url: '/images/oklahoma-joes-highland.jpg',
    price: 449.99,
    rating: 4.4,
    reviews_count: 3892,
    pros: ['Authentic smoke flavor', 'Large capacity', 'Heavy steel construction', 'Traditional BBQ experience'],
    cons: ['Steep learning curve', 'Requires fire management', 'Can be leaky at seams'],
    specs: {
      'Cooking Area': '900 sq. in. total',
      'Main Chamber': '619 sq. in.',
      'Firebox': 'Side-mounted',
      'Weight': '180 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B00KNTXJ3C?tag=meatlover-20',
    asin: 'B00KNTXJ3C',
    featured: true,
    best_for: 'Best Offset Smoker Under $500',
    expert_tested: true
  },
  {
    id: '8',
    name: 'Masterbuilt 30" Digital Electric Smoker',
    brand: 'Masterbuilt',
    category: 'smoker',
    subcategory: 'electric',
    description: 'Set it and forget it. Digital controls make smoking easy for beginners. Four chrome-coated racks give you plenty of space.',
    image_url: '/images/masterbuilt-30-electric.jpg',
    price: 299.99,
    rating: 4.3,
    reviews_count: 7823,
    pros: ['Easy to use', 'Consistent temperatures', 'Affordable', 'Built-in meat probe'],
    cons: ['Less smoke flavor than wood burners', 'Requires outlet', 'Limited smoke ring'],
    specs: {
      'Cooking Area': '711 sq. in.',
      'Temperature Range': '100°F - 275°F',
      'Power': '800W',
      'Weight': '48 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B075BKKG5C?tag=meatlover-20',
    asin: 'B075BKKG5C',
    best_for: 'Best Beginner Smoker'
  },
  {
    id: '9',
    name: 'Weber Smokey Mountain 22"',
    brand: 'Weber',
    category: 'smoker',
    subcategory: 'vertical',
    description: 'The WSM is a competition legend. Simple design, rock-solid temperature stability, and incredible results. The 22" model is perfect for serious home cooks.',
    image_url: '/images/weber-smokey-mountain-22.jpg',
    price: 549.00,
    rating: 4.8,
    reviews_count: 2341,
    pros: ['Excellent temperature control', 'Competition proven', 'Weber quality', 'Two cooking grates'],
    cons: ['No easy ash access', 'Learning curve', 'Limited smoke adjustment'],
    specs: {
      'Cooking Area': '726 sq. in.',
      'Fuel Type': 'Charcoal + Wood',
      'Diameter': '22.5 inches',
      'Weight': '68 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B001I8ZTJA?tag=meatlover-20',
    asin: 'B001I8ZTJA',
    featured: true,
    best_for: 'Best Vertical Smoker',
    expert_tested: true
  },
  {
    id: '29',
    name: 'Yoder Smokers YS640s',
    brand: 'Yoder',
    category: 'smoker',
    subcategory: 'pellet',
    description: 'Competition-grade pellet smoker built in Kansas. 10-gauge steel construction and ACS controller for precise temperature management.',
    image_url: '/images/yoder-ys640s.jpg',
    price: 2199.00,
    rating: 4.9,
    reviews_count: 456,
    pros: ['Built like a tank', 'Precise temp control', 'Made in USA', 'Competition quality'],
    cons: ['Very expensive', 'Heavy at 315 lbs', 'Long lead times'],
    specs: {
      'Cooking Area': '1070 sq. in.',
      'Material': '10-gauge steel',
      'Controller': 'ACS',
      'Weight': '315 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B07W5V7PDZ?tag=meatlover-20',
    asin: 'B07W5V7PDZ',
    best_for: 'Best Competition Smoker',
    expert_tested: true
  },
  {
    id: '30',
    name: 'Char-Broil The Big Easy TRU-Infrared',
    brand: 'Char-Broil',
    category: 'smoker',
    subcategory: 'infrared',
    description: 'Oil-less turkey fryer and smoker combo. TRU-Infrared technology cooks birds evenly without the fire hazard of oil frying.',
    image_url: '/images/char-broil-big-easy.jpg',
    price: 159.99,
    rating: 4.4,
    reviews_count: 5234,
    pros: ['Oil-less frying', 'Safer than oil', 'Dual-purpose', 'Affordable'],
    cons: ['Limited capacity', 'Not a traditional smoker', 'Propane only'],
    specs: {
      'Capacity': '25 lb turkey',
      'Fuel': 'Propane',
      'Features': 'TRU-Infrared',
      'Weight': '25 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B00CGWNNTM?tag=meatlover-20',
    asin: 'B00CGWNNTM'
  },
  {
    id: '31',
    name: 'Masterbuilt Gravity Series 1050',
    brand: 'Masterbuilt',
    category: 'smoker',
    subcategory: 'gravity-fed',
    description: 'Revolutionary gravity-fed charcoal smoker with digital controls and WiFi. Set temps from your phone while getting real charcoal flavor.',
    image_url: '/images/masterbuilt-gravity-1050.jpg',
    price: 899.00,
    rating: 4.5,
    reviews_count: 1823,
    pros: ['Real charcoal flavor', 'WiFi control', 'Easy temperature management', 'Large capacity'],
    cons: ['High charcoal use at high temps', 'Heavy', 'Complex cleanup'],
    specs: {
      'Cooking Area': '1050 sq. in.',
      'Temperature Range': '225°F - 700°F',
      'Hopper': 'Gravity-fed',
      'Weight': '178 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B08GHQR6K9?tag=meatlover-20',
    asin: 'B08GHQR6K9',
    expert_tested: true
  },
  {
    id: '32',
    name: 'Old Country BBQ Pits Pecos',
    brand: 'Old Country',
    category: 'smoker',
    subcategory: 'offset',
    description: 'Made in Texas with quarter-inch steel. No frills, just pure smoking performance for serious BBQ enthusiasts.',
    image_url: '/images/old-country-pecos.jpg',
    price: 699.00,
    rating: 4.6,
    reviews_count: 734,
    pros: ['Heavy gauge steel', 'Made in Texas', 'Great heat retention', 'Lifetime investment'],
    cons: ['Heavy at 250 lbs', 'Requires seasoning', 'Basic design'],
    specs: {
      'Cooking Area': '750 sq. in.',
      'Material': '1/4" steel',
      'Firebox': 'Offset',
      'Weight': '250 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B08GQJ4QD4?tag=meatlover-20',
    asin: 'B08GQJ4QD4'
  },
  {
    id: '33',
    name: 'Pit Barrel Cooker Original',
    brand: 'Pit Barrel',
    category: 'smoker',
    subcategory: 'drum',
    description: 'Hang-and-forget drum smoker that produces incredible results with minimal effort. Self-regulating airflow means consistent temps every time.',
    image_url: '/images/pit-barrel-cooker.jpg',
    price: 399.99,
    rating: 4.7,
    reviews_count: 2456,
    pros: ['Dead simple to use', 'Self-regulating', 'Great for beginners', 'Hanging system'],
    cons: ['One temperature zone', 'Limited capacity', 'Can\'t adjust mid-cook'],
    specs: {
      'Cooking Area': '572 sq. in.',
      'Method': 'Hanging hooks + grate',
      'Fuel': 'Charcoal',
      'Weight': '57 lbs'
    },
    affiliate_url: 'https://amazon.com/dp/B00J8B79PI?tag=meatlover-20',
    asin: 'B00J8B79PI',
    best_for: 'Best Beginner-Friendly Smoker'
  },

  // =====================
  // THERMOMETERS (6 products)
  // =====================
  {
    id: '10',
    name: 'ThermoWorks Thermapen ONE',
    brand: 'ThermoWorks',
    category: 'thermometer',
    subcategory: 'instant-read',
    description: 'The gold standard in instant-read thermometers. Reads in 1 second with ±0.5°F accuracy. Waterproof and auto-rotating display.',
    image_url: '/images/thermapen-one.jpg',
    price: 105.00,
    rating: 4.9,
    reviews_count: 4567,
    pros: ['1-second readings', 'Incredibly accurate', 'Waterproof', 'Long battery life'],
    cons: ['Premium price', 'Single point measurement', 'No wireless features'],
    specs: {
      'Speed': '1 second',
      'Accuracy': '±0.5°F',
      'Range': '-58°F to 572°F',
      'Battery': '2,000+ hours'
    },
    affiliate_url: 'https://amazon.com/dp/B0CZ8M8LP4?tag=meatlover-20',
    asin: 'B0CZ8M8LP4',
    featured: true,
    best_for: 'Best Instant-Read Thermometer',
    expert_tested: true
  },
  {
    id: '11',
    name: 'MEATER Plus Wireless Thermometer',
    brand: 'MEATER',
    category: 'thermometer',
    subcategory: 'wireless',
    description: 'True wireless meat thermometer with 165ft Bluetooth range. Monitors internal and ambient temperature. Smart alerts via app.',
    image_url: '/images/meater-plus.jpg',
    price: 99.00,
    rating: 4.5,
    reviews_count: 8923,
    pros: ['Completely wireless', 'Dual sensors', 'Great app', 'Guided cook feature'],
    cons: ['Limited range without block', 'Probe charging dock required', 'Max 527°F ambient'],
    specs: {
      'Range': '165 ft Bluetooth',
      'Internal Sensor': 'Up to 212°F',
      'Ambient Sensor': 'Up to 527°F',
      'Battery': 'Rechargeable (24hr life)'
    },
    affiliate_url: 'https://amazon.com/dp/B07H8WTFHW?tag=meatlover-20',
    asin: 'B07H8WTFHW',
    expert_tested: true
  },
  {
    id: '34',
    name: 'ThermoWorks Signals 4-Channel',
    brand: 'ThermoWorks',
    category: 'thermometer',
    subcategory: 'wireless',
    description: 'Professional-grade 4-channel thermometer with WiFi and Bluetooth. Monitor multiple probes from anywhere via the app.',
    image_url: '/images/thermoworks-signals.jpg',
    price: 229.00,
    rating: 4.7,
    reviews_count: 1234,
    pros: ['4 probe channels', 'WiFi + Bluetooth', 'Splash-proof', 'Rechargeable'],
    cons: ['Expensive', 'Probes sold separately', 'Learning curve'],
    specs: {
      'Channels': '4',
      'Connectivity': 'WiFi + Bluetooth',
      'Range': 'Unlimited (WiFi)',
      'Battery': '16+ hours'
    },
    affiliate_url: 'https://amazon.com/dp/B07DTD9P5S?tag=meatlover-20',
    asin: 'B07DTD9P5S',
    best_for: 'Best Multi-Probe Thermometer'
  },
  {
    id: '35',
    name: 'Inkbird IBBQ-4T WiFi Thermometer',
    brand: 'Inkbird',
    category: 'thermometer',
    subcategory: 'wireless',
    description: 'Budget-friendly WiFi thermometer with 4 probe capacity. Great app integration and rechargeable battery.',
    image_url: '/images/inkbird-ibbq-4t.jpg',
    price: 65.99,
    rating: 4.4,
    reviews_count: 3456,
    pros: ['Great value', '4 probe capacity', 'WiFi connectivity', 'Rechargeable'],
    cons: ['App can be buggy', 'Probe quality varies', 'Limited range'],
    specs: {
      'Channels': '4',
      'Connectivity': 'WiFi',
      'Range': 'Unlimited (WiFi)',
      'Battery': '40+ hours'
    },
    affiliate_url: 'https://amazon.com/dp/B08GCYF94M?tag=meatlover-20',
    asin: 'B08GCYF94M'
  },
  {
    id: '36',
    name: 'ThermoWorks ThermoPop',
    brand: 'ThermoWorks',
    category: 'thermometer',
    subcategory: 'instant-read',
    description: 'Budget option from ThermoWorks. 3-4 second readings with rotating display. Splash-proof and backlit.',
    image_url: '/images/thermopop.jpg',
    price: 35.00,
    rating: 4.7,
    reviews_count: 6789,
    pros: ['ThermoWorks quality', 'Affordable', 'Fast readings', 'Rotating display'],
    cons: ['Slower than Thermapen', 'Less accurate', 'No auto-shutoff'],
    specs: {
      'Speed': '3-4 seconds',
      'Accuracy': '±1.0°F',
      'Range': '-58°F to 572°F',
      'Battery': '5,000+ hours'
    },
    affiliate_url: 'https://amazon.com/dp/B01IHHLB3W?tag=meatlover-20',
    asin: 'B01IHHLB3W',
    best_for: 'Best Budget Thermometer'
  },
  {
    id: '37',
    name: 'FireBoard 2 Drive',
    brand: 'FireBoard',
    category: 'thermometer',
    subcategory: 'wireless',
    description: 'Smart thermometer with blower control for automated pit management. WiFi connectivity and 6 probe channels.',
    image_url: '/images/fireboard-2-drive.jpg',
    price: 249.00,
    rating: 4.6,
    reviews_count: 876,
    pros: ['6 probe channels', 'Blower integration', 'Excellent app', 'Cloud logging'],
    cons: ['Premium price', 'Blower sold separately', 'Complex setup'],
    specs: {
      'Channels': '6',
      'Connectivity': 'WiFi + Bluetooth',
      'Features': 'Blower control',
      'Battery': '24+ hours'
    },
    affiliate_url: 'https://amazon.com/dp/B08Q3VBTQB?tag=meatlover-20',
    asin: 'B08Q3VBTQB',
    expert_tested: true
  },

  // =====================
  // ACCESSORIES (10 products)
  // =====================
  {
    id: '12',
    name: 'Weber Spirit Series Grill Cover',
    brand: 'Weber',
    category: 'accessory',
    subcategory: 'cover',
    description: 'Premium weather-resistant cover for Weber Spirit series grills. UV resistant and breathable fabric prevents moisture buildup.',
    image_url: '/images/weber-spirit-cover.jpg',
    price: 69.99,
    rating: 4.6,
    reviews_count: 3456,
    pros: ['Perfect fit', 'Weather resistant', 'UV protection', 'Easy velcro straps'],
    cons: ['Specific to Spirit series', 'Premium price for cover'],
    specs: {
      'Material': 'Polyester',
      'Fits': 'Spirit 300 series',
      'Features': 'UV resistant, breathable'
    },
    affiliate_url: 'https://amazon.com/dp/B00LX2D9VA?tag=meatlover-20',
    asin: 'B00LX2D9VA'
  },
  {
    id: '13',
    name: 'BBQ Dragon Fire Starter',
    brand: 'BBQ Dragon',
    category: 'accessory',
    subcategory: 'tools',
    description: 'Clip-on fan that ignites charcoal in minutes without chemicals. Works on any chimney starter or grill.',
    image_url: '/images/bbq-dragon-starter.jpg',
    price: 44.95,
    rating: 4.7,
    reviews_count: 2341,
    pros: ['Lights charcoal fast', 'No chemicals needed', 'Works with any setup', 'Battery powered'],
    cons: ['Another gadget to store', 'Batteries not included'],
    specs: {
      'Power': '4 D batteries',
      'Runtime': '30+ hours',
      'Speed': 'Variable'
    },
    affiliate_url: 'https://amazon.com/dp/B01E3X4FK0?tag=meatlover-20',
    asin: 'B01E3X4FK0',
    expert_tested: true
  },
  {
    id: '14',
    name: 'Meat Church Holy Cow BBQ Rub',
    brand: 'Meat Church',
    category: 'accessory',
    subcategory: 'rubs',
    description: 'Competition-proven beef rub with bold black pepper, garlic, and a hint of sweetness. Perfect for brisket and steaks.',
    image_url: '/images/meat-church-holy-cow.jpg',
    price: 12.99,
    rating: 4.8,
    reviews_count: 8234,
    pros: ['Amazing flavor', 'Competition proven', 'Great on beef', 'No MSG'],
    cons: ['Small container', 'Can be hard to find locally'],
    specs: {
      'Size': '12 oz',
      'Best For': 'Beef, Brisket, Burgers',
      'Heat Level': 'Mild'
    },
    affiliate_url: 'https://amazon.com/dp/B01MY3FM6Y?tag=meatlover-20',
    asin: 'B01MY3FM6Y'
  },
  {
    id: '38',
    name: 'GrillGrate Set of 3',
    brand: 'GrillGrate',
    category: 'accessory',
    subcategory: 'grates',
    description: 'Aluminum grill grates that amplify heat and prevent flare-ups. The raised rail design creates perfect sear marks.',
    image_url: '/images/grillgrate-set.jpg',
    price: 129.99,
    rating: 4.7,
    reviews_count: 3567,
    pros: ['Better heat distribution', 'No flare-ups', 'Perfect sear marks', 'Fits any grill'],
    cons: ['Expensive', 'Takes time to heat', 'Heavy'],
    specs: {
      'Material': 'Anodized Aluminum',
      'Pieces': '3 panels',
      'Features': 'Raised rails, interlocking'
    },
    affiliate_url: 'https://amazon.com/dp/B00164TLPE?tag=meatlover-20',
    asin: 'B00164TLPE',
    expert_tested: true
  },
  {
    id: '39',
    name: 'Weber Rapidfire Chimney Starter',
    brand: 'Weber',
    category: 'accessory',
    subcategory: 'tools',
    description: 'The essential tool for charcoal grilling. Lights charcoal in 15 minutes without lighter fluid.',
    image_url: '/images/weber-chimney-starter.jpg',
    price: 21.99,
    rating: 4.8,
    reviews_count: 12456,
    pros: ['Fast lighting', 'No lighter fluid needed', 'Durable construction', 'Large capacity'],
    cons: ['Gets very hot', 'Requires fire starters', 'Handle can get warm'],
    specs: {
      'Capacity': '100 briquettes',
      'Material': 'Plated steel',
      'Handle': 'Thermoplastic'
    },
    affiliate_url: 'https://amazon.com/dp/B000WEOQV8?tag=meatlover-20',
    asin: 'B000WEOQV8',
    best_for: 'Essential Charcoal Tool'
  },
  {
    id: '40',
    name: 'Killer Hogs The BBQ Rub',
    brand: 'Killer Hogs',
    category: 'accessory',
    subcategory: 'rubs',
    description: 'Malcom Reed\'s award-winning all-purpose rub. Sweet, savory, and works on everything from ribs to chicken.',
    image_url: '/images/killer-hogs-rub.jpg',
    price: 14.99,
    rating: 4.8,
    reviews_count: 5678,
    pros: ['All-purpose flavor', 'Competition winner', 'Great bark', 'Balanced sweetness'],
    cons: ['Premium price', 'Small container'],
    specs: {
      'Size': '12 oz',
      'Best For': 'Ribs, Pork, Chicken',
      'Heat Level': 'Mild'
    },
    affiliate_url: 'https://amazon.com/dp/B00O8YLS9A?tag=meatlover-20',
    asin: 'B00O8YLS9A'
  },
  {
    id: '41',
    name: 'Slow \'N Sear Deluxe',
    brand: 'SnS Grills',
    category: 'accessory',
    subcategory: 'tools',
    description: 'Turns your Weber kettle into a 2-zone smoker and searing machine. Water reservoir keeps temps stable for hours.',
    image_url: '/images/slow-n-sear.jpg',
    price: 129.99,
    rating: 4.8,
    reviews_count: 2345,
    pros: ['Transforms kettle grills', 'Rock-solid temps', 'Creates sear zone', 'Built to last'],
    cons: ['Only for 22" kettles', 'Takes up grate space', 'Expensive'],
    specs: {
      'Fits': '22" Weber kettle',
      'Material': 'Stainless steel',
      'Features': 'Water reservoir, coal basket'
    },
    affiliate_url: 'https://amazon.com/dp/B06XHJ42KM?tag=meatlover-20',
    asin: 'B06XHJ42KM',
    expert_tested: true
  },
  {
    id: '42',
    name: 'Fogo Premium Lump Charcoal',
    brand: 'Fogo',
    category: 'accessory',
    subcategory: 'fuel',
    description: 'Premium hardwood lump charcoal from Central American oak. Burns hotter and longer than briquettes with less ash.',
    image_url: '/images/fogo-charcoal.jpg',
    price: 49.99,
    rating: 4.7,
    reviews_count: 4567,
    pros: ['Burns hot and clean', 'Restaurant quality', 'Low ash', 'Great flavor'],
    cons: ['Expensive', 'Inconsistent piece sizes', 'Not available everywhere'],
    specs: {
      'Size': '17.6 lbs',
      'Wood': 'Central American Oak',
      'Type': 'Premium Lump'
    },
    affiliate_url: 'https://amazon.com/dp/B01LXRIHXK?tag=meatlover-20',
    asin: 'B01LXRIHXK',
    best_for: 'Best Premium Lump Charcoal'
  },
  {
    id: '43',
    name: 'Pink Butcher Paper Roll',
    brand: 'Bryco Goods',
    category: 'accessory',
    subcategory: 'supplies',
    description: 'FDA-approved pink butcher paper for wrapping brisket. Breathable paper allows smoke through while retaining moisture.',
    image_url: '/images/pink-butcher-paper.jpg',
    price: 24.99,
    rating: 4.6,
    reviews_count: 6789,
    pros: ['Breathable wrap', 'Maintains bark', 'Large roll', 'Food safe'],
    cons: ['Learning curve to wrap', 'Takes up storage', 'Not reusable'],
    specs: {
      'Size': '18" x 175 ft',
      'Weight': 'Unwaxed, uncoated',
      'Use': 'Wrapping brisket, ribs'
    },
    affiliate_url: 'https://amazon.com/dp/B074Q93V95?tag=meatlover-20',
    asin: 'B074Q93V95'
  },
  {
    id: '44',
    name: 'Bear Paws Meat Shredders',
    brand: 'Bear Paws',
    category: 'accessory',
    subcategory: 'tools',
    description: 'The original meat shredding claws. Makes quick work of pulled pork, chicken, and more. Heat-resistant and dishwasher safe.',
    image_url: '/images/bear-paws.jpg',
    price: 14.99,
    rating: 4.7,
    reviews_count: 23456,
    pros: ['Fast shredding', 'Comfortable grip', 'Heat resistant', 'Dishwasher safe'],
    cons: ['Single purpose', 'Claws dull over time'],
    specs: {
      'Material': 'BPA-free nylon',
      'Features': 'Heat resistant to 475°F',
      'Included': '2 claws'
    },
    affiliate_url: 'https://amazon.com/dp/B003IWI66W?tag=meatlover-20',
    asin: 'B003IWI66W'
  }
]

export const subscriptions: Subscription[] = [
  {
    id: '1',
    name: 'ButcherBox',
    description: 'Premium meat delivered monthly. 100% grass-fed beef, free-range organic chicken, heritage breed pork, and wild-caught seafood. All humanely raised with no antibiotics or hormones.',
    image_url: '/images/butcherbox.jpg',
    price_range: '$146 - $306/mo',
    rating: 4.6,
    pros: ['High quality meat', 'Flexible box options', 'Free shipping', 'Humanely raised animals'],
    cons: ['Can\'t choose specific cuts in curated boxes', 'Premium pricing', 'Frozen delivery'],
    affiliate_url: 'https://www.butcherbox.com/?ref=meatlover',
    commission: '$20 per signup'
  },
  {
    id: '2',
    name: 'Crowd Cow',
    description: 'Craft meat marketplace connecting you directly with independent farms. Choose from wagyu, grass-fed, pasture-raised, and specialty cuts you won\'t find at the grocery store.',
    image_url: '/images/crowd-cow.jpg',
    price_range: '$99 - $249/mo',
    rating: 4.7,
    pros: ['Choose specific cuts', 'Farm transparency', 'Unique offerings like Japanese A5 wagyu', 'Subscribe or order on-demand'],
    cons: ['Shipping costs on small orders', 'Some items sell out fast', 'Variable quality between farms'],
    affiliate_url: 'https://www.crowdcow.com/?ref=meatlover',
    commission: '$25 per signup'
  },
  {
    id: '3',
    name: 'Snake River Farms',
    description: 'American wagyu specialists. Their beef is rated among the best in the world. Perfect for serious BBQ enthusiasts who want restaurant-quality meat at home.',
    image_url: '/images/snake-river-farms.jpg',
    price_range: '$150 - $400/mo',
    rating: 4.8,
    pros: ['Exceptional quality', 'American wagyu', 'Amazing marbling', 'Gold grade options'],
    cons: ['Premium pricing', 'Not a true subscription', 'Limited variety beyond beef'],
    affiliate_url: 'https://www.snakeriverfarms.com/?ref=meatlover',
    commission: '8% commission'
  },
  {
    id: '4',
    name: 'Porter Road',
    description: 'Nashville-based whole-animal butcher shop. Pasture-raised, antibiotic-free meats from small farms in Kentucky and Tennessee. No factory farming.',
    image_url: '/images/porter-road.jpg',
    price_range: '$100 - $200/mo',
    rating: 4.5,
    pros: ['Whole-animal butchery', 'Small farm sourcing', 'Dry-aged options', 'No antibiotics'],
    cons: ['Limited delivery areas', 'Smaller cuts selection', 'Can sell out quickly'],
    affiliate_url: 'https://www.porterroad.com/?ref=meatlover',
    commission: '$15 per signup'
  },
  {
    id: '5',
    name: 'Omaha Steaks',
    description: 'The original mail-order steak company since 1917. Famous for their filet mignon and combo packages. Great for gifts and special occasions.',
    image_url: '/images/omaha-steaks.jpg',
    price_range: '$89 - $399/mo',
    rating: 4.3,
    pros: ['Established reputation', 'Great gift options', 'Frequent sales', 'Wide variety'],
    cons: ['Not grass-fed', 'Heavy on promotions', 'Quality varies by package'],
    affiliate_url: 'https://www.omahasteaks.com/?ref=meatlover',
    commission: '10% commission'
  }
]

export const guides: Guide[] = [
  {
    slug: 'best-grills-2025',
    title: 'Best Grills of 2025: Our Top Picks',
    description: 'Our comprehensive guide to the top grills of 2025. We tested over 20 models to find the best for every budget and cooking style.',
    category: 'Buying Guide',
    readTime: '15 min read',
    date: 'January 2025',
    featured: true,
    relatedProducts: ['1', '3', '4', '5']
  },
  {
    slug: 'beginner-bbq-tips',
    title: 'BBQ Tips for Beginners: A Complete Guide',
    description: 'New to grilling? Learn the fundamentals of BBQ, from fire management to internal temperatures, in this beginner-friendly guide.',
    category: 'Tutorial',
    readTime: '10 min read',
    date: 'January 2025',
    featured: true,
    relatedProducts: ['10', '39']
  },
  {
    slug: 'weber-vs-traeger',
    title: 'Weber vs Traeger: Which Brand is Right for You?',
    description: 'A head-to-head comparison of two BBQ giants. We compare build quality, features, price, and performance to help you decide.',
    category: 'Comparison',
    readTime: '12 min read',
    date: 'January 2025',
    featured: true,
    relatedProducts: ['1', '2', '3', '5', '25']
  },
  {
    slug: 'best-smokers-under-500',
    title: 'Best Smokers Under $500 in 2025',
    description: 'You don\'t need to spend a fortune to smoke great BBQ. These are the best smokers for beginners and budget-conscious pitmasters.',
    category: 'Buying Guide',
    readTime: '10 min read',
    date: 'January 2025',
    featured: true,
    relatedProducts: ['7', '8', '33', '16']
  },
  {
    slug: 'pellet-vs-charcoal',
    title: 'Pellet vs. Charcoal Grills: The Ultimate Showdown',
    description: 'The great debate settled. We break down the pros and cons of pellet and charcoal grills to help you choose the right one.',
    category: 'Comparison',
    readTime: '8 min read',
    date: 'December 2024',
    featured: false,
    relatedProducts: ['1', '16', '3', '4']
  },
  {
    slug: 'smoking-your-first-brisket',
    title: 'Smoking Your First Brisket: Step-by-Step Guide',
    description: 'A step-by-step guide to smoking a perfect brisket. Learn the techniques pros use to get that perfect smoke ring.',
    category: 'Recipe',
    readTime: '20 min read',
    date: 'December 2024',
    featured: false,
    relatedProducts: ['7', '9', '10', '43']
  },
  {
    slug: 'meat-subscription-comparison',
    title: 'Meat Subscription Box Comparison 2025',
    description: 'We tested the top meat delivery services so you don\'t have to. See how ButcherBox, Crowd Cow, and others stack up.',
    category: 'Comparison',
    readTime: '12 min read',
    date: 'November 2024',
    featured: false
  },
  {
    slug: 'thermometer-guide',
    title: 'Complete BBQ Thermometer Guide',
    description: 'From instant-read to wireless probes, learn which thermometer is right for your cooking style and budget.',
    category: 'Buying Guide',
    readTime: '7 min read',
    date: 'November 2024',
    featured: false,
    relatedProducts: ['10', '11', '34', '35', '36', '37']
  },
  {
    slug: 'how-to-clean-your-grill',
    title: 'How to Clean Your Grill Like a Pro',
    description: 'Keep your grill in top shape with our deep-cleaning guide. Learn the tools and techniques that extend your grill\'s life.',
    category: 'Tutorial',
    readTime: '8 min read',
    date: 'October 2024',
    featured: false
  },
  {
    slug: 'kamado-buying-guide',
    title: 'Kamado Grill Buying Guide: BGE vs Kamado Joe',
    description: 'Ceramic kamado cookers are versatile beasts. We compare the Big Green Egg, Kamado Joe, and budget alternatives.',
    category: 'Comparison',
    readTime: '14 min read',
    date: 'October 2024',
    featured: false,
    relatedProducts: ['4', '21', '23']
  }
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getProductsBySubcategory(category: string, subcategory: string): Product[] {
  return products.filter(p => p.category === category && p.subcategory === subcategory)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getBestOfProducts(): { category: string; products: Product[] }[] {
  const categories = [
    { name: 'Best Grills', filter: (p: Product) => p.category === 'grill' && p.best_for },
    { name: 'Best Smokers', filter: (p: Product) => p.category === 'smoker' && p.best_for },
    { name: 'Best Thermometers', filter: (p: Product) => p.category === 'thermometer' && p.best_for },
  ]

  return categories.map(cat => ({
    category: cat.name,
    products: products.filter(cat.filter).slice(0, 3)
  }))
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.brand.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.subcategory.toLowerCase().includes(lowerQuery)
  )
}

export function getRelatedProducts(productId: string, limit: number = 3): Product[] {
  const product = getProductById(productId)
  if (!product) return []
  
  return products
    .filter(p => p.id !== productId && (p.category === product.category || p.subcategory === product.subcategory))
    .slice(0, limit)
}
