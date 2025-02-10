interface User {
  about: About;
}

interface About {
  name: string;
  dob: string;
  email: string;
  phone: string;
  image: string;
}

interface Career {
  cv: string;
  position: string;
  path: Path[];
}

interface Education {
  school: string;
  major: string;
  gpa: string;
  start: string;
  end: string;
}

interface Path {
  title: string;
  company: string;
  from: string;
  to: string;
}

interface Skill {
  title: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
}

interface MainSkill extends Skill {
  time: string;
  description: string;
}
