import My_basket from "@/components/result/My_basket";
import Your_basket from "@/components/result/Your_basket";

export default function Result() {
    return (
        <div className="container">
            <My_basket />
            <Your_basket />
        </div>
    );
}
