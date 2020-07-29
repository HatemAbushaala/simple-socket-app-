var socket = io.connect('http://localhost:5050');

// dom objects
var btn = document.getElementById('postBtn');
var text = document.getElementById('post');

console.log(btn);
console.log(text);

btn.addEventListener('click', () => {
  post = text.value;
  socket.emit('chat', post);
});

socket.on('chat', (data) => {
  console.log(data);
  document.body.innerHTML += `<p>${data}</p>`;
});
