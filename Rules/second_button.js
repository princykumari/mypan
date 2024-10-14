  // /**
  //  * Describe this function...
  //  * @param {IClientAPI} clientAPI
  //  */
  // export default function second_button(clientAPI) {
  //     debugger


  //   let select =clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellListPicker0');// Get the current value of the input field
  //   let selected =select.getValue();

  //   let isSupplierSelected = selected[0].ReturnValue;

  //   // let isBuyerSelected = selected.includes('Buyer');
  //   debugger;
  //   if (isSupplierSelected == false)
  //   {
  //   let ButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton1');
  //   ButtonControl.setVisible(true);
  //   }
  //   else{
  //     ButtonControl.setVisible(false);
  //   }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function second_button(clientAPI) {
//   debugger;

//   // Access the list picker control
//   let select = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellListPicker0');
  
//   // Get the selected values
//   let selected = select.getValue(); // This should return an array of selected items
//   let st= selected[0].ReturnValue;
//   console.log(st);
//   // Get the button control
//   let ButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton1');

//   if (selected.includes(st)) {
//     ButtonControl.setVisible(false); // Hide the button if 'Supplier' is selected
// } 
// console.log(selected.includes(st))
// }


// ============================================================================
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function second_button(clientAPI) {
  debugger;

  // Access the list picker control
  let select = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellListPicker0');
  
  // Get the selected values
  let selected = select.getValue(); // This should return an array of selected items
  let st = selected[0].ReturnValue; // Get the ReturnValue of the first selected item
  console.log(st);
  
  // Get the button control
  let ButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton1');

  // Check if 'Supplier' is selected
  if (selected.some(item => item.ReturnValue === 'Supplier')) {
    ButtonControl.setVisible(true); // Show the button if 'Supplier' is selected
  } else {
    ButtonControl.setVisible(false); // Hide the button if 'Supplier' is NOT selected
  }
  
  console.log(selected.includes(st));
  
}
