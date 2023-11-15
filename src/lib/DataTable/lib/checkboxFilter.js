// @ts-nocheck
class CheckboxFilter {
  init(params) {
    this.valueGetter = params.valueGetter;
    this.filterText = null;
    this.setupGui(params);
  }

  // not called by AG Grid, just for us to help setup
  setupGui(params) {
    this.gui = document.createElement("div");
    this.gui.innerHTML = `<div style="padding: 4px; width: 200px;">
                      <div style="font-weight: bold;">Selected Filter</div>
                      <div>
                          <input style="margin: 4px 0 4px 0;" type="checkbox" id="selected" checked="checked"/>Show Selected
                      </div>
                      <div>
                      <input style="margin: 4px 0 4px 0;" type="checkbox" id="notSelected" checked="checked"/>Show Unselected
                  </div>
                  </div>
              `;

    const listener = (event) => {
      console.log(event.target.getAttribute("id"));
      this.filterText = event.target.value;
      params.filterChangedCallback();
    };

    this.selectBoxes = [
      this.gui.querySelector("#selected"),
      this.gui.querySelector("#notSelected"),
    ];
    for (let s = 0; s < this.selectBoxes.length; s++) {
      this.selectBoxes[s].addEventListener("change", listener);
    }
  }

  getGui() {
    return this.gui;
  }

  doesFilterPass({ node, data }) {
    return (
      (node.selected && this.selectBoxes[0].checked) ||
      (!node.selected && this.selectBoxes[1].checked)
    );
  }

  isFilterActive() {
    return this.filterText != null && this.filterText !== "";
  }

  getModel() {
    return { value: this.filterText.value };
  }

  setModel(model) {
    this.eFilterText.value = model.value;
  }
}

export { CheckboxFilter };
