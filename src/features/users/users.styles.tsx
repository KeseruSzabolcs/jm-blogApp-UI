import styled from "styled-components";
import { Card, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const STransparentButton = styled.button`
  border: transparent;
  background-color: transparent;
  margin-right: 30px;
  margin-left: 30px;
`;

export const HoverDiv = styled.div`
  &:hover {
    transform: scale(1.02);
  }
`;

export const CenteredHVDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledUserNameSpan = styled.span`
  display: inline-block;
  font-size: 2em;

  @media (max-width: 1000px) {
    bottom: 20px;
  }

  @media (max-width: 750px) {
    bottom: 15px;
  }
`;

export const StyledUserNameContainer = styled(Container)`
  background-color: lightgray;
`;

export const StyledRow = styled(Row)`
  font-size: 1.5em;
  text-align: center;
  margin-top: 1.5%;
`;

export const UserEditButton = styled(Button)`
  margin-top: 2%;
`;

export const UserDeleteButton = styled(Button)`
  margin-top: 2%;
  margin-left: 50px;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-top: 2%;
  margin-bottom: 1.5%;
  margin-right: 1%;
`;

export const SUserCard = styled(Card)`
  max-width: 275px;
  margin: auto;
  border-radius: 20px;
  box-shadow: -10px 10px 15px;

  .card-footer {
    background-color: black;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .card-body {
    cursor: pointer;
  }
`;
