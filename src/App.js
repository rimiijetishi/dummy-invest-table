import Header from "./components/Header/Header";
import Form from "./components/UserInput/Form";
import ResultTable from "./components/ResultTable/ResultTable";
import { useState } from "react";



function App() {
  const [userInput, setUserInput] = useState()

  const calculateHandler = (userInput) => {
    setUserInput(userInput)

  };

  const yearlyData = [];

  if (userInput) {

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({

        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,

      });
    }
    console.log(yearlyData)
  }


  return (
    <div>
      <Header />
      <Form calculateUserInput={calculateHandler} />

      {!userInput && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}

      {userInput && <ResultTable data={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}

export default App;
