export async function sendContactForm(data) {
  // Aqui você pode integrar com uma API real, como SendGrid, EmailJS, etc.
  // Por enquanto, simula um envio com delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Mensagem enviada com sucesso!' });
    }, 1200);
  });
} 