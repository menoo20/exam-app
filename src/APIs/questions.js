const questions = [
    {
        
      text: "How many rings are on the Olympic flag?",
      options: [
        { id: 0, text: "None", isCorrect: false },
        { id: 1, text: "Four", isCorrect: false },
        { id: 2, text: "Five", isCorrect: false },
        { id: 3, text: "Seven", isCorrect: true },
      ],
    },
    {
      text: "How did Spider-Man get his powers?",
      options: [
        { id: 0, text: "Bitten by radiactive spider", isCorrect: false },
        { id: 1, text: "Born with them", isCorrect: false },
        { id: 2, text: "Military Experiment gone awry", isCorrect: false },
        { id: 3, text: "woke up with them after a strange dream", isCorrect: true },
      ],
    },
    {
      text: "In darts, what's the most points you can score with a single throw?",
      options: [
        { id: 0, text: "20", isCorrect: false },
        { id: 1, text: "50", isCorrect: false },
        { id: 2, text: "60", isCorrect: true },
        { id: 3, text: "100", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Who are known as Brahmins?",
      options: [
        { id: 0, text: "Members of indias highest castles", isCorrect: true },
        { id: 1, text: "Surfers in Californai", isCorrect: false },
        { id: 2, text: "It's totally made up word", isCorrect: false },
        { id: 3, text: "Members in Mexico", isCorrect: false },
      ],
    },
    {
        text: "What is a traiser?",
        options: [
          { id: 0, text: "A bird", isCorrect: false },
          { id: 1, text: "A lizard", isCorrect: false },
          { id: 2, text: "A primate", isCorrect: true },
          { id: 3, text: "An alien", isCorrect: false },
        ],
      },
      {
        text: "What famous book did Marie Kondo write?",
        options: [
          { id: 0, text: "The amazing art of going to the bathroom", isCorrect: false },
          { id: 1, text: "Eating Cheese: Why You should never do it", isCorrect: false },
          { id: 2, text: "The life changing magic of tidying up", isCorrect: true },
          { id: 3, text: "The simple act of making breakfast", isCorrect: false },
        ],
      },
  ];



  //function to shuffle the questions
  let getShuffledQuestions = (arr)=>{
    return arr.sort(()=>Math.random() - 0.5)
}


export default getShuffledQuestions(questions);
