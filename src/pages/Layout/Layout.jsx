// src/components/Layout.js
const Layout = ({ children }) => {
    return (
      <div className="pt-800"> {/* Adjust based on header height */}
        {children}
      </div>
    );
  };
  
  export default Layout;
  