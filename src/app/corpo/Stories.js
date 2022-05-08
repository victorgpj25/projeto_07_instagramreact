export default function Stories () {
    const stories = [{img: "assets/img/9gag.svg", nome: "9gag",}, {img: "assets/img/meowed.svg", nome: "meowed",}, {img: "assets/img/barked.svg", nome: "barked",}, {img: "assets/img/nathanwpylestrangeplanet.svg", nome: "nathanwpylestrangeplanet",}, {img: "assets/img/wawawicomics.svg", nome: "wawawicomics",}, {img: "assets/img/respondeai.svg", nome: "respondeai",}, {img: "assets/img/filomoderna.svg", nome: "filomoderna",}, {img: "assets/img/memeriagourmet.svg", nome: "memeriagourmet",}]

    function renderizarStory (story) {
        return (
            <div class="story">
                <div class="imagem">
                    <img src={story.img} />
                </div>
                <div class="usuario">
                    {story.nome}
                </div>
            </div>
        )
    }

    return (
        <div class="stories">
            
            {stories.map(renderizarStory)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}