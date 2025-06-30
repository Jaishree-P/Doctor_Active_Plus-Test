export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "laser-therapy-revolution",
    title: "The Revolution of Laser Therapy in Modern Pain Management",
    excerpt:
      "Discover how cutting-edge laser therapy is transforming pain management and accelerating healing processes with minimal side effects.",
    content: `
      <h2>Understanding Laser Therapy</h2>
      <p>Laser therapy, also known as Low-Level Laser Therapy (LLLT) or photobiomodulation, represents a breakthrough in non-invasive pain management. This advanced treatment uses specific wavelengths of light to stimulate cellular processes and promote natural healing.</p>
      
      <h3>How Laser Therapy Works</h3>
      <p>The therapy works by delivering photons of light energy to damaged cells, which then absorb this energy and use it to normalize cellular function and enhance the body's natural healing processes. This results in reduced inflammation, decreased pain, and accelerated tissue repair.</p>
      
      <h3>Benefits of Laser Therapy</h3>
      <ul>
        <li>Non-invasive and painless treatment</li>
        <li>No known side effects</li>
        <li>Reduces inflammation and swelling</li>
        <li>Accelerates tissue healing</li>
        <li>Improves blood circulation</li>
        <li>Provides long-lasting pain relief</li>
      </ul>
      
      <h3>Conditions Treated</h3>
      <p>Laser therapy is effective for treating various conditions including arthritis, sports injuries, chronic pain, wound healing, and post-surgical recovery. At our clinic, we use state-of-the-art laser equipment to ensure optimal treatment outcomes.</p>
    `,
    author: "Dr. Anil Kumar",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Treatment",
    image: "/images/blog/laser-therapy-revolution.jpg",
    tags: ["Laser Therapy", "Pain Management", "Modern Medicine"],
  },
  {
    id: "home-physiotherapy-benefits",
    title: "5 Key Benefits of Home Physiotherapy Services",
    excerpt:
      "Learn why home physiotherapy is becoming the preferred choice for patients seeking convenient, personalized, and effective rehabilitation.",
    content: `
      <h2>The Rise of Home Physiotherapy</h2>
      <p>Home physiotherapy has emerged as a game-changing approach to rehabilitation, offering patients the comfort and convenience of receiving professional treatment in their own environment.</p>
      
      <h3>1. Comfort and Convenience</h3>
      <p>Receiving treatment at home eliminates the stress of traveling to a clinic, especially for patients with mobility issues or chronic conditions. This comfort often leads to better treatment compliance and outcomes.</p>
      
      <h3>2. Personalized Environment</h3>
      <p>Home settings allow therapists to assess and address real-world challenges that patients face in their daily activities, leading to more practical and effective treatment plans.</p>
      
      <h3>3. Family Involvement</h3>
      <p>Home physiotherapy enables family members to learn proper techniques and provide ongoing support, creating a comprehensive care network around the patient.</p>
      
      <h3>4. Reduced Risk of Infections</h3>
      <p>Especially important for immunocompromised patients, home treatment reduces exposure to hospital-acquired infections and provides a safer healing environment.</p>
      
      <h3>5. Cost-Effective Care</h3>
      <p>Home physiotherapy often proves more economical when considering transportation costs, time savings, and the potential for faster recovery due to increased comfort and compliance.</p>
    `,
    author: "Dr. Anil Kumar",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Home Care",
    image: "/images/blog/home-physiotherapy.jpg",
    tags: ["Home Care", "Physiotherapy", "Patient Benefits"],
  },
  {
    id: "spine-health-modern-lifestyle",
    title: "Protecting Your Spine Health in the Digital Age",
    excerpt:
      "Essential tips and strategies to maintain spine health while navigating the challenges of modern sedentary lifestyles and digital work environments.",
    content: `
      <h2>The Digital Age Spine Challenge</h2>
      <p>Modern lifestyles, characterized by prolonged sitting, poor posture, and increased screen time, have created an epidemic of spine-related problems. Understanding how to protect your spine is crucial for long-term health.</p>
      
      <h3>Common Spine Problems in the Digital Age</h3>
      <ul>
        <li>Forward head posture</li>
        <li>Rounded shoulders</li>
        <li>Lower back pain from prolonged sitting</li>
        <li>Cervical spine strain</li>
        <li>Disc compression issues</li>
      </ul>
      
      <h3>Prevention Strategies</h3>
      <p>Implementing proper ergonomics, taking regular breaks, and maintaining good posture are essential. We recommend the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds, and change your position.</p>
      
      <h3>Exercise for Spine Health</h3>
      <p>Regular strengthening exercises for the core, back extensors, and neck muscles can significantly reduce the risk of spine problems. Simple stretches and mobility exercises can be performed throughout the workday.</p>
      
      <h3>When to Seek Professional Help</h3>
      <p>Persistent pain, numbness, tingling, or reduced mobility are signs that professional intervention may be needed. Early treatment often prevents more serious complications.</p>
    `,
    author: "Dr. Anil Kumar",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Prevention",
    image: "/images/blog/spine-health-digital.jpg",
    tags: ["Spine Health", "Digital Age", "Prevention", "Ergonomics"],
  },
  {
    id: "sports-injury-prevention",
    title: "Complete Guide to Sports Injury Prevention and Recovery",
    excerpt:
      "Comprehensive strategies for athletes and fitness enthusiasts to prevent injuries and optimize recovery for peak performance.",
    content: `
      <h2>Understanding Sports Injuries</h2>
      <p>Sports injuries can derail athletic performance and long-term health. Understanding prevention strategies and proper recovery techniques is essential for all athletes, from weekend warriors to professionals.</p>
      
      <h3>Common Sports Injuries</h3>
      <ul>
        <li>ACL tears and knee injuries</li>
        <li>Shoulder impingement and rotator cuff injuries</li>
        <li>Ankle sprains</li>
        <li>Tennis and golfer's elbow</li>
        <li>Hamstring and muscle strains</li>
      </ul>
      
      <h3>Prevention Strategies</h3>
      <p>Proper warm-up, progressive training, adequate rest, and maintaining good form are fundamental to injury prevention. Cross-training and strength conditioning also play crucial roles.</p>
      
      <h3>The RICE Protocol</h3>
      <p>For acute injuries, the RICE protocol (Rest, Ice, Compression, Elevation) remains effective for initial management. However, early mobilization under professional guidance often leads to better outcomes.</p>
      
      <h3>Advanced Recovery Techniques</h3>
      <p>Modern sports medicine incorporates laser therapy, targeted exercises, and progressive rehabilitation programs to ensure athletes return to their sport stronger and more resilient.</p>
    `,
    author: "Dr. Anil Kumar",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Sports Medicine",
    image: "/images/blog/sports-injury-prevention.jpg",
    tags: ["Sports Medicine", "Injury Prevention", "Athletic Performance"],
  },
  {
    id: "arthritis-management-guide",
    title: "Living Well with Arthritis: A Comprehensive Management Guide",
    excerpt:
      "Practical strategies and treatment options for managing arthritis symptoms and maintaining an active, fulfilling lifestyle.",
    content: `
      <h2>Understanding Arthritis</h2>
      <p>Arthritis affects millions worldwide, causing joint pain, stiffness, and reduced mobility. However, with proper management, individuals with arthritis can maintain active, fulfilling lives.</p>
      
      <h3>Types of Arthritis</h3>
      <ul>
        <li>Osteoarthritis - wear and tear arthritis</li>
        <li>Rheumatoid arthritis - autoimmune condition</li>
        <li>Psoriatic arthritis</li>
        <li>Gout - crystal arthritis</li>
      </ul>
      
      <h3>Non-Pharmacological Management</h3>
      <p>Exercise therapy, weight management, heat and cold therapy, and joint protection techniques form the foundation of arthritis management. Regular low-impact exercise helps maintain joint mobility and muscle strength.</p>
      
      <h3>Advanced Treatment Options</h3>
      <p>Modern treatments include laser therapy, targeted exercises, manual therapy, and patient education. These approaches can significantly reduce pain and improve function.</p>
      
      <h3>Lifestyle Modifications</h3>
      <p>Simple changes in daily activities, using assistive devices when needed, and maintaining a healthy diet can make a substantial difference in managing arthritis symptoms.</p>
    `,
    author: "Dr. Anil Kumar",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "Chronic Conditions",
    image: "/images/blog/arthritis-management.jpg",
    tags: ["Arthritis", "Chronic Pain", "Joint Health"],
  },
  
  {
    id: "chronic-pain-holistic-approach",
    title: "A Holistic Approach to Chronic Pain Management",
    excerpt:
      "Discover comprehensive strategies that address chronic pain from multiple angles for lasting relief and improved quality of life.",
    content: `
      <h2>Understanding Chronic Pain</h2>
      <p>Chronic pain affects every aspect of life, requiring a comprehensive approach that addresses physical, emotional, and social factors for effective management.</p>
      
      <h3>The Biopsychosocial Model</h3>
      <p>Modern pain management recognizes that chronic pain involves biological, psychological, and social factors. Effective treatment addresses all these components.</p>
      
      <h3>Multi-Modal Treatment Approach</h3>
      <ul>
        <li>Physical therapy and exercise</li>
        <li>Laser therapy and advanced modalities</li>
        <li>Pain education and coping strategies</li>
        <li>Stress management techniques</li>
        <li>Sleep hygiene improvement</li>
      </ul>
      
      <h3>The Role of Patient Education</h3>
      <p>Understanding pain mechanisms empowers patients to take active roles in their recovery. Education about pain science often reduces fear and improves outcomes.</p>
      
      <h3>Building Resilience</h3>
      <p>Developing coping strategies, maintaining social connections, and focusing on functional goals rather than just pain reduction leads to better long-term outcomes.</p>
    `,
    author: "Dr. Anil Kumar",
    date: "2023-12-10",
    readTime: "8 min read",
    category: "Pain Management",
    image: "/images/blog/chronic-pain-holistic.jpg",
    tags: ["Chronic Pain", "Holistic Care", "Pain Management"],
  },
  {
    id: "posture-correction-exercises",
    title: "Essential Posture Correction Exercises for Daily Life",
    excerpt:
      "Simple yet effective exercises and techniques to improve posture, reduce pain, and enhance overall well-being in your daily routine.",
    content: `
      <h2>The Importance of Good Posture</h2>
      <p>Good posture is fundamental to overall health, affecting everything from breathing and circulation to confidence and energy levels. Poor posture can lead to chronic pain and reduced quality of life.</p>
      
      <h3>Common Postural Problems</h3>
      <ul>
        <li>Forward head posture</li>
        <li>Rounded shoulders</li>
        <li>Excessive lumbar lordosis</li>
        <li>Anterior pelvic tilt</li>
        <li>Thoracic kyphosis</li>
      </ul>
      
      <h3>Daily Posture Exercises</h3>
      <p>Simple exercises performed throughout the day can significantly improve posture. Chin tucks, shoulder blade squeezes, and hip flexor stretches are particularly effective.</p>
      
      <h3>Workplace Ergonomics</h3>
      <p>Proper desk setup, regular position changes, and micro-breaks can prevent postural problems from developing or worsening during work hours.</p>
      
      <h3>Long-term Strategies</h3>
      <p>Consistent practice, awareness of body position, and strengthening weak muscles while stretching tight ones creates lasting postural improvements.</p>
    `,
    author: "Dr. Anil Kumar",
    date: "2023-12-05",
    readTime: "6 min read",
    category: "Exercise",
    image: "/images/blog/posture-correction.jpg",
    tags: ["Posture", "Exercise", "Workplace Health"],
  },
  {
    id: "recovery-nutrition-guide",
    title: "Nutrition for Optimal Recovery and Healing",
    excerpt:
      "Learn how proper nutrition can accelerate healing, reduce inflammation, and support your body's natural recovery processes.",
    content: `
      <h2>The Role of Nutrition in Recovery</h2>
      <p>Proper nutrition provides the building blocks for tissue repair, supports immune function, and can significantly impact recovery speed and quality.</p>
      
      <h3>Anti-Inflammatory Foods</h3>
      <p>Foods rich in omega-3 fatty acids, antioxidants, and phytonutrients help reduce inflammation and support healing. Include fatty fish, berries, leafy greens, and nuts in your diet.</p>
      
      <h3>Protein for Tissue Repair</h3>
      <p>Adequate protein intake is crucial for muscle and tissue repair. Aim for high-quality protein sources throughout the day to support recovery processes.</p>
      
      <h3>Hydration and Recovery</h3>
      <p>Proper hydration supports circulation, nutrient transport, and waste removal. Water intake should increase during recovery periods.</p>
      
      <h3>Timing and Recovery</h3>
      <p>Nutrient timing, particularly around exercise and treatment sessions, can optimize recovery outcomes. Post-treatment nutrition is especially important.</p>
      
      <h3>Supplements and Recovery</h3>
      <p>While whole foods are preferred, certain supplements like vitamin D, magnesium, and omega-3s may support recovery when dietary intake is insufficient.</p>
    `,
    author: "Dr. Anil Kumar",
    date: "2023-11-30",
    readTime: "7 min read",
    category: "Nutrition",
    image: "/images/blog/recovery-nutrition.jpg",
    tags: ["Nutrition", "Recovery", "Anti-inflammatory", "Healing"],
  },
  {
    id: "mental-health-physical-recovery",
    title: "The Mind-Body Connection in Physical Recovery",
    excerpt:
      "Understanding how mental health impacts physical recovery and strategies to optimize both for comprehensive healing.",
    content: `
      <h2>Understanding the Mind-Body Connection</h2>
      <p>The relationship between mental and physical health is profound. Psychological factors can significantly impact recovery speed, pain perception, and treatment outcomes.</p>
      
      <h3>Stress and Recovery</h3>
      <p>Chronic stress impairs immune function, increases inflammation, and slows healing. Managing stress is crucial for optimal physical recovery.</p>
      
      <h3>The Role of Sleep</h3>
      <p>Quality sleep is when most tissue repair occurs. Poor sleep can significantly impair recovery and increase pain sensitivity.</p>
      
      <h3>Motivation and Compliance</h3>
      <p>Mental health directly affects treatment compliance and motivation to engage in recovery activities. Addressing psychological barriers improves outcomes.</p>
      
      <h3>Coping Strategies</h3>
      <ul>
        <li>Mindfulness and meditation</li>
        <li>Progressive muscle relaxation</li>
        <li>Cognitive behavioral techniques</li>
        <li>Social support systems</li>
        <li>Goal setting and achievement</li>
      </ul>
      
      <h3>Professional Support</h3>
      <p>When mental health challenges impact recovery, professional support from counselors or psychologists can be invaluable in achieving optimal outcomes.</p>
    `,
    author: "Dr. Anil Kumar",
    date: "2023-11-25",
    readTime: "6 min read",
    category: "Mental Health",
    image: "/images/blog/mind-body-connection.jpg",
    tags: ["Mental Health", "Recovery", "Mind-Body", "Stress Management"],
  },
]

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

export function getRecentBlogs(limit = 3): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit)
}
