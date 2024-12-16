function onDragStart(event) {
    // Define o ID do elemento arrastado como dados transferíveis
    event.dataTransfer.setData('text/plain', event.target.id);
  
    // Altera a cor de fundo do elemento arrastado para amarelo
    event.target.style.backgroundColor = 'purple';
  }
  
  function onDragOver(event) {
    // Previne o comportamento padrão para permitir o drop
    event.preventDefault();
  }
  
  function onDrop(event) {
    // Previne o comportamento padrão
    event.preventDefault();
  
    // Obtém o ID do elemento arrastado
    const id = event.dataTransfer.getData('text');
  
    // Obtém o elemento arrastável e a zona de drop
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
  
    // Adiciona o elemento arrastável à zona de drop
    dropzone.appendChild(draggableElement);
  
    // Limpa os dados transferidos
    event.dataTransfer.clearData();
  }
  
