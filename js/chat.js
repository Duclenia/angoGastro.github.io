document.getElementById('send-button').addEventListener('click', function() {
    const input = document.getElementById('message-input');
    const messageText = input.value.trim();
  
    if (messageText !== '') {
        addMessage('Você', messageText);
        addMessage('AngoGastro', 'Mensagem recebida!');
        input.value = '';
    }
  });
  
  function addMessage(user, text) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');
  
    const userSpan = document.createElement('span');
    userSpan.classList.add('user');
    userSpan.textContent = user + ':';
  
    const textSpan = document.createElement('span');
    textSpan.classList.add('text');
    textSpan.textContent = text;
  
    messageContainer.appendChild(userSpan);
    messageContainer.appendChild(textSpan);
  
    document.getElementById('chat-messages').appendChild(messageContainer);
  
    // Rola para a última mensagem
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  