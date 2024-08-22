const etusivuBtn = document.getElementById('etusivu-btn');
const tietoaBtn = document.getElementById('tietoa-btn');
const yhteystiedotBtn = document.getElementById('contact-btn');
const cvBtn = document.getElementById('cv-btn');
const importantBtn = document.getElementById('important-btn');
const root = document.getElementById('root');

// Add event listeners to the buttons
etusivuBtn.addEventListener('click', () => {
  root.innerHTML = `
    <h2>Home</h2>
    <p>Welcome to my portfolio!</p>
    <p>Here you will find all the info about me that you might need.</p>
  `;
});

tietoaBtn.addEventListener('click', () => {
  root.innerHTML = `
    <h2>About Me</h2>
    <p>My name is Olli I'm 17 years old and I'm a Software Developer.</p>
    <p>I'm passionate about Ice Hockey and gaming.</p>
  `;
});

yhteystiedotBtn.addEventListener('click', () => {
  root.innerHTML = `
    <h2>Contacts</h2>
    <p>Contact me at olli.laaksoviita@student.careeria.fi or 0409652233.</p>
    <p>You can also find me on snapchat @pojk07.</p>
  `;
});

cvBtn.addEventListener('click', () => {
  root.innerHTML = `
    <h2>CV</h2>
    <ul>
      <li>Education: I have a vocational qualification in ICT and I'm focusing on software development.</li>
      <li>Work Experience: I have some work experience in customer service.</li>
      <li>Skills: Javascript, HTML, CSS, C#, node.js.</li>
    </ul>
  `;
});

importantBtn.addEventListener('click', () => {
  root.innerHTML = `
    <h2>Important</h2>
    <p>I love my country. I love the military. I love KARJALA. KARJALA ON OLEVA VAPAA.</p>
    `;
});

// Get the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Add an event listener to the theme toggle button
themeToggle.addEventListener('click', () => {
  // Toggle the dark mode class on the body element
  document.body.classList.toggle('dark-mode');
});

const datetimeElement = document.getElementById('datetime');

function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const datetime = now.toLocaleTimeString('fi-FI', options);
  datetimeElement.textContent = datetime;
}

updateDateTime();
setInterval(updateDateTime, 1000); // update every 1 second