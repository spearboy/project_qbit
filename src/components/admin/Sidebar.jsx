import React from 'react';
import logoSvg from "../../../public/img/logo.svg";
import Image from 'next/image';

const Sidebar = ({ setCurrentView }) => {
    return (
        <div className='sidebar'>
            <div className="logo">
                <Image src={logoSvg} width={30} alt="qbit logo" height={30} />
            </div>
            <div className="my_store">
                <div className="my_store_title">
                    <h2>내 가게</h2>
                    <div className="icon-24-arrow-down"></div>
                </div>
                <div className='my_store_info'>
                    <div onClick={() => setCurrentView('DashboardMain')} className='dasiboard'>대시보드</div>
                    <div onClick={() => setCurrentView('StoreInformation')} className="store_information">가게정보</div>
                </div>
            </div>
            <div className="sales_management">
                <div className="sales_management_title">
                    <h2>매출 관리</h2>
                    <div className="icon-24-arrow-down"></div>
                </div>
                <div className="sales_management_info">
                    <div onClick={() => setCurrentView('MenuStatistics')} className="menu_statistics">메뉴별 통계</div>
                    <div onClick={() => setCurrentView('DateStatistics')} className="date_statistics">날짜별 통계</div>
                </div>
            </div>
            <div className="menu_management">
                <div onClick={() => setCurrentView('MenuManagement')}>메뉴관리</div>
            </div>
            <div className="table_management">
                <div className="table_management_title">
                    <h2>테이블 관리</h2>
                    <div className="icon-24-arrow-down"></div>
                </div>
                <div className="table_management_info">
                    <div onClick={() => setCurrentView('CheckQR')} className="check_QR">태이블 QR확인</div>
                    <div onClick={() => setCurrentView('EditTable')} className="edit">테이블 편집</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
