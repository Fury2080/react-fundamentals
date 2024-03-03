function App() {
  return (
    <div className="min-h-screen bg-black text-white p-4 lg:p-8 flex  flex-col justify-center items-center">
      <h1 className="text-5xl lg:text-8xl text-center">React basics</h1>
      <p className="block">Back again shit world</p>
      <LoginForm />
      <p>
        Didn't have a account
        <a
          href="https://imagination-of-my-brain.vercel.app/"
          title="rederected to a new page"
          target="_blank"
        >
        ? Sign in
        </a>
      </p>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="flex flex-col gap-4 w-fit mt-8 items-center">
      <div className="space-x-4 flex flex-col justify-between w-full lg:flex-row lg:items-center">
        <label className="px-3 text-xl lg:p-0 lg:text-2xl">Username </label>
        <input className="text-black manrope px-3 py-1 " type="text" />
      </div>
      <div className="space-x-4 flex flex-col justify-between w-full lg:flex-row lg:items-center">
        <label className="text-xl px-3 lg:p-0 lg:text-2xl">Password </label>
        <input className="text-black manrope px-3 py-1" type="password" />
      </div>
      <Button />
    </div>
  );
}

function Button() {
  return (
    <button className="bg-blue-500 w-fit px-6 py-2 rounded-xl hover:bg-blue-600 active:bg-blue-700">
      Login
    </button>
  );
}

export default App;
