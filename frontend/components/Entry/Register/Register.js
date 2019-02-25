import Link from "next/link";
import styled from "styled-components";

const Logo = styled.img`
  max-width: 150px;
`;

const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  background: #ffffff55;
  .SignUp {
  }
`;

const Register = () => (
  <StyledRegister>
    <div className="Register">
      <Logo src="/static/logo/logoWhite.png" alt="wierd-flex" />
    </div>
  </StyledRegister>
);

export default Register;
