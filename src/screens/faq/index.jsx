import { useTheme,Box,Typography } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
    const theme = useTheme();
   const colors=tokens(theme.palette.mode);
    return (
        <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions"/>
        <Accordion defaultExpanded sx={{mt:"5vh"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]}>What does Working Capital Mean?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Working capital is the amount you get after deducting current liabilities from current assets. It tells you how much cash is tied up in the business through inventories and receivable and how much cash you need to pay off the business’s short term obligations 
            </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]}>How can a Company Show Positive Net Income but go Bankrupt?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            A company can show positive net income while facing bankruptcy by deteriorating working capital (by enhancing accounts receivable and reducing accounts payable) and financial tactics.
            </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]}>What do you Mean by Hedging?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Hedging is a risk management strategy we implement to offset losses in investments.
            </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]}>What is RAROC?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            RAROC stands for Risk-Adjusted Return On Capital and is a risk-based profitability measurement framework we use to analyze risk-adjusted financial performance.
            </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]}>What do you Mean by the Secondary Market?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Secondary market is where people trade securities that have been offered to the public in the primary market beforehand and are listed on the stock exchange.
            </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]}>What is Deferred Tax Liability?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Deferred tax liability is the amount the company hasn’t paid yet to the tax department but is expecting to pay it in the future.
            </Typography>
        </AccordionDetails>
        </Accordion>
        </Box>
    )
    }
 export default FAQ;