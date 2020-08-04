import React, { Component } from 'react';
import Itembuah from './ItemBuah'
class DaftarBuah extends Component{
    render(){
        let dataHargaBuah = [
            {nama: "Semangka", harga: 10000, berat: 1000},
            {nama: "Anggur", harga: 40000, berat: 500},
            {nama: "Strawberry", harga: 30000, berat: 400},
            {nama: "Jeruk", harga: 30000, berat: 1000},
            {nama: "Mangga", harga: 30000, berat: 500}
          ]

          return(
           <>
           <table style={{border: '1px solid black', width:"40%", margin:"20px auto"}}>
               <thead style={{backgroundColor:"yellow"}}>
                   <tr>
                       <th>Nama</th>
                   
                       <th>Harga</th>
                   
                       <th>Berat</th>
                   </tr>
               </thead>
               <tbody style={{backgroundColor:"coral"}}>
                {
                    dataHargaBuah.map(el=>{
                        return(
                            <Itembuah item={el}/>
                        )
                    })
                }
           </tbody>
           </table>
           </>   
          )
    }
}

export default DaftarBuah