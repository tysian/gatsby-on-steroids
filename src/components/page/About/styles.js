import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    margin-top: 30px;
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ isBig }) => (isBig ? `2.2rem` : `1.2rem`)};
    border: none;
    padding: 10px 25px;
    border-radius: 4px;
    transition: 0.3s ease-in-out;

    :hover {
        background: blue;
    }

    & + & {
        margin-left: 15px;
    }
`;
