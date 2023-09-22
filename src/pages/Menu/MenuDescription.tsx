import { useParams } from "react-router-dom";

const MenuDescription = () => {
    const {menu} = useParams();
    return (
      <>
        <p>menu description: {menu}</p>
      </>
    );
  };
  
  export default MenuDescription;
  