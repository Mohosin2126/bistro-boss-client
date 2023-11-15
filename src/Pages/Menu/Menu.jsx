import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
const Menu = () => {
    return (
        <div>
            <Helmet>
        <title>Bistro|Menu</title>
      </Helmet>
            <h1>hello this is me menu </h1>
       <Cover></Cover>
        </div>
    );
};

export default Menu;