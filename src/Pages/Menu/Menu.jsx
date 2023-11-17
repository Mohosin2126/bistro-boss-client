import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';

import menuImg from"../../assets/menu/menu-bg.jpg"

const Menu = () => {

    return (
        <div>
            <Helmet>
        <title>Bistro|Menu</title>
      </Helmet>
      <div>
      <Cover img={menuImg} title='Our menu'></Cover>
      </div>
        </div>
    );
};

export default Menu;