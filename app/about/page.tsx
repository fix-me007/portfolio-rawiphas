import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-4 sm:mb-6">About Rawiphas</h1>
      <p className="text-lg text-gray-400">
        I am a Full-stack developer building web applications with a focus on clean, scalable system design. I integrate LLMs and RAG into production apps, and I'm currently deepening my skills in building custom LLM workflows and agents. Explore my <Link href="/projects" className="text-gray-300 hover:underline">projects</Link> to see it in practice.
      </p>
    </div>
  );
}
