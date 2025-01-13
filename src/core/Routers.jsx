import { createBrowserRouter} from "react-router-dom";
import Lazy from "./Lazypadg";
import SITEMAP from "./Confirm";
import App from "../App";



const Routers = createBrowserRouter([
  
    {
     path : '/' ,
    //  errorElement : <div>No Page2</div> ,
     element : <App />,
     children : [
        {index: true , element : <Lazy.public.Home />},
        {    
         path : SITEMAP.first.path ,
         element :(<Lazy.public.Home />) 
        },
        {    
         path : SITEMAP.register.path ,
         element :(<Lazy.auth.register />) 
       },
       {    
        path : SITEMAP.login.path ,
        element :(<Lazy.auth.login  />) 
       },
       {    
        path : SITEMAP.homePadg.path ,
        element :(<Lazy.public.Home />) 
       },
       {    
        path : SITEMAP.search.path ,
        element :(<Lazy.public.Search />) 
       },
       {    
        path : SITEMAP.card.path ,
        element :(<Lazy.public.Card/>) 
       },
       {    
        path : SITEMAP.contact.path ,
        element :(<Lazy.public.Contact/>) 
       },
       {    
        path : `${SITEMAP.product.path}/:id` ,
        element :(<Lazy.public.Product />) 
       },    
       {    
        path : `${SITEMAP.products.path}/:Categories` ,
        element :(<Lazy.public.Products />) 
       }, 

      ]
    },
    {
      path : '*' ,
      element : <div>no page</div>
    }
])
export default Routers