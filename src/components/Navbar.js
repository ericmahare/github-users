import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <h3>Find Github User</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
`;

export default Navbar;
