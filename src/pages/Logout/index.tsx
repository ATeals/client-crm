import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserApi } from "../../api";

export default () => {
    const navigate = useNavigate();
    const func = async () => {
        const data = await UserApi.logout();
        console.log(data);
    };

    useEffect(() => {
        func();
        navigate("/login");
    }, []);

    return <></>;
};
