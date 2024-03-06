import { useEffect, useState } from "react";
import { getMyPage } from "../api/getMypage";

const MyPage = () => {
    const [data, setData] = useState();
    
    useEffect(()=> {
        getMyPage().then((res) => {
            setData(res);
        });
    }, [])
    
    return (
        <div>
            <div>MyPage</div>
            <div>{data?.message}</div>
        </div>
    );
};

export default MyPage;