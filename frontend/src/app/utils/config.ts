const mode = process.env.PRODUCTION ? "prod" : "dev";

console.info(`Currently Running in ${mode} Mode!`);

const BACKEND_URL = "http://localhost:1337";

let SERVER_URL: string;

const ANALYTICS_ID = "G-MZMTQJ9HQX";

if (mode == "dev") {
  SERVER_URL = "http://localhost:1337";
} else {
  SERVER_URL = "https://deerhack.deerwalk.edu.np";
}

const supaBaseConfig = {
  projectUrl: process.env.SUPABASE_PROJECT_URL || "",
  supabaseKey: process.env.SUPABASE_API_KEY || "",
};

console.info(`Backend URL: ${BACKEND_URL} | Server URL: ${SERVER_URL}`);

export { BACKEND_URL, SERVER_URL, ANALYTICS_ID, supaBaseConfig };
