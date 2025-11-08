import { createBrowserRouter } from "react-router-dom"
import SignIn from "../pages/SingIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import Layout from "../layout/layout"
import Board from "../pages/board/board"
import CreateItem from "../pages/createItem/createItem"
import ItemDetail from "../pages/itemDetail/itemDetail"
import MyBids from "../pages/myBids/myBids"

export const router = createBrowserRouter([
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
    path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Board /> },
            {
                path: "/createItem",
                element: <CreateItem/>
            },
            {
                path: "/itemDetail",
                element: <ItemDetail/>
            },
            {
                path: "/myBids",
                element: <MyBids/>
            },
            {
                path: "my-messages",
                element: <></>,
                // element: (
                //     <AuthGuard>
                //         <MyMessages />
                //     </AuthGuard>
                // ),
            },
        ],
    },
])