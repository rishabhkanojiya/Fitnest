let config = {
  __prod__: process.env.NODE_ENV === "production",
  COOKIE_NAME: "qid",
  RESET_PASSWORD: "RESET_PASSWORD",
};

// type Set = {
//   setNo: number;
//   setType: string;
//   lastData: string;
//   weight: number;
//   reps: number;
// };

// type Exercise = {
//   name: string;
//   bodyPart: string;
//   sets: Set[];
// };

// type Workout = {
//   title: string;
//   LastPerformed: Date;
//   exercises: Exercise[];
// };

export default config;
