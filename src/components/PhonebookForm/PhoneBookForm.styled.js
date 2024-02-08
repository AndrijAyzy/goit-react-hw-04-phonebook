import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  padding: 20px;
  color: #000000;
  border: 1px solid black;
  border-radius: 7px;
  background: linear-gradient(to top, black, 20%, cyan);
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-size: 14px;

  @media (max-width: 800px) {
    color: green;
  }
`;

export const LabelWrapper = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #6d118f;
`;

export const LabelForm = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #000000;
`;

export const StyledField = styled(Field)`
  width: 400px;
`;

export const AddContactBtn = styled.button`
  margin-top: 32px;
  border-radius: 7px;
  cursor: pointer;
  color: #black;
border: 1px solid #000000;
border-radius: 5px;
cursor: pointer;
transition: all 0.25s linear 0s;
&:hover,
&:focus {
  border: 1px solid #white; background: #1ca105;
  transform: scale(1.1);
`;

