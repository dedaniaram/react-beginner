import React from "react";

const Area = () =>{
      //Our histogram in form of Array
      const arr = [7,2,8,9,1,3,6,5];
      const N = 7;
     
      let temp = [];
      let max_area = 0;
      let index = 0;
     
      while (index < arr.length){
        if (temp.length == 0 || arr[temp[temp.length - 1]] <= arr[index]) {
            temp.push(index)
            index += 1
        }
        else{
            let top = temp.pop()
            let area = (arr[top] * (temp.length > 0 ? (index - temp[temp.length - 1] - 1)  : index ))
            max_area = Math.max(max_area, area)
        }
      }
      while (temp.length > 0){
        let top = temp.pop()
        let area = (arr[top] * (temp.length > 0 ? (index - temp[temp.length - 1] - 1) : index ))
        max_area = Math.max(max_area, area)

      }
      return <>
      <h1>The max Area of histogram is:{max_area}</h1>
      </>
};

export default Area;