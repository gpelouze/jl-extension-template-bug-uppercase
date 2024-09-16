import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './handler';

/**
 * Initialization data for the test-uppercase extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'test-uppercase:plugin',
  description: 'A JupyterLab extension with a Python module name containing some uppercase',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension test-uppercase is activated!');

    requestAPI<any>('get-example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The Test-UpperCase server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default plugin;
