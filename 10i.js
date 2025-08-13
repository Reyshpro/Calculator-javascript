 let calculation = '';

       const saved =  localStorage.getItem('calculation');
     if (saved) {
      calculation = JSON.parse(saved);
      updateCalculation();
     }

      function updateCalculation (){
      document.querySelector('.result').innerHTML= calculation;
        localStorage.setItem('calculation' , JSON.stringify(calculation));
      }
     
     