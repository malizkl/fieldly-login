export default function Home() {
  return (
    <div className="grid grid-cols-12 min-h-screen">

      <div className="grid col-span-5 justify-start px-20">
        <div className="flex flex-col">
          <h2 className="text-gray-600 text-xl mt-14">fieldly</h2>
          <h1 className="font-bold text-4xl text-black mt-20">Log in.</h1>
          <p className="text-gray-400 mt-6">Log in with your data that you entered during <br></br>your registration.</p>

          <h2 className="mt-8 text-gray-400 font-bold text-sm">Your e-mail</h2>
          <input className="w-96 mt-2 border rounded-md px-2 h-10 " type="email" placeholder="name@domain.com" />
          <h2 className="mt-8 text-gray-400 font-bold text-sm">Password</h2>
          <input className="w-96 mt-2 border rounded-md px-2 h-10" type="password" placeholder="at least 8 characters" />

          <button className="mt-12 border rounded-md bg-purple-400 hover:bg-purple-500 text-white h-10 font-bold">Log in</button>
          <div className="flex justify-center mt-4">
          <p className="text-gray-500 text-xs">Dont have an account <a href="" className="text-purple-500 hover:text-purple-700 ">Sign up</a> </p>
          </div>
          <a href="" className="text-purple-500 flex justify-center mt-4 text-sm font-bold">Forget password?</a>

        </div>
      </div>
      <div className="grid col-span-7 bg-purple-900 relative"></div>
    </div>
  )
}