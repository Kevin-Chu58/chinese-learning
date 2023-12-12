import style from "./playground.module.css";
import Postcard from "../../components/Postcard";

const Playground = () => {
    return (
        <div className={style.playgroundContainer}>
            <Postcard />
        </div>
    )
}

export default Playground;