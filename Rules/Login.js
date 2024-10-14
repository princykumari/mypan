// // // import { Console } from "console";

// // /**
// //  * Describe this function...
// //  * @param {IClientAPI} clientAPI
// //  */
// // export default function Login(clientAPI) {
// //     debugger;
// //     // // const vendor_Name = this.context.binding.Vendor_Name; 
// //     let vendor_Name = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// //     // let vendorName = vendor_Name.getValue();
// //     // console.log(vendorName);
// //   // let b = clientAPI._context.element._model._model.callback._page.childViews[0]._actionItems._actionBar.parent.parent._router._reactInternalFiber.child.firstEffect.alternate.memoizedProps.value;
// //   // console.log(b);
// //   // alert(b);
// //     // let a = context.binding;
// //     // console.log(a);
// //     // console.log()

// //     if (vendor_Name = u) {
// //       clientAPI._context.element._props.definition.parent._data.Controls[0].Enabled = true;
// //     }


// // }


// // import { Console } from "console";

// // /**
// //  * Describe this function...
// // /**
// //  * @param {IClientAPI} clientAPI
// //  */
// // // export default function Login(clientAPI) {
// // //   debugger;
// // //   let vendor_Name = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// // //   let button = clientAPI._context.element._props.definition.parent._data.Controls[2].IsVisible = false;
// // //   // Assuming u is defined somewhere in your code
// // //   if (vendor_Name === u) {
// // //     // clientAPI._context.element._props.definition.parent._data.Controls[0].Enabled = true;
// // //     button = true;
// // //   }
// // // }

// // /**
// //  * @param {IClientAPI} clientAPI
// //  */
// // export default function Login(clientAPI) {
// //   debugger;

// //   // Get the vendor name control
// //   let vendor_Name_Control = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
  
// //   // Get the button control
// //   // let buttonControl = clientAPI._context.element._props.definition.parent._data.Controls[2];
// //   let a = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton0');

// //   // Initially hide the button
// // a = false;

// //   // Add an event listener for changes in the vendor name input
// //   vendor_Name_Control.setOnChange(() => {
// //     let vendor_Name = vendor_Name_Control.getValue();

// //     // Show the button only if the vendor name is not empty
// //     if (vendor_Name) {
// //       buttonControl.IsVisible = true;
// //     } else {
// //       buttonControl.IsVisible = false;
// //     }
// //   });
// // }


// /**
//  * @param {IClientAPI} clientAPI
//  */
// export default function Login(clientAPI) {
 

//   // Get the vendor name control
//   let vendor_Name_Control = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
  
//   // Get the button control
//   let buttonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton0');

//   // Initially hide the button
//   buttonControl.IsVisible = false;

//   // Add an event listener for changes in the vendor name input
//   vendor_Name_Control.setOnChange(() => {
//     let vendor_Name = vendor_Name_Control.getValue();

//     // Show the button only if the vendor name is not empty
//     if (vendor_Name) {
//       buttonControl.IsVisible = true; // Show button
//     } else {
//       buttonControl.IsVisible = false; // Hide button
//     }
//   });
// }

// ===================================================================================
// export default function InputFieldOnValueChange(clientAPI) {
// debugger


//   let inputValue =clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');// Get the current value of the input field
//   let phoneNumber =inputValue.getValue();
  
//   let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton0');
//   getOtpButtonControl.setVisible(true);
  
// }
// =========================================================================================

export default function InputFieldOnValueChange(clientAPI) {
debugger


  let inputValue =clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');// Get the current value of the input field
  let phoneNumber =inputValue.getValue();
  debugger;
  if (phoneNumber==="u")
  {
  let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton0');
  getOtpButtonControl.setVisible(true);
  }
  
}
