//@ts-nocheck
import { Grid } from 'ag-grid-community';

onmessage = function (e) {
    const { columnDefs, rowData, filterModel } = e.data;
    const filteredData = getFilteredData(columnDefs, rowData, filterModel);
    postMessage(filteredData);
};

function getFilteredData(columnDefs, rowData, filterModel) {
    const gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
    };

    globalThis.HTMLElement = function () { };
    globalThis.document = { body: { appendChild: () => { } }, createElement: () => { } };

    new Grid(new HTMLElement(), gridOptions);

    if (!gridOptions.api) {
        throw new Error("Grid API is not available");
    }

    gridOptions.api.setFilterModel(filterModel);
    gridOptions.api.onFilterChanged();

    const filteredData = [];
    gridOptions.api.forEachNodeAfterFilter(node => {
        filteredData.push(node.data);
    });

    return filteredData;
}