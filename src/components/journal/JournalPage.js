import React from 'react'
import { Sidebar } from './Sidebar'

export const JournalPage = () => {
  return (
    <div className='journal__main-content'>
        <h1>JournalPage</h1>
        
        <Sidebar />

        <main>
          <h1>Main content</h1>
        </main>
    </div>
  )
}
