import styled from 'styled-components';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
    font-weight: bold;
    padding: 10px;
    background: #191919;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.primary};

    ${({ theme }) => theme.mq.mobile} {
        color: ${({ theme }) => theme.colors.white};
    }
`;
