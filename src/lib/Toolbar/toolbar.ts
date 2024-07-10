export const addButton = (
    component: any,
    prepend: boolean = false
): HTMLElement => {
    const toolbar: any = document.querySelector(".cesium-viewer-toolbar");
    if (!toolbar) throw new Error('Toolbar not found');

    // Create a new button
    const buttonContainer = document.createElement("button");
    buttonContainer.className = "cesium-button cesium-toolbar-button added-button";

    let myButton = new component({ target: buttonContainer });
    
    // Append or prepend the button to the toolbar
    toolbar[prepend ? "prepend" : "appendChild"](buttonContainer);

    // Return the buttonContainer which is the actual element appended to the DOM
    return buttonContainer;
}