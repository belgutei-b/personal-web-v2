const terms = [
  {
    title: "T3 2025",
    courses: [
      "COMP9242: Advanced Operating Systems",
      "COMP6447: System and Software Security Assessment",
      "COMP4920: Professional Issues and Ethics in Information Technology",
    ],
  },
  {
    title: "T2 2025",
    courses: [
      "COMP3900: Computer Science Project",
      "COMP9417: Machine Learning and Data Mining",
      "ARTS2375: Philosophical Logic",
    ],
  },
  {
    title: "T1 2025",
    courses: [
      "COMP6843: Extended Web Application Security and Testing",
      "PSYC1001: Psychology 1A",
    ],
  },
  {
    title: "T3 2024",
    courses: [
      "COMP3161: Concepts of Programming Languages",
      "COMP6841: Extended Security Engineering and Cyber Security",
      "COMP3222: Digital Circuits and Systems",
    ],
  },
  {
    title: "T2 2024",
    courses: [
      "COMP3141: Software System Design and Implementation",
      "COMP9517: Computer Vision",
    ],
  },
  {
    title: "T1 2024",
    courses: [
      "COMP3891: Extended Operating Systems",
      "COMP3331: Computer Networks and Applications",
      "COMP3411: Artificial Intelligence",
    ],
  },
  {
    title: "T3 2023",
    courses: [
      "COMP1521: Computer Systems Fundamentals",
      "COMP2511: Object-Oriented Design & Programming",
      "MATH3411: Information, Codes and Ciphers",
    ],
  },
  {
    title: "T2 2023",
    courses: [
      "COMP2521: Data Structures and Algorithms",
      "COMP1531: Software Engineering Fundamentals",
      "MATH1241: Higher Mathematics 1B",
    ],
  },
  {
    title: "T1 2023",
    courses: ["MATH1081: Discrete Mathematics", "MATH1131: Mathematics 1A"],
  },
];

function TermCard({ term }: { term: (typeof terms)[number] }) {
  return (
    <div className="flex flex-col p-4 border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:border-blue-700 dark:hover:border-emerald-400 transition-colors duration-200">
      <div className="mb-3 text-black dark:text-stone-200 text-base md:text-lg">
        {term.title}
      </div>
      <div className="flex flex-col gap-1">
        {term.courses.map((course) => (
          <span
            key={course}
            className="text-sm dark:text-stone-200 leading-relaxed"
          >
            <span className="text-blue-700 dark:text-emerald-400 font-medium mr-2">
              ·
            </span>
            {course}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Uni() {
  return (
    <div
      className="px-2 md:px-0"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <p className="mb-4 text-xl">University</p>
      <div className="flex flex-col gap-4">
        {terms.map((term) => (
          <TermCard key={term.title} term={term} />
        ))}
      </div>
    </div>
  );
}
