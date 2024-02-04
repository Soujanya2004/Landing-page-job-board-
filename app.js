document.addEventListener('DOMContentLoaded', function () {
    const jobListSection = document.getElementById('job-list');
    const jobForm = document.getElementById('add-job-form');
  
    jobForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const jobTitle = document.getElementById('job-title').value;
      const company = document.getElementById('company').value;
      const location = document.getElementById('location').value;
  
      if (jobTitle && company && location) {
        addJobToList(jobTitle, company, location);
        jobForm.reset();
      }
    });
  
    function addJobToList(title, company, location) {
      const jobCard = document.createElement('div');
      jobCard.classList.add('job-card');
  
      jobCard.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Location:</strong> ${location}</p>
      `;
  
      jobListSection.appendChild(jobCard);
    }
  });
  
  
  // You'll define similar functions for other pages (job listings, employer dashboard, candidate dashboard, etc.)
  