import ScrollContainer from "react-indiana-drag-scroll";

// Source: flaticon.com
const skills = [
  { name: "React", image: "skill_react.png" },
  { name: "JavaScript", image: "skill_js.png" },
  { name: "TypeScript", image: "skill_ts.png" },
  { name: "NodeJS", image: "skill_node.png" },
  { name: "Python", image: "skill_py.png" },
  { name: "Git", image: "skill_git.png" },
  { name: "Jest", image: "skill_jest.png" },
  { name: "Redux", image: "skill_rtk.png", background: 'white' },
];

// https://tailwindui.com/components/marketing/sections/logo-clouds
// Simple with heading on brand
export default function Skills() {
  return (
    <div className="bg-gradient-to-r from-indigo-700 to-sky-600" id='skills'>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">Skills</h2>
        <ScrollContainer className="scroll-container">
          <div className="flex flex-row mt-8 lg:mt-10">
            {skills.map((skill) => (
              <>
                <div
                  className="mx-3 text-white text-center text-2xl font-bold"
                  key={skill.name}
                  style={{ minWidth: "100px" }}
                >
                  {skill.name}
                  <img
                    className="mx-auto"
                    src={skill.image}
                    style={{ maxWidth: "55px", background: skill.background, borderRadius: '10px' }}
                  />
                </div>
              </>
            ))}
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
}


