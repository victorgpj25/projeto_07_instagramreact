export default function Sugestoes () {
    const sugestoes = [{img: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você"}, {img: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você"}, {img: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram"}, {img: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você"}, {img: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você"}]

    function renderizarSugestao (sugestao) {
        return (
            <div class="sugestao">
                <div class="usuario">
                    <img src={sugestao.img} />
                    <div class="texto">
                        <div class="nome">{sugestao.nome}</div>
                        <div class="razao">{sugestao.razao}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>    
            </div>
        )
    }


    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map(renderizarSugestao)}
        </div>
    )
}