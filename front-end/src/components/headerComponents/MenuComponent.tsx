import { IconButton, Menu, MenuItem, SvgIconTypeMap } from "@material-ui/core";
import React, { useState } from "react";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

interface Props {
  itens: string[];
  IconType?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  srcImg?: string;
}
const MenuComponent: React.FunctionComponent<Props> = ({
  itens,
  IconType,
  srcImg,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleButtonIn = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => setAnchorEl(null);
  const listItens = itens.map((item: string) => {
    return <MenuItem onClick={handleMenuClose}>{item}</MenuItem>;
  });
  return (
    <div>
      <IconButton onClick={handleButtonIn}>
        {IconType && <IconType width="30" height="30" fontSize="large" />}
        {srcImg && <img src={srcImg} alt="" width="30" height="30" />}
      </IconButton>
      <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
        {listItens}
      </Menu>
    </div>
  );
};
export default MenuComponent;
