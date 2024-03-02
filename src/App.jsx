function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8 ">
      <h1 className="text-8xl text-center">React basics</h1>
      <p className="block">Back again shit world</p>
      <LoginForm />
    </div>
  );
}

function LoginForm() {
  return (
    <div className="flex flex-col gap-4 w-fit mt-8 items-center">
      <input type="text" />
      <input type="password" />
      <Button />
    </div>
  );
}

function Button() {
  return <button className="bg-blue-500 w-fit px-6 py-2 rounded-xl ">Login</button>;
}

export default App;
