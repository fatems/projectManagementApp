import {
  Checkbox,
  Typography,
  Card,
  Container,
  CssBaseline,
  Button,
  Divider,
  TextField,
  InputLabel,
  FormControlLabel,
  FormControl,
  Input,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";
import {
  CardContent,
  CardActions,
} from "@mui/material/styles";
import classes from "./Login2.module.css";

const Login2 = () => {
  const onChangeValue = () => {

  }

  const submitForm = () => {

  }

  return (
    <>
      <CssBaseline />
      <Button className={classes.goBack} variant="outline">
        <Typography variant="p">بازگشت به صفحه اصلی</Typography>
      </Button>
      <Container className={classes.loginCard}>
        <Card className={classes.loginContent}>
          <Typography variant="h5">Fate</Typography>
          <Button className={classes.whiteBtn} variant="outline">
            ورود با حساب گوگل
          </Button>

          <Button className={classes.whiteBtn} variant="outline">
            ساختن حساب کاربری
          </Button>
          <Divider />
          <form className={classes.form}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inp} htmlFor="uname">
                نام کاربری
              </InputLabel>
              <OutlinedInput id="uname" />
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inp} htmlFor="pass">
                رمز عبور
              </InputLabel>
              <OutlinedInput id="pass" />
            </FormControl>
            {/* <Container className={classes.formControl}> */}
            <FormControlLabel
              className={classes.formControlRadioButton}
              control={<Checkbox />}
              label="ذخیره اطلاعات"
            />
            {/* </Container> */}
            <Button onClick={submitForm} className={classes.btn} variant="contained">
              ساختن حساب کاربری
            </Button>
          </form>

          <Container maxWidth="sm"></Container>
        </Card>
      </Container>
    </>


  );
};

export default Login2;
