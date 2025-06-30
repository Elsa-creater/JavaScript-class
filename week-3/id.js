function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  function getDaysInMonth(month, year) {
    const monthFormatted = month.toLowerCase().charAt(0).toUpperCase() + month.toLowerCase().slice(1);
  
    const daysInMonth = {
      January: 31,
      February: isLeapYear(year) ? 29 : 28,
      March: 31,
      April: 30,
      May: 31,
      June: 30,
      July: 31,
      August: 31,
      September: 30,
      October: 31,
      November: 30,
      December: 31
    };
  
    if (!(monthFormatted in daysInMonth)) {
      return `'${month}' is not a valid month.`;
    }
  
    return `${monthFormatted} ${year} has ${daysInMonth[monthFormatted]} days.`;
  }
  
  // Main interaction
  const monthInput = prompt("Enter a month:");
  const yearInput = prompt("Enter a year:");
  
  const year = parseInt(yearInput);
  
  if (isNaN(year)) {
    alert("Invalid year. Please enter a number.");
  } else {
    const result = getDaysInMonth(monthInput, year);
    alert(result);
  }