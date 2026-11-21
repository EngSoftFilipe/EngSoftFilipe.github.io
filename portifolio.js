// Respostas de cada rota do explorador
const respostas = {
    perfil: {
        nome: "Filipe Gabriel",
        cargo: "Desenvolvedor Back-end Java",
        cidade: "Aracaju, SE",
        idiomas: ["Português", "Inglês (B1)"]
    },
    stack: {
        linguagens: ["Java", "JavaScript"],
        web: ["HTML", "CSS"],
        framework: "Spring Boot",
        persistencia: ["Spring Data JPA", "Hibernate"],
        bancos: ["PostgreSQL", "MySQL", "MongoDB"],
        ferramentas: ["Docker", "Flyway", "Maven", "Git"],
        testes: "JUnit"
    },
    projetos: [
        { nome: "Products API", tipo: "API REST", status: "em evolução" },
        { nome: "Livraria JPA", tipo: "Persistência", status: "em evolução" },
        { nome: "Campo Minado", tipo: "Java com testes", status: "concluído" }
    ],
    estudos: {
        agora: "Spring Data JPA",
        curso: "Spring Boot Expert",
        cursando: "Engenharia de Software",
        proximos: ["Spring Security", "OAuth", "JWT"]
    },
    contato: {
        linkedin: "linkedin.com/in/filipe-gabriel-8450a5294",
        github: "github.com/EngSoftFilipe"
    }
};

// Pinta o JSON com cores (chave, texto, número)
function colorir(objeto) {
    const json = JSON.stringify(objeto, null, 2)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return json.replace(/("(?:[^"\\]|\\.)*")(\s*:)?|\b(\d+)\b/g, (trecho, texto, doisPontos, numero) => {
        if (texto && doisPontos) return '<span class="k">' + texto + "</span>" + doisPontos;
        if (texto) return '<span class="s">' + texto + "</span>";
        return '<span class="n">' + numero + "</span>";
    });
}

const saida = document.getElementById("saida");
const rotaAtual = document.getElementById("rota-atual");
const tempo = document.getElementById("tempo");
const botoes = document.querySelectorAll(".rotas button");

function mostrar(rota) {
    botoes.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.rota === rota)));
    rotaAtual.textContent = "GET /api/filipe/" + rota;
    tempo.textContent = (8 + Math.floor(Math.random() * 14)) + " ms";
    saida.innerHTML = colorir(respostas[rota]);
}

botoes.forEach(b => b.addEventListener("click", () => mostrar(b.dataset.rota)));
mostrar("perfil");