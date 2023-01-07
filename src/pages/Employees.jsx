import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page,Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';


const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      
      <Header category="Page" title="Employees" />
      
      <GridComponent
        
        dataSource={employeesData} //All the data is populated due to this
        allowPaging // allows paging .. means it gets large data and splits it into pages 1 2 3 4  5 6 
        allowSorting //this does sorting
        
        toolbar={['Search']}
        width="auto"
        
        editSettings={editing}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        
        
        <Inject services={[Page,Search,Toolbar]} />
      
      </GridComponent>
    </div>
  );
};
export default Employees;