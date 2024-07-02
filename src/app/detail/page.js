import Detail_menu_top from "@/components/detail/Detail_menu_top";
import Detail_menu_bottom from "@/components/detail/Detail_menu_bottom";
import Image from "@/components/common/Image";
import Line from "@/components/common/Line";

export default function Detail() {
    return (
        <>
            <div className="Img">
                <Image />
            </div>
            <div className="container">
                <Detail_menu_top />
            </div>
            <Line />
            <div className="container">
                <Detail_menu_bottom />
            </div>
        </>
    );
}
