import TextInput from '@/../../packages/ui/src/text-input'

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <TextInput placeholder="Message" onChange={() => {}} /> <br />
      <button>Join the room</button>
    </div>
  )
}

export default Home
