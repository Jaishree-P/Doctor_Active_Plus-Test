import { Zap, Heart, Bone, Sparkles, Trophy, LaptopIcon as Laser } from "lucide-react"

export const servicesData = [
  {
    id: "laser-therapy",
    name: "Laser Therapy",
    description: "Advanced laser and modern therapy techniques for pain relief and healing",
    icon: Laser,
    treatments: [
      {
        id: "laser-therapy-treatment",
        name: "Laser Therapy",
        shortDescription: "Low-level laser therapy for pain relief and tissue healing",
      },
      {
        id: "magnetotherapy",
        name: "Magnetotherapy",
        shortDescription: "Magnetic field therapy for pain management and healing",
      },
      {
        id: "spinal-decompression",
        name: "Spinal Decompression",
        shortDescription: "Non-surgical spinal decompression for disc problems",
      },
      {
        id: "matrix-rhythm-therapy",
        name: "Matrix Rhythm Therapy",
        shortDescription: "Cellular regeneration therapy using magnetic resonance",
      },
      {
        id: "targeted-radiofrequency",
        name: "Targeted Radiofrequency",
        shortDescription: "Precise radiofrequency treatment for pain management",
      },
    ],
  },
  {
    id: "spine",
    name: "SPINE Treatment",
    description: "Comprehensive spine care for various spinal conditions",
    icon: Zap,
    treatments: [
      {
        id: "slipped-disc",
        name: "Slipped Disc (Herniated Disc)",
        shortDescription: "Treatment for herniated or bulging discs",
      },
      {
        id: "spondylosis",
        name: "Spondylosis (Spinal Osteoarthritis)",
        shortDescription: "Management of spinal arthritis and degeneration",
      },
      {
        id: "spondylolisthesis",
        name: "Spondylolisthesis",
        shortDescription: "Treatment for vertebral slippage conditions",
      },
      {
        id: "spinal-stenosis",
        name: "Spinal Stenosis",
        shortDescription: "Care for narrowed spinal canal conditions",
      },
      {
        id: "degenerative-disc-disease",
        name: "Degenerative Disc Disease",
        shortDescription: "Treatment for age-related disc deterioration",
      },
      {
        id: "facet-joint-syndrome",
        name: "Facet Joint Syndrome",
        shortDescription: "Management of facet joint arthritis and pain",
      },
      {
        id: "kyphosis",
        name: "Kyphosis (Hunched Back)",
        shortDescription: "Treatment for excessive forward spinal curvature",
      },
      {
        id: "lordosis",
        name: "Lordosis (Swayback)",
        shortDescription: "Management of excessive inward spinal curve",
      },
      {
        id: "scoliosis",
        name: "Scoliosis",
        shortDescription: "Treatment for sideways spinal curvature",
      },
      {
        id: "postural-back-pain",
        name: "Postural Back Pain",
        shortDescription: "Relief for posture-related back pain",
      },
      {
        id: "myofascial-pain-syndrome",
        name: "Myofascial Pain Syndrome",
        shortDescription: "Treatment for muscle trigger point pain",
      },
      {
        id: "tailbone-pain",
        name: "Tailbone Pain (Coccydynia)",
        shortDescription: "Management of coccyx pain and discomfort",
      },
      {
        id: "whiplash-injury",
        name: "Whiplash Injury",
        shortDescription: "Treatment for neck injury from sudden movement",
      },
      {
        id: "lumbar-strain",
        name: "Lumbar Strain / Muscle Spasm",
        shortDescription: "Relief for lower back muscle strain and spasms",
      },
      {
        id: "radiculopathy",
        name: "Radiculopathy (Nerve Root Pain)",
        shortDescription: "Treatment for compressed or irritated nerve roots",
      },
    ],
  },
  {
    id: "venous",
    name: "VENOUS Treatment",
    description: "Specialized care for venous and circulatory conditions",
    icon: Heart,
    treatments: [
      {
        id: "diabetic-neuropathy",
        name: "Diabetic Neuropathy",
        shortDescription: "Comprehensive care for diabetic nerve damage",
      },
      {
        id: "varicose-veins",
        name: "Varicose Veins",
        shortDescription: "Treatment for enlarged and twisted veins",
      },
      {
        id: "peripheral-neuropathy",
        name: "Peripheral Neuropathy",
        shortDescription: "Management of peripheral nerve damage",
      },
      {
        id: "deep-vein-thrombosis",
        name: "Deep Vein Thrombosis (DVT)",
        shortDescription: "Treatment for blood clots in deep veins",
      },
      {
        id: "chronic-venous-insufficiency",
        name: "Chronic Venous Insufficiency (CVI)",
        shortDescription: "Care for poor venous blood flow",
      },
      {
        id: "restless-leg-syndrome",
        name: "Restless Leg Syndrome",
        shortDescription: "Treatment for uncomfortable leg sensations",
      },
      {
        id: "venous-ulcers",
        name: "Venous Ulcers",
        shortDescription: "Healing of chronic venous wounds",
      },
      {
        id: "lymphedema",
        name: "Lymphedema",
        shortDescription: "Management of lymphatic system swelling",
      },
      {
        id: "thrombophlebitis",
        name: "Thrombophlebitis",
        shortDescription: "Treatment for inflamed veins with clots",
      },
      {
        id: "post-thrombotic-syndrome",
        name: "Post-Thrombotic Syndrome",
        shortDescription: "Care for complications after blood clots",
      },
      {
        id: "spider-veins",
        name: "Spider Veins (Telangiectasia)",
        shortDescription: "Treatment for small visible blood vessels",
      },
      {
        id: "foot-drop",
        name: "Foot Drop",
        shortDescription: "Management of difficulty lifting foot",
      },
    ],
  },
  {
    id: "joints",
    name: "JOINTS Treatment",
    description: "Joint care and rehabilitation for optimal mobility",
    icon: Bone,
    treatments: [
      {
        id: "arthritis",
        name: "Arthritis",
        shortDescription: "Comprehensive arthritis management and pain relief",
      },
      {
        id: "shoulder-pain",
        name: "Shoulder Pain",
        shortDescription: "Treatment for various shoulder conditions",
      },
      {
        id: "knee-pain",
        name: "Knee Pain",
        shortDescription: "Comprehensive knee pain treatment and rehabilitation",
      },
      {
        id: "frozen-shoulder",
        name: "Frozen Shoulder",
        shortDescription: "Treatment for shoulder stiffness and adhesive capsulitis",
      },
      {
        id: "osteoarthritis",
        name: "Osteoarthritis",
        shortDescription: "Management of degenerative joint disease",
      },
      {
        id: "rheumatoid-arthritis",
        name: "Rheumatoid Arthritis",
        shortDescription: "Treatment for autoimmune joint inflammation",
      },
      {
        id: "hip-pain",
        name: "Hip Pain",
        shortDescription: "Comprehensive hip pain management",
      },
      {
        id: "elbow-pain",
        name: "Elbow Pain (Tennis Elbow / Golfer's Elbow)",
        shortDescription: "Treatment for elbow tendon inflammation",
      },
      {
        id: "ankle-pain",
        name: "Ankle Pain",
        shortDescription: "Management of ankle injuries and conditions",
      },
      {
        id: "joint-stiffness",
        name: "Joint Stiffness",
        shortDescription: "Treatment for reduced joint mobility",
      },
      {
        id: "bursitis",
        name: "Bursitis",
        shortDescription: "Management of inflamed fluid-filled sacs",
      },
      {
        id: "tendonitis",
        name: "Tendonitis",
        shortDescription: "Treatment for inflamed tendons",
      },
      {
        id: "sacroiliac-joint-dysfunction",
        name: "Sacroiliac Joint Dysfunction",
        shortDescription: "Treatment for SI joint problems",
      },
      {
        id: "wrist-pain",
        name: "Wrist Pain (Carpal Tunnel Syndrome)",
        shortDescription: "Management of wrist and nerve compression",
      },
      {
        id: "gout",
        name: "Gout",
        shortDescription: "Treatment for uric acid crystal arthritis",
      },
    ],
  },
  
  {
    id: "sports",
    name: "SPORTS Treatment",
    description: "Specialized sports injury rehabilitation and performance enhancement",
    icon: Trophy,
    treatments: [
      {
        id: "acl-tear",
        name: "ACL Tear",
        shortDescription: "Comprehensive ACL injury rehabilitation",
      },
      {
        id: "tennis-elbow",
        name: "Tennis Elbow",
        shortDescription: "Treatment for lateral epicondylitis",
      },
      {
        id: "golfers-elbow",
        name: "Golfer's Elbow",
        shortDescription: "Treatment for medial epicondylitis",
      },
      {
        id: "rotator-cuff-injury",
        name: "Rotator Cuff Injury",
        shortDescription: "Shoulder rotator cuff rehabilitation",
      },
      {
        id: "meniscus-tear",
        name: "Meniscus Tear",
        shortDescription: "Knee cartilage injury treatment",
      },
      {
        id: "ankle-sprain",
        name: "Ankle Sprain",
        shortDescription: "Comprehensive ankle injury rehabilitation",
      },
      {
        id: "shin-splints",
        name: "Shin Splints",
        shortDescription: "Treatment for medial tibial stress syndrome",
      },
      {
        id: "hamstring-strain",
        name: "Hamstring Strain",
        shortDescription: "Posterior thigh muscle injury treatment",
      },
      {
        id: "shoulder-dislocation",
        name: "Shoulder Dislocation",
        shortDescription: "Rehabilitation after shoulder dislocation",
      },
      {
        id: "patellar-tendonitis",
        name: "Patellar Tendonitis (Jumper's Knee)",
        shortDescription: "Knee tendon inflammation treatment",
      },
      {
        id: "plantar-fasciitis",
        name: "Plantar Fasciitis",
        shortDescription: "Heel and foot pain treatment",
      },
      {
        id: "runners-knee",
        name: "Runner's Knee",
        shortDescription: "Patellofemoral pain syndrome treatment",
      },
      {
        id: "achilles-tendonitis",
        name: "Achilles Tendonitis",
        shortDescription: "Achilles tendon inflammation treatment",
      },
      {
        id: "muscle-pull-tear",
        name: "Muscle Pull / Tear",
        shortDescription: "Muscle strain and tear rehabilitation",
      },
      {
        id: "stress-fractures",
        name: "Stress Fractures",
        shortDescription: "Treatment for overuse bone injuries",
      },
    ],
  },
]

// Detailed treatment data for individual treatment pages
export const detailedTreatments: Record<string, any> = {
  "laser-therapy-treatment": {
    name: "Laser Therapy",
    shortDescription: "Low-level laser therapy for pain relief and tissue healing",
    equipmentImage: "https://th.bing.com/th/id/OIP.eXjUsT9eQc-sDpyjxg9tZQHaE8?w=1200&h=800&rs=1&pid=ImgDetMain", //Laser therapy equipment image
    equipmentDescription:
      "State-of-the-art Class IV laser therapy device with multiple wavelengths for optimal tissue penetration and healing.",
    causes: [
      "Chronic pain conditions",
      "Tissue inflammation",
      "Poor wound healing",
      "Muscle tension and spasms",
      "Joint stiffness",
    ],
    stages: [
      "Initial assessment and diagnosis",
      "Treatment planning and laser selection",
      "Active treatment phase",
      "Monitoring and adjustment",
    ],
    treatmentProcess: [
      "Comprehensive pain assessment",
      "Laser therapy application",
      "Tissue stimulation and healing",
      "Progress monitoring",
      "Follow-up care",
    ],
    exercises: [
      {
        name: "Gentle Range of Motion",
        instruction:
          "Slowly move the treated area through its full range of motion. Hold each position for 10-15 seconds. Repeat 10 times, 3 sets daily.",
        image: "https://th.bing.com/th/id/OIP.96tjSUdVBJfWmbc4AN95IAAAAA?pid=ImgDet&w=300&h=300&rs=1", //exercise image for Laser Therapy
      },
      {
        name: "Light Stretching",
        instruction:
          "Perform gentle stretches of the treated area. Hold for 20-30 seconds. Repeat 3 times, twice daily.",
        image: "/images/exercises/cat-cow-stretch.jpg", // exercise image for Laser Therapy
      },
    ],
    precautions: [
      "Avoid direct sunlight on treated area",
      "Follow post-treatment care instructions",
      "Report any unusual reactions",
      "Maintain hydration",
      "Avoid strenuous activity immediately after treatment",
    ],
  },
  magnetotherapy: {
    name: "Magnetotherapy",
    shortDescription: "Magnetic field therapy for pain management and healing",
    equipmentImage: "https://www.celticsmr.co.uk/media/1592/pmt-qs_automatic.jpg?anchor=center&mode=crop&width=400&height=300&rnd=131793283910000000",//Magnetotherapy equipment image
    equipmentDescription:
      "Advanced pulsed electromagnetic field (PEMF) therapy device that delivers targeted magnetic fields to promote cellular healing.",
    causes: [
      "Chronic pain and inflammation",
      "Poor circulation",
      "Delayed healing",
      "Muscle fatigue",
      "Joint disorders",
    ],
    stages: [
      "Patient assessment and screening",
      "Treatment parameter selection",
      "Magnetic field application",
      "Progress evaluation",
    ],
    treatmentProcess: [
      "Initial consultation and evaluation",
      "Customized magnetic field therapy",
      "Cellular regeneration stimulation",
      "Regular progress monitoring",
      "Treatment optimization",
    ],
    exercises: [
      {
        name: "Active Range of Motion",
        instruction:
          "Perform active movements of the treated area. Move slowly and controlled. 10-15 repetitions, 2-3 times daily.",
        image: "https://discoveryfalklands.com/wp-content/uploads/2021/08/How-to-Get-Rid-of-Back-Ache.jpg", //exercise image for Magnetotherapy
      },
    ],
    diet: [
      {
        item: "Circulation-boosting foods",
        foods: ["Dark chocolate", "Citrus fruits", "Garlic", "Ginger"],
        image: "https://content.twinkl.co.uk/website/uploaded/is-dark-chocolate-good-for-immune-system-1440x810-1625125283.jpg",//diet image for Magnetotherapy
      },
    ],
    precautions: [
      "Not suitable for patients with pacemakers",
      "Avoid metal implants in treatment area",
      "Report any unusual sensations",
      "Follow treatment schedule consistently",
    ],
  },
  "spinal-decompression": {
    name: "Spinal Decompression",
    shortDescription: "Non-surgical spinal decompression for disc problems",
    equipmentImage: "/images/equipment/Spinal-Decompression-device.jpg",
    equipmentDescription:
      "Computer-controlled spinal decompression table that provides precise, gentle traction to relieve disc pressure and promote healing.",
    causes: [
      "Herniated or bulging discs",
      "Spinal stenosis",
      "Degenerative disc disease",
      "Sciatica",
      "Chronic back pain",
    ],
    stages: [
      "Comprehensive spinal assessment",
      "Treatment protocol development",
      "Progressive decompression therapy",
      "Stabilization and strengthening",
    ],
    treatmentProcess: [
      "Detailed spinal evaluation",
      "Computer-controlled decompression",
      "Gradual pressure relief",
      "Disc rehydration promotion",
      "Functional restoration",
    ],
    exercises: [
      {
        name: "Pelvic Tilts",
        instruction:
          "Lie on back, knees bent. Gently tilt pelvis to flatten lower back against floor. Hold 5 seconds, repeat 10 times.",
        image: "/images/exercises/Pelvic-Tilt-Exercise.jpg",
      },
      {
        name: "Knee to Chest",
        instruction: "Lie on back, bring one knee to chest. Hold 20 seconds, alternate legs. Repeat 5 times each leg.",
        image: "/images/exercises/Knee-to-Chest-Exercise.jpg",
      },
    ],
    diet: [
      {
        item: "Bone and disc health nutrients",
        foods: ["Calcium-rich foods", "Vitamin D sources", "Magnesium foods"],
        image: "/images/food/Calcium-rich-food.jpeg",
      },
    ],
    precautions: [
      "Not suitable for certain spinal conditions",
      "Avoid heavy lifting during treatment",
      "Report any increase in symptoms",
      "Follow post-treatment activity guidelines",
    ],
  },
  "matrix-rhythm-therapy": {
    name: "Matrix Rhythm Therapy",
    shortDescription: "Cellular regeneration therapy using magnetic resonance",
    equipmentImage: "/images/equipment/Matrix Rhythm Therapy-device.jpg",
    equipmentDescription:
      "Innovative matrix rhythm therapy device that uses magnetic resonance to stimulate cellular oscillations and promote natural healing processes.",
    causes: [
      "Cellular dysfunction",
      "Poor tissue metabolism",
      "Chronic inflammation",
      "Muscle tension",
      "Circulation problems",
    ],
    stages: [
      "Cellular assessment",
      "Rhythm therapy calibration",
      "Matrix stimulation treatment",
      "Cellular regeneration monitoring",
    ],
    treatmentProcess: [
      "Comprehensive tissue evaluation",
      "Magnetic resonance application",
      "Cellular oscillation stimulation",
      "Metabolic enhancement",
      "Tissue regeneration support",
    ],
    exercises: [
      {
        name: "Gentle Oscillatory Movements",
        instruction:
          "Perform gentle, rhythmic movements of the treated area. Focus on smooth, flowing motions. 5-10 minutes, twice daily.",
        image: "/images/exercises/Gentle Oscillatory Movements.jpg",
      },
    ],
    diet: [
      {
        item: "Cellular health nutrients",
        foods: ["Antioxidant-rich foods", "Omega-3 sources", "Green vegetables"],
        image: "/images/food/antioxidant-rich-foods.jpg",
      },
    ],
    precautions: [
      "Avoid electromagnetic interference",
      "Stay hydrated during treatment",
      "Report any unusual sensations",
      "Follow treatment frequency guidelines",
    ],
  },
  "targeted-radiofrequency": {
    name: "Targeted Radiofrequency",
    shortDescription: "Precise radiofrequency treatment for pain management",
    equipmentImage: "/images/equipment/targeted-radiofrequency-device.webp",
    equipmentDescription:
      "Advanced radiofrequency generator with precise temperature control for targeted pain relief and tissue healing.",
    causes: ["Chronic pain conditions", "Nerve-related pain", "Joint pain", "Muscle spasms", "Inflammatory conditions"],
    stages: [
      "Pain assessment and mapping",
      "Treatment planning",
      "Radiofrequency application",
      "Pain relief monitoring",
    ],
    treatmentProcess: [
      "Detailed pain evaluation",
      "Precise electrode placement",
      "Controlled radiofrequency delivery",
      "Temperature monitoring",
      "Post-treatment assessment",
    ],
    exercises: [
      {
        name: "Gentle Mobilization",
        instruction:
          "Perform gentle movements in the treated area. Start slowly and gradually increase range. 10-15 minutes, 2-3 times daily.",
        image: "/images/exercises/Gentle Mobility.jpg",
      },
    ],
    diet: [
      {
        item: "Anti-inflammatory nutrition",
        foods: ["Turmeric", "Ginger", "Green tea", "Berries"],
        image: "/images/food/anti-inflammatory-foods.jpg",
      },
    ],
    precautions: [
      "Avoid heat application immediately after treatment",
      "Monitor treatment site for any reactions",
      "Follow activity restrictions",
      "Report any unusual symptoms",
    ],
  },
}
