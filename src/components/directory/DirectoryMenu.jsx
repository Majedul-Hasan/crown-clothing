import React from 'react'
import MenuItem from '../../components/menu-items/MenuItem';
import './DirectoryMenu.scss'

class Directory extends React.Component { 
   constructor() {
      super();

      this.state ={
         sections: [
            {
               title: 'hats',
               imageUrl : 'https://i.ibb.co/cvpntL1/hats.png',
               id: 1
            },
            {
               title: 'jackets',
               imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png',
               id: 2
            },
            {
               title: 'sneakers',
               imageUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
               id: 3
            },
            {
               title: 'women\'s',
               imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
               size: 'large',
               id: 4
            },
            {
               title: 'men\'s',
               imageUrl : 'https://i.ibb.co/R70vBrQ/men.png',
               size: 'large',
               id: 5
            },
         ]
      }
   }

   render(){
      return(
          <div className="directory-menu">
             {
                this.state.sections.map(({title, imageUrl, id, size})=>(
                   < MenuItem title={title} kye = {id} imageUrl={imageUrl} size ={size } />
                )
                   

                )
            }


          </div>
      )
   }



}


// const DirectoryMenu = () =>(
//       <div className="directory-menu">
//            < MenuItem title="hats" />
//          < MenuItem title="jackets" />
//          < MenuItem title="pants" />
//          < MenuItem title="Women's" />
//          < MenuItem title="man's" />
         
//       </div>
//    )

export default Directory
