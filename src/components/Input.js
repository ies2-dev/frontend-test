import styled from 'styled-components'

const Input = styled.input`
    border: 1px solid #DDDDDD;
    border-radius: 2px;
    color: #495057;
    font-size: 14px;
    outline: none;
    padding: 5px;
    width: 50%;

    &:focus{
        border: 1px solid rgba(81, 203, 238, 1);
        box-shadow: 0 0 2px rgba(81, 203, 238, 1);
    }
`

export default Input