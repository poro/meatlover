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
  pros: string[]
  cons: string[]
  specs: Record<string, string>
  affiliate_url: string
  featured?: boolean
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

export const products: Product[] = [
  // GRILLS - Pellet
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
    pros: ['WiFi connectivity', 'Large cooking area', 'Consistent temperature', 'Great smoke flavor'],
    cons: ['Premium price', 'Requires electricity', 'Pellet consumption can be high'],
    specs: {
      'Cooking Area': '780 sq. in.',
      'Temperature Range': '165°F - 500°F',
      'Hopper Capacity': '18 lbs',
      'Weight': '165 lbs'
    },
    affiliate_url: 'https://amzn.to/traeger-pro-780',
    featured: true
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
    pros: ['High sear temperatures', 'Weber Connect app', 'Durable construction', 'Easy ash cleanup'],
    cons: ['Expensive', 'Heavy', 'Learning curve for pellet newbies'],
    specs: {
      'Cooking Area': '1008 sq. in.',
      'Temperature Range': '200°F - 600°F',
      'Hopper Capacity': '22 lbs',
      'Weight': '178 lbs'
    },
    affiliate_url: 'https://amzn.to/weber-smokefire',
    featured: true
  },
  // GRILLS - Charcoal
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
    pros: ['Legendary reliability', 'Affordable price', 'Great for beginners', 'Versatile cooking'],
    cons: ['Requires charcoal management', 'No built-in thermometer', 'Limited space'],
    specs: {
      'Cooking Area': '363 sq. in.',
      'Fuel Type': 'Charcoal',
      'Lid Material': 'Porcelain-enameled steel',
      'Weight': '32 lbs'
    },
    affiliate_url: 'https://amzn.to/weber-kettle-22',
    featured: true
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
    pros: ['Exceptional heat retention', 'Versatile cooking styles', 'Premium construction', 'Great smoke flavor'],
    cons: ['Very heavy', 'Expensive', 'Requires lump charcoal'],
    specs: {
      'Cooking Area': '256 sq. in. (expandable)',
      'Temperature Range': '225°F - 750°F',
      'Material': 'Ceramic',
      'Weight': '188 lbs'
    },
    affiliate_url: 'https://amzn.to/kamado-joe-classic',
    featured: true
  },
  // GRILLS - Gas
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
    pros: ['Even heat distribution', 'Sear station burner', 'Built-in thermometer', 'Weber Connect'],
    cons: ['Pricey for gas grill', 'Assembly required', 'Large footprint'],
    specs: {
      'Cooking Area': '513 sq. in.',
      'BTU': '39,000',
      'Burners': '3 + Sear Station',
      'Weight': '155 lbs'
    },
    affiliate_url: 'https://amzn.to/weber-genesis-e335'
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
    pros: ['Great value', 'Side burner included', 'Easy ignition', 'Decent cooking space'],
    cons: ['Build quality is average', 'Hot spots possible', 'May rust over time'],
    specs: {
      'Cooking Area': '425 sq. in.',
      'BTU': '36,000',
      'Burners': '4 + Side burner',
      'Weight': '98 lbs'
    },
    affiliate_url: 'https://amzn.to/charbroil-performance-4'
  },
  // SMOKERS
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
    pros: ['Authentic smoke flavor', 'Large capacity', 'Heavy steel construction', 'Traditional BBQ experience'],
    cons: ['Steep learning curve', 'Requires fire management', 'Can be leaky at seams'],
    specs: {
      'Cooking Area': '900 sq. in. total',
      'Main Chamber': '619 sq. in.',
      'Firebox': 'Side-mounted',
      'Weight': '180 lbs'
    },
    affiliate_url: 'https://amzn.to/oklahoma-joes-highland',
    featured: true
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
    pros: ['Easy to use', 'Consistent temperatures', 'Affordable', 'Built-in meat probe'],
    cons: ['Less smoke flavor than wood burners', 'Requires outlet', 'Limited smoke ring'],
    specs: {
      'Cooking Area': '711 sq. in.',
      'Temperature Range': '100°F - 275°F',
      'Power': '800W',
      'Weight': '48 lbs'
    },
    affiliate_url: 'https://amzn.to/masterbuilt-30-electric'
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
    pros: ['Excellent temperature control', 'Competition proven', 'Weber quality', 'Two cooking grates'],
    cons: ['No easy ash access', 'Learning curve', 'Limited smoke adjustment'],
    specs: {
      'Cooking Area': '726 sq. in.',
      'Fuel Type': 'Charcoal + Wood',
      'Diameter': '22.5 inches',
      'Weight': '68 lbs'
    },
    affiliate_url: 'https://amzn.to/weber-smokey-mountain-22'
  },
  // ACCESSORIES - Thermometers
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
    pros: ['1-second readings', 'Incredibly accurate', 'Waterproof', 'Long battery life'],
    cons: ['Premium price', 'Single point measurement', 'No wireless features'],
    specs: {
      'Speed': '1 second',
      'Accuracy': '±0.5°F',
      'Range': '-58°F to 572°F',
      'Battery': '2,000+ hours'
    },
    affiliate_url: 'https://amzn.to/thermapen-one',
    featured: true
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
    pros: ['Completely wireless', 'Dual sensors', 'Great app', 'Guided cook feature'],
    cons: ['Limited range without block', 'Probe charging dock required', 'Max 527°F ambient'],
    specs: {
      'Range': '165 ft Bluetooth',
      'Internal Sensor': 'Up to 212°F',
      'Ambient Sensor': 'Up to 527°F',
      'Battery': 'Rechargeable (24hr life)'
    },
    affiliate_url: 'https://amzn.to/meater-plus'
  },
  // ACCESSORIES - Other
  {
    id: '12',
    name: 'Grill Cover for Weber Spirit',
    brand: 'Weber',
    category: 'accessory',
    subcategory: 'cover',
    description: 'Premium weather-resistant cover for Weber Spirit series grills. UV resistant and breathable fabric prevents moisture buildup.',
    image_url: '/images/weber-spirit-cover.jpg',
    price: 69.99,
    rating: 4.6,
    pros: ['Perfect fit', 'Weather resistant', 'UV protection', 'Easy velcro straps'],
    cons: ['Specific to Spirit series', 'Premium price for cover'],
    specs: {
      'Material': 'Polyester',
      'Fits': 'Spirit 300 series',
      'Features': 'UV resistant, breathable'
    },
    affiliate_url: 'https://amzn.to/weber-spirit-cover'
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
    pros: ['Lights charcoal fast', 'No chemicals needed', 'Works with any setup', 'Battery powered'],
    cons: ['Another gadget to store', 'Batteries not included'],
    specs: {
      'Power': '4 D batteries',
      'Runtime': '30+ hours',
      'Speed': 'Variable'
    },
    affiliate_url: 'https://amzn.to/bbq-dragon-starter'
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
    pros: ['Amazing flavor', 'Competition proven', 'Great on beef', 'No MSG'],
    cons: ['Small container', 'Can be hard to find locally'],
    specs: {
      'Size': '12 oz',
      'Best For': 'Beef, Brisket, Burgers',
      'Heat Level': 'Mild'
    },
    affiliate_url: 'https://amzn.to/meat-church-holy-cow'
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
