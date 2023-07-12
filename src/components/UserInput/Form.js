import styles from'./Form.module.css'

import { useState } from 'react'

const defaultValue = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10

}

const Form = (props) => {
    const [userInput, setUserInput] = useState(defaultValue)

    const submitForm = (event) => {
        event.preventDefault()
        props.calculateUserInput(userInput)
    }


    const resetForm = () => {
     setUserInput(defaultValue)
        
    }

    const inputChangeForme = (input, value) => {
        setUserInput((prevInput) => {
            return  {
                ...prevInput,
                [input]: +value,
            }
        })
    }
    return (

        <form onSubmit={submitForm} className={styles.form}>

            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(event) => {
                        inputChangeForme("current-savings", event.target.value)}}
                        value={userInput["current-savings"]}
                        type="number" 
                        id="current-savings" 
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>

                    <input onChange={(event) => {
                        inputChangeForme("yearly-contribution", event.target.value)}}
                        value={userInput["yearly-contribution"]}
                        type="number"
                        id="yearly-contribution" 
                    />
                </p>
            </div>

            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>

                    <input onChange={(event) => {
                        inputChangeForme("expected-return", event.target.value)}}
                        value={userInput["expected-return"]}
                        type="number"
                        id="expected-return" 
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>

                    <input onChange={(event) => {
                        inputChangeForme("duration", event.target.value)}}
                        value={userInput["duration"]}
                        type="number" 
                        id="duration" 
                    />
                </p>
            </div>

            <p className={styles.actions}>
                <button onClick={resetForm} type="reset" className={styles.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>

    )
}


export default Form;