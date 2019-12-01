import React,{useContext} from 'react'
import {Switch,Route,__RouterContext} from 'react-router-dom'
import pagedetails from '../json-data/navitems'
import Home from '../pages/Home/index'
import AboutUS from '../pages/About-us.js/index'
import ContactUs from '../pages/contact-us/index'
import {useTransition,animated} from 'react-spring'


const MyRouter=()=>{
    const {location}=useContext(__RouterContext)
    const transition=useTransition(location,location=>location.pathname,{
        from:{opacity:0,transform:'translate(100%, 0)'},
        enter:{opacity:1,transform:'translate(0%, 0)'},
        leave:{opacity:0.5,transform:'translate(-50%, 0)'}
    })

   
    return (
        <>
        {
             transition.map(({item,props,key})=>(
                <animated.div key={key} style={props} >
                    <Switch location={item}>            
                        {pagedetails.map(page=>(
                            <Route key={page.pathname} exact path={page.pathname} component={()=>`${page.name}`} />
                        ))}
                        </Switch>
                </animated.div>
            ))
        }
        </>        
    )
}

export default MyRouter

