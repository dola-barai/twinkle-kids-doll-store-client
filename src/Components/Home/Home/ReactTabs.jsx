import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BarbieDolls from './Dolls/BarbieDolls';
import BabyDolls from './Dolls/BabyDolls';
import AmericanDolls from './Dolls/AmericanDolls';

const ReactTabs = () => {
    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold italic">Dolls Category</h2>
                <p>Check out what Barbie, American and Baby Dolls by clicking Tabs.</p>
            </div>
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
        </div>
    );
};

export default ReactTabs;