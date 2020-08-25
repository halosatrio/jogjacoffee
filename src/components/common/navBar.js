import React from "react";

import IconText from "./iconText";
import Button from "./button";

import { CartIcon } from "../../assets/icons";

const NavBar = (props) => {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <IconText className="mx-auto" />
        </div>
      </nav>
    );
  }

  return (
    <>
      {/* WHEN MD AND LARGER */}
      <div className="d-none d-md-block sticky-top">
        <ul
          className="nav justify-content-around shadow-sm"
          style={{ paddingRight: 60, paddingLeft: 60 }}
        >
          <IconText className="my-auto pl-3">Jogja Coffee Fest</IconText>
          <li className={`nav-item${getNavLinkClass("/katalog")} ml-auto`}>
            <Button className="nav-link" type="link" href="/katalog">
              Catalogue
            </Button>
          </li>
          <li className={`nav-item${getNavLinkClass("/cart")}`}>
            <Button className="nav-link" type="link" href="/cart">
              <CartIcon width={"18px"} />
              Cart
            </Button>
          </li>
        </ul>
      </div>

      {/* WHEN SM AND SMALLER */}
      <div className="d-none d-sm-block d-md-none sticky-top">
        <ul className="nav justify-content-around shadow-sm">
          <IconText className="my-auto pl-3">Coffee Fest</IconText>
          <li className={`nav-item${getNavLinkClass("/katalog")}`}>
            <Button className="nav-link" type="link" href="/katalog">
              Catalogue
            </Button>
          </li>
          <li className={`nav-item${getNavLinkClass("/cart")}`}>
            <Button className="nav-link" type="link" href="/cart">
              <CartIcon width={"18px"} />
              Cart
            </Button>
          </li>
        </ul>
      </div>

      {/* WHEN SM AND SMALLER */}
      <div className="d-block d-sm-none sticky-top">
        <ul className="nav justify-content-around shadow-sm">
          <IconText className="my-auto px-3" style={{ fontSize: 16 }}>
            Coffee Fest
          </IconText>
          <li className={`nav-item${getNavLinkClass("/katalog")}`}>
            <Button
              className="nav-link"
              type="link"
              href="/katalog"
              style={{ fontSize: 14 }}
            >
              Catalogue
            </Button>
          </li>
          <li className={`nav-item${getNavLinkClass("/cart")}`}>
            <Button
              className="nav-link"
              type="link"
              href="/cart"
              style={{ fontSize: 14 }}
            >
              <CartIcon width={"14px"} />
              Cart
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
// import React, { useContext } from "react";

// import IconText from "./iconText";
// import Button from "./button";

// import { CartIcon } from "../../assets/icons";
// import { CartContext } from "../../context/CartContext";

// const NavBar = (props) => {
//   const { itemCount } = useContext(CartContext);

//   const getNavLinkClass = (path) => {
//     return props.location.pathname === path ? " active" : "";
//   };

//   if (props.isCentered) {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light py-3">
//         <div className="container">
//           <IconText className="mx-auto" />
//         </div>
//       </nav>
//     );
//   }

//   return (
//     <>
//       {/* WHEN MD AND LARGER */}
//       <div className="d-none d-md-block sticky-top">
//         <ul
//           className="nav justify-content-around shadow-sm"
//           style={{ paddingRight: 60, paddingLeft: 60 }}
//         >
//           <IconText className="my-auto pl-3">Jogja Coffee Fest</IconText>
//           <li className={`nav-item${getNavLinkClass("/katalog")} ml-auto`}>
//             <Button className="nav-link" type="link" href="/katalog">
//               Catalogue
//             </Button>
//           </li>
//           <li className={`nav-item${getNavLinkClass("/cart")}`}>
//             <Button className="nav-link" type="link" href="/cart">
//               <CartIcon width={"18px"} />
//               Cart ({itemCount})
//             </Button>
//           </li>
//         </ul>
//       </div>

//       {/* WHEN SM AND SMALLER */}
//       <div className="d-none d-sm-block d-md-none sticky-top">
//         <ul className="nav justify-content-around shadow-sm">
//           <IconText className="my-auto pl-3">Coffee Fest</IconText>
//           <li className={`nav-item${getNavLinkClass("/katalog")}`}>
//             <Button className="nav-link" type="link" href="/katalog">
//               Catalogue
//             </Button>
//           </li>
//           <li className={`nav-item${getNavLinkClass("/cart")}`}>
//             <Button className="nav-link" type="link" href="/cart">
//               <CartIcon width={"18px"} />
//               Cart ({itemCount})
//             </Button>
//           </li>
//         </ul>
//       </div>

//       {/* WHEN SM AND SMALLER */}
//       <div className="d-block d-sm-none sticky-top">
//         <ul className="nav justify-content-around shadow-sm">
//           <IconText className="my-auto px-3" style={{ fontSize: 16 }}>
//             Coffee Fest
//           </IconText>
//           <li className={`nav-item${getNavLinkClass("/katalog")}`}>
//             <Button
//               className="nav-link"
//               type="link"
//               href="/katalog"
//               style={{ fontSize: 14 }}
//             >
//               Catalogue
//             </Button>
//           </li>
//           <li className={`nav-item${getNavLinkClass("/cart")}`}>
//             <Button
//               className="nav-link"
//               type="link"
//               href="/cart"
//               style={{ fontSize: 14 }}
//             >
//               <CartIcon width={"14px"} />
//               Cart ({itemCount})
//             </Button>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default NavBar;
