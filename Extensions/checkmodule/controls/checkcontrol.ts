// import { IControl } from 'mdk-core/controls/IControl';
// 	import { Label } from '@nativescript/core/ui/label';
// 	import { Color } from '@nativescript/core/color';
// 	import { BaseObservable } from 'mdk-core/observables/BaseObservable';
	
// 	export class checkclass extends IControl {
	
// 	  protected _label: Label = new Label();
// 	  private _observable: BaseObservable;
	
// 	  public view(): any {
// 		if (!this._label) {
// 		  this._label = new Label();
// 		  this._label.text = 'TESTING EXTENSIONS';
// 		  this._label.backgroundColor = new Color('red');
// 		} else {
// 		  this._label.text = 'TESTING EXTENSIONS';
// 		  this._label.backgroundColor = new Color('red');
// 		}
// 		return this._label;
// 	  }
	
// 	  public observable() {
// 		if (!this._observable) {
// 		  this._observable = new BaseObservable(this, this.definition(), this.page());
// 		}
// 		return this._observable;
// 	  }
	
// 	  public setContainer(container: IControl) {
// 		// do nothing
// 	  }
	
// 	  public setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any> {
// 		// do nothing
// 		return Promise.resolve();
// 	  }
// 	}



import { IControl } from 'mdk-core/controls/IControl';
import { Label } from '@nativescript/core/ui/label';
import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
import { Color } from '@nativescript/core/color';

export class checkclass extends IControl {
  private _stackLayout: StackLayout;
  private _dataLoaded: boolean = false;

  constructor() {
    super();
    this._stackLayout = new StackLayout();
  }

  public initialize(props) {
    super.initialize(props);
    // Check if clientAPI is available in the context
    const clientAPI = props.context?.clientAPI;
    if (clientAPI) {
      this.fetchData(clientAPI); // Pass the clientAPI object
    } else {
      console.error('clientAPI is not available');
    }
  }

  private async fetchData(clientAPI): Promise<void> {
    try {
      const servicePath = "/mdkextension/Services/capproject1.service";


      const entitySet = "Header_table";
      
      // Ensure you have the correct method available on clientAPI
      const result = await clientAPI.read(servicePath, entitySet, []);
      result.forEach((item) => {
        console.log('Item:', item);
        const displayText = `ID: ${item.doc_id} - City: ${item.title}`; // Adjust field names as needed
        const label = new Label();
        label.text = displayText;
        label.padding = 10;
        label.fontSize = 16;
        label.backgroundColor = new Color('#faf7f7'); // Change to desired color
        this._stackLayout.addChild(label);
      });
    } catch (error) {
      console.error('Error fetching data from service:', error);
      // alert(`Service URL: ${servicePath}/${entitySet}`);
      alert(`Error fetching data from service: ${error.message}`);
      // this.displayError(`Failed to fetch data: ${error.message}`);
    }
   }

  public view(): any {
    if (!this._dataLoaded) {
      // Obtain clientAPI from the page context
      const clientAPI = this.page()?.clientAPI;
      if (clientAPI) {
        this.fetchData(clientAPI); // Pass the clientAPI object
        this._dataLoaded = true;
      } else {
        console.error('clientAPI is not available');
      }
    }
    return this._stackLayout;
  }

  public observable() {
    // No observable needed for this simple display
    return null;
  }

  public setContainer(container: IControl) {
    // Do nothing
  }

  public setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any> {
    // Do nothing
    return Promise.resolve();
  }

  private page(): any {
    // Return a mock context with clientAPI if required
    return {
      clientAPI: {} // Replace with actual clientAPI context
    };
  }

  private definition(): any {
    return {};
  }
}
