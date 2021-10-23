import { createContext, useState } from "react";

export const TodoContext = createContext({
    data: [],
    setData: () => { },
});

const initData = [
    {
        "id": 1,
        "name": "Phân tích và thiết kế giải thuật",
        "isCompleted": false,
        "deadline": '2020-2021'
    },
    {
        "id": 2,
        "name": "Hệ điều hành",
        "isCompleted": false,
        "deadline": '2020-2021'
    },
    {
        "id": 3,
        "name": "Phát triển ứng dụng Web",
        "isCompleted": false,
        "deadline": '2020-2021'
    },
    {
        "id": 4,
        "name": "Cơ sở dữ liệu",
        "isCompleted": false,
        "deadline": '2020-2021'
    },
    {
        "id": 5,
        "name": "Cấu trúc dữ liệu",
        "isCompleted": false,
        "deadline": '2020-2021'
    },
    {
        "id": 6,
        "name": "Công nghệ JAVA",
        "isCompleted": true,
        "deadline": '2021-2022'
    },
    {
        "id": 7,
        "name": "Hệ thống mã nguồn mỡ ",
        "isCompleted": true,
        "deadline": '2021-2022'
    },
    {
        "id": 8,
        "name": "Xử lý ảnh số",
        "isCompleted": true,
        "deadline": '2021-2022'
    },
    {
        "id": 9,
        "name": "Trí tuệ nhân tạo",
        "isCompleted": true,
        "deadline": '2021-2022'
    }
];


export const TodoContextProvider = ({ children }) => {
    const [myData, setMyData] = useState(initData);
    return (
        <TodoContext.Provider value={{
            data: myData,
            setData: setMyData,
        }}>
            {children}
        </TodoContext.Provider>
    )
};