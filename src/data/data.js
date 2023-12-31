

export const initialCVData = {
    personalInfo: {
        id: "personal info example id",
        fullName: "Sheldon Lee Cooper",
        profession: "Theoretical Physicist",
        email: "sheldon.cooper@caltech.edu",
        phoneNumber: "+1 (555) 987-6543",
        location: "Pasedina, California",
    },
    education: [
        {
            id: "education example key",
            institution: "California Institute of Technology (Caltech)",
            degree: "Ph.D. in Theoretical Physics",
            start: 2000,
            graduation: 2003,
        },
    ],
    workExperience: [
        {
            id: "work example key",
            position: "Senior Theoretical Physicist",
            company: "Caltech",
            startYear: "2003",
            endYear: "Present",
            responsibility: "Conducting groundbreaking research in theoretical physics",
        },
        // Add more work experience entries as needed
    ],
};

export const emptyCVData = {
    personalInfo: {},
    education: [],
    workExperience: [],
};
