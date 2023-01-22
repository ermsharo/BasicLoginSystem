import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { isLogged, getUserInfo ,logout} from "./../../Services/StorageManagement";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


const LoginBox = styled.div`
  padding: 4px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  color: white;
  button {
    font-family: "Varela Round", sans-serif;
    font-weight: 700;

    border-radius: 20px;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const LoginButton = styled.div`
  color: white;
  button {
    font-family: "Varela Round", sans-serif;
    font-weight: 700;

    border-radius: 20px;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const UserTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-transform: capitalize;
  font-family: "Varela Round", sans-serif;
  font-weight: 400;
  font-size: 20px;
`;

const generateWordColor = (word) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let colors = [
    "#DCFFDE",
    "#BDEEDF",
    "#FFBCCD",
    "#FDFCDD",
    "#DECEDF",
    "#FDDDCB",
    "#FFFDEE",
    "#CBDDEC",
    "#EBFCFB",
    "#EFEFBD",
    "#DFBDFE",
    "#CDFEDF",
    "#BBDEFE",
    "#DEDCDF",
    "#BEFDBC",
    "#DFCDEE",
    "#BCFBEC",
    "#ECFEFD",
    "#EDDCBF",
    "#ECFEFE",
    "#BFDDFE",
    "#EEFFCB",
    "#FBEDCD",
    "#BEFDFC",
    "#CCDBEB",
    "#BDCECD",
  ];

  return colors[alphabet.indexOf(word[0])];
};

export default function LoginAccess() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userLogout = () => {
    logout();
    setAnchorEl(null);
    navigate("/login");
  };

  if (isLogged())
    return (
      <LoginBox>
        <UserTitle>{getUserInfo().user}</UserTitle>

        <div>
          <Tooltip title="Open settings">
            <IconButton
              sx={{ p: 0 }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar
                style={{
                  backgroundColor: generateWordColor(getUserInfo().user),
                  color: 'black',
                }}
                alt={getUserInfo().user}
              >
                {getUserInfo().user[0].toUpperCase()}
              </Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                userLogout();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </LoginBox>
    );

  return (
    <UserTitle>
      {" "}
      <LoginButton>
        <Button
          onClick={() => {
            navigate("/login");
          }}
          fullWidth
          variant="contained"
        >
          Login
        </Button>
      </LoginButton>
    </UserTitle>
  );
}
