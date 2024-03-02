function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex  flex-col justify-center items-center">
      <h1 className="text-8xl text-center">React basics</h1>
      <p className="block">Back again shit world</p>
      <LoginForm />
    </div>
  );
}

function LoginForm() {
  return (
    <div className="flex flex-col gap-4 w-fit mt-8 items-center">
      <div className="space-x-4 flex justify-between w-full">
        <label>Username :-</label>
        <input type="text" />
      </div>
      <div className="space-x-4 flex justify-between w-full">
        <label>Password :-</label>
        <input type="password" />
      </div>
      <Button />
    </div>
  );
}

function Button() {
  return (
    <button className="bg-blue-500 w-fit px-6 py-2 rounded-xl ">Login</button>
  );
}

export default App;
