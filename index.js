const API_AI_KEY = '';

const btn = document.getElementById('btn');
const input = document.getElementById('input');
const img = document.getElementById('img');

btn.addEventListener('click', async () => {
  console.log(input.value);
  console.log('API_AI_KEY', API_AI_KEY);
  

  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    body: JSON.stringify({
      prompt: input.value,
      n: 1,
      size: '1024x1024',
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_AI_KEY}`,
    },
  });

  const data = await res.json();

  console.log(data);

  img.src = data.data[0].url;
  img.alt = input.value;
});
