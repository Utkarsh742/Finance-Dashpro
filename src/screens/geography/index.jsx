import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import GeographyChart from "../../components/GeographyChart";
const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
        <Header title="Geography Chart" subtitle="Geography Chart Repesentation" />
        <Box height="75vh" mt="3vh"border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
            <GeographyChart isDashboard={false} />
        </Box>
        </Box>
    );
    }
 export default Geography;