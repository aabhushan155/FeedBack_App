import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './Data/Feedbackdata'
import FeedbackStat from './components/FeedbackStat'
import FeedbackForm from './components/FeedbackForm'
import RatingSelect from './components/RatingSelect'
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const addFeedback = (newFeedback) => {}
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <>
      <Header />

      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStat feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}
export default App
