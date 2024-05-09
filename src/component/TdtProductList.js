import React, { Component } from 'react'

class Tdt_ProductList extends Component {

  render() {
    let{renderProducts} = this.props;
    console.log("Products:",renderProducts);
    let fnStatus = (param)=>{
      if(param===1){
        return 'Active';
      }
      return 'NonActive';
    }
    let elementProducts = renderProducts.map((item,index)=>{
      return (
        <>
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
              <td>
               {fnStatus(item.status)}
              </td>          
          </tr>
        </>

      )
    })
    return (
      <div>
        <h2>Danh sach san pham</h2>
        <table className='table table-bordered'>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>status</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Cabbage</td>
          </tr>
        </thead>
        <tbody>
          {elementProducts}
        </tbody>
        </table>
      </div>
    )
  }
}
export default Tdt_ProductList;