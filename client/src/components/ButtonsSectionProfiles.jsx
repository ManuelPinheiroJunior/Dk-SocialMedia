import { useTheme } from "@emotion/react";

const { EditOutlined, Close } = require("@mui/icons-material");
const { default: FlexBetween } = require("./FlexBetween");




const ButtonsSectionProfiles = () => {

    const { palette } = useTheme();
    const main = palette.neutral.main;

    return (
        <>
            <FlexBetween gap="1rem">
            <EditOutlined sx={{ color: main }}  style={{ cursor: "pointer" }}/>
            <Close sx={{ color: main }} style={{ cursor: "pointer" }} />
            </FlexBetween>
        </>
    )
}

export default ButtonsSectionProfiles

