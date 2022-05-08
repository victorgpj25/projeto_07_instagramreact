import Stories from "./corpo/Stories.js";
import Posts from "./corpo/Posts.js";
import Usuario from "./corpo/Usuario.js";
import Sugestoes from "./corpo/Sugestoes.js";
import LinksCopyright from "./corpo/LinksCopyright.js";



export default function Corpo () {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>

            <div class="sidebar">
                <Usuario img="assets/img/catanacomics.svg" login="catanacomics" nome="Catana" />
                <Sugestoes />
                <LinksCopyright />
            </div>
        </div>
    )
}