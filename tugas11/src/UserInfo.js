import React from 'react';


class NamaBuah extends React.Component{
    render(){
        return <p>{this.props.nama}</p>
    }
}
class HargaBuah extends React.Component{
    render(){
        return <p>{this.props.harga}</p>
    }
}
class BeratBuah extends React.Component{
    render(){
        return <p>{this.props.berat}</p>
    }
}

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]


  class UserInfo extends React.Component {
    render() {
      return (
        <>
          {dataHargaBuah.map(el=> {
            return (
              <table style={{padding:"20px", margin:"20px auto"}}>
                  <thead>
                      <tr> 
                      <th>Nama</th>
                      <th>Harga</th>
                      <th>Berat</th>
                      </tr>
                  </thead>
                  <tr>
                      <td>
                          <NamaBuah nama={el.nama}/>
                      </td>
                      <td>
                          <HargaBuah harga={el.harga}/>
                      </td>
                      <td>
                          <BeratBuah berat={el.berat}/>
                      </td>
                  </tr>
                  
              </table>
            )
          })}
        </>
      )
    }
  }
  
  export default UserInfo