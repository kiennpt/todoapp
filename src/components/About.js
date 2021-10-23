import React, { useContext, useEffect } from 'react';
import { MyContext } from '../context/MyContext';

export const MyCard = React.memo(({ name, gender }) => {
    useEffect(() => {
        console.log('Render MyCard')
    });
    return (
        <div>
            <h3>My name: {name}</h3>
            <h4>Gender: {gender}</h4>
        </div>
    )
});

// Arrow Function components
export const About = () => {
    const { count, setCount } = useContext(MyContext);

    return (
        <div>
            <h2>GIỚI THIỆU</h2>
            <h3>HỌ VÀ TÊN: Nguyễn Phạm Trung Kiên</h3>
            <h3>MSSV: 4501104118</h3>
            <h3>NGÀY SINH: 19/04/2001</h3>
            <h3>EMAIL: kiennpt@gmail.com </h3>
            <h3>GIỚI TÍNH: Nam</h3>
        </div>
    )
};
