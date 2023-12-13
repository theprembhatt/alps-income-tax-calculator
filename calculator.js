document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('deduction-form');
    const resultContainer = document.getElementById('result-container');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const age = parseInt(document.getElementById('age').value) || 0;
      const annualPremiumSelf = parseInt(document.getElementById('annual-premium-self').value) || 0;
      const annualPremiumParents = parseInt(document.getElementById('annual-premium-parents').value) || 0;
      const incomeBracket = document.getElementById('income-bracket').value;
  
      let maxDeductionSelf = 0;
      let maxDeductionParents = 0;
      let maxDeduction;
  
      if (incomeBracket === 'less-than-5-lakh') {
        maxDeduction = 25000;
      } else if (incomeBracket === '5-lakh-to-10-lakh') {
        maxDeduction = 50000;
      } else if (incomeBracket === 'more-than-10-lakh') {
        maxDeduction = 75000;
      }
  
      if (age >= 60) {
        // Senior Citizen
        maxDeductionSelf = Math.min(maxDeduction, annualPremiumSelf);
        maxDeductionParents = Math.min(maxDeduction, annualPremiumParents);
      } else {
        // Non-Senior Citizen
        maxDeductionSelf = Math.min(maxDeduction, annualPremiumSelf);
        maxDeductionParents = Math.min(maxDeduction, annualPremiumParents);
      }
  
      const totalDeductions = maxDeductionSelf + maxDeductionParents;
  
      resultContainer.innerHTML = `<p>Total Deductions: ${totalDeductions}</p>`;
    });
  });
  
