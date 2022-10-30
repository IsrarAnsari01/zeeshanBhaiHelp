import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Cards from "../../components/Cards";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  listBanner: {
    textAlign: "center",
    fontSize: 40,
    fontFamily: "monospace",
  },
});

const jobs = [
  {
    id: "01",
    title: "MERN Stack Dev",
    company: "Trimulabs",
    email: "test@company.com",
    desp: "hello world",
  },
  {
    id: "02",
    title: "MERN Stack Dev",
    company: "Trimulabs",
    email: "test@company.com",
    desp: "hello world",
  },
  {
    id: "03",
    title: "MERN Stack Dev",
    company: "Trimulabs",
    email: "test@company.com",
    desp: "hello world",
  },
  {
    id: "04",
    title: "MERN Stack Dev",
    company: "Trimulabs",
    email: "test@company.com",
    desp: "hello world",
  },
];
export default function Index() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2 className={classes.listBanner}>Avaible Jobs</h2>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={8}>
          <CustomButton
            buttonText={"Post Job"}
            variant="contained"
            onClick={() => navigate("/add")}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={8}>
          <Cards data={jobs} />
        </Grid>
      </Grid>
    </>
  );
}
