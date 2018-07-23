const app = document.querySelector('#app');

function greet(greeting = 'Hello') {
  return function greetFriend(name) {
    return `<p>${greeting} ${name}</p>`;
  }
}

const friends = ['Bob', 'Billy', 'Peter', 'Alice'];

friends
  .map(name => greet('Hola')(name))
  .forEach(greeting => app.innerHTML += greeting);
