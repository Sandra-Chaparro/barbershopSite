// src/components/Layout.js
import "./Layout.css";
const Layout = ({ children }) => {
    return (
      <div className="position"> {/* Adjust based on header height */}
        {children}
      </div>
    );
  };
  
  export default Layout;
  