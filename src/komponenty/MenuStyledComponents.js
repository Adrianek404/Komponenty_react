import React from 'react';
import { BtnMenuComponent, MenuListComponent } from './StyledFunctionalComponent';

const MenuStyledComponents = () => {

    return (
        <div>
            <BtnMenuComponent props={["Przycisk 1", "Przycisk 2", "Przycisk 3", "Przycisk 4"]} />
            <MenuListComponent props={["Opcja 1", "Opcja 2", "Opcja 3"]} />
        </div>
    );
};

export default MenuStyledComponents;