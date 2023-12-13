document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('deduction-form');
    const resultContainer = document.getElementById('result-container');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const age = parseInt(document.getElementById('age').value) || 0;
      const annualPremiumSelf = parseInt(document.getElementById('annual-premium-self').value) || 0;
      const annualPremiumParents = parseInt(document.getElementById('annual-premium-parents').value) || 0;
  
      let maxDeductionSelf = 0;
      let maxDeductionParents = 0;
      let maxDeduction;
  
      if (age >= 60) {
        // Senior Citizen
        maxDeductionSelf = Math.min(25000, annualPremiumSelf);
        maxDeductionParents = Math.min(25000, annualPremiumParents);
      } else {
        // Non-Senior Citizen
        maxDeductionSelf = Math.min(25000, annualPremiumSelf);
        maxDeductionParents = Math.min(25000, annualPremiumParents);
      }
  
      // Total maximum deduction is 50000
      maxDeduction = maxDeductionSelf + maxDeductionParents;
  
      const totalDeductions = maxDeduction;
  
      resultContainer.innerHTML = `<p>Total Deductions: ${totalDeductions}</p>`;
    });
  });
  
