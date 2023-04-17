<<<<<<< HEAD
const form = document.querySelector("#form")
   const submitButton = document.querySelector("#submit")
   const scriptURL = "https://httpbin.org/post";
=======
// alert('Hello, World!');
   const form = document.querySelector("#form")
   const submitButton = document.querySelector("#submit")
   const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'
>>>>>>> 5cd6adb1498900aaebe8837da85f2699284d0df1

   form.addEventListener('submit', e => {
     submitButton.disabled = true
     e.preventDefault()
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          alert('Success!', response)
<<<<<<< HEAD
          submitButton.disabled = ture
=======
          submitButton.disabled = false
>>>>>>> 5cd6adb1498900aaebe8837da85f2699284d0df1
         })
       .catch(error => {
       alert('Error!', error.message)
         submitButton.disabled = false

       }
       )
<<<<<<< HEAD
   })
=======
   })
>>>>>>> 5cd6adb1498900aaebe8837da85f2699284d0df1
