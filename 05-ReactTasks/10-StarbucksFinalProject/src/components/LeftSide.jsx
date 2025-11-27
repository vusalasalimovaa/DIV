import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenu } from '../redux/slice/menuSlice';

const LeftSide = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenu());
  }, []);

  const menu = useSelector((state) => state.menu.data);
//   console.log(menu);

  const leftData = [...new Set(menu.map(item => item.subcategory))]
//   console.log(leftData); 

  return <>
  {
    leftData.map((item,index) => {
        return <div key={index}>{item}</div>
    })
  }
  </>;
};

export default LeftSide;
