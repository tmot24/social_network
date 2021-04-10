import style from "./profile.module.css";
import {MyPosts} from "./myPosts/myPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img className={style.bgImg}
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                alt="img"/>
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts/>
        </div>
    );
};