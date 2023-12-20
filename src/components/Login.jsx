import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <div className="bg-slate-700 p-8 rounded-xl shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-4 text-slate-300 text-center">Login</h1>
        <hr className='mb-5 w-10 mx-auto'  />
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              className="w-full text-slate-50 shadow-md shadow-slate-500 bg-slate-500 px-3 py-2 border border-slate-400 rounded-md focus:outline-none focus:border-slate-200"
              placeholder='Username'
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full text-slate-50 px-3 shadow-md shadow-slate-500 bg-slate-500 py-2 border border-slate-400 rounded-md focus:outline-none focus:border-slate-200"
              placeholder='Password'
            />
          </div>

          <button
            type="submit"
            className="w-full shadow-md shadow-slate-500  bg-slate-800 text-slate-300 py-2 rounded-md hover:bg-slate-900 focus:outline-none focus:bg-lime-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
