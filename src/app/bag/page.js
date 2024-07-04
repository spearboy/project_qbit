import Line from "@/components/common/Line";
import My_bag from "@/components/bag/My_bag";
import Your_bag from "@/components/bag/Your_bag";

export default function Bag() {
    return (
        <>
            <div className="container">
                <My_bag />
            </div>
            <Line />
            <div className="container">
                <Your_bag />
            </div>
        </>
    );
}
