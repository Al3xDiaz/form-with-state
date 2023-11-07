import styled from 'styled-components';

export const Container =styled.label`
    position: relative;
    display: flex;
    background-color: #ffffff00;

    & .input {
        background-color: #fff;
        width: 100%;
        padding: 1rem;
        margin: .5rem;
        outline: 0;
        border: 1px solid rgba(105, 105, 105, 0.397);
        border-radius: 10px;
    }
    & .input + span {
        position: absolute;
        background-color: #fff;
        border-radius: 1rem;
        padding: .1rem;
        left: 1rem;
        top: 1.5rem;
        color: grey;
        font-size: 0.9em;
        cursor: text;
        transition: 0.3s ease;
    }
    & .input + span + span {
        position: absolute;
        background-color: #fff;
        border-radius: 1rem;
        padding: .1rem;
        right: 1rem;
        top: 1.5rem;
        color: grey;
        font-size: 0.9em;
        cursor: pointer;
        transition: 0.3s ease;
    }
    & .input:placeholder-shown + span {
        top: 1.5rem;
        font-size: 0.9em;
    }
    & .input:focus + span, & .input:valid + span {
        top: 3rem;
        font-size: 0.7em;
        font-weight: 600;
    }
    & .input:valid + span {
        color: green;
    }
    &.invalid .input:invalid + span {
        color: red;
    }


    & .input + span {
        position: absolute;
        background-color: #fff;
        border-radius: 1rem;
        padding: .1rem;
        left: 1rem;
        top: 1.5rem;
        color: grey;
        font-size: 0.9em;
        cursor: text;
        transition: 0.3s ease;
    }

    & .input:placeholder-shown + span {
        top: 1.5rem;
        font-size: 0.9em;
    }

    & .input:focus + span, & .input:valid + span {
        top: 3rem;
        font-size: 0.7em;
        font-weight: 600;
    }
    & .input:valid + span {
        color: green;
    }
    & .textarea {
        resize: none;
        background-color: #fff;
        width: 100%;
        padding: 1rem;
        margin: .5rem;
        outline: 0;
        border: 1px solid rgba(105, 105, 105, 0.397);
        border-radius: 10px;
    }

    & .textarea + span {
        position: absolute;
        background-color: #fff;
        border-radius: 1rem;
        padding: .1rem;
        left: 1rem;
        top: 1.5rem;
        color: grey;
        font-size: 0.9em;
        cursor: text;
        transition: 0.3s ease;
    }

    & .textarea:placeholder-shown + span {
        top: 1.5rem;
        font-size: 0.9em;
    }

    & .textarea:focus + span, & .textarea:valid + span {
        top: 4rem;
        font-size: 0.7em;
        font-weight: 600;
    }
    & .textarea:valid + span {
        color: green;
    }
    &.invalid .textarea:invalid + span {
        color: red;
    }
`;