export default function Posts () {
    const posts = [{usuarioImg: "assets/img/meowed.svg", usuario: "meowed", conteudo: "assets/img/gato-telefone.svg", curtiuImg: "assets/img/respondeai.svg", curtiu: "respondeai", curtidas: "101.523"}, {usuarioImg: "assets/img/barked.svg", usuario: "barked", conteudo: "assets/img/dog.svg", curtiuImg: "assets/img/adorable_animals.svg", curtiu: "adorable_animals", curtidas: "99.159 "}]

    function renderizarPost (post) {
        return (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={post.usuarioImg} />
                        {post.usuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={post.conteudo} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="curtidas">
                        <img src={post.curtiuImg} />
                        <div class="texto">
                            Curtido por <strong>{post.curtiu}</strong> e <strong>outras {post.curtidas} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }

    return (
        <div class="posts">
            {posts.map(renderizarPost)}
        </div>
    )
}