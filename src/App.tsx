import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import AIAddonServices from './pages/AIAddonServices'
import AIAgentTalkTime from './pages/AIAgentTalkTime'
import AIBusinessAutomation from './pages/AIBusinessAutomation'
import AIBusinessPromotion from './pages/AIBusinessPromotion'
import AIAutomatedChatbot from './pages/AIAutomatedChatbot'
import IndustrySpecificAI from './pages/IndustrySpecificAI'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/why-choose-us" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Individual Service Pages */}
      <Route path="/ai-addon-services" element={<AIAddonServices />} />
      <Route path="/ai-agent-talk-time" element={<AIAgentTalkTime />} />
      <Route path="/ai-business-automation" element={<AIBusinessAutomation />} />
      <Route path="/ai-business-promotion" element={<AIBusinessPromotion />} />
      <Route path="/ai-automated-chatbot" element={<AIAutomatedChatbot />} />
      <Route path="/industry-specific" element={<IndustrySpecificAI />} />
    </Routes>
  )
}

export default App
