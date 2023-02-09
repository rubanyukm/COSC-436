
/*Function that that computes the standard deviation of a set of numbers.
The function takes the numbers as a variable number of parameters and returns the standard
deviation. The standard deviation of n numbers x1, x2 . . . xn is the square root of
[((x1-m)2 + (x2-m)2 + . . . + (xn-m)2)/n] where m is the average of the
numbers. If there are less than two numbers the standard deviation is 0.*/


function stdDev() {
    
        let sum = 0;
        let mean = 0;
        let stdDev = 0;
        let n = arguments.length;
    
        for (let i = 0; i < n; i++) {
    
            sum += arguments[i];
    
        }
    
        mean = sum / n;
    
        for (let i = 0; i < n; i++) {
    
            stdDev += Math.pow(arguments[i] - mean, 2);
    
        }
    
        stdDev = Math.sqrt(stdDev / n);
    
        return stdDev;
    
}