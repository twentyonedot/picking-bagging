import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { styled } from "@mui/system";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import { Picking, Bagging } from "Components";

const Tab = styled(TabUnstyled)`
  color: black;
  cursor: pointer;
  font-size: 1rem;

  padding: 0.9rem 2.5rem;

  &.Mui-selected {
    color: #fff;
    font-weight: bold;
  }

  &:hover {
    /* color: #fff; */
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: orange;
    border-bottom: 2px solid orange;
  }

  &.${tabUnstyledClasses.selected} {
    background: #414141;
    border-radius: 2rem;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
`;

const TabsList = styled(TabsListUnstyled)`
  border-radius: 2rem;
  margin-bottom: 10px;
  display: flex;
  display: inline-flex;
  padding: 0.4rem;
  border: 1px solid #c5c5c5;
`;

const Tabs = () => {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Picking</Tab>
        <Tab>Bagging</Tab>
      </TabsList>
      <TabPanel value={0}>
        <Picking />
      </TabPanel>
      <TabPanel value={1}>
        <Bagging />
      </TabPanel>
    </TabsUnstyled>
  );
};

export default Tabs;
