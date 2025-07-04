// import { BACKEND_URL, SERVER_URL } from "@/app/utils/config";
// import UserEntity from "@/app/types/userentity";

// const transformVolunteerData = (volunteer: any) => ({
//   name: volunteer.attributes.name,
//   position: volunteer.attributes.position,
//   image: SERVER_URL + volunteer.attributes.image.data.attributes.url,
//   linkedin_url: volunteer.attributes.linkedin_url,
// });
//
// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       `${BACKEND_URL}/api/volunteers?populate=image`,
//       {
//         cache: "no-store",
//       },
//     );
//
//     if (!response.ok) {
//       console.log(`Failed to fetch data. Status: ${response.status}`);
//       return [];
//     }
//
//     const data = await response.json();
//
//     const volunteers: UserEntity[] = data.data.map(transformVolunteerData);
//
//     return volunteers;
//   } catch (error) {
//     console.error("Error fetching volunteers");
//     return [];
//   }
// };
//
// export default fetchData;

import Volunteers from "@/app/types/volunteers";

const Volunteers_value:Volunteers[] = [
    {
        name: "Aarush Dangol",
        image: "https://ghostuf.github.io/static_images/oc/aarush_dangol.jpg",
        linkedin_url: "https://www.linkedin.com/in/aarush-dangol-a5393836b/",
    },

    {
        name: "Abhinav Bista",
        image: "https://ghostuf.github.io/static_images/oc/abhinav_bista.jpeg",
        linkedin_url: "http://linkedin.com/in/abhinav-bista-21ba7b2a7",
    },
    {
        name: "Anbit Bhattrai",
        image: "https://ghostuf.github.io/static_images/oc/anbit_bhattrai.png",
        linkedin_url: "https://www.linkedin.com/in/anbit-bhattarai-518377370/",
    },
    {
        name: "Arunesh Manandhar",
        image: "https://ghostuf.github.io/static_images/oc/arunesh_manandhar.jpg",
        linkedin_url: "https://www.linkedin.com/in/arunesh-manandhar-5bb207362/",
    },
    {
        name: "Aryan Shahi",
        image: "https://ghostuf.github.io/static_images/oc/aryan_shahi.png",
        linkedin_url: "https://www.linkedin.com/in/aryan-shahi-074b8a36b/",
    },
    {
        name: "Ayushna Rana",
        image: "https://ghostuf.github.io/static_images/oc/ayushna_rana.png",
        linkedin_url: "https://www.linkedin.com/in/ayushna-rana-84b97236b/",
    },
    {
        name: "Bhanu Prakash KC",
        image: "https://ghostuf.github.io/static_images/oc/bhanu_prakash_kc.jpg",
        linkedin_url: "https://www.linkedin.com/in/bhanu-prakash-kc/",
    },
    {
        name: "Bibisha Adhikari",
        image: "https://ghostuf.github.io/static_images/oc/bibisha_adhikari.jpg",
        linkedin_url: "https://www.linkedin.com/in/bibisha-adhikari-5a5a55310/",
    },
    {
        name: "Diya Shahi",
        image: "https://ghostuf.github.io/static_images/oc/diya_shahi.jpeg",
        linkedin_url: "https://www.linkedin.com/in/diya-shahi-85973336b/",
    },
    {
        name: "Drishya Karki",
        image: "https://ghostuf.github.io/static_images/oc/drishya_karki.png",
        linkedin_url: "https://www.linkedin.com/in/drishya-karki-542204370/",
    },
    {
        name: "Fayal Subedi",
        image: "https://ghostuf.github.io/static_images/oc/fayal_subedi.png",
        linkedin_url: "https://www.linkedin.com/in/fayal-subedi-a17b1936b/",
    },
    {
        name: "Ishan Baidya Khadgi",
        image: "https://ghostuf.github.io/static_images/oc/ishan_baidya_khadgi.png",
        linkedin_url: "https://www.linkedin.com/in/ishan-vaidya-26a5b4285/",
    },
    {
        name: "Ishan Shrestha",
        image: "https://ghostuf.github.io/static_images/oc/ishan_shrestha.jpg",
        linkedin_url: "https://www.linkedin.com/in/ishan-shrestha-5635b42b1/",
    },
    {
        name: "Johnson Shrestha",
        image: "https://ghostuf.github.io/static_images/oc/johnson_shrestha.png",
        linkedin_url: "https://www.linkedin.com/in/johnson-shrestha-79029b347/",
    },
    {
        name: "Kaustuv Shrestha",
        image: "https://ghostuf.github.io/static_images/oc/kaustuv_shrestha.jpeg",
        linkedin_url: "https://www.linkedin.com/in/kaustuv-shrestha-42b3482a8",
    },
    {
        name: "Khushi Ojha",
        image: "https://ghostuf.github.io/static_images/oc/khushi_ojha.jpg",
        linkedin_url: "",
    },
    {
        name: "Parth Poudyal",
        image: "https://ghostuf.github.io/static_images/oc/parth_poudyal.jpg",
        linkedin_url: "https://www.linkedin.com/in/parth-poudyal-79a56b2b9/",
    },
    {
        name: "Paruhangma Limbu",
        image: "https://ghostuf.github.io/static_images/oc/paruhangma_limbu.jpg",
        linkedin_url: "https://www.linkedin.com/in/paruhangmalimbu",
    },
    {
        name: "Pragalva Sapkota",
        image: "https://ghostuf.github.io/static_images/oc/pragalva_sapkota.jpg",
        linkedin_url: "https://www.linkedin.com/in/pragalva-sapkota/",
    },
    {
        name: "Prajwol Bohara",
        image: "https://ghostuf.github.io/static_images/oc/prajwol_bohara.jpeg",
        linkedin_url: "https://www.linkedin.com/in/prajwol-bohara-132aab2b1/",
    },
    {
        name: "Pranil Parsai",
        image: "https://ghostuf.github.io/static_images/oc/pranil_parsai.jpg",
        linkedin_url: "www.linkedin.com/in/pranil-prasai-98b72a2b3",
    },
    {
        name: "Princika Chapagain",
        image: "https://ghostuf.github.io/static_images/oc/princika_chapagain.jpeg",
        linkedin_url: "",
    },
    {
        name: "Rupesh Thapa",
        image: "https://ghostuf.github.io/static_images/oc/rupesh_thapa.jpg",
        linkedin_url: "",
    },
    {
        name: "Sakshi Sapkota",
        image: "https://ghostuf.github.io/static_images/oc/sakshi_sapkota.PNG",
        linkedin_url: "https://www.linkedin.com/in/sakshi-sapkota-316647328/",
    },
    {
        name: "Samikshya Acharya",
        image: "https://ghostuf.github.io/static_images/oc/samikshya_acharya.jpg",
        linkedin_url: "https://www.linkedin.com/in/samiksha-acharya-66597536b/",
    },
    {
        name: "Sampriya Bista",
        image: "https://ghostuf.github.io/static_images/oc/sampriya_bista.png",
        linkedin_url: "",
    },
    {
        name: "Samyam Khadka",
        image: "https://ghostuf.github.io/static_images/oc/samyam_khadka.png",
        linkedin_url: "https://www.linkedin.com/in/samyam-khadka-0361b62a6/",
    },
    {
        name: "Sandhya Sharma",
        image: "https://ghostuf.github.io/static_images/oc/sandhya_sharma.png",
        linkedin_url: "www.linkedin.com/in/sandhya-sharma-3770062a6",
    },
    {
        name: "Shivank Poudel",
        image: "https://ghostuf.github.io/static_images/oc/shivank_poudel.jpg",
        linkedin_url: "https://www.linkedin.com/in/shivank-poudel-6a8677263/",
    },
    {
        name: "Shreyansh Pokhrel",
        image: "https://ghostuf.github.io/static_images/oc/shreyansh_pokhrel.png",
        linkedin_url: "https://www.linkedin.com/in/shreyansh-pokharel-912201352/",
    },
    {
        name: "Smriti Adhikari",
        image: "https://ghostuf.github.io/static_images/oc/smriti_adhikari.jpg",
        linkedin_url: "https://www.linkedin.com/in/smriti-adhikari-8341b5327/",
    },
    {
        name: "Sophiya Parajuli",
        image: "https://ghostuf.github.io/static_images/oc/sophiya_parajuli.jpeg",
        linkedin_url: "https://www.linkedin.com/in/sophiya-parajuli-18973336b/",
    },
    {
        name: "Srijan Dahal",
        image: "https://ghostuf.github.io/static_images/oc/srijan_dahal.jpg",
        linkedin_url: "https://www.linkedin.com/in/srijan-dahal-b532aa26b/",
    },
    {
        name: "Sukriti Pyakurel",
        image: "https://ghostuf.github.io/static_images/oc/sukriti_pyakurel.jpg",
        linkedin_url: "https://www.linkedin.com/in/sukriti-pyakurel-05b0132ba/",
    },
    {
        name: "Suprit Phuyal",
        image: "https://ghostuf.github.io/static_images/oc/suprit_phuyal.jpg",
        linkedin_url: "https://www.linkedin.com/in/suprit-phuyal-225a7a2a7/",
    },
    {
        name: "Swadha Pandey",
        image: "https://ghostuf.github.io/static_images/oc/swadha_pandey.jpg",
        linkedin_url: "",
    },
    {
        name: "Swornim Raj Subedi",
        image: "https://ghostuf.github.io/static_images/oc/swornim_raj_subedi.jpeg",
        linkedin_url: "https://www.linkedin.com/in/swornim-raj-subedi-806392341/",
    },
    {
        name: "Tejaswi Vaijo",
        image: "https://ghostuf.github.io/static_images/oc/tejaswi_vaijo.jpg",
        linkedin_url: "https://www.linkedin.com/in/tejaswi-v-a0264632b/",
    },
    {
        name: "Yashaswi Shiwakoti",
        image: "https://ghostuf.github.io/static_images/oc/yashaswi_shiwakoti.png",
        linkedin_url: "https://www.linkedin.com/in/yashaswi-shiwakoti-09a6012a2/",
    },
]




