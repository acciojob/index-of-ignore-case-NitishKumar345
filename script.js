function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if (s2.length === 0) return 0;
    if (s1.length === 0 || s2.length > s1.length) return -1;
    
    // Convert to lowercase for case-insensitive comparison
    const lowerS1 = s1.toLowerCase();
    const lowerS2 = s2.toLowerCase();
    
    // Find first occurrence
    return lowerS1.indexOf(lowerS2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
