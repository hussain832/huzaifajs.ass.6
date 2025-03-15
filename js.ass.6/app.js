// 1. Merge first and last name and greet user
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName);

// 2. Find length of mobile model input
let mobileModel = prompt("Enter your favorite mobile model:");
alert("Length of input: " + mobileModel.length);

// 3. Find index of 'n' in 'Pakistani'
let country = "Pakistani";
alert("Index of 'n': " + country.indexOf("n"));

// 4. Find last index of 'l' in 'Hello World'
let phrase = "Hello World";
alert("Last index of 'l': " + phrase.lastIndexOf("l"));

// 5. Character at 3rd index in 'Pakistani'
alert("Character at index 3: " + country.charAt(3));

// 6. Repeat Q1 using concat()
let fullNameConcat = firstName.concat(" ", lastName);
alert("Hello, " + fullNameConcat);

// 7. Replace 'Hyder' with 'Islam' in 'Hyderabad'
let city = "Hyderabad";
alert("Updated city name: " + city.replace("Hyder", "Islam"));

// 8. Replace all occurrences of 'and' with '&'
let message = "Ali and Sami are best friends. They play cricket and football together.";
alert("Updated message: " + message.replace(/and/g, "&"));

// 9. Convert '472' to a number and display types
let strNum = "472";
let num = Number(strNum);
alert("String: " + strNum + " (type: " + typeof strNum + ")\nNumber: " + num + " (type: " + typeof num + ")");

// 10. Convert user input to uppercase
let userInput = prompt("Enter text:");
alert("Uppercase: " + userInput.toUpperCase());

// 11. Convert user input to title case
function toTitleCase(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
alert("Title Case: " + toTitleCase(userInput));

// 12. Remove dot from '35.36'
let num2 = "35.36";
alert("Updated number: " + num2.replace(".", ""));

// 13. Validate username
let username = prompt("Enter username:");
if (/[!@.,]/.test(username)) {
  alert("Invalid username. Please avoid special characters [@ . , !]");
}

// 14. Search item in an array
let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("Enter item to search:").toLowerCase();
alert(items.includes(searchItem) ? searchItem + " is available" : "Not available");

// 15. Validate password
let password = prompt("Enter password:");
if (!/^[a-zA-Z][a-zA-Z0-9]{5,}$/.test(password)) {
  alert("Invalid password. Must be at least 6 characters, contain letters & numbers, and not start with a number.");
}

// 16. Convert string to array
let university = "University of Karachi";
alert(university.split(" ").join("\n"));

// 17. Display last character of input
alert("Last character: " + userInput.charAt(userInput.length - 1));

// 18. Count occurrences of 'the'
let text = "The quick brown fox jumps over the lazy dog";
alert("Occurrences of 'the': " + (text.match(/the/gi) || []).length);

// Math Methods
let posInt = +prompt("Enter a positive integer:");
alert(`Number: ${posInt}\nRound off: ${Math.round(posInt)}\nFloor: ${Math.floor(posInt)}\nCeil: ${Math.ceil(posInt)}`);

let negFloat = +prompt("Enter a negative floating point number:");
alert(`Number: ${negFloat}\nRound off: ${Math.round(negFloat)}\nFloor: ${Math.floor(negFloat)}\nCeil: ${Math.ceil(negFloat)}`);

alert("Absolute value: " + Math.abs(negFloat));
alert("Dice roll: " + Math.floor(Math.random() * 6 + 1));
alert("Coin toss: " + (Math.random() > 0.5 ? "Heads" : "Tails"));
alert("Random number (1-100): " + Math.floor(Math.random() * 100 + 1));

// Date Methods
let now = new Date();
alert("Current Date and Time: " + now);
alert("Current Month: " + now.toLocaleString('default', { month: 'long' }));
alert("Current Day: " + now.toLocaleString('default', { weekday: 'short' }));
alert(now.getDay() === 0 || now.getDay() === 6 ? "It’s Fun day" : "Work day");

// More date calculations can be added following similar logic
