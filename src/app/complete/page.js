"use client"
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

export default function complete() {
    const router = useRouter();
    const handleMenuPage = () => {
        router.push('/main');
    }
    const handleResultPage = () => {
        router.push('/result');
    }
    return (
        <div className="complete__wrapper">
            <div className="bottom__wrapper container">
                <Button className={'sub__button'} onClick={handleMenuPage}>메뉴 보기</Button>
                <Button className={'main__button'} onClick={handleResultPage}>주문내역 보기</Button>
            </div>
        </div>
    );
}
