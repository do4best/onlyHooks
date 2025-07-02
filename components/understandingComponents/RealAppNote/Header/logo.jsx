
export function Logo({ image, title, subtitle, onClick }) {
    return (
        <div onClick={onClick}>
            <div className={"flex object-contain cursor-pointer"}>
                <img className={"h-5 "} src={image} alt="logo" />
                <div className={" text-blue-500 font-bold"}>{title}</div>
            </div>
            <div className={"text-blue-500"}>{subtitle}</div>
        </div>
    );
}