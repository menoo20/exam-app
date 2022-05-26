import questions from "../APIs/questions";
import getShuffledQuestions from "../APIs/questions"

function App() {
  
  return (
    <div className="App">
      {
        getShuffledQuestions.map(question=>{
          return <h1>{question.text}</h1>
        })
      }
    </div>
  );
}

export default App;
