import Header from './components/Header'
import {useState} from "react";
import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <>
            <Header/>
            <div className={'container'}>
                <FeedbackList feedback={feedback}/>
            </div>
        </>

    )
}

export default App