import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export const CreateUser = async (isFormValid, userInputs) => {

    const navigate = useNavigate();
    const [requestErrorAwnser, setRequestErrorAwnser] = useState(false);
    const [requestAwnser, setRequestAwnser] = useState(false);

    if (isFormValid) {
        await axios
            .post("http://localhost:5000/auth/singup", {
                userInputs,
            })
            .then((response) => {
                setRequestAwnser(response.data);
                navigate("/");
            })
            .catch((error) => {
                setRequestErrorAwnser(error.response.data);
            });
    }
};