const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const names = [
  "John Doe",
  "Jane Smith",
  "Michael Johnson",
  "Emily Davis",
  "Chris Brown",
  "Emma Wilson",
  "Alex Thompson",
  "Olivia White",
  "Daniel Miller",
  "Sophia Harris",
];
const emails = [
  "john.doe@example.com",
  "jane.smith@example.com",
  "michael.johnson@example.com",
  "emily.davis@example.com",
  "chris.brown@example.com",
  "emma.wilson@example.com",
  "alex.thompson@example.com",
  "olivia.white@example.com",
  "daniel.miller@example.com",
  "sophia.harris@example.com",
];
const profileImages = [
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzA7T7rMaHTT9veI5vW4n_Qz78YAwLD6Wmj_-Nsl6z5q0CIkQCmY5W98Ih_1awTjlrOQ4&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8l3oUGBY-zkrjnnArCOJsIgPWFDWl42araI_9qwkF8IbaJflkH3IWeEQsGug9uZ_ZTUw&usqp=CAU",
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzA7T7rMaHTT9veI5vW4n_Qz78YAwLD6Wmj_-Nsl6z5q0CIkQCmY5W98Ih_1awTjlrOQ4&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8l3oUGBY-zkrjnnArCOJsIgPWFDWl42araI_9qwkF8IbaJflkH3IWeEQsGug9uZ_ZTUw&usqp=CAU",
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzA7T7rMaHTT9veI5vW4n_Qz78YAwLD6Wmj_-Nsl6z5q0CIkQCmY5W98Ih_1awTjlrOQ4&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8l3oUGBY-zkrjnnArCOJsIgPWFDWl42araI_9qwkF8IbaJflkH3IWeEQsGug9uZ_ZTUw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWO5ey-lskMBK9__wzfPY2QPeWp9ChTHBU9VvRnTteA&s",
];

const chipData = [];

for (let i = 1; i <= 20; i++) {
  if (names.length === 0 || emails.length === 0) {
    console.warn("Not enough unique names or emails available.");
    break;
  }

  const randomNameIndex = getRandomInt(0, names.length - 1);
  const randomEmailIndex = getRandomInt(0, emails.length - 1);

  const name = names.splice(randomNameIndex, 1)[0];
  const email = emails.splice(randomEmailIndex, 1)[0];

  chipData.push({
    id: i,
    name: name,
    email: email,
    profilImage: profileImages[i - 1], // Using index as a simple way to match profiles with other data
  });
}

export default chipData;
