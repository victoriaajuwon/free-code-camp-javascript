//Exercises under "Review JavaScript Fundamentals Building a Gradebook App"
function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    const average = sum / scores.length;
    return average;
  }

  function getGrade(score) {
    if (score === 100){
      return "A++";
    } else if (score >=90) {
      return "A"
    }else if (score >=80) {
      return "B"
    }else if (score >=70) {
      return "C"
    }else if (score >=60) {
      return "D"
    }else{
      return "F"
    }
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));


  function hasPassingGrade(score) {
    const studentGrade = getGrade(score);
    if (studentGrade != "F"){
      return true;
    } else {
      return false;
    }
  }
  
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));
  

  function studentMsg(totalScores, studentScore) {
    const studentAvg = getAverage(totalScores);
    const studentGrade = getGrade(studentScore);
    return hasPassingGrade(studentScore) ? `Class average: ${studentAvg}. Your grade: ${studentGrade}. You passed the course.` : `Class average: ${studentAvg}. Your grade: ${studentGrade}. You failed the course.`
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));