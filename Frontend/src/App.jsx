import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function App() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate();
  const [error,seterror] = useState("")
  const [mssg, setmssg] = useState("")

  

  function handleemail(e) {
    setemail(e.target.value)
  }

  function handlepassword(e) {
    setpassword(e.target.value)
  }

  async function check(e) {
    e.preventDefault();

    try {
    const response = await axios.post(`http://localhost:3000/sign`,{"email":email, "password":password}) 
      console.log(response)
      if(response.data)
      {
        navigate("/success")
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      console.log("error")
    }

    if(!email.trim())
  {
    seterror("* Email should not be empty..")
  }

     if(!password.trim())
  {
    setmssg("* Password should not be empty..")
  }

  }
  
  

  return (
    
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/9a924b36-8e85-4f2a-baac-ce2872ee8163/web/IN-en-20250714-TRIFECTA-perspective_dfbf09de-9182-41e1-a9c6-cd7b1a6d84d6_medium.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={check}
        className="bg-black bg-opacity-80 p-8 rounded-lg w-[90%] sm:w-[400px] text-center"
      >
        <h1 className="text-red-500 text-3xl font-bold">NETFLIX</h1>
        <h2 className="text-white text-2xl font-bold my-4">Sign In</h2>

        <input
          onChange={handleemail}
          name="email"
          type="text"
          placeholder="Email or Mobile number"
          className="w-full p-3 bg-black border border-red-400 text-white rounded-md mb-4"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          onChange={handlepassword}
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-black border border-red-400 text-white rounded-md mb-2"
        />
        {mssg && <p className="text-red-500 text-sm mb-2">{mssg}</p>}

        <button
          type="submit"
          className="w-full p-3 mt-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition"
        >
          Sign In
        </button>
        <p className='text-gray-400 p-5'>OR</p>
        <button
          type="submit"
          className="w-full p-3 mt-2 bg-gray-600 hover:bg-slate-700 text-white font-bold rounded-md  transition"
        >
          Use a sign-in code
        </button>
        <div className=''>
        <p className='underline text-white mt-4 hover:text-gray-400 cursor-pointer'>Forgot password?</p>
        <p className='text-white p-1 cursor-context-menu'>Remember me</p>
        <p className='text-gray-400'>New to Netflix?</p>
        <p className='text-white hover:underline cursor-pointer'>Sign up now.</p>
        <p className='text-white'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        <p className='text-blue-600 underline hover:cursor-pointer'>Learn more.</p>
        </div>
        <div>
          <p>Questions? Call 000-800-919-1743 (Toll-Free)</p>
        </div>
      </form>
      
    </div>
  )
}



export default App