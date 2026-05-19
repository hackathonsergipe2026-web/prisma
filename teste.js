const API_KEY = "AIzaSyCbO5WnI2CfmeASXdWS_axLznYbhhxTjDY"; 

async function descobrirProblema() {
    console.log("🔍 Perguntando ao Google quais IAs você tem acesso...");
    try {
        // Fazendo uma requisição direta, sem usar a biblioteca, para não ter erro
        const resposta = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
        const dados = await resposta.json();

        if (dados.error) {
            console.log("\n❌ O Google recusou a chave! Motivo do erro:");
            console.log(dados.error.message);
            console.log("Status:", dados.error.status);
        } else if (dados.models) {
            console.log("\n✅ O Google aceitou a chave! Aqui estão os modelos liberados para você:");
            dados.models.forEach(m => {
                // Filtrando só para mostrar os modelos Gemini
                if (m.name.includes("gemini")) {
                    console.log("👉", m.name);
                }
            });
        } else {
            console.log("\n🤔 Resposta estranha do Google:", dados);
        }
    } catch (erro) {
        console.log("\n❌ Erro de conexão da sua máquina:", erro.message);
    }
}

descobrirProblema();