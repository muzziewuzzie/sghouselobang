import { useEffect, useState } from "react";
import { listHousings } from "../graphql/queries";
import { API } from "aws-amplify";
import BootstrapTable from "react-bootstrap-table-next";

const HousingListings = () => {

    const [housingData, setHousingData] = useState([]);

    useEffect(() => {
        const fetchHousing = async () => {
        const res = await API.graphql({query: listHousings});
        return res.data.listHousings.items;
        }
        fetchHousing().then(res => {
            console.log(res);
            setHousingData(res);
        });
    }, []);

    const columns = [
        {
            dataField: "name",
            text: "Name",
            headerStyle: { textAlign: 'center' }
        },
        {
            dataField: "locality",
            text: "Locality",
            headerStyle: { textAlign: 'center' }
        },
        {
            dataField: "Category",
            text: "Category",
            headerStyle: { textAlign: 'center' }
        },
        {
            dataField: "LaunchPrice",
            text: "Launch Price",
            sort: true,
            headerStyle: { cursor: 'pointer', textAlign: 'center' }
        },
    ];




    return (
        <div>
            <h2 class="text-center">Housing Listings</h2>
            <BootstrapTable keyField="id" data={housingData} columns={columns} striped hover condensed />
        </div>
    );
}

export default HousingListings;