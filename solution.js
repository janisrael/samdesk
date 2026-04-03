// Function to check if a report is safe
function isSafeReport(levels) {
    let isIncreasing = true;
    let isDecreasing = true;
    
    for (let i = 0; i < levels.length - 1; i++) {
        const diff = levels[i + 1] - levels[i];
        
        // Check if difference is between 1 and 3 (inclusive)
        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            return false;
        }
        
        // Check direction
        if (diff > 0) {
            isDecreasing = false;
        } else if (diff < 0) {
            isIncreasing = false;
        }
    }
    
    // Report is safe if all increasing OR all decreasing
    return isIncreasing || isDecreasing;
}

// Function to count safe reports
function countSafeReports(input) {
    const lines = input.trim().split('\n');
    let safeCount = 0;
    
    for (const line of lines) {
        const levels = line.trim().split(/\s+/).map(Number);
        if (isSafeReport(levels)) {
            safeCount++;
        }
    }
    
    return safeCount;
}

// Example input
const exampleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

// Test with example
console.log("Example safe reports:", countSafeReports(exampleInput)); // Output: 2

// For your actual puzzle input, replace with the full input
const puzzleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

console.log("Answer:", countSafeReports(puzzleInput));
