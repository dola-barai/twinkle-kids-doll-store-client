import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BarbieDolls from './Dolls/BarbieDolls';
import BabyDolls from './Dolls/BabyDolls';
import AmericanDolls from './Dolls/AmericanDolls';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const ReactTabs = () => {
    const { user } = useContext(AuthContext)

    const handleView = () => {
        if (!user) {
          Swal.fire('You have to log in first to view details.')
          
          return <Navigate to='/login' replace={true}></Navigate>
        } 
    };
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
                    <BabyDolls
                    handleView={handleView}
                    ></BabyDolls>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <BarbieDolls
                    handleView={handleView}
                    ></BarbieDolls>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <AmericanDolls
                    handleView={handleView}
                    ></AmericanDolls>
                </div>
            </TabPanel>
        </Tabs>
        </div>
    );
};

export default ReactTabs;