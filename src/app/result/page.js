import Line from "@/components/common/Line";
import My_basket from "@/components/result/My_basket";
import Your_basket from "@/components/result/Your_basket";

export default function Result() {
    return (
        <>
            <div className="container">
                <My_basket />
            </div>
                <Line />
            <div className="container">
                <Your_basket />
            </div>
        </>
    );
}
