import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// @mui
import {  Stack, Box, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import MenuItem from '@mui/material/MenuItem';

// ---------------------------------------------------------------------- prefix
const gender = [
    {
        value: 'male',
        label: 'male',
    },
    {
        value: 'female',
        label: 'female',
    },
];
const prefix = [
    {
        value: 'Mr.',
        label: 'Mr.',
    },
    {
        value: 'miss',
        label: 'miss',
    },
];
const maritalStatus = [
    {
        value: 'single',
        label: 'single',
    },
    {
        value: 'married',
        label: 'married',
    },
];
export default function Register() {
    // const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        // Check if any of the fields are empty
        if (
            !data.get('prefix') ||
            !data.get('fullNameThai') ||
            !data.get('fullNameEng') ||
            !data.get('gender') ||
            !data.get('birthday') ||
            !data.get('maritalStatus') ||
            !data.get('religion') ||
            !data.get('nationality') ||
            !data.get('idAddress') ||
            !data.get('password') ||
            !data.get('currentAddress') ||
            !data.get('Work_address') ||
            !data.get('personal_id') ||
            !data.get('email') ||
            !data.get('phoneNumber') ||
            !data.get('Positon') ||
            !data.get('department') ||
            !data.get('Salary') ||
            !data.get('Contract_Duration') ||
            !data.get('Contract_Consultant_Name') ||
            !data.get('client') ||
            !data.get('Company_name') ||
            !data.get('Leave_eligibility') ||
            !data.get('Agreement_expiration_period') 
            
        ) {
            alert('Please fill in all the fields');
            return;
        }

        const jsonData = {
            prefix: data.get('prefix'),
            fullNameThai: data.get('fullNameThai'),
            fullNameEng: data.get('fullNameEng'),
            gender: data.get('gender'),
            birthday: data.get('birthday'),
            maritalStatus: data.get('maritalStatus'),
            religion: data.get('religion'),
            nationality: data.get('nationality'),
            idAddress: data.get('idAddress'),
            password: data.get('password'),
            currentAddress: data.get('currentAddress'),
            Work_address: data.get('Work_address'),
            personal_id: data.get('personal_id'),
            email: data.get('email'),
            phoneNumber: data.get('phoneNumber'),
            Positon: data.get('Positon'),
            department: data.get('department'),
            Salary: data.get('Salary'),
            Contract_Duration: data.get('Contract_Duration'),
            Contract_Consultant_Name: data.get('Contract_Consultant_Name'),
            client: data.get('client'),
            Company_name: data.get('Company_name'),
            Leave_eligibility: data.get('Leave_eligibility'),
            Agreement_expiration_period: data.get('Agreement_expiration_period'),
            Resume_image: data.get('Resume_image'),
            Transcript_image: data.get('Transcript_image'),
            Cerficate_image: data.get('Cerficate_image'),
            House_registraon_image: data.get('House_registraon_image'),
            id_card_image: data.get('id_card_image'),
            Personal_image: data.get('Personal_image'),
            Photo_with_id_image: data.get('Photo_with_id_image'),
            Bank_book_image: data.get('Bank_book_image')
        };

        fetch('https://wild-gray-pike-yoke.cyclic.app/addemployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'ok') {
                    alert('Registration successful');
                    window.location = '/data';
                } else {
                    alert('Registration failed');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <>
        <br />
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                    width: 1000,
                    mt: 1,
                    p: 2,
                    boxShadow: 10,
                    borderRadius: 3,
                    marginLeft: 30,
                }}
            >
                <Stack spacing={2} sx={{ width: '50%', marginLeft: 30, }}>

                    <TextField
                        name="prefix"
                        id="prefix"
                        select
                        label="prefix"
                        defaultValue="EUR"
                        helperText="Please select your prefix"
                        variant="filled"
                    >
                        {prefix.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField margin="normal" required fullWidth name="fullNameThai" label="fullNameThai" type="text" id="fullNameThai" autoComplete="fullNameThai" />
                    <TextField margin="normal" required fullWidth name="fullNameEng" label="fullNameEng" type="text" id="fullNameEng" autoComplete="fullNameEng" />
                    <TextField
                        name="gender"
                        id="gender"
                        select
                        label="gender"
                        defaultValue="EUR"
                        helperText="Please select your gender"
                        variant="filled"
                    >
                        {gender.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField margin="normal" required fullWidth name="birthday" helperText="Birthday" type="date" id="birthday" autoComplete="birthday" />
                    <TextField
                        name="maritalStatus"
                        id="maritalStatus"
                        select
                        label="maritalStatus"
                        defaultValue="EUR"
                        helperText="Please select your maritalStatus"
                        variant="filled"
                    >
                        {maritalStatus.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField margin="normal" required fullWidth name="religion" label="religion" type="text" id="religion" autoComplete="religion" />
                    <TextField margin="normal" required fullWidth name="nationality" label="nationality" type="text" id="nationality" autoComplete="nationality" />
                    <TextField margin="normal" required fullWidth name="idAddress" label="idAddress" id="idAddress" autoComplete="idAddress" />
                    <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                    <TextField margin="normal" required fullWidth name="currentAddress" label="currentAddress" id="currentAddress" autoComplete="currentAddress" />
                    <TextField margin="normal" required fullWidth name="Work_address" label="Work_address" id="Work_address" autoComplete="Work_address" />



                    <TextField margin="normal" required fullWidth name="personal_id" type="number" label="personal_id" id="personal_id" autoComplete="personal_id" />
                    <TextField margin="normal" required fullWidth name="email" label="email" id="email" autoComplete="email" />
                    <TextField margin="normal" required fullWidth name="phoneNumber" label="phoneNumber" id="phoneNumber" type="number" autoComplete="phoneNumber" />
                    <TextField margin="normal" required fullWidth name="Positon" label="Positon" id="Positon" autoComplete="Positon" />

                    <TextField margin="normal" required fullWidth name="department" label="department" id="department" autoComplete="department" />
                    <TextField margin="normal" required fullWidth name="Salary" label="Salary" id="Salary" type="number" autoComplete="Salary" />
                    <TextField margin="normal" required fullWidth name="Contract_Duration" label="Contract_Duration" id="Contract_Duration" autoComplete="Contract_Duration" />
                    <TextField margin="normal" required fullWidth name="Contract_Consultant_Name" label="Contract_Consultant_Name" id="Contract_Consultant_Name" autoComplete="Contract_Consultant_Name" />
                    <TextField margin="normal" required fullWidth name="client" label="client" id="client" autoComplete="client" />
                    <TextField margin="normal" required fullWidth name="Company_name" label="Company_name" id="Company_name" autoComplete="Company_name" />
                    <TextField margin="normal" required fullWidth name="Leave_eligibility" label="Leave_eligibility (number)" type="number" id="Leave_eligibility" autoComplete="Leave_eligibility" />
                    <TextField margin="normal" required fullWidth name="Agreement_expiration_period" helperText="Agreement expiration period" type="date" id="Agreement_expiration_period" autoComplete="Agreement_expiration_period" />
                    <TextField margin="normal" required fullWidth name="Resume_image" type="file" helperText="Resume_image" id="Resume_image" autoComplete="Resume_image" />
                    <TextField margin="normal" required fullWidth name="Transcript_image" type="file" helperText="Transcript_image" id="Transcript_image" autoComplete="Transcript_image" />
                    <TextField margin="normal" required fullWidth name="Cerficate_image" type="file" helperText="Cerficate_image" id="Cerficate_image" autoComplete="Cerficate_image" />
                    <TextField margin="normal" required fullWidth name="House_registraon_image" helperText="House_registraon_image" type="file" id="House_registraon_image" autoComplete="House_registraon_image" />
                    <TextField margin="normal" required fullWidth name="id_card_image" type="file" helperText="id_card_image" id="id_card_image" autoComplete="id_card_image" />
                    <TextField margin="normal" required fullWidth name="Personal_image" type="file" helperText="Personal_image" id="Personal_image" autoComplete="Personal_image" />
                    <TextField margin="normal" required fullWidth name="Photo_with_id_image" type="file" helperText="Photo_with_id_image" id="Photo_with_id_image" autoComplete="Photo_with_id_image" />
                    <TextField margin="normal" required fullWidth name="Bank_book_image" type="file" helperText="Bank_book_image" id="Bank_book_image" autoComplete="Bank_book_image" />

                    <LoadingButton fullWidth size="large" type="submit" variant="contained" sx={{ mt: 3, mb: 2, bgcolor: 'green', borderRadius: '30px' }}>
                        save
                    </LoadingButton>

                </Stack>
              <Link to="/Data"> <LoadingButton fullWidth size="large"  sx={{marginLeft:'29.5%', mt: 3, mb: 2, bgcolor: 'yallow', borderRadius: '30px' ,width: '200px' }}>
                        back
                    </LoadingButton>
                    </Link>
            </Box>

            
            <br />
        </>
    );
}


