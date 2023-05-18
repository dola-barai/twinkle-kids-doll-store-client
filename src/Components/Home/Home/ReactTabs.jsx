import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BarbieDolls from './Dolls/BarbieDolls';
import BabyDolls from './Dolls/BabyDolls';
import AmericanDolls from './Dolls/AmericanDolls';

const ReactTabs = () => {
    return (
        <Tabs className="my-10">
            <TabList>
                <Tab>Baby Dolls</Tab>
                <Tab>Barbie Dolls</Tab>
                <Tab>American Dolls</Tab>
            </TabList>

            <TabPanel>
                <div>
                    <BabyDolls></BabyDolls>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <BarbieDolls></BarbieDolls>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <AmericanDolls></AmericanDolls>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default ReactTabs;