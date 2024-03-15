import React from 'react';
import styled from 'styled-components';

const StyledBtnMenu = styled.button`
    background-color: green;
    width: 100px;
    height: 50px;
`;

const BtnMenuComponent = ({ props }) => {
    return (
        <div>
            {props.map((label, index) => (
                <StyledBtnMenu key={index}>
                    {label}
                </StyledBtnMenu>
            ))}
        </div>
    );
};


const MenuListComponent = ({ props }) => {
    return (
        <div>
            {props.map((option, index) => (
                <div key={index}>
                    {option}
                </div>
            ))}
        </div>
    );
};

export  { BtnMenuComponent, MenuListComponent };
