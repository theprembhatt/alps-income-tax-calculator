document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('deduction-form');
    const resultContainer = document.getElementById('result-container');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const annualPremiumSelf = parseInt(document.getElementById('annual-premium-self').value) || 0;
      const annualPremiumParents = parseInt(document.getElementById('annual-premium-parents').value) || 0;
  
      // Maximum deduction for "Annual Premium Paid for Self and Family" is 25000
      const maxDeductionSelf = Math.min(25000, annualPremiumSelf);
  
      // Maximum deduction for "Annual Premium Paid for Parents" is 50000
      const maxDeductionParents = Math.min(50000, annualPremiumParents);
  
      // Total maximum deduction is 50000
      const totalDeductions = maxDeductionSelf + maxDeductionParents;
  
      resultContainer.innerHTML = `<p>Total Deductions: ${totalDeductions}</p>`;
    });
  });
  
