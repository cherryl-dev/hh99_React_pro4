import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMyPage } from "../api/getMypage";
import Header from "../components/common/Header";

const MyPage = () => {
    const [data, setData] = useState();
    const location = useLocation();
    
    useEffect(()=> {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/';
        }

        getMyPage().then((res) => {
            setData(res);
        });
    }, [location])
    
    return (
        <>
        <Header />
        <div>
            <div>MyPage</div>
            <div>{data?.message}</div>
        </div>
        </>
    );
};

export default MyPage;