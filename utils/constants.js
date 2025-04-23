// ✅ Required Skills Enum
export const Skills = {
	REACT: "React",
	REACT_JS: "React.js",
	REACT_JS_DEVELOPER: "React js Developer",
	NEXT_JS: "Next.js",
	NEXTJS: "NextJS",
	REACT_NATIVE: "React Native",
	REACT_NATIVE_DEVELOPER: "React Native Developer",
	JAVASCRIPT: "JavaScript",
	JAVAS_CRIPT: "Java Script",
	HTML: "HTML",
	CSS: "CSS",
	// TYPESCRIPT: "TypeScript",
	REDUX: "Redux",
	NODE_JS: "Node.js",
	// EXPRESS_JS: "Express.js",
	// MONGODB: "MongoDB",
	// POSTGRESQL: "PostgreSQL",
	FIREBASE: "Firebase",
	REST_APIS: "REST APIs",
	// GRAPHQL: "GraphQL",
	// DOCKER: "Docker",
	// AWS: "AWS",
	// CI_CD: "CI/CD"
};

// ✅ Job Roles Enum
export const JobRoles = {
	SOFTWARE_DEVELOPER: "Software Developer",
	REACT_DEVELOPER: "React Developer",
	NEXTJS_DEVELOPER: "Next.js Developer",
	REACT_NATIVE_DEVELOPER: "React Native Developer",
	FULL_STACK_DEVELOPER: "Full Stack Developer",
	FRONTEND_DEVELOPER: "Frontend Developer",
	BACKEND_DEVELOPER: "Backend Developer"
};

// ✅ Years of Experience Enum
export const ExperienceLevel = {
	ENTRY_LEVEL: "0-2 Years",
	MID_LEVEL: "3-5 Years",
	SENIOR_LEVEL: "6+ Years"
};

// ✅ Locations Enum
export const Locations = {
	MUMBAI: "Mumbai",
	BANGALORE: "Bangalore",
	HYDERABAD: "Hyderabad",
	DELHI: "Delhi",
	CHENNAI: "Chennai",
	PUNE: "Pune",
	REMOTE: "Remote"
};

// ✅ Convert Enums to Arrays for Easy Use
export const MY_SKILLS = Object.values(Skills);
export const MY_PREFERRED_ROLES = Object.values(JobRoles);
export const MY_EXPERIENCE_LEVELS = Object.values(ExperienceLevel);
export const MY_PREFERRED_LOCATIONS = Object.values(Locations);
