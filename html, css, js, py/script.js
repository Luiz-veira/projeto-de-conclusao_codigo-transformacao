document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll("main section[id^='container-']");
    containers.forEach(container => {
        container.style.display = "none";
    });

    // Adiciona evento de clique aos botões
    document.getElementById("html").addEventListener("click", function () {
        mostrarContainer("container-html");
    });

    document.getElementById("css").addEventListener("click", function () {
        mostrarContainer("container-css");
    });

    document.getElementById("js").addEventListener("click", function () {
        mostrarContainer("container-js");
    });

    document.getElementById("py").addEventListener("click", function () {
        mostrarContainer("container-py");
    });

    function mostrarContainer(id) {
        containers.forEach(container => {
            if (container.id === id) {
                container.style.display = "block"; 
            } else {
                container.style.display = "none";
            }
        });
    }
});


    // document.addEventListener("DOMContentLoaded", () => {
    //     const buttons = document.querySelectorAll(".botao button");
    //     const containers = document.querySelectorAll(".container");

    //     // Função para alternar contêineres
    //     function showContainer(id) {
    //         // Esconde todos os contêineres
    //         containers.forEach(container => container.classList.remove("active"));
    //         // Remove a classe 'active' de todos os botões
    //         buttons.forEach(button => button.classList.remove("active"));
    //         // Mostra o contêiner correspondente e ativa o botão
    //         document.querySelector(`#container-${id}`).classList.add("active");
    //         document.querySelector(`#${id}`).classList.add("active");

    //         // Altera a cor do fundo da página
    //         document.body.style.backgroundColor = id === "html" ? "#f9f9f9" :
    //                                               id === "css" ? "#e0f7fa" :
    //                                               id === "js" ? "#fffde7" : "#e8f5e9";
    //     }

    //     // Adiciona evento de clique a cada botão
    //     buttons.forEach(button => {
    //         button.addEventListener("click", () => {
    //             showContainer(button.id);
    //         });
    //     });
    // });

