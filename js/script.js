// Function to find the intersection point of two linked lists
function findIntersection() {
  const listAInput = document.getElementById("listA").value.trim();
  const listBInput = document.getElementById("listB").value.trim();

  // Parse comma-separated values into arrays
  const arrA = listAInput.split(",").map(Number);
  const arrB = listBInput.split(",").map(Number);

  // Find intersection point
  const intersectionPoint = getIntersectionPoint(arrA, arrB);

  const intersectionPointDiv = document.getElementById("intersectionPoint");
  if (intersectionPoint !== null) {
    intersectionPointDiv.textContent =
      "Intersection Point Value: " + intersectionPoint;
  } else {
    intersectionPointDiv.textContent = "No intersection found.";
  }
}

// Function to find the intersection point of two arrays
function getIntersectionPoint(arrA, arrB) {
  const set = new Set(arrA);
  for (const val of arrB) {
    if (set.has(val)) {
      return val;
    }
  }
  return null; // No intersection found
}
