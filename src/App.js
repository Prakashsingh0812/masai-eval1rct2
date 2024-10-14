import React from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import JobFilter from './components/JobFilter';


function App() {
  return (
    <div>
      <h1>Job Portal</h1>
      <JobForm />
      <JobList />
      <JobFilter />
      
    </div>
  )
}

export default App
