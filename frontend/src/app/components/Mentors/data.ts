// import { BACKEND_URL, SERVER_URL } from "@/app/utils/config";
// import UserEntity from "@/app/types/userentity";

// const transformMentorData = (mentor: any) => ({
//   name: mentor.attributes.name,
//   position: mentor.attributes.position,
//   image: SERVER_URL + mentor.attributes.image.data.attributes.url,
//   linkedin_url: mentor.attributes.linkedin_url,
// });

// const fetchData = async () => {
//   try {
//     const response = await fetch(`${BACKEND_URL}/api/mentors?populate=image`, {
//       cache: "no-store",
//     });

//     if (!response.ok) {
//       console.log(`Failed to fetch data. Status: ${response.status}`);
//       return [];
//     }

//     const data = await response.json();

//     const mentors: UserEntity[] = data.data.map(transformMentorData);

//     return mentors;
//   } catch (error) {
//     console.error("Error fetching judges");
//     return [];
//   }
// };

// export default fetchData;
import Mentors from "@/app/types/mentors"

const Mentors_value: Mentors[] = [
  {
    name: "Bishal Joshi",
    position: "Software Engineer",
    linkedin_url: "https://www.linkedin.com/in/bishal-joshi-7a3711203",
    image: "https://ghostuf.github.io/static_images/bishal_joshi.jpeg",
  },
  {
    name: "Toshika Ojha",
    position: "Client Success Consultant",
    linkedin_url: "https://www.linkedin.com/in/toshikaojha/",
    image:"https://ghostuf.github.io/static_images/toshika_ojha.jpg"
  },
  {
    name: "Luja Chitrakar",
    position: "Clock B Tech",
    linkedin_url: "https://www.linkedin.com/in/luja-chitrakar/",
    image:"https://ghostuf.github.io/static_images/luja_chitrakar.jpeg"
  },
  {
    name: "Mala Deep Upadhaya",
    position: "Data Consultant - Dataksha Analytics",
    linkedin_url: "https://www.linkedin.com/in/maladeep",
    image: "https://ghostuf.github.io/static_images/mala_deep_upadhyaya.jpg"
  },
  // {
  //   name: "Elisha Baniya",
  //   position: "QA - Maitri Services",
  //   linkedin_url: "https://www.linkedin.com/in/elishabaniya",
  //   image: "https://ghostuf.github.io/static_images/elisha_baniya.jpg"
  // },
  {
    name: "Yashaswee Sakha",
    position: "UI/UX Engineer, Deerhold Ltd.",
    linkedin_url: "https://www.linkedin.com/in/yashaswee-sakha/",
    image: "https://ghostuf.github.io/static_images/yashaswee_sakha.jpg"
  },
  {
    name: "Mamata Maharjan",
    position: "Senior Software Engineer",
    linkedin_url: "https://www.linkedin.com/in/mamata-maharjan-b4197b178",
    image: "https://ghostuf.github.io/static_images/mamata_maharjan.jpg"
  },
  {
    name: "Sushan Shakya",
    position: "Full Stack Developer - RIMES",
    linkedin_url: "https://www.linkedin.com/in/sushan-shakya-8953711a6/",
    image: "https://ghostuf.github.io/static_images/sushan_shakya.jpg"
  },
  {
    name: "Prashant Malla",
    position: "Embedded System Engineer - Truenary Solutions",
    linkedin_url: "https://www.linkedin.com/in/prashant-malla-139339b2",
    image: "https://ghostuf.github.io/static_images/prashant_malla.jpg"
  },
  {
    name: "Saru Manandhar",
    position: "Software Engineer - Leapfrog Technology",
    linkedin_url: "https://www.linkedin.com/in/saru-manandhar-71222614a",
    image: "https://ghostuf.github.io/static_images/saru_manandhar.jpg"
  },
  // {
  //   name: "Labbi Karmacharya",
  //   position: "Data Scientist & Lecturer - Equitech Futures / Islington College",
  //   linkedin_url: "https://www.linkedin.com/in/labbi-karmacharya/",
  //   image: "https://ghostuf.github.io/static_images/labbi_karmacharya.png"
  // },
  {
    name: "Rojan Upreti",
    position: "Machine Learning Engineer",
    linkedin_url: "https://www.linkedin.com/in/rojanupreti/", // No LinkedIn URL provided
    image: "https://ghostuf.github.io/static_images/rojan_upreti.jpg"
  },
]

export { Mentors_value }