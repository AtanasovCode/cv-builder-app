import * as Styled from '../../styles/InputStyles';

import personalIcon from '../../assets/user.svg';
import Heading from "./Heading";


const PersonalInput = ({
    cvData,
    updatePersonalInfo,
    currentTheme,
}) => {

    const { fullName, profession, email, phoneNumber, location } = cvData.personalInfo;

    return (
        <Styled.Category>
            <Heading
                icon={personalIcon}
                text="Personal Information"
                currentTheme={currentTheme}
            />

            <Styled.Label>Full Name</Styled.Label>
            <Styled.Input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
            />

            <Styled.Label>Profession</Styled.Label>
            <Styled.Input
                type="text"
                placeholder="Enter your profession"
                value={profession}
                onChange={(e) => updatePersonalInfo("profession", e.target.value)}
            />

            <Styled.Label>E-Mail</Styled.Label>
            <Styled.Input
                type="text"
                placeholder="Enter your e-mail address"
                value={email}
                onChange={(e) => updatePersonalInfo("email", e.target.value)}
            />

            <Styled.Label>Phone Number</Styled.Label>
            <Styled.Input
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => updatePersonalInfo("phoneNumber", e.target.value)}
            />

            <Styled.Label>Location</Styled.Label>
            <Styled.Input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => updatePersonalInfo("location", e.target.value)}
            />

        </Styled.Category>
    );
}

export default PersonalInput;
