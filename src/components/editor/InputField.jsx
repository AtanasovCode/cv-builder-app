import * as Styled from '../../styles/InputStyles';

const InputField = ({
    label,
    placeholder,
    value,
    onChange
}) => (
    <>
        <Styled.Label>{label}</Styled.Label>
        <Styled.Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </>
);

export default InputField;
