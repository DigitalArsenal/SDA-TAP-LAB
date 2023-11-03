export const addButton = (
    component: any,
    prepend: boolean = false
) => {
    const toolbar: any = document.querySelector(".cesium-viewer-toolbar");
    // Create a new button
    const buttonContainer = document.createElement("button");
    buttonContainer.className = "cesium-button cesium-toolbar-button";

    let myButton = new component({ target: buttonContainer });
    // Append the button to the toolbar
    toolbar[prepend ? "prepend" : "appendChild"](myButton.$$.root);
}