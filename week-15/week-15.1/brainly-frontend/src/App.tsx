import './App.css'
import { Button } from './components/UI/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
      <Button
        variant={"primary"}
        startIcon={<PlusIcon size={"sm"} />}
        endIcon={<ShareIcon size={"sm"} />}
        size={"sm"}
        title={"Add"}
      />
      <Button
        variant={"secondary"}
        startIcon={<PlusIcon size={"sm"} />}
        endIcon={<ShareIcon size={"sm"} />}
        size={"sm"}
        title={"Add"}
      />
      <Button
        variant={"primary"}
        startIcon={<PlusIcon size={"md"} />}
        endIcon={<ShareIcon size={"md"} />}
        size={"md"}
        title={"Add"}
      />
      <Button
        variant={"secondary"}
        startIcon={<PlusIcon size={"md"} />}
        endIcon={<ShareIcon size={"md"} />}
        size={"md"}
        title={"Add"}
      />
    </>
  )
}
 
export default App;