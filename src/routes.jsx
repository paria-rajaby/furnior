import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import PageLayout from "./Layouts/PageLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element:<Home />
            },
            {
                path: "page",
                element: <PageLayout/>,
                children: [
                    {
                        path:"Shop",
                        element:<Shop />
                    }
                ]
            }
        ]
    },
],


)

export default router
// import { createBrowserRouter } from "react-router";
// import MainLayout from "./Layouts/MainLayout";
// import Home from "./Pages/Home/Home";
// import Shop from "./Pages/Shop/Shop";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <MainLayout />,
//         children: [
//             {
//                 index: true,
//                 element:<Home />
//             },
//             {
//                 path: "shop",
//                 element: <Shop/>
//             }
//         ]
//     },
// ],


// )

// export default router