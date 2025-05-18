import React from 'react';
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="shadow mt-5 "

      style={{ padding: '20px', backgroundColor: '#333', color: 'white' }}
    >
      <small>&copy; 2025 Your Company. All rights reserved.</small>
      <CDBBox display="flex" justifyContent="center" style={{ marginLeft: '20px' }}>
        <CDBBtn flat color="dark">
          <CDBIcon fab icon="facebook-f" />
        </CDBBtn>
        <CDBBtn flat color="dark">
          <CDBIcon fab icon="twitter" />
        </CDBBtn>
      </CDBBox>
    </CDBBox>
  );
};
export default Footer;