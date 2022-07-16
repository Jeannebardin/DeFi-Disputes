import * as React from 'react';
import { MultiSelectTree, getMultiSelectTreeValue } from '@progress/kendo-react-dropdowns';
import { processMultiSelectTreeData, expandedState } from "./Multiselecttree-data-operations";
import { data } from "./tree-data";
const dataItemKey = "id";
const checkField = 'checkField';
const checkIndeterminateField = 'checkIndeterminateField';
const subItemsField = "items";
const expandField = "expanded";
const textField = "text";
const fields = {
  dataItemKey,
  checkField,
  checkIndeterminateField,
  expandField,
  subItemsField
};

const App = () => {
  const [value, setValue] = React.useState([]);
  const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);

  const onChange = event => setValue(getMultiSelectTreeValue(data, { ...fields,
    ...event,
    value
  }));

  const onExpandChange = React.useCallback(event => setExpanded(expandedState(event.item, dataItemKey, expanded)), [expanded]);
  const treeData = React.useMemo(() => processMultiSelectTreeData(data, {
    expanded,
    value,
    ...fields
  }), [expanded, value])

  return (
    <MultiSelectTree 
      style={{
        width: '300px'
      }} 
      data={treeData} 
      value={value} 
      onChange={onChange} 
      placeholder="Select ..." 
      textField={textField} 
      dataItemKey={dataItemKey} 
      checkField={checkField} 
      checkIndeterminateField={checkIndeterminateField} 
      subItemsField={subItemsField} 
      expandField={expandField} 
      onExpandChange={onExpandChange} 
      label={'Search and filter by topic'} 
    />
  )
};

export default App