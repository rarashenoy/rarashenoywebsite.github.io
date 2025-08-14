document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll("nav#NavBar a");
    navButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            navButtons.forEach(function(buttons) {
                buttons.style.backgroundColor = "";
                buttons.style.color = "";
            });
            this.style.backgroundColor = "darkblue";
            this.style.color = "white";
        });
    });
});
window.addEventListener('scroll', function() {
  document.querySelectorAll('#Start, #Education, #Extra, #Projects, #Quote, #Contact').forEach(function(el) {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
    else {
      el.classList.remove('visible');
    }
  });
});
window.dispatchEvent(new Event('scroll'));
window.addEventListener('scroll', function count() {
  const c = document.getElementById('counter');
  if (!c || c.textContent !== '0') return;
  let n = 0, t = 10000, step = Math.ceil(t / 60); // ~60 steps
  const interval = setInterval(() => {
    n += step;
    if (n >= t) {
      c.textContent = t.toLocaleString();
      clearInterval(interval);
    } else {
      c.textContent = n.toLocaleString();
    }
  }, 25);
});

// Dark/Light mode toggle
const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
// Contact form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.onsubmit = function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var msg = document.getElementById('form-msg');
    if (!name || !email || !message) {
      msg.textContent = 'Please fill out all fields.';
      msg.style.color = 'red';
    } else if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      msg.textContent = 'Please enter a valid email.';
      msg.style.color = 'red';
    } else {
      msg.textContent = 'Message sent!';
      msg.style.color = 'green';
      this.reset();
    }
  };
}