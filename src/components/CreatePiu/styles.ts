import styled from "styled-components";
import Logo from "../../assets/PiuPiuwerLogo.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 400px;
    margin-bottom: 24px;
`;

export const CreateTitle = styled.h2`
    margin: 0 0 4px 24px;
    font-weight: 800;
    font-size: 20px;

    color: var(--primary);
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 24px 10px 24px;

    width: 400px;

    background: var(--white);
    border: 4px solid var(--primary);
    box-sizing: border-box;
    box-shadow: var(--light);
    border-radius: 16px;
`;

interface CharacterCountProps {
    characterCount: number;
}

export const CreatePiuText = styled.textarea<CharacterCountProps>`
    color: ${props =>
        props.characterCount <= 140 ? "var(--gray)" : "var(--secondary)"};
    font-family: "Nunito";
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;

    min-width: 344px;
    max-width: 344px;
    min-height: 80px;
    overflow: auto;

    &::placeholder {
        color: var(--gray);
    }
`;

export const TextInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const CharacterCount = styled.h3<CharacterCountProps>`
    color: ${props => {
        const { characterCount } = props;
        return characterCount === 0
            ? "var(--gray)"
            : characterCount < 120
            ? "rgb(9, 161, 85)"
            : characterCount <= 140
            ? "rgb(218, 214, 0)"
            : "var(--secondary)";
    }};
    font-size: 10px;
    text-align: right;
    margin-right: 12px;
    margin-bottom: 4px;
`;

export const Divisor = styled.img`
    width: 344px;
    height: 2px;
    margin-bottom: 4px;
`;

export const WrapperBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;
`;

export const Icon = styled.img`
    width: 24px;
`;

export const Post = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 0 16px;

    width: 144px;
    height: 24px;
    border-radius: 16px;
    background: var(--primary) url(${Logo}) no-repeat 20px center;
    background-size: 20px;

    font-family: "Nunito";
    color: var(--white);
    font-style: italic;
    font-weight: 800;
    font-size: 16px;
    line-height: 33px;
`;

export const PickerWrapper = styled.div`
    margin-bottom: 16px;
    box-shadow: var(--light);
    background: var(--primary-light);
`;

interface WarningProps {
    display: boolean;
}

export const Warning = styled.p<WarningProps>`
    display: ${props => (props.display ? "block" : "none")};
    width: 344px;
    color: var(--secondary);
    font-size: 12px;
    text-align: left;
`;
