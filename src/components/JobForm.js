import React, { useState } from 'react';

const JobForm = () => {
  const [job, setJob] = useState({
    company: '',
    postedAt: '',
    city: '',
    location: '',
    role: '',
    level: '',
    contract: '',
    position: '',
    language: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    
    jobs.push(job);

    
    localStorage.setItem('jobs', JSON.stringify(jobs));

    
    setJob({
      company: '',
      postedAt: '',
      city: '',
      location: '',
      role: '',
      level: '',
      contract: '',
      position: '',
      language: ''
    });

    alert('Job posted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="company" value={job.company} onChange={handleInputChange} placeholder="Company" />
      <input type="date" name="postedAt" value={job.postedAt} onChange={handleInputChange} placeholder="Posted At" />
      <input type="text" name="city" value={job.city} onChange={handleInputChange} placeholder="City" />
      <input type="text" name="location" value={job.location} onChange={handleInputChange} placeholder="Location" />
      <input type="text" name="role" value={job.role} onChange={handleInputChange} placeholder="Role" />
      <input type="text" name="level" value={job.level} onChange={handleInputChange} placeholder="Level" />
      <input type="text" name="contract" value={job.contract} onChange={handleInputChange} placeholder="Contract" />
      <input type="text" name="position" value={job.position} onChange={handleInputChange} placeholder="Position" />
      <input type="text" name="language" value={job.language} onChange={handleInputChange} placeholder="Programming Language" />
      <button type="submit">Submit Job</button>
    </form>
  );
};

export default JobForm;

