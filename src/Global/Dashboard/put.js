// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import "./Dashboard.css";

// // import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import { Typography, Button } from "@mui/material";
// import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
// import Dashbordhome from "./Dashbordhome/Dashbordhome";
// import useAuth from "../../contexts/useAuth";
// import MakeAdmin from "../../Pages/MakeAdmin/MakeAdmin";
// import MyOrder from "../../Pages/MyOrder/MyOrder";
// import AddProduct from "../../Pages/AddProduct/AddProduct";
// import ManageAllPorducts from "../../Pages/ManageAllPorducts/ManageAllPorducts";
// import ManageProducts from "../../Pages/ManageProducts/ManageProducts";
// import Pay from "../../Pages/Pay/Pay";
// import Review from "../../Pages/Review/Review";

// const DashBoard = (props) => {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   let { path, url } = useRouteMatch();
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };
//   const { admin, logOut } = useAuth();

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       {admin ? (
//         <Box>
//           <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
//             <Button
//               style={{ marginBottom: "10px" }}
//               variant="contained"
//               color="warning"
//             >
//               Make Admin
//             </Button>
//           </Link>
//           <Link style={{ textDecoration: "none" }} to={`${url}/addProduct`}>
//             <Button
//               style={{ marginBottom: "10px" }}
//               variant="contained"
//               color="warning"
//             >
//               Add Product
//             </Button>
//           </Link>
//           <Link style={{ textDecoration: "none" }} to={`${url}/manageProducts`}>
//             <Button
//               style={{ marginBottom: "10px" }}
//               variant="contained"
//               color="warning"
//             >
//               Manage Products
//             </Button>
//           </Link>
//           <Link
//             style={{ textDecoration: "none" }}
//             to={`${url}/manageAllOrders`}
//           >
//             <Button
//               style={{ marginBottom: "10px" }}
//               variant="contained"
//               color="warning"
//             >
//               Manage Orders
//             </Button>
//           </Link>
//         </Box>
//       ) : (
//         <Box>
//           <Link style={{ textDecoration: "none" }} to={`${url}/dashboard`}>
//             <Button
//               style={{ marginBottom: "10px" }}
//               variant="contained"
//               color="warning"
//             >
//               Dashboard
//             </Button>
//           </Link>
//           <Link style={{ textDecoration: "none" }} to="/explore">
//             <Button
//               style={{ marginBottom: "10px" }}
//               variant="contained"
//               color="warning"
//             >
//               Explore
//             </Button>
//           </Link>
//           <br />

//           <Link style={{ textDecoration: "none" }} to={`${url}/myOrder`}>
//             <Button
//               style={{ marginBottom: "10px" }}
//               variant="contained"
//               color="warning"
//             >
//               My Orders
//             </Button>
//           </Link>

//           <Link style={{ textDecoration: "none" }} to={`${url}/pay`}>
//             <Button
//               style={{ marginBottom: "10px" }}
//               variant="contained"
//               color="warning"
//             >
//               Payment
//             </Button>
//           </Link>
//           <br />
//           <Link style={{ textDecoration: "none" }} to={`${url}/review`}>
//             <Button
//               style={{ marginBottom: "10px" }}
//               variant="contained"
//               color="warning"
//             >
//               Review
//             </Button>
//           </Link>
//         </Box>
//       )}
//       <Button onClick={logOut} color="error" variant="contained">
//         Log Out
//       </Button>
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - 200px)` },
//           ml: { sm: `200px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             {/* <MenuIcon /> */}
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: "200px" }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: "200px",
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: "none", sm: "block" },
//             "& .MuiDrawer-paper": { boxSizing: "border-box", width: "200px" },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - 200px)` },
//         }}
//       >
//         <Toolbar />
//         <Switch>
//           <Route path={`${path}/dashboard`}>
//             <Dashbordhome></Dashbordhome>
//           </Route>
//           <Route path={`${path}/makeAdmin`}>
//             <MakeAdmin></MakeAdmin>
//           </Route>
//           <Route path={`${path}/myOrder`}>
//             <MyOrder></MyOrder>
//           </Route>
//           <Route path={`${path}/addProduct`}>
//             <AddProduct></AddProduct>
//           </Route>
//           <Route path={`${path}/manageAllOrders`}>
//             <ManageAllPorducts></ManageAllPorducts>
//           </Route>
//           <Route path={`${path}/manageProducts`}>
//             <ManageProducts></ManageProducts>
//           </Route>
//           <Route path={`${path}/pay`}>
//             <Pay></Pay>
//           </Route>
//           <Route path={`${path}/review`}>
//             <Review></Review>
//           </Route>
//         </Switch>
//       </Box>
//     </Box>
//   );
// };

// DashBoard.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DashBoard;
