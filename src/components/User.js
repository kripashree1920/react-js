
import React from "react";
class User extends React.Component {
    constructor(props) {
      super(props);

    }
   async componentDidMount(){
       // used to call api
    // const data = await fetch('api call')
    //   const json = await data.json
        //   this.setState({}) // used to update automaticlly state like usestate of functional component
    }
  
    render() {
      const roles = this.props?.role ?? []; 
      return (
        <div>
          {roles.map((r, index) => {
            const { name, about } = r; 
            return (
              <div key={index} className="w-[70%] m-auto my-4 border border-red-900 hover:bg-yellow-600 p-4 cursor-pointer shadow-md">
                <div className="about-user">
                  <h3 style={{ color: "#800000" }}>{name}: </h3>
                  <p>{about}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
  export default User