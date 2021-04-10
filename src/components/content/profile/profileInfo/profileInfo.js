import style from "./profileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.bgImg}
                     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                     alt="img"/>
            </div>
            <div className={style.descriptionBlock}>
                ava + desc
            </div>
        </div>
    )
}