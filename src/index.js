import './styles.css'

const app = document.getElementById('app');

// Membuat elemen heading
const heading = document.createElement('h1');
heading.textContent = 'Selamat Datang di Aplikasi Saya';

// Membuat elemen paragraf
const paragraph = document.createElement('p');
paragraph.textContent = 'Ini adalah aplikasi sederhana yang dibuat dengan JavaScript dan Webpack.';

// Membuat tombol
const button = document.createElement('button');
button.textContent = 'Klik Saya';
button.addEventListener('click', () => {
  alert('Tombol telah diklik!');
});

// Menambahkan elemen-elemen ke dalam app
app.appendChild(heading);
app.appendChild(paragraph);
app.appendChild(button);

// Menambahkan sedikit gaya
app.style.fontFamily = 'Arial, sans-serif';
app.style.maxWidth = '800px';
app.style.margin = '0 auto';
app.style.padding = '20px';
heading.style.color = '#333';
button.style.padding = '8px 16px';
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '4px';
button.style.cursor = 'pointer';
