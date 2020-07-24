import styled from '@emotion/styled'
export const SearchContainer = styled.div`
    padding: 16px 22px;
    border: 1px solid #dedede;
    border-radius: 3px;
    font-family: "Source Sans Pro", "Arial", sans-serif;
`;
export const SearchInput = styled.input`
    width: 100%;
    max-width: 350px;
    padding: 16px 22px;
    margin-bottom: 15px;
    border: 1px solid #dedede;
    border-radius: 3px;
    color: #000000;
    &:focus {
      outline: none;
    }
`;
export const PreloaderText = styled.span`
    margin-left: 20px;
    transition: all 2s;
`;

