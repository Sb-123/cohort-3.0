import './App.css'
import { Button } from './components/UI/Button';

const App = () => {
  return (
    <div>
      <Button variant="primary" size="small" text="Share" startIcon={<i className="fa fa-facebook"></i>} endIcon={<i className="fa fa-twitter"></i>} onClick={() => console.log("clicked")} />
      <Button variant="secondary" size="medium" text="Add Content" startIcon={<i className="fa fa-facebook"></i>} endIcon={<i className="fa fa-twitter"></i>} onClick={() => console.log("clicked")} />
      <Button variant="primary" size="large" text="Share" startIcon={<i className="fa fa-facebook"></i>} endIcon={<i className="fa fa-twitter"></i>} onClick={() => console.log("clicked")} />
      
    </div>
  )
}

export default App
