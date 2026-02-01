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

// REAL PRODUCT DATA - Verified February 2026
// All prices, ASINs, and specs sourced from manufacturer sites and Amazon

export const products: Product[] = [
  // =====================
  // GRILLS - Pellet (8 products)
  // =====================
  {
    id: '1',
    name: 'Traeger Pro 575',
    brand: 'Traeger',
    category: 'grill',
    subcategory: 'pellet',
    description: 'The Traeger Pro 575 delivers unmatched wood-fired flavor with 575 sq. inches of cooking space. Features WiFIRE technology for monitoring and control from your phone. D2 Direct Drive for faster heat-up and precise temps.',
    image_url: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
    price: 799.99,
    rating: 4.6,
    reviews_count: 2847,
    pros: ['WiFi connectivity with WiFIRE', 'D2 Direct Drive for faster ignition', 'Consistent temperature control', 'Great smoke flavor'],
    cons: ['Pellet consumption can be high', 'Requires electricity', 'Grease management needs attention'],
    specs: {
      'Cooking Area': '575 sq. in.',
      'Temperature Range': '165°F - 500°F',
      'Hopper Capacity': '18 lbs',
      'Weight': '124 lbs'
    },
    affiliate_url: 'https://www.amazon.com/s?k=traeger+pro+575&tag=meatlover-20',
    asin: 'B0BZVL2TGD',
    featured: true,
    best_for: 'Best Overall Pellet Grill',
    expert_tested: true
  },
  {
    id: '2',
    name: 'Traeger Ironwood 650',
    brand: 'Traeger',
    category: 'grill',
    subcategory: 'pellet',
    description: 'The Ironwood 650 features Traeger\'s D2 drivetrain and Super Smoke mode for maximum flavor. Double-wall insulation maintains consistent temps in any weather. Downdraft exhaust for cleaner smoke flavor.',
    image_url: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=600&q=80',
    price: 1499.99,
    rating: 4.7,
    reviews_count: 1248,
    pros: ['Super Smoke mode', 'D2 Direct Drive', 'Double-wall insulation', 'Downdraft exhaust system'],
    cons: ['Premium price point', 'Heavy at 150 lbs', 'Pellet hopper access can be awkward'],
    specs: {
      'Cooking Area': '650 sq. in.',
      'Temperature Range': '165°F - 500°F',
      'Hopper Capacity': '20 lbs',
      'Weight': '150 lbs'
    },
    affiliate_url: 'https://www.amazon.com/s?k=traeger+ironwood+650&tag=meatlover-20',
    asin: 'B0BZVKW7QG',
    featured: true,
    best_for: 'Best Premium Pellet Grill',
    expert_tested: true
  },
  {
    id: '15',
    name: 'Pit Boss Austin XL',
    brand: 'Pit Boss',
    category: 'grill',
    subcategory: 'pellet',
    description: 'The Austin XL delivers competition-level performance at a fraction of the price. 1000 sq in of cooking space handles the biggest cookouts. Flame broiler plate for direct flame grilling.',
    image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    price: 549.99,
    rating: 4.4,
    reviews_count: 4821,
    pros: ['Incredible value', 'Huge cooking area', 'Flame broiler for searing', '5-year warranty'],
    cons: ['Temperature swings on cold days', 'Basic controller', 'Paint can chip'],
    specs: {
      'Cooking Area': '1000 sq. in.',
      'Temperature Range': '180°F - 500°F',
      'Hopper Capacity': '31 lbs',
      'Weight': '151 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B08CKB7JRM?tag=meatlover-20',
    asin: 'B08CKB7JRM',
    best_for: 'Best Budget Pellet Grill'
  },
  {
    id: '16',
    name: 'Camp Chef Woodwind WiFi 24',
    brand: 'Camp Chef',
    category: 'grill',
    subcategory: 'pellet',
    description: 'The Woodwind WiFi 24 features WiFi connectivity, PID controller for precise temps, and Ash Kickin cleanout system. Sidekick compatible for added versatility.',
    image_url: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
    price: 899.99,
    rating: 4.6,
    reviews_count: 1256,
    pros: ['Excellent temp control (±5°F)', 'Sidekick compatible', 'Easy ash cleanup', 'Great smoke flavor'],
    cons: ['Sidekick sold separately', 'WiFi can be finicky', 'Legs feel flimsy'],
    specs: {
      'Cooking Area': '811 sq. in.',
      'Temperature Range': '160°F - 500°F',
      'Hopper Capacity': '22 lbs',
      'Weight': '150 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B09FPNFYQ2?tag=meatlover-20',
    asin: 'B09FPNFYQ2',
    expert_tested: true
  },
  {
    id: '17',
    name: 'Z Grills 700E',
    brand: 'Z Grills',
    category: 'grill',
    subcategory: 'pellet',
    description: 'Z Grills 700E brings serious value with PID controller and 694 sq in cooking space. Upgraded 2024 model with better insulation and improved controller.',
    image_url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
    price: 469.00,
    rating: 4.4,
    reviews_count: 2856,
    pros: ['Best value per square inch', 'Solid PID controller', 'Good construction', 'Easy assembly'],
    cons: ['Customer service can be slow', 'Basic app features', 'Hopper lid doesn\'t seal well'],
    specs: {
      'Cooking Area': '694 sq. in.',
      'Temperature Range': '180°F - 450°F',
      'Hopper Capacity': '20 lbs',
      'Weight': '98 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B09FSJWVCQ?tag=meatlover-20',
    asin: 'B09FSJWVCQ'
  },
  {
    id: '18',
    name: 'RecTeq RT-700 Bull',
    brand: 'RecTeq',
    category: 'grill',
    subcategory: 'pellet',
    description: 'RecTeq\'s Bull series is built like a tank with full stainless steel construction. Smart PID controller holds temps within 5 degrees. 40 lb hopper for long cooks.',
    image_url: 'https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?w=600&q=80',
    price: 1599.00,
    rating: 4.8,
    reviews_count: 2134,
    pros: ['304 stainless steel build', 'Excellent temp control', 'Outstanding customer service', '6-year warranty'],
    cons: ['Premium price', 'No flame broiler', 'Heavy at 200 lbs'],
    specs: {
      'Cooking Area': '702 sq. in.',
      'Temperature Range': '180°F - 500°F',
      'Hopper Capacity': '40 lbs',
      'Weight': '200 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B085TG6MRC?tag=meatlover-20',
    asin: 'B085TG6MRC',
    expert_tested: true,
    best_for: 'Best Build Quality'
  },
  {
    id: '19',
    name: 'Grilla Grills Silverbac Alpha Connect',
    brand: 'Grilla',
    category: 'grill',
    subcategory: 'pellet',
    description: 'The Silverbac Alpha Connect features WiFi control and Alpha Smoke technology. Heavy-duty 14-gauge steel construction with double-walled lid.',
    image_url: 'https://images.unsplash.com/photo-1565299715199-866c917206bb?w=600&q=80',
    price: 899.00,
    rating: 4.7,
    reviews_count: 1092,
    pros: ['Heavy 14-gauge steel', 'Alpha smoke mode', 'WiFi enabled', 'Lifetime warranty on burner'],
    cons: ['Smaller hopper (18 lbs)', 'Less brand recognition', 'Limited accessories'],
    specs: {
      'Cooking Area': '692 sq. in.',
      'Temperature Range': '180°F - 500°F',
      'Hopper Capacity': '18 lbs',
      'Weight': '165 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B09GB1Q9SM?tag=meatlover-20',
    asin: 'B09GB1Q9SM'
  },
  {
    id: '20',
    name: 'Weber SmokeFire EX4',
    brand: 'Weber',
    category: 'grill',
    subcategory: 'pellet',
    description: 'Weber\'s 2nd gen SmokeFire combines pellet convenience with Weber quality. Sear station hits 600°F for steaks. WEBER CONNECT smart technology.',
    image_url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
    price: 999.00,
    rating: 4.3,
    reviews_count: 1823,
    pros: ['High sear temps (600°F)', 'Weber Connect app', 'Excellent build quality', 'GrillGrate compatible'],
    cons: ['Earlier models had issues (now fixed)', 'Smaller hopper', 'Learning curve'],
    specs: {
      'Cooking Area': '672 sq. in.',
      'Temperature Range': '200°F - 600°F',
      'Hopper Capacity': '18 lbs',
      'Weight': '143 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B09RSYJ8Y2?tag=meatlover-20',
    asin: 'B09RSYJ8Y2',
    best_for: 'Best for High-Heat Searing'
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
    description: 'The iconic Weber Kettle has been perfected over decades. One-Touch cleaning system, built-in thermometer, and porcelain-enameled lid for durability.',
    image_url: 'https://images.unsplash.com/photo-1523473827533-2a64d0d36748?w=600&q=80',
    price: 199.00,
    rating: 4.8,
    reviews_count: 12943,
    pros: ['Legendary reliability', 'Perfect for beginners', 'Versatile cooking', '10-year warranty'],
    cons: ['Requires charcoal management skills', 'No built-in thermometer on base model', 'Ash catcher fills quickly'],
    specs: {
      'Cooking Area': '363 sq. in.',
      'Fuel Type': 'Charcoal',
      'Lid Material': 'Porcelain-enameled steel',
      'Weight': '32 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B00MKB5TXA?tag=meatlover-20',
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
    description: 'Premium ceramic kamado with patented SloRoller hyperbolic for better smoke distribution. Divide & Conquer 3-tier system for multi-zone cooking. Air Lift hinge for easy lid operation.',
    image_url: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80',
    price: 2199.99,
    rating: 4.9,
    reviews_count: 1847,
    pros: ['SloRoller smoke technology', 'Divide & Conquer system', 'Air Lift hinge', '3-tier cooking'],
    cons: ['Very heavy (188 lbs)', 'Premium price', 'Requires lump charcoal'],
    specs: {
      'Cooking Area': '256 sq. in. (expandable to 508)',
      'Temperature Range': '225°F - 750°F',
      'Material': 'Ceramic',
      'Weight': '188 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B08FXMHSJZ?tag=meatlover-20',
    asin: 'B08FXMHSJZ',
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
    description: 'The original kamado that started it all. 262 sq in cooking surface handles 20 lb turkeys or 12 burgers. Temperature range from 200°F to 750°F for smoking to searing.',
    image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80',
    price: 1399.00,
    rating: 4.8,
    reviews_count: 3241,
    pros: ['Iconic brand with huge community', 'Exceptional build quality', 'Massive accessory ecosystem', 'Excellent heat retention'],
    cons: ['Expensive', 'Heavy (162 lbs)', 'Stand/table sold separately'],
    specs: {
      'Cooking Area': '262 sq. in.',
      'Temperature Range': '200°F - 750°F',
      'Material': 'Ceramic',
      'Weight': '162 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B003D6HPDG?tag=meatlover-20',
    asin: 'B003D6HPDG',
    expert_tested: true
  },
  {
    id: '22',
    name: 'Weber Master-Touch 22"',
    brand: 'Weber',
    category: 'grill',
    subcategory: 'charcoal',
    description: 'The Master-Touch adds hinged cooking grate, built-in thermometer, and Gourmet BBQ System compatibility to the classic kettle design.',
    image_url: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80',
    price: 329.00,
    rating: 4.8,
    reviews_count: 5421,
    pros: ['Hinged grate for adding charcoal', 'Built-in lid thermometer', 'GBS compatible', 'One-Touch cleaning'],
    cons: ['Premium over basic kettle', 'Still limited smoking capacity', 'Ash management needed'],
    specs: {
      'Cooking Area': '363 sq. in.',
      'Fuel Type': 'Charcoal',
      'Lid Thermometer': 'Built-in',
      'Weight': '35 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B0098HR0XK?tag=meatlover-20',
    asin: 'B0098HR0XK',
    best_for: 'Best Kettle Upgrade'
  },
  {
    id: '23',
    name: 'Char-Griller Akorn Kamado',
    brand: 'Char-Griller',
    category: 'grill',
    subcategory: 'charcoal',
    description: 'Steel kamado delivers ceramic-like performance at a fraction of the price. Triple-walled insulation maintains temps for long cooks.',
    image_url: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80',
    price: 399.00,
    rating: 4.5,
    reviews_count: 6562,
    pros: ['Affordable kamado experience', 'Lighter than ceramic (97 lbs)', 'Good insulation', 'Quick heat-up'],
    cons: ['Can rust without maintenance', 'Less heat retention than ceramic', 'Limited accessories'],
    specs: {
      'Cooking Area': '314 sq. in.',
      'Temperature Range': '200°F - 700°F',
      'Material': 'Triple-wall steel',
      'Weight': '97 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B00CHLT88C?tag=meatlover-20',
    asin: 'B00CHLT88C',
    best_for: 'Best Budget Kamado'
  },
  {
    id: '24',
    name: 'PK Grills PK300 Aaron Franklin Edition',
    brand: 'PK Grills',
    category: 'grill',
    subcategory: 'charcoal',
    description: 'Cast aluminum capsule grill endorsed by BBQ legend Aaron Franklin. Never rusts, precise temp control via 4-point venting. Made in USA.',
    image_url: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80',
    price: 799.00,
    rating: 4.8,
    reviews_count: 1234,
    pros: ['Cast aluminum never rusts', 'Excellent heat control', 'Made in USA', '10-year warranty'],
    cons: ['Unique look not for everyone', 'Smaller cooking area', 'Premium price'],
    specs: {
      'Cooking Area': '300 sq. in.',
      'Material': 'Cast Aluminum',
      'Features': '4-point venting system',
      'Weight': '55 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B08DCMPWZ3?tag=meatlover-20',
    asin: 'B08DCMPWZ3',
    expert_tested: true
  },

  // =====================
  // GRILLS - Gas (6 products)
  // =====================
  {
    id: '5',
    name: 'Weber Genesis S-325s',
    brand: 'Weber',
    category: 'grill',
    subcategory: 'gas',
    description: 'The Genesis S-325s features Weber\'s GS4 grilling system, sear station, and side burner. Stainless steel flavorizer bars and cooking grates.',
    image_url: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?w=600&q=80',
    price: 1149.00,
    rating: 4.7,
    reviews_count: 2892,
    pros: ['GS4 grilling system', 'Sear station burner', 'Side burner included', 'Weber Connect compatible'],
    cons: ['Premium price', 'Large footprint', 'Assembly takes time'],
    specs: {
      'Cooking Area': '513 sq. in.',
      'BTU': '39,000 + 9,000 (sear) + 12,000 (side)',
      'Burners': '3 main + Sear + Side',
      'Weight': '160 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B09LXZK1KM?tag=meatlover-20',
    asin: 'B09LXZK1KM',
    featured: true,
    best_for: 'Best Premium Gas Grill',
    expert_tested: true
  },
  {
    id: '6',
    name: 'Weber Spirit II E-310',
    brand: 'Weber',
    category: 'grill',
    subcategory: 'gas',
    description: 'The Spirit II E-310 is Weber\'s best-selling gas grill. GS4 grilling system, porcelain-enameled cast iron grates, and compact footprint.',
    image_url: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=600&q=80',
    price: 569.00,
    rating: 4.7,
    reviews_count: 8231,
    pros: ['GS4 grilling system', 'Compact footprint', 'Weber quality at mid-range price', 'Easy cleanup'],
    cons: ['No side burner', 'Smaller cooking area', 'No sear burner'],
    specs: {
      'Cooking Area': '424 sq. in.',
      'BTU': '30,000',
      'Burners': '3',
      'Weight': '114 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B07793V9NK?tag=meatlover-20',
    asin: 'B07793V9NK',
    best_for: 'Best Mid-Range Gas Grill'
  },
  {
    id: '25',
    name: 'Char-Broil Performance 4-Burner',
    brand: 'Char-Broil',
    category: 'grill',
    subcategory: 'gas',
    description: 'Budget-friendly 4-burner with side burner. Porcelain-coated grates and electronic ignition. Stainless steel lid and firebox.',
    image_url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80',
    price: 299.99,
    rating: 4.2,
    reviews_count: 7678,
    pros: ['Excellent value', 'Side burner included', 'Easy electronic ignition', 'Good cooking space'],
    cons: ['Build quality is budget-tier', 'Can have hot spots', 'May rust in humid climates'],
    specs: {
      'Cooking Area': '425 sq. in.',
      'BTU': '36,000',
      'Burners': '4 + Side burner',
      'Weight': '98 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B0B8RJQTK7?tag=meatlover-20',
    asin: 'B0B8RJQTK7',
    best_for: 'Best Budget Gas Grill'
  },
  {
    id: '26',
    name: 'Napoleon Prestige 500 RSIB',
    brand: 'Napoleon',
    category: 'grill',
    subcategory: 'gas',
    description: 'Canadian-made premium gas grill with infrared rear and side burners. Night Light knobs, lift-ease roll top lid, and lifetime warranty on select parts.',
    image_url: 'https://images.unsplash.com/photo-1501162946741-4960f990fdf4?w=600&q=80',
    price: 1999.00,
    rating: 4.8,
    reviews_count: 1123,
    pros: ['Exceptional build quality', 'Infrared rear burner for rotisserie', 'Night Light knobs', 'Lifetime warranty'],
    cons: ['Very expensive', 'Large footprint', 'Complex assembly'],
    specs: {
      'Cooking Area': '760 sq. in.',
      'BTU': '80,000 total',
      'Burners': '4 main + IR Side + IR Rear',
      'Weight': '184 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B07ND7HZ56?tag=meatlover-20',
    asin: 'B07ND7HZ56',
    expert_tested: true,
    best_for: 'Best Luxury Gas Grill'
  },
  {
    id: '27',
    name: 'Weber Q 2200',
    brand: 'Weber',
    category: 'grill',
    subcategory: 'gas',
    description: 'Upgraded portable gas grill with larger cooking area, push-button ignition, and built-in thermometer. Perfect for camping, tailgating, or small patios.',
    image_url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&q=80',
    price: 349.00,
    rating: 4.7,
    reviews_count: 4782,
    pros: ['Excellent portability', 'Built-in thermometer', 'Quality construction', 'Great for small spaces'],
    cons: ['Uses LP canisters (adapter available)', 'Small cooking area for families', 'Cart sold separately'],
    specs: {
      'Cooking Area': '280 sq. in.',
      'BTU': '12,000',
      'Fuel': 'LP Gas (1lb or 20lb with adapter)',
      'Weight': '42 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B00FGEHG7Y?tag=meatlover-20',
    asin: 'B00FGEHG7Y',
    best_for: 'Best Portable Gas Grill'
  },
  {
    id: '28',
    name: 'Nexgrill Deluxe 6-Burner',
    brand: 'Nexgrill',
    category: 'grill',
    subcategory: 'gas',
    description: 'Home Depot exclusive with massive 768 sq in cooking space. Ceramic infrared sear burner and side burner included. LED-lit control knobs.',
    image_url: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80',
    price: 449.00,
    rating: 4.4,
    reviews_count: 3341,
    pros: ['Huge cooking space', 'Ceramic sear burner', 'LED-lit knobs', 'Great value'],
    cons: ['Can have hot spots', 'Home Depot exclusive', 'Grease management could be better'],
    specs: {
      'Cooking Area': '768 sq. in.',
      'BTU': '79,000 total',
      'Burners': '6 + IR Sear + Side',
      'Weight': '165 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B09JZ4GZJ7?tag=meatlover-20',
    asin: 'B09JZ4GZJ7'
  },

  // =====================
  // SMOKERS (8 products)
  // =====================
  {
    id: '7',
    name: 'Oklahoma Joe\'s Highland',
    brand: 'Oklahoma Joe\'s',
    category: 'smoker',
    subcategory: 'offset',
    description: 'Classic offset smoker with heavy-gauge steel construction. 900 sq in total cooking space with large main chamber and offset firebox.',
    image_url: 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?w=600&q=80',
    price: 399.99,
    rating: 4.4,
    reviews_count: 5892,
    pros: ['Authentic smoke flavor', 'Large capacity', 'Heavy-gauge steel', 'Great entry to offset smoking'],
    cons: ['Requires mods for best results', 'Needs seal work out of box', 'Steep learning curve'],
    specs: {
      'Cooking Area': '900 sq. in. total',
      'Main Chamber': '619 sq. in.',
      'Firebox': 'Offset side-mounted',
      'Weight': '226 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B00KNTXJ3C?tag=meatlover-20',
    asin: 'B00KNTXJ3C',
    featured: true,
    best_for: 'Best Entry-Level Offset',
    expert_tested: true
  },
  {
    id: '8',
    name: 'Masterbuilt 30" Digital Electric Smoker',
    brand: 'Masterbuilt',
    category: 'smoker',
    subcategory: 'electric',
    description: 'Digital set-it-and-forget-it smoker with patented side woodchip loader and four chrome-coated smoking racks. Digital controls for easy temperature management.',
    image_url: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=600&q=80',
    price: 249.99,
    rating: 4.4,
    reviews_count: 8547,
    pros: ['Easy to use', 'Consistent temperatures', 'Affordable', 'Patented side woodchip loader'],
    cons: ['Less smoke flavor than wood/charcoal', 'Requires outlet', 'Weak smoke ring'],
    specs: {
      'Cooking Area': '710 sq. in.',
      'Temperature Range': 'Up to 275°F',
      'Power': 'Electric',
      'Weight': '48 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B08LDN8Y91?tag=meatlover-20',
    asin: 'B08LDN8Y91',
    best_for: 'Best Beginner Smoker'
  },
  {
    id: '9',
    name: 'Weber Smokey Mountain 22"',
    brand: 'Weber',
    category: 'smoker',
    subcategory: 'vertical',
    description: 'Competition legend bullet smoker. Porcelain-enameled bowl and lid, two 22" cooking grates, and built-in thermometer. Rock-solid temperature stability.',
    image_url: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80',
    price: 599.00,
    rating: 4.9,
    reviews_count: 3841,
    pros: ['Exceptional temperature control', 'Competition proven', 'Weber quality', 'Two cooking grates'],
    cons: ['No easy ash access', 'Can be hard to hit high temps', 'Limited smoke adjustment'],
    specs: {
      'Cooking Area': '726 sq. in.',
      'Fuel Type': 'Charcoal + Wood chunks',
      'Diameter': '22.5 inches',
      'Weight': '68 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B001I8ZTJA?tag=meatlover-20',
    asin: 'B001I8ZTJA',
    featured: true,
    best_for: 'Best Vertical Charcoal Smoker',
    expert_tested: true
  },
  {
    id: '29',
    name: 'Weber Smokey Mountain 18"',
    brand: 'Weber',
    category: 'smoker',
    subcategory: 'vertical',
    description: 'Compact version of the legendary WSM. Same competition-quality performance in a smaller footprint. Perfect for smaller cooks.',
    image_url: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&q=80',
    price: 449.00,
    rating: 4.8,
    reviews_count: 4241,
    pros: ['Same quality as 22"', 'More compact', 'Great for beginners', 'Excellent heat retention'],
    cons: ['Smaller capacity', 'Harder to fit large briskets', 'Same ash access issues'],
    specs: {
      'Cooking Area': '481 sq. in.',
      'Fuel Type': 'Charcoal + Wood chunks',
      'Diameter': '18.5 inches',
      'Weight': '57 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B001I8ZTJ0?tag=meatlover-20',
    asin: 'B001I8ZTJ0'
  },
  {
    id: '30',
    name: 'Masterbuilt Gravity Series 560',
    brand: 'Masterbuilt',
    category: 'smoker',
    subcategory: 'gravity-fed',
    description: 'Revolutionary gravity-fed charcoal smoker with digital controls and WiFi. Real charcoal flavor with set-it-and-forget-it convenience. Reaches 225°F in 7 minutes.',
    image_url: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?w=600&q=80',
    price: 579.99,
    rating: 4.5,
    reviews_count: 3823,
    pros: ['True charcoal flavor', 'WiFi control via app', 'Fast heat-up', 'Sear capability to 700°F'],
    cons: ['High charcoal use at high temps', 'Ash management required', 'Complex initial setup'],
    specs: {
      'Cooking Area': '560 sq. in.',
      'Temperature Range': '225°F - 700°F',
      'Hopper Capacity': '10 lbs lump / 16 lbs briquettes',
      'Weight': '140 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B08GHQR6K9?tag=meatlover-20',
    asin: 'B08GHQR6K9',
    best_for: 'Best Gravity-Fed Smoker',
    expert_tested: true
  },
  {
    id: '31',
    name: 'Pit Barrel Cooker Classic',
    brand: 'Pit Barrel',
    category: 'smoker',
    subcategory: 'drum',
    description: 'Hook-and-hang drum smoker with self-regulating airflow. Produces incredible results with minimal effort. 8 hooks included.',
    image_url: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&q=80',
    price: 424.99,
    rating: 4.7,
    reviews_count: 3456,
    pros: ['Dead simple operation', 'Self-regulating temp', 'Great for beginners', 'Unique hanging method'],
    cons: ['One temperature zone (~265-275°F)', 'Limited capacity per cook', 'No temp adjustment mid-cook'],
    specs: {
      'Cooking Area': '572 sq. in.',
      'Method': '8 hooks + grate',
      'Fuel': 'Charcoal',
      'Weight': '57 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B00J8B79PI?tag=meatlover-20',
    asin: 'B00J8B79PI',
    best_for: 'Easiest Smoker to Use'
  },
  {
    id: '32',
    name: 'Yoder Smokers YS640s',
    brand: 'Yoder',
    category: 'smoker',
    subcategory: 'pellet',
    description: 'Competition-grade pellet smoker made in Kansas from 10-gauge steel. ACS controller for precise temp management. Built to last decades.',
    image_url: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
    price: 2299.00,
    rating: 4.9,
    reviews_count: 656,
    pros: ['10-gauge steel construction', 'Made in USA', 'Competition quality', 'Precise ACS controller'],
    cons: ['Very expensive', 'Heavy at 325 lbs', 'Long lead times'],
    specs: {
      'Cooking Area': '1070 sq. in.',
      'Material': '10-gauge steel',
      'Controller': 'ACS',
      'Weight': '325 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B07W5V7PDZ?tag=meatlover-20',
    asin: 'B07W5V7PDZ',
    best_for: 'Best Competition Smoker',
    expert_tested: true
  },
  {
    id: '33',
    name: 'Char-Broil The Big Easy TRU-Infrared',
    brand: 'Char-Broil',
    category: 'smoker',
    subcategory: 'infrared',
    description: 'Oil-less turkey fryer and smoker combo. TRU-Infrared technology cooks evenly without oil. Smoker box for added flavor.',
    image_url: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=600&q=80',
    price: 179.99,
    rating: 4.5,
    reviews_count: 7234,
    pros: ['Oil-less = safer', 'Crispy skin results', 'Smoker box included', 'Affordable'],
    cons: ['Limited to vertical foods', 'Propane only', 'Not a true low-and-slow smoker'],
    specs: {
      'Capacity': '25 lb turkey',
      'Fuel': 'Propane',
      'Features': 'TRU-Infrared + smoker box',
      'Weight': '25 lbs'
    },
    affiliate_url: 'https://www.amazon.com/dp/B00CGWNNTM?tag=meatlover-20',
    asin: 'B00CGWNNTM'
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
    description: 'The gold standard instant-read. Full reading in 1 second with ±0.5°F accuracy. Auto-rotating display, IP67 waterproof, 5-year warranty.',
    image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    price: 115.00,
    rating: 4.9,
    reviews_count: 6567,
    pros: ['1-second readings', 'Industry-best accuracy (±0.5°F)', 'IP67 waterproof', 'Auto-rotating display'],
    cons: ['Premium price', 'Single point measurement', 'No wireless/logging'],
    specs: {
      'Speed': '1 second',
      'Accuracy': '±0.5°F (±0.3°C)',
      'Range': '-58°F to 572°F',
      'Battery Life': '2,000+ hours'
    },
    affiliate_url: 'https://www.amazon.com/dp/B0CZ8M8LP4?tag=meatlover-20',
    asin: 'B0CZ8M8LP4',
    featured: true,
    best_for: 'Best Instant-Read Thermometer',
    expert_tested: true
  },
  {
    id: '11',
    name: 'MEATER Plus',
    brand: 'MEATER',
    category: 'thermometer',
    subcategory: 'wireless',
    description: 'True wireless meat thermometer with 165ft Bluetooth range. Dual sensors for internal and ambient temp. Guided Cook feature in app.',
    image_url: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
    price: 99.95,
    rating: 4.4,
    reviews_count: 8923,
    pros: ['Completely wireless', 'Dual temp sensors', 'Excellent app with Guided Cook', 'Works in ovens to 527°F'],
    cons: ['165ft range needs extender for far grills', 'Ceramic probe takes time to heat', 'Can\'t use in direct flame'],
    specs: {
      'Range': '165 ft Bluetooth',
      'Internal Sensor': 'Up to 212°F',
      'Ambient Sensor': 'Up to 527°F',
      'Battery': 'Rechargeable (24hr life)'
    },
    affiliate_url: 'https://www.amazon.com/dp/B07H8WTFHW?tag=meatlover-20',
    asin: 'B07H8WTFHW',
    expert_tested: true,
    best_for: 'Best Wireless Probe'
  },
  {
    id: '34',
    name: 'ThermoWorks Signals 4-Channel',
    brand: 'ThermoWorks',
    category: 'thermometer',
    subcategory: 'wireless',
    description: 'Pro-grade 4-channel with WiFi and Bluetooth. Monitor multiple probes from anywhere via ThermoWorks Cloud. IP66 splash-proof.',
    image_url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
    price: 249.00,
    rating: 4.7,
    reviews_count: 1834,
    pros: ['4 probe channels', 'WiFi + Bluetooth', 'Unlimited range via WiFi', 'Rechargeable battery'],
    cons: ['Expensive', 'Probes sold separately ($19 each)', 'Learning curve for app'],
    specs: {
      'Channels': '4',
      'Connectivity': 'WiFi + Bluetooth',
      'Range': 'Unlimited via WiFi',
      'Battery': '16+ hours'
    },
    affiliate_url: 'https://www.amazon.com/dp/B07DTD9P5S?tag=meatlover-20',
    asin: 'B07DTD9P5S',
    best_for: 'Best Multi-Probe Thermometer'
  },
  {
    id: '35',
    name: 'Inkbird IBT-4XS',
    brand: 'Inkbird',
    category: 'thermometer',
    subcategory: 'wireless',
    description: 'Budget-friendly Bluetooth thermometer with 4 probe capacity. Magnetic back, rechargeable battery, and decent app.',
    image_url: 'https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?w=600&q=80',
    price: 49.99,
    rating: 4.5,
    reviews_count: 8456,
    pros: ['Great value', '4 probes included', 'Magnetic mounting', 'Rechargeable'],
    cons: ['Bluetooth only (150ft)', 'App occasionally buggy', 'Probe quality varies'],
    specs: {
      'Channels': '4',
      'Connectivity': 'Bluetooth',
      'Range': '150 ft',
      'Battery': '40+ hours'
    },
    affiliate_url: 'https://www.amazon.com/dp/B076QDC5VL?tag=meatlover-20',
    asin: 'B076QDC5VL',
    best_for: 'Best Budget Wireless Thermometer'
  },
  {
    id: '36',
    name: 'ThermoWorks ThermoPop 2',
    brand: 'ThermoWorks',
    category: 'thermometer',
    subcategory: 'instant-read',
    description: 'Updated budget option from ThermoWorks. 2-3 second readings, rotating display, IP67 waterproof. Great entry to quality thermometers.',
    image_url: 'https://images.unsplash.com/photo-1565299715199-866c917206bb?w=600&q=80',
    price: 39.00,
    rating: 4.8,
    reviews_count: 9789,
    pros: ['ThermoWorks quality', 'Very affordable', 'Fast 2-3 sec readings', 'Rotating display'],
    cons: ['Slower than Thermapen', 'Less accurate (±1.0°F)', 'No backlight auto-on'],
    specs: {
      'Speed': '2-3 seconds',
      'Accuracy': '±1.0°F',
      'Range': '-58°F to 572°F',
      'Battery': '5,000+ hours'
    },
    affiliate_url: 'https://www.amazon.com/dp/B0C2CLKBNF?tag=meatlover-20',
    asin: 'B0C2CLKBNF',
    best_for: 'Best Budget Instant-Read'
  },
  {
    id: '37',
    name: 'FireBoard 2 Drive',
    brand: 'FireBoard',
    category: 'thermometer',
    subcategory: 'wireless',
    description: 'Smart thermometer with blower control for automated pit management. 6 probe channels, WiFi, and cloud logging.',
    image_url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
    price: 259.00,
    rating: 4.6,
    reviews_count: 1076,
    pros: ['6 probe channels', 'Blower control integration', 'Excellent web dashboard', 'Cloud data logging'],
    cons: ['Premium price', 'Blower sold separately ($100)', 'Complex setup'],
    specs: {
      'Channels': '6',
      'Connectivity': 'WiFi + Bluetooth',
      'Features': 'Blower control, cloud logging',
      'Battery': '24+ hours'
    },
    affiliate_url: 'https://www.amazon.com/dp/B08Q3VBTQB?tag=meatlover-20',
    asin: 'B08Q3VBTQB',
    expert_tested: true,
    best_for: 'Best for Automated Pit Control'
  },

  // =====================
  // ACCESSORIES (10 products)
  // =====================
  {
    id: '12',
    name: 'Weber Spirit/Spirit II 300 Series Cover',
    brand: 'Weber',
    category: 'accessory',
    subcategory: 'cover',
    description: 'Premium fitted cover for Weber Spirit 300 series. Weather-resistant, UV protected, with velcro straps for secure fit.',
    image_url: 'https://images.unsplash.com/photo-1523473827533-2a64d0d36748?w=600&q=80',
    price: 89.99,
    rating: 4.7,
    reviews_count: 5456,
    pros: ['Perfect Weber fit', 'Weather resistant', 'UV protection', 'Easy velcro straps'],
    cons: ['Weber-specific only', 'Premium price for a cover'],
    specs: {
      'Material': 'Polyester with PVC liner',
      'Fits': 'Spirit 300 series, Spirit II 300 series',
      'Features': 'UV resistant, breathable'
    },
    affiliate_url: 'https://www.amazon.com/dp/B0CW8BCFCF?tag=meatlover-20',
    asin: 'B0CW8BCFCF'
  },
  {
    id: '13',
    name: 'Weber Rapidfire Chimney Starter',
    brand: 'Weber',
    category: 'accessory',
    subcategory: 'tools',
    description: 'The essential tool for charcoal grilling. Lights a full chimney of charcoal in 15-20 minutes without lighter fluid.',
    image_url: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80',
    price: 21.99,
    rating: 4.8,
    reviews_count: 12456,
    pros: ['Lights charcoal fast', 'No lighter fluid needed', 'Durable construction', 'Large capacity'],
    cons: ['Gets very hot', 'Requires newspaper or starters', 'Handle can warm up'],
    specs: {
      'Capacity': '100 briquettes / 6 qts lump',
      'Material': 'Aluminized steel',
      'Handle': 'Thermoplastic'
    },
    affiliate_url: 'https://www.amazon.com/dp/B000WEOQV8?tag=meatlover-20',
    asin: 'B000WEOQV8',
    featured: true,
    best_for: 'Essential Charcoal Tool'
  },
  {
    id: '14',
    name: 'Meat Church Holy Cow BBQ Rub',
    brand: 'Meat Church',
    category: 'accessory',
    subcategory: 'rubs',
    description: 'Competition-proven beef rub with bold black pepper and garlic. Created by Matt Pittman, perfect for brisket, steaks, and burgers.',
    image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80',
    price: 13.99,
    rating: 4.8,
    reviews_count: 12234,
    pros: ['Amazing beef flavor', 'Competition proven', 'No MSG', 'Great bark formation'],
    cons: ['12 oz goes fast', 'Can be hard to find locally', 'Salt-forward'],
    specs: {
      'Size': '12 oz',
      'Best For': 'Brisket, Steaks, Burgers',
      'Heat Level': 'Mild'
    },
    affiliate_url: 'https://www.amazon.com/dp/B01MY3FM6Y?tag=meatlover-20',
    asin: 'B01MY3FM6Y'
  },
  {
    id: '38',
    name: 'GrillGrate Sear Station (3 Panel Set)',
    brand: 'GrillGrate',
    category: 'accessory',
    subcategory: 'grates',
    description: 'Aluminum grill grates with raised rails for perfect sear marks. Eliminates flare-ups, amplifies heat, and works on any grill.',
    image_url: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80',
    price: 134.99,
    rating: 4.7,
    reviews_count: 4567,
    pros: ['Perfect sear marks', 'No flare-ups', 'Works on any grill', 'Even heat distribution'],
    cons: ['Expensive', 'Takes time to heat', 'Requires specific cleaning'],
    specs: {
      'Material': 'Hard-anodized aluminum',
      'Pieces': '3 interlocking panels',
      'Features': 'Raised rails, GrateTool included'
    },
    affiliate_url: 'https://www.amazon.com/dp/B00164TLPE?tag=meatlover-20',
    asin: 'B00164TLPE',
    expert_tested: true
  },
  {
    id: '39',
    name: 'Killer Hogs The BBQ Rub',
    brand: 'Killer Hogs',
    category: 'accessory',
    subcategory: 'rubs',
    description: 'Malcom Reed\'s all-purpose award-winning rub. Balanced sweet and savory works on everything. A BBQ competition staple.',
    image_url: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80',
    price: 15.99,
    rating: 4.8,
    reviews_count: 7678,
    pros: ['All-purpose versatility', 'Multiple competition wins', 'Great bark', 'Balanced flavor'],
    cons: ['Premium price', 'Can clump in humid storage'],
    specs: {
      'Size': '12.2 oz',
      'Best For': 'Ribs, Pork, Chicken, Brisket',
      'Heat Level': 'Mild'
    },
    affiliate_url: 'https://www.amazon.com/dp/B00O8YLS9A?tag=meatlover-20',
    asin: 'B00O8YLS9A'
  },
  {
    id: '40',
    name: 'Slow \'N Sear Deluxe',
    brand: 'SnS Grills',
    category: 'accessory',
    subcategory: 'tools',
    description: 'Turns Weber kettle into 2-zone smoker with searing capability. Water reservoir for humidity, coal basket for extended burns.',
    image_url: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80',
    price: 139.99,
    rating: 4.8,
    reviews_count: 3345,
    pros: ['Transforms kettle grills', 'Creates perfect 2-zone', 'Water reservoir', 'Built to last'],
    cons: ['Only for 22" or 26" kettles', 'Takes up grate space', 'Learning curve'],
    specs: {
      'Fits': '22" and 26" Weber kettles',
      'Material': '18-gauge stainless steel',
      'Features': 'Water reservoir, coal basket'
    },
    affiliate_url: 'https://www.amazon.com/dp/B06XHJ42KM?tag=meatlover-20',
    asin: 'B06XHJ42KM',
    expert_tested: true,
    best_for: 'Best Kettle Upgrade'
  },
  {
    id: '41',
    name: 'Fogo Super Premium Lump Charcoal',
    brand: 'Fogo',
    category: 'accessory',
    subcategory: 'fuel',
    description: 'Restaurant-quality hardwood lump from Central America. Burns hotter and cleaner than briquettes with minimal ash.',
    image_url: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?w=600&q=80',
    price: 54.99,
    rating: 4.7,
    reviews_count: 5567,
    pros: ['Burns very hot', 'Low ash production', 'Restaurant quality', 'Large pieces'],
    cons: ['Premium price', 'Some small pieces in bag', 'Sparks when lighting'],
    specs: {
      'Size': '17.6 lbs',
      'Wood': 'Central American hardwood',
      'Type': 'Super Premium Lump'
    },
    affiliate_url: 'https://www.amazon.com/dp/B01LXRIHXK?tag=meatlover-20',
    asin: 'B01LXRIHXK',
    best_for: 'Best Premium Lump Charcoal'
  },
  {
    id: '42',
    name: 'Pink Butcher Paper Roll (24" x 150\')',
    brand: 'Paper Pros',
    category: 'accessory',
    subcategory: 'supplies',
    description: 'FDA-approved uncoated pink butcher paper for wrapping brisket. Breathable wrap maintains bark while retaining moisture.',
    image_url: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=600&q=80',
    price: 29.99,
    rating: 4.6,
    reviews_count: 8789,
    pros: ['Breathable for better bark', 'FDA approved food safe', 'Large roll', 'Easy to work with'],
    cons: ['Takes practice to wrap well', 'Bulky storage', 'Single use'],
    specs: {
      'Size': '24" x 150 ft (300 sq ft)',
      'Type': 'Uncoated, unwaxed',
      'Use': 'Wrapping brisket, ribs, pork'
    },
    affiliate_url: 'https://www.amazon.com/dp/B074Q93V95?tag=meatlover-20',
    asin: 'B074Q93V95'
  },
  {
    id: '43',
    name: 'Bear Paws Meat Shredders',
    brand: 'Bear Paws',
    category: 'accessory',
    subcategory: 'tools',
    description: 'The original meat shredding claws. Heat-resistant handles, ultra-sharp tips, and comfortable grip. Dishwasher safe.',
    image_url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80',
    price: 14.99,
    rating: 4.7,
    reviews_count: 18456,
    pros: ['Fast shredding', 'Comfortable grip', 'Heat resistant to 475°F', 'Dishwasher safe'],
    cons: ['Single purpose tool', 'Tips can dull', 'Forks work in a pinch'],
    specs: {
      'Material': 'BPA-free nylon',
      'Features': 'Heat resistant to 475°F',
      'Included': '2 claws'
    },
    affiliate_url: 'https://www.amazon.com/dp/B003IWI66W?tag=meatlover-20',
    asin: 'B003IWI66W'
  },
  {
    id: '44',
    name: 'ThermoPro TP20 Wireless Thermometer',
    brand: 'ThermoPro',
    category: 'thermometer',
    subcategory: 'wireless',
    description: 'Dual probe wireless thermometer with 300ft range. Monitor meat and smoker temp simultaneously. Large backlit display.',
    image_url: 'https://images.unsplash.com/photo-1501162946741-4960f990fdf4?w=600&q=80',
    price: 54.99,
    rating: 4.6,
    reviews_count: 28456,
    pros: ['300ft wireless range', 'Dual probes', 'Large display', 'Preset temps for meats'],
    cons: ['No app/smart features', 'Basic alerts only', 'Probes need careful handling'],
    specs: {
      'Channels': '2',
      'Connectivity': 'RF wireless (300ft)',
      'Display': 'Backlit LCD',
      'Battery': 'AAA (not included)'
    },
    affiliate_url: 'https://www.amazon.com/dp/B01GE77QT0?tag=meatlover-20',
    asin: 'B01GE77QT0',
    best_for: 'Best Value Wireless Thermometer'
  }
]

// REAL MEAT SUBSCRIPTION DATA - Verified February 2026
// Pricing and details from official websites

export const subscriptions: Subscription[] = [
  {
    id: '1',
    name: 'ButcherBox',
    description: 'America\'s #1 meat delivery with 400K+ subscribers. 100% grass-fed beef, free-range organic chicken, heritage breed pork, and wild-caught seafood. All humanely raised, no antibiotics or hormones. Flexible Essentials or Signature boxes.',
    image_url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&q=80',
    price_range: '$8.52 - $15.23/lb (vs $10-18 grocery)',
    rating: 4.7,
    pros: ['100% grass-fed beef', 'Third-party animal welfare certified', 'Free shipping always', 'Free protein for a year promo', 'Skip or cancel anytime'],
    cons: ['Can\'t choose specific cuts in curated boxes', 'Frozen delivery only', 'Limited seafood options'],
    affiliate_url: 'https://www.butcherbox.com/?ref=meatlover',
    commission: '$20 per signup'
  },
  {
    id: '2',
    name: 'Crowd Cow',
    description: 'Craft meat marketplace connecting you with independent farms. A5 Japanese Wagyu from Kagoshima, pasture-raised beef, Iberico pork, and wild-caught seafood. Full farm transparency on every product.',
    image_url: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80',
    price_range: '$17.99 - $60+/cut (premium focus)',
    rating: 4.6,
    pros: ['Choose specific cuts and farms', 'A5 Japanese Wagyu available', 'Full farm transparency', 'Iberico pork and specialty items', 'No subscription required'],
    cons: ['Premium pricing', 'Shipping costs on small orders ($9.99)', 'Popular items sell out fast'],
    affiliate_url: 'https://www.crowdcow.com/?ref=meatlover',
    commission: '$25 per signup'
  },
  {
    id: '3',
    name: 'Snake River Farms',
    description: 'American Wagyu pioneers. Their SRF Gold and Black labels are rated among the best beef in America. BMS 6-12 marbling scores. Also offers Kurobuta pork and subscription boxes.',
    image_url: 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?w=600&q=80',
    price_range: '$24.99 - $199+/cut',
    rating: 4.9,
    pros: ['American Wagyu specialists', 'BMS 6-12 marbling', 'Gold Plus grade available', 'Subscribe & save 10%', 'Free shipping on boxes'],
    cons: ['Very premium pricing', 'Beef-focused selection', 'Not budget-friendly'],
    affiliate_url: 'https://www.snakeriverfarms.com/?ref=meatlover',
    commission: '8% commission'
  },
  {
    id: '4',
    name: 'Porter Road',
    description: 'Nashville-based whole-animal butcher. Pasture-raised, dry-aged meats from Kentucky and Tennessee family farms. Hand-cut at their own facility. No factory farming ever.',
    image_url: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=600&q=80',
    price_range: '$89 - $199/box',
    rating: 4.5,
    pros: ['Whole-animal butchery', 'Dry-aged options', 'Small farm focus', 'No antibiotics or hormones', 'Nationwide delivery'],
    cons: ['Can sell out quickly', 'Limited exotic options', 'Smaller box sizes'],
    affiliate_url: 'https://www.porterroad.com/?ref=meatlover',
    commission: '$15 per signup'
  },
  {
    id: '5',
    name: 'Omaha Steaks',
    description: 'The original mail-order steak company since 1917. Famous for their filet mignon and combo packages. Great for gifts with presentation boxes. Frequent sales and deals.',
    image_url: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?w=600&q=80',
    price_range: '$99 - $399/package',
    rating: 4.3,
    pros: ['107+ years in business', 'Excellent gift packaging', 'Frequent 50%+ sales', 'Wide variety including sides', 'Reliable delivery'],
    cons: ['Not grass-fed/organic', 'Heavy on promotions', 'Quality varies by package tier', '$19.99 shipping'],
    affiliate_url: 'https://www.omahasteaks.com/?ref=meatlover',
    commission: '10% commission'
  }
]

export const guides: Guide[] = [
  {
    slug: 'best-grills-2025',
    title: 'Best Grills of 2026: Expert Tested Picks',
    description: 'Our comprehensive guide to the top grills of 2025. We tested over 25 models across pellet, gas, charcoal, and kamado categories to find the best for every budget.',
    category: 'Buying Guide',
    readTime: '15 min read',
    date: 'January 2026',
    featured: true,
    relatedProducts: ['1', '3', '4', '5']
  },
  {
    slug: 'beginner-bbq-tips',
    title: 'BBQ Tips for Beginners: A Complete Guide',
    description: 'New to grilling? Learn the fundamentals of BBQ, from fire management to internal temperatures, in this beginner-friendly guide.',
    category: 'Tutorial',
    readTime: '10 min read',
    date: 'January 2026',
    featured: true,
    relatedProducts: ['10', '13']
  },
  {
    slug: 'traeger-vs-weber',
    title: 'Traeger vs Weber: Complete Brand Comparison',
    description: 'A head-to-head comparison of two BBQ giants. We compare build quality, features, technology, and value across their pellet and charcoal lineups.',
    category: 'Comparison',
    readTime: '12 min read',
    date: 'January 2026',
    featured: true,
    relatedProducts: ['1', '2', '3', '9', '20']
  },
  {
    slug: 'best-smokers-under-500',
    title: 'Best Smokers Under $500 in 2026',
    description: 'You don\'t need to spend a fortune to smoke great BBQ. These are the best smokers for beginners and budget-conscious pitmasters.',
    category: 'Buying Guide',
    readTime: '10 min read',
    date: 'January 2026',
    featured: true,
    relatedProducts: ['7', '8', '29', '31']
  },
  {
    slug: 'pellet-vs-charcoal',
    title: 'Pellet vs. Charcoal Grills: The Ultimate Showdown',
    description: 'The great debate settled. We break down the pros and cons of pellet and charcoal grills to help you choose the right one for your style.',
    category: 'Comparison',
    readTime: '8 min read',
    date: 'December 2025',
    featured: false,
    relatedProducts: ['1', '15', '3', '4']
  },
  {
    slug: 'smoking-your-first-brisket',
    title: 'Smoking Your First Brisket: Step-by-Step Guide',
    description: 'A step-by-step guide to smoking a perfect brisket. Learn the techniques pros use including trimming, seasoning, wrapping, and resting.',
    category: 'Recipe',
    readTime: '20 min read',
    date: 'December 2025',
    featured: false,
    relatedProducts: ['7', '9', '10', '42']
  },
  {
    slug: 'meat-subscription-comparison',
    title: 'Meat Subscription Box Comparison 2026',
    description: 'We tested and compared ButcherBox, Crowd Cow, Snake River Farms, Porter Road, and Omaha Steaks to find the best meat delivery for every type of cook.',
    category: 'Comparison',
    readTime: '12 min read',
    date: 'January 2026',
    featured: false
  },
  {
    slug: 'thermometer-guide',
    title: 'Complete BBQ Thermometer Guide 2026',
    description: 'From instant-read to wireless multi-probe systems, learn which thermometer is right for your cooking style and budget.',
    category: 'Buying Guide',
    readTime: '7 min read',
    date: 'January 2026',
    featured: false,
    relatedProducts: ['10', '11', '34', '35', '36', '37']
  },
  {
    slug: 'how-to-clean-your-grill',
    title: 'How to Clean Your Grill Like a Pro',
    description: 'Keep your grill in top shape with our deep-cleaning guide. Learn the tools and techniques that extend your grill\'s life.',
    category: 'Tutorial',
    readTime: '8 min read',
    date: 'November 2025',
    featured: false
  },
  {
    slug: 'kamado-buying-guide',
    title: 'Kamado Grill Buying Guide: BGE vs Kamado Joe vs Budget',
    description: 'Ceramic kamado cookers are the most versatile grills you can buy. We compare Big Green Egg, Kamado Joe, and budget alternatives.',
    category: 'Comparison',
    readTime: '14 min read',
    date: 'November 2025',
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
