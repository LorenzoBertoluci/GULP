let currentPage = 1;

function changePage(page) {
    // Esconder a página atual
    document.getElementById(`page${currentPage}`).style.display = 'none';

    // Atualizar a página atual
    currentPage = page;

    // Exibir a nova página
    document.getElementById(`page${currentPage}`).style.display = 'flex';
}

