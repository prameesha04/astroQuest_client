import questions from "./questionData";

export const getRandomQuestion = (level = "easy") => {
  const filtered = questions.filter((q) => q.level === level);
  return filtered[Math.floor(Math.random() * filtered.length)];
};
