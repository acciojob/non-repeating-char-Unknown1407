function firstNonRepeatedChar(str) {
 // Write your code here
	const count = {}

	for(let char of str)
		{
			count[char] = (count[char] || 0)+1;
		}

	for(let char of str)
		{
			if(count[char] === 1)
			{
				return char;
			}
			else
			{
				return ("null");
			}
		}
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
