export const schoolConfig = {
  name: "Sunrise Public School",
  tagline: "Nurturing Minds, Building Futures",
  established: "2005",
  logo: "/logo.png", // replace with actual logo

  theme: {
    primary: "#1a3c6e",    // deep blue
    secondary: "#f5a623",  // golden yellow
    accent: "#e8f0fe",
  },

  contact: {
    address: "123, School Road, City, State - 000000",
    phone: "+91 98765 43210",
    email: "info@sunriseschool.edu.in",
    mapEmbed: "", // paste Google Maps embed URL here
  },

  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },

  nav: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Vision & Mission", href: "/about#vision" },
        { label: "Principal's Message", href: "/about#principal" },
        { label: "Director's Message", href: "/about#director" },
      ],
    },
    {
      label: "Academics",
      href: "/academics",
      children: [
        { label: "Curriculum", href: "/academics#curriculum" },
        { label: "Exam Policy", href: "/academics#exam-policy" },
        { label: "Academic Calendar", href: "/academics#calendar" },
        { label: "Results", href: "/academics#results" },
      ],
    },
    {
      label: "Admissions",
      href: "/admissions",
      children: [
        { label: "Admission Procedure", href: "/admissions#procedure" },
        { label: "Fee Structure", href: "/admissions#fee" },
        { label: "Online Enquiry", href: "/admissions#enquiry" },
      ],
    },
    {
      label: "Facilities",
      href: "/facilities",
      children: [
        { label: "Library", href: "/facilities#library" },
        { label: "Labs", href: "/facilities#labs" },
        { label: "Smart Class", href: "/facilities#smart-class" },
        { label: "Sports", href: "/facilities#sports" },
        { label: "Art & Music", href: "/facilities#art-music" },
      ],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Events", href: "/events" },
    { label: "Downloads", href: "/downloads" },
    { label: "Contact", href: "/contact" },
  ],

  home: {
    heroSlides: [
      { image: "/images/hero1.jpg", title: "Welcome to Sunrise Public School", subtitle: "Where Every Child Shines" },
      { image: "/images/hero2.jpg", title: "Excellence in Education", subtitle: "Academics · Sports · Arts" },
      { image: "/images/hero3.jpg", title: "Admissions Open 2025-26", subtitle: "Enroll Your Child Today" },
    ],
    stats: [
      { label: "Years of Excellence", value: "20+" },
      { label: "Students", value: "1500+" },
      { label: "Expert Faculty", value: "80+" },
      { label: "Awards Won", value: "50+" },
    ],
    notices: [
      "Admission open for session 2025-26. Apply now.",
      "Annual Sports Day on 25th March 2025.",
      "Holiday homework uploaded in Downloads section.",
      "Parent-Teacher Meeting scheduled for 30th March.",
    ],
  },

  about: {
    vision: "To create a learning environment that fosters curiosity, creativity, and character.",
    mission: "To provide holistic education that empowers every child to achieve their fullest potential.",
    principalName: "Mrs. Sunita Sharma",
    principalMessage: "At Sunrise Public School, we believe every child is unique and capable of greatness. Our dedicated faculty and modern infrastructure ensure a nurturing environment for all-round development.",
    directorName: "Mr. Rajesh Gupta",
    directorMessage: "Our school was founded with a vision to make quality education accessible. We are committed to continuous improvement and innovation in teaching and learning.",
  },

  facilities: [
    { title: "Library", icon: "📚", description: "A well-stocked library with thousands of books, magazines, and digital resources." },
    { title: "Science Labs", icon: "🔬", description: "Fully equipped Physics, Chemistry, and Biology labs for hands-on learning." },
    { title: "Computer Lab", icon: "💻", description: "Modern computer lab with high-speed internet and latest software." },
    { title: "Smart Classes", icon: "🖥️", description: "Interactive smart boards in every classroom for engaging digital learning." },
    { title: "Sports Ground", icon: "⚽", description: "Large playground with facilities for cricket, football, basketball, and athletics." },
    { title: "Art & Craft", icon: "🎨", description: "Dedicated art room to nurture creativity and artistic expression." },
    { title: "Music & Dance", icon: "🎵", description: "Professional music and dance studio with trained instructors." },
    { title: "Abacus & Vedic Maths", icon: "🧮", description: "Special programs to sharpen mental arithmetic skills." },
  ],

  admissions: {
    classes: ["Play Group", "Nursery", "LKG", "UKG", "Class I", "Class II", "Class III", "Class IV", "Class V"],
    procedure: [
      "Fill the online enquiry form or visit the school office.",
      "Collect the admission form from the school reception.",
      "Submit the filled form with required documents.",
      "Attend the interaction session with the child.",
      "Pay the admission fee to confirm the seat.",
    ],
    documents: [
      "Birth Certificate",
      "Aadhar Card (Child & Parents)",
      "Previous class report card",
      "Passport size photographs (4)",
      "Transfer Certificate (if applicable)",
    ],
  },

  downloads: [
    { title: "Academic Calendar 2025-26", file: "/downloads/academic-calendar.pdf" },
    { title: "Holiday Homework", file: "/downloads/holiday-homework.pdf" },
    { title: "Date Sheet", file: "/downloads/datesheet.pdf" },
    { title: "Fee Structure", file: "/downloads/fee-structure.pdf" },
    { title: "Prospectus", file: "/downloads/prospectus.pdf" },
  ],
};
