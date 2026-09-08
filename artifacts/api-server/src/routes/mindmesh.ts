import { Router, type IRouter } from "express";
import {
  AssessmentResult,
  AuthSession,
  GenerateQuizBody,
  GenerateQuizResponse,
  GetAchievementsResponse,
  GetAnalyticsResponse,
  GetCompetencyResponse,
  GetCourseParams,
  GetCourseResponse,
  GetCoursesResponse,
  GetDashboardResponse,
  GetGardenResponse,
  GetIntegrationsResponse,
  GetProfileResponse,
  GetQuizParams,
  GetQuizResponse,
  GetRecommendationsResponse,
  GetSkillDnaResponse,
  LoginBody,
  LoginResponse,
  QuizResult,
  RecordLearningTimeBody,
  RecordLearningTimeResponse,
  SubmitAssessmentBody,
  SubmitAssessmentResponse,
  SubmitQuizBody,
  SubmitQuizParams,
  SubmitQuizResponse,
} from "@workspace/api-zod";
import {
  achievements,
  activity,
  analytics,
  competency,
  courses,
  gardens,
  integrations,
  learningHours,
  profile,
  quiz,
  recommendations,
  registerLearning,
  skillDna,
} from "../lib/mindmesh-data";

const router: IRouter = Router();

const dashboard = () => ({
  profile,
  competency,
  recommendations,
  garden: gardens,
  dna: skillDna,
  achievements,
  courses,
  activity,
  learningHours,
  streak: gardens.streak,
});

router.post("/auth/login", (req, res) => {
  const body = LoginBody.parse(req.body);
  const role = body.email.startsWith("admin")
    ? "Admin"
    : body.email.startsWith("trainer")
      ? "Trainer"
      : profile.role;
  const user = { ...profile, role };
  res.json(LoginResponse.parse({ token: `demo-${role.toLowerCase()}`, user }));
});

router.get("/dashboard", (_req, res) => {
  res.json(GetDashboardResponse.parse(dashboard()));
});

router.get("/profile", (_req, res) => {
  res.json(GetProfileResponse.parse(profile));
});

router.get("/competency", (_req, res) => {
  res.json(GetCompetencyResponse.parse(competency));
});

router.get("/recommendations", (_req, res) => {
  res.json(GetRecommendationsResponse.parse(recommendations));
});

router.get("/integrations", (_req, res) => {
  res.json(GetIntegrationsResponse.parse(integrations));
});

router.get("/courses", (_req, res) => {
  res.json(GetCoursesResponse.parse(courses));
});

router.get("/courses/:id", (req, res) => {
  const { id } = GetCourseParams.parse(req.params);
  const course = courses.find((item) => item.id === id) ?? courses[0];
  const detail = {
    ...course,
    objectives: [
      "Clean and validate survey datasets with repeatable Python workflows.",
      "Create quality checks that surface anomalies before publication.",
      "Explain reproducible analysis to technical and policy colleagues.",
    ],
    modules: [
      { title: "The statistical Python toolkit", duration: "28 min", completed: true },
      { title: "Working with official datasets", duration: "42 min", completed: true },
      { title: "Data quality checks", duration: "36 min", completed: false },
      { title: "A reusable survey pipeline", duration: "55 min", completed: false },
      { title: "Capstone: automate a validation report", duration: "1h 10m", completed: false },
    ],
  };
  res.json(GetCourseResponse.parse(detail));
});

router.get("/garden", (_req, res) => {
  res.json(GetGardenResponse.parse(gardens));
});

router.get("/skill-dna", (_req, res) => {
  res.json(GetSkillDnaResponse.parse(skillDna));
});

router.get("/achievements", (_req, res) => {
  res.json(GetAchievementsResponse.parse(achievements));
});

router.get("/analytics", (_req, res) => {
  res.json(GetAnalyticsResponse.parse(analytics));
});

router.post("/assessment/submit", (req, res) => {
  const body = SubmitAssessmentBody.parse(req.body);
  const rawScore = body.answers.length
    ? Math.round((body.answers.filter((answer) => answer > 0).length / body.answers.length) * 100)
    : 0;
  const score = Math.max(68, Math.min(96, rawScore));
  res.json(
    SubmitAssessmentResponse.parse({
      score,
      level: score >= 85 ? "Advanced" : score >= 65 ? "Proficient" : "Developing",
      strong: ["Survey Design", "Data Visualization"],
      improve: ["Sampling", "Python", "SQL"],
      critical: "Cloud Computing",
      message:
        "Your statistical foundation is strong, but a focused technical pathway will help you lead the next generation of official data systems.",
    }),
  );
});

router.post("/quiz/generate", (req, res) => {
  const body = GenerateQuizBody.parse(req.body);
  const generated = {
    ...quiz,
    id: `generated-${Date.now()}`,
    title: body.title || "AI-generated knowledge check",
    topic: "Uploaded learning material",
  };
  res.json(GenerateQuizResponse.parse(generated));
});

router.get("/quiz/:id", (req, res) => {
  GetQuizParams.parse(req.params);
  res.json(GetQuizResponse.parse(quiz));
});

router.post("/quiz/:id/submit", (req, res) => {
  SubmitQuizParams.parse(req.params);
  const body = SubmitQuizBody.parse(req.body);
  const correct = body.answers.reduce(
    (total, answer, index) => total + (answer === quiz.questions[index]?.answer ? 1 : 0),
    0,
  );
  const score = Math.round((correct / quiz.totalQuestions) * 100);
  res.json(
    SubmitQuizResponse.parse({
      score,
      correct,
      total: quiz.totalQuestions,
      feedback:
        score >= 75
          ? "You performed strongly in Sampling. Your reasoning is ready for an applied survey design challenge."
          : "You have a solid base in Sampling. Revisit the modules on frames and design effects before the advanced assessment.",
      skillUpdate: `Sampling competency updated from 55% to ${Math.min(82, 55 + Math.round(score / 10))}%.`,
    }),
  );
});

router.post("/learning/time", (req, res) => {
  const body = RecordLearningTimeBody.parse(req.body);
  registerLearning(body.minutes);
  res.json(
    RecordLearningTimeResponse.parse({
      learningHours,
      gardenGrowth: gardens.growth,
      shieldProgress: achievements.nextProgress,
      message: `Logged ${body.minutes} minutes. Your Python plant is showing new growth.`,
    }),
  );
});

export default router;