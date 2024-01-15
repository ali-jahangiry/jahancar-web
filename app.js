// const menuContainer = document.querySelector('.menu-container');

// menuContainer.addEventListener('click', function () {
//   this.classList.toggle('active');
// });


// login
let passwordInput = document.getElementById("passwordInput");
let submitButton = document.getElementById("submitButton");

passwordInput.addEventListener("change", function() {
   

    if (!validatePasswordStrength(passwordInput.value)) {
        alert("Your password must be at least ten digits long and contain upper and lower case letters");
    }
});

submitButton.addEventListener("click", function() {
    

    if (!validatePasswordStrength(passwordInput.value)) {
        alert("Your password must be at least ten digits long and contain upper and lower case letters");
    }
});

function validatePasswordLength(password) {
    return password.length >= 8;
}

function validatePasswordStrength(password) {
    let strengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
    return strengthRegex.test(password);
}

// login-email
let emailInput = document.getElementById("emailInput");


submitButton.addEventListener("click", function() {
    if (!validateEmail(emailInput.value)) {
        alert("Your email is not valid");
    }
});

function validateEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}











const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,3000,5000,6000,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

// 

const HValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: HValues,
    datasets: [{ 
      data: [],
      borderColor: "red",
      fill: false
    }, { 
      data: [5000,6000,5500,5000,3000,4000,3300,2000,1900,1000],
      borderColor: "red",
      fill: false
    }, { 
      data: [],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
}); 


const RValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart3", {
  type: "line",
  data: {
    labels: RValues,
    datasets: [{ 
      data: [],
      borderColor: "red",
      fill: false
    }, { 
      data: [5000,6000,5500,5000,3000,4000,3300,2000,1900,1000],
      borderColor: "red",
      fill: false
    }, { 
      data: [],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
}); 

// 

