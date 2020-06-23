import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    margin-top: 30px;
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ isBig }) => (isBig ? `2.2rem` : `1.2rem`)};
    border: 2px solid transparent;
    padding: 10px 25px;
    border-radius: 4px;
    transition: 0.3s ease-in-out;

    :hover {
        transform: scale(1.1);
    }

    & + & {
        margin-left: 15px;
    }

    ${({ theme }) => theme.mq.mobile} {
        color: ${({ theme }) => theme.colors.red};
        background: transparent;
        border: 2px solid ${({ theme }) => theme.colors.red};
    }
`;