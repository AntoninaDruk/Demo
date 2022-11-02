import MenuItem from '../menu-item/menu-item';


import "./menu-list.css";

const MenuList = () => {
  return (
    <ul className="menu__list">
      <MenuItem name='Features' />
      <MenuItem name='Pricing' />
      <MenuItem name='Integrations' />
      <MenuItem name='Learn' />
    </ul >
  )
}

export default MenuList;