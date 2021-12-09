import styled from "styled-components";

export const Container = styled.div`

    width: 80%;
    margin-top: 4rem;
    margin: 0 auto;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        
        th {
            color: #000000;
            font-weight: 500;
            padding: 1rem 2rem;
            text-align: center;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: #FFF;
            color: #4F4F4F;
            border-radius: 0.25rem;
            text-align: center;
        }
    }
`;