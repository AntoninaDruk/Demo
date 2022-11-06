import MenuItem from '../menu-item/menu-item';


import "./menu-list.css";

const MenuList = () => {
 
  return (
    <ul className="menu__list">
      <MenuItem name='Features' />
      <MenuItem name='Pricing' />
      <MenuItem name='Integrations' link="integrations"/>
      <MenuItem name='Learn' link="learn" />
    </ul >
  )
}

export default MenuList;