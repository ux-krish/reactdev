import React from 'react'

function PageLayout({children}) {
  return (
    <div className='bg-slate-800 min-h-[100vh]'>
      <div className="p-4 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}

export default PageLayout