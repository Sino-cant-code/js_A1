//Question No. 1
function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";
  return `${type} | ${truthiness}`;
}
//Question No. 2
function getDayType(day) {
  const d = day.toLowerCase();
  switch (d) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}


//Question No. 3
function validateUsername(username) {
  if (username.length < 4) return "Too Short";
  if (username.includes(" ")) return "No Space Allowed";
  if (username.toLowerCase().includes("admin")) return "Reserved Word";
  return "Available";
}


//Question No. 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;
  if (distance > 2) {
    fare = 50 + (distance - 2) * 15;
  }
  const waitingCharge = waitingMinutes * 2;
  let total = fare + waitingCharge;
  if (isNight) {
    total = total + total * 0.2;
  }
  return total;
}
