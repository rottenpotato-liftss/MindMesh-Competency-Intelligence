export const profile = {
  name: "Priya Sharma",
  designation: "Statistical Officer",
  department: "National Sample Survey Office",
  role: "Statistical Officer",
  assignment: "Household Consumption Survey 2025",
  education: "M.Sc. Statistics, University of Delhi",
  experience: 7,
  futureGoal: "Lead a modern data quality and AI enablement team",
  avatarInitials: "PS",
};

export const competency = {
  overall: 68,
  level: "Proficient",
  domains: [
    { name: "Statistical", score: 72, color: "#9AE6B4" },
    { name: "Technical", score: 48, color: "#B8A4FF" },
    { name: "Digital governance", score: 64, color: "#72D5D0" },
    { name: "Managerial", score: 78, color: "#F4C77D" },
  ],
  skills: [
    { name: "Survey Design", category: "Statistical", score: 82, target: 90, delta: 6, level: "Advanced" },
    { name: "Sampling", category: "Statistical", score: 55, target: 78, delta: 11, level: "Developing" },
    { name: "National Accounts", category: "Statistical", score: 70, target: 84, delta: 4, level: "Proficient" },
    { name: "Python", category: "Technical", score: 42, target: 72, delta: 16, level: "Developing" },
    { name: "R", category: "Technical", score: 60, target: 76, delta: 8, level: "Developing" },
    { name: "SQL", category: "Technical", score: 48, target: 74, delta: 13, level: "Developing" },
    { name: "Data Visualization", category: "Technical", score: 78, target: 86, delta: 7, level: "Proficient" },
    { name: "AI / ML", category: "Technical", score: 35, target: 65, delta: 18, level: "Beginner" },
    { name: "Cloud Computing", category: "Digital governance", score: 30, target: 62, delta: 22, level: "Beginner" },
    { name: "Cybersecurity", category: "Digital governance", score: 65, target: 76, delta: 5, level: "Proficient" },
    { name: "Leadership", category: "Managerial", score: 75, target: 84, delta: 3, level: "Proficient" },
    { name: "Communication", category: "Managerial", score: 80, target: 88, delta: 4, level: "Advanced" },
  ],
  strongSkills: ["Survey Design", "Data Visualization", "Communication"],
  gaps: ["Python", "SQL", "AI / ML"],
  criticalGap: "Cloud Computing",
  insight: "Your statistical foundation is strong. Building technical fluency in Python, SQL and cloud will unlock your next role in modern data quality.",
};

export const recommendations = [
  {
    id: "rec-python",
    title: "Python for Official Statistics",
    provider: "iGOT Karmayogi",
    skill: "Python",
    level: "Developing",
    targetLevel: "Proficient",
    duration: "6h 20m",
    priority: "High",
    reason: "Closes your largest technical gap and supports automated survey quality checks.",
    kind: "course",
  },
  {
    id: "rec-sampling",
    title: "Modern Sampling Design",
    provider: "NSSTA",
    skill: "Sampling",
    level: "Developing",
    targetLevel: "Advanced",
    duration: "2 days",
    priority: "High",
    reason: "Recommended after your assessment showed room to strengthen estimator selection.",
    kind: "programme",
  },
  {
    id: "rec-cloud",
    title: "Cloud Foundations for Government",
    provider: "iGOT Karmayogi",
    skill: "Cloud Computing",
    level: "Beginner",
    targetLevel: "Developing",
    duration: "4h 45m",
    priority: "Critical",
    reason: "Your most urgent gap for the department's shift to secure government cloud.",
    kind: "course",
  },
];

export const courses = [
  {
    id: "python-official-stats",
    title: "Python for Official Statistics",
    provider: "iGOT Karmayogi",
    skill: "Python",
    duration: "6h 20m",
    progress: 42,
    lessons: 5,
    totalLessons: 12,
    color: "#B8A4FF",
    description: "Build the practical Python fluency needed to clean, validate and explain official datasets.",
  },
  {
    id: "data-storytelling",
    title: "Data Storytelling for Policy",
    provider: "TPAC",
    skill: "Data Visualization",
    duration: "3h 10m",
    progress: 76,
    lessons: 8,
    totalLessons: 10,
    color: "#72D5D0",
    description: "Turn complex statistical findings into clear decisions for policy leaders.",
  },
  {
    id: "secure-cloud",
    title: "Secure Government Cloud",
    provider: "iGOT Karmayogi",
    skill: "Cloud Computing",
    duration: "4h 45m",
    progress: 0,
    lessons: 0,
    totalLessons: 8,
    color: "#F4C77D",
    description: "Understand identity, data boundaries and safe cloud architecture for public systems.",
  },
];

export const gardens = {
  growth: 64,
  totalHours: 18.4,
  plantsUnlocked: 7,
  skillsCultivated: 12,
  streak: 9,
  recentlyGrown: "Python",
  plants: [
    { skill: "Survey Design", type: "tree", growth: 90, score: 82, status: "Mastery path", color: "#9AE6B4", x: 18, y: 56 },
    { skill: "Data Visualization", type: "flower", growth: 78, score: 78, status: "Blooming", color: "#72D5D0", x: 38, y: 35 },
    { skill: "Leadership", type: "plant", growth: 74, score: 75, status: "Growing", color: "#F4C77D", x: 61, y: 53 },
    { skill: "Python", type: "sapling", growth: 42, score: 42, status: "New growth", color: "#B8A4FF", x: 77, y: 30 },
    { skill: "SQL", type: "seedling", growth: 29, score: 48, status: "Just planted", color: "#8AA7FF", x: 49, y: 69 },
    { skill: "Sampling", type: "plant", growth: 55, score: 55, status: "Growing", color: "#C4E77B", x: 26, y: 25 },
  ],
};

export const skillDna = {
  diversityScore: 74,
  strongestGene: "Survey Design",
  fastestGrowing: "Python",
  recentlyAdded: "Cloud Computing",
  genes: [
    { skill: "Survey Design", category: "Statistical", score: 82, level: "Advanced", color: "#9AE6B4" },
    { skill: "Python", category: "Technical", score: 42, level: "Developing", color: "#B8A4FF" },
    { skill: "Data Visualization", category: "Technical", score: 78, level: "Proficient", color: "#72D5D0" },
    { skill: "Leadership", category: "Managerial", score: 75, level: "Proficient", color: "#F4C77D" },
    { skill: "Cybersecurity", category: "Digital", score: 65, level: "Proficient", color: "#8AA7FF" },
    { skill: "Sampling", category: "Statistical", score: 55, level: "Developing", color: "#C4E77B" },
    { skill: "AI / ML", category: "Technical", score: 35, level: "Beginner", color: "#E49DDB" },
  ],
};

export const achievements = {
  current: "Silver Shield II",
  currentTier: "Silver",
  next: "Silver Shield III",
  nextProgress: 68,
  shields: [
    { name: "Bronze Shield I", tier: "Bronze", unlocked: true, progress: 100, requirement: "Complete your first course" },
    { name: "Bronze Shield II", tier: "Bronze", unlocked: true, progress: 100, requirement: "Complete 3 courses" },
    { name: "Bronze Shield III", tier: "Bronze", unlocked: true, progress: 100, requirement: "Earn 80% on a quiz" },
    { name: "Silver Shield I", tier: "Silver", unlocked: true, progress: 100, requirement: "Reach a 7-day streak" },
    { name: "Silver Shield II", tier: "Silver", unlocked: true, progress: 100, requirement: "Log 15 learning hours" },
    { name: "Silver Shield III", tier: "Silver", unlocked: false, progress: 68, requirement: "Improve 3 skills by 10 points" },
    { name: "Gold Shield I", tier: "Gold", unlocked: false, progress: 32, requirement: "Master 5 skills" },
    { name: "Platinum Shield", tier: "Platinum", unlocked: false, progress: 12, requirement: "Reach an overall competency of 85%" },
  ],
};

export const integrations = {
  igot: [
    { title: "Python for Official Statistics", status: "In progress", provider: "iGOT Karmayogi", relevance: 96 },
    { title: "Secure Government Cloud", status: "Recommended", provider: "iGOT Karmayogi", relevance: 89 },
    { title: "Responsible AI in Public Systems", status: "New", provider: "iGOT Karmayogi", relevance: 78 },
  ],
  nssta: [
    { title: "Advanced Sampling & Estimation", dates: "14–16 Oct 2026", mode: "Residential", duration: "3 days", relevance: 94 },
    { title: "Data Quality for SDG Indicators", dates: "03–04 Nov 2026", mode: "Hybrid", duration: "2 days", relevance: 86 },
    { title: "Leadership in Statistical Systems", dates: "18–20 Nov 2026", mode: "In person", duration: "3 days", relevance: 72 },
  ],
};

export const analytics = {
  totalLearners: 1248,
  averageCompetency: 64,
  completionRate: 71,
  learningHours: 8234.5,
  departments: [
    { name: "NSSO", score: 69, learners: 324 },
    { name: "MoSPI", score: 66, learners: 218 },
    { name: "State DES", score: 58, learners: 462 },
    { name: "NSSTA", score: 73, learners: 124 },
  ],
  gaps: [
    { skill: "AI / ML", percentage: 62 },
    { skill: "Cloud Computing", percentage: 56 },
    { skill: "Python", percentage: 48 },
    { skill: "Data Privacy", percentage: 34 },
  ],
  trend: [
    { month: "Apr", score: 57 },
    { month: "May", score: 59 },
    { month: "Jun", score: 61 },
    { month: "Jul", score: 62 },
    { month: "Aug", score: 64 },
    { month: "Sep", score: 68 },
  ],
};

export const activity = [
  { title: "Python gene strengthened", subtitle: "Quiz · 84% score", time: "Today, 11:42", type: "dna" },
  { title: "Silver Shield II unlocked", subtitle: "15 learning hours reached", time: "Yesterday", type: "shield" },
  { title: "Sampling assessment completed", subtitle: "AI analysis ready", time: "2 days ago", type: "assessment" },
  { title: "Data Storytelling module 8", subtitle: "76% course progress", time: "4 days ago", type: "course" },
];

export let learningHours = 18.4;

export function registerLearning(minutes: number) {
  learningHours = Number((learningHours + minutes / 60).toFixed(1));
  gardens.totalHours = learningHours;
  gardens.growth = Math.min(100, gardens.growth + Math.max(1, Math.round(minutes / 12)));
  achievements.nextProgress = Math.min(100, achievements.nextProgress + Math.max(1, Math.round(minutes / 20)));
}

export const quiz = {
  id: "quiz-sampling-basics",
  title: "Sampling & Estimation Check-in",
  topic: "Sampling",
  totalQuestions: 4,
  questions: [
    { id: 1, question: "Which sampling method gives every unit in the population an equal chance of selection?", options: ["Quota sampling", "Simple random sampling", "Purposive sampling", "Snowball sampling"], answer: 1, explanation: "Simple random sampling gives each unit an equal and independent chance of being selected.", difficulty: "Foundational" },
    { id: 2, question: "What does a sampling frame represent?", options: ["The final survey report", "A list of all units from which a sample is drawn", "The survey budget", "A questionnaire template"], answer: 1, explanation: "A sampling frame is the operational list of population units used for selection.", difficulty: "Foundational" },
    { id: 3, question: "Why is stratification useful in official surveys?", options: ["It removes all non-response", "It ensures important subgroups are represented", "It always reduces sample size", "It replaces weighting"], answer: 1, explanation: "Stratification improves representation and can improve precision when strata are internally homogeneous.", difficulty: "Applied" },
    { id: 4, question: "A design effect greater than 1 generally indicates:", options: ["More precision than SRS", "No need for weights", "Less precision than an equivalent SRS", "A perfect response rate"], answer: 2, explanation: "Clustering or other design features can increase variance relative to simple random sampling.", difficulty: "Applied" },
  ],
};