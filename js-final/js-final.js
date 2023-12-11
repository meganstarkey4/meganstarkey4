
  const form = document.getElementById('quizForm');
  const formData = new FormData(form);
  const submitButton = document.getElementById("submitBtn")
  submitButton.addEventListener("click",()=> {
    if (form.q1.value == answersMap[q1] && form.q2.value == answersMap[q2] && form.q3.value == 
        answersMap[q3] && form.q4.value == answersMap[q4] && form.q5.value == answersMap[q5]) {
        alert("Nice phone number! It's " + form.num1.value +form.num2.value+form.num3.value+
        form.num4.value+form.num5.value+form.num5.value+form.num6.value+form.num7.value+
        form.num8.value+form.num9.value+form.num10.value)
    } else {
        alert("Wrong, you don't know me and now I am crying")
    }
  }
  )

  const answersMap = {
    q1: "megan",
    q2: "grasshopper",
    q3: "doodle",
    q4: "waffles",
    q5: "allergy"
  }