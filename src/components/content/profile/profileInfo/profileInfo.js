import style from "./profileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.bgImg}
                     src="https://image.jimcdn.com/app/cms/image/transf/none/path/s32f0c11b497c174c/backgroundarea/i10997fa6378f4ba6/version/1571363056/image.jpg"
                     alt="img"/>
            </div>
            <div className={style.descriptionBlock}>
                ava + desc
            </div>
        </div>
    )
}