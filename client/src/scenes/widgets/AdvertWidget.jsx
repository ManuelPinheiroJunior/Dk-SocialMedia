import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { Close  }  from "@mui/icons-material";


const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Advertising
        </Typography>
        <Typography color={medium}> <Close style={{ cursor: "pointer" }}/></Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="../assets/veygo.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>The World’s Most Desired Motors</Typography>
        <Typography color={medium}>veygo.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
         We recently set out to discover the most desired car brands around the world 
         by analysing Google search data from the past 12 months
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
