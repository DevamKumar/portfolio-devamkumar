import { NextResponse } from "next/server";
import profile from "@/data/profile.json";

function buildKnowledgeBase(): string {
  const sections: string[] = [];

  sections.push(`Name: ${profile.name}`);
  sections.push(`Headline: ${profile.headline}`);
  sections.push(`Location: ${profile.location}`);
  sections.push(`Email: ${profile.email}`);
  sections.push(`Introduction: ${profile.introduction}`);
  sections.push(`About: ${profile.about.join(" ")}`);

  sections.push("\nExperience:");
  profile.experience.forEach((exp) => {
    sections.push(`- ${exp.title} at ${exp.company} (${exp.period}): ${exp.responsibilities.join(", ")}`);
  });

  sections.push("\nCertifications:");
  profile.certifications.forEach((cert) => {
    sections.push(`- ${cert.name} (${cert.issuer})`);
  });

  sections.push("\nSkills:");
  Object.entries(profile.skills).forEach(([category, skills]) => {
    sections.push(`- ${category}: ${skills.join(", ")}`);
  });

  sections.push("\nProjects:");
  profile.projects.forEach((proj) => {
    sections.push(`- ${proj.title}: ${proj.description} (Technologies: ${proj.technologies.join(", ")})`);
  });

  sections.push("\nPublications:");
  profile.publications.forEach((pub) => {
    sections.push(`- ${pub.title}: ${pub.description}`);
  });

  sections.push("\nEducation:");
  profile.education.forEach((edu) => {
    sections.push(`- ${edu.degree} in ${edu.field} from ${edu.institution} (${edu.period}, CGPA: ${edu.cgpa})`);
  });

  return sections.join("\n");
}

function findAnswer(question: string): { answer: string; found: boolean } {
  const q = question.toLowerCase();
  const kb = buildKnowledgeBase();

  const keywords = [
    "experience", "work", "job", "role", "position",
    "skill", "technology", "tech", "language", "framework",
    "project", "built", "build", "developed",
    "certification", "certified", "aws", "kubernetes",
    "education", "degree", "university", "college",
    "publication", "research", "paper",
    "contact", "email", "linkedin", "github",
    "about", "who", "introduce", "background",
    "devam", "name",
    "cloud", "devops", "ai", "agent", "architect",
    "java", "python", "spring", "docker", "fastapi", "langgraph", "llm", "mcp", "rag",
    "resume", "cv",
    "iron mountain", "aerin", "leadmanch", "kodekloud",
  ];

  const isRelevant = keywords.some((kw) => q.includes(kw));

  if (!isRelevant) {
    return {
      answer: "I don't have enough information to answer that accurately. Let me notify Devam so he can get back to you.",
      found: false,
    };
  }

  if (q.includes("resume") || q.includes("cv")) {
    return {
      answer: `You can view and download Devam's latest resume here: ${profile.links.resume}`,
      found: true,
    };
  }

  if (q.includes("experience") || q.includes("work") || q.includes("job") || q.includes("role")) {
    const expInfo = profile.experience
      .map((e) => `${e.title} at ${e.company} (${e.period})`)
      .join("; ");
    return { answer: `Devam's professional experience includes: ${expInfo}.`, found: true };
  }

  if (q.includes("skill") || q.includes("technolog") || q.includes("tech stack")) {
    const skillInfo = Object.entries(profile.skills)
      .map(([cat, skills]) => `${cat}: ${skills.join(", ")}`)
      .join(". ");
    return { answer: `Devam's skills include: ${skillInfo}.`, found: true };
  }

  if (q.includes("project")) {
    const projInfo = profile.projects
      .map((p) => `${p.title} - ${p.description}`)
      .join("; ");
    return { answer: `Devam's projects include: ${projInfo}.`, found: true };
  }

  if (q.includes("certif")) {
    const certInfo = profile.certifications.map((c) => c.name).join(", ");
    return { answer: `Devam holds the following certifications: ${certInfo}.`, found: true };
  }

  if (q.includes("education") || q.includes("degree") || q.includes("university") || q.includes("college")) {
    const edu = profile.education[0];
    return {
      answer: `Devam holds a ${edu.degree} in ${edu.field} from ${edu.institution} (${edu.period}, CGPA: ${edu.cgpa}).`,
      found: true,
    };
  }

  if (q.includes("publication") || q.includes("research") || q.includes("paper")) {
    const pubInfo = profile.publications.map((p) => p.title).join(", ");
    return { answer: `Devam's publications include: ${pubInfo}.`, found: true };
  }

  if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
    return {
      answer: `You can reach Devam at ${profile.email}, on LinkedIn at ${profile.links.linkedin}, or on GitHub at ${profile.links.github}.`,
      found: true,
    };
  }

  if (q.includes("about") || q.includes("who") || q.includes("introduce") || q.includes("devam")) {
    return { answer: profile.about.join(" "), found: true };
  }

  if (q.includes("iron mountain")) {
    const exp = profile.experience[0];
    return {
      answer: `At ${exp.company}, Devam works as ${exp.title} (${exp.period}). Key achievements include: ${exp.responsibilities.slice(0, 3).join("; ")}.`,
      found: true,
    };
  }

  if (q.includes("cloud") || q.includes("aws")) {
    return {
      answer: `Devam has deep expertise in Cloud & DevOps: ${profile.skills["Cloud & DevOps"].join(", ")}. He holds AWS Certified Solutions Architect – Associate, AWS Certified AI Practitioner, and AWS Certified Cloud Practitioner certifications.`,
      found: true,
    };
  }

  if (q.includes("devops")) {
    return {
      answer: `Devam's DevOps skills include: ${profile.skills["Cloud & DevOps"].join(", ")}. He worked as a DevOps Engineer Intern at AerinIT Services and completed training at KodeKloud.`,
      found: true,
    };
  }

  if (q.includes("ai") || q.includes("agent") || q.includes("llm") || q.includes("machine learning")) {
    return {
      answer: `Devam's AI & LLM expertise includes: ${profile.skills["AI / LLM"].join(", ")}. At Iron Mountain, he designs and ships agentic AI workflows on enterprise IDP platforms using LangGraph, RAG, and MCP.`,
      found: true,
    };
  }

  if (q.includes("backend") || q.includes("api") || q.includes("fastapi") || q.includes("spring")) {
    return {
      answer: `Devam builds robust backend systems and APIs using: ${profile.skills["Backend & APIs"].join(", ")}. He specializes in Python (FastAPI) and Java (Spring Boot) microservices.`,
      found: true,
    };
  }

  // Generic fallback with context from KB
  return {
    answer: `Based on Devam's profile: ${profile.introduction} His key skills span ${Object.keys(profile.skills).join(", ")}. Would you like to know about something specific?`,
    found: true,
  };
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "No message provided" }, { status: 400 });
    }

    const { answer, found } = findAnswer(message);

    return NextResponse.json({
      response: answer,
      showLeadForm: !found,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
