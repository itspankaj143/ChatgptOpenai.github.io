// bard api='ewhQEC13ehKtLNhssRiyZuqx_FSIpOZMrZ19AlrhL3zB0ekU1SKgrHOzhsyN5H5-mS3ahw'
//chatgpt apikey='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'
// const user = {
//   firstName: "pankaj",
//   lastName: "kumar",
//   age: 25,
//   getBirthYear: function () {
//     return new Date().getFullYear() - user.age;
//   },
// };
// console.log(user.firstName);
// console.log(user.getYear());

// function createUser(firstName, lastName, age) {
//   return (user = {
//     firstName,
//     lastName,
//     age,
//     getBirthYear() {
//       return new Date().getFullYear() - user.age;
//     },
//   });
// }

// const user1 = createUser("pankaj", "Kumar", 23);
// console.log(user1);
// console.log(user1.getBirthYear());

// fetch("9MHSgXRJouLJ61c1/AyVZkfICYsfi3rvOo")
//   .then((res) => {
//     return res.json;
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const apiurl = "https://api.openai.com/v1/chat/completions";
// // const OPEN_AI_URL = "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";

// async function getMessage() {
//   console.log("click");
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${OPEN_AI_URL}`,
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: "Hello" }],
//       max_tokens: 100,
//     }),
//   };
//   try {
//     const response = await fetch(apiurl, options);
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// }
// getMessage();

// const apiKey =
//   "ewhQEC13ehKtLNhssRiyZuqx_FSIpOZMrZ19AlrhL3zB0ekU1SKgrHOzhsyN5H5-mS3ahw";
// const bardApiUrl = "https://bard.google.com/chat";

// fetch(bardApiUrl, {
//   method: "GET",
//   mode: "no-cors",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${apiKey}`,
//   },
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Data received:", data);
//     // Process the received data
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//     // Handle errors, e.g., display an error message to the user
//   });

// fetch("ewhQEC13ehKtLNhssRiyZuqx_FSIpOZMrZ19AlrhL3zB0ekU1SKgrHOzhsyN5H5-mS3ahw")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const apiKey =
//   "ewhQEC13ehKtLNhssRiyZuqx_FSIpOZMrZ19AlrhL3zB0ekU1SKgrHOzhsyN5H5-mS3ahw";
// const url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`;

// const requestData = {
//   key1: "value1",
//   key2: "value2",
// };

// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${apiKey}`,
//   },
//   body: JSON.stringify(requestData),
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Data received:", data);
//     // Process the received data
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// const arrayOfObjects = [
//   {
//     id: 1,
//     name: "Object 1",
//     nestedObject: {
//       nestedId: 101,
//       nestedName: "Nested Object 1",
//     },
//   },
//   {
//     id: 2,
//     name: "Object 2",
//     nestedObject: {
//       nestedId: 102,
//       nestedName: "Nested Object 2",
//     },
//   },
// ];
// console.log(arrayOfObjects);
// arrayOfObjects.forEach((item) => {
//   const nestedObject = item.nestedObject;
//   console.log("Nested Object:", nestedObject);
//   // console.log("Nested ID:", nestedObject.nestedId);
//   // console.log("Nested Name:", nestedObject.nestedName);
// });
// node --version # Should be >= 18
// npm install @google/generative-ai

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const MODEL_NAME = "gemini-pro";
// const API_KEY =
//   "ewhQEC13ehKtLNhssRiyZuqx_FSIpOZMrZ19AlrhL3zB0ekU1SKgrHOzhsyN5H5-mS3ahw";

// async function runChat() {
//   const genAI = new GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//   const generationConfig = {
//     temperature: 0.9,
//     topK: 1,
//     topP: 1,
//     maxOutputTokens: 2048,
//   };

//   const safetySettings = [
//     {
//       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//   ];

//   const chat = model.startChat({
//     generationConfig,
//     safetySettings,
//     history: [],
//   });

//   const result = await chat.sendMessage("YOUR_USER_INPUT");
//   const response = result.response;
//   console.log(response.text());
// }

// runChat();

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-pro";
const API_KEY =
  "ewhQEC13ehKtLNhssRiyZuqx_FSIpOZMrZ19AlrhL3zB0ekU1SKgrHOzhsyN5H5-mS3ahw"; // Replace with your actual API key

async function runChat() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  const userInput = "YOUR_USER_INPUT"; // Replace with the actual user input
  const result = await chat.sendMessage(userInput);
  const response = result.response;
  console.log(response.text); // Access the 'text' property to get the generated response
}

runChat();
