import React from 'react';
import App from './../App';



class Card extends React.Component{
    render(){
        const {data, click}=this.props
        console.log(data, click)
        return(
            <div>
                
    <ul className="list">
        {data.map(item=>{
          return (
          <li className="item">
          <h2> {item.name} </h2>
         
            {item.colors.map(color=>{
            return(
              <div
              className="colors"
              onClick={click}
              style={{
                backgroundColor:`#${color}`,
              }
              }
              > {color}</div>
            )
          })}
          </li>
          )
        }
        
        )}
 </ul>
            </div>
           
    
        )
    }
}

export default Card;

