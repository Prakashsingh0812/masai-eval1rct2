import React, { useState, useEffect } from 'react';
import JobFilter from './JobFilter';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    // Retrieve jobs from localStorage
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(storedJobs);
    setFilteredJobs(storedJobs); // Initially, all jobs are shown
  }, []);

  const handleFilter = (filters) => {
    const filtered = jobs.filter((job) => {
      // Apply all filters
      return (
        (filters.role === '' || job.role.toLowerCase().includes(filters.role.toLowerCase())) &&
        (filters.level === '' || job.level.toLowerCase().includes(filters.level.toLowerCase())) 
      );
    });
    setFilteredJobs(filtered);
  };



  return (
    <div>
      <h2>Job Listings</h2>
      <JobFilter onFilter={handleFilter} />
      
      {filteredJobs.length > 0 ? (
        <ul>
          {filteredJobs.map((job, index) => (
            <li key={index}>
              <h3>{job.position} at {job.company}</h3>
              <p>Role: {job.role}, Level: {job.level}</p>
              <p>Location: {job.city}, {job.location}</p>
              <p>Contract: {job.contract}, Language: {job.language}</p>
              <p>Posted At: {job.postedAt}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs match your filters.</p>
      )}
    </div>
  );
};

export default JobList;


