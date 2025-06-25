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
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg?tr=w-664",
  },
  {
    name: "Toshika Ojha",
    position: "Client Success Consultant",
    linkedin_url: "https://www.linkedin.com/in/toshikaojha/",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg?tr=w-664",
  },
  {
    name: "Luja Chitrakar",
    position: "Clock B Tech",
    linkedin_url: "https://www.linkedin.com/in/luja-chitrakar/",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg?tr=w-664",
  },
  {
    name: "Mala Deep Upadhaya",
    position: "Data Consultant - Dataksha Analytics",
    linkedin_url: "https://www.linkedin.com/in/maladeep",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg?tr=w-664",
  },
  {
    name: "Elisha Baniya",
    position: "QA - Maitri Services",
    linkedin_url: "https://www.linkedin.com/in/elishabaniya",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg?tr=w-664",
  },
  {
    name: "Mamata Maharjan",
    position: "Senior Software Engineer",
    linkedin_url: "https://www.linkedin.com/in/mamata-maharjan-b4197b178",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg?tr=w-664",
  },
  {
    name: "Sushan Shakya",
    position: "Full Stack Developer - RIMES",
    linkedin_url: "https://www.linkedin.com/in/sushan-shakya-8953711a6/",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg?tr=w-664",
  },
  {
    name: "Prashant Malla",
    position: "Embedded System Engineer - Truenary Solutions",
    linkedin_url: "https://www.linkedin.com/in/prashant-malla-139339b2",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg?tr=w-664",
  },
  {
    name: "Saru Manandhar",
    position: "Software Engineer - Leapfrog Technology",
    linkedin_url: "https://www.linkedin.com/in/saru-manandhar-71222614a",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg?tr=w-664",
  },
  {
    name: "Labbi Karmacharya",
    position: "Data Scientist & Lecturer - Equitech Futures / Islington College",
    linkedin_url: "https://www.linkedin.com/in/labbi-karmacharya/",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg?tr=w-664",
  },
  {
    name: "Rojan Upreti",
    position: "Machine Learning Engineer",
    linkedin_url: "", // No LinkedIn URL provided
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg?tr=w-664",
  },
]

export { Mentors_value }