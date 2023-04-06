import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Product from './pages/products/product'
import Users from './pages/users/Users'
import NewUser from './pages/newUser/NewUser'

let routes = [
    {path: "/", element: <Home />},
    {path: "/products", element: <Products />},
    {path: "/products/:id", element: <Product />},
    {path: "/users", element: <Users />},
    {path: "/newUser", element: <NewUser />},

]

export default routes