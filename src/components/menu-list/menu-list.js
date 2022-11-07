import MenuItem from '../menu-item/menu-item';


import "./menu-list.css";

const MenuList = () => {
 
  return (
    <ul className="menu__list">
      <MenuItem name='Features' link="/" />
      <MenuItem name='Pricing' link="/" />
      <MenuItem name='Integrations' link="/"/>
      <MenuItem name='Learn' link="learn" />
    </ul >
  )
}

export default MenuList;