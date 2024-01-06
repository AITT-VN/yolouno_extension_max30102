Blockly.Blocks['uno_max30102_read'] = {
  init: function () {
    this.jsonInit(
      {
          "message0": "đọc %1",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "action",
              "options": [
                [
                  "nhịp tim (BPM)",
                  "Ebpm"
                ],
                [
                  "oxy trong máu (SPO2)",
                  "SpO2"
                ]
              ]
            }
          ],
          "output": null,
          "colour": "#370ACD",
          "tooltip": "",
          "helpUrl": ""
      }
  );
  }
};

Blockly.Python['uno_max30102_read'] = function(block) {
Blockly.Python.definitions_['import_max30102'] = 'from max30102 import *';
Blockly.Python.definitions_['import_i2c'] = 'from machine import SoftI2C, Pin';
Blockly.Python.definitions_['init_max30102'] = 'max30102 = MAX30102(SoftI2C(sda=Pin(SDA_PIN),scl=Pin(SCL_PIN)))';
Blockly.Python.definitions_['init_max30102_setup_sensor'] = 'max30102.setup_sensor()';
Blockly.Python.definitions_['add_task_max30102_scan'] = 'create_task(max30102.scan())';
var action = block.getFieldValue('action');
// TODO: Assemble Python into code variable.
var code = 'max30102.'+ action;
// TODO: Change ORDER_NONE to the correct strength.
return [code, Blockly.Python.ORDER_NONE];
};
